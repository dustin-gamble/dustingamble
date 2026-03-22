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

const RANK_GROUPS = {
  all: () => true,
  newScout: (rank) => ['', 'Scout', 'Tenderfoot', 'Second Class', 'First Class'].includes(rank || ''),
  eaglePath: (rank) => ['Star', 'Life'].includes(rank || ''),
  older: (rank) => ['First Class', 'Star', 'Life', 'Eagle'].includes(rank || '')
};

const RANK_ORDER = {
  '': 0,
  Scout: 1,
  Tenderfoot: 2,
  'Second Class': 3,
  'First Class': 4,
  Star: 5,
  Life: 6,
  Eagle: 7
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
    if (row['Merit Badge'].includes('@') && !row['Scout First']) continue;

    rows.push({
      section,
      memberId: row['Member ID'] || '',
      firstName: row['Scout First'] || '',
      lastName: row['Scout Last'] || '',
      rank: row['Rank'] || '',
      location: row['Location'] || '',
      badgeRaw: row['Merit Badge'] || '',
      badge: canonicalizeBadgeName(row['Merit Badge'] || ''),
      dateCompleted: row['Date Completed'] || '',
      dateUnitApproved: row['Date Unit Approved'] || '',
      requirements: row['Requirements'] || ''
    });
  }

  return { generatedAt, rows };
}

function aggregateScoutData(rows) {
  const scouts = new Map();

  for (const row of rows) {
    const scoutKey = row.memberId || `${row.firstName} ${row.lastName}`.trim();
    if (!scouts.has(scoutKey)) {
      scouts.set(scoutKey, {
        key: scoutKey,
        memberId: row.memberId,
        firstName: row.firstName,
        lastName: row.lastName,
        name: row.firstName.trim(),
        rank: row.rank,
        location: row.location,
        badges: new Map()
      });
    }

    const scout = scouts.get(scoutKey);
    if (!scout.rank && row.rank) scout.rank = row.rank;
    if (!scout.location && row.location) scout.location = row.location;

    const existing = scout.badges.get(row.badge);
    if (!existing || STATUS_WEIGHT[row.section] > STATUS_WEIGHT[existing.status]) {
      scout.badges.set(row.badge, {
        badge: row.badge,
        raw: row.badgeRaw,
        status: row.section,
        dateCompleted: row.dateCompleted,
        dateUnitApproved: row.dateUnitApproved,
        requirements: row.requirements
      });
    }
  }

  return [...scouts.values()].map((scout) => enrichScout(scout));
}

function getRequirementState(scout, requirement) {
  const candidateBadges = requirement.options
    .map((badge) => scout.badges.get(badge))
    .filter(Boolean)
    .sort((a, b) => STATUS_WEIGHT[b.status] - STATUS_WEIGHT[a.status]);

  const best = candidateBadges[0];
  if (!best) {
    return { label: requirement.label, status: 'missing', badge: '' };
  }

  return {
    label: requirement.label,
    status: best.status,
    badge: best.badge
  };
}

function buildSuggestedRoute(scout) {
  const started = scout.remainingRequirements
    .filter((item) => item.status === 'mbcApproved' || item.status === 'inProgress')
    .map((item) => item.label);
  const missing = scout.remainingRequirements
    .filter((item) => item.status === 'missing')
    .map((item) => item.label);

  if (started.length === 0 && missing.length === 0) {
    return 'All current Eagle-required merit badge categories are complete. Shift attention to leadership, project timing, and paperwork.';
  }

  const finishStarted = started.length > 0
    ? `Finish the badges already underway: ${started.slice(0, 3).join(', ')}.`
    : '';

  if (['', 'Scout', 'Tenderfoot', 'Second Class'].includes(scout.rank || '')) {
    const earlyFocus = [
      'First Aid',
      'Camping',
      'Cooking',
      'Swimming or Hiking or Cycling'
    ].filter((label) => missing.includes(label));

    if (earlyFocus.length > 0) {
      return `Stay in the first-year lane. Focus next on ${earlyFocus.slice(0, 3).join(', ')} before stacking the discussion-heavy badges.`;
    }

    return finishStarted || 'Stay in the first-year lane and keep rank skills moving alongside one or two Eagle badges.';
  }

  if (scout.rank === 'First Class') {
    return finishStarted || `Use First Class as the platform for Eagle work. Start ${missing.slice(0, 3).join(', ')} next.`;
  }

  if (scout.rank === 'Star') {
    return finishStarted || `Prioritize the remaining Eagle-required badges before adding more electives: ${missing.slice(0, 3).join(', ')}.`;
  }

  if (scout.rank === 'Life') {
    return finishStarted || `Close the remaining Eagle-required badges first: ${missing.slice(0, 2).join(', ')}. Then shift to Eagle paperwork and project timing.`;
  }

  return finishStarted || (missing.length > 0
    ? `Next best route: ${missing.slice(0, 3).join(', ')}.`
    : 'All current Eagle-required merit badge categories are complete.');
}

