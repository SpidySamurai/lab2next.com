# CVA + Token Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Introduce CVA + `cn()` for type-safe component variants, split `FeatureCard` into two focused molecules, and establish clear token consumption rules.

**Architecture:** Install `cva` + `tailwind-merge` + `clsx`. Create a `Button` atom using CVA that replaces all `l-btn-*` className strings in JSX. Split `FeatureCard` into `ModuleCard` + `ValueCard`. Update all call sites. Remove the now-unused `l-btn-*` CSS classes.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, `cva`, `tailwind-merge`, `clsx`, TypeScript

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `app/lib/utils.ts` | `cn()` utility — clsx + tailwind-merge |
| Create | `app/components/landing/atoms/button.tsx` | Button atom with CVA variants |
| Modify | `app/components/landing/atoms/badge.tsx` | `cn()` for Badge + CVA for Eyebrow light variant |
| Create | `app/components/landing/molecules/module-card.tsx` | Module grid card (extracted from FeatureCard) |
| Create | `app/components/landing/molecules/value-card.tsx` | Value pillar card (extracted from FeatureCard) |
| Delete | `app/components/landing/molecules/feature-card.tsx` | Replaced by ModuleCard + ValueCard |
| Modify | `app/components/landing/domain/types.ts` | `ctaStyle: string` → `ctaIntent: ButtonIntent` |
| Modify | `app/components/landing/domain/pricing.content.ts` | CSS class strings → intent values |
| Modify | `app/components/landing/organisms/hero/hero.tsx` | `l-btn-*` → `<Button>` |
| Modify | `app/components/landing/organisms/contact-cta.tsx` | `l-btn-*` → `<Button>` |
| Modify | `app/components/landing/organisms/navbar.tsx` | `l-btn-*` + inline styles → `<Button size="sm">` |
| Modify | `app/components/landing/organisms/purpose.tsx` | `l-btn-*` → `<Button>` |
| Modify | `app/components/landing/organisms/pricing-table.tsx` | `l-btn-*` + ctaStyle → `<Button>` |
| Modify | `app/(landing)/nosotros/page.tsx` | `l-btn-*` → `<Button>` |
| Modify | `app/(landing)/roadmap/roadmap-client.tsx` | `l-btn-*` → `<Button>` |
| Modify | `app/components/landing/organisms/modules.tsx` | FeatureCard → ModuleCard |
| Modify | `app/components/landing/organisms/values.tsx` | FeatureCard → ValueCard |
| Modify | `app/dev/cards/page.tsx` | FeatureCard usages → ModuleCard + ValueCard |
| Modify | `app/styles/atoms.css` | Remove `l-btn-*` classes (keep keyframes) |
| Modify | `CLAUDE.md` | Add token consumption rules table |

---

## Task 1: Stack setup — install packages + create cn()

**Files:**
- Create: `app/lib/utils.ts`

- [ ] **Step 1: Install dependencies**

```bash
npm install cva tailwind-merge clsx
```

Expected output: 3 packages added to `node_modules`, no errors.

- [ ] **Step 2: Create cn() utility**

Create `app/lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add app/lib/utils.ts package.json package-lock.json
git commit -m "feat(utils): add cn() — clsx + tailwind-merge utility"
```

---

## Task 2: Button atom with CVA

**Files:**
- Create: `app/components/landing/atoms/button.tsx`

The current project has no Button component — buttons are raw `<a>` and `<button>` elements with `className="l-btn l-btn-primary"`. This task creates the typed component. Existing call sites are NOT updated yet (Task 5–9).

- [ ] **Step 1: Create Button atom**

Create `app/components/landing/atoms/button.tsx`:

