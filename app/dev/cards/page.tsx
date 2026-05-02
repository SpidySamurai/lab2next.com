import { notFound } from "next/navigation";
import { Zap, ClipboardList, MessageCircle, FlaskConical, Bell, BarChart2 } from "lucide-react";
import { StatCard } from "../../components/landing/molecules/stat-card";
import { ModuleCard } from "../../components/landing/molecules/module-card";
import { ValueCard } from "../../components/landing/molecules/value-card";
import { PersonCard } from "../../components/landing/molecules/person-card";
import { Section } from "../../components/landing/layout/section";
import { Container } from "../../components/landing/layout/container";
import { StatCardCompact, StatCardDark, StatCardNumbered } from "../components/stat-card-variants";
import { FeatureCardHorizontal, FeatureCardGhost, FeatureCardDense } from "../components/feature-card-variants";
import { PersonCardAccent, PersonCardCompact, PersonCardTestiDark } from "../components/person-card-variants";

export default function DevCardsPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <div className="min-h-screen bg-ink-50">
      {/* ── StatCard ── */}
      <Section bg="white">
        <Container>
          <SectionLabel title="StatCard" path="molecules/stat-card.tsx" desc="Número editorial + título + body. Usado en Problem." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
              title="Resultados en papel"
              body="El paciente regresa por su sobre. Tu personal imprime, archiva, busca expedientes."
              stat={[{ text: "Hasta " }, { text: "2 horas/día", bold: true }, { text: " en entrega manual" }]}
              delay={0}
            />
            <StatCard
              title="Errores de transcripción"
              body="Capturar a mano resultados del analizador es un riesgo clínico real."
              stat={[{ text: "1 de cada 50", bold: true }, { text: " resultados con error" }]}
              delay={1}
            />
            <StatCard
              title="Sin visibilidad en tiempo real"
              body="No sabes cuántas órdenes hay pendientes hasta que alguien llama."
              stat={[{ text: "Decisiones a ciegas, " }, { text: "todo el día", bold: true }]}
              delay={2}
            />
          </div>
        </Container>
      </Section>

      {/* ── ModuleCard ── */}
      <Section bg="gray">
        <Container>
          <SectionLabel title="ModuleCard" path="molecules/module-card.tsx" desc="Ícono + título + body + tags. Usado en Modules." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ModuleCard
              icon={ClipboardList}
              title="Gestión de órdenes y pacientes"
              body="Captura de órdenes con autocompletado de catálogo, expediente clínico digital e historial completo."
              tags={["Pacientes", "Órdenes", "Catálogo"]}
              delay={0}
            />
            <ModuleCard
              icon={MessageCircle}
              title="Portal de resultados por WhatsApp"
              body="El staff envía el enlace al paciente por WhatsApp en un clic. Acceso seguro con QR."
              tags={["WhatsApp", "QR", "Portal web"]}
              delay={1}
            />
            <ModuleCard
              icon={Zap}
              title="Operando el mismo día"
              body="Sin implementación, sin técnicos, sin esperar a nadie. Primer orden en menos de una hora."
              tags={["Setup rápido", "Sin IT"]}
              delay={2}
            />
          </div>
        </Container>
      </Section>

      {/* ── ValueCard ── */}
      <Section bg="white">
        <Container>
          <SectionLabel title="ValueCard" path="molecules/value-card.tsx" desc="Número + ícono + título + body + puntos. Usado en Values." />
          <div className="grid gap-5 lg:grid-cols-3">
            <ValueCard
              icon={Zap}
              title="Operando el mismo día"
              body="Sin implementación, sin técnicos. Te registras y recibes tu primera orden en menos de una hora."
              points={["Catálogo con más de 155+ exámenes listo", "Configuración guiada", "Primera orden en < 1 hora"]}
              num="01"
              delay={0}
            />
            <ValueCard
              icon={MessageCircle}
              title="Portal de resultados por WhatsApp"
              body="El paciente recibe sus resultados por WhatsApp con QR firmado digitalmente."
              points={["Sin imprimir", "Sin que regresen por su sobre", "Sin llamadas"]}
              num="02"
              delay={1}
            />
            <ValueCard
              icon={ClipboardList}
              title="Control total del laboratorio"
              body="Finanzas, inventario, calidad y sucursales en un solo lugar."
              points={["Dashboard en tiempo real", "Multi-sucursal", "Reportes automáticos"]}
              num="03"
              delay={2}
            />
          </div>
        </Container>
      </Section>

      {/* ── PersonCard — team variant ── */}
      <Section bg="gray">
        <Container>
          <SectionLabel title="PersonCard — team" path="molecules/person-card.tsx" desc="Avatar + nombre + rol + bio. Usado en Nosotros." />
          <div className="grid gap-5 sm:grid-cols-2">
            <PersonCard
              initials="JC"
              name="Javier Ortiz"
              role="CEO & Co-fundador"
              bio="Vio de cerca cómo un laboratorio independiente operaba con Excel y WhatsApp. Decidió construir lo que faltaba."
            />
            <PersonCard
              initials="AG"
              name="Nombre Co-fundador"
              role="CTO & Co-fundador"
              bio="Experiencia en tecnología y salud. Construye la infraestructura que hace posible operar el mismo día."
            />
          </div>
        </Container>
      </Section>

      {/* ── PersonCard — testimonial variant ── */}
      <Section bg="white">
        <Container>
          <SectionLabel title="PersonCard — testimonial" path="molecules/person-card.tsx" desc="Stars + quote + avatar + nombre. Usado en Testimonials." />
          <div className="grid gap-5 sm:grid-cols-3">
            <PersonCard
              initials="BE"
              name="Bioquímico Edwin"
              role="Director de Laboratorio"
              bio=""
              grad="linear-gradient(135deg, #7C3AED, #22D3EE)"
              lab="Biogen Foundery"
              quote="Lab2Next nos permitió digitalizar por completo el flujo de recepción y entrega de resultados."
              showStars
            />
            <PersonCard
              initials="CR"
              name="Dra. Carmen R."
              role="Jefa de Calidad"
              bio=""
              grad="linear-gradient(135deg, #A78BFA, #F472B6)"
              lab="Laboratorios del Sureste"
              quote="Ahora todo cuadra al centavo y el control de calidad es impecable."
              showStars
            />
            <PersonCard
              initials="RM"
              name="Lic. Roberto M."
              role="Administrador"
              bio=""
              grad="linear-gradient(135deg, #34D399, #7C3AED)"
              lab="Análisis Clínicos Integrales"
              quote="La velocidad con la que atendemos a los pacientes subió un 40%."
              showStars
            />
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════
          EXPERIMENTAL VARIANTS
          ════════════════════════════════════ */}

      {/* ── StatCard variants ── */}
      <Section bg="gray">
        <Container>
          <SectionLabel
            title="StatCard — Compact"
            path="dev/components/stat-card-variants.tsx"
            desc="Mismos datos, p-5, número en text-2xl, separación más apretada."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StatCardCompact delay={0} stat="Hasta 2 h/día" title="Resultados en papel" body="El paciente regresa por su sobre. Tu personal imprime, archiva, busca expedientes." />
            <StatCardCompact delay={1} stat="1 de cada 50" title="Errores de transcripción" body="Capturar a mano resultados del analizador es un riesgo clínico real." />
            <StatCardCompact delay={2} stat="Todo el día" title="Sin visibilidad en tiempo real" body="No sabes cuántas órdenes hay pendientes hasta que alguien llama." />
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <SectionLabel
            title="StatCard — Dark"
            path="dev/components/stat-card-variants.tsx"
            desc="Fondo navy-900, número en teal-400 font-black, texto blanco."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StatCardDark delay={0} stat="Hasta 2 h/día" title="Resultados en papel" body="El paciente regresa por su sobre. Tu personal imprime, archiva, busca expedientes." />
            <StatCardDark delay={1} stat="1 de cada 50" title="Errores de transcripción" body="Capturar a mano resultados del analizador es un riesgo clínico real." />
            <StatCardDark delay={2} stat="Todo el día" title="Sin visibilidad en tiempo real" body="No sabes cuántas órdenes hay pendientes hasta que alguien llama." />
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <SectionLabel
            title="StatCard — Numbered"
            path="dev/components/stat-card-variants.tsx"
            desc="Número editorial grande en text-ink-100 de fondo, stat/título/body encima."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StatCardNumbered delay={0} num="01" stat="Hasta 2 h/día" title="Resultados en papel" body="El paciente regresa por su sobre. Tu personal imprime, archiva, busca expedientes." />
            <StatCardNumbered delay={1} num="02" stat="1 de cada 50" title="Errores de transcripción" body="Capturar a mano resultados del analizador es un riesgo clínico real." />
            <StatCardNumbered delay={2} num="03" stat="Todo el día" title="Sin visibilidad en tiempo real" body="No sabes cuántas órdenes hay pendientes hasta que alguien llama." />
          </div>
        </Container>
      </Section>

      {/* ── FeatureCard variants ── */}
      <Section bg="white">
        <Container>
          <SectionLabel
            title="FeatureCard — Horizontal"
            path="dev/components/feature-card-variants.tsx"
            desc="Ícono 48×48 en columna izquierda, título+body+tags en columna derecha. Full-width."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <FeatureCardHorizontal delay={0} icon={ClipboardList} title="Gestión de órdenes y pacientes" body="Captura de órdenes con autocompletado de catálogo, expediente clínico digital e historial completo." tags={["Pacientes", "Órdenes", "Catálogo"]} />
            <FeatureCardHorizontal delay={1} icon={MessageCircle} title="Portal de resultados por WhatsApp" body="El staff envía el enlace al paciente por WhatsApp en un clic. Acceso seguro con QR." tags={["WhatsApp", "QR", "Portal web"]} />
            <FeatureCardHorizontal delay={2} icon={Zap} title="Operando el mismo día" body="Sin implementación, sin técnicos, sin esperar a nadie. Primer orden en menos de una hora." tags={["Setup rápido", "Sin IT"]} />
            <FeatureCardHorizontal delay={3} icon={BarChart2} title="Dashboard en tiempo real" body="Métricas de producción, finanzas y calidad disponibles desde el primer día." tags={["Reportes", "Multi-sucursal"]} />
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <SectionLabel
            title="FeatureCard — Ghost"
            path="dev/components/feature-card-variants.tsx"
            desc="Sin borde ni sombra en reposo. Hover revela borde ink-200 + shadow-md + fondo blanco."
          />
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCardGhost delay={0} icon={ClipboardList} title="Gestión de órdenes" body="Captura rápida con catálogo autocompletado y expediente digital." tags={["Pacientes", "Órdenes"]} />
            <FeatureCardGhost delay={1} icon={MessageCircle} title="Entrega por WhatsApp" body="Resultados al paciente en un clic, con enlace firmado y QR." tags={["WhatsApp", "QR"]} />
            <FeatureCardGhost delay={2} icon={FlaskConical} title="Control de calidad integrado" body="Reglas de validación automáticas sobre cada resultado ingresado." tags={["Calidad", "Validación"]} />
            <FeatureCardGhost delay={3} icon={Bell} title="Alertas de valores críticos" body="Notificación inmediata al médico cuando un resultado supera el umbral." tags={["Alertas", "Clínica"]} />
            <FeatureCardGhost delay={4} icon={Zap} title="Activación el mismo día" body="Tu laboratorio operando en menos de una hora, sin técnicos." tags={["Setup rápido"]} />
            <FeatureCardGhost delay={5} icon={BarChart2} title="Reportes automáticos" body="Producción, facturación e inventario disponibles sin configurar nada." tags={["Reportes", "Finanzas"]} />
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <SectionLabel
            title="FeatureCard — Dense"
            path="dev/components/feature-card-variants.tsx"
            desc="Compacto p-4, ícono 32×32, title text-sm, body text-xs. Ideal en grilla 2 col."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCardDense delay={0} icon={ClipboardList} title="Órdenes" body="Captura y despacho de órdenes clínicas." tags={["Core"]} />
            <FeatureCardDense delay={1} icon={MessageCircle} title="WhatsApp" body="Entrega de resultados por enlace seguro." tags={["Pacientes"]} />
            <FeatureCardDense delay={2} icon={FlaskConical} title="Control de calidad" body="Validación automática de resultados." tags={["QC"]} />
            <FeatureCardDense delay={3} icon={Bell} title="Alertas críticas" body="Notificación inmediata de valores fuera de rango." tags={["Clínica"]} />
            <FeatureCardDense delay={4} icon={BarChart2} title="Reportes" body="Producción y facturación en tiempo real." tags={["Analytics"]} />
            <FeatureCardDense delay={5} icon={Zap} title="Activación rápida" body="Operando el mismo día sin soporte IT." tags={["Setup"]} />
          </div>
        </Container>
      </Section>

      {/* ── PersonCard variants ── */}
      <Section bg="gray">
        <Container>
          <SectionLabel
            title="PersonCard — Accent"
            path="dev/components/person-card-variants.tsx"
            desc="Variante de equipo con borde superior teal-500 de 3px."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <PersonCardAccent delay={0} initials="JC" name="Javier Ortiz" role="CEO & Co-fundador" bio="Vio de cerca cómo un laboratorio independiente operaba con Excel y WhatsApp. Decidió construir lo que faltaba." />
            <PersonCardAccent delay={1} initials="AG" name="Nombre Co-fundador" role="CTO & Co-fundador" bio="Experiencia en tecnología y salud. Construye la infraestructura que hace posible operar el mismo día." />
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <SectionLabel
            title="PersonCard — Compact"
            path="dev/components/person-card-variants.tsx"
            desc="Avatar 36px, nombre · rol en la misma línea, bio en text-xs. Muy apretado."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <PersonCardCompact delay={0} initials="JC" name="Javier Ortiz" role="CEO & Co-fundador" bio="Vio de cerca cómo un laboratorio independiente operaba con Excel y WhatsApp." />
            <PersonCardCompact delay={1} initials="AG" name="Nombre Co-fundador" role="CTO & Co-fundador" bio="Construye la infraestructura que hace posible operar el mismo día." />
            <PersonCardCompact delay={2} initials="LM" name="Lic. Laura M." role="Customer Success" bio="Acompaña a cada laboratorio en su proceso de adopción digital." />
            <PersonCardCompact delay={3} initials="RS" name="Ing. Rodrigo S." role="Lead Engineer" bio="Responsable de la estabilidad e integración con analizadores." />
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <SectionLabel
            title="PersonCard — TestiDark"
            path="dev/components/person-card-variants.tsx"
            desc="Testimonio dark navy: estrellas teal, quote blanco/80, avatar con gradiente prop."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            <PersonCardTestiDark delay={0} initials="BE" name="Bioquímico Edwin" role="Director de Laboratorio" lab="Biogen Foundery" quote="Lab2Next nos permitió digitalizar por completo el flujo de recepción y entrega de resultados." grad="linear-gradient(135deg, #7C3AED, #22D3EE)" />
            <PersonCardTestiDark delay={1} initials="CR" name="Dra. Carmen R." role="Jefa de Calidad" lab="Laboratorios del Sureste" quote="Ahora todo cuadra al centavo y el control de calidad es impecable." grad="linear-gradient(135deg, #A78BFA, #F472B6)" />
            <PersonCardTestiDark delay={2} initials="RM" name="Lic. Roberto M." role="Administrador" lab="Análisis Clínicos Integrales" quote="La velocidad con la que atendemos a los pacientes subió un 40%." grad="linear-gradient(135deg, #34D399, #7C3AED)" />
          </div>
        </Container>
      </Section>
    </div>
  );
}

function SectionLabel({ title, path, desc }: { title: string; path: string; desc: string }) {
  return (
    <div className="mb-6 flex items-start justify-between border-b border-ink-200 pb-4">
      <div>
        <h2 className="font-mono text-sm font-bold text-navy-900">{title}</h2>
        <p className="text-xs text-ink-400">{desc}</p>
      </div>
      <code className="rounded bg-ink-100 px-2 py-1 text-[11px] text-ink-500">{path}</code>
    </div>
  );
}
