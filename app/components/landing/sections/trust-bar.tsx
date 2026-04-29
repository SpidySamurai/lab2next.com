import { ShieldCheck, CalendarDays, RefreshCw, MessageCircle, Globe } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    label: "Sin tarjeta de crédito",
    color: "var(--teal-400)",
  },
  {
    icon: CalendarDays,
    label: "14 días de prueba gratis",
    color: "var(--teal-400)",
  },
  {
    icon: RefreshCw,
    label: "Cancelas cuando quieras",
    color: "var(--teal-400)",
  },
  {
    icon: MessageCircle,
    label: "Soporte 100% en español",
    color: "var(--teal-400)",
  },
  {
    icon: Globe,
    label: "Datos en México",
    color: "var(--green-500)",
    live: true,
  },
] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TrustBarProps {
  badges: readonly string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TrustBar({ badges }: TrustBarProps) {
  return (
    <section className="l-trust-v3">
      <div className="l-container l-trust-v3-inner">
        <div className="l-trust-v3-label">Por qué los laboratorios eligen Lab2Next</div>
        <div className="l-trust-v3-badges">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} className="l-trust-v3-badge">
                <span className="l-trust-v3-icon" style={{ color: item.color }}>
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <span className="l-trust-v3-text">{item.label}</span>
                {"live" in item && item.live && (
                  <span className="l-trust-live" aria-label="En vivo" />
                )}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
