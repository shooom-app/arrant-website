import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export default function Page() {
  return (
    <main className="relative z-10 min-h-screen">
      <section className="mx-auto max-w-7xl px-4 pt-28 pb-10 text-center sm:pt-32">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Heavy‑Haul through entire country</h1>
        <div className="mx-auto mt-4 h-[2px] w-36 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-80" />
        <p className="mt-3 text-white/85">We plan, permit, and move 100,000–165,000 lb loads nationwide—BESS, transformers, generators, and more.</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/quote" className="group relative overflow-hidden rounded-lg bg-[#CD1516] px-5 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30" aria-label="Get quote">
            <span className="relative z-10">Get instant quote</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
          <a href="tel:+1-555-555-5555" className="group relative overflow-hidden rounded-lg border border-white/35 bg-white/25 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-out hover:bg-white/35 hover:scale-[1.03] hover:shadow-[0_0_0_2px_rgba(205,21,22,0.25),0_0_0_4px_rgba(71,206,12,0.25)] focus:outline-none focus:ring-2 focus:ring-white/30" aria-label="Call now">
            <span className="relative z-10">Call now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#CD1516]/10 via-white/10 to-[#47CE0C]/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
          </a>
        </div>
      </section>
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
