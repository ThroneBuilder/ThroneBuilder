---
description: "Task list for Homepage Visual Redesign — Tags, Filtering & Carousel"
---

# Tasks: Homepage Visual Redesign — Tags, Filtering & Carousel

**Input**: Design documents from `specs/002-visual-tags-carousel/`

**Prerequisites**: plan.md ✅ | spec.md ✅ | research.md ✅ | data-model.md ✅ | contracts/ ✅ | quickstart.md ✅

**Tests**: No automated test tasks — validation is manual browser + Lighthouse per
the implementation plan (no automated test suite in v1 per constitution guidance).

**Organization**: Tasks grouped by user story to enable independent implementation,
testing, and progressive deployment (P1 → P2 → P3 → P4).

## Format: `[ID] [P?] [Story?] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1–US4)
- Exact file paths included in all implementation task descriptions

---

## Phase 1: Setup

**Purpose**: Create the one new directory this feature requires. The Astro project
already exists; no npm changes are needed.

- [ ] T001 Create `public/images/carousel/.gitkeep` — ensures the carousel images directory is tracked by git; site owners place carousel images here

**Checkpoint**: Directory exists in repo, `npm run build` still passes.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Schema and data-structure changes that all four user stories depend on.
Must be complete before any user story implementation begins.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T002 [P] Add `TAG_VALUES` and `Tag` type to `src/consts.ts` — export `export const TAG_VALUES = ['family', 'friends', 'career', 'alomac', 'legos'] as const` and `export type Tag = typeof TAG_VALUES[number]`
- [ ] T003 [P] Update `src/content/config.ts` — import `TAG_VALUES` from `../consts`; add `tags: z.array(z.enum(TAG_VALUES)).optional().default([])` to the blog collection Zod schema (after the `youtubeUrl` field)
- [ ] T004 [P] Create `src/data/carousel.ts` — define and export `CarouselSlide` interface (`tag: Tag`, `image: string`, `tagline: string`) and export `carouselSlides: CarouselSlide[] = []` as an empty array (slides populated in US3)

**Checkpoint**: `npm run build` passes with zero errors. Schema change is additive
(existing articles without `tags` field get an empty array default — no breaking change).

---

## Phase 3: User Story 1 — Tag Filtering (Priority: P1) 🎯 MVP

**Goal**: Articles carry tags; the homepage displays tag badges on each card and
a filter bar above the list lets visitors show only articles for a chosen tag.
The no-JS fallback shows all articles with tag badges visible as plain text.

**Independent Test**: Run `npm run dev`. Verify tag badge on each article card.
Click a tag filter button — only matching articles visible. Click "All" — all
return. Disable JS in DevTools — all articles visible, filter bar hidden, tags
still readable. Push to `002-visual-tags-carousel` branch; verify on Render
preview URL before proceeding to US2.

### Implementation for User Story 1

