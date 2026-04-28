"use client";

import { useEffect, useState } from "react";

const WA_DEMO = "https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20Lab2Next";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const NAV_LINKS = [
  { label: "Producto", href: "#modulos" },
  { label: "Precios", href: "#precios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`l-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="l-container l-nav-inner">
        <a href="#" className="l-logo">
          <span className="l-logo-mark">
            <span className="l-logo-mark-text">L2</span>
          </span>
          <span>Lab2Next</span>
        </a>

        <nav className="l-nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="l-nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="l-nav-cta">
          <a
            href={`${APP_URL}/login`}
            className="l-btn l-btn-ghost"
            style={{ height: 40, padding: "0 14px", fontSize: 14 }}
          >
            Iniciar sesión
          </a>
          <a
            href={`${APP_URL}/register`}
            className="l-btn l-btn-primary"
            style={{ height: 40, padding: "0 16px", fontSize: 14 }}
          >
            Crear cuenta gratis
          </a>
        </div>
      </div>
    </header>
  );
}
