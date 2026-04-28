"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "../ui/reveal";
import { SectionHeader } from "../ui/section-header";
import type { FaqItem } from "../domain/types";

interface FaqProps {
  items: FaqItem[];
}

export function FAQ({ items }: FaqProps) {
  const [open, setOpen] = useState<number>(0);

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
              <div key={i} className={`l-faq-item ${open === i ? "open" : ""}`}>
                <button
                  className="l-faq-q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
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
