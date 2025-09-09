import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl font-bold">States</h1>
      <p className="mt-3 text-brand-dim">Nationwide coverage with state-specific permits and regulations expertise.</p>
    </main>
  );
}

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "Oversize Load Transportation by State | Arrant Solutions",
    description:
      "State-by-state permits, escorts, and routing support across the U.S. for oversize and superload freight.",
    pathname: "/states",
  });
