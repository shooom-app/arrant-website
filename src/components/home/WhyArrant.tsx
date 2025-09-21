"use client";

import { Truck, Users, Route, ShieldCheck } from "lucide-react";

/**
 * Why Arrant — Hero-inspired design with Lucide icons
 */

type Pillar = {
  title: string;
  body: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
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
  { title: "Equipment", body: "Fit-for-purpose modern fleet up to 165,000 lbs, 143 ft length, 20 ft width.", Icon: (p) => <Truck {...p} /> },
  { title: "Crew", body: "Veteran heavy-haul drivers & project managers with 24/7 dispatch and updates.", Icon: (p) => <Users {...p} /> },
  { title: "Process", body: "In-house permitting, routing, pilot cars, and real-time tracking across states.", Icon: (p) => <Route {...p} /> },
  { title: "Safety", body: "FMCSA compliant, RMIS-verified, fully insured up to $5M. Zero-incident case studies.", Icon: (p) => <ShieldCheck {...p} /> },
];

export default function WhyArrant() {
  return (
    <section aria-labelledby="why-arrant" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="why-arrant" className="text-2xl font-bold text-white sm:text-3xl">Why Customers Choose Arrant</h2>
          <div className="mx-auto mt-4 h-[2px] w-36 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-80" />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ title, body, Icon }) => (
            <article
              key={title}
              tabIndex={0}
              className="why-card relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] focus:outline-none"
              style={{ "--chip-angle": "90deg" } as React.CSSProperties}
            >
              <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />

              {/* Row 1: centered icon puck */}
              <div className="relative z-10 mb-3 flex justify-center">
                <IconPuck>
                  <Icon width={20} height={20} strokeWidth={2} className="text-white/90" />
                </IconPuck>
              </div>

              {/* Row 2: title centered */}
              <h3 className="relative z-10 mb-2 text-xl font-semibold text-white">{title}</h3>

              <p className="relative z-10 text-sm leading-relaxed text-white/80">{body}</p>

            </article>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .why-card { border-radius:1rem; --brand-red:#CD1516; --brand-green:#47CE0C; --chip-angle:90deg }

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