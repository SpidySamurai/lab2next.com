import type { Metadata } from "next";
import { RoadmapClient } from "./roadmap-client";

const title = "Roadmap de Lab2Next | Software de laboratorio clínico en evolución";
const description =
  "Roadmap público de Lab2Next, el software de laboratorio clínico en la nube. Funciones ya lanzadas y lo que viene para laboratorios independientes en México.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/roadmap" },
  openGraph: { title, description, url: "/roadmap" },
};

export default function RoadmapPage() {
  return <RoadmapClient />;
}
