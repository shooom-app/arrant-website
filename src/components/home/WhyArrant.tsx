"use client";

import { Truck, Users, Route, ShieldCheck } from "lucide-react";

/**
 * Why Arrant — Hero-inspired design with Lucide icons
 */

type Pillar = {
  chip: string;
  title: string;
  body: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  proofs: string[];
};

function IconPuck({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex items-center justify-center" aria-hidden="true">
      {/* Brand gradient halo outside the puck (no split fill) */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-70 blur-[2px]"
        style={{ background: "linear-gradient(90deg,#CD1516,rgba(255,255,255,.55),#47CE0C)", transform: "scale(1.08)" }}
      />
      {/* Neutral glass puck */}
      <span className="relative block rounded-full bg-white/10 ring-1 ring-white/15"
            style={{ width: 48, height: 48 }}>
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/0" />
        <span className="relative flex h-full w-full items-center justify-center text-white/90">
          {children}
        </span>
      </span>
    </span>
  );
}

const pillars: Pillar[] = [
  { chip: "Capacity", title: "Equipment", body: "Fit-for-purpose modern fleet up to 147,000 lbs, 120 ft length, 14 ft width.", proofs: ["13-axle / 9-axle", "Perimeter & lowboy"], Icon: (p) => <Truck {...p} /> },
  { chip: "Experience", title: "Crew", body: "Veteran heavy-haul drivers & project managers with 24/7 dispatch and updates.", proofs: ["Battery hazard trained", "Operator-first culture"], Icon: (p) => <Users {...p} /> },
  { chip: "Execution", title: "Process", body: "In-house permitting, routing, pilot cars, and real-time tracking across states.", proofs: ["Multi-state ready", "Rapid mobilization"], Icon: (p) => <Route {...p} /> },
  { chip: "Compliance", title: "Safety", body: "FMCSA compliant, RMIS-verified, fully insured up to $5M. Zero-incident case studies.", proofs: ["DOT #3554296", "MC #1332806"], Icon: (p) => <ShieldCheck {...p} /> },
];

export default function WhyArrant() {
  return (
    <section aria-labelledby="why-arrant" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="why-arrant" className="text-2xl font-bold text-white sm:text-3xl">Why Customers Choose Arrant</h2>
          <div className="mx-auto mt-4 h-[2px] w-36 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-80" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ chip, title, body, proofs, Icon }) => (
            <article
              key={title}
              tabIndex={0}
              className="why-card group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-[2px] transition will-change-transform hover:-translate-y-0.5 hover:bg-white/8 hover:ring-white/20 hover:shadow-[0_16px_60px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{ "--chip-angle": "90deg" } as React.CSSProperties}
            >
              <span className="why-hairline pointer-events-none absolute inset-x-0 -top-px h-[2px]" />

              {/* Row 1: centered icon puck */}
              <div className="mb-3 flex justify-center">
                <IconPuck>
                  <Icon width={20} height={20} strokeWidth={2} absoluteStrokeWidth className="text-white/90 group-hover:text-white" />
                </IconPuck>
              </div>

              {/* Row 2: title left, chip right */}
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <span
                  className="brand-chip inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold text-white ring-1 ring-white/15 transition"
                >
                  {chip}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-white/80">{body}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {proofs.map((p) => (
                  <span key={p} className="rounded-full bg-white/6 px-2.5 py-1 text-xs text-white/85 ring-1 ring-white/10">{p}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes arrantHairline { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        .why-hairline { background-image: linear-gradient(90deg,#CD1516 0%,rgba(255,255,255,.55) 50%,#47CE0C 100%); background-size:200% 100%; animation:arrantHairline 6s linear infinite; opacity:.9 }
        .why-card { border-radius:1rem; --brand-red:#CD1516; --brand-green:#47CE0C; --chip-angle:90deg }
        @media (prefers-reduced-motion: reduce) { .why-hairline { animation-duration: 12s } }

        /* Brand chip styling aligned with icon halo */
        .brand-chip {
          position: relative;
          background: linear-gradient(var(--chip-angle,90deg), var(--brand-red), rgba(255,255,255,.45) 50%, var(--brand-green));
          opacity: .9;
        }
        .brand-chip::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(to bottom, rgba(255,255,255,.06), rgba(255,255,255,.10));
          pointer-events: none;
        }
        .why-card:hover .brand-chip { transform: translateY(-1px); filter: brightness(1.02); box-shadow: 0 1px 6px rgba(0,0,0,.25) }
      `}</style>
    </section>
  );
}