"use client";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function CaseStudy() {
  return (
    <section aria-labelledby="case-study" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        {/* Header matches Why Arrant style */}
        <h2 id="case-study" className="sr-only">Recent Project Spotlight — Proven Execution</h2>
        <SectionTitle
          title="Recent Project Spotlight — Proven Execution"
          subtitle="Colorado → Texas · 7 days · 12’ wide · 135,000 lbs"
        />

        {/* Two-column grid (media + details) */}
        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
          {/* Media card */}
          <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20">
            <div className="relative aspect-[16/10] w-full">
              {/* Soft vignette */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(120%_80%_at_50%_40%,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
              <Image
                src="/case-study-mobile.jpg"
                alt="Oversize battery unit transport"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={false}
              />
            </div>
          </div>

          {/* Details card */}
          <article className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:ring-white/20 sm:p-8">

            {/* Header row: KPI chips + tag */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="brand-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                  135,000 lbs
                </span>
                <span className="brand-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                  12’ wide
                </span>
                <span className="brand-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                  CO → TX
                </span>
                <span className="brand-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                  7 days
                </span>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15">
                Case Study
              </span>
            </div>

            {/* Execution bullets */}
            <div className="space-y-2 text-white/85 text-sm leading-relaxed">
              <p><strong className="text-white">Project:</strong> 135,000 lbs battery unit (12’ wide)</p>
              <p><strong className="text-white">Route:</strong> Colorado → Texas</p>
              <p><strong className="text-white">Challenges:</strong> Multi-state permits, police escort, 7-day deadline</p>
              <p><strong className="text-white">Result:</strong> Delivered on time, zero incidents.</p>
            </div>

            {/* Optional micro-progress line */}
            <div className="mt-5 h-[2px] w-full overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
              <span className="progress-sweep block h-full w-1/3 bg-gradient-to-r from-[#CD1516] via-white/40 to-[#47CE0C]" />
            </div>
          </article>
        </div>
      </div>

      {/* Local micro-motion for the progress line */}
      <style jsx>{`
        @keyframes csProgress {
          0% { transform: translateX(-120%) }
          100% { transform: translateX(220%) }
        }
        .progress-sweep {
          animation: csProgress 6s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .progress-sweep { animation: none }
        }
      `}</style>
    </section>
  );
}
