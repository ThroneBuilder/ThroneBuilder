# Data Model: Homepage Visual Redesign — Tags, Filtering & Carousel

**Feature**: 002-visual-tags-carousel | **Date**: 2026-05-28

---

## Modified Entity: Article (Blog Post)

**File location**: `src/content/blog/YYYY-MM-DD-slug.md`

**Schema change**: Add optional `tags` field to the existing Zod schema in
`src/content/config.ts`.

```ts
// BEFORE (existing)
schema: z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  description: z.string(),
  coverImage: z.string().optional(),
  youtubeUrl: z.string().url().optional(),
})

// AFTER (this feature)
const TAG_VALUES = ['family', 'friends', 'career', 'alomac', 'legos'] as const;
export type Tag = typeof TAG_VALUES[number];

schema: z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  description: z.string(),
  coverImage: z.string().optional(),
  youtubeUrl: z.string().url().optional(),
  tags: z.array(z.enum(TAG_VALUES)).optional().default([]),
})
```

**Frontmatter example** (article with tags):
```yaml
---
title: "My LEGO Castle Build"
pubDate: 2026-05-28
description: "A 10,000-piece recreation of Minas Tirith."
coverImage: "/images/blog/lego-castle.jpg"
tags: ["legos"]
---
```

**Validation rules**:
- `tags` is optional; omitting it is equivalent to an empty array.
- Values must be from the fixed enum; an invalid tag fails the build with a clear
  Zod error.
- An article may have multiple tags: `tags: ["family", "legos"]`.

---

## New Entity: CarouselSlide

**File location**: `src/data/carousel.ts`

**Shape**:
```ts
export const TAG_VALUES = ['family', 'friends', 'career', 'alomac', 'legos'] as const;
export type Tag = typeof TAG_VALUES[number];

export interface CarouselSlide {
  tag: Tag;
  image: string;      // absolute path from public root, e.g. '/images/carousel/family.jpg'
  tagline: string;    // short phrase, e.g. "The people who matter most"
}

export const carouselSlides: CarouselSlide[] = [
  // Populated by site owner. Leave empty array until images are provided.
  // Example:
  // { tag: 'legos', image: '/images/carousel/legos.jpg', tagline: 'Brick by brick' },
];
```

**Rendering rules**:
- Only slides where both `image` and `tagline` are non-empty strings are rendered.
- If `carouselSlides` is empty or all slides are invalid, the carousel section is
  omitted entirely — no empty container is shown.
- If only one valid slide exists, the carousel renders as a static banner (no
  auto-rotation, no navigation dots).

**Image file convention**:
- Placed in `public/images/carousel/`
- Recommended dimensions: 1440 × 600 px (16:4.4 ratio, wide banner format)
- Format: `.jpg` or `.webp`; `.webp` preferred for performance

---

## Modified Entity: Site Constants

**File location**: `src/consts.ts`

**Change**: Add `SITE_LINKS` constant for footer links.

```ts
// Add to existing consts.ts
export const SITE_LINKS = {
  contact: [
    { label: 'jeff@thronebuilder.com', href: 'mailto:jeff@thronebuilder.com' },
    { label: 'jjames315@live.com',     href: 'mailto:jjames315@live.com' },
  ],
  professional: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jeff-james' },
  ],
  code: [
    { label: 'GitHub', href: 'https://github.com/ThroneBuilder' },
  ],
  video: [
    { label: 'YouTube', href: 'https://www.youtube.com/@thronebuilder' },
  ],
  social: [
    { label: 'Facebook (ThroneBuilder)', href: 'https://www.facebook.com/ThroneBuilder' },
    { label: 'Facebook (personal)',       href: 'https://www.facebook.com/jjames315' },
  ],
} as const;
```

**Notes**:
- The `as const` assertion provides full type inference for label/href pairs.
- Email links use `mailto:` protocol — no `target="_blank"` (mail clients handle this).
- All external http/https links get `target="_blank" rel="noopener noreferrer"`.

---

## Tag Enumeration (Shared Constant)

To avoid duplicating the tag list across `config.ts` and `carousel.ts`, the
canonical list is defined once and imported where needed:

**Option A** (simple): Define `TAG_VALUES` in `src/consts.ts` and import into both.

**Option B** (co-location): Define in `src/content/config.ts` and export; import
into `carousel.ts`.

**Recommendation**: Option A — `consts.ts` is already the site-wide constants file.
`carousel.ts` and `config.ts` both import from there.

---

## Rendering State (Client-Side, No Persistence)

The tag filter state is ephemeral — it lives only in the browser's JavaScript memory
for the duration of the page visit.

| State | Type | Initial value | Persistence |
|-------|------|---------------|-------------|
| `activeTag` | `Tag \| 'all'` | `'all'` | None (lost on navigation) |

**Transitions**:
- `'all'` → `tag`: user clicks a tag button
- `tag` → `'all'`: user clicks the active tag button again, or clicks "All"
- `tag` → `tag`: user clicks a different tag button

Each transition triggers:
1. Update `activeTag`
2. For each article card: show if `activeTag === 'all'` or card's `data-tags`
   includes `activeTag`; hide otherwise
3. Update button `aria-pressed` and visual active state
