# Research: Homepage Visual Redesign — Tags, Filtering & Carousel

**Feature**: 002-visual-tags-carousel | **Date**: 2026-05-28

---

## D-01: Tag Filtering — Vanilla JS vs. Framework

**Decision**: Vanilla JavaScript using `data-tags` attributes and CSS class toggling.

**Rationale**: The existing site uses zero JavaScript (pure Astro static output).
Introducing a framework (React islands, Alpine.js, etc.) for one filtering
interaction adds unnecessary dependency weight. The filtering logic is ~20 lines:
iterate cards, compare `data-tags` against the active filter, toggle a hidden class.
This is readable, debuggable, and has no build-time cost.

**No-JS fallback**: All articles are rendered in the HTML; the filter buttons are
wrapped in a `<noscript>` suppressed element or hidden via a `.js-only` class added
by a small inline script. If JS is disabled, all articles remain visible and tags
are displayed as plain text — satisfying FR-012 and Principle V.

**Alternatives considered**:
- Alpine.js: lighter than React but still a CDN dependency; unnecessary for this use case.
- Astro view transitions: server-side filtering would require SSR; incompatible with `output: 'static'`.
- CSS `:target` + anchor IDs: works without JS for single-category views but cannot
  combine with "All" toggle and becomes unwieldy for 5 categories.

---

## D-02: Carousel — Vanilla JS vs. Library

**Decision**: Vanilla JS + CSS transitions. No carousel library.

**Rationale**: A 5-slide auto-rotating carousel with click-to-filter is ~60 lines
of JavaScript. A library like Swiper.js or Splide adds 30–80 KB of script and CSS
for features we do not use (touch swiping, thumbnails, lightbox, etc.). Lighthouse
performance penalties for large JS payloads are real. Vanilla implementation keeps
the bundle at zero.

**Implementation pattern**: One `<div class="carousel-track">` containing slide
items. JS sets a `--active-slide` CSS custom property; a CSS `translate` transitions
the track. A `setInterval` advances the active slide every 5 seconds. `clearInterval`
on click prevents a jarring auto-advance mid-interaction.

**No-JS fallback**: The track is displayed as a horizontal CSS scroll strip using
`overflow-x: auto` and `scroll-snap-type: x mandatory` — all slides visible and
scrollable without JS, satisfying FR-012.

**Alternatives considered**:
- Swiper.js: polished but ~30 KB; violates constitution's minimal-dependency principle.
- CSS-only carousel using radio inputs + `:checked` selector: creative but requires
  hidden radio buttons in the DOM which is an accessibility anti-pattern.
- Astro View Transitions: not a carousel mechanism.

---

## D-03: Font Selection

**Decision**: **Playfair Display** (Google Fonts) for display headings (site title,
section headers, featured card titles). Body text retains **Georgia** (already in use,
zero network cost, excellent legibility).

**Rationale**: Playfair Display is a high-contrast editorial serif — the same
aesthetic family used by Salon.com, The Atlantic, and most magazine-style sites.
It conveys authority and craftsmanship. Loading only two weights (700, 900) from
Google Fonts adds ~30 KB — acceptable for a one-time load with long cache TTL.

**Aptos Black status**: Aptos Black is a Microsoft-proprietary font bundled with
Office 365. It is not available as a web font through any public CDN. A custom
`@font-face` declaration could be used if the owner provides the `.woff2` file,
but distributing it may violate the Microsoft font license. The CSS variable
`--font-display` will be used for the font stack so substituting Aptos Black later
is a single-line change:
```css
--font-display: 'Playfair Display', Georgia, serif;
/* To swap: --font-display: 'Aptos Black', 'Playfair Display', Georgia, serif; */
```

**Alternatives considered**:
- Oswald: bold geometric sans, more aggressive/tabloid feel than editorial.
- Merriweather: good legibility but heavier at small sizes than Playfair Display.
- Inter (sans-serif): clean, modern, but not magazine-like.
- System fonts only: acceptable for performance but too generic for the visual goal.

---

## D-04: Article Grid Layout

**Decision**: CSS Grid with a deterministic featured-card pattern. No CSS framework.

