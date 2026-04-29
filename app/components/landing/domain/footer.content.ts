import type { FooterColumn } from "./types";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    h: "Producto",
    items: [
      { label: "Módulos", href: "#modulos" },
      { label: "Precios", href: "#precios" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    h: "Empresa",
    items: [
      { label: "Propósito", href: "/#proposito" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Contacto", href: "#demo" },
    ],
  },
  {
    h: "Legal",
    items: [
      { label: "Aviso de privacidad", href: `${APP_URL}/privacy` },
      { label: "Términos de servicio", href: `${APP_URL}/terms` },
    ],
  },
];

export const FOOTER_MINI_BADGES = ["Cloud · AWS", "Cifrado AES-256", "TLS 1.3", "Backups diarios"] as const;
