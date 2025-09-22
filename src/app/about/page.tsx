import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import SectionTitle from "@/components/SectionTitle";
import WhyArrant from "@/components/home/WhyArrant";
import SectionDivider from "@/components/SectionDivider";

export default function Page() {
  return (
    <main id="main-content" className="relative z-10 min-h-screen">
      {/* Who We Are */}
      <section aria-labelledby="who-we-are" className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 pt-28 pb-12 sm:pt-32 sm:pb-16">
          <SectionTitle title="Who We Are" />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-white/80">
              Arrant Solutions is a modern, professional heavy-haul partner specializing in oversize and overweight freight up to 165,000 lbs. We move battery energy storage systems (BESS), transformers, and large industrial modules with safety, precision, and efficiency. Our team combines veteran heavy-haul drivers, in-house permitting and routing, and a process-driven approach to deliver seamless results nationwide
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/quote"
                className="group relative overflow-hidden rounded-lg bg-[#CD1516] px-5 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Get instant quote"
              >
                <span className="relative z-10">Get instant quote</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
              <a
                href="tel:+1-555-555-5555"
                className="group relative overflow-hidden rounded-lg border border-white/35 bg-white/25 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-out hover:bg-white/35 hover:scale-[1.03] hover:shadow-[0_0_0_2px_rgba(205,21,22,0.25),0_0_0_4px_rgba(71,206,12,0.25)] focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Call now"
              >
                <span className="relative z-10">Call now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#CD1516]/10 via-white/10 to-[#47CE0C]/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Customers Choose Us (reused from home) */}
      <WhyArrant />

      <SectionDivider />

      {/* Leadership */}
      <section aria-labelledby="leadership" className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
          <SectionTitle title="Leadership" />
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            <article className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white">Dragan Cicvaric</h3>
                <p className="mt-1 text-white/80">President</p>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white">Eric Clark</h3>
                <p className="mt-1 text-white/80">CEO</p>
              </div>
            </article>
          </div>
        </div>
      </section>
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
