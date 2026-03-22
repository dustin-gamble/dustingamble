import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve('/Users/dustingamble/Documents/New project/.codex-work/dustingamble');
const inputPath = path.join(repoRoot, 'private-data/troop308/Troop0308BMBIPReport_current.csv');
const outputPath = path.join(repoRoot, 'public/data/troop308/scout-tracker-current.json');

const EAGLE_REQUIREMENTS = [
  { label: 'First Aid', options: ['First Aid'] },
  { label: 'Citizenship in Society', options: ['Citizenship in Society'] },
  { label: 'Citizenship in the Community', options: ['Citizenship in the Community'] },
  { label: 'Citizenship in the Nation', options: ['Citizenship in the Nation'] },
  { label: 'Citizenship in the World', options: ['Citizenship in the World'] },
  { label: 'Communication', options: ['Communication'] },
  { label: 'Cooking', options: ['Cooking'] },
  { label: 'Personal Fitness', options: ['Personal Fitness'] },
  { label: 'Personal Management', options: ['Personal Management'] },
  { label: 'Camping', options: ['Camping'] },
  { label: 'Family Life', options: ['Family Life'] },
  { label: 'Emergency Preparedness or Lifesaving', options: ['Emergency Preparedness', 'Lifesaving'] },
  { label: 'Environmental Science or Sustainability', options: ['Environmental Science', 'Sustainability'] },
  { label: 'Swimming or Hiking or Cycling', options: ['Swimming', 'Hiking', 'Cycling'] }
];

const SECTION_LABELS = {
  'In-Progress Merit Badge': 'inProgress',
  'MBC Approved Merit Badge': 'mbcApproved',
  'Approved or Awarded Merit Badge': 'earned'
};

const STATUS_WEIGHT = {
  missing: 0,
  inProgress: 1,
  mbcApproved: 2,
  earned: 3
};

const BADGE_NAME_MAP = {
  'Cit. in Nation': 'Citizenship in the Nation',
  'Cit. in World': 'Citizenship in the World',
  'Cit. in Comm.': 'Citizenship in the Community',
  'Emergency Prep.': 'Emergency Preparedness',
  'Pers. Fitness': 'Personal Fitness',
  'Personal Mgmt.': 'Personal Management',
  'Enviro. Science': 'Environmental Science',
  'Soil and Water Con.': 'Soil and Water Conservation',
  'Citizenship in Society': 'Citizenship in Society'
};

function parseCSVLine(line) {
  const cells = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === ',' && !inQuotes) {
      cells.push(current);
      current = '';
      continue;
    }
    current += char;
  }

  cells.push(current);
  return cells.map((cell) => cell.trim());
}

function canonicalizeBadgeName(rawName) {
  const withoutYear = rawName.replace(/\s*\(\d{4}\)\s*$/u, '').trim();
  return BADGE_NAME_MAP[withoutYear] || withoutYear;
}

function parseReport(rawCsv) {
  const normalized = rawCsv.replace(/\r\n?/gu, '\n');
  const lines = normalized.split('\n');
  let generatedAt = '';
  let section = '';
  let headers = null;
  const rows = [];

  for (const line of lines) {
    if (!line.trim()) continue;
    if (line.startsWith('Generated:')) {
      generatedAt = line.replace('Generated:', '').trim();
      continue;
    }

    const cells = parseCSVLine(line);
    const first = cells[0] || '';

    if (SECTION_LABELS[first]) {
      section = SECTION_LABELS[first];
      headers = null;
      continue;
    }

    if (first === 'Member ID') {
      headers = cells;
      continue;
    }

    if (!section || !headers) continue;

    const row = Object.fromEntries(headers.map((header, index) => [header, cells[index] || '']));

    if (!row['Scout First'] || row['Scout First'] === 'Scout First') continue;
    if (!row['Scout Last'] || row['Scout Last'] === 'Scout Last') continue;
    if (!row['Merit Badge'] || row['Merit Badge'] === 'Merit Badge') continue;

    rows.push({
      section,
      memberId: row['Member ID'] || '',
      firstName: row['Scout First'] || '',
      lastName: row['Scout Last'] || '',
      rank: row['Rank'] || '',
      badge: canonicalizeBadgeName(row['Merit Badge'] || '')
    });
  }

  return { generatedAt, rows };
}

function aggregate(rows) {
  const scouts = new Map();
  for (const row of rows) {
    const key = row.memberId || `${row.firstName} ${row.lastName}`.trim();
    if (!scouts.has(key)) {
      scouts.set(key, {
        firstName: row.firstName.trim(),
        rank: row.rank || '',
        badges: new Map()
      });
    }

    const scout = scouts.get(key);
    if (!scout.rank && row.rank) scout.rank = row.rank;
    const existing = scout.badges.get(row.badge);
    if (!existing || STATUS_WEIGHT[row.section] > STATUS_WEIGHT[existing]) {
      scout.badges.set(row.badge, row.section);
    }
  }

  return [...scouts.values()];
}

function requirementState(scout, requirement) {
  const best = requirement.options
    .map((badge) => ({ badge, status: scout.badges.get(badge) || 'missing' }))
    .sort((a, b) => STATUS_WEIGHT[b.status] - STATUS_WEIGHT[a.status])[0];
  return best.status;
}

function publicIdFactory() {
  const counts = new Map();
  return (firstName) => {
    const slug = firstName.toLowerCase().replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '') || 'scout';
    const next = (counts.get(slug) || 0) + 1;
    counts.set(slug, next);
    return `${slug}-${next}`;
  };
}

const raw = fs.readFileSync(inputPath, 'utf8');
const report = parseReport(raw);
const aggregated = aggregate(report.rows);
const makeId = publicIdFactory();

const scouts = aggregated
  .sort((a, b) => a.firstName.localeCompare(b.firstName))
  .map((scout) => {
    const badges = [...scout.badges.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([badge, status]) => ({ badge, status }));

    const eagleStates = EAGLE_REQUIREMENTS.map((requirement) => ({
      label: requirement.label,
      status: requirementState(scout, requirement)
    }));

    return {
      id: makeId(scout.firstName),
      firstName: scout.firstName,
      rank: scout.rank,
      badges,
      eagleStates
    };
  });

const output = {
  generatedAt: report.generatedAt,
  sourceKind: 'sanitized-snapshot',
  eagleRequirementCount: EAGLE_REQUIREMENTS.length,
  eagleRequirementLabels: EAGLE_REQUIREMENTS.map((item) => item.label),
  scouts
};

fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Wrote ${outputPath}`);
console.log(`Scouts: ${scouts.length}`);
