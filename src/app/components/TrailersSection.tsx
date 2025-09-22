export default function TrailersSection() {
  const TRAILERS: { title: string; slug: string; description: string }[] = [
    {
      title: "13-Axle Trailer (RGN / Superload)",
      slug: "13-axle-trailer-rgn-superload",
      description:
        "A removable gooseneck heavy-haul trailer configured with thirteen axles to spread weight and lower ground pressure for superload moves. Ideal for oversized freight such as transformers, generators, and industrial modules, it keeps deck height low and supports state-by-state permitting for safe, compliant equipment transport across U.S. routes.",
    },
    {
      title: "9-Axle Trailer",
      slug: "9-axle-trailer",
      description:
        "A high-capacity heavy-haul platform with nine axle lines that balances payload and maneuverability for regional and interstate work. Used for compact superloads and oversized freight—presses, turbines, large excavators—it improves weight distribution for permits and bridge laws while keeping equipment transport efficient and cost-effective.",
    },
    {
      title: "Lowboy Trailer",
      slug: "lowboy-trailer",
      description:
        "A drop-deck design with an ultra-low main deck to reduce loaded height and clear bridges, signs, and utilities. Perfect for tall equipment transport—dozers, cranes, drilling rigs—the low center of gravity enhances stability and safety while meeting heavy-haul requirements for oversized freight on U.S. routes.",
    },
    {
      title: "Perimeter Frame Trailer",
      slug: "perimeter-frame-trailer",
      description:
        "An open-center trailer that supports cargo along outer rails, allowing custom cribbing and a lower center of gravity for irregular shapes. Frequently chosen for transformers, generators, and vessels, it enables multi-point securement and optimized weight distribution for heavy-haul permits and safe equipment transport.",
    },
    {
      title: "Multi-Axle Trailer (Configurable)",
      slug: "multi-axle-trailer-configurable",
      description:
        "A modular heavy-haul system that scales axle lines—and can add jeeps or boosters—to match load weight, dimensions, and route restrictions. Ideal for oversized freight and industrial modules, it adapts to state-by-state permitting and bridge laws to keep equipment transport compliant without sacrificing schedule.",
    },
    {
      title: "Dual-Lane Trailer",
      slug: "dual-lane-trailer",
      description:
        "Two parallel deck beams distribute ultra-heavy superloads across a wider footprint to reduce ground pressure and meet bridge-law thresholds. Common for very wide transformers and long vessels, dual-lane systems increase stability and permitting flexibility for oversized freight on complex U.S. heavy-haul corridors.",
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8">
      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-10 sm:py-12">
        {TRAILERS.map((t) => {
          const id = `${t.slug}-heading`;
          return (
            <article key={t.slug} aria-labelledby={id} className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition hover:ring-white/20">
              <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
              <h3 id={id} className="relative z-10 text-lg font-semibold text-white">{t.title}</h3>
              <p className="relative z-10 mt-2 text-sm leading-relaxed text-white/85">{t.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}


