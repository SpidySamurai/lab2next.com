"use client";

import { Navbar } from "./components/landing/navbar";
import { Hero } from "./components/landing/hero";
import { TrustBar } from "./components/landing/trust-bar";
import { Problem } from "./components/landing/problem";
import { Values } from "./components/landing/values";
import { Modules } from "./components/landing/modules";
import { HowItWorks } from "./components/landing/how-it-works";
import { PricingTable } from "./components/landing/pricing-table";
import { FAQ } from "./components/landing/faq";
import { ContactCTA } from "./components/landing/contact-cta";
import { Footer } from "./components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Values />
      <Modules />
      <HowItWorks />
      <PricingTable />
      <FAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}
