import type { Metadata } from "next";
import Link from "next/link";
import { ColaboraPreview } from "../../components/landing/organisms/colabora-preview";
import { APP_URL } from "../../components/landing/domain/config";
import { Section } from "../../components/landing/layout/section";
import { Container } from "../../components/landing/layout/container";
import { Button, buttonVariants } from "../../components/landing/atoms/button";
import { cn } from "../../lib/utils";

export const metadata: Metadata = {
  title: "Nosotros — Lab2Next",
  description:
    "Conoce al equipo detrás de Lab2Next. Construimos el sistema que los laboratorios clínicos independientes en LATAM merecían desde hace años.",
};

const FOUNDER = {
  initials: "JC",
  name: "Javier Fernando Chi Ortíz",
  role: "Arquitecto de Software & IA",
  bio: "Construyó Lab2Next desde cero después de ver de cerca la operación diaria de un laboratorio clínico independiente. Con años de experiencia en arquitectura de sistemas y aplicaciones de inteligencia artificial, diseñó una plataforma que da a cada laboratorio la misma capacidad tecnológica que las grandes cadenas, sin IT interno.",
};

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

          {/* Lead — full-width hook */}
          <p className="mt-8 max-w-4xl text-[1.6rem] font-bold leading-[1.25] tracking-tight text-navy-900 sm:text-[2rem]">
            Vimos de cerca cómo un laboratorio clínico independiente operaba
            con cuadernos, hojas de Excel y WhatsApp manual. El director llegaba
            a las 7am, recibía órdenes en papel, y a las 11pm todavía contestaba
            mensajes de pacientes preguntando por sus resultados.
          </p>

          {/* Body — 2-col context */}
          <div className="mt-10 grid gap-x-14 gap-y-5 border-t border-navy-900/10 pt-10 text-[15px] leading-[1.8] text-ink-600 lg:grid-cols-2">
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

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-3 divide-x divide-navy-900/10 border-t border-navy-900/10 pt-10">
            {STATS.map((s) => (
              <div key={s.n} className="flex flex-col gap-2 px-6 first:pl-0">
                <span className="text-4xl font-extrabold leading-none tracking-tight text-navy-900 sm:text-5xl">
                  {s.n}
                </span>
                <span className="whitespace-pre-line text-sm leading-snug text-ink-500">
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
          <span className="l-eyebrow">La persona detrás del sistema</span>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Image placeholder — swap <img> src when photo ready */}
            <div className="l-founder-photo" aria-hidden="true">
              <span>Foto</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-extrabold tracking-tight text-navy-900">
                {FOUNDER.name}
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                {FOUNDER.role}
              </p>
              <p className="mt-2 max-w-prose text-base leading-relaxed text-ink-600">
                {FOUNDER.bio}
              </p>
            </div>
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
