import type { Metadata, Viewport } from "next";
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
  display: "swap",
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
    // OG image generated dynamically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1F44",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Lab2Next",
      url: SITE_URL,
      logo: `${SITE_URL}/images/og.png`,
      areaServed: { "@type": "Country", name: "México" },
      sameAs: [
        "https://www.linkedin.com/in/javier-fernando-chi-ortiz/",
        "https://javierchiortiz.dev",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+52-999-487-5155",
        availableLanguage: "es",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Lab2Next",
      description,
      inLanguage: "es-MX",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "Lab2Next",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description,
      url: SITE_URL,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "MXN",
        lowPrice: "0",
        highPrice: "2499",
        offerCount: "6",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
