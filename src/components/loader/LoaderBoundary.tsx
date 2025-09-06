"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ArrantLoader from "./ArrantLoader";

// Simple, reliable loader for now: show briefly on initial mount and on route changes.
// Later, you can wire this to real data/loading signals and progress.
export default function LoaderBoundary({ children, variant = "svg" as const }: { children: React.ReactNode; variant?: "svg" | "lottie" | "rive"; }) {
  const pathname = usePathname();
  const [show, setShow] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const delayRef = useRef<number | null>(null);
  const minRef = useRef<number | null>(null);
  const failsafeRef = useRef<number | null>(null);

  useEffect(() => {
    // Immediately show loader on navigation (no delay) and ensure it stays at least 700ms
    if (delayRef.current) clearTimeout(delayRef.current);
    if (minRef.current) clearTimeout(minRef.current);
    if (failsafeRef.current) clearTimeout(failsafeRef.current);

    setShow(true);
    setProgress(0);
    // Simulate smooth progress for UX; replace with real signals when available
    const startedAt = performance.now();
    const tick = () => {
      const elapsed = performance.now() - startedAt;
      const pct = Math.min(1, elapsed / 1200); // ~1.2s to 100%
      setProgress(pct);
      if (pct < 1 && show) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // Minimum visible duration to prevent flash
    minRef.current = window.setTimeout(() => setShow(false), 900);
    // Hard timeout safety
    failsafeRef.current = window.setTimeout(() => setShow(false), 10000);

    return () => {
      if (delayRef.current) clearTimeout(delayRef.current);
      if (minRef.current) clearTimeout(minRef.current);
      if (failsafeRef.current) clearTimeout(failsafeRef.current);
    };
  }, [pathname]);

  return (
    <>
      <ArrantLoader show={show} variant={variant} progress={progress} />
      {children}
    </>
  );
}


