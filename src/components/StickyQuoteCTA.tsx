"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyQuoteCTA() {
  const pathname = usePathname();
  if (pathname?.startsWith("/quote")) return null;

  return (
    <div className="fixed inset-x-0 bottom-3 z-50 mx-auto w-full max-w-md px-4 md:hidden">
      <div className="flex gap-2 rounded-2xl bg-black/40 p-2 backdrop-blur-md ring-1 ring-white/10">
        <Link
          href="/quote"
          prefetch
          className="flex-1 rounded-xl bg-[#CD1516] px-4 py-3 text-center text-white font-semibold shadow-lg shadow-black/30 active:scale-[0.99]"
          aria-label="Get instant quote"
        >
          Get instant quote
        </Link>
        <a
          href="tel:+1-000-000-0000"
          className="flex-1 rounded-xl border border-white/25 px-4 py-3 text-center text-white font-semibold active:scale-[0.99]"
          aria-label="Call dispatch"
        >
          Call now
        </a>
      </div>
    </div>
  );
}
