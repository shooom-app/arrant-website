import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl">Services</h1>
      <p className="mt-3">Oversize hauling, mobile maintenance, parts & rentals.</p>
    </main>
  );
}

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "Oversize Permits, Escorts & Heavy-Haul Services | Arrant Solutions",
    description:
      "End-to-end permits, pilot cars, and specialized trailers for complex heavy-haul and superload projects.",
    pathname: "/services",
  });
