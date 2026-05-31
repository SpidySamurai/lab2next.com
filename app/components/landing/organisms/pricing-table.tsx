"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Check, Minus, TrendingUp } from "lucide-react";
import { Reveal } from "../atoms/reveal";
import { Button } from "../atoms/button";
import type { PricingPlan } from "../domain/types";

interface PricingTableProps {
  plans: PricingPlan[];
}

const CURRENCY = "MXN";
const PERIOD_LABEL = "MXN/mes";

export function PricingTable({ plans }: PricingTableProps) {
  const [annual, setAnnual] = useState(false);

  const monthlyRef = useRef<HTMLButtonElement>(null);
  const yearlyRef = useRef<HTMLButtonElement>(null);
  const [thumbStyle, setThumbStyle] = useState<{ left: number; width: number }>({ left: 4, width: 90 });

  useLayoutEffect(() => {
    const el = annual ? yearlyRef.current : monthlyRef.current;
    if (el) {
      const p = el.parentElement!.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setThumbStyle({ left: r.left - p.left, width: r.width });
    }
  }, [annual]);

  // FREE (entry) and ENTERPRISE (custom) render as slim strips, not full cards —
  // the 3 decision plans (BASIC/FOUNDER/PREMIUM) carry the grid.
  const free = plans.find((p) => p.name === "FREE");
  const enterprise = plans.find((p) => p.name === "ENTERPRISE");
  const corePlans = plans.filter((p) => p.name !== "FREE" && p.name !== "ENTERPRISE");

  return (
    <section className="l-section l-pricing-v2" id="precios">
      <div className="l-container">
        <Reveal>
          <div
            className="l-section-head"
            style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
          >
            <div className="l-eyebrow" style={{ justifyContent: "center" }}>Precios</div>
            <h2 className="l-section-title" style={{ margin: "0 auto" }}>
              Un plan para cada tamaño de laboratorio.
            </h2>
            <p className="l-section-lede" style={{ margin: "16px auto 0" }}>
              Sin costos de implementación ocultos. Sin licencias por usuario. Cancelas cuando quieras.
            </p>

            {/* Period toggle */}
            <div className="l-pricing-toggle">
              <span className="l-pricing-toggle-thumb" style={{ left: thumbStyle.left, width: thumbStyle.width }} />
              <button
                ref={monthlyRef}
                className={`l-pricing-toggle-btn ${!annual ? "active" : ""}`}
                onClick={() => setAnnual(false)}
              >
                Mensual
              </button>
              <button
                ref={yearlyRef}
                className={`l-pricing-toggle-btn ${annual ? "active" : ""}`}
                onClick={() => setAnnual(true)}
              >
                Anual
                <span className="l-pricing-toggle-saving">−20%</span>
              </button>
            </div>

            <p className="l-pricing-disclaimer">
              Precios en consolidación — sujetos a cambio con aviso previo de al menos 30 días.
              Los clientes activos siempre conservan su tarifa contratada.
            </p>
          </div>
        </Reveal>

        {free && (
          <Reveal>
            <div className="l-pricing-strip l-pricing-strip-free">
              <div className="l-pricing-strip-text">
                <span className="l-pricing-strip-title">Empieza gratis</span>
                <span className="l-pricing-strip-note">
                  Plan <strong>FREE</strong> — {free.note}
                </span>
              </div>
              <Button
                as="a"
                href={free.ctaHref}
                intent="ghost"
                className="l-pricing-strip-cta"
              >
                {free.cta}
              </Button>
            </div>
          </Reveal>
        )}

        <div className="l-pricing-grid-v3">
          {corePlans.map((p, i) => {
            const priceEntry = p.prices?.[CURRENCY] ?? p.prices?.MXN;
            const amount = annual ? priceEntry?.yearly : priceEntry?.monthly;

            return (
              <Reveal key={p.name} delay={i} threshold={0.05}>
                <div className={`l-plan-card ${p.featured ? "featured" : ""}`}>
                  {p.badge && <div className="l-plan-badge-v2">{p.badge}</div>}

                  {p.spotsLeft != null && (
                    <div className="l-plan-spots">
                      <div className="l-plan-spots-row">
                        <span className="l-plan-spots-label">
                          <span className="l-plan-spots-dot" />
                          {p.spotsLeft} cupos restantes de 20
                        </span>
                      </div>
                      <div className="l-plan-spots-bar">
                        <div
                          className="l-plan-spots-fill"
                          style={{ width: `${(p.spotsLeft / 20) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="l-plan-name-v2">{p.name}</div>
                  <div className="l-plan-tagline-v2">{p.tagline}</div>

                  <div className="l-plan-price-v2">
                    {p.priceCustom ? (
                      <span className="l-plan-custom-v2">A medida</span>
                    ) : (
                      <>
                        <span className="l-plan-currency-v2">$</span>
                        <span className="l-plan-amount-v2">
                          {amount != null ? amount.toLocaleString("es-MX") : "—"}
                        </span>
                        <span className="l-plan-period-v2">{PERIOD_LABEL}</span>
                      </>
                    )}
                  </div>
                  <div className="l-plan-note-v2">{p.note}</div>

                  <Button
                    as="a"
                    href={p.ctaHref}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    intent={p.ctaIntent}
                    className="l-plan-cta-v2"
                  >
                    {p.cta}
                  </Button>

                  <div className="l-plan-features-label-v2">Incluye</div>
                  <div className="l-plan-features-v2">
                    {p.features.map((f) => (
                      <div key={f.text} className={`l-plan-feature-v2 ${!f.included ? "muted" : ""}`}>
                        {f.included ? <Check size={14} /> : <Minus size={14} />}
                        <span>{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {enterprise && (
          <Reveal>
            <div className="l-pricing-strip l-pricing-strip-enterprise">
              <div className="l-pricing-strip-text">
                <span className="l-pricing-strip-title">
                  {enterprise.name} — a medida
                </span>
                <span className="l-pricing-strip-note">{enterprise.tagline}</span>
              </div>
              <Button
                as="a"
                href={enterprise.ctaHref}
                target={enterprise.external ? "_blank" : undefined}
                rel={enterprise.external ? "noopener noreferrer" : undefined}
                intent={enterprise.ctaIntent}
                className="l-pricing-strip-cta"
              >
                {enterprise.cta}
              </Button>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="l-pricing-growth-note">
            <div className="l-pricing-growth-note-icon">
              <TrendingUp size={18} />
            </div>
            <p>
              <strong>Estamos trabajando en algo diferente.</strong> No te limitamos — te ayudamos a llevar tu operación.
              Si creces en volumen de exámenes, te acompañamos con apoyo directo y
              <strong> precio preferencial</strong>, sin necesidad de cambiar de plan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
