"use client";

import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  MessageCircle,
  Calendar,
  FlaskConical,
  BarChart2,
  UserCheck,
} from "lucide-react";

const MODULES = [
  {
    icon: ClipboardList,
    title: "Gestión de órdenes y pacientes",
    body: "Captura de órdenes con autocompletado de catálogo, expediente clínico digital, historial completo y paquetes de exámenes con precio prorrateado.",
    tags: ["Pacientes", "Órdenes", "Catálogo", "Paquetes"],
  },
  {
    icon: MessageCircle,
    title: "Portal de resultados por WhatsApp",
    body: "El staff envía el enlace al paciente por WhatsApp en un clic. El paciente accede a su portal seguro con código QR sin instalar ninguna aplicación.",
    tags: ["WhatsApp", "QR", "Portal web"],
  },
  {
    icon: Calendar,
    title: "Agenda de citas",
    body: "Controla citas de toma de muestra con calendario por sucursal, capacidad configurable y vista diaria para el staff.",
    tags: ["Citas", "Calendario", "Sucursales"],
  },
  {
    icon: FlaskConical,
    title: "Muestras y trazabilidad",
    body: "Registro de muestras por orden con trazabilidad completa de la cadena analítica. Sabe en qué punto está cada muestra en todo momento.",
    tags: ["Muestras", "Trazabilidad", "Cadena analítica"],
  },
  {
    icon: BarChart2,
    title: "Dashboard operativo",
    body: "KPIs del día en tiempo real: órdenes por estado, tiempos de entrega e ingresos por sucursal. El director sabe qué pasa sin esperar el cierre del mes.",
    tags: ["KPIs", "Tiempo real", "Multi-sucursal"],
  },
  {
    icon: UserCheck,
    title: "Médicos referidores",
    body: "Catálogo de médicos referidores vinculado a cada orden. Trazabilidad completa de quién solicita qué estudio en tu laboratorio.",
    tags: ["Médicos", "Referidores", "Trazabilidad"],
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
      { threshold: 0.08 }
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

export function Modules() {
  return (
    <section className="l-section l-modules" id="modulos">
      <div className="l-container">
        <Reveal>
          <div className="l-section-head">
            <div className="l-eyebrow">Módulos del sistema</div>
            <h2 className="l-section-title">
              Todo lo que necesita tu laboratorio. En una sola plataforma.
            </h2>
            <p className="l-section-lede">
              Sin integraciones eternas, sin licencias por módulo, sin servidor
              en el cuarto de atrás.
            </p>
          </div>
        </Reveal>

        <div className="l-modules-grid">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.title} delay={i % 3}>
                <div className="l-module-card">
                  <div className="l-module-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="l-module-h3">{m.title}</h3>
                  <p className="l-module-p">{m.body}</p>
                  <div className="l-module-tags">
                    {m.tags.map((tag) => (
                      <span key={tag} className="l-module-tag">{tag}</span>
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
