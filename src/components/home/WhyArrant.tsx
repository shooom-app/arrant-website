"use client";

type Pillar = {
  chip: string;
  title: string;
  body: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
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
      "Fit-for-purpose modern fleet up to 147,000 lbs, 120 ft length, 14 ft width.",
    Icon: IconEquipment,
  },
  {
    chip: "Experience",
    title: "People",
    body:
      "Veteran heavy-haul drivers & project managers. 24/7 dispatch and updates.",
    Icon: IconPeople,
  },
  {
    chip: "Execution",
    title: "Process",
    body:
      "In-house permitting, routing, pilot cars, real-time tracking across states.",
    Icon: IconProcess,
  },
  {
    chip: "Compliance",
    title: "Safety",
    body:
      "FMCSA compliant, RMIS-verified, battery-hazard trained. Insurance to $5M.",
    Icon: IconSafety,
  },
];

export default function WhyArrant() {
  return (
    <section aria-labelledby="why-arrant" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <h2 id="why-arrant" className="mb-6 text-2xl font-bold text-white sm:text-3xl">
          Why Customers Choose Arrant
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ chip, title, body, Icon }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition
                         hover:bg-white/8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              {/* Accent border that echoes the hero (red→green) */}
              <span className="pointer-events-none absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-[#CD1516] via-white/20 to-[#47CE0C] opacity-70" />

              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-[#CD1516]/25 px-2.5 py-0.5 text-[10px] font-semibold text-white/90 ring-1 ring-white/10">
                  {chip}
                </span>
                <Icon className="h-6 w-6 fill-white/70 stroke-none opacity-80 transition group-hover:opacity-100" />
              </div>

              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{body}</p>

              {/* Hover lift (matches hero's refined motion feeling) */}
              <div className="absolute inset-0 scale-[0.98] opacity-0 transition
                              group-hover:scale-100 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}