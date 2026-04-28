const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const COLS = [
  {
    h: "Producto",
    items: [
      { label: "Módulos", href: "#modulos" },
      { label: "Precios", href: "#precios" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    h: "Empresa",
    items: [
      { label: "Contacto", href: "#demo" },
    ],
  },
  {
    h: "Legal",
    items: [
      { label: "Aviso de privacidad", href: `${APP_URL}/privacy` },
      { label: "Términos de servicio", href: `${APP_URL}/terms` },
    ],
  },
];

const MINI_BADGES = ["Cloud · AWS", "Cifrado AES-256", "TLS 1.3", "Backups diarios"];

export function Footer() {
  return (
    <footer className="l-footer-v2">
      <div className="l-container">
        <div className="l-footer-grid-v2">
          {/* Brand */}
          <div className="l-footer-brand">
            <a href="#" className="l-logo">
              <span className="l-logo-mark">
                <span className="l-logo-mark-text">L2</span>
              </span>
              <span>Lab2Next</span>
            </a>
            <p className="l-footer-tagline">
              El sistema de información clínica para laboratorios independientes
              en México.
            </p>
            <div className="l-footer-mini-badges">
              {MINI_BADGES.map((b) => (
                <span key={b} className="l-footer-mini-badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Columns */}
          {COLS.map((col) => (
            <div key={col.h}>
              <div className="l-footer-col-h">{col.h}</div>
              <ul className="l-footer-col-list">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="l-footer-bottom">
          <span>
            © {new Date().getFullYear()} Lab2Next — Hecho en México para
            laboratorios mexicanos.
          </span>
          <div className="l-footer-bottom-links">
            <a href={`${APP_URL}/privacy`}>Privacidad</a>
            <a href={`${APP_URL}/terms`}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
