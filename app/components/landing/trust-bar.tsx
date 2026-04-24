"use client";

import { useEffect, useRef, useState } from "react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`l-reveal ${inView ? "in" : ""}`} data-delay={delay || undefined}>
      {children}
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="l-trust">
      <div className="l-container">
        <Reveal>
          <div className="l-trust-label">Laboratorios que ya modernizaron su operación</div>
        </Reveal>
        <Reveal delay={1}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="l-trust-logo" style={{ fontSize: 18, opacity: 0.7 }}>Biogen Foundery</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
