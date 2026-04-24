"use client";

import { Toaster } from "sonner";
import { Navbar } from "./components/landing/navbar";
import { Hero } from "./components/landing/hero";
import { TrustBar } from "./components/landing/trust-bar";
import { Features } from "./components/landing/features";
import { Benefits } from "./components/landing/benefits";
import { PricingTable } from "./components/landing/pricing-table";
import { Testimonials } from "./components/landing/testimonials";
import { ContactCTA } from "./components/landing/contact-cta";
import { Footer } from "./components/landing/footer";

export default function Home() {
  return (
    <div className="page">
      <Toaster position="top-right" richColors />
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <Benefits />
      <PricingTable />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}
