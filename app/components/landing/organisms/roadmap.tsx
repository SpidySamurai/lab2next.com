import { Check, Wrench, Calendar } from "lucide-react";
import { Reveal } from "../atoms/reveal";

type PhaseStatus = "live" | "building" | "planned";

interface RoadmapItem {
  text: string;
}

interface RoadmapPhase {
  status: PhaseStatus;
  label: string;
  period: string;
  title: string;
  items: RoadmapItem[];
}

const PHASES: RoadmapPhase[] = [
  {
    status: "live",
    label: "En producción",
    period: "Disponible hoy",
    title: "Fundación operativa",
    items: [
      { text: "Gestión de órdenes y pacientes" },
      { text: "Portal de resultados con QR firmado digitalmente" },
      { text: "Envío de resultados por WhatsApp" },
      { text: "Catálogo con más de 155 exámenes preconfigurado" },
      { text: "Agenda de citas y médicos referidores" },
      { text: "Múltiples sucursales y usuarios" },
      { text: "Diseñador de PDF avanzado" },
      { text: "Dashboard operativo en tiempo real" },
    ],
  },
  {
    status: "building",
    label: "En desarrollo",
    period: "Hoy",
    title: "Administra tu laboratorio",
    items: [
      { text: "Caja, cobros y honorarios médicos" },
      { text: "Control de inventario y reactivos" },
      { text: "Reportes financieros" },
      { text: "Impresión de etiquetas" },
      { text: "Recepción de muestras" },
    ],
  },
  {
    status: "planned",
    label: "Próximamente",
    period: "2026 · 2027",
    title: "Integración y movilidad",
    items: [
      { text: "Interfaces con analizadores de laboratorio" },
      { text: "App móvil para el laboratorio" },
      { text: "API abierta para integraciones HIS/LIS" },
      { text: "Soporte para redes de laboratorio" },
    ],
  },
];

const STATUS_META: Record<PhaseStatus, { icon: typeof Check; color: string; bg: string }> = {
  live:     { icon: Check,    color: "var(--green-600)", bg: "var(--green-50)"  },
  building: { icon: Wrench,   color: "var(--teal-600)",  bg: "var(--teal-50)"   },
  planned:  { icon: Calendar, color: "var(--ink-500)",   bg: "var(--ink-100)"   },
};

export function Roadmap() {
  return (
    <section className="l-section l-roadmap" id="roadmap">
      <div className="l-container">
        <Reveal threshold={0.08}>
          <div className="l-section-head">
            <div className="l-eyebrow">Roadmap</div>
            <h2 className="l-section-title">
              Lo que hay hoy. Lo que viene mañana.
            </h2>
            <p className="l-section-lede">
              Construimos en público. Cada fase refleja lo que los laboratorios
              nos piden. Si tienes algo en mente,{" "}
              <a
                href="https://wa.me/529994875155?text=Hola,%20tengo%20una%20sugerencia%20para%20Lab2Next"
                target="_blank"
                rel="noopener noreferrer"
                className="l-roadmap-link"
              >
                cuéntanos
              </a>
              .
            </p>
          </div>
        </Reveal>

        <div className="l-roadmap-grid">
          {PHASES.map((phase, i) => {
            const meta = STATUS_META[phase.status];
            const Icon = meta.icon;
            return (
              <Reveal key={phase.title} delay={i} threshold={0.06}>
                <div className={`l-roadmap-card l-roadmap-${phase.status}`}>
                  <div className="l-roadmap-card-head">
                    <span
                      className="l-roadmap-badge"
                      style={{ color: meta.color, background: meta.bg }}
                    >
                      <Icon size={11} strokeWidth={2.5} />
                      {phase.label}
                    </span>
                    <span className="l-roadmap-period">{phase.period}</span>
                  </div>
                  <h3 className="l-roadmap-title">{phase.title}</h3>
                  <ul className="l-roadmap-items">
                    {phase.items.map((item) => (
                      <li key={item.text} className="l-roadmap-item">
                        <span className="l-roadmap-dot" style={{ background: meta.color }} />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
