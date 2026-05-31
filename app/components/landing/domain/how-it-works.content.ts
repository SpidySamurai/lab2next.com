import type { HowItWorksStep } from "./types";

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    num: 1,
    time: "~ 5 minutos",
    title: "Crea tu cuenta",
    body: "Te registras con email y datos del laboratorio. Tu cuenta queda activa de inmediato con catálogo de exámenes pre-cargado y 14 días de prueba sin tarjeta.",
    tasks: [
      "Registro con email — sin tarjeta",
      "Verificación en segundos",
      "Catálogo con más de 155 exámenes listo",
    ],
  },
  {
    num: 2,
    time: "~ 20 minutos",
    title: "Configura tu laboratorio",
    body: "El onboarding guiado te lleva paso a paso: sucursales, usuarios por rol y el catálogo editable con tus precios y nombres.",
    tasks: [
      "Alta de sucursales y horarios",
      "Usuarios por rol (recepción, técnico, admin)",
      "Catálogo editable con tus precios",
    ],
  },
  {
    num: 3,
    time: "Desde el día 1",
    title: "Empieza a operar",
    body: "Captura tu primera orden, genera resultados y compártelos por WhatsApp en un clic. Tu equipo opera con autonomía desde el primer día.",
    tasks: [
      "Primera orden en menos de 2 minutos",
      "Resultados compartidos por WhatsApp",
      "KPIs visibles desde el dashboard",
    ],
  },
];
