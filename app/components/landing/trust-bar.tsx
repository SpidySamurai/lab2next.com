"use client";

import { Check } from "lucide-react";

const BADGES = [
  "Sin tarjeta de crédito",
  "14 días de prueba gratis",
  "Cancelas cuando quieras",
  "Soporte 100% en español",
  "Datos en México",
];

export function TrustBar() {
  return (
    <section className="l-trust-v3">
      <div className="l-container l-trust-v3-inner">
        <div className="l-trust-v3-label">Por qué los laboratorios eligen Lab2Next</div>
        <div className="l-trust-v3-badges">
          {BADGES.map((b) => (
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
