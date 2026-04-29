import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros — Lab2Next",
  description:
    "Conoce al equipo detrás de Lab2Next. Construimos el sistema que los laboratorios clínicos independientes en LATAM merecían desde hace años.",
};

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

// PLACEHOLDER team data — replace name/role/bio/initials before launch
const TEAM = [
  {
    initials: "[--]",
    name: "[Nombre Fundador]",
    role: "CEO & Co-fundador",
    bio: "Descripción breve del fundador: experiencia relevante, por qué construyó esto.",
  },
  {
    initials: "[--]",
    name: "[Nombre Co-fundador]",
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
      <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 75%)",
          }}
          aria-hidden="true"
        />
        <div className="l-container relative z-10">
          <p className="l-eyebrow" style={{ color: "var(--color-teal-400)" }}>
            Quiénes somos
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
            Construimos el sistema que los laboratorios independientes
            <br className="hidden sm:block" /> merecían desde hace años.
          </h1>
        </div>
      </section>

      {/* ── Origen ── */}
      <section className="l-section bg-warm-paper">
        <div className="l-container">
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

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10 border-t border-navy-900/10 pt-10">
            {STATS.map((s) => (
              <div key={s.n} className="flex flex-col gap-1">
                <span className="text-4xl font-extrabold leading-none tracking-tight text-navy-900">
                  {s.n}
                </span>
                <span className="whitespace-pre-line text-[13px] leading-snug text-ink-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Misión ── */}
      <section className="bg-navy-900 py-20">
        <div className="l-container max-w-3xl">
          <span className="l-eyebrow" style={{ color: "var(--color-teal-400)" }}>
            Nuestra misión
          </span>
          <blockquote className="mt-5 text-2xl font-semibold leading-[1.45] tracking-[-0.02em] text-white sm:text-3xl">
            Dar a cada laboratorio clínico independiente en LATAM la misma
            capacidad tecnológica que las grandes cadenas, sin IT interno,
            sin contratos de años y sin curvas de aprendizaje de meses.
          </blockquote>
        </div>
      </section>

      {/* ── Equipo ── */}
      <section className="l-section bg-ink-50">
        <div className="l-container">
          <div className="l-section-head">
            <span className="l-eyebrow">El equipo</span>
            <h2 className="l-section-title">Las personas detrás del sistema.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="flex gap-5 rounded-lg border border-ink-200 bg-white p-7 shadow-card"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-navy-900 font-mono text-sm font-bold text-white">
                  {m.initials}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-base font-bold text-navy-900">{m.name}</span>
                  <span className="text-[13px] font-semibold text-teal-600">{m.role}</span>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy-900 py-20">
        <div className="l-container flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            ¿Tu laboratorio sigue en papel?
          </h2>
          <p className="text-lg text-white/60">
            Empieza gratis. Sin tarjeta, sin contrato, sin IT.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <a href={`${APP_URL}/register`} className="l-btn l-btn-teal l-btn-lg">
              Crear cuenta gratis
            </a>
            <Link href="/roadmap" className="l-btn l-btn-ghost-white l-btn-lg">
              Ver roadmap →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
