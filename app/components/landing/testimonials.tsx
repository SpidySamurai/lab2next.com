"use client";

import { useEffect, useRef, useState } from "react";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`l-reveal ${inView ? "in" : ""} ${className}`} data-delay={delay || undefined}>
      {children}
    </div>
  );
}

function Stars() {
  return (
    <div className="l-stars">
      {[0,1,2,3,4].map(n => (
        <svg key={n} width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.7L6 22l1.5-7.2L2 10l7.1-1.1z" />
        </svg>
      ))}
    </div>
  );
}

const TESTIMONIALS = [
  {
    quote: "Lab2Next nos permitió digitalizar por completo el flujo de recepción y entrega de resultados. La plataforma es robusta y fácil de usar.",
    name: "Bioquímico Edwin",
    role: "Director de Laboratorio",
    lab: "Biogen Foundery",
    initials: "BE",
    grad: "linear-gradient(135deg, #7C3AED, #22D3EE)",
    cls: "l-testi-a",
  },
  {
    quote: "Antes perdíamos horas cuadrando inventarios y caja. Ahora todo cuadra al centavo y el control de calidad es impecable.",
    name: "Dra. Carmen R.",
    role: "Jefa de Calidad",
    lab: "Laboratorios del Sureste",
    initials: "CR",
    grad: "linear-gradient(135deg, #A78BFA, #F472B6)",
    cls: "l-testi-b",
  },
  {
    quote: "La velocidad con la que atendemos a los pacientes subió un 40%. La interfaz es tan intuitiva que el personal nuevo aprende el mismo día.",
    name: "Lic. Roberto M.",
    role: "Administrador",
    lab: "Análisis Clínicos Integrales",
    initials: "RM",
    grad: "linear-gradient(135deg, #34D399, #7C3AED)",
    cls: "l-testi-c",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="l-testimonials scroll-mt-24">
      <div className="l-container">
        <Reveal>
          <div className="l-section-head">
            <div className="l-kicker">Casos de éxito</div>
            <h2 className="l-section-title">Laboratorios que confían en nosotros</h2>
            <p className="l-section-sub">
              Resultados reales de clientes que ya modernizaron su operación clínica.
            </p>
          </div>
        </Reveal>
        <div className="l-testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i + 1} className={`l-testi ${t.cls}`}>
              <Stars />
              <p className="l-testi-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="l-testi-author">
                <div className="l-avatar" style={{ background: t.grad }}>{t.initials}</div>
                <div className="l-testi-meta">
                  <span className="l-testi-name">{t.name}</span>
                  <span className="l-testi-role">{t.role} · {t.lab}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
