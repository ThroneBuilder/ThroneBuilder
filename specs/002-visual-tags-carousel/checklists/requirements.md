# Specification Quality Checklist: Homepage Visual Redesign — Tags, Filtering & Carousel

**Purpose**: Validate specification completeness and quality before proceeding to planning
**Created**: 2026-05-28
**Feature**: [spec.md](../spec.md)

## Content Quality

- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed

## Requirement Completeness

- [x] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous
- [x] Success criteria are measurable
- [x] Success criteria are technology-agnostic (no implementation details)
- [x] All acceptance scenarios are defined
- [x] Edge cases are identified
- [x] Scope is clearly bounded
- [x] Dependencies and assumptions identified

## Feature Readiness

- [x] All functional requirements have clear acceptance criteria
- [x] User scenarios cover primary flows
- [x] Feature meets measurable outcomes defined in Success Criteria
- [x] No implementation details leak into specification

## Success Criteria Verification

- [x] SC-001: Tag badges display on each article card in visually distinct text (`tag-badge` style, uppercase, small font)
- [x] SC-002: Filter activates in one click; "All" or re-click the active button restores full list within one additional click
- [x] SC-003: Cards with cover images (direct, YouTube thumbnail, or first body image) show the image; text-only cards have no broken image placeholder
- [x] SC-004: Magazine-style CSS grid with full-width featured hero card, standard 4-col cards with image above, and text-only card variants
- [x] SC-005: Carousel auto-rotates every 5 seconds via `setInterval`; all configured slides reachable by waiting
- [x] SC-006: Clicking a carousel slide scrolls to `#article-filter` and programmatically clicks the matching filter button in one user action
- [ ] SC-007: All four Lighthouse scores ≥ 90 — verify manually via `npm run preview` + Chrome DevTools Lighthouse audit
- [x] SC-008: Responsive breakpoints at 768px (2-up grid) and 480px (1-up); no horizontal overflow at ≤ 480px viewport
- [x] SC-009: Footer present on homepage and all article pages via `BaseLayout.astro`; external links have `target="_blank" rel="noopener noreferrer"`; email links use `mailto:`

## Notes

- Font choice: Aptos Black is not a distributable web font. Assumption documents
  that a visually similar free web font will be used; owner can substitute Aptos
  Black later if font files are provided. No clarification needed.
- Tag filtering fallback: spec explicitly states JS-disabled shows all articles
  (no filtering) — this matches the static Astro architecture.
- Carousel slide configuration stored as a repo data file (not per-article
  frontmatter) — scoped clearly in Key Entities.
- Article page visual redesign excluded from scope; footer (US4) is added to all
  pages via the shared layout.
- Site Links entity records the actual link values supplied by the site owner.
- Spec is ready for `/speckit-plan`.
