# Contract: Article Content Schema

**Version**: 1.0.0
**Owner**: `src/content/config.ts`
**Consumers**: `src/pages/index.astro`, `src/pages/blog/[...slug].astro`,
`src/pages/rss.xml.ts`, `@astrojs/sitemap`

---

## File Location Contract

All article files MUST be placed in `src/content/blog/`.

**Naming convention**: `YYYY-MM-DD-descriptive-slug.md`

```
src/content/blog/
├── 2026-05-26-welcome-to-thronebuilder.md
├── 2026-06-01-building-with-astro.md
└── ...
```

The filename slug becomes the URL path:
`src/content/blog/2026-05-26-welcome-to-thronebuilder.md`
→ `https://thronebuilder.com/blog/2026-05-26-welcome-to-thronebuilder/`

---

## Frontmatter Contract

Every article MUST begin with a YAML frontmatter block delimited by `---`.

### Required Fields

```yaml
---
title: "Your Article Title"
pubDate: 2026-05-26
description: "A one- or two-sentence summary used as the meta description and homepage excerpt. Keep under 160 characters for optimal SEO."
---
```

### Optional Fields

```yaml
---
# ... required fields above ...
coverImage: "/images/my-article-cover.jpg"
youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
---
```

### Field Reference

| Field | Type | Constraints | SEO Impact |
|-------|------|-------------|------------|
| `title` | string | Non-empty. Appears in `<h1>`, `<title>`, `og:title`, RSS item title. | High |
| `pubDate` | ISO 8601 date | `YYYY-MM-DD` format. Used for sort order. | Medium |
| `description` | string | Non-empty. Target ≤ 160 chars. | High — becomes `meta description` and `og:description` |
| `coverImage` | string (optional) | Path relative to `public/` (e.g., `/images/cover.jpg`) or an absolute HTTPS URL. Falls back to site default if omitted. | Medium — becomes `og:image` |
| `youtubeUrl` | URL string (optional) | Full YouTube URL. Supported formats below. Embed omitted if invalid or absent. | None |

### Supported `youtubeUrl` Formats

```
https://www.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID
https://www.youtube.com/shorts/VIDEO_ID
```

---

## Article Body Contract

The Markdown body below the frontmatter is the article content.

- MUST use standard CommonMark Markdown.
- The article body MUST NOT begin with a top-level `# Heading` — the `title`
  frontmatter field is rendered as the `<h1>` by the article layout. Headings
  inside the body MUST start at `##`.
- Images referenced in the body MUST be placed in `public/images/` and referenced
  as `/images/filename.ext`.

---

## Validation

Astro validates all frontmatter fields against the Zod schema in
`src/content/config.ts` at build time. A build with invalid frontmatter WILL
fail with a descriptive error. This is intentional — the build gate enforces
content quality before deployment.
