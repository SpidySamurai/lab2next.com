"use client";

import { Reveal } from "../ui/reveal";
import { SectionHeader } from "../ui/section-header";
import type { ProblemCard } from "../domain/types";

interface ProblemProps {
  cards: ProblemCard[];
}

export function Problem({ cards }: ProblemProps) {
  return (
    <section className="l-section l-problem" id="problema">
      <div className="l-container">
        <SectionHeader
          eyebrow="El problema"
          title="Tu laboratorio pierde dinero todos los días por procesos manuales."
          lede="Estos son los cuellos de botella que vemos en el 90% de los laboratorios independientes que evaluamos."
        />
        <div className="l-problem-grid">
          {cards.map((c, i) => {
            const boldParts   = c.stat.filter((p) => p.bold).map((p) => p.text).join("");
            const regularParts = c.stat.filter((p) => !p.bold).map((p) => p.text).join("").trim();
            return (
              <Reveal key={c.title} delay={i} threshold={0.1}>
                <div className="l-problem-card">
                  {/* Editorial stat — dominant typographic element */}
                  <div className="l-problem-stat-block">
                    <div className="l-problem-stat-num">{boldParts}</div>
                    {regularParts && (
                      <div className="l-problem-stat-ctx">{regularParts}</div>
                    )}
                  </div>

                  <div className="l-problem-divider" />

                  <h3 className="l-problem-h3">{c.title}</h3>
                  <p className="l-problem-p">{c.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
