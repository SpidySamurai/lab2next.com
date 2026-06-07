import type { Metadata } from "next";
import { Container } from "../../components/landing/layout/container";
import { PricingTable } from "../../components/landing/organisms/pricing-table";
import { PRICING_PLANS } from "../../components/landing/domain/pricing.content";

const title = "Precios de Lab2Next | Software de laboratorio clínico desde $0";
const description =
  "Planes y precios del software de laboratorio clínico Lab2Next. Empieza gratis, sin tarjeta de crédito. Compara planes para laboratorios independientes en México.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/precios" },
  openGraph: { title, description, url: "/precios" },
};

export default function PreciosPage() {
  return (
    <>
      <header className="l-page-hero">
        <Container>
          <div className="l-page-hero-inner">
            <p className="l-eyebrow l-eyebrow-light">Precios</p>
            <h1 className="l-page-hero-title">
              Precios del software de laboratorio clínico Lab2Next
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              Empieza gratis, sin tarjeta. Un plan para cada tamaño de
              laboratorio clínico, con precios pensados para laboratorios
              independientes en México.
            </p>
          </div>
        </Container>
      </header>

      <PricingTable plans={PRICING_PLANS} />
    </>
  );
}
