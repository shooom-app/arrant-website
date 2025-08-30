"use client";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50" aria-hidden="true">
      {/* Neutral base (no color cast) */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0d0f12,#111317)]" />

      {/* Cinematic monochrome smoke (visible + elegant) */}
      <div className="absolute -inset-24 overflow-hidden">
        {/* Main smoke blob A */}
        <div
          className="absolute left-[-12%] top-[-16%] h-[150vmax] w-[150vmax]
                     rounded-full bg-white/10 blur-[160px] will-change-transform animate-smokeA mix-blend-overlay"
        />
        {/* Main smoke blob B */}
        <div
          className="absolute right-[-14%] bottom-[-18%] h-[150vmax] w-[150vmax]
                     rounded-full bg-white/10 blur-[180px] will-change-transform animate-smokeB mix-blend-overlay"
        />

        {/* VERY subtle brand rims (so it never turns brown) */}
        <div
          className="absolute left-[-8%] top-[25%] h-[90vmax] w-[90vmax]
                     rounded-full bg-[#CD1516]/[0.06] blur-[140px] will-change-transform animate-rimRed mix-blend-screen"
        />
        <div
          className="absolute right-[-8%] bottom-[20%] h-[90vmax] w-[90vmax]
                     rounded-full bg-[#47CE0C]/[0.07] blur-[140px] will-change-transform animate-rimGreen mix-blend-screen"
        />
      </div>

      {/* Soft vignette (just enough to frame, not crush) */}
      <div className="absolute inset-0 [mask-image:radial-gradient(78%_70%_at_50%_45%,black,transparent)] bg-black/18" />

      {/* Micro grain to kill banding */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-soft-light
                      bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_2px)]" />
    </div>
  );
}


