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

const BENEFITS = [
  { num: "01", title: "Rapidez operativa", desc: "Menos pasos manuales, más resultados entregados a tiempo. Flujos guiados que reducen la fricción en cada etapa del proceso clínico." },
  { num: "02", title: "Automatización clínica", desc: "Flujos guiados y alertas que reducen errores y retrabajos. El sistema valida, bloquea y notifica — tú te concentras en la ciencia." },
  { num: "03", title: "Eficiencia administrativa", desc: "Paneles claros, métricas en tiempo real y reportes listos para auditoría. Toda la información de tu laboratorio en un solo lugar." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="l-benefits scroll-mt-24">
      <div className="l-container">
        <Reveal>
          <div className="l-section-head">
            <div className="l-kicker">Beneficios</div>
            <h2 className="l-section-title">Resultados operativos y clínicos</h2>
            <p className="l-section-sub">
              Diseñado para laboratorios que quieren operar mejor, no solo digitalizar.
            </p>
          </div>
        </Reveal>
        <div className="l-benefits-grid">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.num} delay={i + 1} className="l-benefit">
              <div className="l-benefit-num">{b.num}</div>
              <h3 className="l-benefit-title">{b.title}</h3>
              <p className="l-benefit-desc">{b.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
