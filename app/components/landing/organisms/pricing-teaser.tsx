import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "../molecules/section-header";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { Reveal } from "../atoms/reveal";
import { Button } from "../atoms/button";
import type { PricingPlan } from "../domain/types";

interface PricingTeaserProps {
  plans: PricingPlan[];
}

// Curated highlights per plan for the teaser: they call out what DIFFERENTIATES each
// one (Founder and Pro share the mid feature-set; this is where their distinction sells).
// The full feature-by-feature comparison lives on /precios.
const HIGHLIGHTS: Record<string, string[]> = {
  BASIC: [
    "Portal de resultados con QR",
    "WhatsApp y correo",
    "Agenda de citas",
    "Caja, cobros e inventario de insumos",
  ],
  FOUNDER: [
    "Precio congelado de por vida",
    "2 sucursales · hasta 15 usuarios",
    "3 interfaces con tus equipos incluidas",
    "Sucursales e interfaces extra a precio preferencial vitalicio",
  ],
  PREMIUM: [
    "Tu laboratorio de punta a punta",
    "Interfaces con tus equipos de análisis",
    "Finanzas avanzadas e inventario por lotes",
    "Diseñador de PDF avanzado",
  ],
};

// Pricing summary for the home page. The full table + comparison lives on /precios.
export function PricingTeaser({ plans }: PricingTeaserProps) {
  const core = plans.filter(
    (p) => p.name !== "FREE" && p.name !== "ENTERPRISE" && !p.soon
  );

  return (
    <Section id="precios">
      <Container>
        <SectionHeader
          centered
          eyebrow="Precios"
          title="Un plan para cada tamaño de laboratorio."
          lede="Empieza gratis, sin tarjeta de crédito. Estos son los planes más elegidos; compara todos en la página de precios."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {core.map((p, i) => {
            const price = p.prices?.MXN?.monthly;
            const topFeatures =
              HIGHLIGHTS[p.name] ??
              p.features
                .filter((f) => f.included && !/^todo lo del plan/i.test(f.text))
                .map((f) => f.text)
                .slice(0, 4);
            return (
              <Reveal key={p.name} delay={i}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-7 ${
                    p.featured
                      ? "border-teal-500/40 bg-teal-500/5 shadow-lg"
                      : "border-navy-900/10 bg-white"
                  }`}
                >
                  {p.badge && (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-600">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-extrabold tracking-tight text-navy-900">
                    {p.displayName ?? p.name}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-ink-500">
                    {p.tagline}
                  </p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-3xl font-black tracking-tight text-navy-900">
                      ${price?.toLocaleString("es-MX")}
                    </span>
                    <span className="text-sm font-medium text-ink-500">MXN/mes</span>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {topFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[15px] text-ink-600"
                      >
                        <Check size={17} className="mt-0.5 shrink-0 text-teal-600" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    as="a"
                    href={p.ctaHref}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    intent={p.ctaIntent}
                    className="mt-7 w-full"
                  >
                    {p.cta}
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
            >
              Ver todos los planes y comparativa completa
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
