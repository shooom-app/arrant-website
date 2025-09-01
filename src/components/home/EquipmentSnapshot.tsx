"use client";

const specs = [
  { label: "Max Weight", value: "147,000 lbs" },
  { label: "Max Length", value: "120 ft" },
  { label: "Max Width", value: "14 ft" },
];

const fleet = [
  "13-axle RGN",
  "9-axle",
  "Perimeter frame",
  "Multi-axle",
  "Lowboy",
];

export default function EquipmentSnapshot() {
  return (
    <section aria-labelledby="equipment" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <h2 id="equipment" className="mb-6 text-2xl font-bold text-white sm:text-3xl">
          Our Specialized Fleet
        </h2>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {specs.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10"
            >
              <div className="text-white/60 text-xs uppercase tracking-wide">{s.label}</div>
              <div className="mt-1 text-lg font-semibold text-white">{s.value}</div>
            </div>
          ))}
        </div>

        <hr className="my-6 border-white/10" />
        <ul className="flex flex-wrap gap-2 text-sm">
          {fleet.map((f, i) => (
            <li
              key={f}
              className="rounded-full bg-white/5 px-3 py-1 text-white/85 ring-1 ring-white/10"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
