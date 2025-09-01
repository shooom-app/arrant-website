"use client";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section aria-label="Get a quote" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#CD1516]/30 to-[#47CE0C]/30 p-8 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to move your next oversize load?
          </h2>
          <p className="mt-2 text-white/85">
            Partner with the heavy-haul experts trusted by energy and industry leaders.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="rounded-xl bg-[#CD1516] px-5 py-3 text-white font-semibold shadow-lg shadow-black/30 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Get instant quote
            </Link>
            <a
              href="tel:+1-000-000-0000"
              className="rounded-xl border border-white/30 px-5 py-3 text-white font-semibold backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Call dispatch 24/7
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
