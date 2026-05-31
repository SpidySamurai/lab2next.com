import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lab2next.com";

const title = "Lab2Next — LIS para laboratorios clínicos en México";
const description =
  "Sistema de información clínica (LIS) en la nube para laboratorios independientes en México. Órdenes, portal de resultados por WhatsApp, agenda de citas y dashboard operativo en una sola plataforma.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Lab2Next",
    title,
    description,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Lab2Next — LIS para laboratorios clínicos en México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
