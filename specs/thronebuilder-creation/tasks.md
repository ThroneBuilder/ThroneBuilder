---
description: "Task list for ThroneBuilder.com Site Creation"
---

# Tasks: ThroneBuilder.com Site Creation

**Input**: Design documents from `specs/thronebuilder-creation/`

**Prerequisites**: plan.md ✅ | spec.md ✅ | research.md ✅ | data-model.md ✅ | contracts/ ✅ | quickstart.md ✅

**Tests**: No automated test tasks — validation is manual browser + Lighthouse per
the implementation plan (no automated test suite in v1 per constitution guidance).

**Organization**: Tasks grouped by user story to enable independent implementation
and testing of each story.

## Format: `[ID] [P?] [Story?] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1–US4)
- Exact file paths included in all implementation task descriptions

---

## Phase 1: Setup (Project Initialization)

**Purpose**: Create the Astro project scaffold and install all dependencies.
No user story work can begin until this phase is complete.

- [ ] T001 Initialize Astro 5 project in repo root: `npm create astro@latest . -- --template minimal --typescript strict --no-install --no-git`
- [ ] T002 Install all npm dependencies: `npm install && npm install @astrojs/sitemap @astrojs/rss`
- [ ] T003 [P] Configure `astro.config.mjs` — set `site: 'https://thronebuilder.com'`, `output: 'static'`, add `sitemap()` to integrations array
- [ ] T004 [P] Create `.node-version` at repo root containing `22` to pin Node.js LTS version
- [ ] T005 [P] Create `render.yaml` at repo root with static site config: `buildCommand: npm run build`, `staticPublishPath: ./dist`, `branch: main`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared infrastructure required by all user stories — content schema,
base layout shell, global styles, and site constants.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T006 Create `src/consts.ts` — export `SITE_TITLE`, `SITE_DESCRIPTION`, `SITE_URL = 'https://thronebuilder.com'`, `DEFAULT_OG_IMAGE = '/images/og-default.png'`
- [ ] T007 [P] Create `src/content/config.ts` — define `blog` collection with Zod schema: `title: z.string()`, `pubDate: z.coerce.date()`, `description: z.string()`, `coverImage: z.string().optional()`, `youtubeUrl: z.string().url().optional()`; export `collections = { blog }`
- [ ] T008 [P] Create `src/styles/global.css` — define CSS custom properties for color palette (`--color-text`, `--color-bg`, `--color-accent`), typography scale (`--font-size-base`, `--line-height-body`), and spacing scale; add minimal CSS reset (box-sizing, margin/padding reset)
- [ ] T009 Create `src/layouts/BaseLayout.astro` — HTML shell with `<html lang="en">`, `<head>` (charset, viewport, title slot, RSS autodiscovery `<link rel="alternate">`, global.css import), skip-navigation `<a href="#main-content">` link, `<main id="main-content">` slot; accepts `title` and `description` props; import constants from `src/consts.ts`
- [ ] T010 [P] Add placeholder default OG image at `public/images/og-default.png` — 1200×630 px PNG; can be a solid-color placeholder to be replaced with branded image later

**Checkpoint**: `npm run dev` MUST start without errors before proceeding to user stories.

---

## Phase 3: User Story 1 — Browse and Read Content (Priority: P1) 🎯 MVP

**Goal**: Visitors can read articles stored as Markdown files in the repository.
Homepage lists articles by date; each article renders its full body.

**Independent Test**: Run `npm run dev`. Verify homepage lists the sample article,
article page renders full body, and both load with JavaScript disabled.

### Implementation for User Story 1

- [ ] T011 [P] [US1] Create `src/pages/index.astro` — use `getCollection('blog')` sorted by `pubDate` descending; render article list with each item showing `title` (as link to `/blog/${slug}/`) and `description`; use `BaseLayout` with `SITE_TITLE` and `SITE_DESCRIPTION`
- [ ] T012 [P] [US1] Create `src/pages/blog/[...slug].astro` — use `getStaticPaths()` with `getCollection('blog')`; render `BaseLayout` with article `title` and `description`; render `<h1>` from frontmatter `title`; render `pubDate` formatted as human-readable date; render `coverImage` as `<img>` with descriptive `alt` if present; render article body via `<Content />`
- [ ] T013 [US1] Add sample article `src/content/blog/2026-05-27-hello-thronebuilder.md` — frontmatter: `title`, `pubDate: 2026-05-27`, `description`; body: two or three paragraphs of placeholder content
- [ ] T014 [US1] Wire `BaseLayout` props correctly in both pages: `index.astro` passes site title/description; `[...slug].astro` passes article title and description (depends on T011, T012)

