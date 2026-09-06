import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lab2next.com";

const ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/precios", priority: 0.9, changeFrequency: "monthly" },
  { path: "/nosotros", priority: 0.7, changeFrequency: "monthly" },
  { path: "/roadmap", priority: 0.6, changeFrequency: "weekly" },
  { path: "/colabora", priority: 0.5, changeFrequency: "monthly" },
  // /terminos and /aviso-de-privacidad call notFound() in production:
  // they are not included so the sitemap does not list 404s. Publish the pages
  // (remove the notFound) and add them back once the legal content is ready.
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
