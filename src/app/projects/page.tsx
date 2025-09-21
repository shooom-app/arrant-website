import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import dynamic from "next/dynamic";
import SectionDivider from "@/components/SectionDivider";

export default function Page() {
  const CaseStudy = dynamic(() => import("@/components/home/CaseStudy"), { ssr: true });
  return (
    <main className="relative z-10 min-h-screen">
      <section className="mx-auto max-w-5xl px-4 pt-28 pb-10 text-center sm:pt-32">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">At Arrant Solutions, we let our results speak for us.</h1>
        <p className="mt-3 text-white/85">Here is a recent project study:</p>
      </section>

      <SectionDivider />

      <section className="px-4">
        <div className="mx-auto max-w-7xl">
          <CaseStudy />
        </div>
      </section>
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

