import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl">Contact</h1>
      <p className="mt-3">Get in touch for inquiries, support, or to discuss your transport needs.</p>
    </main>
  );
}

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "Contact Arrant Solutions | Dispatch & Quotes",
    description:
      "Call or email dispatch for heavy-haul quotes, permits, escorts, and routing.",
    pathname: "/contact",
  });
