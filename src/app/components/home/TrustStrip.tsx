"use client";
import { useEffect, useMemo, useState } from "react";

const ITEMS = [
  "DOT #3554296",
  "MC #1332806",
  "FMCSA Compliant",
  "RMIS Verified",
  "Insurance to $5M",
  "Zero-Incident Record",
];

export default function TrustStrip() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  // A + A for seamless loop
  const LOOP = useMemo(() => [...ITEMS, ...ITEMS], []);

  return (
    <section aria-label="Trust and compliance" className="relative z-10 select-none">
      <div className="mx-auto max-w-7xl px-4">
        {/* Extra vertical space + edge mask so hover never looks cramped or clips */}
        <div
          className="trust-wrap trust-mask overflow-hidden py-5 sm:py-7"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
          data-paused={paused ? "true" : "false"}
        >
          {/* TRACK — NO gap! use mr-* on items so –50% frame equals start */}
          <div
            data-testid="trust-track"
            className={["flex", "trust-run", "cursor-default"].join(" ")}
            style={{ "--trustDur": reduced ? "60s" : "32s" } as React.CSSProperties}
            role="list"
            aria-live="polite"
          >
            {LOOP.map((label, i) => (
              <button
                key={`${label}-${i}`}
                type="button"
                role="listitem"
                title={label}
                className="min-w-fit mr-3 sm:mr-4 rounded-lg bg-white/5 px-4 py-2
                           text-xs sm:text-sm text-white/85 ring-1 ring-white/10
                           transition will-change-transform hover:bg-white/10
                           hover:shadow-[0_6px_22px_rgba(0,0,0,0.35)]
                           focus:outline-none focus:ring-2 focus:ring-white/30
                           active:scale-[0.99] hover:scale-[1.02]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Divider moved to global SectionDivider; remove local hairline to avoid double lines */}
    </section>
  );
}