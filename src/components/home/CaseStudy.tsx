"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FileSearch } from "lucide-react";

function IconPuck({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex items-center justify-center" aria-hidden="true">
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-80 blur-[2px]" style={{ background: "linear-gradient(90deg,#CD1516,rgba(255,255,255,.55),#47CE0C)", transform: "scale(1.12)" }} />
      <span className="relative block rounded-full bg-white/10 ring-1 ring-white/15" style={{ width: 56, height: 56 }}>
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/0" />
        <span className="relative flex h-full w-full items-center justify-center text-white/90">
          {children}
        </span>
      </span>
    </span>
  );
}

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
        {/* Centered single container */}
        <div className="mx-auto mt-4 max-w-3xl">
          <article
            className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] sm:p-8"
          >
            <span className="why-hairline pointer-events-none absolute inset-x-0 -top-px h-[2px]" />
            <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />

            {/* Icon */}
            <div className="relative z-10 mb-4 flex justify-center">
              <IconPuck>
                <FileSearch width={24} height={24} strokeWidth={2} absoluteStrokeWidth className="text-white/90" />
              </IconPuck>
            </div>

            {/* Tag */}
            <div className="relative z-10 mb-4 flex justify-center">
              <span className="brand-chip inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold text-white ring-1 ring-white/15">
                Case Study — Recent Project
              </span>
            </div>

            {/* KPI chips */}
            <div className="relative z-10 mx-auto grid max-w-xl grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-2">
              <span className="brand-chip inline-flex min-h-[40px] items-center justify-center rounded-full px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/15">135,000 lbs</span>
              <span className="brand-chip inline-flex min-h-[40px] items-center justify-center rounded-full px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/15">12’ wide</span>
              <span className="brand-chip inline-flex min-h-[40px] items-center justify-center rounded-full px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/15">CO → TX</span>
              <span className="brand-chip inline-flex min-h-[40px] items-center justify-center rounded-full px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/15">7 days</span>
            </div>

            {/* Centered details */}
            <div className="relative z-10 mt-5 space-y-3 text-[15px] leading-relaxed text-white/85">
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

            {/* Action row */}
            <div className="relative z-10 mt-6 flex justify-center">
              <a
                href="/quote"
                className="group relative overflow-hidden rounded-lg bg-transparent px-6 py-3 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {/* base gradient layer: red -> soft white -> green */}
                <span className="pointer-events-none absolute inset-0 z-0 rounded-lg opacity-85 blur-[2px] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)]" />
                <span className="relative z-20">Request Something Similar</span>
                {/* hover overlay reversed order with same softness */}
                <div className="pointer-events-none absolute inset-0 z-0 rounded-lg bg-gradient-to-r from-[#47CE0C] via-[rgba(255,255,255,.45)] to-[#CD1516] opacity-0 blur-[2px] transition-all duration-500 ease-out group-hover:opacity-85" />
              </a>
            </div>
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