**Checkpoint**: US1 complete when homepage lists the sample article and the full
article body renders at `/blog/2026-05-27-hello-thronebuilder/` with JS disabled.

---

## Phase 4: User Story 2 — Watch Embedded Videos (Priority: P2)

**Goal**: Articles with a `youtubeUrl` frontmatter field embed a playable
YouTube video player on the article page.

**Independent Test**: Add an article with a `youtubeUrl`. Verify the embedded player
appears and plays. Remove `youtubeUrl` from another article and verify the page
renders correctly without any embed.

### Implementation for User Story 2

- [ ] T015 [P] [US2] Create `src/utils/youtube.ts` — export `extractYoutubeId(url: string): string | null` that extracts video ID from `watch?v=`, `youtu.be/`, and `/shorts/` URL formats using regex; returns `null` for unrecognized formats
- [ ] T016 [US2] Add YouTube embed block to `src/pages/blog/[...slug].astro` — when `youtubeUrl` frontmatter is present, call `extractYoutubeId()`; if a valid ID is returned, render `<iframe src="https://www.youtube-nocookie.com/embed/{id}" loading="lazy" allowfullscreen title="{article title}">` inside a responsive wrapper `<div>`; skip the block entirely if `youtubeUrl` is absent or ID extraction returns null (depends on T015)
- [ ] T017 [US2] Add sample article with video `src/content/blog/2026-05-27-video-example.md` — include `youtubeUrl` pointing to any public ThroneBuilder YouTube video URL

**Checkpoint**: US2 complete when the video article shows an embedded player that
plays in-page, and the non-video article pages are unaffected.

---

## Phase 5: User Story 3 — Discover Content via Search Engines (Priority: P3)

**Goal**: Sitemap, RSS feed, and OpenGraph meta tags are present and valid,
enabling search engine indexing and rich social sharing previews.

**Independent Test**: Build the site (`npm run build && npm run preview`). Check
`/sitemap-index.xml` lists all article URLs. Check `/rss.xml` validates as RSS 2.0.
Inspect `<head>` source on homepage and an article page for all required OG tags.

### Implementation for User Story 3

- [ ] T018 [P] [US3] Create `src/pages/rss.xml.ts` — export `GET()` using `@astrojs/rss` `rss()` function; channel: `title: SITE_TITLE`, `description: SITE_DESCRIPTION`, `site: SITE_URL`; items: map `getCollection('blog')` entries to `{ title, pubDate, description, link: /blog/${slug}/ }`; set `customData: '<language>en-us</language>'`
- [ ] T019 [US3] Add OpenGraph and canonical meta tags to `src/layouts/BaseLayout.astro` — add props `canonicalUrl: string`, `ogImage?: string`; render `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:image">` (fallback to `DEFAULT_OG_IMAGE`), `<meta property="og:url">`, `<meta property="og:type">`, `<meta name="twitter:card" content="summary_large_image">`, `<meta name="description">`, `<link rel="canonical">`; update `[...slug].astro` and `index.astro` to pass `canonicalUrl` and `ogImage` props (depends on T009)
- [ ] T020 [US3] Verify sitemap generation: run `npm run build`; confirm `dist/sitemap-index.xml` and `dist/sitemap-0.xml` exist and contain all article URLs; fix `astro.config.mjs` if sitemap is missing

**Checkpoint**: US3 complete when sitemap lists all articles, RSS feed is valid
RSS 2.0, and OG tags are present and correct on all pages.

---

## Phase 6: User Story 4 — Access via ThroneBuilder.com (Priority: P4)

**Goal**: The site is live at `https://thronebuilder.com` with valid SSL.
One canonical form (www or non-www) is enforced.

**Independent Test**: Visit `https://thronebuilder.com` and
`https://www.thronebuilder.com` in a browser. Both load over HTTPS with no
certificate warnings. One redirects to the other consistently.

