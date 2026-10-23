# AGENTS.md

Notes for anyone — human or agent — working on **dustingamble.com**.

Astro 5 static site, no server, no database. Everything is built to flat files
and served by GitHub Pages.

---

## Where to work

| | Path | Branch |
|---|---|---|
| **Main checkout** | `/Users/dustingamble/Documents/New project/dustingamble` | `main` |
| **Session worktrees** | `<main>/.claude/worktrees/<name>/` | `claude/<topic>` |

Claude Code sessions usually get their own **git worktree** — an isolated
checkout sharing one `.git`. Run every command from the worktree you were
given; do not `cd` to the main checkout.

Two consequences worth knowing:

- **The stash stack is shared** across all worktrees. Never use bare
  `git stash` / `git stash pop` — another session may pop your entry. Use a
  throwaway WIP commit instead.
- **`main` moves under you.** Other sessions push to it. If a push is
  rejected as non-fast-forward, fetch, inspect what landed, and merge — do
  not force-push. See *Pushing* below.

---

## Build

```bash
npm install     # first time only
npm run dev     # local dev server with hot reload
npm run build   # static build into dist/
npm run preview # serve the built dist/
```

To check a built page without the dev server:

```bash
python3 -m http.server 4321 --directory dist
```

**If `astro build` hangs with no output**, there is almost certainly a stale
build still running — it happens if a previous build was interrupted. Clear it
and retry:

```bash
pkill -f "astro build"; pkill -f "npm run build"
```

---

## Deploying — how the site gets uploaded

**You do not upload anything by hand. Pushing to `main` is the deploy.**

```
push to main
  → .github/workflows/deploy.yml fires
  → npm ci && npm run build
  → actions/upload-pages-artifact  (uploads ./dist)
  → actions/deploy-pages           (publishes the artifact)
  → live at https://dustingamble.com
```

Takes roughly 60–90 seconds. The custom domain comes from `public/CNAME`,
which Astro copies into `dist/` on every build — **do not delete it.**

### Watching a deploy

```bash
gh run list --branch main --limit 3 \
  --json status,conclusion,displayTitle \
  -q '.[] | "\(.status)/\(.conclusion // "-")  \(.displayTitle)"'
```

Then wait for *your* run, not the previous one:

```bash
until [ "$(gh run list --branch main --limit 1 --json status -q '.[0].status')" = "completed" ]; do sleep 15; done
```

> **Gotcha that has bitten twice:** checking the run list immediately after a
> push shows the *previous* run as `completed/success`, because yours has not
> queued yet. Always confirm the `displayTitle` matches your commit before
> believing a green tick. Then verify the live site actually changed — grep
> the deployed HTML for a string you just added.

### The Pages setting that must not change

```bash
gh api repos/dustin-gamble/dustingamble/pages --jq '{build_type, cname}'
# → {"build_type":"workflow","cname":"dustingamble.com"}
```

`build_type` **must stay `workflow`.** It was once set to `legacy`, which makes
Pages serve the committed repo root instead of the Actions artifact — the site
silently served a months-old snapshot and every newer route 404'd while the
build went green. If whole sections 404 but build and deploy both pass, check
this first.

### Known dead weight

Old build output is still committed at the repo root (`index.html`, `_astro/`,
`about/`, `writing/`, …). It is inert now that Pages serves the artifact, but
it is confusing. Removing it is safe but destructive, so it has been left
alone; do not add to it, and do not commit `dist/`.

---

## Layout

```
src/
  pages/        routes — file path becomes URL
  components/   .astro components
  layouts/      BaseLayout.astro wraps every page
  data/         page-specific content as plain JS modules
  lib/          shared data (merit-badges.js, content.js)
content/        markdown collections — writing, projects, books
public/         copied verbatim to dist/ — images, PDFs, CNAME
```

`public/` is the one to remember: anything dropped in there is served at the
same path. `public/handouts/x.pdf` → `/handouts/x.pdf`.

### Content collections

