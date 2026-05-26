<!--
SYNC IMPACT REPORT
==================
Version change: (unversioned template) → 1.0.0
Modified principles: N/A (initial constitution — all principles are new)
Added sections:
  - Core Principles (I–VI)
  - Technology Stack & Hosting
  - Development Workflow
  - Governance
Removed sections: N/A (no prior constitution content)
Templates reviewed:
  - .specify/templates/plan-template.md ✅ aligned (Constitution Check section present)
  - .specify/templates/spec-template.md ✅ aligned (incremental story structure matches principles)
  - .specify/templates/tasks-template.md ✅ aligned (phase/checkpoint model matches Principle I)
  - .specify/templates/constitution-template.md ✅ source template — no changes needed
Deferred TODOs: None
-->

# ThroneBuilder Constitution

## Core Principles

### I. Incremental Delivery (NON-NEGOTIABLE)

Each feature change MUST be scoped small enough to be fully tested and reviewed
independently before the next change begins. No feature is considered shipped until
the developer has reviewed the code, understood what changed, and confirmed it
works in a real browser. Large changes MUST be broken into independently
deliverable slices. Partial implementations that cannot be tested end-to-end are
not acceptable checkpoints.

**Rationale**: The primary goal of this project is learning modern web development.
Incremental delivery enforces comprehension, reduces debugging surface area, and
builds confidence before adding complexity.

### II. Learning-Oriented Design

Every significant implementation decision MUST be accompanied by an explicit
recommendation and a documented tradeoff in the relevant spec or plan artifact.
Code MUST demonstrate current web development best practices in a readable,
understandable form. Abstractions MUST be introduced only when their benefit is
evident from existing code — not speculatively. Comments are reserved for
non-obvious constraints or workarounds; code structure and naming MUST do the
primary communicating.

**Rationale**: This project doubles as a curriculum. If a decision cannot be
explained, it should not be made. If a pattern exists only for hypothetical future
use, it should not be added.

### III. Content-First Architecture

The site exists to consolidate ThroneBuilder content from Substack, YouTube, and
Facebook under a single owned domain. Every architectural and UX decision MUST
prioritize content discoverability, readability, and SEO. New features MUST NOT
degrade the presentation, accessibility, or findability of existing content. Content
and structure are separated — layout changes MUST NOT require content rewrites.

**Rationale**: The site's value is its content. Infrastructure serves content, not
the other way around.

### IV. Test-Gated Progression

No feature phase is complete until it passes an explicit testing checkpoint:
manual review in a real browser on the target deployment environment, and any
automated tests defined for the feature. Checkpoints are non-negotiable gates —
the next phase MUST NOT begin until the current one is validated. Tests for a
feature MUST be defined in the spec before implementation begins.

**Rationale**: Testing as an afterthought produces untested code. Defining
acceptance criteria first makes the implementation goal concrete and verifiable.

### V. Web Standards & Accessibility

All pages MUST use semantic HTML. The site MUST be usable for core content access
without JavaScript enabled. All pages MUST achieve a Lighthouse score ≥ 90 across
Performance, Accessibility, Best Practices, and SEO categories. Pages MUST conform
to WCAG 2.1 Level AA accessibility standards. Images MUST have descriptive alt
text. Color contrast MUST meet AA ratios. Heading hierarchy MUST be logical and
sequential.

**Rationale**: Web standards ensure longevity, broad device support, search engine
visibility, and access for all users. Accessibility is not optional.

### VI. Deployment Integrity

GitHub is the single source of truth. All changes MUST be committed to GitHub
before any deployment occurs. Manual file edits directly on the hosting server
(Render) are prohibited. Secrets, API keys, and environment-specific values MUST
be stored in environment variables — never hardcoded in source files. The
deployment pipeline (GitHub → Render) MUST be the only path to production.

**Rationale**: Reproducibility and auditability require that the repository always
reflects the deployed state. Secrets in source code create security vulnerabilities
and complicate rotation.

## Technology Stack & Hosting

- **Domain**: ThroneBuilder.com (DNS pointing to Render)
- **Hosting**: Render (static site or web service — determined per feature)
- **Repository**: GitHub (source of truth, triggers Render deployments)
- **Content sources**: Substack (@ThroneBuilder), YouTube, Facebook
- **Technology selection**: Prefer plain HTML/CSS/JavaScript for initial features.
  Introduce frameworks or build tools only when a concrete problem justifies them,
  documented with tradeoffs per Principle II. Node.js tooling (e.g., for bundling or
  templating) is acceptable when the benefit is clear and the dependency count is
  minimal.
- **Workflow tooling**: SpecKit (spec → plan → tasks → implement), GitHub Issues

## Development Workflow

Every feature follows the full SpecKit lifecycle in order:

1. **Specify** — write `spec.md` with user stories, acceptance criteria, and success
   metrics before any design or code work begins.
2. **Clarify** — resolve open questions in the spec; document decisions with
   recommendations and tradeoffs.
3. **Plan** — produce `plan.md` covering technical approach, structure decisions,
   and the Constitution Check gate.
4. **Tasks** — generate `tasks.md` with dependency-ordered, independently testable
   increments.
5. **Implement** — execute one task at a time; commit after each logical unit.
6. **Test** — validate each user story checkpoint in the browser before continuing.
7. **Review** — read the diff, understand every change, then merge.

All features MUST be developed on a dedicated feature branch. Merges to `main` MUST
only occur after the testing checkpoint for that feature passes. Work items are
tracked as GitHub issues linked to SpecKit feature branches.

## Governance

This constitution supersedes all other project practices. Amendments require:
1. A documented reason for the change.
2. An updated Sync Impact Report identifying affected artifacts.
3. A version bump following semantic versioning:
   - **MAJOR**: Removal or incompatible redefinition of a principle.
   - **MINOR**: New principle or section added, or materially expanded guidance.
   - **PATCH**: Clarifications, wording corrections, non-semantic refinements.
4. Propagation of any impacted changes to spec, plan, and tasks templates.

All feature specs and implementation plans MUST reference this constitution in their
Constitution Check section. Any complexity that would violate a principle MUST be
justified in the plan's Complexity Tracking table before proceeding.

Compliance is reviewed at every spec and plan creation. If a practice conflicts with
this constitution, the constitution governs.

**Version**: 1.0.0 | **Ratified**: 2026-05-26 | **Last Amended**: 2026-05-26
