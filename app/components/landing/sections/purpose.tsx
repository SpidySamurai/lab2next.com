import Link from "next/link";
import { Reveal } from "../ui/reveal";

const PILLARS = [
  {
    num: "01",
    title: "Accesible desde el día uno",
    body: "No pedimos un departamento de IT ni meses de implementación. Cualquier laboratorio — grande o pequeño — puede operar hoy.",
  },
  {
    num: "02",
    title: "Construido con los laboratorios",
    body: "Cada módulo nació de conversaciones reales con directores, técnicos y médicos. No inventamos problemas — resolvemos los que ya existen.",
  },
  {
    num: "03",
    title: "Transparencia total",
    body: "Sin precios ocultos, sin licencias sorpresa, sin cláusulas de permanencia. Nos quedamos contigo porque lo merecemos, no por contrato.",
  },
] as const;

export function Purpose() {
  return (
    <section className="l-section l-purpose" id="proposito">
      <div className="l-container">
        <div className="l-purpose-grid">
          <Reveal threshold={0.1}>
            <div className="l-purpose-left">
              <div className="l-eyebrow">Quiénes somos</div>
              <h2 className="l-purpose-headline">
                Construimos el sistema que los laboratorios independientes
                merecían desde hace años.
              </h2>
              <p className="l-purpose-body">
                Vimos de cerca lo que significa operar un laboratorio con
                cuadernos y WhatsApp. Decidimos construir algo mejor.
              </p>
              <Link href="/nosotros" className="l-btn l-btn-secondary mt-6 inline-flex">
                Conoce al equipo →
              </Link>
            </div>
          </Reveal>

          <div className="l-purpose-pillars">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} threshold={0.08} delay={i}>
                <div className="l-purpose-pillar">
                  <div className="l-purpose-pillar-num">{p.num}</div>
                  <div className="l-purpose-pillar-content">
                    <h3 className="l-purpose-pillar-title">{p.title}</h3>
                    <p className="l-purpose-pillar-body">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
