"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Check, Minus } from "lucide-react";
import { Reveal } from "../atoms/reveal";
import type { Currency, PricingPlan } from "../domain/types";

interface PricingTableProps {
  plans: PricingPlan[];
}

const CURRENCIES: Currency[] = ["MXN", "USD", "COP"];
const CURRENCY_LABEL: Record<Currency, string> = {
  MXN: "MXN/mes",
  USD: "USD/mes",
  COP: "COP/mes",
};

function formatAmount(amount: number, currency: Currency): string {
  if (currency === "COP") return amount.toLocaleString("es-CO");
  return amount.toString();
}

export function PricingTable({ plans }: PricingTableProps) {
  const [annual, setAnnual] = useState(false);
  const [currency, setCurrency] = useState<Currency>("MXN");

  const monthlyRef = useRef<HTMLButtonElement>(null);
  const yearlyRef = useRef<HTMLButtonElement>(null);
  const [thumbStyle, setThumbStyle] = useState<{ left: number; width: number }>({ left: 4, width: 90 });

  const currencyBtnRefs = useRef<Record<Currency, HTMLButtonElement | null>>({ MXN: null, USD: null, COP: null });
  const [currThumb, setCurrThumb] = useState<{ left: number; width: number }>({ left: 4, width: 60 });

  useLayoutEffect(() => {
    const el = annual ? yearlyRef.current : monthlyRef.current;
    if (el) {
      const p = el.parentElement!.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setThumbStyle({ left: r.left - p.left, width: r.width });
    }
  }, [annual]);

  useLayoutEffect(() => {
    const el = currencyBtnRefs.current[currency];
    if (el) {
      const p = el.parentElement!.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setCurrThumb({ left: r.left - p.left, width: r.width });
    }
  }, [currency]);

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

            {/* Currency toggle */}
            <div className="l-pricing-toggle l-currency-toggle">
              <span className="l-pricing-toggle-thumb l-currency-thumb" style={{ left: currThumb.left, width: currThumb.width }} />
              {CURRENCIES.map((c) => (
                <button
                  key={c}
                  ref={(el) => { currencyBtnRefs.current[c] = el; }}
                  className={`l-pricing-toggle-btn l-currency-btn ${currency === c ? "active" : ""}`}
                  onClick={() => setCurrency(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <p className="l-pricing-disclaimer">
              Precios en consolidación — sujetos a cambio con aviso previo de al menos 30 días.
              Los clientes activos siempre conservan su tarifa contratada.
            </p>
          </div>
        </Reveal>

        <div className="l-pricing-grid-v3">
          {plans.map((p, i) => {
            const priceEntry = p.prices?.[currency] ?? p.prices?.MXN;
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
                          {amount != null ? formatAmount(amount, currency) : "—"}
                        </span>
                        <span className="l-plan-period-v2">{CURRENCY_LABEL[currency]}</span>
                      </>
                    )}
                  </div>
                  <div className="l-plan-note-v2">{p.note}</div>

                  <a
                    href={p.ctaHref}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    className={`l-btn ${p.ctaStyle} l-plan-cta-v2`}
                  >
                    {p.cta}
                  </a>

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
      </div>
    </section>
  );
}