```typescript
import { cva, type VariantProps } from "cva";
import { cn } from "../../lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap border border-transparent cursor-pointer no-underline transition-all duration-150 rounded-card",
  {
    variants: {
      intent: {
        primary:
          "bg-navy-900 text-white text-[15px] shadow-card hover:bg-navy-800 hover:-translate-y-px",
        secondary:
          "bg-white text-navy-900 text-[15px] border-ink-200 hover:border-ink-300 hover:bg-ink-50",
        teal: "bg-teal-500 text-white text-[15px] hover:bg-teal-600",
        ghost: "text-navy-900 text-[15px] hover:bg-ink-100",
        "ghost-white":
          "text-white/80 text-[15px] border border-white/20 hover:bg-white/[.08] hover:text-white hover:border-white/35",
      },
      size: {
        default: "h-[46px] px-[22px]",
        sm: "h-11 px-3.5 text-sm",
        lg: "h-[52px] px-7 text-base",
      },
    },
    defaultVariants: { intent: "primary", size: "default" },
  }
);

export type ButtonIntent = NonNullable<
  VariantProps<typeof buttonVariants>["intent"]
>;

// Renders as <button> by default. Pass `as="a"` + `href` for link buttons.
type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    as?: "button" | "a";
    href?: string;
    target?: string;
    rel?: string;
  };

export function Button({
  as: Tag = "button",
  intent,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <Tag
      className={cn(buttonVariants({ intent, size }), className)}
      {...(props as never)}
    />
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/landing/atoms/button.tsx
git commit -m "feat(atoms): Button atom with CVA — intent + size variants"
```

---

## Task 3: Update PricingPlan type + content

**Files:**
- Modify: `app/components/landing/domain/types.ts`
- Modify: `app/components/landing/domain/pricing.content.ts`

`PricingPlan.ctaStyle` currently holds CSS class strings (`"l-btn-secondary"`). This task migrates it to the `ButtonIntent` type.

- [ ] **Step 1: Update types.ts**

Open `app/components/landing/domain/types.ts`. Find the `PricingPlan` interface. Change `ctaStyle: string` to `ctaIntent: import("../atoms/button").ButtonIntent`:

```typescript
import type { ButtonIntent } from "../atoms/button";

// Inside PricingPlan interface — replace:
//   ctaStyle: string;
// with:
  ctaIntent: ButtonIntent;
```

The full relevant section of types.ts after the change (only the PricingPlan interface needs touching — leave all other interfaces unchanged):

```typescript
import type { ButtonIntent } from "../atoms/button";

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: Record<Currency, number>;
  period: string;
  note?: string;
  featuresLabel: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaIntent: ButtonIntent;
  spotsLeft?: number;
  badge?: string;
  featured?: boolean;
}
```

- [ ] **Step 2: Update pricing.content.ts**

Open `app/components/landing/domain/pricing.content.ts`. Replace every `ctaStyle` key with `ctaIntent` and replace the CSS class string with the intent name:

| Old value | New value |
|-----------|-----------|
| `"l-btn-secondary"` | `"secondary"` |
| `"l-btn-primary"` | `"primary"` |

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: errors on `pricing-table.tsx` because it still reads `p.ctaStyle` — that is expected at this step. Zero errors in the two files just modified.

- [ ] **Step 4: Commit**

```bash
git add app/components/landing/domain/types.ts app/components/landing/domain/pricing.content.ts
git commit -m "refactor(domain): PricingPlan ctaStyle → ctaIntent: ButtonIntent"
```

---

## Task 4: Update hero + contact-cta

**Files:**
- Modify: `app/components/landing/organisms/hero/hero.tsx`
- Modify: `app/components/landing/organisms/contact-cta.tsx`

- [ ] **Step 1: Update hero.tsx**

Open `app/components/landing/organisms/hero/hero.tsx`. Add the Button import:

```typescript
import { Button } from "../../atoms/button";
```

Replace the two button elements (around line 40–44). Before:

```tsx
<a href={`${APP_URL}/register`} className="l-btn l-btn-primary l-btn-lg">
  Comenzar gratis
</a>
<a href="#modulos" className="l-btn l-btn-secondary l-btn-lg">
  Ver módulos
</a>
```

After:

```tsx
<Button as="a" href={`${APP_URL}/register`} intent="primary" size="lg">
  Comenzar gratis
</Button>
<Button as="a" href="#modulos" intent="secondary" size="lg">
  Ver módulos
</Button>
```

- [ ] **Step 2: Update contact-cta.tsx**

