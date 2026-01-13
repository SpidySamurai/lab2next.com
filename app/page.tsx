"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Autoplay, Navigation, Pagination, EffectFade, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const IconRegistro = () => (
  <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
  </svg>
);

const IconInventario = () => (
  <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4" />
  </svg>
);

const IconCalidad = () => (
  <svg className="h-7 w-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
  </svg>
);

const IconResultados = () => (
  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 118 0v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconTrazabilidad = () => (
  <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17v2m0 0h-2m2 0h2" />
  </svg>
);

const features = [
  {
    icon: <IconRegistro />,
    title: "Registro de pacientes",
    desc: "Admisión rápida, historial y consentimiento en un solo lugar.",
  },
  {
    icon: <IconInventario />,
    title: "Inventario de insumos",
    desc: "Control de lotes, caducidades y mínimos con alertas automáticas.",
  },
  {
    icon: <IconCalidad />,
    title: "Control de calidad",
    desc: "Validaciones, bloqueos y checklist para asegurar resultados confiables.",
  },
  {
    icon: <IconResultados />,
    title: "Resultados online",
    desc: "Entrega firmada y notificaciones para médicos y pacientes.",
  },
  {
    icon: <IconTrazabilidad />,
    title: "Trazabilidad total",
    desc: "Auditoría de cada acción, insumo y resultado.",
  },
];

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

const plans = [
  {
    name: "Esencial",
    features: ["Pacientes ilimitados", "Inventario básico", "Resultados PDF", "Soporte chat"],
  },
  {
    name: "Pro",
    features: ["Control de calidad", "Trazabilidad avanzada", "Integración HL7", "Soporte prioritario"],
  },
  {
    name: "Enterprise",
    features: ["SSO y auditoría", "Reportes personalizados", "Integraciones dedicadas", "Acompañamiento 24/7"],
  },
];

const testimonials = [
  {
    name: "Dra. Laura Méndez",
    role: "Directora de Laboratorio Clínico",
    quote:
      "Lab2Next redujo los errores de captura y aceleró la entrega de resultados. El soporte es excelente y el sistema es intuitivo.",
    image: undefined,
  },
  {
    name: "Lic. Jorge Ramírez",
    role: "Administrador de Red de Sucursales",
    quote:
      "La trazabilidad y los reportes automáticos nos han ayudado en auditorías. Enfoque clínico y seguridad superiores.",
    image: undefined,
  },
  {
    name: "Mtra. Sofía González",
    role: "Jefa de Calidad, RedLab Norte",
    quote:
      "La automatización de controles y la facilidad para exportar bitácoras nos ahorró horas en cada auditoría. Muy recomendable.",
    image: undefined,
  },
  {
    name: "Dr. Pablo Herrera",
    role: "Responsable Sanitario, BioSalud",
    quote:
      "El sistema es robusto y cumple con todos los requisitos de trazabilidad. El soporte técnico responde rápido y con soluciones claras.",
    image: undefined,
  },
  {
    name: "Lic. Mariana Torres",
    role: "Coordinadora de Operaciones, Medilab",
    quote:
      "La integración con sistemas previos fue sencilla. El panel de métricas nos ayuda a tomar decisiones diarias.",
    image: undefined,
  },
  {
    name: "QFB. Ernesto Rivas",
    role: "Químico Analista, LabExpress",
    quote:
      "La interfaz es intuitiva y la capacitación fue mínima. Los reportes automáticos son un plus para el equipo.",
    image: undefined,
  },
];

const trust = [
  { label: "Labs operando", value: "+120" },
  { label: "Tiempo de entrega", value: "-28%" },
  { label: "Errores de captura", value: "-40%" },
];

const securityPoints = [
  "RBAC con registro de actividad y bloqueo de acciones críticas",
  "Cifrado TLS y en reposo; backups automatizados",
  "Bitácoras exportables para auditoría y cumplimiento",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
          <Link href="#" className="text-lg font-semibold text-emerald-700" aria-label="Lab2Next">
            Lab2Next
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#funcionalidades" className="hover:text-emerald-700">Características</a>
            <a href="#paquetes" className="hover:text-emerald-700">Paquetes</a>
            <a href="#testimonios" className="hover:text-emerald-700">Testimonios</a>
            <a href="#contacto" className="hover:text-emerald-700">Contacto</a>
          </nav>
          <div className="hidden sm:flex">
            <a
              href="#contacto"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-500 transition"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-10 sm:px-8 lg:px-12">
        <Toaster position="top-right" richColors />
        {/* Hero */}
        <motion.section
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Software para laboratorios clínicos</p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Gestiona pacientes, estudios, inventario y reportes en una sola plataforma.
            </h1>
            <p className="text-lg text-slate-700">
              Reduce errores, acelera entregas y gana trazabilidad total con flujos clínicos guiados, seguridad de nivel empresarial y soporte especializado.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:-translate-y-0.5 hover:bg-emerald-500 transition"
              >
                Solicitar demo gratis
              </a>
              <a
                href="#paquetes"
                className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-6 py-3 text-sm font-semibold text-emerald-700 hover:-translate-y-0.5 hover:bg-emerald-50 transition"
              >
                Ver paquetes
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {trust.map((item) => (
                <div key={item.label} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-emerald-800">{item.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Panel clínico</p>
                <p className="text-lg font-semibold text-slate-900">Estado en vivo</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Estable</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Órdenes activas</p>
                <p className="text-2xl font-semibold text-slate-900">248</p>
                <p className="text-xs text-slate-600">3 en cola</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Alertas QC</p>
                <p className="text-2xl font-semibold text-slate-900">0 críticas</p>
                <p className="text-xs text-slate-600">Auto liberadas</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Resultados hoy</p>
                <p className="text-2xl font-semibold text-slate-900">1,240</p>
                <p className="text-xs text-slate-600">+12% vs promedio</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Sedes activas</p>
                <p className="text-2xl font-semibold text-slate-900">6</p>
                <p className="text-xs text-slate-600">Cobertura nacional</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <section id="funcionalidades" className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Características clave</p>
            <h2 className="text-2xl font-semibold text-slate-900">Todo lo que tu laboratorio necesita</h2>
            <p className="text-sm text-slate-700">Registro, inventario, calidad, resultados online y trazabilidad en una sola plataforma.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((f) => (
              <article key={f.title} className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
                {f.icon}
                <p className="font-semibold text-slate-900">{f.title}</p>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Business benefits */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Beneficios</p>
            <h2 className="text-2xl font-semibold text-slate-900">Resultados operativos y clínicos</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {businessBenefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm text-center">
                <p className="font-semibold text-emerald-800 mb-2">{b.title}</p>
                <p className="text-sm text-emerald-900">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section id="seguridad" className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Seguridad y cumplimiento</p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold text-slate-900">Confianza para auditorías y datos sensibles</h2>
              <Tooltip.Provider delayDuration={150}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700" aria-label="Detalles RBAC y trazabilidad">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                  </Tooltip.Trigger>
                  <Tooltip.Content className="max-w-xs rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg" sideOffset={6}>
                    RBAC, bitácoras exportables y cifrado en tránsito/descanso. Registros listos para auditorías y revisiones internas.
                    <Tooltip.Arrow className="fill-slate-900" />
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
            <p className="text-sm text-slate-700">Gobernanza clínica con controles de acceso, cifrado y trazabilidad completa.</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {securityPoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-800">
            <h3 className="text-lg font-semibold text-slate-900">Accesos y actividad</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
                <span>Sesiones activas</span>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800">18</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
                <span>Cambios críticos (24h)</span>
                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">5</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
                <span>Intentos fallidos</span>
                <span className="rounded-full bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-800">2</span>
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="paquetes" className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Nuestros paquetes</p>
            <h2 className="text-2xl font-semibold text-slate-900">Escoge según tus necesidades</h2>
            <p className="text-sm text-slate-700">Sin precios públicos: conversemos y ajustamos al volumen y requerimientos.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className="flex h-full flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold text-emerald-700">{p.name}</p>
                <ul className="w-full space-y-2 text-sm text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="w-full rounded-full bg-emerald-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-emerald-500 transition"
                >
                  Solicitar demo
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Carousel */}
        <motion.section
          id="testimonios"
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Testimonios</p>
            <h2 className="text-2xl font-semibold text-slate-900">Clientes que operan con Lab2Next</h2>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </motion.section>

        {/* Final CTA */}
        <section id="contacto" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Agenda</p>
              <h2 className="text-2xl font-semibold text-slate-900">Solicita una demo enfocada en tu operación</h2>
              <p className="text-sm text-slate-700">Cuéntanos tus sedes, roles y retos. Te mostramos cómo reducir fricción y acelerar entregas.</p>
              <div className="flex flex-col gap-2 text-sm text-slate-800 sm:flex-row sm:items-center sm:gap-4">
                <a className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-600" href="mailto:hola@lab2next.com">hola@lab2next.com</a>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <a className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-600" href="tel:+525512345678">+52 55 1234 5678</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}

type ContactFormInputs = {
  name: string;
  email: string;
  sites: string;
  needs: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image?: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      sites: "",
      needs: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      toast.success("Solicitud enviada. Te contactamos pronto.");
      reset();
    } catch (err) {
      toast.error("No se pudo enviar. Intenta de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-slate-700">Nombre</span>
          <input
            {...register("name", { required: "Tu nombre es obligatorio" })}
            type="text"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-emerald-500"
            placeholder="Ana Torres"
          />
          {errors.name && <p className="text-xs text-rose-600">{errors.name.message}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-slate-700">Correo de trabajo</span>
          <input
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: "Correo no válido" },
            })}
            type="email"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-emerald-500"
            placeholder="ana@laboratorio.com"
          />
          {errors.email && <p className="text-xs text-rose-600">{errors.email.message}</p>}
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-slate-700">Sedes y flujo principal</span>
        <input
          {...register("sites", { required: "Describe tus sedes o flujos" })}
          type="text"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-emerald-500"
          placeholder="3 sedes • química clínica y hematología"
        />
        {errors.sites && <p className="text-xs text-rose-600">{errors.sites.message}</p>}
      </label>
      <label className="space-y-2">
        <span className="text-slate-700">¿Qué quieres mejorar?</span>
        <textarea
          {...register("needs", { required: "Cuéntanos qué necesitas mejorar" })}
          rows={3}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-emerald-500"
          placeholder="Permisos por rol, tiempos de entrega, reportes para médicos..."
        />
        {errors.needs && <p className="text-xs text-rose-600">{errors.needs.message}</p>}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
}

function NextIconProfile() {
  return (
    <span className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 border-2 border-emerald-200">
      <svg viewBox="0 0 32 32" width="40" height="40" fill="none">
        <rect width="32" height="32" rx="16" fill="#fff" />
        <path d="M16 6v20M6 16h20" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        navigation={{ prevEl: ".testimonials-prev", nextEl: ".testimonials-next" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        aria-live="polite"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name}>
            <article className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
              <div className="mb-2 flex justify-center">
                {t.image ? (
                  <span className="inline-block h-16 w-16 rounded-full bg-slate-100 overflow-hidden border-2 border-emerald-200">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(t.name) + '&background=eee&color=555&size=128';
                      }}
                    />
                  </span>
                ) : (
                  <NextIconProfile />
                )}
              </div>
              <p className="text-lg font-semibold text-emerald-700">“{t.quote}”</p>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-slate-900">{t.name}</span>
                <span className="text-sm text-slate-600">{t.role}</span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <button
          aria-label="Anterior"
          className="testimonials-prev pointer-events-auto -ml-3 rounded-full bg-emerald-50 p-2 shadow hover:bg-emerald-100"
        >
          <ArrowLeft className="h-5 w-5 text-emerald-700" />
        </button>
        <button
          aria-label="Siguiente"
          className="testimonials-next pointer-events-auto -mr-3 rounded-full bg-emerald-50 p-2 shadow hover:bg-emerald-100"
        >
          <ArrowRight className="h-5 w-5 text-emerald-700" />
        </button>
      </div>
    </div>
  );
}
