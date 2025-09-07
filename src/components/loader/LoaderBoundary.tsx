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
  const failsafeRef = useRef<number | null>(null);
  const isFirstLoadRef = useRef<boolean>(true);
  const completeRef = useRef<number | null>(null);
  const idleRef = useRef<number | null>(null);

  useEffect(() => {
    // Skip showing the loader on the very first render to avoid flash-after-content
    if (isFirstLoadRef.current) {
      isFirstLoadRef.current = false;
      return;
    }

    // Clear timers
    if (delayRef.current) clearTimeout(delayRef.current);
    if (failsafeRef.current) clearTimeout(failsafeRef.current);
    if (completeRef.current) clearTimeout(completeRef.current);
    if (idleRef.current) {
      // cancel idle callback
      const win = window as Window & {
        requestIdleCallback?: (cb: (deadline: IdleDeadline) => void, opts?: { timeout?: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };
      if (typeof win.cancelIdleCallback === "function") win.cancelIdleCallback(idleRef.current);
      else clearTimeout(idleRef.current);
      idleRef.current = null;
    }

    // Heuristic to avoid showing on fast navigations: if the browser reports idle before our delay, skip showing.
    let shouldShow = true;
    const win = window as Window & {
      requestIdleCallback?: (cb: (deadline: IdleDeadline) => void, opts?: { timeout?: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof win.requestIdleCallback === "function") {
      idleRef.current = win.requestIdleCallback(() => { shouldShow = false; }, { timeout: 220 });
    } else {
      idleRef.current = window.setTimeout(() => { shouldShow = false; }, 200);
    }

    // Delay showing to avoid flashes on fast navigations
    delayRef.current = window.setTimeout(() => {
      if (!shouldShow) return;
      setShow(true);
      setProgress(0);
      const startedAt = performance.now();
      const tick = () => {
        const elapsed = performance.now() - startedAt;
        const pct = Math.min(1, elapsed / 1400); // ~1.4s to 100%
        setProgress(pct);
        if (pct < 1) {
          requestAnimationFrame(tick);
        } else {
          // brief hold then fade out (handled inside ArrantLoader)
          completeRef.current = window.setTimeout(() => setShow(false), 220);
        }
      };
      requestAnimationFrame(tick);
    }, 250);
    // Hard timeout safety
    failsafeRef.current = window.setTimeout(() => setShow(false), 10000);

    return () => {
      if (delayRef.current) clearTimeout(delayRef.current);
      if (failsafeRef.current) clearTimeout(failsafeRef.current);
      if (completeRef.current) clearTimeout(completeRef.current);
      if (idleRef.current) {
        const win = window as Window & { cancelIdleCallback?: (id: number) => void };
        if (typeof win.cancelIdleCallback === "function") win.cancelIdleCallback(idleRef.current);
        else clearTimeout(idleRef.current);
      }
    };
  }, [pathname]);

  // Broadcast visibility changes so header can coordinate its entrance timing
  useEffect(() => {
    const ev = new CustomEvent("app:loader-visibility", { detail: { show } });
    window.dispatchEvent(ev);
  }, [show]);

  return (
    <>
      <ArrantLoader show={show} variant={variant} progress={progress} />
      {children}
    </>
  );
}


