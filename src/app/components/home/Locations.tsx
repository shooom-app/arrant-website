"use client";
import SectionTitle from "@/components/SectionTitle";

export default function Locations() {
  const hubs = [
    { city: "Brighton, CO", note: "Energy corridor access" },
    { city: "Williston, ND", note: "Oil & gas region" },
    { city: "Houston, TX", note: "Gulf energy gateway" },
  ];
  return (
    <section aria-labelledby="locations" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <h2 id="locations" className="sr-only">Strategic Operating Hubs</h2>
        <SectionTitle title="Strategic Operating Hubs" />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {hubs.map((h) => (
            <div key={h.city} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/8">
              <div className="text-base font-semibold text-white">{h.city}</div>
              <div className="mt-1 text-sm text-white/80">{h.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
