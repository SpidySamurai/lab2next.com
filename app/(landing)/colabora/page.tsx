import type { Metadata } from "next";
import { Container } from "../../components/landing/layout/container";
import { Section } from "../../components/landing/layout/section";
import { ColaboraForm } from "../../components/landing/organisms/colabora-form";

const title = "Colabora con Lab2Next | Beta del software de laboratorio clínico";
const description =
  "Forma parte del equipo que construye Lab2Next. Comparte feedback, propón mejoras, sé beta tester del software de laboratorio clínico y accede a precio preferencial.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/colabora" },
  openGraph: { title, description, url: "/colabora" },
};

export default function ColaboraPage() {
  return (
    <>
      <header className="l-page-hero">
        <Container>
          <div className="l-page-hero-inner flex flex-col items-center text-center">
            <p className="l-eyebrow l-eyebrow-light">Colaboración</p>
            <h1 className="l-page-hero-title">
              Forma parte del equipo que construye Lab2Next
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Laboratorios independientes como el tuyo definen el rumbo de la
              plataforma. Comparte cómo trabajas, propón lo que necesitas, y
              accede a beneficios exclusivos.
            </p>
          </div>
        </Container>
      </header>

      <Section bg="gray">
        <Container>
          <div className="l-colabora-form-wrap">
            <ColaboraForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
