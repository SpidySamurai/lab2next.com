"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "../atoms/reveal";
import { SectionHeader } from "../molecules/section-header";
import type { FaqItem } from "../domain/types";

interface FaqProps {
  items: FaqItem[];
}

export function FAQ({ items }: FaqProps) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section className="l-section" id="faq">
      <div className="l-container">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Lo que los directores preguntan antes de registrarse."
          centered
        />
        <Reveal threshold={0.08}>
          <div className="l-faq-grid">
            {items.map((item, i) => (
              <div key={i} className={`l-faq-item ${open.has(i) ? "open" : ""}`}>
                <button
                  className="l-faq-q"
                  onClick={() => toggle(i)}
                  aria-expanded={open.has(i)}
                >
                  <span>{item.q}</span>
                  <span className="l-faq-icon"><Plus size={16} /></span>
                </button>
                <div className="l-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
