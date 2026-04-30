import { notFound } from "next/navigation";
import { Zap, ClipboardList, MessageCircle } from "lucide-react";
import { StatCard } from "../../components/landing/molecules/stat-card";
import { FeatureCard } from "../../components/landing/molecules/feature-card";
import { PersonCard } from "../../components/landing/molecules/person-card";
import { Section } from "../../components/landing/layout/section";
import { Container } from "../../components/landing/layout/container";

export default function DevCardsPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <div className="min-h-screen bg-ink-50">
      {/* Header */}
      <div className="border-b border-ink-200 bg-white px-8 py-5">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600 border border-amber-200">
            DEV ONLY
          </span>
          <h1 className="text-lg font-bold text-navy-900">Card Variants</h1>
          <span className="text-sm text-ink-400">— atoms/molecules preview panel</span>
        </div>
      </div>

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

      {/* ── FeatureCard — module variant ── */}
      <Section bg="gray">
        <Container>
          <SectionLabel title='FeatureCard variant="module"' path="molecules/feature-card.tsx" desc="Ícono + título + body + tags. Usado en Modules." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={ClipboardList}
              title="Gestión de órdenes y pacientes"
              body="Captura de órdenes con autocompletado de catálogo, expediente clínico digital e historial completo."
              tags={["Pacientes", "Órdenes", "Catálogo"]}
              variant="module"
              delay={0}
            />
            <FeatureCard
              icon={MessageCircle}
              title="Portal de resultados por WhatsApp"
              body="El staff envía el enlace al paciente por WhatsApp en un clic. Acceso seguro con QR."
              tags={["WhatsApp", "QR", "Portal web"]}
              variant="module"
              delay={1}
            />
            <FeatureCard
              icon={Zap}
              title="Operando el mismo día"
              body="Sin implementación, sin técnicos, sin esperar a nadie. Primer orden en menos de una hora."
              tags={["Setup rápido", "Sin IT"]}
              variant="module"
              delay={2}
            />
          </div>
        </Container>
      </Section>

      {/* ── FeatureCard — value variant ── */}
      <Section bg="white">
        <Container>
          <SectionLabel title='FeatureCard variant="value"' path="molecules/feature-card.tsx" desc="Número + ícono + título + body + puntos. Usado en Values." />
          <div className="grid gap-5 lg:grid-cols-3">
            <FeatureCard
              icon={Zap}
              title="Operando el mismo día"
              body="Sin implementación, sin técnicos. Te registras y recibes tu primera orden en menos de una hora."
              points={["Catálogo con 155+ exámenes listo", "Configuración guiada", "Primera orden en < 1 hora"]}
              num="01"
              variant="value"
              delay={0}
            />
            <FeatureCard
              icon={MessageCircle}
              title="Portal de resultados por WhatsApp"
              body="El paciente recibe sus resultados por WhatsApp con QR firmado digitalmente."
              points={["Sin imprimir", "Sin que regresen por su sobre", "Sin llamadas"]}
              num="02"
              variant="value"
              delay={1}
            />
            <FeatureCard
              icon={ClipboardList}
              title="Control total del laboratorio"
              body="Finanzas, inventario, calidad y sucursales en un solo lugar."
              points={["Dashboard en tiempo real", "Multi-sucursal", "Reportes automáticos"]}
              num="03"
              variant="value"
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
