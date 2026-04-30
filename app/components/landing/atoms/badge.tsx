import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";
import type { ReactNode } from "react";

// ── Badge ──────────────────────────────────────────────────
interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("l-module-tag", className)}>{children}</span>
  );
}

// ── Eyebrow ────────────────────────────────────────────────
const eyebrowVariants = cva("l-eyebrow", {
  variants: {
    theme: {
      dark: "",
      light: "l-eyebrow-light",
    },
  },
  defaultVariants: { theme: "dark" },
});

type EyebrowVariantProps = VariantProps<typeof eyebrowVariants>;

interface EyebrowProps {
  children: ReactNode;
  theme?: EyebrowVariantProps["theme"];
  className?: string;
}

export function Eyebrow({ children, theme, className }: EyebrowProps) {
  return (
    <div className={cn(eyebrowVariants({ theme }), className)}>
      {children}
    </div>
  );
}
