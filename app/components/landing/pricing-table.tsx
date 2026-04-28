"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Check, Minus } from "lucide-react";

const WA_DEMO = "https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20Lab2Next";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const PLANS = [
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

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`l-reveal ${inView ? "in" : ""}`}
      style={delay ? { transitionDelay: `${delay * 80}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function PricingTable() {
  const [annual, setAnnual] = useState(false);
  const [thumbStyle, setThumbStyle] = useState<{ left: number; width: number }>({ left: 4, width: 90 });
  const monthlyRef = useRef<HTMLButtonElement>(null);
  const yearlyRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const el = annual ? yearlyRef.current : monthlyRef.current;
    if (el) {
      const parent = el.parentElement!;
      const r = el.getBoundingClientRect();
      const p = parent.getBoundingClientRect();
      setThumbStyle({ left: r.left - p.left, width: r.width });
    }
  }, [annual]);

  return (
    <section className="l-section l-pricing-v2" id="precios">
      <div className="l-container">
        <Reveal>
          <div className="l-section-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <div className="l-eyebrow" style={{ justifyContent: "center" }}>Precios</div>
            <h2 className="l-section-title" style={{ margin: "0 auto" }}>
              Un plan para cada tamaño de laboratorio.
            </h2>
            <p className="l-section-lede" style={{ margin: "16px auto 0" }}>
              Sin costos de implementación ocultos. Sin licencias por usuario.
              Cancelas cuando quieras.
            </p>
            <div className="l-pricing-toggle">
              <span className="l-pricing-toggle-thumb" style={{ left: thumbStyle.left, width: thumbStyle.width }} />
              <button
                ref={monthlyRef}
                className={`l-pricing-toggle-btn ${!annual ? "active" : ""}`}
                onClick={() => setAnnual(false)}
              >
                Mensual
              </button>
              <button
                ref={yearlyRef}
                className={`l-pricing-toggle-btn ${annual ? "active" : ""}`}
                onClick={() => setAnnual(true)}
              >
                Anual
                <span className="l-pricing-toggle-saving">−20%</span>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="l-pricing-grid-v3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i}>
              <div className={`l-plan-card ${p.featured ? "featured" : ""}`}>
                {p.badge && <div className="l-plan-badge-v2">{p.badge}</div>}

                <div className="l-plan-name-v2">{p.name}</div>
                <div className="l-plan-tagline-v2">{p.tagline}</div>

                <div className="l-plan-price-v2">
                  {p.priceCustom ? (
                    <span className="l-plan-custom-v2">A medida</span>
                  ) : (
                    <>
                      <span className="l-plan-currency-v2">$</span>
                      <span className="l-plan-amount-v2">
                        {annual ? p.priceYearly : p.priceMonthly}
                      </span>
                      <span className="l-plan-period-v2">USD/mes</span>
                    </>
                  )}
                </div>
                <div className="l-plan-note-v2">{p.note}</div>

                <a
                  href={p.ctaHref}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noopener noreferrer" : undefined}
                  className={`l-btn ${p.ctaStyle} l-plan-cta-v2`}
                >
                  {p.cta}
                </a>

                <div className="l-plan-features-label-v2">Incluye</div>
                <div className="l-plan-features-v2">
                  {p.features.map((f) => (
                    <div key={f.text} className={`l-plan-feature-v2 ${!f.included ? "muted" : ""}`}>
                      {f.included ? <Check size={14} /> : <Minus size={14} />}
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
