# CSS + Component Architecture — CVA & Token Discipline

**Date:** 2026-04-29
**Branch:** feat/nosotros-page
**Status:** Approved

## Problem

The project has three ways to consume the same design token with no documented rule for which to use:

```
bg-navy-900           ← Tailwind utility (JSX)
var(--color-navy-900) ← @theme internal name (no designated use)
var(--navy-900)       ← :root legacy alias (CSS files)
```

Additionally, button variants (`l-btn-primary`, `l-btn-teal`, etc.) exist only as CSS classes — TypeScript has no knowledge of which variants are valid, there is no autocomplete, and a typo silently applies no styles.

## Goal

1. Establish one unambiguous rule per styling layer — no case where the right answer is unclear
2. Introduce CVA for the one component that has true TypeScript-unsafe variants: `Button`
3. Make the decision tree for new components explicit so future work doesn't recreate the inconsistency

## Out of Scope

- Migrating organism CSS files to a different architecture
- Converting existing `l-*` CSS classes to Tailwind utilities
- CSS Modules
- Redesigning any visual output

---

## Design

### Stack Addition

```bash
npm install cva tailwind-merge clsx
```

New file: `app/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

`cn()` replaces all `.filter(Boolean).join(" ")` patterns across atoms and molecules. `twMerge` ensures Tailwind class conflicts resolve predictably when consumers pass an override `className`.

---

### CVA Migration: What and Why

CVA is only for components that have **multiple visual variants on the same DOM structure**. Three components qualify:

#### 1. `Button` (new atom — does not exist today)

The current pattern is CSS-only classes with no React component. Consumers write `className="l-btn l-btn-primary l-btn-lg"` directly. This means:
- No TypeScript validation on variant names
- No single place to see all valid combinations
- Cannot pass override `className` safely (no `twMerge`)

New implementation: `app/components/landing/atoms/button.tsx`

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold text-[15px] h-[46px] px-[22px] rounded-card transition-all duration-150 whitespace-nowrap border border-transparent cursor-pointer no-underline",
  {
    variants: {
      intent: {
        primary:   "bg-navy-900 text-white shadow-card hover:bg-navy-800 hover:-translate-y-px",
        secondary: "bg-white text-navy-900 border-ink-200 hover:border-ink-300 hover:bg-ink-50",
        teal:      "bg-teal-500 text-white hover:bg-teal-600",
        ghost:     "text-navy-900 hover:bg-ink-100",
        "ghost-white": "text-white/80 border border-white/20 hover:bg-white/8 hover:text-white hover:border-white/35",
      },
      size: {
        default: "",
        lg: "h-[52px] px-7 text-base",
      },
    },
    defaultVariants: { intent: "primary", size: "default" },
  }
)
```

The contextual glow animations (`.l-hero .l-btn-primary`, `.l-final-cta .l-btn-teal`) remain in `atoms.css` — they are context-dependent effects, not variants.

The `l-btn*` CSS classes are removed from `atoms.css` in the same PR once all call sites are updated — this is a landing page with a finite number of usages, not a library.

#### 2. `Eyebrow` (existing atom — light variant)

Currently uses `light?: boolean` with manual string construction:
```typescript
["l-eyebrow", light && "l-eyebrow-light", className].filter(Boolean).join(" ")
```

After: CVA handles the conditional, `cn()` handles the merge. The CSS classes themselves stay — CVA only selects which class to apply.

```typescript
const eyebrowVariants = cva("l-eyebrow", {
  variants: {
    theme: { dark: "", light: "l-eyebrow-light" },
  },
  defaultVariants: { theme: "dark" },
})
```

#### 3. `Badge` (existing atom — no variants, cn() cleanup only)

No variants to add. Replace `.filter(Boolean).join(" ")` with `cn()`:

```typescript
export function Badge({ children, className }: BadgeProps) {
  return <span className={cn("l-module-tag", className)}>{children}</span>
}
```

#### FeatureCard: Split, Not CVA