`content/writing`, `content/projects` and `content/books` are markdown plus an
`index.json` that controls ordering and what appears on the home page. Add the
markdown file **and** register it in that collection's `index.json`, or it
will not show up.

> **Books carry a cover, a summary, and at most a page or two of sample.**
> Never publish book interiors on the site.

---

## Conventions that were learned the hard way

**Astro scoped CSS.** Styles in a `.astro` file get a `data-astro-cid-*`
attribute added to every selector. That means:

- A child component's classes **will not match** your selectors. Wrap them in
  `:global(…)`.
- Astro does **not** unwrap `:global()` nested inside `:has()` — it emits the
  literal text `:global(.foo)`, which is invalid CSS, and the browser throws
  the whole rule away. Wrap the **entire** selector instead:
  `:global(.a .b:has(> .c))`.
- Going global costs you the two attribute selectors, so a global rule can
  **lose** to the scoped one it is meant to override. Repeat a class
  (`.ds.ds`) to win deliberately, and say why in a comment.

**`overflow: hidden` makes `scrollHeight` useless.** It equals `clientHeight`,
so overflow is invisible to it. To detect clipping, measure the deepest
descendant's `getBoundingClientRect().bottom`.

**Measure against the right box.** A child overflowing its own parent is not
necessarily clipped on screen. Measure against the visible stage, not the
inner element — an audit that got this wrong reported 30 broken slides when
the real number was zero.

**Verify media before describing it.** NASA image titles lie. An "Artemis I
Liftoff" was the rocket standing still, an "Orion parachute descent test" was
a capsule being loaded into a plane, and a "Saturn V launch" was a crew
portrait. Open the file and look at it before writing a caption.

**Never guess a URL.** Several invented NASA links 404'd. Search, then check:

```bash
curl -sL -o /dev/null -w '%{http_code}' -A 'Mozilla/5.0' "$URL"
```

Britannica returns **403 to automated requests** — that is bot protection, not
a dead link, and it cannot be distinguished from a 404 this way. Only use
Britannica URLs taken from a trusted source, never guessed.

**Guard every `localStorage` call.** It throws outright in private mode and
with site data blocked. Wrap reads *and* writes in `try/catch` and make the
page work with no stored value.

**`.gitignore` is case-insensitive here.** macOS sets `core.ignoreCase=true`,
so a `*.PNG` rule silently swallowed every `.png`. `git add -A` skipped them
without a word and CI built a site referencing files that were never
committed. After adding assets, confirm they are actually staged.

**Assert your edits.** Scripted `str.replace()` against assumed source
silently no-ops when the source differs. Always assert the match count.

---

## The Space Exploration effort

The largest thing on the site. A full merit-badge course for Troop 308,
Fall 2026.

**Pages**

| Route | What |
|---|---|
| `/scouts/space-exploration-fall-2026/` | The course. Two audiences behind a tab switch. |
| `/scouts/telemetry/` | Ground-station page (telemetry track is deferred) |
| `/scouts/space-exploration-cards/` | 12 printable teaching cards |
| `/scouts/space-lessons/` | Seven animated presentation decks and an offline download |
| `/scouts/space-presentation/` | Make Space Move: five interactive experiments |
| `/scouts/space-lab/` | Scrolling chart playground |
| `/scouts/space-exploration-offline/` | Offline preparation and Monday teaching plan |
| `/merit-badges/space-exploration/` | Badge reference page |

**Content** lives in `src/data/space-exploration-fall-2026.js` — meetings,
six slide decks, the gate, orders, competition, launch day, the Digital
Resource Guide links, and the 26 pioneers. Requirement text itself lives in
`src/lib/merit-badges.js`.

**Interactive components**

`SlideDeck` (presentation shell) · `FlightSim` (launch + recovery) ·
`OrbitSim` (ascent + translunar) · `MotorCutaway` · `RocketPartsDiagram` ·
`LaunchOps` (mission control) · `RocketCalculator` · `Telemetry3D` ·
`PioneerPicker` · `ScoutChecklist` · `CollectorCard` · `CheckoutSheet` ·
`SampleReturnCard` · `BaseDesignSheet` · `SlideArt` · `SlideImage`

