# Quickstart: Homepage Visual Redesign — Tags, Filtering & Carousel

**Feature**: 002-visual-tags-carousel | **Date**: 2026-05-28

---

## Dev Environment

```powershell
# Ensure you're on the feature branch
git checkout 002-visual-tags-carousel

# Install dependencies (unchanged from previous feature)
npm install

# Start dev server
npm run dev
# → http://localhost:4321
```

---

## Testing Each User Story Independently

### US1 — Tag Filtering

1. Start dev server (`npm run dev`)
2. Open http://localhost:4321
3. Verify each article card shows its tag(s) in small text below the title
4. Click a tag button (e.g., "legos") — verify only lego-tagged articles remain visible
5. Click the active button again — verify all articles reappear
6. Click "All" — verify all articles reappear
7. **No-JS test**: In Chrome DevTools → Settings → Debugger → "Disable JavaScript"
   - Reload page; verify all articles are visible and filter buttons are hidden (not broken)
   - Tag badges should still be visible as plain text

**Sample article frontmatter for testing**:
```yaml
tags: ["legos"]          # single tag
tags: ["family", "legos"] # multiple tags
tags: []                  # no tags — should appear only in "All" view
# (omit tags field entirely — same as empty array)
```

---

### US2 — Visual Article Grid

1. Ensure at least two articles exist: one with `coverImage`, one without
2. Open http://localhost:4321
3. Verify the first article (hero) shows a large cover image with title overlaid
4. Verify subsequent articles with cover images show image-above-title layout
5. Verify an article without `coverImage` shows as a clean text-only card (no broken image)
6. Verify the page uses a white background and Playfair Display heading font
7. Run Lighthouse: `npm run build && npm run preview` → open in Chrome DevTools Lighthouse
   → confirm all four scores ≥ 90

**Checklist for visual layout**:
- [ ] First card is wider/more prominent than the others (hero variant)
- [ ] Title on hero card is overlaid on the image (not below)
- [ ] Standard cards have image above title
- [ ] Text-only cards have no image or placeholder
- [ ] Page feels like an editorial/magazine grid, not a plain list

---

### US3 — Category Carousel

1. Add at least one entry to `src/data/carousel.ts` with a real image path
2. Place the image file in `public/images/carousel/`
3. Open http://localhost:4321
4. Verify the carousel appears above the filter bar
5. Wait 5 seconds — verify the carousel advances automatically
6. Click a carousel slide — verify (a) smooth scroll to article list, (b) tag filter activates
7. **No-JS test**: Disable JS in DevTools, reload
   - Verify carousel content is visible as a horizontal scroll strip
   - Navigation dots should be absent; no auto-rotation

**Minimal carousel.ts for testing**:
```ts
export const carouselSlides = [
  {
    tag: 'legos' as const,
    image: '/images/carousel/legos-placeholder.jpg',
    tagline: 'Brick by brick',
  },
  {
    tag: 'family' as const,
    image: '/images/carousel/family-placeholder.jpg',
    tagline: 'The people who matter most',
  },
];
```

---

### US4 — Footer Links

1. Open http://localhost:4321 and an article page (e.g., http://localhost:4321/blog/2026-05-27-hello-thronebuilder/)
2. Verify the footer is visible on both pages after scrolling to the bottom
3. Verify links are organized into labeled groups (Contact, Professional, Code, Video, Social)
4. Click each link:
   - Email links should open your mail client with the address pre-filled
   - External links should open in a new browser tab
5. **Mobile test**: Resize browser to 375 px wide — verify no horizontal overflow, links remain tappable
6. **Screen reader test** (optional): Use NVDA/VoiceOver — the footer `aria-label` and
   group `<h3>` headings should be announced clearly

---

## Deploying to Preview

```powershell
# Build locally and check for errors
npm run build
# → look for zero errors, zero warnings

# Preview locally
npm run preview
# → http://localhost:4321 (production build)

# Push to trigger Render auto-deploy
git push origin 002-visual-tags-carousel
# → Check https://thronebuilder.onrender.com (Render preview URL)
# → After domain DNS, check https://thronebuilder.com
```

---

## Adding Your First Real Carousel Image

1. Prepare a 1440×600 px image (`.jpg` or `.webp`)
2. Place it at `public/images/carousel/legos.jpg` (or your chosen tag)
3. Edit `src/data/carousel.ts`:
   ```ts
   { tag: 'legos', image: '/images/carousel/legos.jpg', tagline: 'Your tagline here' }
   ```
4. Save and verify at http://localhost:4321 — the carousel slide should appear

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Filter buttons missing | JS disabled or `js-only` CSS class issue | Check browser console, verify inline script ran |
| Carousel not rotating | `setInterval` not starting | Check JS errors in console |
| Carousel slide blank | Image path wrong | Verify file exists at `public/images/carousel/...` |
| Tags not filtering | `data-tags` attribute missing | Verify `index.astro` renders `data-tags={post.data.tags.join(' ')}` |
| Footer missing on article pages | Footer not in `BaseLayout.astro` | Check layout file |
| Build error on tags field | Zod schema not updated | Verify `config.ts` has `tags: z.array(...)` field |
