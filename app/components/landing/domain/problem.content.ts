import type { ProblemCard } from "./types";

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    title: "Resultados en papel",
    body: "El paciente regresa por su sobre. Tu personal imprime, archiva, busca expedientes. El tiempo se va en logística, no en análisis.",
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
    title: "Facturación sin CFDI 4.0",
    body: "Cobras y luego, en Word, armas la factura. El SAT cambia el formato y tu administrador pasa la tarde corrigiendo. CFDI 4.0 ya no es opcional.",
    stat: [{ text: "15% del tiempo", bold: true }, { text: " administrativo en facturación" }],
  },
];
