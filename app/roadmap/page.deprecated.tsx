"use client";

import { useEffect, useRef } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { Navbar } from "../components/landing/sections/navbar";
import { Footer } from "../components/landing/sections/footer";
import { NAV_LINKS } from "../components/landing/domain/navbar.content";
import { FOOTER_COLUMNS, FOOTER_MINI_BADGES } from "../components/landing/domain/footer.content";

type Status = "done" | "current" | "building" | "planned";
type Side = "left" | "right";

interface Milestone {
  date: string;
  title: string;
  status: Status;
  side: Side;
  cx: number;
  cy: number;
  trigger: number; // fraction 0–1 of scroll progress when this milestone activates
  tags: string[];
}

// SVG viewBox: 0 0 800 1800
const SVG_W = 800;
const SVG_H = 1800;

// Tapering funnel path: amplitude decreases linearly from ±200 (top) to ±60 (bottom).
// Each segment uses symmetric midpoint control points → vertical tangent at every node.
// Effect: road starts wide (clear past) and converges (uncertain future). cx=400 is center.
//
//  i=0  left  cx=200  (amplitude 200)
//  i=1  right cx=575  (amplitude 175)
//  i=2  left  cx=250  (amplitude 150)
//  i=3  right cx=530  (amplitude 130) ← CURRENT
//  i=4  left  cx=295  (amplitude 105)
//  i=5  right cx=485  (amplitude  85)
//  i=6  left  cx=340  (amplitude  60)
const PATH_D = [
  "M 400 30",
  "C 390 100 208 148 200 200",    // → m0 left  (200, 200)
  "C 200 315 575 315 575 430",    // → m1 right (575, 430)  mid=315
  "C 575 545 250 545 250 660",    // → m2 left  (250, 660)  mid=545
  "C 250 780 530 780 530 900",    // → m3 right (530, 900)  mid=780  CURRENT
  "C 530 1020 295 1020 295 1140", // → m4 left  (295, 1140) mid=1020
  "C 295 1258 485 1258 485 1375", // → m5 right (485, 1375) mid=1258
  "C 485 1490 340 1490 340 1605", // → m6 left  (340, 1605) mid=1490
  "C 348 1700 396 1762 400 1790",
].join(" ");

// Triggers ≈ cy/SVG_H − 0.02
const MILESTONES: Milestone[] = [
  {
    date: "Ene 2025", title: "Primera orden digital",
    status: "done", side: "left", cx: 200, cy: 200, trigger: 0.09,
    tags: ["Gestión de órdenes", "Registro de pacientes", "Portal con QR"],
  },
  {
    date: "Mar 2025", title: "WhatsApp nativo",
    status: "done", side: "right", cx: 575, cy: 430, trigger: 0.22,
    tags: ["Resultados por WhatsApp", "Firma digital verificable", "Acceso sin instalar nada"],
  },
  {
    date: "Abr 2025", title: "Catálogo y operación",
    status: "done", side: "left", cx: 250, cy: 660, trigger: 0.35,
    tags: ["155+ exámenes preconfigurados", "Paquetes personalizados", "Médicos referidores"],
  },
  {
    date: "Hoy", title: "Ecosistema completo",
    status: "current", side: "right", cx: 530, cy: 900, trigger: 0.48,
    tags: ["Multi-sucursal", "Dashboard en tiempo real", "Plan Founder disponible"],
  },
  {
    date: "Q3 2025", title: "Agenda y seguimiento",
    status: "building", side: "left", cx: 295, cy: 1140, trigger: 0.61,
    tags: ["Citas con confirmación automática", "Portal para médicos", "Alertas de valores críticos"],
  },
  {
    date: "Q4 2025", title: "Analítica avanzada",
    status: "planned", side: "right", cx: 485, cy: 1375, trigger: 0.74,
    tags: ["Reportes exportables", "Auditorías de acceso", "Tiempos de entrega"],
  },
  {
    date: "2026", title: "Plataforma abierta",
    status: "planned", side: "left", cx: 340, cy: 1605, trigger: 0.87,
    tags: ["API de integración", "App móvil", "White label", "CFDI"],
  },
];

const NODE_ACTIVE: Record<Status, { fill: string; stroke: string }> = {
  done:     { fill: "#0A1F44", stroke: "#0A1F44" },
  current:  { fill: "#0EA5E9", stroke: "#0EA5E9" },
  building: { fill: "#E0F2FE", stroke: "#0EA5E9" },
  planned:  { fill: "#F1F5F9", stroke: "#94A3B8"  },
};
const NODE_IDLE = { fill: "#F8FAFC", stroke: "#CBD5E1" };

const CHIP_LABEL: Partial<Record<Status, string>> = {
  building: "En desarrollo",
  planned:  "Próximamente",
};

const WA = "https://wa.me/529994875155?text=Hola,%20tengo%20una%20sugerencia%20para%20el%20roadmap%20de%20Lab2Next";

