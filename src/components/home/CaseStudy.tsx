"use client";
import Image from "next/image";

export default function CaseStudy() {
  return (
    <section aria-labelledby="case-study" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {/* Visual */}
          <div
            className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent z-10" />
            {/* Replace src when you have a real image */}
            <Image
              src="/heroPic.jpg"
              alt="Oversize battery unit transport"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Card */}
          <article
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 id="case-study" className="text-2xl font-bold text-white">
                Proven Execution
              </h2>
              <span className="rounded-full bg-[#CD1516]/20 px-3 py-1 text-xs font-medium text-white">
                Case Study
              </span>
            </div>
            <div className="space-y-2 text-white/85 text-sm leading-relaxed">
              <p><strong>Project:</strong> 135,000 lbs battery unit (12' wide)</p>
              <p><strong>Route:</strong> Colorado → Texas</p>
              <p><strong>Challenges:</strong> Multi-state permits, police escort, 7-day deadline</p>
              <p><strong>Result:</strong> Delivered on time, zero incidents.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
