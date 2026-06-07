"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "../molecules/section-header";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { MODULE_CARDS } from "../domain/modules.content";

gsap.registerPlugin(ScrollTrigger);

export function Modules() {
  const cards = MODULE_CARDS;
  const gridRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Pin: la sección se "congela" centrada y, mientras sigues scrolleando esa
    // distancia, el progreso (0..1) avanza el módulo activo. Al terminar, se suelta.
    // Solo en desktop con movimiento permitido; en móvil queda lista normal.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const st = ScrollTrigger.create({
        trigger: grid,
        start: "center center",
        end: () => "+=" + cards.length * window.innerHeight * 0.55,
        pin: true,
        pinSpacing: true,
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(
            cards.length - 1,
            Math.floor(self.progress * cards.length)
          );
          setActive((prev) => (prev === idx ? prev : idx));
        },
      });
      return () => st.kill();
    });

    return () => mm.revert();
  }, [cards.length]);

  return (
    <Section id="modulos" className="l-modules">
      <Container>
        <SectionHeader
          eyebrow="Módulos del sistema"
          title="Todo lo que necesita tu laboratorio. En una sola plataforma."
          lede="Sin integraciones eternas, sin licencias por módulo, sin servidor en el cuarto de atrás."
        />

        {/* Showcase pinned: ilustración + lista se enfatizan mientras scrolleas */}
        <div
          ref={gridRef}
          className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
        >
          <div>
            <div className="relative mx-auto h-[20rem] w-full max-w-sm lg:h-[24rem] lg:max-w-md">
              {cards.map((m, i) => (
                <img
                  key={m.image}
                  src={m.image}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 m-auto h-full w-full object-contain drop-shadow-2xl transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <p className="mt-2 text-center text-sm font-semibold uppercase tracking-widest text-teal-600">
              {String(active + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
            </p>
          </div>

          <div className="flex flex-col">
            {cards.map((m, i) => {
              const Icon = m.icon;
              const on = i === active;
              return (
                <div
                  key={m.title}
                  className={`l-mod-item border-t border-navy-900/10 py-4 transition-opacity duration-300 first:border-t-0 first:pt-0 lg:py-3 ${
                    on ? "lg:opacity-100" : "lg:opacity-40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        on ? "bg-teal-500/15 text-teal-600" : "bg-teal-500/10 text-teal-600 lg:bg-ink-100 lg:text-ink-400"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <h3
                      className={`font-extrabold tracking-tight text-navy-900 transition-all duration-300 text-lg ${
                        on ? "lg:text-2xl" : "lg:text-lg"
                      }`}
                    >
                      {m.title}
                    </h3>
                    {m.soon && (
                      <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-500">
                        Pronto
                      </span>
                    )}
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 grid-rows-[1fr] opacity-100 mt-2 ${
                      on ? "lg:grid-rows-[1fr] lg:opacity-100 lg:mt-2" : "lg:grid-rows-[0fr] lg:opacity-0 lg:mt-0"
                    }`}
                  >
                    <p className="min-h-0 max-w-xl text-base leading-relaxed text-ink-600">
                      {m.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
