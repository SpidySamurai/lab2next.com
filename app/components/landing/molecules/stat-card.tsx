import { Reveal } from "../atoms/reveal";
import type { ProblemCard } from "../domain/types";

interface StatCardProps extends ProblemCard {
  delay?: number;
}

export function StatCard({ stat, title, body, delay = 0 }: StatCardProps) {
  const boldParts    = stat.filter((p) => p.bold).map((p) => p.text).join("");
  const regularParts = stat.filter((p) => !p.bold).map((p) => p.text).join("").trim();

  return (
    <Reveal delay={delay} threshold={0.1}>
      <div className="l-problem-card">
        <div className="l-problem-stat-block">
          <div className="l-problem-stat-num">{boldParts}</div>
          {regularParts && <div className="l-problem-stat-ctx">{regularParts}</div>}
        </div>
        <div className="l-problem-divider" />
        <h3 className="l-problem-h3">{title}</h3>
        <p className="l-problem-p">{body}</p>
      </div>
    </Reveal>
  );
}
