"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Helpers
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// Start once when the section becomes visible (above-fold, IO, timeout)
function useStartOnce<T extends HTMLElement>() {
  const [start, setStart] = useState(false);
  const firedRef = useRef(false);
  const ioRef = useRef<IntersectionObserver | null>(null);
  const timerRef = useRef<number | null>(null);
  const elRef = useRef<T | null>(null);

  const fire = useCallback(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    setStart(true);
    ioRef.current?.disconnect();
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const checkNow = useCallback(() => {
    if (!elRef.current || firedRef.current) return;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const rect = elRef.current.getBoundingClientRect();
    // Consider visible if any portion intersects the viewport
    if (rect.top < vh && rect.bottom > 0) {
      fire();
    }
  }, [fire]);

  const ref = useCallback((node: T | null) => {
    elRef.current = node;
    ioRef.current?.disconnect();
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (!node) return;

    // Immediate visibility check
    // Use rAF to ensure layout is settled before measuring
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => checkNow());
    } else {
      checkNow();
    }
    if (firedRef.current) return;

    // IntersectionObserver primary path
    ioRef.current = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            fire();
            break;
          }
        }
      },
      { threshold: 0, rootMargin: "0px" }
    );
    ioRef.current.observe(node);

    // Fallbacks: user interactions and a short re-check
    timerRef.current = window.setTimeout(() => checkNow(), 1200);
    window.addEventListener("scroll", checkNow, { passive: true });
    window.addEventListener("resize", checkNow, { passive: true });
    window.addEventListener("load", checkNow, { passive: true });
  }, [checkNow, fire]);

  useEffect(() => {
    return () => {
      ioRef.current?.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", checkNow);
      window.removeEventListener("resize", checkNow);
      window.removeEventListener("load", checkNow);
    };
  }, [checkNow]);

  return { ref, start } as const;
}

// rAF tween 0→1 once; reduced-motion respected; Strict-Mode safe
function useTweenOnce(start: boolean, opts?: { durationMs?: number; delayMs?: number }) {
  const durationMs = opts?.durationMs ?? 1200;
  const delayMs = opts?.delayMs ?? 0;
  const [t, setT] = useState(0);
  const ranRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const safetyRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start || ranRef.current) return;
    ranRef.current = true;

    const reduced = !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      setT(1);
      return () => {
        ranRef.current = false;
      };
    }

    let base: number | null = null;
    const tick = (now: number) => {
      if (base === null) base = now + delayMs;
      const elapsed = Math.max(0, now - base);
      const raw = Math.min(1, elapsed / durationMs);
      setT(easeOutCubic(raw));
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    safetyRef.current = window.setTimeout(() => setT(1), durationMs + delayMs + 120);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (safetyRef.current) clearTimeout(safetyRef.current);
      ranRef.current = false;
    };
  }, [start, durationMs, delayMs]);

  return t;
}

function FleetStat(props: {
  label: string;
  unit: "lbs" | "ft";
  target: number;
  start: boolean;
  delayMs: number;
}) {
  const t = useTweenOnce(props.start, { durationMs: 2400, delayMs: props.delayMs });
  const value = Math.round(props.target * t);
  const formatted = useMemo(() => new Intl.NumberFormat("en-US").format(value), [value]);

  // Subtle, tasteful motion tied to progress t (0→1)
  const cardScale = 0.985 + 0.015 * t; // gentle ease-in scale
  const numberOpacity = 0.35 + 0.65 * t; // fade numbers in
  const numberLift = (1 - t) * 8; // lift down → up
  const unitOpacity = 0.3 + 0.7 * t;
  const dynamicShadow = `0 10px 40px rgba(0,0,0,${0.25 + 0.20 * t})`;

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10"
      style={{ transform: `translateZ(0) scale(${cardScale})`, boxShadow: dynamicShadow }}
    >
      {/* removed top outline */}
      <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
      <div className="relative z-10">
        <div className="text-white/70 text-[11px] uppercase tracking-[0.12em]">{props.label}</div>
        <div className="mt-2 flex items-baseline justify-center gap-2 text-2xl font-semibold text-white">
          <span
            className="tabular-nums will-change-transform"
            style={{ opacity: numberOpacity, transform: `translate3d(0, ${numberLift}px, 0)` }}
          >
            {formatted}
          </span>
          <span className="text-base text-white/80" style={{ opacity: unitOpacity }}>{props.unit}</span>
        </div>
      </div>
    </div>
  );
}

const chips = ["13-axle RGN", "9-axle", "Perimeter frame", "Multi-axle", "Lowboy"];

export default function EquipmentSnapshot() {
  const { ref, start } = useStartOnce<HTMLElement>();

  return (
    <section ref={ref} aria-labelledby="equipment" className="fleet-root relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <h2 id="equipment" className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">
          Our Specialized Fleet
        </h2>
        {/* debug removed */}
        <div className="mx-auto mb-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-70 sm:w-36" />

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <FleetStat label="Max Weight" unit="lbs" target={165000} start={start} delayMs={0} />
          <FleetStat label="Max Length" unit="ft" target={143} start={start} delayMs={120} />
          <FleetStat label="Max Width" unit="ft" target={20} start={start} delayMs={240} />
        </div>

        <hr className="my-6 border-white/10" />
        <ul className="flex flex-wrap justify-center gap-2 text-sm">
          {chips.map((c) => (
            <li key={c} className="rounded-full bg-white/5 px-3 py-1 text-white/85 ring-1 ring-white/10">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}


