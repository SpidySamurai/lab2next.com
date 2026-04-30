import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { Reveal } from "../atoms/reveal";
import { Badge } from "../atoms/badge";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  tags?: string[];
  points?: string[];
  num?: string;
  delay?: number;
  variant?: "module" | "value";
}

export function FeatureCard({ icon: Icon, title, body, tags, points, num, delay = 0, variant = "module" }: FeatureCardProps) {
  if (variant === "value") {
    return (
      <Reveal delay={delay}>
        <div className="l-value-card">
          {num && <div className="l-value-num">{num}</div>}
          <div className="l-value-icon"><Icon size={22} /></div>
          <h3 className="l-value-h3">{title}</h3>
          <p className="l-value-p">{body}</p>
          {points && (
            <div className="l-value-points">
              {points.map((p) => (
                <div key={p} className="l-value-point">
                  <Check size={14} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} threshold={0.08}>
      <div className="l-module-card">
        <div className="l-module-icon"><Icon size={22} /></div>
        <h3 className="l-module-h3">{title}</h3>
        <p className="l-module-p">{body}</p>
        {tags && (
          <div className="l-module-tags">
            {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
        )}
      </div>
    </Reveal>
  );
}
