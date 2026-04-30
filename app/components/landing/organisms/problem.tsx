import { SectionHeader } from "../molecules/section-header";
import { StatCard } from "../molecules/stat-card";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import type { ProblemCard } from "../domain/types";

interface ProblemProps {
  cards: ProblemCard[];
}

export function Problem({ cards }: ProblemProps) {
  return (
    <Section id="problema" className="l-problem">
      <Container>
        <SectionHeader
          eyebrow="El problema"
          title="Tu laboratorio pierde dinero todos los días por procesos manuales."
          lede="Estos son los cuellos de botella que vemos en el 90% de los laboratorios independientes que evaluamos."
        />
        <div className="l-problem-grid">
          {cards.map((c, i) => (
            <StatCard key={c.title} {...c} delay={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
