"use client";

import { Toaster } from "sonner";
import { Hero } from "./components/landing/hero";
import { Testimonials } from "./components/landing/testimonials";
import { Features } from "./components/landing/features";
import { Benefits } from "./components/landing/benefits";
import { Security } from "./components/landing/security";
import { PricingTable } from "./components/landing/pricing-table";
import { ContactCTA } from "./components/landing/contact-cta";
import { Footer } from "./components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-10 sm:px-8 lg:px-12">
        <Toaster position="top-right" richColors />
        <Features />
        <Benefits />
        <Security />
        <PricingTable />
        <ContactCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
