import type { ReactNode } from "react";

type Size = "default" | "narrow" | "wide";

const SIZE: Record<Size, string> = {
  default: "l-container",
  narrow:  "l-container max-w-3xl",
  wide:    "l-container max-w-screen-xl",
};

interface ContainerProps {
  children: ReactNode;
  size?: Size;
  className?: string;
}

export function Container({ children, size = "default", className }: ContainerProps) {
  return (
    <div className={[SIZE[size], className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
