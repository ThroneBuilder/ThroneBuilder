# Quickstart: ThroneBuilder.com Dev Environment

**Feature**: `thronebuilder-creation`
**Last updated**: 2026-05-26

This guide walks through setting up the local development environment, running
the site locally, and verifying a first article end-to-end before deploying
to Render.

---

## Prerequisites

| Tool | Required version | Check |
|------|-----------------|-------|
| Node.js | 22 LTS | `node --version` → `v22.x.x` |
| npm | 10+ (ships with Node 22) | `npm --version` |
| Git | Any recent version | `git --version` |

**Node version management**: The repo includes a `.node-version` file pinned to
`22`. If you use `nvm`, run `nvm use` in the repo root. If you use `fnm`, it
picks up `.node-version` automatically.

---

## Step 1: Initialize the Astro project

From the repository root:

```bash
npm create astro@latest . -- --template minimal --typescript strict --no-install --no-git
```

Flags explained:
- `--template minimal` — blank slate, no example pages
- `--typescript strict` — enables strict TypeScript; aligns with Astro's own
  recommendation
- `--no-install` — skip the auto-install so we can add integrations first
- `--no-git` — repo already initialized

After the scaffold is created, install all dependencies at once:

```bash
npm install
npm install @astrojs/sitemap @astrojs/rss
```

---

## Step 2: Configure Astro

Replace the contents of `astro.config.mjs` with:

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thronebuilder.com',
  integrations: [sitemap()],
  output: 'static',
});
```

**Why `site` is required**: `@astrojs/sitemap` and `@astrojs/rss` both need the
absolute base URL to generate canonical links. It must match `SITE_URL` in
`src/consts.ts`.

---

## Step 3: Create the content schema

Create `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    pubDate:     z.coerce.date(),
    description: z.string(),
    coverImage:  z.string().optional(),
    youtubeUrl:  z.string().url().optional(),
  }),
});

export const collections = { blog };
```

Create `src/consts.ts`:

```typescript
export const SITE_TITLE       = 'ThroneBuilder';
export const SITE_DESCRIPTION = 'Strategy, history, and analysis.';
export const SITE_URL         = 'https://thronebuilder.com';
export const DEFAULT_OG_IMAGE = '/images/og-default.png';
```

---

## Step 4: Run the dev server

```bash
npm run dev
```

The site is now available at `http://localhost:4321`. The dev server supports
hot-reload — saving any file updates the browser immediately.

To verify the build (as Render will run it):

```bash
npm run build && npm run preview
```

`preview` serves the `dist/` directory at `http://localhost:4321` for final
local validation before deployment.

---

## Step 5: Add a first article

Create `src/content/blog/2026-05-26-hello-thronebuilder.md`:

```markdown
---
title: "Hello, ThroneBuilder"
pubDate: 2026-05-26
description: "The ThroneBuilder.com site is live. Here's what to expect."
---

Welcome to ThroneBuilder. This is the first post on the new site.
```

Save the file. The dev server hot-reloads — navigate to `http://localhost:4321`
and confirm the article title appears in the list.

Navigate to the article URL (e.g.,
`http://localhost:4321/blog/2026-05-26-hello-thronebuilder/`) and confirm the
full body renders.

**Browser test — JS disabled** (Constitution Principle V check):
1. Open Chrome DevTools → Settings → Debugger → "Disable JavaScript"
2. Reload the homepage and article page
3. Confirm the content is still readable

---

## Step 6: Validate SEO outputs

After `npm run build`:

```bash
npm run preview
```

- **Sitemap**: `http://localhost:4321/sitemap-index.xml` — confirm the article
  URL is listed
- **RSS**: `http://localhost:4321/rss.xml` — confirm the article appears as an
  `<item>`
- **OpenGraph**: Use the browser developer tools to inspect `<head>` on the
  article page — confirm `og:title`, `og:description`, `og:image`, and
  `og:url` are present

---

## Step 7: Deploy to Render

### One-time Render setup (dashboard)

1. Log into [render.com](https://render.com) and click **New → Static Site**
2. Connect the GitHub repository (`ThroneBuilder`)
3. Render detects `render.yaml` automatically — confirm these settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Branch**: `main`
4. Click **Create Static Site**

Render assigns a preview URL (e.g., `https://thronebuilder.onrender.com`).
All subsequent deployments happen automatically on push to `main`.

### Custom domain

1. In the Render dashboard, go to **Settings → Custom Domains**
2. Add `thronebuilder.com` and `www.thronebuilder.com`
3. Render provides DNS values (CNAME or A records)
4. Update DNS at your registrar to point to the Render-assigned values
5. Render provisions SSL automatically via Let's Encrypt

### `render.yaml` (already committed)

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

---

## Lighthouse Audit (acceptance gate)

After deploying to Render (or using the preview URL):

1. Open Chrome DevTools → **Lighthouse** tab
2. Select all four categories: Performance, Accessibility, Best Practices, SEO
3. Run on **Desktop** and **Mobile**
4. All four scores MUST be ≥ 90 (Constitution Principle V)

Common causes of score drops and fixes:
- **Performance < 90**: Add `width`/`height` attributes to `<img>` tags to prevent
  layout shift; verify `loading="lazy"` on the YouTube iframe
- **Accessibility < 90**: Check `alt` text on all images; verify heading order
  (`h1` → `h2` → `h3`); add a skip-navigation link in `BaseLayout.astro`
- **SEO < 90**: Verify `<meta name="description">` and `<link rel="canonical">`
  are present on every page

---

## Common Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static output to dist/
npm run preview   # Serve dist/ locally for final verification
```
