# AGENTS.md — lab-portfolio

Operating instructions for any coding agent (Cursor, Claude Code, Copilot, etc.)
working in this repository. This file is the source of truth; update it
whenever a rule below stops matching reality.

## Project purpose

React SPA portfolio site for a university mechanical engineering research lab
(digital/smart manufacturing). Deployed as a static build to GitHub Pages via
the `gh-pages` package. Content is currently mid-redesign: moving from
CRA/Bootstrap placeholder content to a "年輕活潑智慧工廠" (young, energetic,
smart-factory) light-theme visual identity while keeping existing data/logic
where practical. See `docs/redesign/` (if present) for the design brief.

## Stack

- React 18 + `react-router-dom` v6, scaffolded with Create React App
  (`react-scripts` v5)
- Bootstrap 5 + `bootstrap-icons` for styling
- `gh-pages` for deployment
- Node: repo has no `.nvmrc`/`engines` field. CI (`.github/workflows/deploy.yaml`)
  pins Node 12.x, which is older than what `react-scripts@5` officially
  supports (Node 14+). Local dev has run cleanly on Node 22. Do not assume the
  CI matrix version is correct — see `docs/failures/ci-node-version-mismatch.md`.

## Setup / verify / build

```bash
npm install
npm start            # dev server, http://localhost:3000
npm test -- --watchAll=false   # CI-style single run
npm run build         # production build to build/
npm run desploy        # deploy build/ to gh-pages (NOT "npm run deploy" — see below)
```

**Known baseline test failure**: `npm test` fails out of the box because
`src/App.test.js` still asserts on the original CRA boilerplate ("learn react"
link) which no longer exists in `App.js`. This is a pre-existing failure, not
something an agent's change introduced. See
`docs/failures/baseline-test-failure.md`. Do not "fix" this by reverting
`App.js`; either update or delete the stale test as part of any change that
touches `App.js`.

## Critical, repo-specific rules

1. **JSX attribute: always `class=`, never `className=`.**
   The project intentionally uses `class=` (not the standard React
   `className=`) throughout, and this is documented as the convention in the
   repo's own contributor notes. In practice this is already violated in 4
   files (`App.js`, `Member.js`, `Project.js`, `Sidebar.js` — 32 occurrences
   of `className=` as of this writing). When editing any of these files, fix
   `className=` to `class=` in the lines you touch; don't do a blanket
   find/replace across the whole file in an unrelated PR. See
   `docs/failures/jsx-class-attribute-drift.md` and
   `scripts/check_jsx_class_attr.sh`.

2. **`npm run desploy` is the deploy script name — this is intentional legacy
   naming, not a typo to "fix".** `package.json` defines `"desploy": "gh-pages
   -d build"`. `.github/workflows/deploy.yaml`'s `deploy` job currently runs
   `npm run deploy`, which **does not exist** and will fail if that job is
   ever actually invoked as written. Do not silently rename the npm script to
   `deploy` to make the workflow pass — that changes a name other tooling/docs
   may reference. Instead, fix the workflow step to call `npm run desploy`, or
   flag it for the maintainer to decide. See
   `docs/failures/ci-deploy-script-mismatch.md`.

3. **`Sidebar.js` exists but is not wired into the app.** `App.js` does not
   import or render it, and `Header.js` has a commented-out toggle button for
   it. Treat it as intentionally shelved, not dead code to delete, unless the
   task explicitly asks to remove or finish it.

4. **Commented-out nav links in `Header.js` are not dead code.** Links to
   研究方向 / 研究計畫 / 實驗室照片 are commented out but their routes
   (`/`, `/project`, `/photo`) still exist in `App.js`. Confirm with the
   maintainer/task spec before deleting or re-enabling them — don't assume
   either direction silently.

5. **All user-facing copy is Traditional Chinese (繁體中文).** Keep new copy
   consistent with the existing tone; bilingual (中/英) headings are used on
   some pages (e.g. lab intro text) — follow the existing pattern per page
   rather than inventing a new one.

6. **`Home.js` currently renders unrelated CRA/Bootstrap example placeholder
   content** ("Data collection is under construction..." / Apple marketing
   copy example), not real lab content. Any redesign work on `Home.js` should
   replace this placeholder — it is not real content to preserve.

7. **Lab name — resolved.** The canonical name is **先進數位智能製造研究室
   / Advanced Digital Smart Manufacturing Laboratory (ADSM)**, matching
   `README.md`/`About.js`. Earlier draft material referencing "TING Lab" does
   not apply to this repo — do not reintroduce it. PI credentials (Ph.D. in
   Mechanical Engineering from Chung Yuan Christian University; research
   areas: smart manufacturing, AI, IoT, big data analytics, Industry 4.0
   applications, real-time monitoring, smart system platform development,
   machine tools) are canonical content for `Home.js` — see
   `docs/redesign/light-theme-brief.md` on the redesign branch for the full
   copy.

## Testing expectations

- Any change to `App.js`, routing, or page components should be checked with
  `npm test -- --watchAll=false` and `npm run build` before finishing. Note
  the known pre-existing failure above — a new failure is anything beyond
  that one.
- No test framework beyond CRA's default Jest + Testing Library is configured;
  don't introduce a second one without discussion.

## PR / commit conventions

No enforced commit message convention was found in repo history (mixed style:
short imperative messages, version tags like `v1.1.2`). Prefer clear,
imperative, English or Chinese commit subjects consistent with recent history;
don't invent a new convention (e.g. Conventional Commits) without asking.

## Branching / workflow for this redesign effort

- `master` is the actual default/active branch (real commit history). An
  additional `main` branch exists on the remote but only contains the
  original CRA `create-react-app` initial commit — it is not kept in sync and
  should be treated as stale, not a branch to merge into.
- `gh-pages` is a generated/build branch (output of `npm run desploy`) — never
  hand-edit it.
- Feature work for the light-theme redesign happens on
  `feature/light-theme-redesign`, isolated via `git worktree` under
  `.worktrees/` (gitignored). Do not commit directly to `master` for redesign
  work; open the change on the feature branch and let the maintainer merge.

## How to record a new failure or decision

- New recurring or high-risk failure → add a file under `docs/failures/`
  following the template already used there (Summary / Root Cause /
  Prevention / Evidence).
- New architectural or process decision → add a file under `docs/decisions/`
  (create the folder if it doesn't exist yet).
- Update this file directly for anything that changes an always-on rule above.
