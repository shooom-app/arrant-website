"use client";

const specs = [
  { label: "Max Weight", value: "147,000 lbs" },
  { label: "Max Length", value: "120 ft" },
  { label: "Max Width", value: "14 ft" },
];

const fleet = ["13-axle RGN", "9-axle", "Perimeter frame", "Multi-axle", "Lowboy"];

export default function EquipmentSnapshot() {
  return (
    <section aria-labelledby="equipment" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <h2 id="equipment" className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">
          Our Specialized Fleet
        </h2>
        <div className="mx-auto mb-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-70 sm:w-36" />

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          {specs.map((s) => {
            const parts = s.value.split(" ");
            const num = parts[0] ?? s.value;
            const unit = parts[1] ?? "";
            return (
              <div key={s.label} className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
                <div className="relative z-10">
                  <div className="text-white/70 text-[11px] uppercase tracking-[0.12em]">{s.label}</div>
                  <div className="mt-2 flex items-baseline justify-center gap-2 text-2xl font-semibold text-white">
                    <span className="tabular-nums">{num}</span>
                    <span className="text-base text-white/80">{unit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="my-6 h-[2px] w-full rounded-full bg-gradient-to-r from-[#CD1516] via-white/20 to-[#47CE0C]" />
        <ul className="flex flex-wrap justify-center gap-2 text-sm">
          {fleet.map((f) => (
            <li key={f} className="rounded-full bg-white/5 px-3 py-1 text-white/85 ring-1 ring-white/10">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
