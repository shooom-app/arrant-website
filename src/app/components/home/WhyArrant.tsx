"use client";

/**
 * Why Arrant — Hero-inspired design
 * - Animated gradient hairline (top) that slowly sweeps left→right
 * - Gradient "chip" like the primary CTA
 * - Glassy icon puck like the secondary CTA
 * - Subtle lift + glow on hover, no heavy motion
 * - Proof tags to make each pillar concrete
 */

type Pillar = {
  chip: string;
  title: string;
  body: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  proofs: string[];
};

const IconEquipment = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M3 14h12a3 3 0 0 1 3 3v1h3v2h-5v-3a1 1 0 0 0-1-1H3v-2Z" />
    <rect x="3" y="7" width="14" height="5" rx="1" />
    <circle cx="7" cy="20" r="2" />
    <circle cx="17" cy="20" r="2" />
  </svg>
);
const IconPeople = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="9" r="3" />
    <path d="M2 20a6 6 0 0 1 12 0v1H2v-1Z" />
    <path d="M13 20a5 5 0 0 1 9 0v1h-9v-1Z" />
  </svg>
);
const IconProcess = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M4 7h8l-2-2M20 17h-8l2 2" />
    <rect x="3" y="7" width="8" height="5" rx="1" />
    <rect x="13" y="12" width="8" height="5" rx="1" />
  </svg>
);
const IconSafety = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 3l7 3v6c0 4.418-3.582 7-7 9-3.418-2-7-4.582-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-5" />
  </svg>
);

const pillars: Pillar[] = [
  {
    chip: "Capacity",
    title: "Equipment",
    body:
      "Fit-for-purpose modern fleet up to 165,000 lbs, 143 ft length, 20 ft width.",
    proofs: ["13-axle / 9-axle", "Perimeter & lowboy"],
    Icon: IconEquipment,
  },
  {
    chip: "Experience",
    title: "People",
    body:
      "Veteran heavy-haul drivers & project managers.",
    proofs: ["Battery hazard trained", "Operator-first culture"],
    Icon: IconPeople,
  },
  {
    chip: "Execution",
    title: "Process",
    body:
      "In-house permitting, routing, pilot cars, and real-time tracking across states.",
    proofs: ["Multi-state ready", "Rapid mobilization"],
    Icon: IconProcess,
  },
  {
    chip: "Compliance",
    title: "Safety",
    body:
      "FMCSA compliant, RMIS-verified, fully insured up to $5M. Zero-incident case studies.",
    proofs: ["DOT #3554296", "MC #1332806"],
    Icon: IconSafety,
  },
];

export default function WhyArrant() {
  return (
    <section aria-labelledby="why-arrant" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        {/* Centered title w/ hero-style underline */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="why-arrant" className="text-2xl font-bold text-white sm:text-3xl">
          Why Customers Choose Arrant
        </h2>
          <div className="mx-auto mt-4 h-[2px] w-36 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-80" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ chip, title, body, proofs, Icon }) => (
            <article
              key={title}
              className="why-card group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-[2px]
                         transition will-change-transform hover:-translate-y-0.5 hover:bg-white/8 hover:ring-white/20
                         hover:shadow-[0_16px_60px_rgba(0,0,0,0.35)]"
            >

              <div className="mb-3 flex items-center justify-between">
                {/* gradient chip (hero primary vibe) */}
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold text-white ring-1 ring-white/10"
                  style={{ background: "linear-gradient(90deg,#CD1516 0%,#47CE0C 100%)" }}
                >
                  {chip}
                </span>

                {/* glassy icon puck (hero secondary vibe) */}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-white/90 backdrop-blur-sm">
                  <Icon className="h-4 w-4 fill-current opacity-90" />
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{body}</p>

              {/* proof tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {proofs.map((p) => (
                  <span
                    key={p}
                    className="rounded-full bg-white/6 px-2.5 py-1 text-xs text-white/85 ring-1 ring-white/10"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Scoped CSS for small polish */}
      <style jsx global>{`
        .why-card {
          /* keep edges super-smooth */
          border-radius: 1rem;
        }
      `}</style>
    </section>
  );
}