Open `app/components/landing/organisms/contact-cta.tsx`. Add the Button import:

```typescript
import { Button } from "../atoms/button";
```

Find the two button elements. Before:

```tsx
<a href={`${APP_URL}/register`} className="l-btn l-btn-teal l-btn-lg">
  ...
</a>
...
className="l-btn l-btn-ghost-white l-btn-lg"
```

After:

```tsx
<Button as="a" href={`${APP_URL}/register`} intent="teal" size="lg">
  ...
</Button>
...
<Button as="a" intent="ghost-white" size="lg" ...>
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no new errors in the two modified files.

- [ ] **Step 4: Commit**

```bash
git add app/components/landing/organisms/hero/hero.tsx app/components/landing/organisms/contact-cta.tsx
git commit -m "refactor(organisms): hero + contact-cta — l-btn-* → Button component"
```

---

## Task 5: Update navbar

**Files:**
- Modify: `app/components/landing/organisms/navbar.tsx`

The navbar has 4 button usages. Two use inline `style={{ height: 44, ... }}` overrides — these become `size="sm"`.

- [ ] **Step 1: Add Button import**

```typescript
import { Button } from "../atoms/button";
```

- [ ] **Step 2: Replace desktop nav buttons (around line 100–114)**

Before:

```tsx
<a
  href={`${APP_URL}/login`}
  className="l-btn l-btn-ghost"
  style={{ height: 44, padding: "0 14px", fontSize: 14 }}
>
  Iniciar sesión
</a>
<a
  href={`${APP_URL}/register`}
  className="l-btn l-btn-primary"
  style={{ height: 44, padding: "0 16px", fontSize: 14 }}
>
  Crear cuenta gratis
</a>
```

After:

```tsx
<Button as="a" href={`${APP_URL}/login`} intent="ghost" size="sm">
  Iniciar sesión
</Button>
<Button as="a" href={`${APP_URL}/register`} intent="primary" size="sm">
  Crear cuenta gratis
</Button>
```

- [ ] **Step 3: Replace mobile drawer buttons (around line 164–173)**

Before:

```tsx
className="l-btn l-btn-primary l-btn-lg"
...
className="l-btn l-btn-ghost"
```

After:

```tsx
<Button as="a" href={`${APP_URL}/register`} intent="primary" size="lg" style={{ width: "100%", justifyContent: "center" }}>
  Crear cuenta gratis
</Button>
<Button as="a" href={`${APP_URL}/login`} intent="ghost" style={{ width: "100%", justifyContent: "center" }}>
  Iniciar sesión
</Button>
```

- [ ] **Step 4: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add app/components/landing/organisms/navbar.tsx
git commit -m "refactor(navbar): l-btn-* + inline styles → Button component"
```

---

## Task 6: Update purpose + nosotros + roadmap

**Files:**
- Modify: `app/components/landing/organisms/purpose.tsx`
- Modify: `app/(landing)/nosotros/page.tsx`
- Modify: `app/(landing)/roadmap/roadmap-client.tsx`

- [ ] **Step 1: Update purpose.tsx**

Add import: `import { Button } from "../atoms/button";`

Replace:

```tsx
<Link href="/nosotros" className="l-btn l-btn-secondary mt-2">
```

After (Link is the `as` target via className passthrough — Button renders as `<button>` by default, but here we need Next.js `<Link>`. Pass className directly):

```tsx
<Link href="/nosotros" className={cn(buttonVariants({ intent: "secondary" }), "mt-2")}>
```

Wait — `Link` is not a button variant. The correct pattern: import `buttonVariants` from the button file and apply it to the Link. Update `button.tsx` export to expose `buttonVariants`:

In `app/components/landing/atoms/button.tsx`, add to exports:

```typescript
export { buttonVariants };
```

Then in `purpose.tsx`:

```typescript
import Link from "next/link";
import { buttonVariants } from "../atoms/button";
import { cn } from "../../lib/utils";
```

```tsx
<Link href="/nosotros" className={cn(buttonVariants({ intent: "secondary" }), "mt-2")}>
  Conocer nuestra historia
</Link>
```

