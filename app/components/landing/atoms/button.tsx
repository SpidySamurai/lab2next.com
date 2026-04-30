import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap border border-transparent cursor-pointer no-underline transition-all duration-150 rounded-card",
  {
    variants: {
      intent: {
        primary:
          "bg-navy-900 text-white text-[15px] shadow-card hover:bg-navy-800 hover:-translate-y-px",
        secondary:
          "bg-white text-navy-900 text-[15px] border-ink-200 hover:border-ink-300 hover:bg-ink-50",
        teal: "bg-teal-500 text-white text-[15px] hover:bg-teal-600",
        ghost: "text-navy-900 text-[15px] hover:bg-ink-100",
        "ghost-white":
          "text-white/80 text-[15px] border border-white/20 hover:bg-white/[.08] hover:text-white hover:border-white/35",
      },
      size: {
        default: "h-[46px] px-[22px]",
        sm: "h-11 px-3.5 text-sm",
        lg: "h-[52px] px-7 text-base",
      },
    },
    defaultVariants: { intent: "primary", size: "default" },
  }
);

export type ButtonIntent = NonNullable<
  VariantProps<typeof buttonVariants>["intent"]
>;

export { buttonVariants };

// Renders as <button> by default. Pass as="a" + href for link buttons.
interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "type">,
    VariantProps<typeof buttonVariants> {
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  as: Tag = "button",
  intent,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <Tag
      className={cn(buttonVariants({ intent, size }), className)}
      {...(props as any)}
    />
  );
}
