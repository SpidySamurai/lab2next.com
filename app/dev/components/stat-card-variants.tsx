// DEV ONLY — experimental StatCard variants. No production imports.
import { Reveal } from "../../components/landing/atoms/reveal";

interface StatCardVariantProps {
  stat: string;
  title: string;
  body: string;
  num?: string;
  delay?: number;
}

/** Compact: tighter padding, editorial stat in red-500 with short divider. */
export function StatCardCompact({ stat, title, body, delay = 0 }: StatCardVariantProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col gap-2 rounded-lg border border-ink-200 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <div className="text-[clamp(22px,3vw,32px)] font-black leading-none tracking-tight text-red-500">{stat}</div>
        <div className="h-0.5 w-8 rounded-full bg-ink-200" />
        <h3 className="text-sm font-bold text-navy-900">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-600">{body}</p>
      </div>
    </Reveal>
  );
}

/** Dark: navy background with teal accent stat. */
export function StatCardDark({ stat, title, body, delay = 0 }: StatCardVariantProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col gap-3 rounded-lg bg-navy-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-0.5">
        <div className="text-[clamp(22px,3vw,32px)] font-black leading-none tracking-tight text-teal-400">{stat}</div>
        <div className="h-px bg-white/10" />
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-400">{body}</p>
      </div>
    </Reveal>
  );
}

/** Numbered: large editorial background number with stat/title/body overlaid. */
export function StatCardNumbered({ stat, title, body, num, delay = 0 }: StatCardVariantProps) {
  return (
    <Reveal delay={delay}>
      <div className="relative flex flex-col gap-3 overflow-hidden rounded-lg border border-ink-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        {num && (
          <span
            aria-hidden
            className="pointer-events-none absolute -top-3 -right-2 select-none text-8xl font-black leading-none text-ink-100"
          >
            {num}
          </span>
        )}
        <div className="relative text-[clamp(22px,3vw,32px)] font-black leading-none tracking-tight text-red-500">{stat}</div>
        <div className="relative h-0.5 w-8 rounded-full bg-ink-200" />
        <h3 className="relative text-sm font-bold text-navy-900">{title}</h3>
        <p className="relative text-sm leading-relaxed text-ink-600">{body}</p>
      </div>
    </Reveal>
  );
}
