"use client";

import { Navbar } from "./components/landing/sections/navbar";
import { Hero } from "./components/landing/sections/hero/hero";
import { TrustBar } from "./components/landing/sections/trust-bar";
import { Problem } from "./components/landing/sections/problem";
import { Values } from "./components/landing/sections/values";
import { Modules } from "./components/landing/sections/modules";
import { HowItWorks } from "./components/landing/sections/how-it-works";
import { PricingTable } from "./components/landing/sections/pricing-table";
import { FAQ } from "./components/landing/sections/faq";
import { ContactCTA } from "./components/landing/sections/contact-cta";
import { Footer } from "./components/landing/sections/footer";

import { NAV_LINKS } from "./components/landing/domain/navbar.content";
import { HERO_TRUST_ITEMS, TRUST_BAR_BADGES, CONTACT_CTA_GUARANTEES } from "./components/landing/domain/hero.content";
import { PROBLEM_CARDS } from "./components/landing/domain/problem.content";
import { VALUE_CARDS } from "./components/landing/domain/values.content";
import { MODULE_CARDS } from "./components/landing/domain/modules.content";
import { HOW_IT_WORKS_STEPS } from "./components/landing/domain/how-it-works.content";
import { PRICING_PLANS } from "./components/landing/domain/pricing.content";
import { FAQ_ITEMS } from "./components/landing/domain/faq.content";
import { FOOTER_COLUMNS, FOOTER_MINI_BADGES } from "./components/landing/domain/footer.content";

export default function Home() {
  return (
    <>
      <Navbar links={NAV_LINKS} />
      <Hero trustItems={HERO_TRUST_ITEMS} />
      <TrustBar badges={TRUST_BAR_BADGES} />
      <Problem cards={PROBLEM_CARDS} />
      <Values cards={VALUE_CARDS} />
      <Modules cards={MODULE_CARDS} />
      <HowItWorks steps={HOW_IT_WORKS_STEPS} />
      <PricingTable plans={PRICING_PLANS} />
      <FAQ items={FAQ_ITEMS} />
      <ContactCTA guarantees={CONTACT_CTA_GUARANTEES} />
      <Footer columns={FOOTER_COLUMNS} miniBadges={FOOTER_MINI_BADGES} />
    </>
  );
}
