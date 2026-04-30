# Landing — Operations Board

## Current Sprint

**Goal:** Nosotros page polish + component library foundation  
**Branch:** `feat/nosotros-page`  
**Status:** IN PROGRESS

| # | Task | Agent | Status |
|---|------|-------|--------|
| 1 | Atomic design refactor (atoms/molecules/organisms/layout/domain) | Frontend Dev | ✅ DONE |
| 2 | CSS architecture — partition globals.css into styles/*.css | Frontend Dev | ✅ DONE |
| 3 | Fix missing testimonials CSS (l-testi*, l-stars) | Frontend Dev | ✅ DONE |
| 4 | Nosotros page — uniform section layout | Frontend Dev | ✅ DONE |
| 5 | Dev preview panel /dev/cards — card variants | Frontend Dev | ✅ DONE |
| 6 | ChatButton organism — placeholder chat widget | Frontend Dev | ✅ DONE |

**Definition of Done:** Nosotros page visually consistent, card variants reviewable at /dev/cards, CSS architecture documented and enforced.

---

## Pipeline Slots

### Design Request
> *empty*

### Design Plan
> *empty*

### Escalations
> *empty*

### Pending Review
> *empty*

### Review Feedback
> *empty*

---

## Recent Decisions

1. **CSS architecture** — Hybrid: `l-*` CSS classes in `app/styles/<organism>.css` for complex components; Tailwind utilities in JSX for simple/atomic components. Both consume `@theme` tokens. `globals.css` = tokens + reset + responsive overrides only. (2026-04-29)

2. **Testimonials CSS was missing** — Atomic refactor (commit `8239631`) deleted old `testimonials.tsx` and its CSS block but never added CSS for new class names (`l-testi`, `l-stars`, etc.). Fixed by creating `app/styles/testimonials.css`. (2026-04-29)

3. **CSS partitioning** — `globals.css` split from 2344 → 210 lines. 16 files in `app/styles/` one per organism/concern. Responsive block stays in `globals.css` as it's cross-cutting. (2026-04-29)

4. **Atomic design structure** — `atoms/` (Reveal, Avatar, Badge, Stars), `molecules/` (SectionHeader, StatCard, FeatureCard, PersonCard), `organisms/` (all page sections), `layout/` (Section, Container), `domain/` (types, content, APP_URL). No state or business logic in atoms. (2026-04-29)

5. **ChatButton** — Floating chat widget in layout.tsx with placeholder content. Disabled input, "en construcción" messaging. No backend yet. (2026-04-29)

---

## Sprint History

*(none yet)*
