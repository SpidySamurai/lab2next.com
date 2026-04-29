import type { Metadata } from "next";
import { RoadmapClient } from "./roadmap-client";

export const metadata: Metadata = {
  title: "Roadmap — Lab2Next",
  description: "El camino recorrido y por recorrer. Construimos en público.",
};

export default function RoadmapPage() {
  return <RoadmapClient />;
}
