"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.05 }
    );
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`l-reveal ${inView ? "in" : ""} ${className}`} data-delay={delay || undefined}>
      {children}
    </div>
  );
}

const WA_DEMO = "https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20Lab2Next";

const WA_PREMIUM = "https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20recibir%20novedades%20del%20Plan%20Premium%20de%20Lab2Next";

const PLANS = [
  {
    name: "BASIC",
    price: "$350",
    tagline: "Para laboratorios que empiezan a digitalizar su operación.",
    features: [
      "500 órdenes/mes",
      "5 usuarios",
      "1 sucursal",
      "Paquetes de exámenes",
      "Médicos referidores",
      "Portal de pacientes",
      "WhatsApp + QR",
      "PDF clásico",
      "Soporte por email",
      "Implementación gratuita",
    ],
    cta: "Solicitar demo",
  },
  {
    name: "FOUNDER",
    price: "$550",
    tagline: "Precio especial de fundador. Acceso completo para escalar.",
    features: [
      "1,500 órdenes/mes",
      "15 usuarios",
      "Matriz + 1 sucursal",
      "Convenios y precios especiales",
      "WhatsApp personalizable",
      "PDF avanzado con membrete",
      "Soporte por chat",
    ],
    featured: true,
    ribbon: "Más elegido",
    cta: "Solicitar demo",
  },
  {
    name: "PREMIUM",
    price: "$1,200",
    tagline: "Para redes y laboratorios con alto volumen y múltiples sedes.",
    features: [
      "5,000 órdenes/mes",
      "30 usuarios",
      "Hasta 5 sucursales",
      "Ventas y corte de caja",
      "Cotizaciones persistentes",
      "Reportes operativos avanzados",
      "Soporte VIP",
    ],
    ribbon: "Próximamente",
    waLink: WA_PREMIUM,
    cta: "Registrar interés",
  },
  {
    name: "ENTERPRISE",
    price: "Consultar",
    tagline: "Instituciones y cadenas con necesidades a la medida.",
    features: [
      "Volumen a la medida",
      "Usuarios flexibles",
      "Sucursales ilimitadas",
      "VIP dedicado",
      "Sitio web personalizado",
      "Contrato a medida",
    ],
    cta: "Contactar",
  },
];

export function PricingTable() {
  return (
    <section id="paquetes" className="l-pricing scroll-mt-24">
      <div className="l-container">
        <Reveal>
          <div className="l-section-head">
            <div className="l-kicker">Planes y Precios</div>
            <h2 className="l-section-title">Escala a tu propio ritmo</h2>
            <p className="l-section-sub">
              Sin contratos forzosos. Implementación gratuita en todos los planes.
            </p>
          </div>
        </Reveal>

        <div className="l-pricing-grid">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i + 1} className={`l-plan ${p.featured ? "featured" : ""}`}>
              {p.ribbon && <div className="l-ribbon">{p.ribbon}</div>}
              <div className="l-plan-name">{p.name}</div>
              <div className="l-plan-price">
                {p.price === "Consultar" ? (
                  <span className="amount" style={{ fontSize: 24 }}>Consultar</span>
                ) : (
                  <>
                    <span className="amount">{p.price}</span>
                    <span className="period">/mes</span>
                  </>
                )}
              </div>
              <div className="l-plan-tagline">{p.tagline}</div>
              <ul className="l-plan-features">
                {p.features.map(f => (
                  <li key={f}>
                    <Check size={13} className="l-plan-check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={(p as any).waLink ?? WA_DEMO} target="_blank" rel="noopener noreferrer" className="l-plan-cta">
                {p.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
