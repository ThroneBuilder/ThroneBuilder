# Feature Specification: ThroneBuilder.com Site Creation

**Feature Branch**: `thronebuilder-creation`

**Created**: 2026-05-26

**Status**: Draft

**Input**: User description: "Build ThroneBuilder.com using this tech stack:
1. GitHub as the source of truth.
2. Astro as the site framework
3. SEO via RSS + sitemap + OpenGraph
4. Content managed on just created ThroneBuilder project on sanity.io
5. Video on existing ThroneBuilder YouTube channel.
6. Render for deployment."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse and Read Content (Priority: P1)

A visitor arrives at ThroneBuilder.com and can read the latest posts and articles
pulled from Sanity.io. They see a clean homepage with a list of recent content,
click an article, and read it in full. The experience works with JavaScript disabled.

**Why this priority**: Core value of the site is content delivery. Everything else
builds on top of this working correctly.

**Independent Test**: Deploy the Astro site with at least one piece of content in
Sanity.io. Confirm the homepage lists it and the article page renders it fully.
Verify the page renders with JS disabled in the browser.

**Acceptance Scenarios**:

1. **Given** a published article exists in Sanity.io, **When** a visitor opens the
   homepage, **Then** the article title and excerpt appear in the content list.
2. **Given** a visitor clicks an article title, **When** the article page loads,
   **Then** the full article body, title, and publish date are displayed.
3. **Given** a visitor has JavaScript disabled, **When** they load the homepage or
   any article page, **Then** the core content is still readable.

---

### User Story 2 - Watch Embedded Videos (Priority: P2)

A visitor navigates to a content page that includes a video and can watch it
directly on the site via an embedded YouTube player. The video is linked from the
ThroneBuilder YouTube channel and managed through Sanity.io.

**Why this priority**: Video is a primary content format for ThroneBuilder. Embedding
YouTube keeps hosting costs zero while surfacing that content on the owned domain.

**Independent Test**: Add a content item in Sanity.io with a YouTube video reference.
Confirm the video embeds and plays on the corresponding page without leaving the site.

**Acceptance Scenarios**:

1. **Given** a content item in Sanity.io has a YouTube video URL, **When** a visitor
   opens that page, **Then** an embedded video player is visible and playable.
2. **Given** a visitor plays the video, **When** playback starts, **Then** the video
   plays without redirecting away from ThroneBuilder.com.

---

### User Story 3 - Discover Content via Search Engines (Priority: P3)

Search engines and social platforms can discover and preview ThroneBuilder.com
content correctly. Each page has a meaningful title, description, and image
preview when shared on social media. An RSS feed and XML sitemap are available
for content syndication and crawling.

**Why this priority**: Long-term organic reach depends on SEO foundations. OpenGraph
enables rich previews when content is shared on Facebook, LinkedIn, and elsewhere.

**Independent Test**: Open the sitemap URL and confirm all published pages are listed.
Paste an article URL into a social card preview tool and confirm the title, description,
and image render correctly. Subscribe to the RSS feed in a reader and confirm articles appear.

**Acceptance Scenarios**:

1. **Given** the site is deployed, **When** a crawler requests `/sitemap.xml`,
   **Then** all published article URLs are listed with their last-modified dates.
2. **Given** the site is deployed, **When** a crawler requests `/rss.xml`,
   **Then** all published articles appear as valid RSS feed items with title,
   description, and link.
3. **Given** an article page URL is pasted into a social sharing preview tool,
   **When** the tool fetches the page metadata, **Then** the correct title,
   description, and cover image are returned via OpenGraph tags.
4. **Given** any page on the site, **When** its HTML source is inspected,
   **Then** a canonical URL tag and descriptive meta description are present.

---

### User Story 4 - Access the Site via ThroneBuilder.com (Priority: P4)

The custom domain ThroneBuilder.com resolves to the Render-hosted Astro site
over HTTPS with correct SSL. Redirects handle www and non-www uniformly.

**Why this priority**: Domain and HTTPS are table stakes for a production site.
Placed at P4 because the content stories are independently testable on the
Render preview URL before DNS cutover.