- [ ] **Step 2: Update nosotros/page.tsx**

Add imports:

```typescript
import { Button } from "../../components/landing/atoms/button";
```

Replace (around line 129–132):

```tsx
<a href={`${APP_URL}/register`} className="l-btn l-btn-teal l-btn-lg">
  ...
</a>
<Link href="/roadmap" className="l-btn l-btn-ghost-white l-btn-lg">
  ...
</Link>
```

After:

```tsx
<Button as="a" href={`${APP_URL}/register`} intent="teal" size="lg">
  Comenzar gratis — es gratis
</Button>
<Link href="/roadmap" className={cn(buttonVariants({ intent: "ghost-white", size: "lg" }))}>
  Ver roadmap
</Link>
```

Add to nosotros imports:

```typescript
import { buttonVariants } from "../../components/landing/atoms/button";
import { cn } from "../../lib/utils";
```

- [ ] **Step 3: Update roadmap-client.tsx**

Add imports:

```typescript
import { Button } from "../../components/landing/atoms/button";
```

Replace (around line 245):

```tsx
<a href={WA} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-secondary">
```

After:

```tsx
<Button as="a" href={WA} target="_blank" rel="noopener noreferrer" intent="secondary">
```

- [ ] **Step 4: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add app/components/landing/organisms/purpose.tsx app/components/landing/atoms/button.tsx app/(landing)/nosotros/page.tsx app/(landing)/roadmap/roadmap-client.tsx
git commit -m "refactor(organisms): purpose + nosotros + roadmap — l-btn-* → Button"
```

---

## Task 7: Update pricing-table

**Files:**
- Modify: `app/components/landing/organisms/pricing-table.tsx`

The pricing table uses `p.ctaStyle` (now `p.ctaIntent`) and appends `l-plan-cta-v2` — a CSS class that adds organism-specific spacing. The `l-plan-cta-v2` class stays as a `className` override via `cn()`.

- [ ] **Step 1: Add imports**

```typescript
import { Button } from "../atoms/button";
import { cn } from "../../lib/utils";
```

- [ ] **Step 2: Replace button element (around line 160)**

Before:

```tsx
className={`l-btn ${p.ctaStyle} l-plan-cta-v2`}
```

After — find the full element and replace:

```tsx
<Button
  as="a"
  href={p.ctaHref}
  intent={p.ctaIntent}
  className="l-plan-cta-v2"
>
  {p.ctaLabel}
</Button>
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 4: Commit**

```bash
git add app/components/landing/organisms/pricing-table.tsx
git commit -m "refactor(pricing): ctaStyle class string → Button intent prop"
```

---

## Task 8: Remove l-btn-* from atoms.css

All call sites now use `<Button>`. The CSS classes are dead code.

**Files:**
- Modify: `app/styles/atoms.css`

- [ ] **Step 1: Read current atoms.css**

Open `app/styles/atoms.css`. The button section starts at line 1 (`/* ── Buttons ── */`) and ends around line 45 (`}.l-btn-lg { ... }`). The keyframe section starts after.

- [ ] **Step 2: Remove the button classes**

Delete the entire Buttons block — lines from `/* ── Buttons ── */` through `.l-btn-lg { ... }` including `.l-btn-ghost-white` and `.l-btn-ghost-white:hover` in `cta.css`.

Keep everything after: `/* ── Scroll reveal ── */` and the keyframes.

Also open `app/styles/cta.css`. Remove the `l-btn-ghost-white` block (lines ~102–110):

```css
/* Remove this block: */
.l-btn-ghost-white {
  color: rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.2);
}
.l-btn-ghost-white:hover {
  background: rgba(255,255,255,0.08);
  color: white;
  border-color: rgba(255,255,255,0.35);
}
```

The `ghost-white` intent is now handled entirely by CVA in `button.tsx`.

- [ ] **Step 3: Verify TypeScript + grep check**

```bash
npx tsc --noEmit
grep -r "l-btn-" app --include="*.tsx" --include="*.ts"
```

Expected: `tsc` clean. `grep` returns zero matches.

- [ ] **Step 4: Commit**