function enrichScout(scout) {
  const badgeList = [...scout.badges.values()].sort((a, b) => a.badge.localeCompare(b.badge));
  const earnedBadges = badgeList.filter((badge) => badge.status === 'earned');
  const mbcApprovedBadges = badgeList.filter((badge) => badge.status === 'mbcApproved');
  const inProgressBadges = badgeList.filter((badge) => badge.status === 'inProgress');

  const eagleStates = EAGLE_REQUIREMENTS.map((requirement) => getRequirementState(scout, requirement));
  const remainingRequirements = eagleStates.filter((item) => item.status !== 'earned');

  return {
    ...scout,
    badgeList,
    earnedBadges,
    mbcApprovedBadges,
    inProgressBadges,
    eagleStates,
    earnedEagleCount: eagleStates.filter((item) => item.status === 'earned').length,
    startedEagleCount: eagleStates.filter((item) => item.status === 'mbcApproved' || item.status === 'inProgress').length,
    remainingRequirements,
    suggestedRoute: buildSuggestedRoute({ ...scout, remainingRequirements })
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/gu, '&amp;')
    .replace(/</gu, '&lt;')
    .replace(/>/gu, '&gt;')
    .replace(/"/gu, '&quot;')
    .replace(/'/gu, '&#39;');
}

function formatSourceDate(value) {
  if (!value) return 'Unknown';
  const parts = value.match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{1,2}:\d{2}:\d{2})/u);
  if (!parts) return value;
  const [, month, day, year, time] = parts;
  return `${year}-${month}-${day} ${time}`;
}

function renderRequirementPills(items) {
  if (!items.length) {
    return '<span class="tracker-pill tracker-pill--earned">All current Eagle-required badges earned</span>';
  }

  return items
    .map((item) => {
      const statusLabel = item.status === 'mbcApproved'
        ? 'MBC approved'
        : item.status === 'inProgress'
          ? 'In progress'
          : 'Missing';
      return `<span class="tracker-pill tracker-pill--${item.status}">${escapeHtml(item.label)} · ${escapeHtml(statusLabel)}</span>`;
    })
    .join('');
}

function renderBadgeList(badges, emptyText) {
  if (!badges.length) return `<p class="tracker-empty">${escapeHtml(emptyText)}</p>`;
  return `<ul>${badges.map((badge) => `<li>${escapeHtml(badge.badge)}</li>`).join('')}</ul>`;
}

function renderScoutRows(scouts) {
  return scouts.map((scout) => `
    <tr>
      <td>
        <strong>${escapeHtml(scout.name)}</strong>
      </td>
      <td>${escapeHtml(scout.rank || 'Not listed')}</td>
      <td>
        <strong>${scout.earnedBadges.length}</strong> earned
        <div class="tracker-subtext">${scout.mbcApprovedBadges.length} MBC approved · ${scout.inProgressBadges.length} in progress</div>
      </td>
      <td>
        <strong>${scout.earnedEagleCount}/${EAGLE_REQUIREMENTS.length}</strong>
        <div class="tracker-subtext">${scout.startedEagleCount} started · ${scout.remainingRequirements.filter((item) => item.status === 'missing').length} still missing</div>
      </td>
      <td><div class="tracker-pill-wrap">${renderRequirementPills(scout.remainingRequirements)}</div></td>
      <td>${escapeHtml(scout.suggestedRoute)}</td>
      <td>
        <details class="tracker-details">
          <summary>Open</summary>
          <div class="tracker-detail-grid">
            <section>
              <h4>Earned</h4>
              ${renderBadgeList(scout.earnedBadges, 'No earned badges in this report.')}
            </section>
            <section>
              <h4>MBC approved</h4>
              ${renderBadgeList(scout.mbcApprovedBadges, 'No counselor-approved badges in this report.')}
            </section>
            <section>
              <h4>In progress</h4>
              ${renderBadgeList(scout.inProgressBadges, 'No in-progress badges in this report.')}
            </section>
          </div>
        </details>
      </td>
    </tr>
  `).join('');
}

