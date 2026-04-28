"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Zap, MessageCircle, BarChart2 } from "lucide-react";

const CARDS = [
  {
    num: "01",
    icon: Zap,
    title: "Implementación en 3 semanas",
    body: "No 6 meses. Configuración, migración de datos, capacitación y go-live en 21 días. Tu equipo operando con autonomía desde la primera semana.",
    points: [
      "Plan de implementación firmado el día 1",
      "Migración de tu base de pacientes y catálogo",
      "Capacitación incluida para todo el equipo",
    ],
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "Portal de resultados por WhatsApp",
    body: "El paciente recibe sus resultados por WhatsApp con QR firmado digitalmente. Sin imprimir, sin que regresen por su sobre, sin llamadas.",
    points: [
      "Resultados entregados el mismo día",
      "QR con firma digital verificable",
      "Acceso al portal web sin instalar nada",
    ],
  },
  {
    num: "03",
    icon: BarChart2,
    title: "Visibilidad total de tu operación",
    body: "KPIs en tiempo real, tiempos de entrega por examen, ingresos por sucursal. El director sabe qué pasa en su laboratorio sin esperar el cierre del mes.",
    points: [
      "Dashboard operativo con datos al minuto",
      "Reportes por sucursal exportables",
      "Alertas de órdenes pendientes",
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
      { threshold: 0.1 }
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

export function Values() {
  return (
    <section className="l-section">
      <div className="l-container">
        <Reveal>
          <div className="l-section-head">
            <div className="l-eyebrow">Por qué Lab2Next</div>
            <h2 className="l-section-title">
              Tres razones por las que los directores eligen Lab2Next.
            </h2>
            <p className="l-section-lede">
              No vendemos software. Vendemos certeza operativa, horas recuperadas
              y un laboratorio que funciona como uno del 2026.
            </p>
          </div>
        </Reveal>

        <div className="l-values-grid">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.num} delay={i}>
                <div className="l-value-card">
                  <div className="l-value-num">{c.num}</div>
                  <div className="l-value-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="l-value-h3">{c.title}</h3>
                  <p className="l-value-p">{c.body}</p>
                  <div className="l-value-points">
                    {c.points.map((p) => (
                      <div key={p} className="l-value-point">
                        <Check size={14} />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
