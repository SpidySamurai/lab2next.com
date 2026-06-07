import { Hero } from "../components/landing/organisms/hero/hero";
import { TrustBar } from "../components/landing/organisms/trust-bar";
import { Problem } from "../components/landing/organisms/problem";
import { Values } from "../components/landing/organisms/values";
import { Modules } from "../components/landing/organisms/modules";
import { HowItWorks } from "../components/landing/organisms/how-it-works";
import { PricingTable } from "../components/landing/organisms/pricing-table";
import { FAQ } from "../components/landing/organisms/faq";
import { ContactCTA } from "../components/landing/organisms/contact-cta";

import { HERO_TRUST_ITEMS, TRUST_BAR_BADGES, CONTACT_CTA_GUARANTEES } from "../components/landing/domain/hero.content";
import { VALUE_CARDS } from "../components/landing/domain/values.content";
import { HOW_IT_WORKS_STEPS } from "../components/landing/domain/how-it-works.content";
import { PRICING_PLANS } from "../components/landing/domain/pricing.content";
import { FAQ_ITEMS } from "../components/landing/domain/faq.content";
// import { Testimonials } from "../components/landing/organisms/testimonials"; // ACTIVATE when real testimonials ready
// import { TESTIMONIALS } from "../components/landing/domain/testimonials.content";  // ACTIVATE with section above

export default function Home() {
  return (
    <>
      <Hero trustItems={HERO_TRUST_ITEMS} />
      <TrustBar badges={TRUST_BAR_BADGES} />
      <Problem />
      <Values cards={VALUE_CARDS} />
      <Modules />
      <HowItWorks steps={HOW_IT_WORKS_STEPS} />
      {/* <Testimonials items={TESTIMONIALS} /> */}{/* ACTIVATE when real testimonials ready */}
      <PricingTable plans={PRICING_PLANS} />
      <FAQ items={FAQ_ITEMS} />
      <ContactCTA guarantees={CONTACT_CTA_GUARANTEES} />
    </>
  );
}
