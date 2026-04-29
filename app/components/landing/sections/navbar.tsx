"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { NavLink } from "../domain/types";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

interface NavbarProps {
  links: NavLink[];
}

export function Navbar({ links }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header className={`l-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="l-container l-nav-inner">
          <a href="#" className="l-logo" onClick={close}>
            <span className="l-logo-mark">
              <span className="l-logo-mark-text">L2</span>
            </span>
            <span>Lab2Next</span>
          </a>

          <nav className="l-nav-links">
            {links.map((l) => (
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

          {/* Hamburger — visible only on mobile */}
          <button
            className="l-hamburger"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`l-hamburger-inner ${mobileOpen ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`l-mobile-backdrop ${mobileOpen ? "visible" : ""}`}
        aria-hidden="true"
        onClick={close}
      />

      {/* Mobile drawer */}
      <div className={`l-mobile-menu ${mobileOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="l-mobile-menu-head">
          <a href="#" className="l-logo" onClick={close}>
            <span className="l-logo-mark">
              <span className="l-logo-mark-text">L2</span>
            </span>
            <span>Lab2Next</span>
          </a>
          <button className="l-mobile-close" aria-label="Cerrar menú" onClick={close}>
            <X size={20} />
          </button>
        </div>

        <nav className="l-mobile-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="l-mobile-link" onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="l-mobile-cta">
          <a
            href={`${APP_URL}/register`}
            className="l-btn l-btn-primary l-btn-lg"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={close}
          >
            Crear cuenta gratis
          </a>
          <a
            href={`${APP_URL}/login`}
            className="l-btn l-btn-ghost"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={close}
          >
            Iniciar sesión
          </a>
        </div>
      </div>
    </>
  );
}
