"use client";

import { useEffect, useRef, useState } from "react";

const WA_DEMO = "https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20Lab2Next";

// ── Real app status colors/labels ──────────────────────────────────
const STATUS = {
  COMPLETED:   { label: "Completado",  bg: "rgba(52,211,153,0.13)",  color: "#34D399" },
  IN_PROGRESS: { label: "En Proceso",  bg: "rgba(34,211,238,0.13)",  color: "#22D3EE" },
  PENDING:     { label: "Pendiente",   bg: "rgba(245,158,11,0.13)",  color: "#F59E0B" },
  CANCELLED:   { label: "Cancelado",   bg: "rgba(244,63,94,0.13)",   color: "#F43F5E" },
} as const;

// ── Realistic sample orders matching real columns ──────────────────
const ORDERS = [
  { num: "ORD-2024-1042", patient: "García Ruiz, M.",     exam: "Química sanguínea 27",  date: "23 abr 2026, 09:12", total: "$420.00", status: "COMPLETED"   },
  { num: "ORD-2024-1041", patient: "Pérez Luna, C.",      exam: "BH completa",            date: "23 abr 2026, 09:05", total: "$280.00", status: "IN_PROGRESS" },
  { num: "ORD-2024-1040", patient: "Torres Sánchez, R.",  exam: "Perfil tiroideo",        date: "23 abr 2026, 08:47", total: "$650.00", status: "PENDING"     },
  { num: "ORD-2024-1039", patient: "Mendoza Flores, A.",  exam: "Orina completa",         date: "23 abr 2026, 08:30", total: "$120.00", status: "COMPLETED"   },
] as const;

// ── Sidebar: secciones colapsables con subitems (estructura real) ──
const NAV_SECTIONS = [
  {
    label: "Principal", open: true,
    items: [
      { label: "Dashboard", active: false },
      { label: "Pacientes",  active: false },
      { label: "Órdenes",    active: true  },
      { label: "Agenda",     active: false },
    ],
  },
  {
    label: "Catálogo", open: false,
    items: [
      { label: "Exámenes",  active: false },
      { label: "Analitos",  active: false },
    ],
  },
  {
    label: "Administración", open: false,
    items: [],
  },
];

const KPI = [
  { label: "Órdenes de Hoy", value: "47",      trend: "+12%", up: true  },
  { label: "Resultados Pend.", value: "8",      trend: "En proceso", up: true  },
  { label: "Pacientes Nuevos", value: "23",     trend: "+5 hoy", up: true  },
  { label: "Ingresos (hoy)",   value: "$8,240", trend: "+18.3%", up: true  },
];

// ── Shared styles ─────────────────────────────────────────────────
const S = {
  mono: { fontFamily: "var(--font-geist-mono), ui-monospace, monospace" } as React.CSSProperties,
  border: "1px solid rgba(255,255,255,0.06)",
  faint: "rgba(244,244,247,0.38)",
  dim: "rgba(244,244,247,0.62)",
};

