import Link from "next/link";
import type { FooterColumn } from "../domain/types";

interface FooterProps {
  columns: FooterColumn[];
  miniBadges: readonly string[];
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
}

const HIDDEN_IN_PROD = ["/aviso-de-privacidad", "/terminos"];
const isProd = process.env.NODE_ENV === "production";

export function Footer({ columns, miniBadges }: FooterProps) {
  const visibleColumns = columns.map((col) => ({
    ...col,
    items: isProd ? col.items.filter((item) => !HIDDEN_IN_PROD.includes(item.href)) : col.items,
  }));

  return (
    <footer className="l-footer-v2">
      <div className="l-container">
        <div className="l-footer-grid-v2">
          <div className="l-footer-brand">
            <Link href="/" className="l-logo">
              <span className="l-logo-mark">
                <span className="l-logo-mark-text">L2</span>
              </span>
              <span>Lab2Next</span>
            </Link>
            <p className="l-footer-tagline">
              El sistema de información clínica para laboratorios independientes en México.
            </p>
            <div className="l-footer-mini-badges">
              {miniBadges.map((b) => (
                <span key={b} className="l-footer-mini-badge">{b}</span>
              ))}
            </div>
          </div>

          {visibleColumns.map((col) => (
            <div key={col.h}>
              <div className="l-footer-col-h">{col.h}</div>
              <ul className="l-footer-col-list">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="l-footer-bottom">
          <span>
            © {new Date().getFullYear()} Lab2Next — Hecho en México para laboratorios de México y el mundo.
          </span>
          {!isProd && (
            <div className="l-footer-bottom-links">
              <Link href="/aviso-de-privacidad">Privacidad</Link>
              <Link href="/terminos">Términos</Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
