import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SectionDivider from "@/components/SectionDivider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arrantsolution.com";
const site = {
  name: "Arrant Solution",
  url: siteUrl,
  email: "hello@arrantsolution.com",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Heavy Haul Transportation | Arrant Solutions",
  description:
    "Oversize & over-weight transport in the 100k–165k lb range. Up to 143 ft length and 20 ft width. Permits, routing, and escorts handled in-house. 24/7 dispatch.",
  alternates: { canonical: "/services" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/services",
    siteName: site.name,
    title: "Heavy Haul Transportation | Arrant Solutions",
    description:
      "Oversize & over-weight transport in the 100k–165k lb range. Up to 143 ft length and 20 ft width. Permits, routing, and escorts handled in-house. 24/7 dispatch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy Haul Transportation | Arrant Solutions",
    description:
      "Oversize & over-weight transport in the 100k–165k lb range.",
  },
};

export default function ServicesPage() {
  const EquipmentSnapshot = dynamic(() => import("@/app/components/home/EquipmentSnapshot"), { ssr: true });

  return (
    <main id="main-content" className="relative z-10 min-h-screen">
      {/* Intro */}
      <section id="intro" className="mx-auto max-w-5xl px-4 pt-28 pb-16 text-center sm:pt-32 sm:pb-20 scroll-mt-28 sm:scroll-mt-32">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          At Arrant Solutions, we are specialized to move oversized freight in the 100,000–165,000 lb range.
        </h1>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/quote"
            className="group relative overflow-hidden rounded-lg bg-[#CD1516] px-5 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Request a heavy haul quote"
          >
            <span className="relative z-10">Request a Quote</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a
            href="tel:+1-XXX-XXX-XXXX"
            className="group relative overflow-hidden rounded-lg border border-white/35 bg-white/25 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-out hover:bg-white/35 hover:scale-[1.03] hover:shadow-[0_0_0_2px_rgba(205,21,22,0.25),0_0_0_4px_rgba(71,206,12,0.25)] focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Call now"
          >
            <span className="relative z-10">Call Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#CD1516]/10 via-white/10 to-[#47CE0C]/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
          </a>
        </div>
        </section>

      <SectionDivider />

      {/* Specialization */}
      <section id="specialization" className="mx-auto max-w-7xl px-4 py-10 text-center sm:py-12 scroll-mt-28 sm:scroll-mt-32">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Heavy Haul Specialization</h2>
        <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2">
          {/* Card 1 */}
          <article className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
            <div className="relative z-10">
              <h3 className="text-white text-lg font-semibold">Battery Energy Storage Systems (BESS)</h3>
              <p className="mt-2 text-white/80">Specialized heavy-haul for modular and containerized battery units.</p>
            </div>
          </article>
          {/* Card 2 */}
          <article className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
            <div className="relative z-10">
              <h3 className="text-white text-lg font-semibold">Transformers &amp; Substation Equipment</h3>
              <p className="mt-2 text-white/80">Safe transport of major power components across state lines.</p>
            </div>
          </article>
          {/* Card 3 */}
          <article className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
            <div className="relative z-10">
              <h3 className="text-white text-lg font-semibold">Generators &amp; Industrial Modules</h3>
              <p className="mt-2 text-white/80">Secure, route-permitted moves for energy and industrial clients.</p>
            </div>
          </article>
          {/* Card 4 */}
          <article className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
            <div className="relative z-10">
              <h3 className="text-white text-lg font-semibold">Custom Over-Dimensional Freight</h3>
              <p className="mt-2 text-white/80">Solutions tailored to unique specs within the 100k–165k lb range.</p>
            </div>
              </article>
          </div>
        </section>

      <SectionDivider />

      {/* Fleet (reused) */}
      <section id="fleet" className="px-4 scroll-mt-28 sm:scroll-mt-32">
        <div className="mx-auto max-w-7xl">
          <EquipmentSnapshot />
          </div>
        </section>

      <SectionDivider />

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-20 scroll-mt-28 sm:scroll-mt-32">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Plan your heavy haul with the team that moves 100k–165k lb freight every week.
              </h2>
        <p className="mt-3 text-white/80">
          Permits, routing, and escorts handled end-to-end—24/7 dispatch.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/quote"
            className="group relative overflow-hidden rounded-lg bg-[#CD1516] px-5 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Get instant quote"
          >
            <span className="relative z-10">Get Instant Quote</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a
            href="tel:+1-XXX-XXX-XXXX"
            className="group relative overflow-hidden rounded-lg border border-white/35 bg-white/25 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-out hover:bg-white/35 hover:scale-[1.03] hover:shadow-[0_0_0_2px_rgba(205,21,22,0.25),0_0_0_4px_rgba(71,206,12,0.25)] focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Call dispatch"
          >
            <span className="relative z-10">Call Dispatch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#CD1516]/10 via-white/10 to-[#47CE0C]/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
          </a>
          </div>
        </section>
      </main>
  );
}

