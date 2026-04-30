export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  lab: string;
  initials: string;
  grad: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Lab2Next nos permitió digitalizar por completo el flujo de recepción y entrega de resultados. La plataforma es robusta y fácil de usar.",
    name: "Bioquímico Edwin",
    role: "Director de Laboratorio",
    lab: "Biogen Foundery",
    initials: "BE",
    grad: "linear-gradient(135deg, #7C3AED, #22D3EE)",
  },
  {
    quote: "Antes perdíamos horas cuadrando inventarios y caja. Ahora todo cuadra al centavo y el control de calidad es impecable.",
    name: "Dra. Carmen R.",
    role: "Jefa de Calidad",
    lab: "Laboratorios del Sureste",
    initials: "CR",
    grad: "linear-gradient(135deg, #A78BFA, #F472B6)",
  },
  {
    quote: "La velocidad con la que atendemos a los pacientes subió un 40%. La interfaz es tan intuitiva que el personal nuevo aprende el mismo día.",
    name: "Lic. Roberto M.",
    role: "Administrador",
    lab: "Análisis Clínicos Integrales",
    initials: "RM",
    grad: "linear-gradient(135deg, #34D399, #7C3AED)",
  },
];
