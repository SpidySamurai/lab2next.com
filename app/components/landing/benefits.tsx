export function Benefits() {
  const businessBenefits = [
    {
      title: "Rapidez operativa",
      desc: "Menos pasos manuales, más resultados entregados a tiempo.",
    },
    {
      title: "Automatización clínica",
      desc: "Flujos guiados y alertas que reducen errores y retrabajos.",
    },
    {
      title: "Eficiencia administrativa",
      desc: "Paneles claros, métricas y reportes listos para auditoría.",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Beneficios
        </p>
        <h2 className="text-2xl font-semibold text-foreground">
          Resultados operativos y clínicos
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        {businessBenefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm text-center"
          >
            <p className="font-semibold text-primary mb-2">{b.title}</p>
            <p className="text-sm text-card-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
