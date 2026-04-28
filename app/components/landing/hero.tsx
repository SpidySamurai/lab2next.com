"use client";

import { useEffect, useRef, useState } from "react";
import { Check, MessageCircle, Search, FileText } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const ORDERS = [
  { id: "#L-1284", name: "García Ruiz, M.", sub: "F · 34 años", exam: "Química 35 + BH", amount: "$1,240", status: "done" as const },
  { id: "#L-1285", name: "Pérez Luna, C.", sub: "M · 52 años", exam: "Perfil tiroideo", amount: "$890", status: "proc" as const },
  { id: "#L-1286", name: "Torres Sánchez, R.", sub: "F · 28 años", exam: "EGO + Cultivo", amount: "$520", status: "proc" as const },
  { id: "#L-1287", name: "Mendoza Flores, A.", sub: "F · 41 años", exam: "Hemoglobina A1c", amount: "$340", status: "new" as const },
];

const STATUS_LABELS = { done: "Entregado", proc: "En proceso", new: "Nueva" };

const SIDE_ITEMS = [
  { label: "Órdenes", active: true, count: "42" },
  { label: "Pacientes", active: false, count: "284" },
  { label: "Resultados", active: false, count: "8" },
  { label: "Citas", active: false, count: null },
];

function DashboardMockup() {
  return (
    <div className="l-dash">
      <div className="l-dash-inner-clip">
      {/* Browser bar */}
      <div className="l-dash-bar">
        <span className="l-dash-dot" style={{ background: "#ff5f57" }} />
        <span className="l-dash-dot" style={{ background: "#febc2e" }} />
        <span className="l-dash-dot" style={{ background: "#28c840" }} />
        <span className="l-dash-url">app.lab2next.com/ordenes</span>
      </div>

      {/* App body */}
      <div className="l-dash-body">
        {/* Sidebar */}
        <div className="l-dash-side">
          <div className="l-dash-side-label">Operación</div>
          {SIDE_ITEMS.map((item) => (
            <div key={item.label} className={`l-dash-nav-item ${item.active ? "active" : ""}`}>
              <span>{item.label}</span>
              {item.count && (
                <span className="l-dash-nav-count">{item.count}</span>
              )}
            </div>
          ))}
          <div className="l-dash-side-label" style={{ marginTop: 12 }}>Administración</div>
          <div className="l-dash-nav-item">Facturación</div>
          <div className="l-dash-nav-item">Reportes</div>
        </div>

        {/* Main */}
        <div className="l-dash-main">
          <div className="l-dash-main-head">
            <div className="l-dash-h1">
              Órdenes del día
              <small>Lunes, 28 abr</small>
            </div>
            <div className="l-dash-search">
              <Search size={11} />
              <span>Buscar paciente…</span>
            </div>
          </div>

          {/* KPIs */}
          <div className="l-dash-kpis">
            <div className="l-dash-kpi">
              <div className="l-dash-kpi-label">Órdenes hoy</div>
              <div className="l-dash-kpi-value">142</div>
              <div className="l-dash-kpi-delta">+18% vs ayer</div>
            </div>
            <div className="l-dash-kpi">
              <div className="l-dash-kpi-label">Tiempo prom.</div>
              <div className="l-dash-kpi-value">3h 24m</div>
              <div className="l-dash-kpi-delta">−42 min</div>
            </div>
            <div className="l-dash-kpi">
              <div className="l-dash-kpi-label">Facturado</div>
              <div className="l-dash-kpi-value">$48,290</div>
              <div className="l-dash-kpi-delta" style={{ color: "var(--green-600)" }}>+24%</div>
            </div>
          </div>

          {/* Orders table */}
          <div className="l-dash-orders">
            <div className="l-dash-orders-head">
              <span>Folio</span>
              <span>Paciente</span>
              <span>Estudio</span>
              <span>Estado</span>
              <span style={{ textAlign: "right" }}>Total</span>
            </div>
            {ORDERS.map((o) => (
              <div key={o.id} className="l-dash-order">
                <span className="l-ord-id">{o.id}</span>
                <div>
                  <div className="l-ord-name">{o.name}</div>
                  <div className="l-ord-sub">{o.sub}</div>
                </div>
                <span className="l-ord-test">{o.exam}</span>
                <span className={`l-dash-status ${o.status}`}>
                  {o.status !== "done" && <span className="l-dash-pulse" />}
                  {STATUS_LABELS[o.status]}
                </span>
                <span className="l-ord-amount">{o.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      </div>{/* end l-dash-inner-clip */}

      {/* Floating callouts */}
      <div className="l-dash-float l-dash-float-1">
        <div className="l-dash-float-icon">
          <MessageCircle size={16} />
        </div>
        <div>
          <div className="l-dash-float-label">Resultado enviado</div>
          <div className="l-dash-float-value">WhatsApp · #L-1284</div>
        </div>
      </div>
      <div className="l-dash-float l-dash-float-2">
        <div className="l-dash-float-icon">
          <FileText size={16} />
        </div>
        <div>
          <div className="l-dash-float-label">PDF generado</div>
          <div className="l-dash-float-value">García Ruiz, M.</div>
        </div>
      </div>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
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

export function Hero() {
  return (
    <section className="l-hero" id="top">
      <div className="l-container l-hero-grid">
        {/* Copy */}
        <div>
          <Reveal>
            <div className="l-hero-pill">
              <span className="l-hero-pill-badge">Gratis 14 días</span>
              <span>Sin tarjeta de crédito</span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="l-hero-title">
              Tu laboratorio digital,{" "}
              <em>operando hoy</em>
              {" "}— sin instaladores ni servidores.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="l-hero-sub">
              Lab2Next es la plataforma en la nube para laboratorios clínicos en México.
              Te registras, configuras tus sucursales con catálogo pre-cargado y
              empiezas a operar el mismo día. Sin instalar nada.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="l-hero-actions">
              <a href={`${APP_URL}/register`} className="l-btn l-btn-primary l-btn-lg">
                Crear cuenta gratis
              </a>
              <a href="#modulos" className="l-btn l-btn-secondary l-btn-lg">
                Ver el sistema
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="l-hero-microtrust">
              {["Sin tarjeta de crédito", "Catálogo pre-cargado", "Soporte en español"].map((item) => (
                <span key={item} className="l-hero-check">
                  <Check size={14} />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Dashboard visual */}
        <Reveal delay={2}>
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}