function renderSummary(root, report, scouts) {
  const summary = root.querySelector('#tracker-summary');
  if (!summary) return;

  const totalEarned = scouts.reduce((sum, scout) => sum + scout.earnedBadges.length, 0);
  const totalStarted = scouts.reduce((sum, scout) => sum + scout.inProgressBadges.length + scout.mbcApprovedBadges.length, 0);
  const closeToEagle = scouts.filter((scout) => scout.remainingRequirements.length <= 3).length;

  summary.innerHTML = `
    <article class="card compact">
      <h3>${scouts.length} Scouts</h3>
      <p>Parsed from the current merit badge export.</p>
    </article>
    <article class="card compact">
      <h3>${totalEarned} Earned Badges</h3>
      <p>${totalStarted} more badges are either counselor-approved or in progress.</p>
    </article>
    <article class="card compact">
      <h3>${closeToEagle} Close to Eagle</h3>
      <p>Scouts with three or fewer current Eagle-required categories left.</p>
    </article>
  `;

  const sourceNote = root.querySelector('#tracker-source-note');
  if (sourceNote) {
    sourceNote.innerHTML = `Source: <strong>${escapeHtml(report.sourceLabel)}</strong> · Generated: <strong>${escapeHtml(formatSourceDate(report.generatedAt))}</strong>`;
  }
}

function filterScouts(scouts, searchTerm, rankFilter) {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filterFn = RANK_GROUPS[rankFilter] || RANK_GROUPS.all;

  return scouts
    .filter((scout) => filterFn(scout.rank || ''))
    .filter((scout) => {
      if (!normalizedSearch) return true;
      return scout.name.toLowerCase().includes(normalizedSearch);
    })
    .sort((a, b) => {
      const rankDelta = (RANK_ORDER[a.rank || ''] ?? 99) - (RANK_ORDER[b.rank || ''] ?? 99);
      if (rankDelta !== 0) return rankDelta;
      return a.name.localeCompare(b.name);
    });
}

async function readLocalFile(file) {
  return file.text();
}

async function fetchBundledCsv(url) {
  const response = await fetch(url, { cache: 'no-cache' });
  if (!response.ok) throw new Error(`Unable to load ${url}`);
  return response.text();
}

function mountTracker() {
  const root = document.querySelector('#troop308-tracker');
  if (!root) return;
  if (root.dataset.trackerMounted === 'true') return;
  root.dataset.trackerMounted = 'true';

  const defaultCsvUrl = root.dataset.defaultCsvUrl;
  const tbody = root.querySelector('#tracker-body');
  const searchInput = root.querySelector('#tracker-search');
  const rankFilter = root.querySelector('#tracker-rank-filter');
  const uploadInput = root.querySelector('#tracker-local-file');
  const resetButton = root.querySelector('#tracker-reset');
  const emptyState = root.querySelector('#tracker-empty-state');

  let allScouts = [];

  function rerender() {
    const visibleScouts = filterScouts(allScouts, searchInput.value, rankFilter.value);
    tbody.innerHTML = renderScoutRows(visibleScouts);
    emptyState.hidden = visibleScouts.length !== 0;
  }

  async function loadFromCsvText(rawCsv, sourceLabel) {
    const report = parseReport(rawCsv);
    allScouts = aggregateScoutData(report.rows);
    renderSummary(root, { ...report, sourceLabel }, allScouts);
    rerender();
  }

  async function loadBundledCsv() {
    const csvText = await fetchBundledCsv(defaultCsvUrl);
    await loadFromCsvText(csvText, 'Bundled tracker CSV');
  }

  searchInput.addEventListener('input', rerender);
  rankFilter.addEventListener('change', rerender);

  uploadInput.addEventListener('change', async () => {
    const [file] = uploadInput.files || [];
    if (!file) return;
    const csvText = await readLocalFile(file);
    await loadFromCsvText(csvText, `Local file: ${file.name}`);
  });

  resetButton.addEventListener('click', async () => {
    uploadInput.value = '';
    await loadBundledCsv();
  });

  loadBundledCsv().catch((error) => {
    const sourceNote = root.querySelector('#tracker-source-note');
    if (sourceNote) {
      sourceNote.textContent = `Tracker load failed: ${error.message}`;
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountTracker, { once: true });
} else {
  mountTracker();
}

document.addEventListener('astro:page-load', mountTracker);
