"use client";

/**
 * ArrantLoader
 *
 * Variants:
 * - SVG (default): fast, <10 KB, path-draw red chevron with green underline, wordmark fade/track-in.
 * - Lottie: drop a Bodymovin JSON at /public/arrant_loader.json and set variant="lottie".
 * - Rive: drop a .riv at /public/rive/arrant_loader.riv and set variant="rive".
 *
 * Progress: pass progress 0..1 to drive future route/data loading if available.
 *
 * File size targets: SVG < 10 KB; Lottie JSON < 150 KB.
 */

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { prefersReducedMotion } from "@/lib/media";

const Lottie = dynamic(() => import("lottie-react").then((m) => m.default), { ssr: false });
const RiveComponent = dynamic(
  () => import("@rive-app/react-canvas").then((m) => (m as any).RiveComponent),
  { ssr: false }
);

type Variant = "svg" | "lottie" | "rive";

export interface ArrantLoaderProps {
  show: boolean;
  variant?: Variant;
  progress?: number; // optional 0..1 for future use
}

export default function ArrantLoader({ show, variant = "svg", progress }: ArrantLoaderProps) {
  const reduced = prefersReducedMotion();
  const controls = useAnimationControls();

  useEffect(() => {
    if (variant !== "svg") return;
    if (show && !reduced) controls.start("run");
    else controls.start("out");
  }, [show, reduced, variant, controls]);

  if (!show) return null;

  return (
    <div aria-hidden={!show} className="fixed inset-0 z-[9999] grid place-items-center bg-[#0b0b0c]">
      {variant === "svg" && <SVGProgressLoader controls={controls} reduced={reduced} progress={progress ?? 0} />}

      {variant === "lottie" && <LottieLoader />}

      {variant === "rive" && (
        <div className="grid place-items-center">
          <RiveComponent src="/rive/arrant_loader.riv" stateMachines="Load" />
          <div className="mt-6 text-[12px] tracking-[0.24em] text-zinc-300">ARRANT SOLUTIONS</div>
        </div>
      )}
    </div>
  );
}

function SVGProgressLoader({ controls, reduced, progress }: { controls: any; reduced: boolean; progress: number }) {
  const pct = Math.max(0, Math.min(1, progress));
  const size = 160;

  return (
    <div className="grid place-items-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Base: grayscale/graphite version of the logo */}
        <img
          src="/arrant_logo.svg"
          alt="Arrant Solutions logo"
          className="absolute inset-0 h-full w-full object-contain opacity-60"
          style={{ filter: "grayscale(1) brightness(0.7)" }}
        />
        {/* Reveal: colored logo clipped by progress width */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden style={{ width: `${pct * 100}%` }}>
          <img
            src="/arrant_logo.svg"
            alt=""
            className="h-full w-full object-contain"
            style={{ willChange: "transform" }}
          />
        </div>
      </div>

      <motion.div
        className="mt-6 text-[12px] tracking-[0.24em] text-zinc-300"
        initial={{ opacity: 0, letterSpacing: "0.12em" }}
        animate={{ opacity: pct > 0.1 ? 1 : 0.6, letterSpacing: "0.24em" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        ARRANT SOLUTIONS
      </motion.div>
      <div className="mt-2 text-xs text-zinc-400">{Math.round(pct * 100)}%</div>
    </div>
  );
}

function LottieLoader() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/arrant_loader.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (alive) setData(j); })
      .catch(() => { /* noop */ });
    return () => { alive = false; };
  }, []);

  return (
    <div className="grid place-items-center">
      {data ? (
        <Lottie animationData={data} loop autoplay style={{ width: 220, height: 220 }} />
      ) : (
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="12" fill="#d61f2a" />
        </svg>
      )}
      <div className="mt-6 text-[12px] tracking-[0.24em] text-zinc-300">ARRANT SOLUTIONS</div>
    </div>
  );
}


