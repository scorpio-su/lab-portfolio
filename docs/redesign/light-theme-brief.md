# Redesign brief — 年輕活潑智慧工廠（淺色版）

Read `AGENTS.md` at repo root first — it has repo-specific rules (`class=`
not `className=`, known baseline failures, branch topology) that apply to
every change in this brief.

## Goal

Restyle the existing site to a "young, energetic, smart-factory" visual
identity, **light theme only for this phase** (dark theme is Phase 2 — build
the color system with CSS variables so it's easy to extend later, but do not
implement a toggle yet).

Reuse existing data/content and component structure wherever practical.
This is a visual/UX redesign, not a rewrite of the page components' data or
routing.

## Style direction (locked)

- Bright, clean, light backgrounds — no dark/black background sections
  anywhere in this phase.
- Vivid gradient accent colors (purple / teal / pink / bright blue) used on
  icons, card borders, buttons, and stat highlights — not as full-page
  backgrounds.
- Rounded cards, soft gradient glow accents, illustration-style icons for
  mechanical/industrial motifs (robotic arm, gear lines, circuit patterns) —
  linework/illustrated, not heavy or literal.
- Overall tone: young tech-startup / engineering-community energy, not a
  corporate dashboard.
- Bilingual headings where the existing content already pairs 中/英 (follow
  each page's existing pattern; don't force bilingual headings onto pages
  that don't already have them).

## Actual routes and known state (verified against the real repo)

| File | Route | Current state | Redesign scope |
| --- | --- | --- | --- |
| `Home.js` | `/` | **Placeholder CRA/Bootstrap example content** ("Data collection is under construction", Apple marketing copy) — not real lab content | Replace entirely. Suggested copy below. |
| `Member.js` | `/member` | Real lab member roster data (largest file) | Keep data structure, restyle presentation (cards instead of plain list) |
| `Project.js` | `/project` | Real portfolio/project data, but **already uses `className=` throughout** — fix to `class=` only in lines you touch | Restyle cards; fix attribute drift incidentally |
| `Photo.js` | `/photo` | Dummy placeholder data (`"123"`, `"124"`...), not real photos | Ask maintainer whether real photo content exists before styling further, or keep as a lightweight placeholder gallery |
| `Publish.js` | `/publish` | Real, substantial content — journal + conference paper lists | Keep data as-is, restyle list presentation |
| `About.js` | `/about` | **This is the "聯絡我們" (Contact Us) page** — address, phone, email, embedded Google Map. Not a "lab introduction" page. | Restyle contact card + map, keep content |
| `Header.js` | n/a (layout) | Logo is currently a **Google icon linking to google.com** (placeholder); visible nav links: 實驗室成員 (`/member`), 論文發表 (`/publish`), 聯絡我們 (`/about`). 研究方向/研究計畫/實驗室照片 links are commented out. | Replace logo with real lab mark/wordmark; redesign nav visually; leave commented-out links as-is unless maintainer confirms re-enabling |
| `Footer.js` | n/a (layout) | Generic Bootstrap placeholder links (Home/Features/Pricing/FAQs), copyright year 2023 | Replace with the "相關連結 Related Links" list below; update year |
| `Sidebar.js` | n/a | Exists, **not imported/rendered anywhere** in `App.js`; mixes `class=` and `className=` internally | Leave unused unless task explicitly asks to wire it in |

## Lab name — RESOLVED

Maintainer confirmed the canonical lab name is **先進數位智能製造研究室**,
which matches `README.md`'s English name **"Advanced Digital Smart
Manufacturing Laboratory" (ADSM)**. Drop the "TING Lab" framing from earlier
draft copy — it does not apply to this repo. Use 先進數位智能製造研究室 /
Advanced Digital Smart Manufacturing Laboratory consistently across `Home.js`
and anywhere else the lab name appears.

## Principal Investigator (PI) profile — new content for Home.js

Maintainer provided this background; surface it on `Home.js` as a PI/lab
credentials block (e.g. a card alongside or below the lab intro paragraph —
this can reuse the "stat card" slot from the earlier style mockups instead of
generic numbers like project/publication counts):

- **最高學歷 Highest degree**：中原大學機械工程博士
  (Ph.D. in Mechanical Engineering, Chung Yuan Christian University)
- **研究專長 Research expertise**：
  - 智慧製造 Smart Manufacturing
  - 人工智慧 Artificial Intelligence (AI)
  - 物聯網 Internet of Things (IoT)
  - 大數據分析 Big Data Analytics
  - 工業4.0應用 Industry 4.0 Applications
  - 即時監控 Real-time Monitoring
  - 智慧系統平台開發 Smart System Platform Development
  - 工具機 Machine Tools
- **研究室 Lab**：先進數位智能製造研究室 Advanced Digital Smart
  Manufacturing Laboratory

Suggested layout: render the 8 research-expertise items as small pill/tag
chips (matches the "年輕活潑" style direction better than a plain bullet
list) rather than a long prose paragraph.

## Home.js replacement copy

Bilingual lab intro (rewritten to use the confirmed lab name — replaces the
earlier TING Lab draft entirely):

> 先進數位智能製造研究室 Advanced Digital Smart Manufacturing Laboratory
> 致力於工業製造的數位化與智能化。我們運用大數據分析、物聯網、人工智慧等前瞻
> 資訊技術，聚焦智慧製造與工業4.0應用，推動即時監控與智慧系統平台開發，並延伸
> 至工具機相關的智慧化研究。
>
> The Advanced Digital Smart Manufacturing Laboratory (ADSM) is dedicated to
> the digitization and intelligentization of industrial manufacturing. By
> leveraging Big Data Analytics, the Internet of Things (IoT), and Artificial
> Intelligence, the lab focuses on smart manufacturing and Industry 4.0
> applications, advancing real-time monitoring and smart system platform
> development, extending into machine-tool-related intelligent research.

## Footer "相關連結 Related Links" (replaces the current placeholder links)

- 中原大學機械系 CYME
- 中原大學智慧製造中心 SMC
- 中原大學工學院
- 中原大學 CYCU
- i-Learning
- 中原e點靈 iTouch

## Open questions for the maintainer (do not guess silently)

1. ~~Which lab name is canonical for new copy: ADSM or TING Lab?~~ **Resolved**
   — 先進數位智能製造研究室 / Advanced Digital Smart Manufacturing
   Laboratory (ADSM). See "Lab name — RESOLVED" above.
2. Should the commented-out nav links (研究方向/研究計畫/實驗室照片) be
   re-enabled as part of this redesign, or stay hidden?
3. Does real photo content exist for `Photo.js`, or is it still a
   placeholder page for now?
4. Is `Sidebar.js` meant to be finished and wired in eventually, or safe to
   remove in a later cleanup pass?
5. Is the PI profile (highest degree / research expertise) meant to appear
   only on `Home.js`, or also repeated/expanded on `About.js` (currently the
   Contact page) or a future dedicated PI page?

## Definition of done for this phase

- All six pages and `Header`/`Footer` visually match the light-theme
  direction above.
- `npm run build` succeeds.
- `npm test -- --watchAll=false` shows no *new* failures beyond the known
  pre-existing one in `docs/failures/baseline-test-failure.md`.
- `./scripts/check_jsx_class_attr.sh` passes for all files changed in this
  branch.
- Dark-mode CSS variables exist and are wired to `:root`, but no toggle UI is
  built yet (Phase 2).
