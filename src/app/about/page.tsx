import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export default function Page() { return <main className="min-h-[40vh]" />; }

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "About Arrant Solutions | Heavy-Haul Logistics Team",
    description:
      "Expert, safety-first heavy-haul team with multi-state experience, permits, and escorts.",
    pathname: "/about",
  });
