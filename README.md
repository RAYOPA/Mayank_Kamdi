# MAYANK KAMDI — AI Engineer · Builder · Creative Technologist

## Project Overview
A premium, artistic personal portfolio website showcasing the intersection of fine art, classical architecture, and cutting‑edge AI. The site will feature a richly animated hero composition, handcrafted illustrations, and a responsive, accessible experience.

---

## Vision & Design Philosophy
- **Brand**: MAYANK KAMDI – AI Engineer, Builder, Creative Technologist.
- **Audience**: Recruiters, founders, engineering peers, collaborators, and students.
- **Personality**: Intellectual, artistic, elegant, cinematic, technically sophisticated.
- **Visual Identity**: Warm ivory parchment background, cobalt & celestial blue accents, antique gold details, Renaissance‑style botanical & human illustration paired with intricate AI‑themed graphics.

---

## Feature List (High‑Level)
- Hero section with layered illustrations and parallax/motion effects.
- Navigation bar with smooth scroll anchors.
- Sections: About, Projects, Experience, Journey, Blog, Contact.
- Dynamic, accessible UI components.
- SEO‑optimized markup and meta data.
- Performance‑focused asset loading (WebP/AVIF where appropriate).

---

## Technology Stack
**Current state:** No implementation present.
**Proposed stack:**
- **Framework**: Next.js (React) with TypeScript – provides server‑side rendering, SEO benefits, and easy routing.
- **Styling**: CSS Modules + CSS custom properties (design tokens) – avoids heavy abstraction while enabling a robust design system.
- **Animation**: GSAP with ScrollTrigger for coordinated parallax and scroll‑linked animations (lightweight, high‑performance).
- **Build & Deploy**: Vercel (or Netlify) – zero‑config static hosting with CDN.
- **Testing**: Jest + React Testing Library, Cypress for end‑to‑end, axe‑core for accessibility.

*The stack is a recommendation; any alternative that satisfies the visual‑rich, SEO‑friendly requirements is acceptable.*

---

## Architecture Overview
- **Pages** (Next.js) → `pages/` folder (Home, About, Projects, etc.).
- **Components** → Reusable UI components under `components/` (Header, Button, Card, HeroLayer, etc.).
- **Design System** → `styles/` with `tokens.css` exposing color, typography, spacing tokens.
- **Assets** → `public/assets/` (illustrations, background SVG, optimized images).
- **Animation Layer** → Centralized GSAP timeline configuration in `utils/animation.ts`.

---

## Repository Structure (Proposed)
```
/ (root)
├─ README.md                     ← this file
├─ docs/                         ← comprehensive documentation (see below)
│   ├─ PRD.md
│   ├─ DESIGN_PRD.md
│   ├─ TECHNICAL_PRD.md
│   ├─ ARCHITECTURE.md
│   ├─ DESIGN_SYSTEM.md
│   ├─ ANIMATION_SPEC.md
│   ├─ ASSET_MANIFEST.md
│   ├─ RESPONSIVE_SPEC.md
│   ├─ ACCESSIBILITY_PERFORMANCE_SEO.md
│   ├─ TESTING_STRATEGY.md
│   ├─ IMPLEMENTATION_PLAN.md
│   ├─ DECISIONS.md
│   ├─ CONTENT_SPEC.md
│   ├─ CONTRIBUTING.md
│   └─ CHANGELOG.md
├─ public/                       ← static assets (to be added)
│   └─ assets/ …
├─ pages/                        ← Next.js pages (to be created)
├─ components/                   ← React components (to be created)
└─ ...
```

---

## Setup & Installation (Proposed)
```bash
# Clone repository
git clone <repo-url>
cd Mayank_Portfolio

# Install dependencies
npm install   # Node 18+, npm 9+

# Development server
npm run dev   # Starts Next.js on http://localhost:3000

# Production build
npm run build && npm start
```
*Scripts will be added to `package.json` during implementation.*

---

## Environment Configuration
Create a `.env.local` file at the repo root with the following placeholders (no secrets required for the static site):
```
NEXT_PUBLIC_SITE_TITLE="MAYANK KAMDI — AI Engineer · Builder · Creative Technologist"
NEXT_PUBLIC_BASE_URL="https://your‑domain.com"
```
All values must be reviewed before deployment.

---

## Asset Management Conventions
- All image assets stored under `public/assets/`.
- Use WebP for raster images; fallback PNG for browsers lacking support.
- Maintain original high‑resolution source files in `assets/source/` (git‑ignored) for future updates.
- Naming: `<layer>-<description>.<ext>` (e.g., `hero-left-human.png`).

---

## Animation Architecture (Overview)
- GSAP timelines scoped per component.
- ScrollTrigger drives parallax based on element depth.
- Reduced‑motion media query disables heavy animations.
- Clean‑up on component unmount to avoid memory leaks.

---

## Testing Strategy (Overview)
- Unit tests for pure components.
- Integration tests for page composition.
- Cypress end‑to‑end tests covering navigation, hero animation, and form submission.
- axe‑core accessibility audits in CI.

---

## Deployment (Proposed)
- Connect GitHub repo to Vercel.
- Enable automatic preview deployments on PRs.
- Set environment variables in Vercel dashboard.

---

## Performance, Accessibility, Responsiveness Commitments
- **Performance**: Target Lighthouse **Performance > 90**, **LCP < 2.5 s**.
- **Accessibility**: WCAG 2.1 AA compliance, focus indicators, ARIA labels.
- **Responsive**: Mobile‑first layout, breakpoints at 480 px, 768 px, 1024 px.

---

## Documentation Index
- [Product Requirements Document (PRD)](docs/PRD.md)
- [Design Specification](docs/DESIGN_PRD.md)
- [Technical Requirements](docs/TECHNICAL_PRD.md)
- [System Architecture](docs/ARCHITECTURE.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Animation Specification](docs/ANIMATION_SPEC.md)
- [Asset Manifest](docs/ASSET_MANIFEST.md)
- [Responsive Design Spec](docs/RESPONSIVE_SPEC.md)
- [Accessibility & SEO](docs/ACCESSIBILITY_PERFORMANCE_SEO.md)
- [Testing Strategy](docs/TESTING_STRATEGY.md)
- [Implementation Plan](docs/IMPLEMENTATION_PLAN.md)
- [Decision Log](docs/DECISIONS.md)
- [Content Specification](docs/CONTENT_SPEC.md)
- [Contributing Guide](docs/CONTRIBUTING.md)
- [Changelog](docs/CHANGELOG.md)

---

## Current Status & Known Limitations
- Repository contains only high‑resolution illustration assets.
- No code, build scripts, or configuration files exist yet.
- All technical decisions are **proposed** and need stakeholder approval.

---

## Next Steps
1. Review this documentation with the product owner.
2. Approve the proposed tech stack and implementation roadmap.
3. Initialise the Next.js project (`npx -y create-next-app@latest ./`).
4. Migrate assets into `public/assets/` and generate optimized versions.

---

*This README is intended as the single source of truth for the portfolio project. All further documentation lives under the `docs/` directory and cross‑references these sections.*
