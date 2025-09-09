import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl font-bold">Trailers</h1>
      <p className="mt-3 text-brand-dim">RGN, lowboy, stepdeck, and specialized heavy haul equipment.</p>
    </main>
  );
}

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "Lowboy & Specialized Trailer Services | Arrant Solutions",
    description:
      "Lowboy, gooseneck, and specialized equipment for heavy-haul moves—sized for complex loads.",
    pathname: "/trailers",
  });
