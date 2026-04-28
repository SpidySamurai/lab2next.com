"use client";

import { Check } from "lucide-react";
import { Reveal } from "../ui/reveal";
import { SectionHeader } from "../ui/section-header";
import type { ValueCard } from "../domain/types";

interface ValuesProps {
  cards: ValueCard[];
}

export function Values({ cards }: ValuesProps) {
  return (
    <section className="l-section">
      <div className="l-container">
        <SectionHeader
          eyebrow="Por qué Lab2Next"
          title="Tres razones por las que los directores eligen Lab2Next."
          lede="No vendemos software. Vendemos certeza operativa, horas recuperadas y un laboratorio que funciona como uno del 2026."
        />
        <div className="l-values-grid">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.num} delay={i}>
                <div className="l-value-card">
                  <div className="l-value-num">{c.num}</div>
                  <div className="l-value-icon"><Icon size={22} /></div>
                  <h3 className="l-value-h3">{c.title}</h3>
                  <p className="l-value-p">{c.body}</p>
                  <div className="l-value-points">
                    {c.points.map((p) => (
                      <div key={p} className="l-value-point">
                        <Check size={14} />
                        <span>{p}</span>
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
