"use client";

/**
 * GalleryCtaSection
 * Reusable single-container carousel with CTA bar, optimized for mixed image sizes.
 *
 * Props:
 * - images: Array<{ src: string; alt: string; caption?: string }>
 * - initialIndex?: number (default 0)
 * - autoAdvance?: boolean (default false)
 * - autoAdvanceMs?: number (default 5000)
 * - onSlideChange?: (index: number) => void
 *
 * Behavior:
 * - Object-contain viewer (no cropping). Landscape/portrait/square supported.
 * - Keyboard (←/→), buttons, dots, swipe (touch/pointer) navigation.
 * - Optional auto-advance; pauses on hover/focus and resumes when idle.
 * - Lazy-loads non-visible images; prefetches next/prev for smooth transitions.
 * - Accessibility: labelled region, aria-labels on controls, focus-visible rings.
 *
 * Usage:
 *   <GalleryCtaSection images={[{src:"/a.jpg", alt:"Truck"}, ...]} />
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = { src: string; alt: string; caption?: string };

type Props = {
  images: GalleryImage[];
  initialIndex?: number;
  autoAdvance?: boolean;
  autoAdvanceMs?: number;
  onSlideChange?: (index: number) => void;
};

export default function GalleryCtaSection({
  images,
  initialIndex = 0,
  autoAdvance = false,
  autoAdvanceMs = 5000,
  onSlideChange,
}: Props) {
  const numSlides = images?.length ?? 0;
  const [index, setIndex] = useState(Math.min(Math.max(initialIndex, 0), Math.max(numSlides - 1, 0)));
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const goto = useCallback(
    (next: number) => {
      if (numSlides === 0) return;
      const wrapped = (next + numSlides) % numSlides;
      setIndex(wrapped);
      onSlideChange?.(wrapped);
    },
    [numSlides, onSlideChange]
  );

  const next = useCallback(() => goto(index + 1), [goto, index]);
  const prev = useCallback(() => goto(index - 1), [goto, index]);

  // Auto-advance
  useEffect(() => {
    if (!autoAdvance || paused || numSlides <= 1) return;
    const id = window.setInterval(next, Math.max(2500, autoAdvanceMs));
    return () => window.clearInterval(id);
  }, [autoAdvance, autoAdvanceMs, paused, next, numSlides]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const node = containerRef.current;
    node?.addEventListener("keydown", onKey);
    return () => node?.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Prefetch neighboring images
  useEffect(() => {
    if (numSlides <= 1) return;
    const neighbors = [images[(index + 1) % numSlides], images[(index - 1 + numSlides) % numSlides]];
    neighbors.forEach((img) => {
      if (!img?.src) return;
      const i = new window.Image();
      i.src = img.src;
      // decode() can throw for cross-origin; ignore
      (i.decode?.() as Promise<void> | undefined)?.catch(() => void 0);
    });
  }, [index, images, numSlides]);

  // Swipe handling
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    let delta = 0;
    let dragging = false;
    const onDown = (e: PointerEvent) => {
      dragging = true;
      startX = e.clientX;
      delta = 0;
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      delta = e.clientX - startX;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      const threshold = 40; // px
      if (delta > threshold) prev();
      else if (delta < -threshold) next();
    };
    el.addEventListener("pointerdown", onDown, { passive: true });
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerup", onUp, { passive: true });
    el.addEventListener("pointercancel", onUp, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, [next, prev]);

  const hasSlides = numSlides > 0;
  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  return (
    <section
      aria-labelledby="gallery-cta"
      className="relative z-0 overflow-hidden bg-neutral-950/95 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Smoky drifting brand blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-[55vh] w-[55vh] rounded-full opacity-[0.18] blur-3xl" style={{ background: "radial-gradient(50% 50% at 50% 50%, #CD1516 0%, rgba(205,21,22,0) 70%)", animation: "gc-driftA 18s ease-in-out infinite" }} />
        <div className="absolute -bottom-24 -right-24 h-[60vh] w-[60vh] rounded-full opacity-[0.18] blur-3xl" style={{ background: "radial-gradient(50% 50% at 50% 50%, #47CE0C 0%, rgba(71,206,12,0) 70%)", animation: "gc-driftB 20s ease-in-out infinite" }} />
        <style jsx global>{`
          @keyframes gc-driftA { 0%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(4%, -2%, 0) scale(1.08)} 100%{transform:translate3d(0,0,0) scale(1)} }
          @keyframes gc-driftB { 0%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(-4%, 3%, 0) scale(1.06)} 100%{transform:translate3d(0,0,0) scale(1)} }
        `}</style>
      </div>

      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col px-4 pb-8 pt-10 md:min-h-[90vh] md:px-6 md:pt-14">
        <h2 id="gallery-cta" className="sr-only">Recent moves & capabilities</h2>

        {/* Viewer */}
        <div
          ref={containerRef}
          className="group relative mx-auto w-full outline-none"
          tabIndex={0}
          role="region"
          aria-label="Photo gallery"
        >
          <div
            className="relative h-[56vh] rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur-sm md:h-[62vh] shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden"
          >
            {/* Track */}
            <div
              ref={trackRef}
              className="flex h-full w-full touch-pan-y select-none"
              style={{
                transform: `translate3d(${-index * 100}%,0,0)`,
                transition: reducedMotion ? "none" : "transform 520ms cubic-bezier(0.2,0.6,0.2,1)",
                willChange: "transform",
              }}
            >
              {hasSlides ? (
                images.map((img, i) => (
                  <div key={img.src + i} className="relative h-full w-full shrink-0">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading={i === 0 ? "eager" : "lazy"}
                      priority={i === 0}
                      sizes="(min-width: 768px) 100vw, 100vw"
                      className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Caption + counter */}
                    {img.caption ? (
                      <div className="absolute left-3 bottom-3 rounded-xl bg-black/45 px-2.5 py-1 text-xs ring-1 ring-white/15 backdrop-blur-sm">
                        {img.caption}
                      </div>
                    ) : null}
                    <div className="absolute right-3 bottom-3 rounded-xl bg-black/45 px-2.5 py-1 text-xs ring-1 ring-white/15 backdrop-blur-sm">
                      {i + 1} / {numSlides}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="rounded-2xl bg-gradient-to-r from-[#CD1516]/25 via-white/10 to-[#47CE0C]/25 px-6 py-4 text-white/85 ring-1 ring-white/10">
                    No recent photos available.
                  </div>
                </div>
              )}
            </div>

            {/* Arrows */}
            {hasSlides && numSlides > 1 && (
              <>
                <button
                  aria-label="Previous"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  aria-label="Next"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* Dots */}
          {hasSlides && numSlides > 1 && (
            <div className="mt-3 flex items-center justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goto(i)}
                  className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/25 transition ${i === index ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10">
          <div className="rounded-3xl bg-gradient-to-r from-[#CD1516]/75 via-white/10 to-[#47CE0C]/75 p-5 ring-1 ring-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.35)] md:p-7">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold md:text-2xl">Ready to move your next oversize load?</h3>
                <p className="mt-1 text-white/85">Partner with the heavy-haul experts trusted by energy and industry leaders.</p>
              </div>
              <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
                <Link
                  href="/quote"
                  className="group relative overflow-hidden rounded-lg bg-[#CD1516] px-4 py-2 text-center font-semibold text-white shadow-sm transition hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  Get instant quote
                </Link>
                <a
                  href="tel:+1-555-555-5555"
                  className="rounded-lg px-4 py-2 text-center font-medium text-white ring-1 ring-white/20 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  Call dispatch 24/7
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



