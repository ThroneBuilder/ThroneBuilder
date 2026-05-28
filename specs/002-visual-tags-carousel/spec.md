# Feature Specification: Homepage Visual Redesign — Tags, Filtering & Carousel

**Feature Branch**: `002-visual-tags-carousel`

**Created**: 2026-05-28

**Status**: Draft

**Input**: User description: "Let's make ThroneBuilder.com more visually interesting. Each blog entry should have tags including family, friends, career, alomac, or legos. Those should be shown in a small font on the home page and the list filterable by buttons with those tags above the list. Above that, let's add a carousel for each of those tags to which I will supply an image and tag line. The carousel image should rotate automatically through those. Clicking on the image should jump down to the list filtered by that tag. Let's show the blog entries with a key image on the home page and update the look to resemble a website like salon.com with a varied layout, some titles on the image, some below. Let's try a white background and interesting font choices. I've used Aptos Black for some Lego Throne content, which might work for the top of page font."

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Browse and Filter Articles by Tag (Priority: P1)

A visitor arrives at ThroneBuilder.com and sees each article labeled with its
category tag (family, friends, career, alomac, or legos) in small text. A row of
tag buttons sits above the article list. Clicking a tag button filters the list to
show only articles with that tag. Clicking the button again (or an "All" button)
restores the full list. No page reload occurs.

**Why this priority**: Tags and filtering give the site's content meaningful
structure and make it easy for a visitor to find articles relevant to them.
Everything else in this feature builds on top of articles having tags.

**Independent Test**: Add a tag field to two or three sample articles using
different tags. Verify each article's tag appears in small text on the homepage.
Click a tag button and verify only matching articles remain visible. Click "All"
and verify all articles reappear. Test with JavaScript disabled — tags must still
be visible even if filtering is static only.

**Acceptance Scenarios**:

1. **Given** an article has a tag, **When** a visitor loads the homepage, **Then**
   the article's tag is displayed in small text on the article card.
2. **Given** the homepage is loaded, **When** a visitor clicks a tag button, **Then**
   only articles with that tag are displayed in the list.
3. **Given** a tag filter is active, **When** a visitor clicks "All" or the active
   tag button again, **Then** all articles are shown.
4. **Given** a visitor has JavaScript disabled, **When** they load the homepage,
   **Then** all articles are visible and tags are readable (filtering may be
   unavailable, but content is not hidden).

---

### User Story 2 — Visual Article Grid with Cover Images (Priority: P2)

A visitor sees article cards that display a cover image prominently, along with
title, date, tag, and a short description. The layout varies across cards — some
have the title overlaid on the image, others have it below — creating a
magazine-style rhythm similar to editorial sites. The overall page uses a white
background with bold, high-impact display typography for headings. Articles without
a cover image render in a text-only card variant so they are never broken.

**Why this priority**: The visual upgrade transforms the reading experience from a
plain list to an engaging editorial surface. It also establishes the typographic
and color identity that the carousel (US3) will match.

**Independent Test**: Run the site with at least one article that has a cover image
and one that does not. Verify the cover-image article shows the image prominently;
verify the no-image article renders as a clean text card without broken image
placeholders. Verify the layout feels varied (not all identical rectangles). Run
Lighthouse and confirm all four scores remain ≥ 90.

**Acceptance Scenarios**:

1. **Given** an article has a `coverImage`, **When** a visitor views the homepage,
   **Then** the image is displayed on the article card.
2. **Given** an article has no `coverImage`, **When** a visitor views the homepage,
   **Then** the article card renders cleanly with text only — no broken image icon.
3. **Given** the homepage is rendered, **When** a visitor inspects the layout,
   **Then** article cards show visual variety (titles in different positions, varying
   card sizes or proportions).
4. **Given** the homepage is rendered, **When** Lighthouse is run, **Then** all four
   scores (Performance, Accessibility, Best Practices, SEO) remain ≥ 90.

---

### User Story 3 — Category Carousel (Priority: P3)

At the top of the homepage, above the filter buttons and article list, a full-width
carousel displays one slide per content tag (family, friends, career, alomac,
legos). Each slide shows a custom image and a short tagline supplied by the site
owner. The carousel rotates automatically through the slides. Clicking a slide
scrolls the page down to the article list and activates the filter for that tag —
so the visitor immediately sees articles in that category.

