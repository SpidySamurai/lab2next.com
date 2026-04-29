"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import type { NavLink } from "../domain/types";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

interface NavbarProps {
  links: NavLink[];
}

function NavItem({ link, onClick }: { link: NavLink; onClick?: () => void }) {
  const pathname = usePathname();
  const isPage   = !link.href.includes("#");
  const isActive = isPage && pathname === link.href;

  if (isPage) {
    return (
      <Link
        href={link.href}
        className={`l-nav-link${isActive ? " active" : ""}`}
        onClick={onClick}
      >
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className="l-nav-link" onClick={onClick}>
      {link.label}
    </a>
  );
}

export function Navbar({ links }: NavbarProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Focus trap (WCAG 2.1.2)
  useEffect(() => {
    if (!mobileOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };

    first?.focus();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header className={`l-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="l-container l-nav-inner">
          <Link href="/" className="l-logo" onClick={close}>
            <span className="l-logo-mark">
              <span className="l-logo-mark-text">L2</span>
            </span>
            <span>Lab2Next</span>
          </Link>

          <nav className="l-nav-links" aria-label="Navegación principal">
            {links.map((l) => (
              <NavItem key={l.href} link={l} />
            ))}
          </nav>

          <div className="l-nav-cta">
            <a
              href={`${APP_URL}/login`}
              className="l-btn l-btn-ghost"
              style={{ height: 44, padding: "0 14px", fontSize: 14 }}
            >
              Iniciar sesión
            </a>
            <a
              href={`${APP_URL}/register`}
              className="l-btn l-btn-primary"
              style={{ height: 44, padding: "0 16px", fontSize: 14 }}
            >
              Crear cuenta gratis
            </a>
          </div>

          <button
            className="l-hamburger"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`l-hamburger-inner ${mobileOpen ? "open" : ""}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`l-mobile-backdrop ${mobileOpen ? "visible" : ""}`}
        aria-hidden="true"
        onClick={close}
      />

      <div
        ref={drawerRef}
        className={`l-mobile-menu ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="l-mobile-menu-head">
          <Link href="/" className="l-logo" onClick={close}>
            <span className="l-logo-mark">
              <span className="l-logo-mark-text">L2</span>
            </span>
            <span>Lab2Next</span>
          </Link>
          <button className="l-mobile-close" aria-label="Cerrar menú" onClick={close}>
            <X size={20} />
          </button>
        </div>

        <nav className="l-mobile-links" aria-label="Navegación móvil">
          {links.map((l) => (
            <NavItem key={l.href} link={l} onClick={close} />
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
