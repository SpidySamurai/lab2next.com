import type { PricingPlan } from "./types";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
const WA_DEMO = "https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20Lab2Next";

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "BASIC",
    tagline: "Para laboratorios que empiezan a digitalizar su operación.",
    priceMonthly: 350,
    priceYearly: 280,
    note: "Hasta 500 órdenes/mes · 1 sucursal · 5 usuarios",
    cta: "Crear cuenta gratis",
    ctaHref: `${APP_URL}/register`,
    ctaStyle: "l-btn-secondary",
    external: false,
    features: [
      { text: "Gestión de órdenes y pacientes", included: true },
      { text: "Portal de resultados con QR", included: true },
      { text: "WhatsApp: envío de enlace en 1 clic", included: true },
      { text: "Catálogo editable con tus precios", included: true },
      { text: "Paquetes de exámenes", included: true },
      { text: "Médicos referidores", included: true },
      { text: "Hasta 5 usuarios", included: true },
      { text: "Soporte por email", included: true },
      { text: "Agenda de citas", included: false },
      { text: "Chat de soporte prioritario", included: false },
    ],
  },
  {
    name: "FOUNDER",
    tagline: "Precio especial para los primeros 20 laboratorios. Acceso completo.",
    priceMonthly: 550,
    priceYearly: 440,
    note: "Hasta 1,500 órdenes/mes · hasta 2 sucursales",
    cta: "Crear cuenta gratis",
    ctaHref: `${APP_URL}/register`,
    ctaStyle: "l-btn-primary",
    external: false,
    featured: true,
    badge: "Solo 20 cupos",
    features: [
      { text: "Todo lo del plan BASIC, más:", included: true },
      { text: "Agenda de citas", included: true },
      { text: "Hasta 15 usuarios", included: true },
      { text: "PDF de resultados avanzado", included: true },
      { text: "Auditorías de acceso", included: false },
      { text: "Chat de soporte prioritario", included: true },
    ],
  },
  {
    name: "ENTERPRISE",
    tagline: "Para redes de laboratorios e instituciones con necesidades a la medida.",
    priceCustom: true,
    note: "Volumen ilimitado · sucursales ilimitadas",
    cta: "Hablar con ventas",
    ctaHref: WA_DEMO,
    ctaStyle: "l-btn-secondary",
    external: true,
    features: [
      { text: "Todo lo del plan FOUNDER, más:", included: true },
      { text: "Sucursales y usuarios sin límite", included: true },
      { text: "API de integración", included: true },
      { text: "White label", included: true },
      { text: "SLA personalizado", included: true },
      { text: "Gestor de cuenta dedicado", included: true },
    ],
  },
];