`FeatureCard` has `variant="module" | "value"` but renders completely different DOM trees per variant. This is two components sharing a prop, not a visual variant of one component. Split into:
- `ModuleCard` — the module grid card (current `variant="module"`)
- `ValueCard` — the value pillar card (current `variant="value"`)

Both keep their existing `l-*` CSS classes unchanged.

---

### Token Consumption Rules (3 Layers)

**Layer 1 — JSX `className`**
Tailwind utilities when a utility exists. Always prefer the utility over a CSS var.

```tsx
// ✅
<div className="bg-navy-900 text-teal-500 rounded-card shadow-card" />

// ❌ — utility exists
<div style={{ background: "var(--navy-900)" }} />
```

**Layer 2 — CSS files (`app/styles/*.css`)**
`var(--legacy-alias)` — the short `:root` names only. Never the `@theme`-generated `--color-*` names.

```css
/* ✅ */
.l-hero::before { background: var(--navy-900); }

/* ❌ — @theme internal name */
.l-hero::before { background: var(--color-navy-900); }
```

**Layer 3 — `style={{}}` inline**
Runtime-computed values only. Never tokens.

```tsx
// ✅ — computed at runtime
<div style={{ width: `${progress}%` }} />
<div style={{ animationDelay: `${delay * 0.15}s` }} />

// ❌ — this is a token
<div style={{ background: "linear-gradient(135deg, #0A1F44, #1E3A6F)" }} />
```

**Never:**
- `var(--color-navy-900)` anywhere outside `@theme` — internal name, subject to change
- Hardcoded hex in JSX or CSS when a token exists
- `rgba(14, 165, 233, 0.x)` — keep as-is for alpha-composited shadows/gradients where no token covers the alpha variant; add a comment explaining the base color

---

### CSS Files: Permitted Content Going Forward

A CSS file is justified only when Tailwind physically cannot express the style:

| Case | Example |
|---|---|
| `::before` / `::after` pseudo-elements | dot-grid texture, eyebrow dot |
| `@keyframes` | roadmap rings, float, glow breathe |
| Context-dependent animation | `.l-hero .l-btn-primary { animation: ... }` |
| `mask-image` / `clip-path` | gradient masks in hero/roadmap |
| Complex absolute-positioned grids | `.l-rmap-canvas`, roadmap card positions |
| SVG path animations | stroke-dashoffset on roadmap path |

If the CSS in a file is only colors, spacing, radius, or shadows — those should move to Tailwind utilities in JSX.

---

## Migration Scope

### New files
- `app/lib/utils.ts` — `cn()` utility
- `app/components/landing/atoms/button.tsx` — Button with CVA
- `app/components/landing/molecules/module-card.tsx` — split from FeatureCard
- `app/components/landing/molecules/value-card.tsx` — split from FeatureCard

### Modified files
- `app/components/landing/atoms/badge.tsx` — exports both `Badge` and `Eyebrow`; both get `cn()` + Eyebrow gets CVA for light variant
- `app/components/landing/molecules/feature-card.tsx` — removed, replaced by ModuleCard + ValueCard
- `app/components/landing/organisms/*.tsx` — update call sites from `l-btn-*` classes to `<Button>` component; update FeatureCard usages to ModuleCard/ValueCard
- `CLAUDE.md` — add token consumption rules table

### Unchanged
- All `app/styles/*.css` files — no CSS changes in this migration
- `globals.css` — no changes
- All organism component logic

---

## Definition of Done

- `Button` component exists, all `l-btn-*` className usages in JSX replaced with `<Button intent="..." size="...">`
- `Eyebrow` uses CVA, no manual string array construction
- `Badge` uses `cn()`
- `FeatureCard` removed, `ModuleCard` + `ValueCard` replace all usages
- `app/lib/utils.ts` exists and exports `cn()`
- `tsc --noEmit` passes
- Token consumption rules documented in `CLAUDE.md`
- No new `var(--color-*)` usages introduced
