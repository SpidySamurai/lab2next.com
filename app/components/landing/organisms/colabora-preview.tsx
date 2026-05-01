import { MessageSquare, Lightbulb, FlaskConical, Users, BadgePercent, ArrowRight } from "lucide-react";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { SectionHeader } from "../molecules/section-header";
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
    <Section bg="dark" id="colabora">
      <Container>
        <div className="l-colabora-editorial">
          {/* Left: header + CTA */}
          <div className="l-colabora-dark-header">
            <SectionHeader
              eyebrow="Comunidad"
              title="Construye Lab2Next con nosotros"
              lede="Buscamos laboratorios que quieran mejorar la plataforma desde adentro."
            />
            <div className="l-colabora-editorial-cta">
              <Reveal>
                <Button as="a" href="/colabora" intent="teal" size="lg">
                  Quiero colaborar
                  <ArrowRight size={18} />
                </Button>
              </Reveal>
            </div>
          </div>

          {/* Right: compact vertical list */}
          <ul className="l-colabora-list">
            {CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i} threshold={0.05}>
                <li className="l-colabora-list-item">
                  <div className="l-colabora-list-icon">
                    <c.icon size={17} />
                  </div>
                  <div className="l-colabora-list-text">
                    <span className="l-colabora-list-title">{c.title}</span>
                    <span className="l-colabora-list-body">{c.body}</span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
