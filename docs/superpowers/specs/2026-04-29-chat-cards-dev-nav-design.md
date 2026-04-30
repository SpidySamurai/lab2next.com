# Design Spec: ChatButton Rebuild + Card Variants + Dev Nav

Date: 2026-04-29  
Branch: feat/nosotros-page  
Status: APPROVED

---

## 1. ChatButton Compliance Rebuild

### Scope
Compliance-only for the FAB + popover structure. Same visual intent. Fix rendering of open popover state.

### Current issues
- Inline styles using `var(--color-*)` → must be Tailwind utilities
- Inline styles with raw hex values for non-system colors (macOS dots: OK to keep)
- Complex box-shadow hardcoded → move to `app/styles/chat.css`
- `scale-90`/`opacity-0` transition may be causing render issues — investigate and fix

### Implementation rules
- Tailwind-first: `bg-teal-500`, `bg-ink-50`, `text-ink-700`, `border-ink-200`, `shadow-card`, etc.
- Complex CSS (box-shadow with specific rgba, gradient header) → `app/styles/chat.css` with `l-chat-*` classes
- Gradient header: inline style is acceptable (no Tailwind equivalent for this specific linear-gradient)
- macOS window dots (`#ff5f57`, `#febc2e`, `#28c840`): intentional non-system colors, inline style OK

### Files
- `app/components/landing/organisms/chat-button.tsx` — rebuild
- `app/styles/chat.css` — new file, imported in globals.css

---

## 2. Card Variants Exploration

### Scope
Experimental variants in `/dev/` — no production component changes. When a variant is approved, promote to production.

### Approach
- New directory: `app/dev/components/`
- One file per molecule: `stat-card-variants.tsx`, `feature-card-variants.tsx`, `person-card-variants.tsx`
- `/dev/cards` page adds "Experimental Variants" section importing these files
- Each variant is a self-contained component (no shared state with production)

### Variants to build

**StatCard variants**
- `StatCardCompact` — reduced padding (p-5 vs p-8), smaller stat number, tighter layout
- `StatCardDark` — navy-900 bg, white text, teal stat number
- `StatCardNumbered` — large editorial number (01/02/03) as accent, similar to value cards

**FeatureCard variants**
- `FeatureCardHorizontal` — icon left (48×48), title + body right, full-width layout
- `FeatureCardGhost` — no border/shadow at rest, hover reveals border + shadow-lg
- `FeatureCardDense` — compact padding, smaller type, 2-col grid friendly

**PersonCard variants**
- `PersonCardAccent` — colored top border (3px, gradient from grad prop)
- `PersonCardCompact` — avatar smaller (40px), tighter gap, single-line role
- `PersonCardTestiDark` — testimonial card with dark navy bg, white text

### CSS rules for variants
- Tailwind utilities only (no `l-*` classes in experimental files)
- Use `@theme` tokens directly as Tailwind classes
- Mark each with `{/* EXPERIMENTAL */}` comment at top

---

## 3. Dev Nav

### Scope
Layout wrapper for all `/dev/*` routes. Simple nav, dev-only.

### Implementation
- File: `app/dev/layout.tsx`
- `notFound()` guard if `NODE_ENV !== 'development'`
- Fixed top bar: amber `DEV ONLY` badge + links to dev pages
- Links: `/dev/cards` (active state via `usePathname`)
- Tailwind-only — no `l-*` classes, no CSS file
- `"use client"` only if pathname active state needed (yes, for active link)

### Structure
```
app/dev/
  layout.tsx       ← new
  cards/
    page.tsx       ← remove its own header (nav replaces it)
```

---

## Out of scope
- Dashboard mockup in hero (separate task)
- Production component API changes
- Any backend/API work
