import { Clock, MessageCircle, Gauge } from "lucide-react";
import type { ValueCard } from "./types";

export const VALUE_CARDS: ValueCard[] = [
  {
    num: "01",
    icon: Clock,
    title: "Operando el mismo día",
    body: "Sin implementación, sin técnicos, sin esperar a nadie. Te registras, tu catálogo de más de 155 exámenes ya viene cargado y recibes tu primera orden, todo en menos de una hora.",
    points: [
      "Catálogo con más de 155 exámenes ya cargado",
      "Configuración guiada sin soporte técnico",
      "Primera orden en menos de una hora",
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
    icon: Gauge,
    title: "Visibilidad total de tu operación",
    body: "KPIs en tiempo real, tiempos de entrega por examen, ingresos por sucursal. El director sabe qué pasa en su laboratorio sin esperar el cierre del mes.",
    points: [
      "Dashboard operativo con datos al minuto",
      "Reportes por sucursal exportables",
      "Alertas de órdenes pendientes",
    ],
  },
];
