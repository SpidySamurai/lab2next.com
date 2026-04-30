---
name: CSS Architecture — landing page
description: Hybrid CSS strategy for lab-system-landing — l-* classes + Tailwind utilities coexist
type: project
---

CSS split into `app/styles/*.css` (one file per organism/concern) + Tailwind utilities in JSX.

**Why:** globals.css was 2344 lines. Atomic design refactor left l-testi* and l-stars undefined (bug fixed). Partitioned for maintainability.

**How to apply:**
- `l-*` classes → component identity, pseudo-elements, animations, complex layouts
- Tailwind utilities → rapid variation, spacing, colors, one-off states directly in JSX
- Both consume same tokens from `@theme` in globals.css
- `@apply` optional inside CSS files when a class is just a utility combo
- New components: Tailwind-first in JSX; only add `l-*` if complex enough to warrant it
- Migrate hardcoded values to `@apply`/tokens opportunistically when touching a file

**File map:**
`app/styles/`: layout, atoms, nav, hero, problem, values, how-it-works, pricing, faq, cta, footer, roadmap, purpose, trust, testimonials, nosotros

`globals.css` (210 lines): @imports + @theme tokens + :root aliases + reset + responsive overrides
