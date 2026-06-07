import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lab2Next — Software de laboratorio clínico",
    short_name: "Lab2Next",
    description:
      "Software de laboratorio clínico (LIS) en la nube para laboratorios independientes en México.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A1F44",
    lang: "es-MX",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
