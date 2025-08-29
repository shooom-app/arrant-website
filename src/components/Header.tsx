"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"} sticky top-0 z-50 border-b border-black/5 transition-colors`}>
      <div className="mx-auto max-w-wrap px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          {/* temp wordmark until logo.svg exists */}
          <span className="text-lg font-bold text-brand-text">Arrant</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-brand-dim">
          {["Services","Trailers","States","Projects","About","Contact"].map(l => (
            <a key={l} href={`/${l.toLowerCase()}`} className="hover:text-brand-text">{l}</a>
          ))}
          <a href="/quote" className="ml-1 rounded-full px-4 py-2 text-sm font-medium bg-brand-red text-white hover:opacity-90">
            Get quote
          </a>
        </nav>
        <a className="md:hidden rounded-full px-3 py-2 bg-brand-red text-white text-sm" href="/quote">
          Quote
        </a>
      </div>
    </header>
  );
}
