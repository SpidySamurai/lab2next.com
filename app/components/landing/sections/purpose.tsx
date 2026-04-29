import { Reveal } from "../ui/reveal";
import { SectionHeader } from "../ui/section-header";

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
                Creemos que gestionar un laboratorio clínico no debería requerir
                un departamento de IT.
              </h2>
              <p className="l-purpose-body">
                Lab2Next nació porque los laboratorios independientes merecen la
                misma tecnología que las grandes cadenas — sin el costo, sin la
                complejidad, sin esperar a nadie.
              </p>
              <p className="l-purpose-body">
                Somos un equipo pequeño con experiencia en salud digital y
                operaciones de laboratorio. Construimos Lab2Next porque vimos de
                cerca lo que significa perder una orden en papel, llamar al
                paciente tres veces para darle un resultado o no saber cuántas
                órdenes entraron hoy.
              </p>
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
