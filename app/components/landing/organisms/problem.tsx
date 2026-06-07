import { SectionHeader } from "../molecules/section-header";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { Reveal } from "../atoms/reveal";
import type { ProblemCard } from "../domain/types";

interface ProblemProps {
  cards: ProblemCard[];
}

export function Problem({ cards }: ProblemProps) {
  return (
    <Section id="problema" className="l-problem">
      <Container>
        {/* Intro: encabezado izq + ilustración del dolor der */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <SectionHeader
            eyebrow="El problema"
            title="Tu laboratorio pierde dinero todos los días por procesos manuales."
            lede="Estos son los cuellos de botella que vemos en el 90% de los laboratorios independientes que evaluamos."
          />
          <img
            src="/images/lab-excel-pain.png"
            alt="Laboratorio operando en Excel y métodos manuales"
            className="mx-auto w-full max-w-[16rem] object-contain drop-shadow-2xl lg:max-w-sm"
          />
        </div>

        {/* Stat-wall editorial full-width */}
        <div className="mt-12 lg:mt-16">
          {cards.map((c) => {
            const big = c.stat.find((s) => s.bold)?.text ?? "";
            const caption = c.stat
              .filter((s) => !s.bold)
              .map((s) => s.text)
              .join("")
              .trim();

            return (
              <Reveal key={c.title}>
                <div className="grid gap-3 border-t border-navy-900/10 py-8 lg:grid-cols-[230px_1fr] lg:gap-14 lg:py-10">
                  <div>
                    <div className="text-3xl font-black leading-none tracking-tight text-navy-900 sm:text-4xl">
                      {big}
                    </div>
                    {caption && (
                      <div className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-500">
                        {caption}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-navy-900">
                      {c.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[15px] leading-[1.8] text-ink-600">
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
