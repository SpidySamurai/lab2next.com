import { MessageCircle, Search, FileText } from "lucide-react";

const ORDERS = [
  { id: "#L-1284", name: "García Ruiz, M.", sub: "F · 34 años", exam: "Química 35 + BH", amount: "$1,240", status: "done" as const },
  { id: "#L-1285", name: "Pérez Luna, C.", sub: "M · 52 años", exam: "Perfil tiroideo", amount: "$890", status: "proc" as const },
  { id: "#L-1286", name: "Torres Sánchez, R.", sub: "F · 28 años", exam: "EGO + Cultivo", amount: "$520", status: "proc" as const },
  { id: "#L-1287", name: "Mendoza Flores, A.", sub: "F · 41 años", exam: "Hemoglobina A1c", amount: "$340", status: "new" as const },
];

const STATUS_LABELS = { done: "Entregado", proc: "En proceso", new: "Nueva" } as const;

const SIDE_ITEMS = [
  { label: "Órdenes", active: true, count: "42" },
  { label: "Pacientes", active: false, count: "284" },
  { label: "Resultados", active: false, count: "8" },
  { label: "Citas", active: false, count: null },
];

export function DashboardMockup() {
  return (
    <div className="l-dash">
      <div className="l-dash-inner-clip">
        <div className="l-dash-bar">
          <span className="l-dash-dot" style={{ background: "#ff5f57" }} />
          <span className="l-dash-dot" style={{ background: "#febc2e" }} />
          <span className="l-dash-dot" style={{ background: "#28c840" }} />
          <span className="l-dash-url">app.lab2next.com/ordenes</span>
        </div>

        <div className="l-dash-body">
          <div className="l-dash-side">
            <div className="l-dash-side-label">Operación</div>
            {SIDE_ITEMS.map((item) => (
              <div key={item.label} className={`l-dash-nav-item ${item.active ? "active" : ""}`}>
                <span>{item.label}</span>
                {item.count && <span className="l-dash-nav-count">{item.count}</span>}
              </div>
            ))}
            <div className="l-dash-side-label" style={{ marginTop: 12 }}>Administración</div>
            <div className="l-dash-nav-item">Sucursales</div>
            <div className="l-dash-nav-item">Reportes</div>
          </div>

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
                <div className="l-dash-kpi-label">Ingresos</div>
                <div className="l-dash-kpi-value">$48,290</div>
                <div className="l-dash-kpi-delta" style={{ color: "var(--green-600)" }}>+24%</div>
              </div>
            </div>

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
      </div>

      <div className="l-dash-float l-dash-float-1">
        <div className="l-dash-float-icon"><MessageCircle size={16} /></div>
        <div>
          <div className="l-dash-float-label">Resultado enviado</div>
          <div className="l-dash-float-value">WhatsApp · #L-1284</div>
        </div>
      </div>
      <div className="l-dash-float l-dash-float-2">
        <div className="l-dash-float-icon"><FileText size={16} /></div>
        <div>
          <div className="l-dash-float-label">PDF generado</div>
          <div className="l-dash-float-value">García Ruiz, M.</div>
        </div>
      </div>

      {/* Técnico anclado al mock (desktop) */}
      <img
        src="/images/lab-hero-tech.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-2 z-20 hidden w-[12rem] -scale-x-100 object-contain drop-shadow-2xl lg:block"
      />
    </div>
  );
}
