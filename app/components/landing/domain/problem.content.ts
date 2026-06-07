import type { ProblemCard } from "./types";

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    title: "Entrega manual de resultados",
    body: "El paciente regresa por su sobre impreso. Tu personal imprime, archiva y busca expedientes. El tiempo se va en logística, no en análisis.",
    stat: [{ text: "Hasta " }, { text: "2 horas/día", bold: true }, { text: " en entrega manual" }],
  },
  {
    title: "Errores de transcripción",
    body: "Capturar a mano resultados del analizador es un riesgo clínico. Un decimal mal escrito puede comprometer un diagnóstico y tu acreditación.",
    stat: [{ text: "1 de cada 50", bold: true }, { text: " resultados con error de captura" }],
  },
  {
    title: "Sin visibilidad en tiempo real",
    body: "No sabes cuántas órdenes hay pendientes ni dónde se están atorando hasta que el director llama preguntando por sus exámenes.",
    stat: [{ text: "Decisiones a ciegas, " }, { text: "todo el día", bold: true }],
  },
  {
    title: "Precios y paquetes en Excel",
    body: "Listas desactualizadas, descuentos a ojo, paquetes que se arman a mano cada vez. Cobras de menos sin darte cuenta.",
    stat: [{ text: "Precios distintos " }, { text: "en cada sede", bold: true }],
  },
];
