import type { MetadataRoute } from "next";
import { site } from "@/lib/seo";

// robots.txt kill‑switch
// Why: During demo/staging, we don't want Google to index the demo domain
// to avoid duplicate content and SEO dilution. When the site moves to the
// owner's real domain, flip NOINDEX_KILLSWITCH to "false" (or remove it)
// in Vercel → Project Settings → Environment Variables and indexing
// will be re‑enabled automatically without code changes.
export default function robots(): MetadataRoute.Robots {
  const host = site.url;
  const noindex = process.env.NOINDEX_KILLSWITCH === "true";

  if (noindex) {
    // Block everything
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  // Default: allow site (except API), and advertise sitemap + host
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


