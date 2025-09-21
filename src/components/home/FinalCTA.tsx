"use client";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section aria-label="Get a quote" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="group relative overflow-hidden rounded-3xl p-8 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] bg-neutral-900/60 backdrop-blur-sm">
          {/* Base neutral backdrop (keeps contrast and distinct look) */}
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden style={{
            background: "radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 60%), radial-gradient(120% 120% at 100% 100%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 60%)"
          }} />
          {/* Diagonal gradient sweep: visible by default on mobile; animates on hover for md+ */}
          <div
            className="pointer-events-none absolute -inset-y-0 -left-1/3 right-[-33%] -z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-x-[-20%] md:group-hover:translate-x-[20%] transition-[opacity,transform] duration-400 ease-in-out"
            aria-hidden
            style={{
              background: "linear-gradient(120deg, rgba(205,21,22,0.28), rgba(255,255,255,0.10) 45%, rgba(71,206,12,0.28))",
              willChange: "transform, opacity"
            }}
          />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to move your next oversize load?
          </h2>
          <p className="mt-2 text-white/85">
            Partner with the heavy-haul experts trusted by energy and industry leaders.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quote"
              prefetch
              className="group relative overflow-hidden rounded-xl bg-[#CD1516] px-5 py-3 text-white font-semibold shadow-lg shadow-black/30 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative z-10">Get instant quote</span>
            </Link>
            <a
              href="tel:+1-000-000-0000"
              className="relative overflow-hidden rounded-xl border border-white/30 px-5 py-3 text-white font-semibold backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "linear-gradient(120deg, rgba(205,21,22,0.22), rgba(255,255,255,0.10), rgba(71,206,12,0.22))" }} />
              <span className="relative">Call now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
