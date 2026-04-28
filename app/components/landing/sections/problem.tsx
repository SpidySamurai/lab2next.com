"use client";

import { AlertCircle } from "lucide-react";
import { Reveal } from "../ui/reveal";
import { SectionHeader } from "../ui/section-header";
import type { ProblemCard } from "../domain/types";

interface ProblemProps {
  cards: ProblemCard[];
}

export function Problem({ cards }: ProblemProps) {
  return (
    <section className="l-section l-problem">
      <div className="l-container">
        <SectionHeader
          eyebrow="El problema"
          title="Tu laboratorio pierde dinero todos los días por procesos manuales."
          lede="Estos son los cuellos de botella que vemos en el 90% de los laboratorios independientes que evaluamos."
        />
        <div className="l-problem-grid">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i} threshold={0.1}>
              <div className="l-problem-card">
                <div className="l-problem-icon"><AlertCircle size={20} /></div>
                <h3 className="l-problem-h3">{c.title}</h3>
                <p className="l-problem-p">{c.body}</p>
                <div className="l-problem-stat">
                  {c.stat.map((part, j) =>
                    part.bold ? <strong key={j}>{part.text}</strong> : <span key={j}>{part.text}</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
