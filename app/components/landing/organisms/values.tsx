import { Check } from "lucide-react";
import { SectionHeader } from "../molecules/section-header";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { Reveal } from "../atoms/reveal";
import type { ValueCard as ValueCardData } from "../domain/types";

interface ValuesProps {
  cards: ValueCardData[];
}

// Ilustración 3D branded por fila.
const VISUAL_IMAGES = [
  "/images/lab-login.png",
  "/images/lab-whatsapp.png",
  "/images/lab-team-laptop.png",
];

export function Values({ cards }: ValuesProps) {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Por qué Lab2Next"
          title="Tres razones por las que los directores eligen Lab2Next."
          lede="No vendemos software. Vendemos certeza operativa, horas recuperadas y un laboratorio que funciona como uno del 2026."
        />

        <div className="mt-16 flex flex-col gap-20 lg:mt-20 lg:gap-28">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const flipped = i % 2 === 1;

            return (
              <Reveal key={c.num}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Ilustración integrada, sin caja */}
                  <div className={flipped ? "lg:order-2" : ""}>
                    <img
                      src={VISUAL_IMAGES[i] ?? VISUAL_IMAGES[0]}
                      alt={c.title}
                      className={`mx-auto w-full object-contain drop-shadow-2xl ${
                        i === 1 ? "max-w-[17rem]" : i === 2 ? "max-w-xl" : "max-w-md"
                      }`}
                    />
                  </div>

                  {/* Texto */}
                  <div className={flipped ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                        <Icon size={22} />
                      </span>
                      <h3 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                        {c.title}
                      </h3>
                    </div>
                    <p className="mt-5 text-[15px] leading-[1.8] text-ink-600">
                      {c.body}
                    </p>

                    <ul className="mt-6 flex flex-col gap-3">
                      {c.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-3 text-[15px] text-ink-600"
                        >
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0 text-teal-600"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
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
