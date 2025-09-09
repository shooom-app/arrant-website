import { site } from "@/lib/seo";

export default function robots() {
  const host = site.url;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}


