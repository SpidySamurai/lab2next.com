import type { Metadata } from "next";
import Link from "next/link";
import { ColaboraPreview } from "../../components/landing/organisms/colabora-preview";
import { APP_URL } from "../../components/landing/domain/config";
import { Section } from "../../components/landing/layout/section";
import { Container } from "../../components/landing/layout/container";
import { SectionHeader } from "../../components/landing/molecules/section-header";
import { PersonCard } from "../../components/landing/molecules/person-card";
import { Button, buttonVariants } from "../../components/landing/atoms/button";
import { cn } from "../../lib/utils";

export const metadata: Metadata = {
  title: "Nosotros — Lab2Next",
  description:
    "Conoce al equipo detrás de Lab2Next. Construimos el sistema que los laboratorios clínicos independientes en LATAM merecían desde hace años.",
};

// PLACEHOLDER team data — replace name/role/bio/initials/src before launch
const TEAM = [
  {
    initials: "??",
    name: "Nombre Fundador",
    role: "CEO & Co-fundador",
    bio: "Descripción breve del fundador: experiencia relevante, por qué construyó esto.",
  },
  {
    initials: "??",
    name: "Nombre Co-fundador",
    role: "CTO & Co-fundador",
    bio: "Descripción breve del co-fundador: experiencia en tecnología y salud.",
  },
];

const STATS = [
  { n: "+2 000", label: "laboratorios independientes\nsolo en México" },
  { n: "80%",   label: "siguen operando\nen papel o Excel" },
  { n: "Día 1", label: "capacidad de un gran laboratorio\nsin IT interno" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ── Page header ── */}
      <header className="l-page-hero">
        <Container>
          <div className="l-page-hero-inner">
            <p className="l-eyebrow l-eyebrow-light">El equipo</p>
            <h1 className="l-page-hero-title">
              Construimos el sistema que los laboratorios independientes
              <br className="hidden sm:block" /> merecían desde hace años.
            </h1>
          </div>
        </Container>
      </header>

      {/* ── Origen ── */}
      <Section bg="paper">
        <Container>
          <span className="l-eyebrow">El origen</span>
          <div className="mt-6 grid gap-x-16 gap-y-6 lg:grid-cols-2">
            <p className="text-xl font-medium leading-relaxed text-navy-900">
              Vimos de cerca cómo un laboratorio clínico independiente operaba
              con cuadernos, hojas de Excel y WhatsApp manual. El director llegaba
              a las 7am, recibía órdenes en papel, y a las 11pm todavía contestaba
              mensajes de pacientes preguntando por sus resultados.
            </p>
            <div className="flex flex-col gap-4 text-base leading-[1.75] text-ink-700">
              <p>
                No era un problema de disciplina ni de presupuesto. Era un problema
                de acceso. Los grandes laboratorios tienen departamentos de TI,
                sistemas integrados y equipos dedicados. El laboratorio independiente
                tiene un director que también es técnico, recepcionista y gerente.
              </p>
              <p>
                Lab2Next nació de una pregunta simple: ¿por qué el laboratorio de
                la colonia no puede tener la misma tecnología que los grandes? No
                hay razón técnica. Solo había falta de voluntad para construirlo.
                Nosotros decidimos construirlo.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-x-4 gap-y-2 border-t border-navy-900/10 pt-10 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
            {STATS.map((s) => (
              <div key={s.n} className="flex flex-col gap-1">
                <span className="text-3xl font-extrabold leading-none tracking-tight text-navy-900 sm:text-4xl">
                  {s.n}
                </span>
                <span className="whitespace-pre-line text-[13px] leading-snug text-ink-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Misión ── */}
      <Section bg="dark">
        <Container size="narrow">
          <span className="l-eyebrow l-eyebrow-light">Nuestra misión</span>
          <blockquote className="mt-5 text-2xl font-semibold leading-[1.45] tracking-[-0.02em] text-white sm:text-3xl">
            Dar a cada laboratorio clínico independiente en LATAM la misma
            capacidad tecnológica que las grandes cadenas, sin IT interno,
            sin contratos de años y sin curvas de aprendizaje de meses.
          </blockquote>
        </Container>
      </Section>

      {/* ── Equipo ── */}
      <Section bg="gray">
        <Container>
          <SectionHeader eyebrow="El equipo" title="Las personas detrás del sistema." />
          <div className="grid gap-6 sm:grid-cols-2">
            {TEAM.map((m) => (
              <PersonCard key={m.name} {...m} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Colabora ── */}
      <ColaboraPreview />

      {/* ── CTA ── */}
      <Section bg="dark">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            ¿Tu laboratorio sigue en papel?
          </h2>
          <p className="text-lg text-white/60">
            Empieza gratis. Sin tarjeta, sin contrato, sin IT.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Button as="a" href={`${APP_URL}/register`} intent="teal" size="lg">
              Crear cuenta gratis
            </Button>
            <Link href="/roadmap" className={cn(buttonVariants({ intent: "ghost-white", size: "lg" }))}>
              Ver roadmap →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