**Why this priority**: The carousel is a high-impact entry point that promotes
content categories. It depends on tag filtering (US1) working correctly, so it
follows that story. It is not required for the core content experience.

**Independent Test**: Supply one image and tagline for two different tags via the
site's content configuration. Verify both slides appear in the carousel. Let the
carousel auto-rotate and confirm it advances on its own. Click a slide and confirm
(a) the page scrolls to the article list and (b) the clicked tag's filter is
activated. Verify the carousel works with JavaScript disabled by confirming the
first slide (or a static grid of category cards) is visible and readable.

**Acceptance Scenarios**:

1. **Given** a carousel image and tagline have been provided for a tag, **When** a
   visitor loads the homepage, **Then** a carousel slide showing that image and
   tagline is present.
2. **Given** the carousel is displaying, **When** no user interaction occurs,
   **Then** the carousel automatically advances to the next slide at a regular
   interval (approximately 5 seconds).
3. **Given** the carousel is displaying, **When** a visitor clicks a slide, **Then**
   the page scrolls to the article list and filters it by that slide's tag.
4. **Given** a visitor has JavaScript disabled, **When** they load the homepage,
   **Then** carousel content (images and taglines) remains visible — either as a
   static grid or showing the first slide.

---

### User Story 4 — Find Contact and Social Links (Priority: P4)

A visitor who wants to contact the site owner or follow ThroneBuilder on social
media finds a clearly organized set of links in a persistent footer visible on
every page of the site. Links are grouped by type (contact, professional,
social/video) so visitors know what to expect before clicking. The footer appears
on the homepage and on every article page.

**Why this priority**: Contact and social links give visitors a way to engage
beyond reading. Placed at P4 because the content and visual redesign deliver the
core value; the footer is a standard quality-of-life addition that rounds out the
site.

**Independent Test**: Load the homepage and an article page. Verify the footer
is present on both. Click each link and confirm it opens the correct destination.
Verify links open in a new tab so the visitor does not leave ThroneBuilder.com.
Verify the footer is legible and not broken at mobile viewport widths.

**Acceptance Scenarios**:

1. **Given** a visitor is on any page, **When** they scroll to the bottom,
   **Then** a footer is visible containing categorized contact and social links.
2. **Given** a visitor clicks an email link in the footer, **When** their mail
   client opens, **Then** the correct email address is pre-filled.
3. **Given** a visitor clicks a social or professional link in the footer,
   **When** the link opens, **Then** it opens in a new browser tab and takes the
   visitor to the correct external profile.
4. **Given** a visitor is on a mobile device, **When** they scroll to the footer,
   **Then** the links are legible and tappable without horizontal scrolling.

---

### Edge Cases

- What happens when an article has no tag assigned? It must still appear in the "All"
  view and must not cause a rendering error. It should not appear in any
  tag-filtered view.
- What happens when a tag has no articles? Its filter button should still be visible
  but clicking it shows an empty state message rather than a blank page.
- What happens when a carousel image for a tag has not yet been supplied? That tag's
  slide must be omitted from the carousel rather than showing a broken image.
- What happens if the carousel has only one slide (one tag configured)? The
  auto-rotation should not loop to itself; the carousel should be static.
- What happens to the active tag filter if the visitor navigates to an article and
  uses the browser back button? The filter state need not persist across navigation
  (stateless is acceptable for v1).
- What happens if a footer link URL changes? The footer link list is stored in a
  single configuration location so any URL can be updated in one place without
  touching page templates.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Each article MUST support an optional list of tags drawn from the
  set: family, friends, career, alomac, legos.
- **FR-002**: The homepage MUST display each article's tag(s) in small, legible
  text on the article card.
- **FR-003**: The homepage MUST display a row of filter buttons — one per tag plus
  an "All" button — above the article list.
- **FR-004**: Clicking a tag filter button MUST show only articles that have that
  tag; clicking "All" MUST restore the complete unfiltered list.
- **FR-005**: The homepage MUST display a cover image on article cards where a
  cover image has been provided; cards without a cover image MUST render as a
  clean text-only variant.
- **FR-006**: The article card layout MUST vary in presentation (image-over-title,
  title-over-image, text-only) to produce an editorial, magazine-style rhythm.