```bash
git add app/styles/atoms.css app/styles/cta.css
git commit -m "refactor(css): remove l-btn-* classes — replaced by Button CVA"
```

---

## Task 9: Update Badge + Eyebrow atoms

**Files:**
- Modify: `app/components/landing/atoms/badge.tsx`

Both `Badge` and `Eyebrow` are exported from `badge.tsx`. Replace `.filter(Boolean).join(" ")` with `cn()`. Add CVA to `Eyebrow` for the `light` variant.

- [ ] **Step 1: Rewrite badge.tsx**

Replace the entire file:

```typescript
import { cva, type VariantProps } from "cva";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

// ── Badge ──────────────────────────────────────────────────
interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("l-module-tag", className)}>{children}</span>
  );
}

// ── Eyebrow ────────────────────────────────────────────────
const eyebrowVariants = cva("l-eyebrow", {
  variants: {
    theme: {
      dark: "",
      light: "l-eyebrow-light",
    },
  },
  defaultVariants: { theme: "dark" },
});

interface EyebrowProps extends VariantProps<typeof eyebrowVariants> {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, theme, className }: EyebrowProps) {
  return (
    <div className={cn(eyebrowVariants({ theme }), className)}>
      {children}
    </div>
  );
}
```

Note: existing callers that pass `light={true}` must be updated to `theme="light"`. Find all usages:

```bash
grep -rn "light={true}\|light=" app --include="*.tsx"
```

Update each one from `light={true}` to `theme="light"` and from `light={false}` or no prop to no prop (default is dark).

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/landing/atoms/badge.tsx
git commit -m "refactor(atoms): Badge cn() + Eyebrow CVA light variant"
```

---

## Task 10: Create ModuleCard molecule

**Files:**
- Create: `app/components/landing/molecules/module-card.tsx`

This is the `variant="module"` branch of the current `FeatureCard`.

- [ ] **Step 1: Create module-card.tsx**

```typescript
import type { LucideIcon } from "lucide-react";
import { Reveal } from "../atoms/reveal";
import { Badge } from "../atoms/badge";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  tags?: string[];
  delay?: number;
}

