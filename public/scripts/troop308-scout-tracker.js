/* Troop 308 Eagle Progress Tracker
   Reads the sanitized JSON snapshot (first names only, no PII).
   Renders scout cards with badge mini-cards and click-to-expand detail. */

const RANK_ORDER = {
  '': 0, Scout: 1, Tenderfoot: 2, 'Second Class': 3,
  'First Class': 4, Star: 5, Life: 6, Eagle: 7
};

function esc(v) {
  return String(v)
    .replace(/&/gu, '&amp;').replace(/</gu, '&lt;')
    .replace(/>/gu, '&gt;').replace(/"/gu, '&quot;')
    .replace(/'/gu, '&#39;');
}

function statusLabel(s) {
  if (s === 'earned') return 'Earned';
  if (s === 'mbcApproved') return 'MBC Approved';
  if (s === 'inProgress') return 'In Progress';
  return 'Not Started';
}

function badgeCardClass(s) {
  if (s === 'earned') return 'badge-card badge-card--earned';
  if (s === 'inProgress' || s === 'mbcApproved') return 'badge-card badge-card--inProgress';
  return 'badge-card badge-card--missing';
}

function pillClass(s) {
  if (s === 'earned') return 'detail-pill detail-pill--earned';
  if (s === 'inProgress' || s === 'mbcApproved') return 'detail-pill detail-pill--inProgress';
  return 'detail-pill detail-pill--missing';
}

function suggestedRoute(scout) {
  const started = scout.eagleStates.filter((e) => e.status === 'inProgress' || e.status === 'mbcApproved').map((e) => e.label);
  const missing = scout.eagleStates.filter((e) => e.status === 'missing').map((e) => e.label);

  if (!started.length && !missing.length) {
    return 'All Eagle-required badges complete — focus on leadership, project, and paperwork.';
  }

  const finish = started.length ? `Finish what\u2019s underway: ${started.slice(0, 3).join(', ')}.` : '';
  const rank = scout.rank || '';

  if (['', 'Scout', 'Tenderfoot', 'Second Class'].includes(rank)) {
    const early = ['First Aid', 'Camping', 'Cooking', 'Swimming or Hiking or Cycling'].filter((l) => missing.includes(l));
    if (early.length) return `First-year lane \u2014 focus on ${early.slice(0, 3).join(', ')} next.`;
    return finish || 'Stay in the first-year lane alongside one or two Eagle badges.';
  }
  if (rank === 'First Class') return finish || `Platform for Eagle work \u2014 start ${missing.slice(0, 3).join(', ')} next.`;
  if (rank === 'Star') return finish || `Prioritize remaining Eagle badges: ${missing.slice(0, 3).join(', ')}.`;
  if (rank === 'Life') return finish || `Close remaining: ${missing.slice(0, 2).join(', ')}. Then Eagle paperwork.`;
  return finish || (missing.length ? `Next: ${missing.slice(0, 3).join(', ')}.` : 'All Eagle badges complete.');
}

function progressRing(earnedCount, total) {
  const pct = total > 0 ? earnedCount / total : 0;
  const r = 14;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct);
  // Count both earned and in-progress for a lighter ring
  return `<div class="progress-ring">
    <svg viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="${r}" fill="none" stroke="var(--line)" stroke-width="3.5"></circle>
      <circle cx="18" cy="18" r="${r}" fill="none" stroke="#2e7d4f" stroke-width="3.5"
        stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"></circle>
    </svg>
    <span class="progress-ring-text">${earnedCount}/${total}</span>
  </div>`;
}

function renderScoutCard(scout) {
  const earnedCount = scout.eagleStates.filter((e) => e.status === 'earned').length;
  const startedCount = scout.eagleStates.filter((e) => e.status === 'inProgress' || e.status === 'mbcApproved').length;
  const total = scout.eagleStates.length;

  const badgeCards = scout.eagleStates.map((e) => `
    <div class="${badgeCardClass(e.status)}">
      <span class="badge-card-label">${esc(e.label)}</span>
      <span class="badge-card-status">${esc(statusLabel(e.status))}</span>
    </div>
  `).join('');

  return `<div class="scout-row" data-scout-id="${esc(scout.id)}">
    <div class="scout-row-header">
      <h3 class="scout-name">${esc(scout.firstName)}</h3>
      <span class="scout-rank">${esc(scout.rank || 'New Scout')}</span>
      <div class="scout-progress-summary">
        ${progressRing(earnedCount + startedCount, total)}
        <span>${earnedCount} earned · ${startedCount} started</span>
      </div>
    </div>
    <div class="badge-card-grid">${badgeCards}</div>
  </div>`;
}

function renderDetail(scout) {
  const earned = scout.badges.filter((b) => b.status === 'earned');
  const inProgress = scout.badges.filter((b) => b.status === 'inProgress' || b.status === 'mbcApproved');
  const eagleRemaining = scout.eagleStates.filter((e) => e.status !== 'earned');
  const eagleEarned = scout.eagleStates.filter((e) => e.status === 'earned');
  const route = suggestedRoute(scout);

  const earnedPills = earned.length
    ? earned.map((b) => `<span class="detail-pill detail-pill--earned">${esc(b.badge)}</span>`).join('')
    : '<span style="color:var(--muted);font-style:italic">None yet</span>';

  const ipPills = inProgress.length
    ? inProgress.map((b) => `<span class="${pillClass(b.status)}">${esc(b.badge)}</span>`).join('')
    : '<span style="color:var(--muted);font-style:italic">None</span>';

  const remainPills = eagleRemaining.length
    ? eagleRemaining.map((e) => `<span class="${pillClass(e.status)}">${esc(e.label)} · ${esc(statusLabel(e.status))}</span>`).join('')
    : '<span class="detail-pill detail-pill--earned">All Eagle badges earned!</span>';

  return `<div class="detail-card">
    <div class="detail-header">
      <h2>${esc(scout.firstName)}</h2>
      <span class="detail-rank">${esc(scout.rank || 'New Scout')}</span>
      <button class="detail-close" type="button">&times; Close</button>
    </div>
    <div class="detail-stats">
      <div class="detail-stat-card">
        <span class="detail-stat-value">${earned.length}</span>
        <span class="detail-stat-label">Badges Earned</span>
      </div>
      <div class="detail-stat-card">
        <span class="detail-stat-value">${inProgress.length}</span>
        <span class="detail-stat-label">In Progress</span>
      </div>
      <div class="detail-stat-card">
        <span class="detail-stat-value">${eagleEarned.length}/${scout.eagleStates.length}</span>
        <span class="detail-stat-label">Eagle Badges</span>
      </div>
      <div class="detail-stat-card">
        <span class="detail-stat-value">${eagleRemaining.length}</span>
        <span class="detail-stat-label">Eagle Left</span>
      </div>
    </div>
    <div class="detail-section">
      <h3>Eagle Badges Still Needed</h3>
      <div class="detail-badge-grid">${remainPills}</div>
    </div>
    <div class="detail-section">
      <h3>All Earned Badges</h3>
      <div class="detail-badge-grid">${earnedPills}</div>
    </div>
    <div class="detail-section">
      <h3>In Progress</h3>
      <div class="detail-badge-grid">${ipPills}</div>
    </div>
    <div class="detail-route">
      <strong>Suggested Next Steps</strong>
      ${esc(route)}
    </div>
  </div>`;
}

function mountTracker() {
  const root = document.querySelector('#tracker-root');
  if (!root) return;
  if (root.dataset.trackerMounted === 'true') return;
  root.dataset.trackerMounted = 'true';

  const jsonUrl = root.dataset.jsonUrl;
  const listEl = root.querySelector('#scout-list');
  const detailEl = root.querySelector('#scout-detail');
  const statusEl = root.querySelector('#tracker-status');

  let data = null;
  let selectedId = null;

  function selectScout(id) {
    selectedId = (selectedId === id) ? null : id;

    listEl.querySelectorAll('.scout-row').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.scoutId === selectedId);
    });

    if (!selectedId) {
      detailEl.hidden = true;
      detailEl.innerHTML = '';
      return;
    }

    const scout = data.scouts.find((s) => s.id === selectedId);
    if (!scout) return;

    detailEl.hidden = false;
    detailEl.innerHTML = renderDetail(scout);

    // Insert detail card right after the clicked scout row
    const activeRow = listEl.querySelector(`.scout-row[data-scout-id="${selectedId}"]`);
    if (activeRow && activeRow.nextSibling) {
      listEl.insertBefore(detailEl, activeRow.nextSibling);
    } else if (activeRow) {
      listEl.appendChild(detailEl);
    }

    detailEl.querySelector('.detail-close').addEventListener('click', () => selectScout(null));
    detailEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  async function load() {
    try {
      const resp = await fetch(jsonUrl, { cache: 'no-cache' });
      if (!resp.ok) throw new Error(`Failed to load tracker data`);
      data = await resp.json();

      data.scouts.sort((a, b) => {
        const rd = (RANK_ORDER[b.rank || ''] ?? -1) - (RANK_ORDER[a.rank || ''] ?? -1);
        return rd !== 0 ? rd : a.firstName.localeCompare(b.firstName);
      });

      listEl.innerHTML = data.scouts.map(renderScoutCard).join('');

      listEl.addEventListener('click', (e) => {
        const row = e.target.closest('.scout-row');
        if (!row) return;
        selectScout(row.dataset.scoutId);
      });

      statusEl.textContent = `${data.scouts.length} scouts · ${data.eagleRequirementCount} Eagle-required badges`;
    } catch (err) {
      statusEl.textContent = `Load failed: ${err.message}`;
    }
  }

  load();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountTracker, { once: true });
} else {
  mountTracker();
}

document.addEventListener('astro:page-load', mountTracker);
