import { SectionHeader } from "../molecules/section-header";
import { FeatureCard } from "../molecules/feature-card";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import type { ValueCard } from "../domain/types";

interface ValuesProps {
  cards: ValueCard[];
}

export function Values({ cards }: ValuesProps) {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Por qué Lab2Next"
          title="Tres razones por las que los directores eligen Lab2Next."
          lede="No vendemos software. Vendemos certeza operativa, horas recuperadas y un laboratorio que funciona como uno del 2026."
        />
        <div className="l-values-grid">
          {cards.map((c, i) => (
            <FeatureCard
              key={c.num}
              icon={c.icon}
              title={c.title}
              body={c.body}
              points={c.points}
              num={c.num}
              delay={i}
              variant="value"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
