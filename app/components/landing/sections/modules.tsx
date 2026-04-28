"use client";

import { Reveal } from "../ui/reveal";
import { SectionHeader } from "../ui/section-header";
import type { ModuleCard } from "../domain/types";

interface ModulesProps {
  cards: ModuleCard[];
}

export function Modules({ cards }: ModulesProps) {
  return (
    <section className="l-section l-modules" id="modulos">
      <div className="l-container">
        <SectionHeader
          eyebrow="Módulos del sistema"
          title="Todo lo que necesita tu laboratorio. En una sola plataforma."
          lede="Sin integraciones eternas, sin licencias por módulo, sin servidor en el cuarto de atrás."
        />
        <div className="l-modules-grid">
          {cards.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.title} delay={i % 3} threshold={0.08}>
                <div className="l-module-card">
                  <div className="l-module-icon"><Icon size={22} /></div>
                  <h3 className="l-module-h3">{m.title}</h3>
                  <p className="l-module-p">{m.body}</p>
                  <div className="l-module-tags">
                    {m.tags.map((tag) => (
                      <span key={tag} className="l-module-tag">{tag}</span>
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