export function ModuleCard({ icon: Icon, title, body, tags, delay = 0 }: ModuleCardProps) {
  return (
    <Reveal delay={delay} threshold={0.08}>
      <div className="l-module-card">
        <div className="l-module-icon"><Icon size={22} /></div>
        <h3 className="l-module-h3">{title}</h3>
        <p className="l-module-p">{body}</p>
        {tags && (
          <div className="l-module-tags">
            {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
        )}
      </div>
    </Reveal>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/landing/molecules/module-card.tsx
git commit -m "feat(molecules): ModuleCard — extracted from FeatureCard module variant"
```

---

## Task 11: Create ValueCard molecule

**Files:**
- Create: `app/components/landing/molecules/value-card.tsx`

This is the `variant="value"` branch of the current `FeatureCard`.

- [ ] **Step 1: Create value-card.tsx**

```typescript
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { Reveal } from "../atoms/reveal";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  points?: string[];
  num?: string;
  delay?: number;
}

export function ValueCard({ icon: Icon, title, body, points, num, delay = 0 }: ValueCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="l-value-card">
        {num && <div className="l-value-num">{num}</div>}
        <div className="l-value-icon"><Icon size={22} /></div>
        <h3 className="l-value-h3">{title}</h3>
        <p className="l-value-p">{body}</p>
        {points && (
          <div className="l-value-points">
            {points.map((p) => (
              <div key={p} className="l-value-point">
                <Check size={14} />
                <span>{p}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/landing/molecules/value-card.tsx
git commit -m "feat(molecules): ValueCard — extracted from FeatureCard value variant"
```

---

## Task 12: Update organisms + dev page, delete FeatureCard

**Files:**
- Modify: `app/components/landing/organisms/modules.tsx`
- Modify: `app/components/landing/organisms/values.tsx`
- Modify: `app/dev/cards/page.tsx`
- Delete: `app/components/landing/molecules/feature-card.tsx`

- [ ] **Step 1: Update modules.tsx**

Replace FeatureCard import with ModuleCard:

```typescript
// Remove:
import { FeatureCard } from "../molecules/feature-card";

// Add:
import { ModuleCard } from "../molecules/module-card";
```

Replace every `<FeatureCard ... variant="module" ...>` with `<ModuleCard ...>` — remove the `variant` prop, all other props stay.

- [ ] **Step 2: Update values.tsx**

Replace FeatureCard import with ValueCard:

```typescript
// Remove:
import { FeatureCard } from "../molecules/feature-card";

// Add:
import { ValueCard } from "../molecules/value-card";
```

Replace every `<FeatureCard ... variant="value" ...>` with `<ValueCard ...>` — remove the `variant` prop, all other props stay.

- [ ] **Step 3: Update dev/cards/page.tsx**

Replace FeatureCard imports and usages:

```typescript
// Remove:
import { FeatureCard } from "../../components/landing/molecules/feature-card";

// Add:
import { ModuleCard } from "../../components/landing/molecules/module-card";
import { ValueCard } from "../../components/landing/molecules/value-card";
```

Replace all `<FeatureCard variant="module" ...>` with `<ModuleCard ...>` and all `<FeatureCard variant="value" ...>` with `<ValueCard ...>`. Remove the `variant` prop from each.

- [ ] **Step 4: Verify no remaining FeatureCard imports**

```bash
grep -rn "feature-card\|FeatureCard" app --include="*.tsx" --include="*.ts"
```

Expected: only `dev/components/feature-card-variants.tsx` (dev-only experimental file, unaffected).

- [ ] **Step 5: Delete FeatureCard**

```bash
rm app/components/landing/molecules/feature-card.tsx
```

- [ ] **Step 6: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 7: Commit**

```bash
git add app/components/landing/organisms/modules.tsx app/components/landing/organisms/values.tsx app/dev/cards/page.tsx
git rm app/components/landing/molecules/feature-card.tsx
git commit -m "refactor(molecules): split FeatureCard → ModuleCard + ValueCard"
```

---

## Task 13: Document token rules in CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Add token consumption table to CLAUDE.md**

Open `CLAUDE.md`. Find the **CSS Architecture** section. After the existing rules bullet list, add:

```markdown
**Token consumption — one rule per layer:**

| Layer | Where | Rule | Never |
|-------|-------|------|-------|
| JSX `className` | Tailwind utilities | `bg-navy-900`, `text-teal-500`, `rounded-card` | `var(--color-*)`, inline hex |
| `app/styles/*.css` | `var(--legacy-alias)` | `var(--navy-900)`, `var(--radius-lg)` | `var(--color-navy-900)` |
| `style={{}}` inline | Runtime-computed values only | `style={{ width: \`${pct}%\` }}` | Token values, hex colors |
```

- [ ] **Step 2: Verify file**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs(claude): add token consumption rules per layer"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Task |
|---|---|
| Install cva + tailwind-merge + clsx | Task 1 |
| Create cn() utility | Task 1 |
| Button atom with CVA (intent + size) | Task 2 |
| Export buttonVariants for Link usage | Task 6 |
| PricingPlan ctaStyle → ctaIntent | Task 3 |
| Update all l-btn-* call sites | Tasks 4–7 |
| Remove l-btn-* CSS classes | Task 8 |
| Badge cn() cleanup | Task 9 |
| Eyebrow CVA for light variant | Task 9 |
| ModuleCard molecule | Task 10 |
| ValueCard molecule | Task 11 |
| Delete FeatureCard | Task 12 |
| CLAUDE.md token rules | Task 13 |

All spec requirements covered.

**Placeholder check:** No TBD, TODO, or incomplete steps found.

**Type consistency:**
- `ButtonIntent` exported from `button.tsx` in Task 2, imported in `types.ts` Task 3 ✓
- `buttonVariants` exported from `button.tsx` in Task 6 step 1 — requires Task 2 to export it first ✓
- `ModuleCard` props match `FeatureCard` module-variant props minus `variant` ✓
- `ValueCard` props match `FeatureCard` value-variant props minus `variant` ✓
