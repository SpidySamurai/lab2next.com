import type { LucideIcon } from "lucide-react";
import { Reveal } from "../atoms/reveal";
import { Badge } from "../atoms/badge";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  tags?: string[];
  delay?: number;
}

export function ModuleCard({ icon: Icon, title, body, tags, delay = 0 }: ModuleCardProps) {
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
