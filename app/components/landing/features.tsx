"use client";

import { useEffect, useRef, useState } from "react";
import { Users, BadgeCheck, FileCheck, History, ShieldCheck } from "lucide-react";

function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: {
  children: React.ReactNode; delay?: number; className?: string; as?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`l-reveal ${inView ? "in" : ""} ${className}`} data-delay={delay || undefined}>
      {children}
    </Tag>
  );
}

const TIMELINE = [
  ["10:12", "Recepción de orden"],
  ["10:18", "Toma de muestra"],
  ["10:26", "Analizador clínico"],
  ["10:40", "Validación de resultados"],
  ["10:42", "Firma y entrega"],
];

export function Features() {
  return (
    <section id="funcionalidades" className="l-features scroll-mt-24">
      <div className="l-container">
        <Reveal>
          <div className="l-section-head">
            <div className="l-kicker">Características clave</div>
            <h2 className="l-section-title">Todo lo que tu laboratorio necesita</h2>
            <p className="l-section-sub">
              Registro, calidad, resultados online y trazabilidad en una sola plataforma.
            </p>
          </div>
        </Reveal>

        <div className="l-bento">
          {/* Hero card — Resultados online */}
          <Reveal delay={1} className="l-card l-card-hero">
            <div className="l-card-icon">
              <FileCheck size={20} />
            </div>
            <h3 className="l-card-title">Resultados online</h3>
            <p className="l-card-desc">
              Entrega firmada y notificaciones automáticas para médicos y pacientes.
              Tus pacientes reciben sus resultados en minutos, no en días.
            </p>
            <div className="l-mini-ui">
              <div className="l-mini-ui-header">
                <span className="l-mini-title">Resultados del día — firmados</span>
                <span style={{ fontFamily:"var(--font-geist-mono)", fontSize:10, color:"rgba(52,211,153,0.9)", marginLeft:"auto" }}>12 entregados</span>
              </div>
              <div className="l-mini-rows">
                <div className="l-mini-row-head">
                  <span>ID</span><span>Paciente</span><span>Estudio</span><span>Estado</span>
                </div>
                {[
                  { id:"ORD-1042", name:"García Ruiz, M.", exam:"Química 27", s:"ok", l:"Firmado" },
                  { id:"ORD-1041", name:"Pérez Luna, C.",  exam:"BH completa", s:"prog", l:"En proceso" },
                  { id:"ORD-1040", name:"Torres, R.",       exam:"Perfil tiroideo", s:"hold", l:"En espera" },
                ].map(r => (
                  <div key={r.id} className="l-mini-row">
                    <span className="l-mini-id">{r.id}</span>
                    <span style={{ color:"#fff", fontWeight:450 }}>{r.name}</span>
                    <span>{r.exam}</span>
                    <span className={`l-mini-status ${r.s === "ok" ? "l-status-ok" : r.s === "prog" ? "l-status-prog" : "l-status-hold"}`}>{r.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Tall card — Trazabilidad */}
          <Reveal delay={2} className="l-card l-card-tall">
            <div className="l-card-icon">
              <History size={20} />
            </div>
            <h3 className="l-card-title">Trazabilidad total</h3>
            <p className="l-card-desc">
              Auditoría de cada acción, insumo y resultado. Cada tubo y cada hallazgo con timestamp.
            </p>
            <div className="l-timeline">
              {TIMELINE.map(([time, text]) => (
                <div key={time} className="l-tl-item">
                  <div className="l-tl-dot" />
                  <div>
                    <div className="l-tl-time">{time}</div>
                    <div className="l-tl-text">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Wide — Registro de pacientes */}
          <Reveal delay={3} className="l-card l-card-wide">
            <div className="l-card-icon">
              <Users size={20} />
            </div>
            <h3 className="l-card-title">Registro de pacientes</h3>
            <p className="l-card-desc">
              Admisión rápida, historial completo y consentimiento en un solo lugar.
            </p>
          </Reveal>

          {/* Small — Control de calidad */}
          <Reveal delay={4} className="l-card l-card-sm">
            <div className="l-card-icon">
              <BadgeCheck size={20} />
            </div>
            <h3 className="l-card-title">Control de calidad</h3>
            <p className="l-card-desc">
              Validaciones, bloqueos y checklist para asegurar resultados confiables.
            </p>
          </Reveal>

          {/* Wide — Seguridad */}
          <Reveal delay={5} className="l-card l-card-wide">
            <div className="l-card-icon">
              <ShieldCheck size={20} />
            </div>
            <h3 className="l-card-title">Seguridad y cumplimiento</h3>
            <p className="l-card-desc">
              RBAC, cifrado TLS y en reposo, bitácoras detalladas. Confianza para auditorías y datos sensibles.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
