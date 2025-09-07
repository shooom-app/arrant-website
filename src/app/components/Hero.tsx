"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* BG image */}
      <Image
        src="/heroPic.jpg"
        alt="Arrant Solutions on site"
        fill
        priority
        className="object-cover object-center md:object-[50%_45%] transition-transform duration-700 ease-out hover:scale-105"
        sizes="100vw"
      />

      {/* Depth overlays */}
      {/* Slight top dark for nav and headline legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/5" />
      {/* Soft radial vignette so edges fade, center stays clear */}
      <div className="absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_45%,black,transparent)] bg-black/30" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white pt-20 sm:pt-0">
        <h1 className="relative group mx-auto max-w-3xl text-4xl font-extrabold leading-snug sm:leading-snug lg:leading-[1.35] tracking-tight text-center sm:text-5xl lg:text-[52px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] animate-slideInLeft">
          Oversize & Overweight Transport — Delivered with Precision
          <span className="absolute -bottom-3 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#CD1516] via-white/60 to-[#47CE0C] rounded-full transform -translate-x-1/2 animate-underlineAppear animation-delay-600 opacity-70"></span>
        </h1>
        <p className="relative group mt-3 max-w-2xl text-lg font-medium text-white/85 sm:text-[19px] leading-relaxed animate-slideInLeft animation-delay-200">
          Permits, routing, and safety—handled end-to-end.
          <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#CD1516] via-white/60 to-[#47CE0C] rounded-full transform -translate-x-1/2 animate-underlineAppear animation-delay-800 opacity-70"></span>
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 animate-slideInLeft animation-delay-400">
          {/* Primary CTA with gradient sheen sweep */}
          <Link
            href="/quote"
            prefetch
            className="group relative overflow-hidden rounded-lg bg-transparent px-6 py-3 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-white/30]"
          >
            <span className="pointer-events-none absolute inset-0 z-0 rounded-lg opacity-85 blur-[2px] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)]" />
            <span className="relative z-20">Get instant quote</span>
            <div className="pointer-events-none absolute inset-0 z-0 rounded-lg bg-gradient-to-r from-[#47CE0C] via-[rgba(255,255,255,.45)] to-[#CD1516] opacity-0 blur-[2px] transition-all duration-500 ease-out group-hover:opacity-85"></div>
            
          </Link>
          
          {/* Secondary CTA with glass background and twin brand ring shadow */}
          <a
            href="tel:+1-555-555-5555"
            className="group relative overflow-hidden rounded-lg border border-white/35 bg-white/25 px-6 py-3 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-out hover:bg-white/35 hover:scale-[1.03] hover:shadow-[0_0_0_2px_rgba(205,21,22,0.25),0_0_0_4px_rgba(71,206,12,0.25)] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <span className="relative z-10">Call now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#CD1516]/10 via-white/10 to-[#47CE0C]/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
          </a>
        </div>
      </div>
      
      {/* Subtle bottom fade for smooth transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black/20" />
    </section>
  );
}


