import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl">About</h1>
      <p className="mt-3">Our story, team, and commitment to safe, reliable heavy haul transport.</p>
    </main>
  );
}

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "About Arrant Solutions | Heavy-Haul Logistics Team",
    description:
      "Expert, safety-first heavy-haul team with multi-state experience, permits, and escorts.",
    pathname: "/about",
  });
