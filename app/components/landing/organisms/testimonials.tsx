import { Reveal } from "../atoms/reveal";
import { SectionHeader } from "../molecules/section-header";
import { PersonCard } from "../molecules/person-card";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import type { TestimonialItem } from "../domain/testimonials.content";

interface TestimonialsProps {
  items: TestimonialItem[];
}

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <Section id="testimonios" className="l-testimonials">
      <Container>
        <SectionHeader
          eyebrow="Casos de éxito"
          title="Laboratorios que confían en nosotros"
          lede="Resultados reales de clientes que ya modernizaron su operación clínica."
          centered
        />
        <div className="l-testi-grid">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i + 1}>
              <PersonCard
                initials={t.initials}
                name={t.name}
                role={t.role}
                bio=""
                grad={t.grad}
                lab={t.lab}
                quote={t.quote}
                showStars
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