**Independent Test**: After DNS propagation, visit `https://thronebuilder.com`
and `https://www.thronebuilder.com` and confirm both load the site over HTTPS
with no certificate warnings.

**Acceptance Scenarios**:

1. **Given** DNS is configured, **When** a visitor navigates to `https://thronebuilder.com`,
   **Then** the homepage loads with a valid SSL certificate.
2. **Given** a visitor navigates to `https://www.thronebuilder.com`,
   **Then** they are redirected to `https://thronebuilder.com` (or vice versa —
   one canonical form is enforced).

---

### Edge Cases

- What happens when Sanity.io is unreachable at build time?
  The build MUST fail with a clear error rather than deploying an empty or
  partially populated site.
- What happens if a YouTube video URL in Sanity.io is malformed or the video
  is removed? The page MUST render without the embed rather than showing a broken
  player; a fallback message is acceptable.
- What happens if a content item has no cover image? OpenGraph tags MUST fall back
  to a site-wide default image rather than returning an empty `og:image` tag.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST render all published articles from Sanity.io as
  static HTML pages at build time.
- **FR-002**: The homepage MUST display a list of published articles ordered by
  publish date descending, showing title and excerpt.
- **FR-003**: Each article page MUST display the full article body, title,
  publish date, and cover image (when present).
- **FR-004**: Article pages that include a YouTube video reference MUST embed
  the video player inline.
- **FR-005**: The site MUST generate a valid XML sitemap at `/sitemap.xml`
  listing all published pages.
- **FR-006**: The site MUST generate a valid RSS feed at `/rss.xml` listing all
  published articles with title, description, link, and publish date.
- **FR-007**: Every page MUST include OpenGraph meta tags: `og:title`,
  `og:description`, `og:image`, `og:url`, and `og:type`.
- **FR-008**: Every page MUST include a canonical URL meta tag and a descriptive
  `meta description`.
- **FR-009**: The site MUST be deployable to Render from the GitHub repository
  via a build command with no manual server steps.
- **FR-010**: The site MUST be accessible at the custom domain ThroneBuilder.com
  over HTTPS.
- **FR-011**: The site MUST render core content pages without JavaScript enabled
  in the browser.
- **FR-012**: A default fallback OpenGraph image MUST be used on any page missing
  a cover image.

### Key Entities

- **Article**: A piece of long-form content with a title, body (rich text),
  publish date, excerpt, cover image (optional), and an optional YouTube video URL.
  Published/draft status controls visibility on the site.
- **Site Settings**: Global configuration in Sanity.io: site title, site description,
  default OpenGraph image, social links.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All published articles in Sanity.io appear on the live site within
  one build cycle after publishing.
- **SC-002**: The homepage and all article pages achieve a Lighthouse score ≥ 90
  across Performance, Accessibility, Best Practices, and SEO.
- **SC-003**: The site renders correctly on Chrome, Firefox, and Safari on both
  desktop and mobile viewport sizes.
- **SC-004**: Core content is readable on all pages with JavaScript disabled.
- **SC-005**: The sitemap and RSS feed validate without errors against their
  respective format validators.
- **SC-006**: Social sharing previews (OpenGraph) display the correct title,
  description, and image for each article page.
- **SC-007**: The site loads over HTTPS at ThroneBuilder.com with no mixed-content
  warnings and a valid SSL certificate.

## Assumptions

- The ThroneBuilder Sanity.io project exists and the developer has API credentials
  to connect the Astro site to it.
- The ThroneBuilder YouTube channel is public; embedded videos do not require
  authentication.
- Render will serve the Astro site as a static site (no server-side runtime required
  for the initial launch).
- Content authors will use Sanity Studio to manage articles; no custom CMS UI is
  in scope for this feature.
- The ThroneBuilder.com domain DNS is accessible and can be pointed to Render's
  assigned hostname by the developer.
- Mobile-responsive layout is required but a full design system or brand guide is
  not yet defined — reasonable defaults will be used and refined in a later feature.
- Substack content will be migrated or cross-linked in a future feature; this
  feature establishes the foundation only.
