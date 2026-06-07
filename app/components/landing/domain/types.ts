import type { LucideIcon } from "lucide-react";
import type { ButtonIntent } from "../atoms/button";

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
  /** Ilustración 3D que se muestra cuando el módulo está activo en el scroll. */
  image: string;
  /** Advertised on the roadmap but not yet shipped — renders a "Próximamente" badge */
  soon?: boolean;
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
  /** Internal key (matches backend enum: FREE/BASIC/FOUNDER/PREMIUM/ENTERPRISE). Used for find/filter. */
  name: string;
  /** Customer-facing name shown on the card. Decoupled from the enum key. */
  displayName?: string;
  /** Teaser tier not yet purchasable — renders a "Próximamente" badge and a disabled CTA. */
  soon?: boolean;
  tagline: string;
  prices?: Partial<Record<Currency, { monthly: number; yearly: number }>>;
  priceCustom?: boolean;
  note: string;
  cta: string;
  ctaHref: string;
  ctaIntent: ButtonIntent;
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
