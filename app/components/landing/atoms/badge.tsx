import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={["l-module-tag", className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}

interface EyebrowProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <div className={["l-eyebrow", light && "l-eyebrow-light", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
