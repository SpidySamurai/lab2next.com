import { SectionHeader } from "../molecules/section-header";
import { FeatureCard } from "../molecules/feature-card";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import type { ModuleCard } from "../domain/types";

interface ModulesProps {
  cards: ModuleCard[];
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
        <div className="l-modules-grid">
          {cards.map((m, i) => (
            <FeatureCard
              key={m.title}
              icon={m.icon}
              title={m.title}
              body={m.body}
              tags={m.tags}
              delay={i % 3}
              variant="module"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
