"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CaseStudy() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      data-visible={visible ? "true" : "false"}
      className="cs-root relative z-10"
      aria-labelledby="case-study"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-12">
        {/* Header matching Why Arrant */}
        <div className="cs-header mx-auto max-w-3xl text-center will-change-transform">
          <h2 id="case-study" className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-tight">
            Recent Project Spotlight — Proven Execution
          </h2>
          <p className="mt-2 text-sm text-white/85 sm:text-base">
            Colorado · Texas · 7 days · 12’ wide · 135,000 lbs
          </p>
          <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-70 sm:w-36 sm:opacity-80" />
        </div>

        {/* Centered grid container */}
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 items-stretch justify-center gap-6 sm:mt-8 md:grid-cols-2 md:gap-8">
          {/* Media card (glass + hairline, with vignette) */}
          <div className="cs-media relative h-full min-h-[420px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition hover:ring-white/20 hover:shadow-[0_18px_70px_rgba(0,0,0,0.38)] will-change-transform md:min-h-[520px]">
            <span className="why-hairline pointer-events-none absolute inset-x-0 -top-px h-[2px]" />
            {/* Keep 16:9 on mobile; on desktop, let it fill the column height */}
            <div className="relative aspect-video h-full w-full md:aspect-auto md:h-full">
              {/* Subtle top+bottom vignette */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),transparent_24%),linear-gradient(to_top,rgba(0,0,0,0.22),transparent_24%)] sm:bg-[radial-gradient(120%_80%_at_50%_40%,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
              <Image
                src="/case-study-mobile.jpg"
                alt="13‑axle RGN hauling 135,000‑lb battery unit from Colorado to Texas"
                fill
                className="object-cover object-center"
                sizes="(max-width: 480px) 100vw, (min-width: 768px) 50vw, 100vw"
                priority={false}
              />
            </div>
          </div>

          {/* Details card (glass + hairline) */}
          <article
            className="cs-details relative h-full min-h-[420px] rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition hover:ring-white/20 hover:shadow-[0_18px_70px_rgba(0,0,0,0.38)] will-change-transform sm:p-8 md:min-h-[520px]"
            style={{ contentVisibility: "auto", containIntrinsicSize: "600px" } as React.CSSProperties}
          >
            <span className="why-hairline pointer-events-none absolute inset-x-0 -top-px h-[2px]" />

            {/* Centered gradient tag matching primary button */}
            <div className="mb-4 flex justify-center">
              <span className="brand-chip inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold text-white ring-1 ring-white/15">
                Case Study
              </span>
            </div>

            {/* KPI chips as 2-col grid on mobile */}
            <div className="cs-chips mt-1 grid grid-cols-2 gap-2 sm:mt-0 sm:flex sm:flex-wrap sm:gap-2">
              <span className="brand-chip inline-flex min-h-[40px] items-center justify-center rounded-full px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/15">135,000 lbs</span>
              <span className="brand-chip inline-flex min-h-[40px] items-center justify-center rounded-full px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/15">12’ wide</span>
              <span className="brand-chip inline-flex min-h-[40px] items-center justify-center rounded-full px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/15">CO → TX</span>
              <span className="brand-chip inline-flex min-h-[40px] items-center justify-center rounded-full px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/15">7 days</span>
            </div>

            {/* Execution bullets as definition-list feel */}
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-white/85">
              <div>
                <div className="font-semibold text-white">Project</div>
                <div>135,000 lbs battery unit (12’ wide)</div>
              </div>
              <div>
                <div className="font-semibold text-white">Route</div>
                <div>Colorado → Texas</div>
              </div>
              <div>
                <div className="font-semibold text-white">Challenges</div>
                <div>Multi-state permits, police escort, 7-day deadline</div>
              </div>
              <div>
                <div className="font-semibold text-white">Result</div>
                <div>Delivered on time, zero incidents.</div>
              </div>
            </div>

            {/* Bottom hairline */}
            <div className="cs-bottom-hairline mt-4 h-[2px] w-full origin-left scale-x-50 rounded-full bg-gradient-to-r from-[#CD1516] via-white/40 to-[#47CE0C] opacity-0" />
          </article>
        </div>
      </div>

      <style jsx global>{`
        /* Gradient hairline identical to Why Arrant; disable animation on mobile */
        @keyframes arrantHairline { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        .why-hairline { background-image: linear-gradient(90deg,#CD1516 0%, rgba(255,255,255,.55) 50%, #47CE0C 100%); background-size:200% 100%; animation:arrantHairline 6s linear infinite; opacity:.9 }
        @media (max-width: 480px) { .why-hairline { animation: none } }
        @media (prefers-reduced-motion: reduce) { .why-hairline { animation: none } }

        /* ----- On-scroll reveal states ----- */
        .cs-root .cs-header { opacity: 0; transform: translateY(12px); transition: opacity 360ms cubic-bezier(.2,.6,.2,1), transform 360ms cubic-bezier(.2,.6,.2,1) }
        .cs-root .cs-media { opacity: 0; transform: scale(.985); filter: blur(2px); transition: opacity 500ms ease-out, transform 500ms ease-out, filter 500ms ease-out }
        .cs-root .cs-details { opacity: 0; transform: translateY(14px); filter: blur(2px); transition: opacity 500ms ease-out 100ms, transform 500ms ease-out 100ms, filter 500ms ease-out 100ms }
        .cs-root .cs-chips > * { opacity: 0; transform: translateY(8px); transition: opacity 240ms ease-out, transform 240ms ease-out }
        .cs-root .cs-bottom-hairline { transition: transform 420ms ease-out 160ms, opacity 420ms ease-out 160ms; transform: scaleX(.4) }

        .cs-root[data-visible="true"] .cs-header { opacity: 1; transform: translateY(0) }
        .cs-root[data-visible="true"] .cs-media { opacity: 1; transform: scale(1); filter: blur(0) }
        .cs-root[data-visible="true"] .cs-details { opacity: 1; transform: translateY(0); filter: blur(0) }
        .cs-root[data-visible="true"] .cs-chips > * { opacity: 1; transform: translateY(0) }
        .cs-root[data-visible="true"] .cs-chips > *:nth-child(1) { transition-delay: 0ms }
        .cs-root[data-visible="true"] .cs-chips > *:nth-child(2) { transition-delay: 60ms }
        .cs-root[data-visible="true"] .cs-chips > *:nth-child(3) { transition-delay: 120ms }
        .cs-root[data-visible="true"] .cs-chips > *:nth-child(4) { transition-delay: 180ms }
        .cs-root[data-visible="true"] .cs-bottom-hairline { opacity: 1; transform: scaleX(1) }

        /* Reduced motion: skip transforms, quick fades only */
        @media (prefers-reduced-motion: reduce) {
          .cs-root .cs-header, .cs-root .cs-media, .cs-root .cs-details { opacity: 0; transform: none; filter: none; transition: opacity 120ms ease-out }
          .cs-root[data-visible="true"] .cs-header, .cs-root[data-visible="true"] .cs-media, .cs-root[data-visible="true"] .cs-details { opacity: 1 }
          .cs-root .cs-chips > * { opacity: 0; transform: none; transition: opacity 120ms ease-out }
          .cs-root[data-visible="true"] .cs-chips > * { opacity: 1 }
          .cs-root .cs-bottom-hairline { opacity: 0; transform: none; transition: opacity 120ms ease-out }
          .cs-root[data-visible="true"] .cs-bottom-hairline { opacity: 1 }
        }
      `}</style>
    </section>
  );
}
