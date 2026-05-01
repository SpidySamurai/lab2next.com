import { MessageSquare, Lightbulb, FlaskConical, Users, BadgePercent, ArrowRight } from "lucide-react";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { SectionHeader } from "../molecules/section-header";
import { ModuleCard } from "../molecules/module-card";
import { Button } from "../atoms/button";
import { Reveal } from "../atoms/reveal";

const CARDS = [
  {
    icon: MessageSquare,
    title: "Feedback directo",
    body: "Tu experiencia diaria en el laboratorio es el mejor mapa de producto que existe.",
  },
  {
    icon: Lightbulb,
    title: "Propuestas de mejora",
    body: "¿Falta algo? Lo diseñamos juntos. Las mejores funciones vienen de los que las usan.",
  },
  {
    icon: FlaskConical,
    title: "Beta tester",
    body: "Accede a nuevas funciones antes que nadie y ayúdanos a afinarlas.",
  },
  {
    icon: Users,
    title: "Conoce al equipo",
    body: "Una llamada sin guión ni ventas. Solo conversamos sobre cómo trabajas.",
  },
  {
    icon: BadgePercent,
    title: "Precio preferencial",
    body: "Los laboratorios que colaboran activamente acceden a planes especiales.",
  },
] as const;

export function ColaboraPreview() {
  return (
    <Section bg="paper" id="colabora">
      <Container>
        <SectionHeader
          eyebrow="Comunidad"
          title="Construye Lab2Next con nosotros"
          lede="Buscamos laboratorios que quieran mejorar la plataforma desde adentro."
        />
        <div className="l-colabora-grid">
          {CARDS.map((c, i) => (
            <ModuleCard
              key={c.title}
              icon={c.icon}
              title={c.title}
              body={c.body}
              delay={i % 3}
            />
          ))}
        </div>
        <div className="l-colabora-cta">
          <Reveal>
            <Button as="a" href="/colabora" intent="teal" size="lg">
              Quiero colaborar
              <ArrowRight size={18} />
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
