import { Zap, MessageCircle, BarChart2 } from "lucide-react";
import type { ValueCard } from "./types";

export const VALUE_CARDS: ValueCard[] = [
  {
    num: "01",
    icon: Zap,
    title: "Operando el mismo día",
    body: "Sin implementación, sin técnicos, sin esperar a nadie. Te registras, importas tu catálogo pre-cargado con 155+ exámenes y recibes tu primera orden — todo en menos de una hora.",
    points: [
      "Catálogo con 155+ exámenes listo para importar",
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
