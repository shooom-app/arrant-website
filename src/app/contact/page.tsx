import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { FileText, Mail, Phone } from "lucide-react";

function IconPuck({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex items-center justify-center" aria-hidden="true">
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-70 blur-[2px]"
        style={{ background: "linear-gradient(90deg,#CD1516,rgba(255,255,255,.55),#47CE0C)", transform: "scale(1.08)" }}
      />
      <span className="relative block rounded-full bg-white/10 ring-1 ring-white/15" style={{ width: 48, height: 48 }}>
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/0" />
        <span className="relative flex h-full w-full items-center justify-center text-white/90">{children}</span>
      </span>
    </span>
  );
}

export default function Page() {
  return (
    <main className="relative z-10 min-h-screen">
      <section className="mx-auto max-w-5xl px-4 pt-28 pb-16 text-center sm:pt-32 sm:pb-20">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">You Have any Questions?</h1>
        <div className="mx-auto mt-4 h-[2px] w-36 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-80" />
        <p className="mt-3 text-white/85">Contact Us:</p>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
          {/* Get Quote */}
          <article className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
            <div className="relative z-10">
              <div className="mb-5 flex justify-center">
                <IconPuck>
                  <FileText width={20} height={20} strokeWidth={2} className="text-white/90" />
                </IconPuck>
              </div>
              <a
                href="/quote"
                className="group relative inline-flex overflow-hidden rounded-lg bg-[#CD1516] px-5 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Get instant quote"
              >
                <span className="relative z-10">Get instant quote</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
            </div>
          </article>

          {/* Email Us */}
          <article className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
            <div className="relative z-10">
              <div className="mb-5 flex justify-center">
                <IconPuck>
                  <Mail width={20} height={20} strokeWidth={2} className="text-white/90" />
                </IconPuck>
              </div>
              <a
                href="mailto:hello@arrantsolution.com"
                className="group relative inline-flex overflow-hidden rounded-lg bg-[#CD1516] px-5 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Email us"
              >
                <span className="relative z-10">Email us</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
            </div>
          </article>

          {/* Call Now */}
          <article className="relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-[0.10] [background:linear-gradient(90deg,#CD1516,rgba(255,255,255,.45),#47CE0C)] blur-[6px]" />
            <div className="relative z-10">
              <div className="mb-5 flex justify-center">
                <IconPuck>
                  <Phone width={20} height={20} strokeWidth={2} className="text-white/90" />
                </IconPuck>
              </div>
              <a
                href="tel:+1-555-555-5555"
                className="group relative inline-flex overflow-hidden rounded-lg bg-[#CD1516] px-5 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Call now"
              >
                <span className="relative z-10">Call now</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "Contact Arrant Solutions | Dispatch & Quotes",
    description:
      "Call or email dispatch for heavy-haul quotes, permits, escorts, and routing.",
    pathname: "/contact",
  });
