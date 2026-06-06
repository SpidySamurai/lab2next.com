import { SectionHeader } from "../molecules/section-header";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { Reveal } from "../atoms/reveal";
import type { ModuleCard as ModuleCardData } from "../domain/types";

interface ModulesProps {
  cards: ModuleCardData[];
}

export function Modules({ cards }: ModulesProps) {
  return (
    <Section id="modulos" className="l-modules">
      <Container>
        <SectionHeader
          eyebrow="Módulos del sistema"
          title="Todo lo que necesita tu laboratorio. En una sola plataforma."
          lede="Sin integraciones eternas, sin licencias por módulo, sin servidor en el cuarto de atrás."
        />

        {/* Showcase: visual fijo a un lado + lista limpia (sin 8 tarjetas) */}
        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="self-start lg:sticky lg:top-24">
            <img
              src="/images/lab-team.png"
              alt="Equipo de laboratorio con Lab2Next"
              className="mx-auto w-full max-w-md object-contain drop-shadow-2xl"
            />
            <p className="mt-4 text-center text-lg font-extrabold leading-tight text-navy-900">
              Una sola plataforma, todos tus módulos.
            </p>
          </div>

          <ul className="flex flex-col">
            {cards.map((m) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.title}>
                  <li className="flex gap-4 border-t border-navy-900/10 py-5 first:border-t-0 first:pt-0">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                      <Icon size={18} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold tracking-tight text-navy-900">
                          {m.title}
                        </h3>
                        {m.soon && (
                          <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-500">
                            Pronto
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">
                        {m.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
