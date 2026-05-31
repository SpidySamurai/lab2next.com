import { ClipboardList, MessageCircle, Calendar, FlaskConical, BarChart2, UserCheck, FileText, Package } from "lucide-react";
import type { ModuleCard } from "./types";

export const MODULE_CARDS: ModuleCard[] = [
  {
    icon: ClipboardList,
    title: "Gestión de órdenes y pacientes",
    body: "Captura de órdenes con autocompletado de catálogo, expediente clínico digital, historial completo y paquetes de exámenes con precio prorrateado.",
    tags: ["Pacientes", "Órdenes", "Catálogo", "Paquetes"],
  },
  {
    icon: MessageCircle,
    title: "Portal de resultados por WhatsApp",
    body: "El staff envía el enlace al paciente por WhatsApp en un clic. El paciente accede a su portal seguro con código QR sin instalar ninguna aplicación.",
    tags: ["WhatsApp", "QR", "Portal web"],
  },
  {
    icon: Calendar,
    title: "Agenda de citas",
    body: "Controla citas de toma de muestra con calendario por sucursal, capacidad configurable y vista diaria para el staff.",
    tags: ["Citas", "Calendario", "Sucursales"],
  },
  {
    icon: FlaskConical,
    title: "Muestras y trazabilidad",
    body: "Registro de muestras por orden con trazabilidad completa de la cadena analítica. Sabe en qué punto está cada muestra en todo momento.",
    tags: ["Muestras", "Trazabilidad", "Cadena analítica"],
  },
  {
    icon: BarChart2,
    title: "Dashboard operativo",
    body: "KPIs del día en tiempo real: órdenes por estado, tiempos de entrega e ingresos por sucursal. El director sabe qué pasa sin esperar el cierre del mes.",
    tags: ["KPIs", "Tiempo real", "Multi-sucursal"],
  },
  {
    icon: UserCheck,
    title: "Médicos referidores",
    body: "Catálogo de médicos referidores vinculado a cada orden. Trazabilidad completa de quién solicita qué estudio en tu laboratorio.",
    tags: ["Médicos", "Referidores", "Trazabilidad"],
  },
  {
    icon: FileText,
    title: "Facturación CFDI 4.0",
    body: "Emite facturas timbradas ante el SAT desde la misma orden, sin armarlas en Word. Datos fiscales por sucursal y cancelaciones controladas.",
    tags: ["CFDI 4.0", "SAT", "Timbrado"],
    soon: true,
  },
  {
    icon: Package,
    title: "Control de inventario",
    body: "Controla reactivos e insumos con descuento automático por examen, alertas de stock mínimo y costeo por estudio.",
    tags: ["Insumos", "Reactivos", "Stock"],
    soon: true,
  },
];