**Rationale**: The Salon.com aesthetic uses a 12-column grid where the first article
is a wide hero, followed by rows of 3 smaller cards, with occasional full-width
feature cards. This can be achieved with CSS Grid `grid-template-columns` and a
`:nth-child` rule that gives every 4th card a `grid-column: span 2` (or similar).
No JavaScript required. No additional dependencies.

**Card variants**:
1. **Featured hero** (first card or every 4th card): wide image with title overlaid
   at bottom on a gradient scrim. `aspect-ratio: 16/9`.
2. **Standard card** (remaining cards): image on top, title + meta below.
   `aspect-ratio: 4/3`.
3. **Text-only card** (no coverImage): white card with accent-colored tag pill,
   bold title, excerpt. No image element rendered.

**Image handling**: `loading="lazy"` on all card images except the first (hero).
Hero image gets `loading="eager"` and `fetchpriority="high"` for LCP optimization.

**Alternatives considered**:
- Masonry layout: visually interesting but requires JS for correct heights; adds
  complexity without proportional value for this content type.
- Tailwind CSS: powerful for rapid prototyping but adds build dependency and
  contradicts the constitution's "minimal abstraction" principle.

---

## D-05: Carousel Configuration Storage

**Decision**: `src/data/carousel.ts` — a TypeScript array exported as a constant.

**Rationale**: The carousel config is site-level data (not per-article content).
It does not belong in `src/content/` (that is for blog articles). A simple typed
array in `src/data/carousel.ts` keeps it close to the source, type-safe, and
trivially importable into `index.astro`. Adding a new slide or changing a tagline
is a one-line edit.

**Shape**:
```ts
export interface CarouselSlide {
  tag: 'family' | 'friends' | 'career' | 'alomac' | 'legos';
  image: string;  // path relative to public/, e.g. '/images/carousel/family.jpg'
  tagline: string;
}
export const carouselSlides: CarouselSlide[] = [ /* ... */ ];
```

**Alternatives considered**:
- Astro content collection (`src/content/carousel/`): adds schema boilerplate for
  5 static config items; overkill. Content collections are for author-created content.
- JSON file: loses type safety; TypeScript is already in use, no reason to downgrade.
- Inline in `index.astro`: harder to maintain; separating config from template is
  a good practice even at small scale.

---

## D-06: No-JS Handling Strategy

**Decision**: Progressive enhancement using an inline script to add a `js` class
to `<html>`, and CSS rules that show filter buttons and carousel controls only when
`.js` is present.

**Rationale**: The `<html class="">` + inline script pattern is a well-established
progressive enhancement technique. The inline script is 2 lines, runs synchronously
before paint (no FOUC risk), and adds zero network requests. CSS rules then use
`.js .filter-bar` selectors to show interactive controls only when JS is confirmed
available.

**Fallback state** (no JS):
- All article cards visible, tags displayed as text badges.
- Filter buttons hidden entirely (not shown as broken).
- Carousel displayed as horizontal scroll strip (all slides visible).
- Footer links work (they are plain `<a>` tags, no JS required).

**Alternatives considered**:
- `<noscript>` blocks: limited — cannot conditionally show/hide JS-dependent controls
  without duplicating HTML.
- CSS `@media` tricks: no CSS media query can detect JS availability.

---

## D-07: Footer Placement

**Decision**: Footer added to `src/layouts/BaseLayout.astro`, appearing on all pages.

**Rationale**: US4 requires the footer on every page. The shared layout is the
single correct place for universal page chrome. The existing BaseLayout already
has the skip-nav, `<main>`, and `<head>` meta; a `<footer>` is its natural peer.
Footer link data comes from `src/consts.ts` (extending the existing site constants
pattern).

**Footer content**: Organized as a single row (desktop) / stacked column (mobile)
with labeled groups:
- **Contact**: jeff@thronebuilder.com · jjames315@live.com
- **Professional**: LinkedIn
- **Code**: GitHub
- **Video**: YouTube
- **Social**: Facebook (ThroneBuilder) · Facebook (personal)

**Accessibility**: `<footer>` element with `aria-label="Site links"`. Each group
is a `<section>` with a `<h3>` label. External links include `rel="noopener noreferrer"`
and a visually hidden "(opens in new tab)" notice for screen reader users.

**Alternatives considered**:
- Sidebar: not appropriate for a content-first single-column site.
- Header nav: clutters the reading area; footer is the conventional location for
  contact/social links on editorial sites.
