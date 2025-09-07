"use client";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0); // 0..1
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    let ticking = false;
    const maxRange = 160; // px over which header shrinks
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const p = Math.max(0, Math.min(1, y / maxRange));
        setScrollProgress(p);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrolled = scrollProgress > 0.5;

  return (
    <header
      className={
        // Smooth constant gradient theme (drop height transition to avoid jank)
        `bg-gradient-to-b from-black/35 to-black/5 backdrop-blur-xl fixed inset-x-0 top-0 z-20 overflow-visible`
      }
      style={{
        height: Math.round(100 - 16 * scrollProgress)
      }}
    >
      <nav className="relative mx-auto flex h-full max-w-7xl items-center justify-center pl-14 pr-14 md:px-6 md:py-4">
        {/* Mobile: hamburger (left) */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15 backdrop-blur-sm transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          {menuOpen ? (
            <X size={20} strokeWidth={2.25} className="transition-transform duration-200" />
          ) : (
            <Menu size={22} strokeWidth={2.25} className="transition-transform duration-200" />
          )}
        </button>

        {/* Left links (desktop only) */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6 pr-6">
          {["Services", "Trailers", "States"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              prefetch
              className={`relative group transition-all duration-300 ease-out hover:translate-y-[-1px] ${scrolled ? "text-white/90" : "text-white"}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#CD1516] via-white/60 to-[#47CE0C] transition-all duration-500 ease-out group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Center logo with smooth size and halo on scroll */}
        <Link href="/" className="flex items-center gap-3 group" style={{ transition: "transform 600ms cubic-bezier(0.2,0.6,0.2,1)" }}>
          <span className="relative inline-flex items-center justify-center will-change-transform">
            <span
              className="pointer-events-none absolute inset-0 rounded-full blur-[2px]"
              style={{ background: "linear-gradient(90deg,#CD1516,rgba(255,255,255,.55),#47CE0C)", transform: `translateZ(0) scale(${1.25 - (1.25 - 1.1) * scrollProgress})`, opacity: 0.9 * scrollProgress, willChange: "transform, opacity" }}
            />
            {/* Using <img> intentionally for an inline SVG logo with dynamic scaling; next/image is not necessary here */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/arrant_logo.svg"
              alt="Arrant Solutions"
              className="w-auto relative z-10 group-hover:scale-[1.03]"
              style={{
                height: 72,
                transformOrigin: "center",
                transform: `translateZ(0) scale(${1 - (1 - 0.58) * scrollProgress})`,
                filter: scrolled ? "brightness(0) invert(1)" : "none",
                willChange: "transform, filter"
              }}
            />
          </span>
          <span className="sr-only">Arrant Solutions</span>
        </Link>

        {/* Right links + CTA (CTA visible on desktop only when scrolled) */}
        <div className="hidden md:flex flex-1 items-center justify-start gap-6 pl-6">
          {["Projects", "About", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              prefetch
              className={`relative group transition-all duration-300 ease-out hover:translate-y-[-1px] ${scrolled ? "text-white/90" : "text-white"}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#CD1516] via-white/60 to-[#47CE0C] transition-all duration-500 ease-out group-hover:w-full rounded-full"></span>
            </Link>
          ))}
          {scrolled && (
            <Link
              href="/quote"
              prefetch
              className="hidden md:inline-block group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] px-4 py-2 font-semibold text-white shadow-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg"
            >
              <span className="relative z-10">Get quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#47CE0C] via-white/30 to-[#CD1516] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
            </Link>
          )}
        </div>

        {/* Mobile CTA top-right */}
        <Link
          href="/quote"
          prefetch
          className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 group overflow-hidden rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] px-3 py-1.5 text-[12px] font-semibold text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg"
        >
          <span className="relative z-10">Get quote</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#47CE0C] via-white/30 to-[#CD1516] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
        </Link>
      </nav>

      {/* Mobile slide-out menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 z-30" style={{ top: scrolled ? 96 : 104 }} onClick={() => setMenuOpen(false)}>
          {/* Floating frosted sheet */}
          <div className="relative mx-4 mt-2 rounded-2xl ring-1 ring-white/15 bg-neutral-900/90 overflow-hidden mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <nav className="divide-y divide-white/10">
              {["Services", "Trailers", "States", "Projects", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  prefetch
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-[15px] text-white transition-colors hover:bg-white/10"
                >
                  <span>{item}</span>
                  <ChevronRight size={18} className="text-white/70" />
                </Link>
              ))}
            </nav>
            <div className="p-3">
              <Link
                href="/quote"
                prefetch
                onClick={() => setMenuOpen(false)}
                className="group relative mx-auto block w-full max-w-xs overflow-hidden rounded-lg bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] px-5 py-2.5 text-center font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <span className="relative z-10">Get quote</span>
                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#47CE0C] via-white/30 to-[#CD1516] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
              </Link>
            </div>
          </div>

          {/* Animations and polish */}
          <style jsx global>{`
            @keyframes mmDropIn {
              0% { opacity: 0; transform: translateY(-10px) scale(0.98); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .mobile-menu-panel {
              box-shadow: 0 16px 60px rgba(0,0,0,0.55);
              background-image: none;
              animation: mmDropIn 260ms cubic-bezier(.2,.6,.2,1);
            }
          `}</style>
        </div>
      )}
    </header>
  );
}
