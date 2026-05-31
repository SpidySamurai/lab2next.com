import type { LucideIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Reveal } from "../atoms/reveal";
import { Badge } from "../atoms/badge";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  tags?: string[];
  soon?: boolean;
  delay?: number;
}

export function ModuleCard({ icon: Icon, title, body, tags, soon = false, delay = 0 }: ModuleCardProps) {
  return (
    <Reveal delay={delay} threshold={0.08}>
      <div className={cn("l-module-card", soon && "l-module-card-soon")}>
        <div className="l-module-icon"><Icon size={22} /></div>
        <h3 className="l-module-h3">
          {title}
          {soon && <span className="l-module-soon-badge">Próximamente</span>}
        </h3>
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
