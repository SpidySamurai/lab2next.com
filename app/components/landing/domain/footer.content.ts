import type { FooterColumn } from "./types";

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    h: "Producto",
    items: [
      { label: "Módulos", href: "/#modulos" },
      { label: "Precios", href: "/precios" },
      { label: "Cómo funciona", href: "/#como-funciona" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    h: "Empresa",
    items: [
      { label: "Roadmap", href: "/roadmap" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/#demo" },
    ],
  },
  {
    h: "Legal",
    items: [
      { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
      { label: "Términos de servicio", href: "/terminos" },
    ],
  },
];

export const FOOTER_MINI_BADGES = ["Cloud · AWS", "Cifrado AES-256", "TLS 1.3", "Backups diarios"] as const;