### Deep links

Decks sit inside the counselor panel (`hidden` by default) **and** a collapsed
`<details>`, so a bare anchor cannot reach them — the page routes the hash,
opening the view and the `<details>` before scrolling.

| Hash | Does |
|---|---|
| `#deck-how-rockets-work` | opens that deck and scrolls to it |
| `#present-how-rockets-work` | …and starts presenting immediately |
| `#meeting-2` | opens that meeting's run-of-show |
| `#counselor` / `#scout` | picks a view |

Deck ids: `why-we-go`, `how-rockets-work`, `missions`, `build-night`,
`mission-control`, `debrief`. Each deck header has a **Copy link** button.

The `#present-` form waits 250ms after revealing before clicking Present — a
deck that measures itself while its panel is still hidden lays every slide out
against a zero-size stage.

### Handouts

Printables live in `public/handouts/` and are listed on the counselor side:

- `space-exploration-scout-checklist.pdf` — per Scout, all 8 requirements
- `space-exploration-pick-your-pioneer.pdf` — per Scout, 26 choices
- `space-exploration-collector-card-template.pdf` — per Scout, req 2 card
- `space-exploration-counselor-tracker.pdf` — roster grid, 10 Scouts

The pioneer picker and the Scout checklist also exist as **fillable web
versions** that save to `localStorage`. Their data must stay in sync with the
PDFs — same 26 people, same numbering — or Scouts holding paper and Scouts on
a phone will be looking at different things.

### Advancement rules that constrain the content

- A unit or counselor **may not add to or subtract from** requirements
  (Guide to Advancement 7.0.1.4). Troop-specific rules — the kit gate, the
  "objective must produce a number" rule — are labelled as troop rules, not
  badge requirements.
- Group instruction is fine; **group credit is not**. Requirement 4 says
  "discuss and *demonstrate*", which one Scout cannot do for the patrol.
  `CheckoutSheet` carries the per-Scout prompts for this.
- **Check requirement wording against scouting.org**, not third-party sites.
  A review once asked for req 8 to become "two careers" citing a pre-2025
  source; the current standard wording is one career.

### Slide decks

One slide = one viewport, `overflow: hidden`, never `auto`. Slides with a
photograph use a two-column projection layout; heavy component slides
(`ds-heavy`) are excluded and take the full width. A `fit()` guard scales any
slide that still overflows, down to a 0.58 floor.

After changing deck content or layout, re-run the overflow audit at
**1600×900, 1280×720 and 1024×768** and confirm zero clipped slides and zero
presenter notes leaking onto the projection.

---

## Still open

- **`noindex`** — the series page is publicly indexable. Raised several times,
  never decided.
- **Rocket math chart** — requested (specific impulse, drag, the rocket
  equation, a quick calculator); not built.


### Animated lesson exports

`src/data/space-presentations.js` adds animated demos to copies of the original
decks. `SpaceDeckTheme` supplies projection styling. Original course content
and counselor notes remain in the main course; notes never appear in projection.

After changing a lesson, build and refresh the public portable download:

```bash
npm run build
python3 scripts/package-space-lessons.py /tmp/space-lessons-export --zip public/handouts/space-lessons-offline.zip
npm run build
```

The exported HTML embeds its code and photos, and opens from `index.html`
without a server. It excludes downloaded videos; use the local-video picker.
The personal teaching kit's MP4 files must not be added to the public repo.
`scripts/package-space-offline.py` packages a full private kit; its video folder
is a separate argument. `scripts/package-space-show.py` exports just the show.

Audit all 58 slides at 1600×900, 1280×720 and 1024×768. Also check the four
crew pages and Countdown/Flight Card tabs. Pause/replay must affect experiments
and simulations. Each local video should pause when leaving its slide.
