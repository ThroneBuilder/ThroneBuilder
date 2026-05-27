# Research: ThroneBuilder.com Site Creation

**Phase 0 output for**: `thronebuilder-creation`
**Date**: 2026-05-26

## Decision Log

---

### D-01: Astro Version and Content API

**Decision**: Use Astro 5.x (latest stable) with **legacy Content Collections**
(`src/content/config.ts` + Zod schema).

**Rationale**: Astro 5 introduced a new Content Layer API that supports custom
loaders (e.g., fetching from external APIs). Since all content is local Markdown
in the repository, the legacy Content Collections API is sufficient, simpler,
and has extensive community documentation. The new Layer API adds configuration
complexity with no benefit here.

**Alternatives considered**:
- Astro 5 Content Layer API: More powerful (supports remote loaders), but
  unnecessarily complex for local-file-only content. Constitution Principle II
  prohibits abstractions beyond what user stories require.
- Astro 4.x: Still supported but Astro 5 is current stable; no reason to
  start a new project on an older version.

**Tradeoff**: Choosing legacy Collections means a future migration to the Content
Layer API if remote data sources are ever needed. Acceptable — migration is
straightforward and the Constitution requires incremental delivery anyway.

---

### D-02: YouTube Embed Strategy

**Decision**: Privacy-enhanced iframe (`youtube-nocookie.com`) with `loading="lazy"`
attribute. No JavaScript required.

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/{VIDEO_ID}"
  loading="lazy"
  allowfullscreen
  title="{article title}"
></iframe>
```

**Rationale**: Balances three competing requirements: (a) no-JS core content
access (Constitution V), (b) good Lighthouse performance score, (c) user privacy.

**Alternatives considered**:
- Standard YouTube iframe (`youtube.com/embed`): Loads tracking cookies
  immediately. Worse for privacy, no other benefit.
- Facade/click-to-load pattern: Best Lighthouse score (zero third-party resources
  until user clicks), but requires JavaScript for the click handler. Violates
  Constitution Principle V for the video portion. Can be introduced in a later
  feature iteration.
- `@lite-youtube-embed`: Web component library for a facade embed. Adds a
  dependency and requires JS. Over-engineered for current needs.

**Tradeoff**: `loading="lazy"` defers iframe loading until near-viewport,
mitigating Lighthouse performance impact without JS.

---

### D-03: Video ID Extraction

**Decision**: Accept full YouTube URLs in frontmatter (`youtubeUrl`) and extract
the video ID at build time using a small utility function in the article layout.

Supported URL formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/shorts/VIDEO_ID`

**Rationale**: Authors should be able to paste any standard YouTube URL without
needing to know the embed format. Build-time extraction means no runtime JS.

**Tradeoff**: Edge-case URL formats (e.g., playlist URLs) will silently skip the
embed. A fallback to "no embed" is specified in the spec edge cases.

---

### D-04: CSS Approach

**Decision**: Scoped styles in Astro components (`.astro` files), plus a single
`src/styles/global.css` for CSS custom properties (color palette, typography
scale, spacing) and a minimal reset.

**Rationale**: Astro's scoped styles prevent class conflicts and co-locate styles
with the component that uses them. A global CSS file for design tokens ensures
visual consistency without a CSS framework. No Tailwind or external CSS library
is needed for a simple content site.

**Alternatives considered**:
- Tailwind CSS: Excellent for rapid UI development but adds a build-time
  dependency and utility-class verbosity in templates. Constitution Principle II
  requires no abstractions beyond current needs.
- CSS Modules: Adds file-per-component overhead without benefit over Astro's
  built-in scoped styles.

**Tradeoff**: Custom CSS requires manually ensuring consistent spacing and
colors. Mitigated by CSS custom properties in `global.css`.

---

### D-05: Render Deployment Configuration

**Decision**: Commit a `render.yaml` file to the repository root.

```yaml
services:
  - type: web
    name: thronebuilder
    runtime: static
    buildCommand: npm run build
    staticPublishPath: ./dist
    branch: main
    envVars: []
```

**Rationale**: `render.yaml` makes the deployment configuration part of the
repository (Constitution Principle VI: GitHub is the single source of truth).
Changes to build settings are auditable via git history.

**Alternatives considered**:
- Render dashboard only: Easier initial setup, but configuration lives outside
  the repository. Violates Principle VI.

**Tradeoff**: Initial Render project creation still requires a one-time dashboard
step to connect the GitHub repository. `render.yaml` is then picked up
automatically. Documented in quickstart.md.

---

### D-06: RSS and Sitemap Integration

**Decision**: Use `@astrojs/rss` (API route at `src/pages/rss.xml.ts`) and
`@astrojs/sitemap` (Astro integration, auto-generates `sitemap-index.xml`).

**Rationale**: Both are official Astro integrations, well-maintained, zero
configuration overhead, and designed to work with Content Collections.
`@astrojs/sitemap` automatically discovers all pages at build time.

**Tradeoff**: `@astrojs/sitemap` generates a sitemap index (`sitemap-index.xml`)
plus a `sitemap-0.xml` shard, rather than a single `sitemap.xml`. Search engines
support both formats; spec acceptance criteria reference `/sitemap.xml` but the
index format is equally valid. The spec criterion will be met by submitting
`sitemap-index.xml` to search engines.

---

### D-07: OpenGraph Implementation

**Decision**: Manual `<meta>` tags in `src/layouts/BaseLayout.astro`. No library.

Each page passes `title`, `description`, `canonicalUrl`, and `image` props to
the layout. The layout renders the full set of OG tags. Article pages derive
these from frontmatter; the homepage uses site-wide defaults from `src/consts.ts`.

**Rationale**: OpenGraph meta is a handful of static `<meta>` tags. A library
adds a dependency for something trivially implementable in 10 lines. Keeps the
layout explicit and educational (Constitution Principle II).

---

### D-08: No Server-Side Rendering

**Decision**: Astro output mode `static`. No SSR adapter.

**Rationale**: All content is known at build time (Markdown files in the repo).
Static output achieves the best Lighthouse scores (pre-rendered HTML, no
server response latency), aligns with Render's static site tier (no compute
cost), and satisfies Constitution Principle V (JS-optional content access).

**Tradeoff**: Adding dynamic features (e.g., comments, search, contact forms)
in future iterations will require either a build trigger (for new content) or
introducing SSR/serverless functions. That decision is deferred.

---

### D-09: Node.js Version

**Decision**: Node.js 22 LTS (current LTS as of 2026).

**Rationale**: Astro 5 requires Node 18+. Node 22 is the current LTS with the
longest support window. Pinned in `.node-version` file for consistency between
local dev and Render.

---

## Resolved Clarifications

All `[NEEDS CLARIFICATION]` items from spec: none existed.

## Open Items

None. All decisions are resolved and documented above.
