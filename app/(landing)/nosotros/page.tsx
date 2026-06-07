import type { Metadata } from "next";
import Link from "next/link";
import { Globe } from "lucide-react";
import { ColaboraPreview } from "../../components/landing/organisms/colabora-preview";
import { APP_URL } from "../../components/landing/domain/config";
import { Section } from "../../components/landing/layout/section";
import { Container } from "../../components/landing/layout/container";
import { Button, buttonVariants } from "../../components/landing/atoms/button";
import { cn } from "../../lib/utils";

export const metadata: Metadata = {
  title: "Nosotros · Lab2Next",
  description:
    "Conoce al equipo detrás de Lab2Next. Construimos el sistema que los laboratorios clínicos independientes en LATAM merecían desde hace años.",
  alternates: { canonical: "/nosotros" },
};

const FOUNDER = {
  initials: "JC",
  name: "Javier Fernando Chi Ortíz",
  role: "Arquitecto de Software & IA",
  bio: "Más de 6 años de experiencia profesional y 10 años programando. En ese camino entendió lo que define a Lab2Next: un gran producto de software se diseña para ser accesible: potente por dentro, simple por fuera. Con un historial construyendo sistemas complejos y aplicaciones de inteligencia artificial, puso esa visión a resolver un problema concreto: que cualquier laboratorio clínico independiente, sin departamento de TI, opere con la misma tecnología que las grandes cadenas.",
};

const STATS = [
  { n: "+2 000", label: "laboratorios independientes\nsolo en México" },
  { n: "80%",   label: "siguen operando\nen Excel y métodos manuales" },
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
            Vimos los sistemas con los que un laboratorio clínico tiene que
            trabajar todos los días: limitados, obsoletos o tan difíciles de
            usar que el personal termina peleándose más con el software que con
            las muestras.
          </p>

          {/* Body — 2-col context */}
          <div className="mt-10 grid gap-x-14 gap-y-5 border-t border-navy-900/10 pt-10 text-[15px] leading-[1.8] text-ink-600 lg:grid-cols-2">
            <p>
              El problema casi nunca era el laboratorio, era la herramienta.
              Interfaces ancladas en otra década, módulos que no se hablan entre
              sí, capacitaciones de meses y precios pensados para grandes
              cadenas. El laboratorio independiente quedaba atrapado entre
              hojas de Excel y un sistema que, en el fondo, no quería abrir.
            </p>
            <p>
              Por eso decidí crear y arquitecturizar Lab2Next desde cero: una
              plataforma moderna, completa y fácil de usar, con la misma
              capacidad tecnológica de las grandes cadenas pero pensada para
              quien no tiene un departamento de TI. El software clínico que
              debería existir y no existía.
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
            <img
              src="/images/javierchi.jpg"
              alt="Javier Fernando Chi Ortíz"
              className="l-founder-photo"
              style={{ objectFit: "cover" }}
            />
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
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href="https://www.linkedin.com/in/javier-fernando-chi-ortiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-[#0A66C2]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://javierchiortiz.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-teal-600"
                >
                  <Globe size={16} />
                  Portfolio
                </a>
              </div>
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
            ¿Tu laboratorio sigue en Excel?
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
