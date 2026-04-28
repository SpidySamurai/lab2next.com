"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import type { HowItWorksStep } from "../domain/types";

interface HowItWorksProps {
  steps: HowItWorksStep[];
}

export function HowItWorks({ steps }: HowItWorksProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const total = steps.length;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveIdx(total - 1);
      grid.style.setProperty("--how-progress", "100%");
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const isMobile = window.innerWidth <= 880;
      const viewportH = window.innerHeight;
      const viewportW = window.innerWidth;
      const triggerLine = isMobile ? viewportH * 0.55 : viewportH * 0.5;

      const positions = stepRefs.current.map((el) => {
        if (!el) return null;
        const num = el.querySelector(".l-how-step-num");
        const r = (num || el).getBoundingClientRect();
        return isMobile ? r.top + r.height / 2 : r.left + r.width / 2;
      });

      let active = -1;
      if (isMobile) {
        for (let i = 0; i < positions.length; i++) {
          if (positions[i] !== null && (positions[i] as number) <= triggerLine) active = i;
        }
      } else {
        const gridRect = grid.getBoundingClientRect();
        if (gridRect.top < viewportH * 0.7 && gridRect.bottom > viewportH * 0.3) {
          for (let i = 0; i < positions.length; i++) {
            if (positions[i] !== null && (positions[i] as number) <= viewportW * 0.55) active = i;
          }
        } else if (gridRect.bottom <= viewportH * 0.3) {
          active = total - 1;
        }
      }
      setActiveIdx(active);

      let pct = 0;
      if (active >= 0) {
        if (active >= total - 1) {
          pct = 100;
        } else {
          const cur = positions[active] as number;
          const nxt = positions[active + 1] as number;
          const trigger = isMobile ? triggerLine : viewportW * 0.55;
          const segFrac = nxt != null && cur != null ? Math.max(0, Math.min(1, (trigger - cur) / (nxt - cur))) : 0;
          pct = ((active + segFrac) / (total - 1)) * 100;
        }
      }
      grid.style.setProperty("--how-progress", `${pct}%`);
    };

    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [total]);

  return (
    <section className="l-section" id="como-funciona">
      <div className="l-container">
        <div className="l-section-head">
          <div className="l-eyebrow">Cómo funciona</div>
          <h2 className="l-section-title">
            De crear tu cuenta a recibir tu primera orden — en menos de una hora.
          </h2>
          <p className="l-section-lede">
            Lab2Next es self-serve. Te registras, configuras y operas.
            Sin técnico, sin servidor, sin esperar a nadie.
          </p>
        </div>
        <div className="l-how-grid" ref={gridRef}>
          <div className="l-how-line" aria-hidden="true" />
          {steps.map((s, i) => {
            const state = i < activeIdx ? "done" : i === activeIdx ? "active" : "pending";
            return (
              <div
                key={s.num}
                ref={(el) => { stepRefs.current[i] = el; }}
                className={`l-how-step l-how-step-state-${state}`}
              >
                <div className="l-how-step-num">{s.num}</div>
                <div className="l-how-step-time">{s.time}</div>
                <h3 className="l-how-step-h3">{s.title}</h3>
                <p className="l-how-step-p">{s.body}</p>
                <div className="l-how-step-tasks">
                  {s.tasks.map((task) => (
                    <div key={task} className="l-how-step-task">
                      <Check size={13} />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
