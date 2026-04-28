import { Zap, MessageCircle, BarChart2 } from "lucide-react";
import type { ValueCard } from "./types";

export const VALUE_CARDS: ValueCard[] = [
  {
    num: "01",
    icon: Zap,
    title: "Implementación en 3 semanas",
    body: "No 6 meses. Configuración, migración de datos, capacitación y go-live en 21 días. Tu equipo operando con autonomía desde la primera semana.",
    points: [
      "Plan de implementación firmado el día 1",
      "Migración de tu base de pacientes y catálogo",
      "Capacitación incluida para todo el equipo",
    ],
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "Portal de resultados por WhatsApp",
    body: "El paciente recibe sus resultados por WhatsApp con QR firmado digitalmente. Sin imprimir, sin que regresen por su sobre, sin llamadas.",
    points: [
      "Resultados entregados el mismo día",
      "QR con firma digital verificable",
      "Acceso al portal web sin instalar nada",
    ],
  },
  {
    num: "03",
    icon: BarChart2,
    title: "Visibilidad total de tu operación",
    body: "KPIs en tiempo real, tiempos de entrega por examen, ingresos por sucursal. El director sabe qué pasa en su laboratorio sin esperar el cierre del mes.",
    points: [
      "Dashboard operativo con datos al minuto",
      "Reportes por sucursal exportables",
      "Alertas de órdenes pendientes",
    ],
  },
];
