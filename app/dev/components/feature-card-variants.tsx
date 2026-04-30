// DEV ONLY — experimental FeatureCard variants. No production imports.
import type { LucideIcon } from "lucide-react";
import { Reveal } from "../../components/landing/atoms/reveal";
import { Badge } from "../../components/landing/atoms/badge";

interface FeatureCardVariantProps {
  icon: LucideIcon;
  title: string;
  body: string;
  tags?: string[];
  delay?: number;
}

/** Horizontal: icon column on the left, title+body on the right. */
export function FeatureCardHorizontal({ icon: Icon, title, body, tags, delay = 0 }: FeatureCardVariantProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex w-full items-start gap-4 rounded-lg border border-ink-200 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
          <Icon size={22} />
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-sm font-bold text-navy-900">{title}</h3>
          <p className="text-sm leading-relaxed text-ink-600">{body}</p>
          {tags && tags.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1.5">
              {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/** Ghost: no border/shadow at rest; reveals on hover. */
export function FeatureCardGhost({ icon: Icon, title, body, tags, delay = 0 }: FeatureCardVariantProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col gap-3 rounded-lg border border-transparent bg-transparent p-5 transition-all duration-200 hover:border-ink-200 hover:bg-white hover:shadow-md">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
          <Icon size={20} />
        </div>
        <h3 className="text-sm font-bold text-navy-900">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-600">{body}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
        )}
      </div>
    </Reveal>
  );
}

/** Dense: compact layout for tight grids, small icon and text. */
export function FeatureCardDense({ icon: Icon, title, body, tags, delay = 0 }: FeatureCardVariantProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col gap-2 rounded-card border border-ink-200 bg-white p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
          <Icon size={16} />
        </div>
        <h3 className="text-sm font-bold text-navy-900">{title}</h3>
        <p className="text-xs leading-relaxed text-ink-500">{body}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
        )}
      </div>
    </Reveal>
  );
}
