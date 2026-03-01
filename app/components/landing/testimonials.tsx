"use client";

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lab2Next nos permitió digitalizar por completo el flujo de recepción y entrega de resultados. La plataforma es robusta y fácil de usar.",
    author: "Bioquímico Edwin",
    role: "Director de Laboratorio",
    lab: "Biogen Foundery",
  },
  {
    quote:
      "Antes perdíamos horas cuadrando inventarios y caja. Ahora, todo cuadra al centavo y el control de calidad es impecable.",
    author: "Dra. Carmen R.",
    role: "Jefa de Calidad",
    lab: "Laboratorios del Sureste",
  },
  {
    quote:
      "La velocidad con la que atendemos a los pacientes subió un 40%. La interfaz es tan intuitiva que el personal nuevo aprende el mismo día.",
    author: "Lic. Roberto M.",
    role: "Administrador",
    lab: "Análisis Clínicos Integrales",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="space-y-8 scroll-mt-24 py-12">
      <div className="text-center space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Casos de éxito
        </p>
        <h2 className="text-2xl font-semibold text-foreground">
          Laboratorios que confían en nosotros
        </h2>
        <p className="text-sm text-muted-foreground">
          Resultados reales de clientes que ya modernizaron su operación
          clínica.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
            >
              <div className="space-y-4">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="text-foreground leading-relaxed italic pr-2">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-semibold text-primary">{t.author}</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {t.role} •{" "}
                  <span className="text-foreground font-medium">{t.lab}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
