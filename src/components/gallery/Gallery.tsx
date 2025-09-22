"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  aspectRatio?: number; // default 16:9 = 1.777...
  onIndexChange?: (index: number) => void;
  className?: string;
}

export default function Gallery({ 
  images, 
  aspectRatio = 16 / 9, 
  onIndexChange,
  className = ""
}: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const numImages = images.length;
  const hasMultipleImages = numImages > 1;

  // Clamp index to valid range with wrap-around
  const normalizeIndex = useCallback((index: number) => {
    if (numImages === 0) return 0;
    return ((index % numImages) + numImages) % numImages;
  }, [numImages]);

  const goToIndex = useCallback((newIndex: number) => {
    if (numImages === 0) return;
    const normalizedIndex = normalizeIndex(newIndex);
    if (normalizedIndex === currentIndex) return;
    setCurrentIndex(normalizedIndex);
    onIndexChange?.(normalizedIndex);
  }, [currentIndex, normalizeIndex, numImages, onIndexChange]);

  const goNext = useCallback(() => goToIndex(currentIndex + 1), [currentIndex, goToIndex]);
  const goPrevious = useCallback(() => goToIndex(currentIndex - 1), [currentIndex, goToIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!hasMultipleImages) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goPrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          goNext();
          break;
        case "Home":
          e.preventDefault();
          goToIndex(0);
          break;
        case "End":
          e.preventDefault();
          goToIndex(numImages - 1);
          break;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKeyDown);
      return () => container.removeEventListener("keydown", handleKeyDown);
    }
  }, [hasMultipleImages, goPrevious, goNext, goToIndex, numImages]);

  // Touch/drag gestures
  useEffect(() => {
    if (!hasMultipleImages) return;

    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let isDragging = false;
    const threshold = 50; // px

    const handleStart = (clientX: number) => {
      startX = clientX;
      isDragging = true;
    };

    const handleEnd = (clientX: number) => {
      if (!isDragging) return;
      isDragging = false;
      
      const deltaX = clientX - startX;
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          goPrevious();
        } else {
          goNext();
        }
      }
    };

    // Mouse events
    const handleMouseDown = (e: MouseEvent) => handleStart(e.clientX);
    const handleMouseUp = (e: MouseEvent) => handleEnd(e.clientX);

    // Touch events
    const handleTouchStart = (e: TouchEvent) => handleStart(e.touches[0].clientX);
    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length > 0) {
        handleEnd(e.changedTouches[0].clientX);
      }
    };

    // Wheel events (Shift+wheel for horizontal scroll)
    const handleWheel = (e: WheelEvent) => {
      if (e.shiftKey && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        if (e.deltaX > 0) {
          goNext();
        } else {
          goPrevious();
        }
      }
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [hasMultipleImages, goPrevious, goNext]);

  // Preload next image on idle
  useEffect(() => {
    if (!hasMultipleImages || numImages <= 1) return;

    const nextIndex = normalizeIndex(currentIndex + 1);
    const nextImage = images[nextIndex];
    
    if (nextImage?.src) {
      const img = new window.Image();
      img.src = nextImage.src;
      // Decode on idle if available
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          img.decode?.().catch(() => {});
        });
      }
    }
  }, [currentIndex, images, hasMultipleImages, numImages, normalizeIndex]);

  if (numImages === 0) {
    return (
      <div className={`gallery-container ${className}`}>
        <div 
          className="gallery-frame bg-neutral-900/60 rounded-2xl ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          style={{ aspectRatio }}
        >
          <div className="flex h-full items-center justify-center text-white/70">
            No images available
          </div>
        </div>
      </div>
    );
  }

  const currentImage = images[currentIndex];
  const imageAlt = currentImage.alt || `Image ${currentIndex + 1}`;

  return (
    <div className={`gallery-container ${className}`}>
      {/* Main frame */}
      <div
        ref={containerRef}
        className="gallery-frame relative overflow-hidden bg-neutral-900/60 rounded-xl sm:rounded-2xl ring-1 ring-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.35)] sm:shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm cursor-grab active:cursor-grabbing select-none touch-manipulation"
        style={{ aspectRatio }}
        tabIndex={hasMultipleImages ? 0 : -1}
        role="img"
        aria-label={`${imageAlt}, image ${currentIndex + 1} of ${numImages}`}
      >
        {/* Background gradient for letterboxing */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/80" />
        
        {/* Current image */}
        <div className="relative h-full w-full">
          <Image
            src={currentImage.src}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 80vw, 95vw"
            priority={currentIndex === 0}
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />

          {/* Click zones: left = previous, right = next */}
          {hasMultipleImages && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={goPrevious}
                className="absolute inset-y-0 left-0 w-1/2 cursor-pointer focus:outline-none"
                style={{ background: "transparent" }}
              />
              <button
                type="button"
                aria-label="Next photo"
                onClick={goNext}
                className="absolute inset-y-0 right-0 w-1/2 cursor-pointer focus:outline-none"
                style={{ background: "transparent" }}
              />
            </>
          )}
        </div>

        {/* Caption overlay - responsive positioning */}
        {currentImage.caption && (
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
            <div className="rounded-lg sm:rounded-xl bg-black/70 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-white/90 backdrop-blur-sm ring-1 ring-white/15">
              {currentImage.caption}
            </div>
          </div>
        )}

        {/* Counter overlay - responsive positioning */}
        {hasMultipleImages && (
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
            <div className="rounded-lg sm:rounded-xl bg-black/70 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-white/90 backdrop-blur-sm ring-1 ring-white/15">
              <span className="sr-only">Image </span>
              {currentIndex + 1} / {numImages}
            </div>
          </div>
        )}
      </div>

      {/* Navigation arrows - responsive sizing and spacing */}
      {hasMultipleImages && (
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <button
            onClick={goPrevious}
            className="group relative overflow-hidden inline-flex h-12 w-12 sm:h-11 sm:w-11 items-center justify-center rounded-full text-white touch-manipulation focus:outline-none transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
            aria-label="Previous photo"
            style={{
              background: "linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.15) inset, 0 8px 24px rgba(0,0,0,0.25)",
              WebkitBackdropFilter: "blur(8px)",
              backdropFilter: "blur(8px)"
            }}
          >
            {/* Gloss highlight */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {/* Sheen sweep */}
            <span className="pointer-events-none absolute -inset-y-2 -left-1/2 h-[200%] w-1/3 rotate-[25deg] bg-white/25 blur-[6px] opacity-0 transition duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-60" />
            <ChevronLeft size={20} className="relative z-10 sm:w-5 sm:h-5 drop-shadow" />
          </button>
          
          <div className="text-xs sm:text-sm text-white/70 min-w-[60px] text-center" aria-live="polite" aria-atomic="true">
            <span className="sr-only">Currently viewing image </span>
            {currentIndex + 1} of {numImages}
          </div>
          
          <button
            onClick={goNext}
            className="group relative overflow-hidden inline-flex h-12 w-12 sm:h-11 sm:w-11 items-center justify-center rounded-full text-white touch-manipulation focus:outline-none transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
            aria-label="Next photo"
            style={{
              background: "linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.15) inset, 0 8px 24px rgba(0,0,0,0.25)",
              WebkitBackdropFilter: "blur(8px)",
              backdropFilter: "blur(8px)"
            }}
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="pointer-events-none absolute -inset-y-2 -left-1/2 h-[200%] w-1/3 rotate-[25deg] bg-white/25 blur-[6px] opacity-0 transition duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-60" />
            <ChevronRight size={20} className="relative z-10 sm:w-5 sm:h-5 drop-shadow" />
          </button>
        </div>
      )}
    </div>
  );
}
