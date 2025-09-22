import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export default function Page() {
  return <main className="min-h-[40vh]" />;
}

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "Oversize Load Transportation by State | Arrant Solutions",
    description:
      "State-by-state permits, escorts, and routing support across the U.S. for oversize and superload freight.",
    pathname: "/states",
  });
