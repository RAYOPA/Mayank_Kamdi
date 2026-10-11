# Portfolio Implementation Plan

**Repository:** `Mayank_Portfolio`
**Date:** 2026-10-11

---

## 1. Overview
This document outlines the implementation roadmap for the remaining sections of the portfolio site after the hero has been completed and QA‑validated. It references the existing codebase, design intent, and identified gaps.

---

## 2. Existing Assets & Structure
| Area | Current Status | Notes |
|------|----------------|-------|
| **Hero** | Implemented (`app/page.tsx`, `app/globals.css`) with GSAP entrance, parallax, title scaling, CTA interactions, reduced‑motion handling. | Ready for production.
| **Routing** | Only root (`/`) page exists. No additional route files (`app/about.tsx`, etc.). | New pages will be added under `app/`.
| **CSS Tokens** | Defined in `app/globals.css` (`--color-bg-primary`, `--color-primary`, `--color-accent-gold`, `--color-text-primary`, `--font-family-sans`). | Extend as needed for new sections.
| **Components** | None modularized yet; hero markup lives directly in `page.tsx`. | Future sections should use reusable components under `components/`.
| **Assets** | High‑resolution hero illustrations are stored in `Lading_Page_Image/` (used via `next/image`). No `public/assets/` directory populated yet. | Will need to migrate to `public/assets/` and create optimized WebP/AVIF versions.
| **Design Documentation** | References to many docs are listed in `README.md` (e.g., `docs/DESIGN_PRD.md`, `docs/ANIMATION_SPEC.md`), but the `docs/` folder does not exist in the repository. | Missing files: `DECISIONS.md`, `DESIGN_PRD.md`, `TECHNICAL_PRD.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `ANIMATION_SPEC.md`, `ASSET_MANIFEST.md`, `RESPONSIVE_SPEC.md`, `ACCESSIBILITY_PERFORMANCE_SEO.md`, `TESTING_STRATEGY.md`, `IMPLEMENTATION_PLAN.md`. These need to be created or sourced from the original specification source.
| **Asset Manifest** | Referenced in README, but no `ASSET_MANIFEST.md` present and no manifest JSON listing. | Create a manifest that enumerates all images, their source, size, and optimization target.

---

## 3. Section‑by‑Section Plan
### 3.1 Hero (Completed)
- **Purpose:** Immediate visual impact, brand statement, primary CTA.
- **Content Hierarchy:** Background layers → Title → Subtitle → CTA buttons.
- **Layout & Responsiveness:** Full‑width container with `aspect-ratio: 1672/941`; scales down smoothly across breakpoints.
- **Accessibility:** `prefers-reduced-motion`, focus‑visible CTA, semantic `section[aria-label="Hero Section"]`.
- **Interactions:** GSAP entrance, scroll‑driven parallax, title scaling, hover/focus on CTA.

### 3.2 About / Personal Introduction
- **Purpose:** Provide a concise narrative about Mayank, background, philosophy, and visual identity.
- **Content Hierarchy:**
  1. Section heading (`h2` – "About Me").
  2. Portrait image (optimized with `next/image`).
  3. Paragraphs describing education, career focus, and creative approach.
- **Visual Layout:** Two‑column layout on desktop (image left, text right); single column on mobile.
- **Responsive Behavior:** Breakpoint at 768 px – stack columns vertically.
- **Accessibility:** Alt text for image, readable contrast, `role="region"` with `aria-labelledby`.
- **Interactions:** Subtle fade‑in on scroll (GSAP, respects reduced motion), link hover styles matching CTA gold accent.

### 3.3 Selected Projects
- **Purpose:** Showcase notable work with visuals, descriptions, and technology tags.
- **Content Hierarchy:**
  1. Section heading (`h2`).
  2. Grid of project cards (3‑column desktop, 2‑column tablet, 1‑column mobile).
  3. Each card: image thumbnail, project title, brief summary, tech stack chips, link to case study or external repo.
- **Layout:** CSS Grid with `gap: 1.5rem`; cards have consistent max‑width and `box-shadow` for depth.
- **Responsive:** Adjust column count at 1024 px, 768 px, 480 px breakpoints.
- **Accessibility:** Keyboard‑focusable cards, aria‑labels describing the project, proper heading order, `role="list"`/`role="listitem"`.
- **Interactions:** Hover elevation (`transform: translateY(-4px)`), image zoom, CTA button within card with gold accent.

### 3.4 Skills & Technical Expertise
- **Purpose:** Communicate proficiency areas quickly.
- **Content Hierarchy:**
  1. Section heading (`h2`).
  2. Grouped skill categories (Programming Languages, Frameworks, Cloud, Design Tools, Research).
  3. Visual representation: icon + label or progress bar (non‑quantitative, avoid fake metrics).
- **Layout:** Horizontal scrollable rail on mobile, wrapped grid on desktop.
- **Responsive:** Collapse to a single column on <480 px.
- **Accessibility:** Icons have `aria-hidden="true"`; labels are visible to assistive tech.
- **Interactions:** Hover highlight matching the gold accent; focus outline for keyboard users.

### 3.5 Experience, Leadership & Achievements
- **Purpose:** Highlight career milestones, roles, and impact.
- **Content Hierarchy:**
  1. Section heading (`h2`).
  2. Timeline list (chronological, most recent first).
  3. Each entry: role title, organization, dates, concise bullet points of responsibilities/impact.
- **Layout:** Vertical timeline with a left‑aligned marker line; cards offset to the right for readability.
- **Responsive:** Full‑width stacked cards on mobile.
- **Accessibility:** Use `dl`/`dt`/`dd` semantics for definition list; ensure sufficient color contrast for timeline markers.
- **Interactions:** Fade‑in on scroll (GSAP) without heavy motion; focusable links to external references.

### 3.6 Contact & Social Links
- **Purpose:** Provide clear pathways for outreach.
- **Content Hierarchy:**
  1. Section heading (`h2`).
  2. Short invitation paragraph.
  3. Email link (mailto) + social icon list (LinkedIn, GitHub, Twitter, etc.).
- **Layout:** Centered block; icons displayed in a horizontal row.
- **Responsive:** Icons wrap on narrow screens.
- **Accessibility:** Descriptive `aria-label` on each icon link, visible focus outlines, sufficient touch target size (≥44 px).
- **Interactions:** Icon color transition to gold on hover/focus; `mailto:` opens default email client.

### 3.7 Footer
- **Purpose:** Persistent site‑wide navigation and legal info.
- **Content Hierarchy:**
  1. Small navigation links (Home, About, Projects, Contact).
  2. Copyright notice.
  3. Optional back‑to‑top button.
- **Layout:** Flex container with items spaced evenly; background matches `--color-bg-primary`.
- **Responsive:** Stack vertically on very small screens.
- **Accessibility:** All links focusable; back‑to‑top button has `aria-label="Scroll to top"`.
- **Interactions:** Hover color change to gold, smooth scroll behavior via native CSS `scroll-behavior: smooth`.

---

## 4. Design & Visual Language Continuity
- **Palette:** Preserve existing tokens (`--color-bg-primary`, `--color-primary`, `--color-accent-gold`). Extend token file if additional shades are needed.
- **Typography:** Continue using the declared `--font-family-sans` (Inter) with hierarchical sizing (`h2` ≈ 2rem, body ≈ 1rem).
- **Micro‑animations:** Use the same GSAP easing (`power2.out`) and respect reduced‑motion globally.
- **Spacing & Grid:** Base spacing of `1rem` (8 px) consistent with existing layout.
- **Iconography:** Prefer line‑style SVGs tinted with `var(--color-primary)`; hover state switches to `var(--color-accent-gold)`.

---

## 5. Missing Documentation & Asset Gaps
| Missing Item | Expected Location | Action Required |
|--------------|-------------------|-----------------|
| Design Specification (`DESIGN_PRD.md`) | `docs/DESIGN_PRD.md` | Obtain from stakeholder or recreate based on README description.
| Technical Specification (`TECHNICAL_PRD.md`) | `docs/TECHNICAL_PRD.md` | Same as above.
| Architecture Overview (`ARCHITECTURE.md`) | `docs/ARCHITECTURE.md` | Provide component hierarchy, routing map.
| Design System (`DESIGN_SYSTEM.md`) | `docs/DESIGN_SYSTEM.md` | List token definitions, component library guidelines.
| Animation Specification (`ANIMATION_SPEC.md`) | `docs/ANIMATION_SPEC.md` | Detail GSAP timelines for each section (already done for hero, need for others).
| Asset Manifest (`ASSET_MANIFEST.md`) | `docs/ASSET_MANIFEST.md` | Enumerate all image files, formats, source dimensions, optimization targets.
| Responsive Spec (`RESPONSIVE_SPEC.md`) | `docs/RESPONSIVE_SPEC.md` | Breakpoint definitions, layout variations.
| Accessibility & SEO (`ACCESSIBILITY_PERFORMANCE_SEO.md`) | `docs/ACCESSIBILITY_PERFORMANCE_SEO.md` | Confirm WCAG compliance checklist and SEO meta strategy.
| Testing Strategy (`TESTING_STRATEGY.md`) | `docs/TESTING_STRATEGY.md` | Outline unit, integration, e2e, and accessibility test plans.
| Implementation Plan (`IMPLEMENTATION_PLAN.md`) | `docs/IMPLEMENTATION_PLAN.md` | Existing high‑level plan can be replaced by this document.
| Decision Log (`DECISIONS.md`) | `docs/DECISIONS.md` | Capture design and technical decisions made during the hero phase.

**Action:** Create the `docs/` folder and populate the above files gradually. For now, the implementation plan serves as a placeholder for the missing `IMPLEMENTATION_PLAN.md`.

---

## 6. Checkpoint & Next Steps
1. **Commit the current hero implementation** (ensure `app/page.tsx` and related assets are version‑controlled). No further modifications will be made to these files until the plan is approved.
2. **Create the `docs/` directory** and add this `PORTFOLIO_IMPLEMENTATION_PLAN.md` file.
3. **Gather missing design documents** from the project owner or previous documentation sources.
4. **Migrate hero assets** from `Lading_Page_Image/` into `public/assets/hero/` and generate WebP/AVIF variants.
5. **Begin component extraction** for reusable UI pieces (Header, Card, IconButton) once the plan is accepted.

---

*Prepared by Antigravity – senior creative frontend engineer.*
