import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Lab2Next — LIS para laboratorios clínicos en México",
  description:
    "Sistema de información clínica (LIS) en la nube para laboratorios independientes en México. Órdenes, portal de resultados por WhatsApp, agenda de citas, facturación CFDI 4.0 y dashboard operativo en una sola plataforma.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
