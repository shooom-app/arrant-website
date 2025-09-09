import { site } from "@/lib/seo";

export default async function sitemap() {
  const now = new Date();
  const base = site.url;
  const url = (p: string) => `${base}${p}`;

  return [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: url("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/quote"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/states"), lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: url("/trailers"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: url("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.55 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.55 },
    // TODO: add dynamic entries: /projects/[slug], /states/[state] when data sources are ready
  ];
}