function DashboardMockup() {
  return (
    <div style={{
      borderRadius: 18,
      background: "linear-gradient(180deg, rgba(18,16,32,0.97) 0%, rgba(10,9,20,0.99) 100%)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.08) inset, 0 48px 120px -20px rgba(0,0,0,0.85), 0 0 100px -20px rgba(124,58,237,0.3)",
      overflow: "hidden",
      fontSize: 12,
    }}>
      {/* ── Title bar ── */}
      <div style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 16px", borderBottom: S.border, background:"rgba(0,0,0,0.25)" }}>
        <div style={{ display:"flex", gap:5 }}>
          {["#FF5F57","#FEBC2E","#28C840"].map(c => <div key={c} style={{ width:9, height:9, borderRadius:"50%", background:c }} />)}
        </div>
        <span style={{ ...S.mono, fontSize:10.5, color: S.faint, flex:1, textAlign:"center", letterSpacing:"0.03em" }}>
          app.lab2next.com
        </span>
      </div>

      {/* ── App shell ── */}
      <div style={{ display:"grid", gridTemplateColumns:"176px 1fr", minHeight: 440 }}>

        {/* ── Sidebar ── */}
        <div style={{ borderRight: S.border, padding:"12px 10px", background:"rgba(0,0,0,0.18)", display:"flex", flexDirection:"column", gap:0 }}>
          {/* Logo */}
          <div style={{ display:"flex", alignItems:"center", gap:8, padding:"4px 8px 12px", borderBottom: S.border, marginBottom:10 }}>
            <div style={{ width:22, height:22, borderRadius:6, background:"linear-gradient(135deg,#7C3AED,#4C1D95)", boxShadow:"0 0 12px rgba(124,58,237,0.4)", flexShrink:0 }} />
            <span style={{ fontWeight:600, fontSize:13, letterSpacing:"-0.02em" }}>Lab2Next</span>
          </div>
          {/* Collapsible sections */}
          {NAV_SECTIONS.map(section => (
            <div key={section.label} style={{ marginBottom:4 }}>
              {/* Section label with chevron */}
              <div style={{
                display:"flex", alignItems:"center", justifyContent:"space-between",
                padding:"5px 10px", borderRadius:6, cursor:"pointer",
                fontSize:10.5, fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase",
                color: S.faint,
              }}>
                <span>{section.label}</span>
                <span style={{ fontSize:9, transform: section.open ? "rotate(90deg)" : "rotate(0deg)", transition:"transform .2s" }}>›</span>
              </div>
              {/* Subitems */}
              {section.open && section.items.map(item => (
                <div key={item.label} style={{
                  display:"flex", alignItems:"center", gap:8,
                  padding:"6px 10px 6px 18px",
                  borderRadius:7, fontSize:12, cursor:"pointer",
                  color: item.active ? "#fff" : S.dim,
                  background: item.active ? "rgba(124,58,237,0.18)" : "transparent",
                  border: item.active ? "1px solid rgba(124,58,237,0.28)" : "1px solid transparent",
                  marginTop:1,
                }}>
                  <div style={{
                    width:5, height:5, borderRadius:"50%", flexShrink:0,
                    background: item.active ? "#A78BFA" : "rgba(244,244,247,0.18)",
                    boxShadow: item.active ? "0 0 5px #A78BFA" : "none",
                  }} />
                  {item.label}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Main content ── */}
        <div style={{ padding:"18px 20px", display:"flex", flexDirection:"column", gap:14, overflow:"hidden" }}>

          {/* Header */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ fontSize:15, fontWeight:600, letterSpacing:"-0.02em" }}>Órdenes</div>
              <div style={{ fontSize:11, color: S.faint, marginTop:1 }}>Gestiona las órdenes y registros de pacientes.</div>
            </div>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:6,
              height:28, padding:"0 12px", borderRadius:999,
              background:"linear-gradient(180deg,#A78BFA,#7C3AED)",
              color:"#fff", fontSize:11.5, fontWeight:500,
              boxShadow:"0 6px 18px -6px rgba(124,58,237,0.6)",
            }}>
              + Nueva Orden
            </div>
          </div>

          {/* KPI row */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8 }}>
            {KPI.map(k => (
              <div key={k.label} style={{
                padding:"10px 12px", borderRadius:10,
                background:"rgba(255,255,255,0.025)", border: S.border,
              }}>
                <div style={{ ...S.mono, fontSize:9.5, color: S.faint, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:5 }}>{k.label}</div>
                <div style={{ fontSize:18, fontWeight:600, letterSpacing:"-0.02em", lineHeight:1 }}>{k.value}</div>
                <div style={{ fontSize:10.5, color: k.up ? "#34D399" : "#F43F5E", marginTop:4, ...S.mono }}>{k.trend}</div>
              </div>
            ))}
          </div>

          {/* Orders table */}
          <div style={{ borderRadius:10, border: S.border, background:"rgba(255,255,255,0.015)", overflow:"hidden", flex:1 }}>
            {/* Table head */}
            <div style={{
              display:"grid", gridTemplateColumns:"130px 1fr 130px 70px 100px 28px",
              padding:"9px 14px", borderBottom: S.border,
              ...S.mono, fontSize:9.5, letterSpacing:"0.1em", textTransform:"uppercase",
              color: S.faint, gap:8,
            }}>
              <span>No. Orden</span><span>Paciente</span><span>Fecha</span><span>Total</span><span>Estado</span><span />
            </div>
            {/* Rows */}
            {ORDERS.map((o, i) => {
              const s = STATUS[o.status];
              return (
                <div key={o.num} style={{
                  display:"grid", gridTemplateColumns:"130px 1fr 130px 70px 100px 28px",
                  padding:"10px 14px", fontSize:11.5, gap:8, alignItems:"center",
                  borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.04)",
                }}>
                  <span style={{ ...S.mono, color:"rgba(167,139,250,0.9)", fontSize:11 }}>{o.num}</span>
                  <span style={{ color:"#fff", fontWeight:450 }}>{o.patient}</span>
                  <span style={{ color: S.dim, ...S.mono, fontSize:10.5 }}>{o.date}</span>
                  <span style={{ fontWeight:500 }}>{o.total}</span>
                  <span style={{
                    display:"inline-flex", alignItems:"center", justifyContent:"center",
                    height:20, padding:"0 8px", borderRadius:999,
                    background: s.bg, color: s.color,
                    fontSize:10, fontWeight:500, whiteSpace:"nowrap",
                  }}>{s.label}</span>
                  <span style={{ color: S.faint, textAlign:"center", fontSize:14 }}>›</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Reveal helper ─────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`l-reveal ${inView ? "in" : ""} ${className}`} data-delay={delay || undefined}>
      {children}
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="l-hero">
      <div className="aurora" aria-hidden="true">
        <div className="aurora-blob one" />
        <div className="aurora-blob two" />
        <div className="aurora-blob three" />
      </div>
      <div className="l-container l-hero-inner">
        <Reveal>
          <span className="l-eyebrow">
            <span className="l-eyebrow-dot" />
            Software para laboratorios clínicos
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="l-headline">
            Gestiona pacientes, estudios y{" "}
            <span className="grad">resultados</span>{" "}
            en una sola plataforma.
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="l-hero-sub">
            Reduce errores, acelera entregas y gana trazabilidad total con flujos
            clínicos guiados, seguridad de nivel empresarial y soporte especializado.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="l-hero-ctas">
            <a href={WA_DEMO} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-primary l-btn-lg">
              Solicitar demo gratis
            </a>
            <a href="#paquetes" className="l-btn l-btn-ghost l-btn-lg">
              Ver paquetes
            </a>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <div className="l-hero-proof">
            <span>Sin contratos forzosos</span>
            <span className="l-hero-proof-dot" />
            <span>Implementación gratuita</span>
            <span className="l-hero-proof-dot" />
            <span>Disponible en Latam</span>
          </div>
        </Reveal>

        <Reveal delay={5} className="l-hero-viz-wrap">
          <div className="l-hero-viz">
            <DashboardMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
