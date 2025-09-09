import type { Metadata } from "next";

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.arrantsolutions.com").replace(/\/$/, ""),
  name: "Arrant Solutions",
  defaultImage: "/arrant_logo.svg", // Use brand logo for default OG/Twitter image
};

type PageMetaInput = {
  title: string;
  description: string;
  pathname: string; // "/services" etc.
};

export function pageMeta({ title, description, pathname }: PageMetaInput): Metadata {
  const canonical = `${site.url}${pathname || "/"}`;
  const images = [{ url: site.defaultImage }];
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: site.name,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}


