# Lab2Next — Landing Page

Landing page de [Lab2Next](https://lab2next.com), el sistema de información clínica (LIS) SaaS para laboratorios independientes en México.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind 4 · CSS custom properties

---

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

La app principal corre en `localhost:3000`. La landing usa el puerto 3002 por convención durante desarrollo.

---

## Estructura

```
app/
├── components/landing/   # Secciones de la página
│   ├── navbar.tsx
│   ├── hero.tsx           # Dashboard mockup animado
│   ├── trust-bar.tsx
│   ├── problem.tsx
│   ├── values.tsx
│   ├── modules.tsx
│   ├── how-it-works.tsx
│   ├── pricing-table.tsx
│   ├── faq.tsx
│   ├── contact-cta.tsx
│   └── footer.tsx
├── globals.css            # Design system completo — variables, animaciones
├── layout.tsx
└── page.tsx
```

---

## Design system

Colores, tipografía y componentes definidos en `globals.css` vía CSS custom properties (`--navy-900`, `--teal-500`, etc.). Sin framework de componentes externos — todo CSS custom prefijado con `l-`.

**Fuentes:** Inter (variable 100–900) + JetBrains Mono (500–600)

---

## Iteraciones del diseño

### v1 — Bootstrap inicial
Plantilla base `create-next-app`. Sin diseño propio.

### v2 — Dark-first redesign (handoff Claude Design)
Primer diseño real. Dark mode, paleta navy. Componentes modulares extraídos desde un handoff de Claude Design. Estructura de secciones definida.

### v3 — Light-first + self-serve (actual)
Rediseño completo orientado a conversión y precisión de features:

- **Hero** — Dashboard mockup v3: tabla de órdenes 5 columnas, KPI chips, callouts flotantes animados. Copy actualizado a self-serve ("Crear cuenta gratis").
- **Trust bar** — Franja navy oscura con 5 badges reales (sin tarjeta · 14 días · cancelas · soporte ES · datos MX). Sin logos falsos ni badges de certificación no obtenida.
- **Módulos** — Reemplazado "Facturación CFDI 4.0" (no operativo) por "Muestras y trazabilidad" (operativo). WhatsApp descrito con precisión: envío de enlace por staff, no bot automático.
- **Cómo funciona** — Flujo self-serve (~5 min registro, ~20 min config, día 1 operando). Animación de progreso scroll-driven.
- **Precios** — 3 planes (BASIC · FOUNDER · ENTERPRISE). Toggle mensual/anual. PREMIUM congelado, no mostrado.
- **FAQ** — WhatsApp, trial 14 días (corregido de 30), portabilidad de datos.
- **CTA final** — Primary: registro. Secondary: demo por WhatsApp.
- **Navbar** — "Crear cuenta gratis" en lugar de "Solicitar demo".
- **Footer** — Badges técnicos (AWS · AES-256 · TLS 1.3 · Backups diarios). Sin número personal.

### v3 — Animaciones web
- Scroll reveals con spring easing (`cubic-bezier(0.16, 1, 0.3, 1)`) en todas las secciones
- Dashboard: KPI chips y filas de órdenes aparecen en cascada al entrar al viewport
- Íconos de módulos y valores: micro-lift + color shift en hover
- CTA buttons: breathe glow en loop (navy en hero, teal en sección final)
- Callouts flotantes del dashboard desclipeados (inner-clip wrapper)
- Grid de órdenes corregido a 5 columnas
- `prefers-reduced-motion` respetado en todas las animaciones

---

## Feature accuracy

Los contenidos de la landing reflejan únicamente features **operativas en producción**. Ver `FEATURE_STATUS.md` en el monorepo raíz para el control completo de qué se puede y no se puede comunicar.

---

## Variables de entorno

```env
NEXT_PUBLIC_APP_URL=https://app.lab2next.com
```

En desarrollo sin `.env`, el fallback es `http://localhost:3000`.
