import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { Reveal } from "../atoms/reveal";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  points?: string[];
  num?: string;
  delay?: number;
}

export function ValueCard({ icon: Icon, title, body, points, num, delay = 0 }: ValueCardProps) {
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
