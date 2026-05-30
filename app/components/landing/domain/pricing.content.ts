// Feature lists mirror app SSOT features/billing/domain/plan-feature-matrix.ts — keep in sync. 'Próximamente' = advertised, not yet built/gated.
import type { PricingPlan } from "./types";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
const WA_DEMO = "https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20Lab2Next";

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "FREE",
    tagline: "Prueba Lab2Next sin costo. Digitaliza tu operación desde el primer día.",
    prices: {
      MXN: { monthly: 0,  yearly: 0  },
      USD: { monthly: 0,  yearly: 0  },
      COP: { monthly: 0,  yearly: 0  },
    },
    note: "Hasta 50 exámenes/mes · 1 sucursal · 2 usuarios",
    cta: "Crear cuenta gratis",
    ctaHref: `${APP_URL}/register`,
    ctaIntent: "primary",
    external: false,
    features: [
      { text: "Gestión de órdenes y pacientes", included: true },
      { text: "Catálogo editable con tus precios", included: true },
      { text: "Paquetes de exámenes", included: true },
      { text: "Médicos referidores", included: true },
      { text: "Agenda de citas", included: true },
      { text: "Portal de resultados con QR", included: false },
      { text: "WhatsApp: envío de enlace en 1 clic", included: false },
      { text: "Reportes financieros", included: false },
      { text: "PDF de resultados avanzado", included: false },
    ],
  },
  {
    name: "BASIC",
    tagline: "Para laboratorios que empiezan a digitalizar su operación.",
    prices: {
      MXN: { monthly: 350,    yearly: 280    },
      USD: { monthly: 19,     yearly: 15     },
      COP: { monthly: 80000,  yearly: 64000  },
    },
    note: "Hasta 300 exámenes/mes · 1 sucursal · 5 usuarios",
    cta: "Crear cuenta gratis",
    ctaHref: `${APP_URL}/register`,
    ctaIntent: "primary",
    external: false,
    features: [
      { text: "Todo lo del plan FREE, más:", included: true },
      { text: "Portal de resultados con QR", included: true },
      { text: "WhatsApp: envío de enlace en 1 clic", included: true },
      { text: "Hasta 5 usuarios", included: true },
      { text: "Reportes financieros", included: false },
      { text: "PDF de resultados avanzado", included: false },
    ],
  },
  {
    name: "FOUNDER",
    tagline: "Precio especial para los primeros 20 laboratorios. Acceso completo.",
    prices: {
      MXN: { monthly: 550,     yearly: 440    },
      USD: { monthly: 29,      yearly: 23     },
      COP: { monthly: 130000,  yearly: 104000 },
    },
    note: "Hasta 800 exámenes/mes · hasta 2 sucursales · hasta 15 usuarios",
    cta: "Crear cuenta gratis",
    ctaHref: `${APP_URL}/register`,
    ctaIntent: "teal",
    external: false,
    featured: true,
    badge: "Precio fundador",
    spotsLeft: 15,
    features: [
      { text: "Todo lo del plan BASIC, más:", included: true },
      { text: "Reportes financieros", included: true },
      { text: "PDF de resultados avanzado", included: true },
      { text: "Hasta 15 usuarios", included: true },
      { text: "Chat de soporte prioritario (Próximamente)", included: false },
    ],
  },
  {
    name: "PREMIUM",
    tagline: "Para laboratorios en crecimiento con mayor volumen y múltiples sucursales.",
    prices: {
      // PREMIUM = precio LIVE de producción ($1.200 MXN). Pendiente repricing por costo/margen.
      MXN: { monthly: 1200,    yearly: 960    },
      // TODO: confirmar FX USD/COP de PREMIUM con Javier — valores estimados por proporción vs BASIC/FOUNDER
      USD: { monthly: 65,      yearly: 52     },
      COP: { monthly: 274000,  yearly: 219000 },
    },
    note: "Hasta 2.500 exámenes/mes · hasta 5 sucursales · hasta 30 usuarios",
    cta: "Crear cuenta gratis",
    ctaHref: `${APP_URL}/register`,
    ctaIntent: "primary",
    external: false,
    features: [
      { text: "Todo lo del plan FOUNDER, más:", included: true },
      { text: "Mayor volumen de exámenes", included: true },
      { text: "Hasta 5 sucursales", included: true },
      { text: "Hasta 30 usuarios", included: true },
      { text: "White label (Próximamente)", included: false },
    ],
  },
  {
    name: "ENTERPRISE",
    tagline: "Ilimitado — nos adaptamos a lo que tu cadena de laboratorios necesita.",
    priceCustom: true,
    note: "Exámenes, sucursales y usuarios sin límite",
    cta: "Hablar con ventas",
    ctaHref: WA_DEMO,
    ctaIntent: "primary",
    external: true,
    features: [
      { text: "Todo lo del plan PREMIUM, más:", included: true },
      { text: "Sucursales y usuarios sin límite", included: true },
      { text: "SLA personalizado", included: true },
      { text: "Gestor de cuenta dedicado", included: true },
      { text: "API de integración (Próximamente)", included: false },
      { text: "Auditoría avanzada (Próximamente)", included: false },
    ],
  },
];
