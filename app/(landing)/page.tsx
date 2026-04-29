import { Hero } from "../components/landing/sections/hero/hero";
import { TrustBar } from "../components/landing/sections/trust-bar";
import { Problem } from "../components/landing/sections/problem";
import { Values } from "../components/landing/sections/values";
import { Modules } from "../components/landing/sections/modules";
import { HowItWorks } from "../components/landing/sections/how-it-works";
import { Purpose } from "../components/landing/sections/purpose";
import { PricingTable } from "../components/landing/sections/pricing-table";
import { FAQ } from "../components/landing/sections/faq";
import { ContactCTA } from "../components/landing/sections/contact-cta";

import { HERO_TRUST_ITEMS, TRUST_BAR_BADGES, CONTACT_CTA_GUARANTEES } from "../components/landing/domain/hero.content";
import { PROBLEM_CARDS } from "../components/landing/domain/problem.content";
import { VALUE_CARDS } from "../components/landing/domain/values.content";
import { MODULE_CARDS } from "../components/landing/domain/modules.content";
import { HOW_IT_WORKS_STEPS } from "../components/landing/domain/how-it-works.content";
import { PRICING_PLANS } from "../components/landing/domain/pricing.content";
import { FAQ_ITEMS } from "../components/landing/domain/faq.content";
// import { Testimonials } from "../components/landing/sections/testimonials"; // ACTIVATE when real testimonials ready
// import { TESTIMONIALS } from "../components/landing/domain/testimonials.content"; // ACTIVATE with section above

export default function Home() {
  return (
    <>
      <Hero trustItems={HERO_TRUST_ITEMS} />
      <TrustBar badges={TRUST_BAR_BADGES} />
      <Problem cards={PROBLEM_CARDS} />
      <Values cards={VALUE_CARDS} />
      <Modules cards={MODULE_CARDS} />
      <HowItWorks steps={HOW_IT_WORKS_STEPS} />
      {/* <Testimonials items={TESTIMONIALS} /> */}{/* ACTIVATE when real testimonials ready */}
      <Purpose />
      <PricingTable plans={PRICING_PLANS} />
      <FAQ items={FAQ_ITEMS} />
      <ContactCTA guarantees={CONTACT_CTA_GUARANTEES} />
    </>
  );
}
