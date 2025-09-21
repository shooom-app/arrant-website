"use client";

import { useEffect } from "react";

export default function AnimGate() {
  useEffect(() => {
    const root = document.documentElement;
    const enable = () => {
      // Toggle to restart any CSS animations that were gated
      root.setAttribute("data-anim-ready", "1");
    };

    // Respect reduced motion: still show content immediately
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq?.matches) {
      enable();
      return;
    }

    // Delay to next frame to ensure styles are applied before enabling
    const id = requestAnimationFrame(() => enable());

    // Also listen for our loader visibility event to re-enable after overlay hides
    const onLoader = (e: Event) => {
      const detail = (e as CustomEvent<{ show: boolean }>).detail;
      if (detail && detail.show === false) {
        // Re-enable to retrigger gated animations on route changes
        requestAnimationFrame(() => enable());
      }
    };
    window.addEventListener("app:loader-visibility", onLoader as EventListener);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("app:loader-visibility", onLoader as EventListener);
    };
  }, []);

  return null;
}