- **FR-007**: The homepage MUST render on a white background with bold display
  typography for headings and section titles.
- **FR-008**: A carousel MUST be present above the filter buttons showing one slide
  per tag for which an image and tagline have been configured.
- **FR-009**: Each carousel slide MUST display the tag's configured image and
  tagline.
- **FR-010**: The carousel MUST advance automatically at a regular interval without
  user interaction.
- **FR-011**: Clicking a carousel slide MUST scroll the viewport to the article
  list and activate the filter for that slide's tag.
- **FR-012**: The homepage MUST remain fully readable with JavaScript disabled
  (tags visible, all articles shown, carousel content visible in static form).
- **FR-013**: All four Lighthouse scores MUST remain ≥ 90 after this feature is
  deployed.
- **FR-014**: Every page MUST include a persistent footer containing the site
  owner's contact and social links, organized into labeled groups (contact,
  professional, social/video).
- **FR-015**: All footer links to external sites MUST open in a new tab; email
  links MUST use the mailto: protocol so they open in the visitor's mail client.

### Key Entities

- **Article**: Existing entity. Gains an optional `tags` field containing zero or
  more values from the allowed tag set. All other existing fields are unchanged.
- **Tag**: One of five fixed values — family, friends, career, alomac, legos.
  Used as both the article metadata field and the carousel/filter identifier.
- **Carousel Slide**: Configuration entry for a single tag. Fields: tag (which tag
  it represents), image (path to a photo supplied by the site owner), tagline
  (short marketing phrase, e.g., "Brick by brick"). A slide only appears in the
  carousel if both image and tagline are configured.
- **Site Links**: Footer link configuration. Groups and values:
  - *Contact*: jeff@thronebuilder.com (primary), jjames315@live.com (personal)
  - *Professional*: linkedin.com/in/jeff-james
  - *Code*: github.com/ThroneBuilder
  - *Video*: youtube.com/@thronebuilder
  - *Social*: facebook.com/ThroneBuilder (brand page), facebook.com/jjames315 (personal)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Every article on the homepage shows its tag(s) in text that is
  visually distinct from the title and body excerpt.
- **SC-002**: A visitor can filter the article list to a single tag within one
  click and return to the full list within one additional click.
- **SC-003**: Every article card on the homepage shows a cover image when one is
  available; no card shows a broken image placeholder.
- **SC-004**: The homepage visual design is recognizably editorial — a reviewer
  unfamiliar with the previous design would describe it as "magazine-style" rather
  than "plain list."
- **SC-005**: The carousel auto-advances without user interaction and all
  configured slides are reachable by waiting.
- **SC-006**: Clicking any carousel slide activates the corresponding tag filter
  and scrolls to the article list in a single user action.
- **SC-007**: All four Lighthouse scores remain ≥ 90 on the redesigned homepage.
- **SC-008**: The homepage and article pages render correctly at mobile viewport
  widths (≤ 480 px) with no horizontal overflow.
- **SC-009**: Every link in the footer is reachable and navigates to the correct
  destination; external links open in a new tab without leaving ThroneBuilder.com.

## Assumptions

- The five tags (family, friends, career, alomac, legos) are the complete set for
  v1; adding new tags is a future enhancement.
- An article may have zero, one, or multiple tags. The multi-tag case must be
  handled, but filtering by one tag shows all articles that include that tag
  (intersection not required).
- Carousel images are supplied by the site owner as static files committed to the
  repository; there is no upload UI.
- "Aptos Black" is not a standard web font and is not freely distributable. The
  design will use a visually similar high-impact display font available as a free
  web font (e.g., a bold geometric or editorial serif). If the owner later provides
  the Aptos Black font file, it can be substituted with a single CSS change.
- Tag filtering is client-side (JavaScript) for a smooth experience; the no-JS
  fallback shows all articles (no server-side filtering required for this static
  site).
- Carousel slide configuration (image path + tagline per tag) is stored in the
  repository as a data file, not inside individual articles.
- Article pages (the full-article view) are not visually redesigned in this
  feature; however the footer (US4) is added to all pages via the shared layout.
- Footer link configuration is stored alongside the existing site constants so
  all links are updated in one file.
