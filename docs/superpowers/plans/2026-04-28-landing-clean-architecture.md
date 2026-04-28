# Landing Clean Architecture — Implementation Plan

> **Status: COMPLETED 2026-04-28**

**Goal:** Refactor `lab-system-landing` to Clean Architecture Light — separating domain (types + content), ui (shared atoms), and sections (presentational components) — without changing any visual output.

**Architecture:** Three layers: `domain/` exports TypeScript types and static content constants (no JSX); `ui/` exports shared React atoms (`Reveal`, `SectionHeader`); `sections/` contains presentational components that receive all content via typed props. `page.tsx` becomes the composition root that wires domain data to section components.

**Tech Stack:** Next.js 16, React 19, TypeScript strict, lucide-react (LucideIcon type)

---

## Result

```
app/components/landing/
├── domain/
│   ├── types.ts
│   ├── hero.content.ts       (HERO_TRUST_ITEMS, TRUST_BAR_BADGES, CONTACT_CTA_GUARANTEES)
│   ├── problem.content.ts
│   ├── values.content.ts
│   ├── modules.content.ts
│   ├── how-it-works.content.ts
│   ├── pricing.content.ts
│   ├── faq.content.ts
│   ├── navbar.content.ts
│   └── footer.content.ts
├── ui/
│   ├── reveal.tsx            (single Reveal definition — 6 duplicates eliminated)
│   └── section-header.tsx
└── sections/
    ├── hero/
    │   ├── hero.tsx
    │   └── dashboard-mockup.tsx
    ├── trust-bar.tsx
    ├── problem.tsx
    ├── values.tsx
    ├── modules.tsx
    ├── how-it-works.tsx
    ├── pricing-table.tsx
    ├── faq.tsx
    ├── contact-cta.tsx
    ├── footer.tsx
    └── navbar.tsx
```
