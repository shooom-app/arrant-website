"use client";
import { useEffect, useMemo, useState } from "react";

const ITEMS = [
  "DOT #3554296",
  "MC #1332806",
  "FMCSA Compliant",
  "RMIS Verified",
  "Insurance to $5M",
  "Zero-Incident Record",
  "IRP / IFTA Compliant",
  "Permits & Escorts In-House",
];

export default function TrustStrip() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [duration, setDuration] = useState<string>("18s");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  // Make the loop noticeably faster on small screens where items appear larger
  useEffect(() => {
    if (typeof window === "undefined") return;
    const compute = () => {
      const w = window.innerWidth;
      // Respect reduced motion: run slower but still smooth
      if (reduced) {
        setDuration("40s");
        return;
      }
      // Speed up on small screens for a snappier feel and to avoid perceived stalls
      // previous: <400 => 9s, <640 => 10s, <1024 => 13s, else 16s
      // new:      <400 => 7s, <640 => 8s,  <1024 => 12s, else 15s
      const next = w < 400 ? "7s" : w < 640 ? "8s" : w < 1024 ? "12s" : "15s";
      setDuration(next);
    };
    compute();
    window.addEventListener("resize", compute, { passive: true });
    return () => window.removeEventListener("resize", compute);
  }, [reduced]);

  // A + A for seamless loop
  const LOOP = useMemo(() => [...ITEMS, ...ITEMS], []);

  return (
    <section aria-label="Trust and compliance" className="relative z-10 select-none">
      <div className="mx-auto max-w-7xl px-4">
        {/* Extra vertical space + edge mask so hover never looks cramped or clips */}
        <div
          className="trust-wrap trust-mask overflow-hidden py-5 sm:py-7"
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
          data-paused={paused ? "true" : "false"}
        >
          {/* TRACK — NO gap! use mr-* on items so –50% frame equals start */}
          <div
            data-testid="trust-track"
            className={["flex", "trust-run", "cursor-default"].join(" ")}
            style={{ "--trustDur": duration } as React.CSSProperties}
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