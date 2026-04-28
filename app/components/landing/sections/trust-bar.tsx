import { Check } from "lucide-react";

interface TrustBarProps {
  badges: readonly string[];
}

export function TrustBar({ badges }: TrustBarProps) {
  return (
    <section className="l-trust-v3">
      <div className="l-container l-trust-v3-inner">
        <div className="l-trust-v3-label">Por qué los laboratorios eligen Lab2Next</div>
        <div className="l-trust-v3-badges">
          {badges.map((b) => (
            <span key={b} className="l-trust-v3-badge">
              <Check size={13} />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
