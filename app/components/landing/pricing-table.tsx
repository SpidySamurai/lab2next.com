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

const PLANS = [
  {
    name: "BASIC",
    price: "$350",
    tagline: "Para laboratorios que empiezan a digitalizar su operación.",
    features: ["500 órdenes/mes", "3 usuarios", "1 sucursal (matriz)", "PDF clásico", "Soporte email", "Implementación gratuita"],
    cta: "Solicitar demo",
  },
  {
    name: "ADVANCED",
    price: "$850",
    tagline: "Un equipo con operación estable y crecimiento moderado.",
    features: ["1,000 órdenes/mes", "10 usuarios", "Matriz + 1 sucursal", "Etiquetas de muestras", "3 listas de precios", "Soporte email"],
    cta: "Solicitar demo",
  },
  {
    name: "FOUNDER",
    price: "$550",
    tagline: "Precio especial de fundador. Acceso completo para escalar.",
    features: ["1,000 órdenes/mes", "15 usuarios", "Matriz + 1 sucursal", "WhatsApp + QR", "PDF avanzado", "Soporte chat + email"],
    featured: true,
    ribbon: "Más elegido",
    cta: "Solicitar demo",
  },
  {
    name: "PREMIUM",
    price: "$1,350",
    tagline: "Para redes y laboratorios con alto volumen y múltiples sedes.",
    features: ["2,000 órdenes/mes", "15 usuarios", "Hasta 3 sucursales", "WhatsApp + QR", "PDF avanzado", "Soporte chat + email"],
    cta: "Solicitar demo",
  },
  {
    name: "ENTERPRISE",
    price: "Consultar",
    tagline: "Instituciones y cadenas con necesidades a la medida.",
    features: ["Volumen a la medida", "Usuarios flexibles", "Sucursales ilimitadas", "VIP dedicado", "Sitio web personalizado", "Contrato a medida"],
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
              <a href={WA_DEMO} target="_blank" rel="noopener noreferrer" className="l-plan-cta">
                {p.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
