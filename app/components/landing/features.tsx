"use client";

import React from "react";

import { Users, BadgeCheck, FileCheck, History } from "lucide-react";

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Registro de pacientes",
    desc: "Admisión rápida, historial y consentimiento en un solo lugar.",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Control de calidad",
    desc: "Validaciones, bloqueos y checklist para asegurar resultados confiables.",
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Resultados online",
    desc: "Entrega firmada y notificaciones para médicos y pacientes.",
  },
  {
    icon: <History className="h-6 w-6" />,
    title: "Trazabilidad total",
    desc: "Auditoría de cada acción, insumo y resultado.",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="space-y-6 scroll-mt-24">
      <div className="text-center space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Características clave
        </p>
        <h2 className="text-2xl font-semibold text-foreground">
          Todo lo que tu laboratorio necesita
        </h2>
        <p className="text-sm text-muted-foreground">
          Registro, calidad, resultados online y trazabilidad en una sola
          plataforma.
        </p>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm text-left hover:border-primary/20 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center text-primary rounded-xl bg-primary/10">
                {f.icon}
              </div>
              <div>
                <p className="font-semibold text-card-foreground">{f.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
