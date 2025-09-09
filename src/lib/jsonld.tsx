import React from "react";
import { site } from "@/lib/seo";

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJSONLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Arrant Solutions",
    url: site.url,
    image: `${site.url}/arrant_logo.svg`,
    logo: `${site.url}/arrant_logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "15260 W 50th Drive",
      addressLocality: "Golden",
      addressRegion: "CO",
      postalCode: "80403",
      addressCountry: "US",
    },
    areaServed: "United States",
    telephone: "TODO-REPLACE-WITH-REAL-PHONE",
    email: "TODO-REPLACE-WITH-REAL-EMAIL",
  };
  return <Script data={data} />;
}

export function ServicesItemListJSONLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Heavy-Haul Transport",
        url: `${site.url}/services`,
      },
      { "@type": "Service", name: "Oversize Permitting", url: `${site.url}/services` },
      { "@type": "Service", name: "Escort/Pilot Car", url: `${site.url}/services` },
    ],
  };
  return <Script data={data} />;
}

export function FAQPageJSONLD({ items }: { items: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
  return <Script data={data} />;
}

export function CaseStudyJSONLDPlaceholder() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TODO-Project-Headline",
    datePublished: new Date().toISOString(),
    image: [`${site.url}/heroPic.jpg`],
    about: "Heavy-haul case study",
  };
  return <Script data={data} />;
}


