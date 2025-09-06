"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/media";

type Variant = "svg" | "lottie" | "rive";

export interface ArrantLoaderProps {
  show: boolean;
  variant?: Variant;
  progress?: number; // 0..1 incoming progress (simulated or real)
}

export default function ArrantLoader({ show, variant = "svg", progress = 0 }: ArrantLoaderProps) {
  const reduced = prefersReducedMotion();

  // Keep mounted for fade-out even when `show` goes false
  const [visible, setVisible] = useState<boolean>(show);
  useEffect(() => {
    if (show) {
      setVisible(true);
      return;
    }
    const t = window.setTimeout(() => setVisible(false), 380); // exit fade duration
    return () => window.clearTimeout(t);
  }, [show]);

  // Smoothed display progress with monotonic eased-lerp
  const [display, setDisplay] = useState<number>(0);
  const targetRef = useRef<number>(0);
  const displayRef = useRef<number>(0);
  useEffect(() => { displayRef.current = display; }, [display]);
  useEffect(() => {
    const nextTarget = Math.max(0, Math.min(1, progress));
    // never regress
    targetRef.current = Math.max(targetRef.current, nextTarget);
  }, [progress]);

  useEffect(() => {
    if (reduced) {
      targetRef.current = 1;
      setDisplay(1);
      displayRef.current = 1;
      return;
    }
    let raf = 0 as number;
    const step = () => {
      const current = displayRef.current;
      const target = targetRef.current;
      const delta = (target - current) * 0.12; // eased-lerp smoothing
      const next = current + delta;
      const clamped = Math.max(current, Math.min(1, next)); // monotonic, no regress
      if (clamped !== current) {
        displayRef.current = clamped;
        setDisplay(clamped);
      }
      if (clamped < 1 && (show || clamped < target)) {
        raf = window.requestAnimationFrame(step);
      }
    };
    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [show, reduced]);

  if (!visible) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-[9999] grid place-items-center bg-[#0b0b0c]" style={{ opacity: show ? 1 : 0, transition: "opacity 360ms ease-in-out" }}>
      {variant === "svg" && <SVGAppleLoader progress={display} />}
    </div>
  );
}

function SVGAppleLoader({ progress }: { progress: number }) {
  const size = 160;
  const viewW = 200;
  const viewH = 200;
  const angleDeg = 10;
  const tan = Math.tan((angleDeg * Math.PI) / 180);
  const delta = viewH * tan; // horizontal shift for diagonal

  const clipId = useMemo(() => `reveal-${Math.random().toString(36).slice(2)}`, []);

  // Compute diagonal reveal polygon
  const xTop = Math.max(0, Math.min(viewW, progress * viewW));
  const xBottom = Math.max(0, Math.min(viewW, xTop - delta));

  // Optional ultra-subtle specular sweep near completion
  const showSweep = progress > 0.85;
  const sweepOpacity = Math.max(0, Math.min(0.06, (progress - 0.85) / 0.15 * 0.06));

  return (
    <div className="grid place-items-center">
      <svg width={size} height={size} viewBox={`0 0 ${viewW} ${viewH}`} className="block">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <polygon points={`0,0 0,${viewH} ${xBottom},${viewH} ${xTop},0`} />
          </clipPath>
        </defs>

        {/* Base: graphite version */}
        <image href="/arrant_logo.svg" x="0" y="0" width={viewW} height={viewH} style={{ filter: "grayscale(1) brightness(0.7)", opacity: 0.7 }} />

        {/* Color layer revealed by diagonal mask */}
        <g clipPath={`url(#${clipId})`}>
          <image href="/arrant_logo.svg" x="0" y="0" width={viewW} height={viewH} />

          {/* Optional specular sweep */}
          {showSweep && (
            <rect x={-viewW} y={0} width={viewW * 3} height={viewH} fill={`url(#grad-${clipId})`} opacity={sweepOpacity} style={{ transition: "opacity 240ms ease" }} />
          )}
        </g>

        {/* Gradient for specular sweep */}
        <defs>
          <linearGradient id={`grad-${clipId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle wordmark polish (opacity + tracking) */}
      <div className="mt-6 text-[12px] text-zinc-300" style={{ opacity: progress > 0.12 ? 1 : 0, letterSpacing: progress > 0.12 ? "0.24em" : "0.12em", transition: "opacity 400ms ease, letter-spacing 420ms ease" }}>
        ARRANT SOLUTIONS
      </div>
    </div>
  );
}
