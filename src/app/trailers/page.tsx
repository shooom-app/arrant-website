import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import TrailersSection from "@/app/components/TrailersSection";
import SectionDivider from "@/components/SectionDivider";

export default function Page() {
  return (
    <main className="relative z-10 min-h-screen">
      <section className="mx-auto max-w-7xl px-4 pt-28 pb-10 text-center sm:pt-32">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Our Specialized Trailers</h1>
        <div className="mx-auto mt-4 h-[2px] w-36 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-80" />
        <p className="mt-3 text-white/85">Every load has its own challenges. That’s why we operate a fleet of specialized trailers designed to move oversized and heavy freight safely, efficiently, and legally across the country.</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/quote" className="group relative overflow-hidden rounded-lg bg-[#CD1516] px-5 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30" aria-label="Get a trailer recommendation">
            <span className="relative z-10">Get a Trailer Recommendation</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
          <Link href="/quote" className="group relative overflow-hidden rounded-lg border border-white/35 bg-white/25 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-out hover:bg-white/35 hover:scale-[1.03] hover:shadow-[0_0_0_2px_rgba(205,21,22,0.25),0_0_0_4px_rgba(71,206,12,0.25)] focus:outline-none focus:ring-2 focus:ring-white/30" aria-label="Request specific trailer">
            <span className="relative z-10">Request Specific Trailer</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#CD1516]/10 via-white/10 to-[#47CE0C]/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
          </Link>
        </div>
      </section>

      <SectionDivider />

      <TrailersSection />

      <SectionDivider />

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-20">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Plan your heavy haul with the right trailer</h2>
        <div className="mx-auto mt-4 h-[2px] w-36 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-80" />
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/quote" className="group relative overflow-hidden rounded-lg bg-[#CD1516] px-5 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30" aria-label="Get a trailer recommendation">
            <span className="relative z-10">Get a Trailer Recommendation</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
          <Link href="/quote" className="group relative overflow-hidden rounded-lg border border-white/35 bg-white/25 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-out hover:bg-white/35 hover:scale-[1.03] hover:shadow-[0_0_0_2px_rgba(205,21,22,0.25),0_0_0_4px_rgba(71,206,12,0.25)] focus:outline-none focus:ring-2 focus:ring-white/30" aria-label="Request specific trailer">
            <span className="relative z-10">Request Specific Trailer</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#CD1516]/10 via-white/10 to-[#47CE0C]/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
          </Link>
        </div>
      </section>
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
