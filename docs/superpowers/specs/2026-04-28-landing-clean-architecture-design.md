# Landing Page — Clean Architecture Light

**Date:** 2026-04-28
**Status:** Approved
**Scope:** `lab-system-landing` únicamente

---

## Problema

El estado actual de la landing viola SRP en múltiples puntos:

- `Reveal` duplicado en 6 archivos (`hero`, `problem`, `values`, `modules`, `faq`, `contact-cta`)
- Copy/datos hardcodeados dentro de los componentes de presentación
- `SectionHeader` (eyebrow + title + lede) repetido sin abstracción
- Sin tipos para el contenido de cada sección
- Componentes imposibles de testear unitariamente sin datos acoplados

---

## Arquitectura objetivo

Clean Architecture Light — 3 capas sin infrastructure (landing es estática).

```
app/
└── page.tsx                        # composition root

components/landing/
├── domain/                         # tipos + contenido estático (sin JSX)
│   ├── types.ts
│   ├── hero.content.ts
│   ├── problem.content.ts
│   ├── values.content.ts
│   ├── modules.content.ts
│   ├── pricing.content.ts
│   ├── faq.content.ts
│   └── trust-bar.content.ts
├── ui/                             # átomos compartidos
│   ├── reveal.tsx
│   └── section-header.tsx
└── sections/                       # presentación — reciben props tipados
    ├── hero/
    │   ├── hero.tsx
    │   └── dashboard-mockup.tsx    # extraído de hero.tsx (SRP)
    ├── trust-bar.tsx
    ├── problem.tsx
    ├── values.tsx
    ├── modules.tsx
    ├── how-it-works.tsx
    ├── pricing-table.tsx
    ├── faq.tsx
    ├── contact-cta.tsx
    └── footer.tsx
```

---

## Reglas por capa

### domain/
- Solo TypeScript. Sin React, sin imports de terceros (excepto types de lucide si necesario).
- Exporta: tipos (`ProblemCard`, `ModuleCard`, `PricingPlan`, `FaqItem`, etc.) y constantes (`PROBLEM_CARDS`, `MODULES`, `PLANS`, `FAQ_ITEMS`).
- **Nada de JSX.**

### ui/
- Componentes React genéricos sin lógica de negocio ni copy.
- `reveal.tsx` — única definición de `Reveal`. Todas las secciones importan de aquí.
- `section-header.tsx` — recibe `{ eyebrow, title, lede, centered? }`. Todas las secciones usan este componente.
- Sin dependencias de `domain/`.

### sections/
- Componentes de presentación. Reciben todo su contenido vía props tipados.
- Importan de `domain/types.ts` para sus props interfaces.
- Importan `Reveal` y `SectionHeader` de `ui/`.
- Sin hardcoded strings (excepción: `APP_URL` y `WA_DEMO` son configuración de entorno, no copy — quedan como constantes locales o en un `config.ts`).

### page.tsx (composition root)
- Importa datos desde `domain/*.content.ts`.
- Importa componentes desde `sections/`.
- Pasa datos como props a cada sección.
- Sin lógica, sin JSX inline más allá de composición.

---

## Tipos clave (`domain/types.ts`)

```ts
export interface ProblemCard {
  title: string;
  body: string;
  stat: { text: string; bold?: boolean }[];
}

export interface ModuleCard {
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string[];
}

export interface ValueCard {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
}

export interface PricingPlan {
  name: string;
  tagline: string;
  monthly: number | null;
  annual: number | null;
  limit: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  cta: "register" | "sales";
}

export interface FaqItem {
  q: string;
  a: string;
}
```

---

## Extracción de DashboardMockup

`DashboardMockup` actualmente vive dentro de `hero.tsx` (viola SRP — hero.tsx tiene 220 líneas). Se extrae a `sections/hero/dashboard-mockup.tsx`. `hero.tsx` se mueve a `sections/hero/hero.tsx`.

---

## CSS

`globals.css` no cambia en esta iteración. La arquitectura CSS (modularización por sección) es un sprint separado.

---

## Fuera de scope

- CSS Modules / migración de globals.css
- Tests de componentes (sprint posterior)
- Internacionalización del copy
- Cambios visuales o de diseño

---

## Plan de implementación (orden atómico)

1. Crear `domain/types.ts` con todos los tipos
2. Crear `ui/reveal.tsx` (extraer de hero.tsx)
3. Crear `ui/section-header.tsx` (nuevo átomo)
4. Crear `domain/*.content.ts` por sección (extraer datos)
5. Mover componentes a `sections/` y limpiar duplicados de `Reveal`
6. Extraer `DashboardMockup` a `sections/hero/dashboard-mockup.tsx`
7. Actualizar `page.tsx` como composition root
8. Verificar: `tsc --noEmit` sin errores, página renderiza igual