- [ ] T005 [P] [US1] Add `tags: ["family"]` frontmatter field to `src/content/blog/2026-05-27-hello-thronebuilder.md`
- [ ] T006 [P] [US1] Add `tags: ["legos"]` frontmatter field to `src/content/blog/2026-05-27-video-example.md`
- [ ] T007 [P] [US1] Add JS-detection inline script to `src/layouts/BaseLayout.astro` — add `<script>document.documentElement.classList.add('js')</script>` as the first element inside `<head>` (runs synchronously before paint, no FOUC)
- [ ] T008 [P] [US1] Add helper and tag styles to `src/styles/global.css` — add `.js-only { display: none }` and `.js .js-only { display: revert }` (shows element only when JS is available); add `.sr-only` utility class (position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap); add `.tag-badge` styles (display: inline-block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; padding: 0.15rem 0.5rem; border: 1px solid var(--color-accent); color: var(--color-accent); border-radius: 2px); add `.filter-bar` (display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem); add `.filter-btn` (pill button: padding 0.35rem 0.9rem; border: 1px solid var(--color-border); border-radius: 999px; background: transparent; cursor: pointer; font-size: 0.85rem) with `:hover` (border-color: var(--color-accent); color: var(--color-accent)), `:focus-visible` (outline: 2px solid var(--color-accent); outline-offset: 2px), and `[aria-pressed="true"]` (background: var(--color-accent); color: #fff; border-color: var(--color-accent))
- [ ] T009 [US1] Update article list in `src/pages/index.astro` — on each `<article class="post-card">` add `data-tags={post.data.tags.join(' ')}`; inside each card add `{post.data.tags.length > 0 && (<div class="post-card__tags">{post.data.tags.map(t => <span class="tag-badge">{t}</span>)}</div>)}`; wrap the `<section>` in a `<div id="article-filter">`; add filter bar HTML above the section: `<div class="filter-bar js-only" role="group" aria-label="Filter articles by category">` containing `<button class="filter-btn filter-btn--active" data-filter="all" aria-pressed="true">All</button>` plus one button per tag from `TAG_VALUES` (import `TAG_VALUES` from `../consts`); add `<p class="filter-empty" aria-live="polite" hidden></p>` after the articles `<section>` for the empty-state message
- [ ] T010 [US1] Add vanilla JS filter script to `src/pages/index.astro` — add `<script>` block (Astro processes this as client JS): select all `.filter-btn` buttons and all `article[data-tags]` cards; on each button click: (1) read `button.dataset.filter`, (2) if clicked button is already active (`aria-pressed="true"`), reset to `"all"`, (3) update all button `aria-pressed` attributes, (4) for each card: if `filter === 'all'` or `card.dataset.tags.split(' ').includes(filter)` then `card.removeAttribute('hidden')` else `card.setAttribute('hidden', '')`, (5) update empty-state paragraph visibility and text when no cards are visible, (6) add `.filter-btn--active` CSS class to active button

**Checkpoint**: US1 complete when tag badges appear on all tagged articles,
filter buttons work with single-click filter and reset, disabled-JS shows all
articles unfiltered with tags visible. **Push branch and verify on Render preview.**

---

## Phase 4: User Story 2 — Visual Article Grid (Priority: P2)

**Goal**: Replace the plain article list with a magazine-style CSS Grid. First
article with a cover image becomes a full-width hero card with title overlaid on
the image. Other articles with images use a standard image-above-title card.
Articles without cover images use a clean text-only card. Playfair Display heading
font is loaded and applied. Background is pure white.

**Independent Test**: Run `npm run dev`. Verify hero card (first cover-image article)
shows title on top of image. Verify standard cards have image above title. Verify
text-only articles show clean cards without broken images. Run Lighthouse — all
four scores must remain ≥ 90. **Push and verify on Render preview before US3.**

### Implementation for User Story 2

- [ ] T011 [P] [US2] Add Playfair Display font to `src/layouts/BaseLayout.astro` — add `<link rel="preconnect" href="https://fonts.googleapis.com">`, `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`, and `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap">` inside `<head>` before the global.css import
- [ ] T012 [P] [US2] Update `src/styles/global.css` — add `--font-display: 'Playfair Display', Georgia, serif` to `:root` custom properties; change `--color-bg` from `#f8f8f2` to `#ffffff`; verify body text `#1a1a2e` on white `#ffffff` still passes WCAG AA (it does: contrast ratio ~16:1)
- [ ] T013 [US2] Rewrite article section in `src/pages/index.astro` — replace the `<section aria-label="Articles">` content with a `<div class="article-grid">` containing cards using three variant classes: (a) `post-card--featured` for the first article that has `coverImage` — renders `<img loading="eager" fetchpriority="high">` with title `<h2>` overlaid inside a `<div class="post-card__overlay">` using gradient scrim; (b) `post-card--standard` for non-first articles with `coverImage` — renders `<img loading="lazy">` above the body div; (c) `post-card--text` for articles without `coverImage` — no image element; determine variant in the `{posts.map((post, index) => ...)}` callback using `index === 0 && post.data.coverImage ? 'featured' : post.data.coverImage ? 'standard' : 'text'`; tag badges and filter data attributes from T009 remain; update scoped `<style>` block: add `.article-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.5rem }`, `.post-card--featured { grid-column: 1 / -1; position: relative; aspect-ratio: 16/7 }`, `.post-card--featured img { width: 100%; height: 100%; object-fit: cover }`, `.post-card__overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem; background: linear-gradient(transparent, rgba(0,0,0,0.7)); color: #fff }`, `.post-card__overlay h2 a { color: #fff; font-family: var(--font-display); font-size: var(--font-size-2xl) }`, `.post-card--standard, .post-card--text { grid-column: span 4 }`, responsive: `@media (max-width: 768px) { .post-card--standard, .post-card--text { grid-column: span 6 } .post-card--featured { aspect-ratio: 16/9 } }`, `@media (max-width: 480px) { .post-card--standard, .post-card--text { grid-column: 1 / -1 } }`; apply `font-family: var(--font-display)` to `.site-header h1`

**Checkpoint**: US2 complete when grid layout renders correctly, hero card shows
title on image, no broken image cards exist, Lighthouse ≥ 90, mobile layout intact.
**Push and verify on Render preview before US3.**

---

## Phase 5: User Story 3 — Category Carousel (Priority: P3)

**Goal**: A full-width auto-rotating carousel above the filter bar. Each slide shows
a category image and tagline. Clicking a slide scrolls to the article list and
activates that tag's filter. Without JS, the carousel is a horizontal scroll strip.

**Independent Test**: Add placeholder images to `public/images/carousel/` and
two entries to `src/data/carousel.ts`. Verify carousel appears above filter bar.
Wait 5 seconds — verify auto-rotation. Click a slide — verify scroll to article
list and filter activation. Disable JS — verify horizontal scroll strip with all
slides visible. **Push and verify on Render preview before US4.**

### Implementation for User Story 3

- [ ] T014 [P] [US3] Populate `src/data/carousel.ts` with two sample slide entries — add `{ tag: 'legos' as Tag, image: '/images/carousel/legos.svg', tagline: 'Brick by brick' }` and `{ tag: 'family' as Tag, image: '/images/carousel/family.svg', tagline: 'The people who matter most' }` (import `Tag` from `../consts`)
- [ ] T015 [P] [US3] Create placeholder SVG images for the two carousel test slides — create `public/images/carousel/legos.svg` (1440×600 SVG with a dark background fill `#1a1a2e` and centered white text "legos") and `public/images/carousel/family.svg` (same format with background `#b84a00` and text "family")
- [ ] T016 [US3] Add carousel HTML to `src/pages/index.astro` — import `carouselSlides` from `../../data/carousel`; above the `<div id="article-filter">` wrapper, render: `{carouselSlides.length > 0 && (<section class="carousel" aria-label="Browse by category" aria-roledescription="carousel"><div class="carousel-track" aria-live="off">{carouselSlides.map((slide, i) => (<div class="carousel-slide" data-tag={slide.tag} aria-hidden={i > 0 ? 'true' : 'false'}><img src={slide.image} alt={`${slide.tag} category`} loading={i === 0 ? 'eager' : 'lazy'} /><div class="carousel-caption"><p class="carousel-tagline">{slide.tagline}</p></div></div>))}</div><div class="carousel-dots js-only" role="tablist" aria-label="Carousel navigation"></div></section>)}`
- [ ] T017 [US3] Add carousel CSS to `src/pages/index.astro` scoped `<style>` and no-JS base styles to `src/styles/global.css` — in `global.css` add: `.carousel { width: 100%; overflow: hidden; margin-bottom: 2rem }`, `.carousel-track { display: flex; transition: transform 0.5s ease }`, `.carousel-slide { flex: 0 0 100%; position: relative }`, `.carousel-slide img { width: 100%; aspect-ratio: 16/6; object-fit: cover; display: block }`, `.carousel-caption { position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5rem 2rem; background: linear-gradient(transparent, rgba(0,0,0,0.65)); color: #fff }`, `.carousel-tagline { font-family: var(--font-display); font-size: var(--font-size-2xl); margin: 0 }`, `.carousel-dots { display: flex; justify-content: center; gap: 0.5rem; padding: 0.75rem 0 }`, `.carousel-dots button { width: 10px; height: 10px; border-radius: 50%; border: 2px solid var(--color-accent); background: transparent; cursor: pointer; padding: 0 }`, `.carousel-dots button[aria-selected="true"] { background: var(--color-accent) }`, `.carousel-dots button:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px }`; no-JS fallback in `global.css` (applies when `<html>` lacks `.js`): `html:not(.js) .carousel { overflow-x: auto; overflow-y: hidden }`, `html:not(.js) .carousel-track { transform: none !important; transition: none }`, `html:not(.js) .carousel-slide { flex: 0 0 80vw; scroll-snap-align: start }`, `html:not(.js) .carousel { scroll-snap-type: x mandatory }`
- [ ] T018 [US3] Add carousel JS inline script to `src/pages/index.astro` — add `<script>` block selecting `.carousel-track`, `.carousel-slide` elements, and `.carousel-dots` container; inject one dot `<button>` per slide into dots container with `role="tab"` and `aria-label="Slide N of M"`; implement `goToSlide(n)` function: (1) update `transform: translateX(-${n * 100}%)` on track, (2) update each slide's `aria-hidden`, (3) update each dot's `aria-selected`; start `setInterval(5000)` to call `goToSlide((current + 1) % total)`, storing interval ID; each dot click: `clearInterval`, `goToSlide(n)`, restart interval; each carousel slide click: `clearInterval`, `goToSlide(i)` (to focus it), smooth-scroll to `document.getElementById('article-filter')`, programmatically click the `.filter-btn` whose `data-filter` matches `slide.dataset.tag`, restart interval; guard: if `carouselSlides.length <= 1`, skip interval and dots

**Checkpoint**: US3 complete when carousel auto-rotates every 5 seconds, slide
click activates matching tag filter and scrolls to article list, no-JS renders
horizontal scroll strip. **Push and verify on Render preview before US4.**

---

## Phase 6: User Story 4 — Footer with Contact and Social Links (Priority: P4)

**Goal**: A persistent, labeled footer appears on every page of the site with
all contact, professional, code, video, and social links. External links open
in a new tab; email links use `mailto:`.

**Independent Test**: Load homepage and an article page. Verify footer present on
both. Click each link — email opens mail client, external links open new tab. Resize
to 375 px — no horizontal overflow, links tappable. **Push and verify on Render.**

### Implementation for User Story 4

- [ ] T019 [US4] Add `SITE_LINKS` constant to `src/consts.ts` — add the following export after existing constants:
  ```ts
  export const SITE_LINKS = {
    contact:      [{ label: 'jeff@thronebuilder.com', href: 'mailto:jeff@thronebuilder.com' },
                   { label: 'jjames315@live.com',     href: 'mailto:jjames315@live.com' }],
    professional: [{ label: 'LinkedIn', href: 'https://linkedin.com/in/jeff-james' }],
    code:         [{ label: 'GitHub',   href: 'https://github.com/ThroneBuilder' }],
    video:        [{ label: 'YouTube',  href: 'https://www.youtube.com/@thronebuilder' }],
    social:       [{ label: 'Facebook (ThroneBuilder)', href: 'https://www.facebook.com/ThroneBuilder' },
                   { label: 'Facebook (personal)',       href: 'https://www.facebook.com/jjames315' }],
  } as const;
  ```
- [ ] T020 [US4] Add `<footer>` to `src/layouts/BaseLayout.astro` — import `SITE_LINKS` from `../consts`; add after the closing `</main>` tag:
  ```astro
  <footer class="site-footer" aria-label="Site links">
    <div class="footer-inner">
      {Object.entries(SITE_LINKS).map(([group, links]) => (
        <section class="footer-group">
          <h3 class="footer-group__label">{group}</h3>
          <ul>
            {links.map(link => (
              <li>
                {link.href.startsWith('mailto:')
                  ? <a href={link.href}>{link.label}</a>
                  : <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}<span class="sr-only"> (opens in new tab)</span>
                    </a>
                }
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </footer>
  ```
- [ ] T021 [US4] Add footer styles to `src/styles/global.css` — `.site-footer { border-top: 1px solid var(--color-border); padding: 2rem 1rem; margin-top: 4rem; background: var(--color-bg) }`, `.footer-inner { max-width: var(--max-width-content); margin: 0 auto; display: flex; flex-wrap: wrap; gap: 2rem }` (at ≥ 640 px: `max-width: 72rem`), `.footer-group { flex: 1 1 10rem }`, `.footer-group ul { list-style: none; padding: 0; margin: 0 }`, `.footer-group li { margin-bottom: 0.35rem }`, `.footer-group__label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-muted); margin-bottom: 0.5rem }`, `.footer-group a { color: var(--color-muted); text-decoration: none; font-size: 0.875rem }`, `.footer-group a:hover { color: var(--color-accent) }`, `.footer-group a:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; border-radius: 2px }`

**Checkpoint**: US4 complete when footer appears on homepage and article pages,
all links correct, external links open new tab, mobile layout clean.
**Push and verify on Render — full feature now live.**

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Quality gates across all four user stories. Run after all four stories
are independently verified on the Render preview URL.

- [ ] T022 [P] Run Lighthouse audit on live site or `npm run preview` — all four scores must be ≥ 90 on desktop and mobile; if Performance drops due to carousel images, add `width` and `height` attributes to all carousel `<img>` tags to prevent layout shift
- [ ] T023 [P] WCAG 2.1 AA review — verify: filter buttons have `aria-pressed` toggled correctly, carousel `aria-hidden` updates on slide change, empty state uses `aria-live="polite"`, all new images have descriptive `alt` text, footer link `(opens in new tab)` notices present, no heading-level skips, focus-visible styles on all new interactive elements
- [ ] T024 [P] No-JS behavior verification in Chrome DevTools (Settings → Debugger → Disable JavaScript) — confirm: all articles visible, tag badges readable, filter bar hidden, carousel shows as horizontal scroll strip, footer links functional
- [ ] T025 Run final clean build: `npm run build`; confirm zero errors and zero warnings in build output
- [ ] T026 [P] Update `specs/002-visual-tags-carousel/checklists/requirements.md` — mark all success criteria SC-001 through SC-009 as verified with observed evidence

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — BLOCKS all user stories
- **US1 (Phase 3)**: Depends on Phase 2 — no dependency on US2, US3, US4
- **US2 (Phase 4)**: Depends on Phase 2 AND US1 (grid uses same article cards that US1 adds tags to)
- **US3 (Phase 5)**: Depends on US1 (carousel click calls US1's filter function) — can start after US1 checkpoint passes
- **US4 (Phase 6)**: Depends only on Phase 2 — independent of US1/US2/US3; placed last per user intent
- **Polish (Phase 7)**: Depends on all four stories verified

### Story Dependencies

- **US1 (P1)**: Foundational complete → implement → browser checkpoint → push
- **US2 (P2)**: US1 complete (cards already have tag data attributes) → implement → browser checkpoint → push
- **US3 (P3)**: US1 complete (carousel click reuses filter function) → implement → browser checkpoint → push
- **US4 (P4)**: Foundational complete → implement any time after US1 → push

### Within Each User Story

- Schema/data changes before page templates that reference them
- HTML structure before JavaScript that queries it
- CSS helpers (`.js-only`) before HTML that uses the class
- Story verified in browser before proceeding to next story

### Parallel Opportunities

- T002, T003, T004 can run in parallel (Phase 2, different files)
- T005, T006 can run in parallel (US1, different files)
- T007, T008 can run in parallel (US1, different files)
- T009 depends on T007+T008; T010 depends on T009 (same file, sequential)
- T011, T012 can run in parallel (US2, different files); T013 depends on both
- T014, T015 can run in parallel (US3, different files); T016 depends on T014
- T016, T017, T018 are sequential (all modify index.astro)
- T019 before T020 (BaseLayout imports from consts); T021 can follow T020
- T022, T023, T024, T026 can run in parallel (Phase 7, independent checks)

---

## Implementation Strategy

### Progressive Delivery (P1 → P2 → P3 → P4)

Per user instruction: implement each story completely, push to the feature branch,
and verify on the Render preview URL before moving to the next.

1. **Setup + Foundational** → schema change deployed, build verified
2. **US1** → tags + filter live → push → verify at thronebuilder.onrender.com → proceed to US2
3. **US2** → magazine grid + fonts live → push → verify → proceed to US3
4. **US3** → carousel live → push → supply real carousel images → verify → proceed to US4
5. **US4** → footer + links live → push → verify all links → proceed to Polish
6. **Polish** → Lighthouse ≥ 90 confirmed → merge to main → live at thronebuilder.com

### MVP

US1 alone (tags visible + filter working) is a deployable increment. The site
gains meaningful content organization with zero visual risk.

---

## Notes

- All `[P]` tasks operate on different files — no merge conflicts when run in parallel
- `[USn]` label maps each task back to its user story for traceability
- Each story's checkpoint MUST pass before moving to the next (Constitution Principle IV)
- US3 requires real carousel images from the site owner; placeholder SVGs are used for development
- Carousel SVG placeholders in T015 are development scaffolding — replace with real photos before launch
- No automated test suite in v1 — all validation is manual browser + Lighthouse
