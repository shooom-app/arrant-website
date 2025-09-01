"use client";

export default function Locations() {
  const hubs = [
    { city: "Brighton, CO", note: "Energy corridor access" },
    { city: "Williston, ND", note: "Oil & gas region" },
    { city: "Houston, TX", note: "Gulf energy gateway" },
  ];
  return (
    <section aria-labelledby="locations" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <h2 id="locations" className="mb-6 text-2xl font-bold text-white sm:text-3xl">
          Strategic Operating Hubs
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {hubs.map((h) => (
            <div
              key={h.city}
              className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <div className="text-base font-semibold text-white">{h.city}</div>
              <div className="text-sm text-white/80 mt-1">{h.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
