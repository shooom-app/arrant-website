import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-3 text-brand-dim">Completed projects, case studies, and heavy haul success stories.</p>
    </main>
  );
}

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "Heavy-Haul Case Studies & Projects | Arrant Solutions",
    description:
      "Real multi-state superload and oversize projects with permits, escorts, routes, and outcomes.",
    pathname: "/projects",
  });

