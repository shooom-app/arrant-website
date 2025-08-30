"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        `${scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : "bg-gradient-to-b from-black/35 to-black/5 backdrop-blur-xl"} fixed inset-x-0 top-0 z-20 transition-colors duration-300 ease-out`
      }
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/arrant_logo.svg" alt="Arrant Solutions" className="h-6 w-auto transition-transform duration-300 ease-out group-hover:scale-105" />
          <span className="sr-only">Arrant Solutions</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Trailers", "States", "Projects", "About", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className={`relative group transition-all duration-300 ease-out hover:translate-y-[-1px] ${
                scrolled ? "text-neutral-800" : "text-white"
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#CD1516] via-red-600 to-[#47CE0C] transition-all duration-500 ease-out group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="/quote"
          className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#CD1516] to-[#47CE0C] px-4 py-2 font-semibold text-white shadow-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg"
        >
          <span className="relative z-10">Get quote</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#47CE0C] to-[#CD1516] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
        </Link>
      </nav>
    </header>
  );
}