### Implementation for User Story 4

- [ ] T021 [US4] Connect GitHub repository to Render: log into render.com → New → Static Site → connect `ThroneBuilder` GitHub repo; confirm build command `npm run build`, publish directory `dist`, branch `main`; trigger first manual deploy and verify preview URL loads the site
- [ ] T022 [US4] Configure custom domain in Render dashboard: add `thronebuilder.com` under Settings → Custom Domains; copy Render-provided CNAME/A record values
- [ ] T023 [US4] Update DNS at domain registrar: point `thronebuilder.com` (and `www.thronebuilder.com`) to the Render-provided DNS values from T022; wait for propagation (typically 5–30 minutes)

**Checkpoint**: US4 complete when both `https://thronebuilder.com` and
`https://www.thronebuilder.com` load with valid SSL and one consistently
redirects to the other.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Quality gates that span all user stories. Run after all four stories
are independently verified.

- [ ] T024 [P] Run Lighthouse audit on the live Render URL or `npm run preview` — target all four scores ≥ 90 (Performance, Accessibility, Best Practices, SEO) on both desktop and mobile; fix any failures before marking complete
- [ ] T025 [P] WCAG 2.1 AA review: verify body text color contrast ≥ 4.5:1, all `<img>` tags have non-empty descriptive `alt` attributes, heading hierarchy is sequential (no skipped levels), keyboard focus indicators are visible on all interactive elements
- [ ] T026 Run final clean build: `npm run build`; confirm zero errors and zero warnings in the build output
- [ ] T027 [P] Update `specs/thronebuilder-creation/checklists/requirements.md` — mark all success criteria (SC-001 through SC-007) as verified with observed evidence (e.g., Lighthouse scores, validator results)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 completion — BLOCKS all user stories
- **US1 (Phase 3)**: Depends on Phase 2 — no dependency on US2, US3, or US4
- **US2 (Phase 4)**: Depends on Phase 2 — no dependency on US1 (shares `[...slug].astro` but extends it)
- **US3 (Phase 5)**: Depends on Phase 2 — no dependency on US1 or US2
- **US4 (Phase 6)**: Depends on US1 being complete (need something to deploy and verify)
- **Polish (Phase 7)**: Depends on all four user stories being complete

### User Story Dependencies

- **US1 (P1)**: Can start after Foundational — independent of other stories
- **US2 (P2)**: Can start after Foundational — extends `[...slug].astro` but does not break US1
- **US3 (P3)**: Can start after Foundational — adds to layout and adds new pages; does not break US1/US2
- **US4 (P4)**: Should start after US1 so there is content to validate on the live domain

### Within Each User Story

- Models/schema before pages
- Utility functions before the components that call them
- Story complete and checkpoint passed before moving to next story

### Parallel Opportunities

- T003, T004, T005 can run in parallel (Phase 1, different files)
- T007, T008, T010 can run in parallel (Phase 2, different files)
- T011, T012 can run in parallel (Phase 3, different files); T014 depends on both
- T015 before T016; T016 and T017 can run in parallel (different files)
- T018, T019 can run in parallel (Phase 5, different files)
- T024, T025, T027 can run in parallel (Phase 7, independent checks)

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (**CRITICAL** — blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: homepage lists article, article page renders, JS-disabled works
5. Commit and push to `main` — Render auto-deploys

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. US1 → Test independently → Push (MVP — site is live with content)
3. US2 → Test independently → Push (video embeds work)
4. US3 → Test independently → Push (SEO/RSS/sitemap live)
5. US4 → DNS configured, domain live → Push (custom domain)
6. Polish → Lighthouse ≥ 90 confirmed → Done

---

## Notes

- All `[P]` tasks operate on different files — no merge conflicts when run in parallel
- `[USn]` label maps each task back to its user story for traceability
- Each user story's checkpoint MUST pass before moving to the next story (Constitution Principle IV)
- The YouTube embed (US2) extends `[...slug].astro` built in US1 — verify US1 checkpoint before starting US2
- `render.yaml` (T005) is committed in Setup but Render itself is not connected until US4 (T021)
- No automated test suite in v1 — all validation is manual browser + Lighthouse (see plan.md, research D-08)