export default function RoadmapPage() {
  const canvasRef     = useRef<HTMLDivElement>(null);
  const drawnRef      = useRef<SVGPathElement>(null);
  const nodeRefs      = useRef<(SVGCircleElement | null)[]>([]);
  const cardRefs      = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const path   = drawnRef.current;
    const canvas = canvasRef.current;
    if (!path || !canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      path.style.strokeDasharray = "none";
      MILESTONES.forEach((m, i) => {
        const n = nodeRefs.current[i];
        if (n) { n.setAttribute("fill", NODE_ACTIVE[m.status].fill); n.setAttribute("stroke", NODE_ACTIVE[m.status].stroke); }
        cardRefs.current[i]?.classList.add("visible");
      });
      return;
    }

    const total = path.getTotalLength();
    path.style.strokeDasharray = `${total}`;
    path.style.strokeDashoffset = `${total}`;

    const update = () => {
      const rect    = canvas.getBoundingClientRect();
      const canvasH = canvas.offsetHeight;
      // Progress: viewport center tracks through the canvas 1:1
      // p=0 when canvas top is at viewport center, p=1 when canvas bottom is
      const viewportMid = window.innerHeight * 0.38;
      const p = Math.max(0, Math.min(1, (viewportMid - rect.top) / canvasH));

      path.style.strokeDashoffset = `${total * (1 - p)}`;

      MILESTONES.forEach((m, i) => {
        const active = p >= m.trigger;
        const node   = nodeRefs.current[i];
        const card   = cardRefs.current[i];
        if (node) {
          const c = active ? NODE_ACTIVE[m.status] : NODE_IDLE;
          node.setAttribute("fill",   c.fill);
          node.setAttribute("stroke", c.stroke);
        }
        card?.classList.toggle("visible", active);
      });
    };

    const onScroll = () => requestAnimationFrame(update);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <Navbar links={NAV_LINKS} />

      {/* Hero */}
      <header className="l-rmap-hero">
        <div className="l-rmap-hero-bg" aria-hidden="true" />
        <div className="l-container l-rmap-hero-inner">
          <div className="l-rmap-eyebrow">
            <span className="l-rmap-live-dot" />
            Roadmap público · Actualizado abr 2026
          </div>
          <h1 className="l-rmap-h1">
            El camino<br />
            <span className="l-rmap-h1-accent">recorrido y por recorrer.</span>
          </h1>
          <p className="l-rmap-lede">
            Construimos en público. Baja para recorrer el camino.
          </p>
        </div>
      </header>

      {/* Timeline */}
      <div className="l-rmap-section">
        {/* SVG + cards share the same positioned container */}
        <div ref={canvasRef} className="l-rmap-canvas">
          {/* SVG road */}
          <svg
            className="l-rmap-svg"
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              {/*
                Gradient encodes time: navy=past, teal=now, slate=future.
                cy=900 → (900-30)/(1790-30)=49.4% → teal lands at "Hoy" milestone.
              */}
              <linearGradient id="l-road-grad" x1="400" y1="30" x2="400" y2="1790" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#0A1F44" />
                <stop offset="44%"  stopColor="#0A1F44" />
                <stop offset="49%"  stopColor="#0EA5E9" />
                <stop offset="53%"  stopColor="#0EA5E9" />
                <stop offset="63%"  stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
            </defs>

            {/* Ghost path — full route, always visible */}
            <path
              d={PATH_D}
              stroke="rgba(10,31,68,0.10)"
              strokeWidth="3"
              strokeDasharray="8 8"
              fill="none"
            />
            {/* Drawn path — animated, color encodes past/present/future */}
            <path
              ref={drawnRef}
              d={PATH_D}
              stroke="url(#l-road-grad)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Milestone nodes */}
            {MILESTONES.map((m, i) => (
              <g key={m.title}>
                {m.status === "current" && (
                  <>
                    <circle cx={m.cx} cy={m.cy} r={26} fill="rgba(14,165,233,0.10)" className="l-rmap-ring-2" />
                    <circle cx={m.cx} cy={m.cy} r={20} fill="rgba(14,165,233,0.18)" className="l-rmap-ring-1" />
                  </>
                )}
                <circle
                  ref={(el) => { nodeRefs.current[i] = el; }}
                  cx={m.cx} cy={m.cy} r={15}
                  fill={NODE_IDLE.fill}
                  stroke={NODE_IDLE.stroke}
                  strokeWidth="2.5"
                />
                {/* Checkmark polyline for done milestones */}
                {m.status === "done" && (
                  <polyline
                    points={`${m.cx - 6},${m.cy} ${m.cx - 1.5},${m.cy + 5} ${m.cx + 7},${m.cy - 6}`}
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                {m.status === "current" && (
                  <circle cx={m.cx} cy={m.cy} r={5} fill="white" />
                )}
              </g>
            ))}
          </svg>

          {/* Floating milestone cards */}
          {MILESTONES.map((m, i) => {
            const topPct  = `${((m.cy / SVG_H) * 100).toFixed(2)}%`;
            const isRight = m.side === "right";
            return (
              <div
                key={m.title}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`l-rmap-card l-rmap-card-${m.status} ${isRight ? "l-rmap-card-r" : "l-rmap-card-l"}`}
                style={{ top: topPct }}
              >
                <span className="l-rmap-card-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="l-rmap-card-date">{m.date}</span>
                {m.status === "current" && (
                  <span className="l-rmap-here-chip">
                    <MapPin size={9} strokeWidth={2.5} />
                    Estás aquí
                  </span>
                )}
                {CHIP_LABEL[m.status] && (
                  <span className={`l-rmap-chip l-rmap-chip-${m.status}`}>
                    {CHIP_LABEL[m.status]}
                  </span>
                )}
                <h3 className="l-rmap-card-title">{m.title}</h3>
                <div className="l-rmap-tags">
                  {m.tags.map((tag) => (
                    <span key={tag} className={`l-rmap-tag l-rmap-tag-${m.status}`}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="l-container">
          <div className="l-rmap-bottom">
            <p className="l-rmap-bottom-text">¿Necesitas algo que no está aquí?</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-secondary">
              <MessageCircle size={15} />
              Sugerir por WhatsApp
            </a>
            <p className="l-rmap-disclaimer">
              Roadmap orientativo — no contractual.{" · "}
              <a href="/">← Inicio</a>
            </p>
          </div>
        </div>
      </div>

      <Footer columns={FOOTER_COLUMNS} miniBadges={FOOTER_MINI_BADGES} />
    </>
  );
}
