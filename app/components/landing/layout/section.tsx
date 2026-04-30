import type { ReactNode } from "react";

type Bg = "white" | "gray" | "paper" | "dark" | "teal";

const BG: Record<Bg, string> = {
  white: "bg-white",
  gray:  "bg-ink-50",
  paper: "bg-warm-paper",
  dark:  "bg-navy-900",
  teal:  "bg-teal-500",
};

interface SectionProps {
  children: ReactNode;
  bg?: Bg;
  id?: string;
  className?: string;
}

export function Section({ children, bg = "white", id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={["l-section", BG[bg], className].filter(Boolean).join(" ")}
    >
      {children}
    </section>
  );
}
