"use client";

import React from "react";
import { Check, X } from "lucide-react";

const plansData = [
  { name: "BASIC", price: "$350" },
  { name: "ADVANCED", price: "$850" },
  { name: "PREMIUM", price: "$1,350" },
  { name: "FOUNDER", price: "$550", highlight: true },
  { name: "ENTERPRISE", price: "Consultar" },
];

const featureCategories = [
  {
    category: "Operación Mensual",
    features: [
      {
        name: "Órdenes / mes",
        values: ["500", "1,000", "2,000", "1,000", "A la medida"],
      },
      { name: "Usuarios", values: ["3", "10", "15", "15", "Flexibles"] },
      {
        name: "Sucursales",
        values: [
          "1 (matriz)",
          "Matriz + 1",
          "Matriz + 2",
          "Matriz + 1",
          "Ilimitadas",
        ],
      },
    ],
  },
  {
    category: "Sistema Clínico",
    features: [
      {
        name: "Configuración de exámenes",
        values: [true, true, true, true, true],
      },
      { name: "Reglas de analitos", values: [true, true, true, true, true] },
      { name: "Alta de pacientes", values: [true, true, true, true, true] },
      { name: "Recepción de órdenes", values: [true, true, true, true, true] },
      { name: "Captura y validación", values: [true, true, true, true, true] },
      { name: "Firma digital", values: [true, true, true, true, true] },
      {
        name: "Generación de PDF",
        values: [
          "Clásico",
          "Clásico",
          "Avanzado",
          "Avanzado",
          "Avanzado + Branding",
        ],
      },
      {
        name: "Consulta de resultados online",
        values: [true, true, true, true, true],
      },
      {
        name: "Gestión de personal (Roles)",
        values: [true, true, true, true, true],
      },
      {
        name: "Lista de precios",
        values: ["1", "3", "Ilimitadas", "Ilimitadas", "Ilimitadas"],
      },
    ],
  },
  {
    category: "Herramientas Extra",
    features: [
      {
        name: "Etiquetas de muestras",
        values: [false, true, true, true, true],
      },
      {
        name: "Resultados por WhatsApp",
        values: [false, false, true, true, true],
      },
      { name: "QR de verificación", values: [false, false, true, true, true] },
    ],
  },
  {
    category: "Soporte y Extras",
    features: [
      {
        name: "Nivel de soporte",
        values: [
          "Email",
          "Email",
          "Chat + Email",
          "Chat + Email",
          "VIP Dedicado",
        ],
      },
      {
        name: "Actualizaciones incluidas",
        values: [true, true, true, true, true],
      },
      {
        name: "Costo de Implementación",
        values: ["Gratis", "Gratis", "Gratis", "Gratis", "Gratis"],
      },
      {
        name: "Sitio web personalizado",
        values: [false, false, false, false, true],
      },
    ],
  },
];

const RenderFeatureValue = ({ value }: { value: boolean | string }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-primary" />
    ) : (
      <X className="mx-auto h-5 w-5 text-muted-foreground/40" />
    );
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
};

export function PricingTable() {
  return (
    <section id="paquetes" className="space-y-10 scroll-mt-24">
      <div className="text-center space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Planes y Precios
        </p>
        <h2 className="text-3xl font-semibold text-foreground">
          Escala a tu propio ritmo
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compara todos los beneficios y selecciona el paquete que mejor se
          alinee al volumen y operación de tu laboratorio. Sin contratos
          forzosos.
        </p>
      </div>

      {/* Comparison Table with Mobile Scroll */}
      <div className="pt-4 overflow-x-auto w-full pb-6 custom-scrollbar">
        <table className="w-full min-w-[800px] text-left border-collapse">
          <thead>
            <tr>
              <th className="w-[28%] p-4 sticky left-0 bg-muted/90 backdrop-blur z-20 border-b border-r border-border shadow-[1px_0_0_0_var(--color-border)]"></th>
              {plansData.map((p) => (
                <th
                  key={p.name}
                  className={`w-[14.4%] p-4 text-center border-b border-border ${
                    p.highlight ? "bg-primary/5" : ""
                  }`}
                >
                  <div
                    className={`text-xs font-bold uppercase tracking-widest ${
                      p.highlight ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {p.name}
                  </div>
                  <div className="text-xl font-bold text-foreground mt-1">
                    {p.price}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureCategories.map((category) => (
              <React.Fragment key={category.category}>
                <tr>
                  <td
                    colSpan={6}
                    className="bg-muted py-3 px-4 text-xs font-bold uppercase tracking-wider text-muted-foreground sticky left-0 border-y border-border border-r shadow-[1px_0_0_0_var(--color-border)] z-10"
                  >
                    {category.category}
                  </td>
                </tr>
                {category.features.map((feature) => (
                  <tr
                    key={feature.name}
                    className="hover:bg-muted/50 transition-colors group"
                  >
                    <td className="p-4 text-sm font-medium text-foreground border-b border-r border-border sticky left-0 bg-card/95 backdrop-blur z-10 shadow-[1px_0_0_0_var(--color-border)] group-hover:bg-muted/95">
                      {feature.name}
                    </td>
                    {feature.values.map((v, i) => (
                      <td
                        key={i}
                        className={`p-4 text-center border-b border-border ${
                          plansData[i].highlight
                            ? "bg-primary/10 group-hover:bg-primary/20"
                            : ""
                        }`}
                      >
                        <RenderFeatureValue value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
