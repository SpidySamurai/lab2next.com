import type { LucideIcon } from "lucide-react";

export interface StatPart {
  text: string;
  bold?: boolean;
}

export interface ProblemCard {
  title: string;
  body: string;
  stat: StatPart[];
}

export interface ValueCard {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
}

export interface ModuleCard {
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string[];
}

export interface HowItWorksStep {
  num: number;
  time: string;
  title: string;
  body: string;
  tasks: string[];
}

export type Currency = "MXN" | "USD" | "COP";

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  tagline: string;
  prices?: Partial<Record<Currency, { monthly: number; yearly: number }>>;
  priceCustom?: boolean;
  note: string;
  cta: string;
  ctaHref: string;
  ctaStyle: string;
  external?: boolean;
  featured?: boolean;
  badge?: string;
  spotsLeft?: number;
  features: PricingFeature[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  h: string;
  items: { label: string; href: string }[];
}
