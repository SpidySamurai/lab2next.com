import Link from "next/link";
import { Reveal } from "../ui/reveal";

const PILLARS = [
  {
    num: "01",
    title: "Accesible desde el día uno",
    body: "No pedimos IT ni meses de implementación. Cualquier laboratorio puede operar hoy.",
  },
  {
    num: "02",
    title: "Construido con laboratorios",
    body: "Cada módulo nació de conversaciones reales. No inventamos problemas — resolvemos los que ya existen.",
  },
  {
    num: "03",
    title: "Transparencia total",
    body: "Sin precios ocultos, sin cláusulas de permanencia. Nos quedamos contigo porque lo merecemos.",
  },
] as const;

export function Purpose() {
  return (
    <section className="l-section bg-white" id="proposito">
      <div className="l-container">
        <Reveal threshold={0.1}>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <span className="l-eyebrow">Quiénes somos</span>
            <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Construimos el sistema que los laboratorios independientes
              merecían desde hace años.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink-600">
              Vimos de cerca lo que significa operar con cuadernos y WhatsApp.
              Decidimos construir algo mejor.
            </p>
            <Link href="/nosotros" className="l-btn l-btn-secondary mt-2">
              Conoce al equipo →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-0 divide-y divide-ink-200 border-y border-ink-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-y-0">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} threshold={0.08} delay={i}>
              <div className="flex flex-col gap-3 px-0 py-8 sm:px-8 sm:py-0">
                <span className="text-[11px] font-bold tracking-widest text-teal-600">
                  {p.num}
                </span>
                <h3 className="text-[15px] font-bold leading-snug tracking-tight text-navy-900">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
