"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle } from "lucide-react";

type StatPart = { text: string; bold?: boolean };

const CARDS: { title: string; body: string; stat: StatPart[] }[] = [
  {
    title: "Resultados en papel",
    body: "El paciente regresa por su sobre. Tu personal imprime, archiva, busca expedientes. El tiempo se va en logística, no en análisis.",
    stat: [{ text: "Hasta " }, { text: "2 horas/día", bold: true }, { text: " en entrega manual" }],
  },
  {
    title: "Errores de transcripción",
    body: "Capturar a mano resultados del analizador es un riesgo clínico. Un decimal mal escrito puede comprometer un diagnóstico y tu acreditación.",
    stat: [{ text: "1 de cada 50", bold: true }, { text: " resultados con error de captura" }],
  },
  {
    title: "Sin visibilidad en tiempo real",
    body: "No sabes cuántas órdenes hay pendientes ni dónde se están atorando hasta que el director llama preguntando por sus exámenes.",
    stat: [{ text: "Decisiones a ciegas, " }, { text: "todo el día", bold: true }],
  },
  {
    title: "Facturación sin CFDI 4.0",
    body: "Cobras y luego, en Word, armas la factura. El SAT cambia el formato y tu administrador pasa la tarde corrigiendo. CFDI 4.0 ya no es opcional.",
    stat: [{ text: "15% del tiempo", bold: true }, { text: " administrativo en facturación" }],
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
      style={delay ? { transitionDelay: `${delay * 60}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function Problem() {
  return (
    <section className="l-section l-problem">
      <div className="l-container">
        <Reveal>
          <div className="l-section-head">
            <div className="l-eyebrow">El problema</div>
            <h2 className="l-section-title">
              Tu laboratorio pierde dinero todos los días por procesos manuales.
            </h2>
            <p className="l-section-lede">
              Estos son los cuellos de botella que vemos en el 90% de los
              laboratorios independientes que evaluamos.
            </p>
          </div>
        </Reveal>

        <div className="l-problem-grid">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i}>
              <div className="l-problem-card">
                <div className="l-problem-icon">
                  <AlertCircle size={20} />
                </div>
                <h3 className="l-problem-h3">{c.title}</h3>
                <p className="l-problem-p">{c.body}</p>
                <div className="l-problem-stat">
                  {c.stat.map((part, j) =>
                    part.bold ? <strong key={j}>{part.text}</strong> : <span key={j}>{part.text}</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
