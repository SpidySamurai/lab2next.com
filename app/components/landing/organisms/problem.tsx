import { Check, X } from "lucide-react";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { Reveal } from "../atoms/reveal";
import { PROBLEM_LEGACY, PROBLEM_LAB2NEXT } from "../domain/problem.content";

export function Problem() {
  return (
    <Section id="problema" className="l-problem">
      <Container>
        <Reveal>
          <div className="l-section-head">
            <div className="l-eyebrow">El problema</div>
            <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.625rem]">
              Toda la potencia. Nada de la complejidad.
            </h2>
            <p className="l-section-lede">
              El software clínico siempre fue poderoso pero obsoleto, caro y difícil de usar. Lab2Next trae la misma tecnología de las grandes cadenas, lista para operar el mismo día.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-navy-900/10">
          {/* Los sistemas de siempre */}
          <Reveal>
            <div className="lg:pr-12">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                Los sistemas de siempre
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {PROBLEM_LEGACY.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-[15px] leading-snug text-ink-500"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-400">
                      <X size={13} strokeWidth={2.5} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Con Lab2Next */}
          <Reveal delay={1}>
            <div className="lg:pl-12">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                Con Lab2Next
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {PROBLEM_LAB2NEXT.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-[15px] font-medium leading-snug text-navy-900"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-600">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
