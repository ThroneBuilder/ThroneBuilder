# UI Contract: Homepage Visual Redesign

**Feature**: 002-visual-tags-carousel | **Date**: 2026-05-28

This document defines the expected HTML structure, data attributes, and
interactive behavior that the homepage must expose. These contracts allow
US1–US3 to be tested independently.

---

## Article Card Contract

Every article card rendered on the homepage MUST satisfy:

```html
<article
  class="post-card [post-card--featured|post-card--standard|post-card--text]"
  data-tags="legos family"          <!-- space-separated tag values, or empty string -->
  aria-hidden="false"               <!-- set to "true" by JS when filtered out -->
>
  <!-- if coverImage present: -->
  <img src="/images/..." alt="[descriptive alt from title]" loading="[lazy|eager]" />

  <!-- always present: -->
  <div class="post-card__body">
    <div class="post-card__tags">
      <span class="tag-badge tag-badge--legos">legos</span>
      <!-- one span per tag -->
    </div>
    <h2><a href="/blog/slug/">Article Title</a></h2>
    <time datetime="2026-05-28T00:00:00.000Z">May 28, 2026</time>
    <p class="post-card__excerpt">Description text</p>
  </div>
</article>
```

**Rules**:
- `data-tags` is always present; value is space-separated tag strings or `""`.
- `aria-hidden` is managed by the filter JS; initial value must be `"false"`.
- Card variant class (`--featured`, `--standard`, `--text`) is applied at render
  time and does not change dynamically.
- First card in the list MUST be `post-card--featured` when it has a `coverImage`.
- Every image MUST have a non-empty `alt` attribute.

---

## Filter Bar Contract

```html
<div class="filter-bar js-only" role="group" aria-label="Filter articles by category" id="article-filter">
  <button class="filter-btn filter-btn--active" data-filter="all" aria-pressed="true">All</button>
  <button class="filter-btn" data-filter="family"  aria-pressed="false">family</button>
  <button class="filter-btn" data-filter="friends" aria-pressed="false">friends</button>
  <button class="filter-btn" data-filter="career"  aria-pressed="false">career</button>
  <button class="filter-btn" data-filter="alomac"  aria-pressed="false">alomac</button>
  <button class="filter-btn" data-filter="legos"   aria-pressed="false">legos</button>
</div>
```

**Rules**:
- `js-only` class hides the bar when JS is unavailable (CSS rule: `.js .js-only { display: flex }`).
- Exactly one button has `aria-pressed="true"` at any time.
- The `data-filter` value matches the tag string exactly (lowercase).
- Clicking a button whose `data-filter` equals the currently active filter sets it back to `"all"`.

**Empty state** (tag has no articles):
```html
<p class="filter-empty" aria-live="polite">No articles tagged "alomac" yet.</p>
```
- Injected into the article list container by JS when the filtered result is empty.
- `aria-live="polite"` announces the change to screen readers.

---

## Carousel Contract

```html
<section class="carousel" aria-label="Browse by category" aria-roledescription="carousel">
  <div class="carousel-track" aria-live="off">
    <div class="carousel-slide" aria-hidden="false" data-tag="legos">
      <img src="/images/carousel/legos.jpg" alt="legos category" loading="eager" />
      <div class="carousel-caption">
        <p class="carousel-tagline">Brick by brick</p>
      </div>
    </div>
    <!-- additional slides -->
  </div>

  <!-- navigation dots, JS-injected -->
  <div class="carousel-dots js-only" role="tablist" aria-label="Carousel navigation">
    <button role="tab" aria-selected="true"  aria-label="Slide 1 of 3" data-slide="0"></button>
    <button role="tab" aria-selected="false" aria-label="Slide 2 of 3" data-slide="1"></button>
  </div>
</section>
```

**Rules**:
- Only the active slide has `aria-hidden="false"`; all others have `aria-hidden="true"`.
- `aria-live="off"` on the track prevents auto-rotation from spamming screen readers.
- Carousel is omitted entirely (not rendered) when `carouselSlides` is empty.
- Clicking any slide triggers: (1) smooth scroll to `#article-filter`, (2) activate
  the matching tag filter.
- Navigation dots are injected by JS; without JS, no dots are shown and the track
  displays as a horizontal scroll strip.

**No-JS fallback CSS**:
```css
/* Applied when <html> lacks class="js" */
.carousel-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.carousel-slide {
  flex: 0 0 80vw;
  scroll-snap-align: start;
  /* all slides visible, horizontally scrollable */
}
```

---

## Footer Contract

```html
<footer class="site-footer" aria-label="Site links">
  <div class="footer-inner">
    <section class="footer-group">
      <h3 class="footer-group__label">Contact</h3>
      <ul>
        <li><a href="mailto:jeff@thronebuilder.com">jeff@thronebuilder.com</a></li>
        <li><a href="mailto:jjames315@live.com">jjames315@live.com</a></li>
      </ul>
    </section>
    <section class="footer-group">
      <h3 class="footer-group__label">Professional</h3>
      <ul>
        <li>
          <a href="https://linkedin.com/in/jeff-james"
             target="_blank" rel="noopener noreferrer">
            LinkedIn<span class="sr-only"> (opens in new tab)</span>
          </a>
        </li>
      </ul>
    </section>
    <!-- Code, Video, Social groups follow the same pattern -->
  </div>
</footer>
```

**Rules**:
- `<footer>` is the last child of `<body>` in `BaseLayout.astro`.
- All external links (`https://`) MUST have `target="_blank" rel="noopener noreferrer"`.
- All external links MUST have a visually hidden `(opens in new tab)` notice.
- Email links use `mailto:` with no `target` attribute.
- `<h3>` headings inside the footer do not break heading hierarchy because they are
  inside `<section>` elements with distinct landmark roles.
- `.sr-only` class (screen-reader only) defined in `global.css`.
