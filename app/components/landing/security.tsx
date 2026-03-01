"use client";

import { ShieldCheck } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";

const securityPoints = [
  "RBAC con registro de actividad y bloqueo de acciones críticas",
  "Cifrado TLS y en reposo; backups automatizados",
  "Bitácoras detalladas para auditoría y cumplimiento",
];

export function Security() {
  return (
    <section
      id="seguridad"
      className="mx-auto w-full max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-sm scroll-mt-24"
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Seguridad y cumplimiento
        </p>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Confianza para auditorías y datos sensibles
          </h2>
          <Tooltip.Provider delayDuration={150}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary"
                  aria-label="Detalles RBAC y trazabilidad"
                >
                  <ShieldCheck className="h-4 w-4" />
                </span>
              </Tooltip.Trigger>
              <Tooltip.Content
                className="max-w-xs rounded-lg border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-lg"
                sideOffset={6}
              >
                RBAC, bitácoras detalladas y cifrado en tránsito/descanso.
                Registros listos para auditorías y revisiones internas.
                <Tooltip.Arrow className="fill-popover" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
        <p className="text-sm text-muted-foreground">
          Gobernanza clínica con controles de acceso, cifrado y trazabilidad
          completa.
        </p>
        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
          {securityPoints.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
