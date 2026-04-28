"use client";

import { Check } from "lucide-react";
import { Reveal } from "../../ui/reveal";
import { DashboardMockup } from "./dashboard-mockup";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

interface HeroProps {
  trustItems: readonly string[];
}

export function Hero({ trustItems }: HeroProps) {
  return (
    <section className="l-hero" id="top">
      <div className="l-container l-hero-grid">
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
              {trustItems.map((item) => (
                <span key={item} className="l-hero-check">
                  <Check size={14} />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}
