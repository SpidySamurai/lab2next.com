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

    // Thresholds: fraction of full scroll travel at which each step activates.
    // Travel = viewportH (section entering) + gridRect.height (section crossing).
    const THRESHOLDS = [0.08, 0.22, 0.38];
    // Progress-bar anchor points that match each step threshold
    const BAR_PTS    = [0, 50, 100];

    let ticking = false;
    const update = () => {
      ticking = false;
      const viewportH  = window.innerHeight;
      const { top, height } = grid.getBoundingClientRect();
      const travel   = viewportH + height;
      const progress = Math.max(0, Math.min(1, (viewportH - top) / travel));

      let active = -1;
      THRESHOLDS.forEach((t, i) => { if (progress >= t) active = i; });
      setActiveIdx(active);

      // Smooth bar interpolation between anchor points
      let pct = 0;
      if (active >= 0) {
        if (active >= total - 1) {
          pct = 100;
        } else {
          const t0 = THRESHOLDS[active],     t1 = THRESHOLDS[active + 1];
          const b0 = BAR_PTS[active],         b1 = BAR_PTS[active + 1];
          const seg = Math.max(0, Math.min(1, (progress - t0) / (t1 - t0)));
          pct = b0 + seg * (b1 - b0);
        }
      }
      grid.style.setProperty("--how-progress", `${pct.toFixed(1)}%`);
    };

    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
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
