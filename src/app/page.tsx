import Hero from "./components/Hero";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import TrustStrip from "./components/home/TrustStrip";
import WhyArrant from "@/components/home/WhyArrant";
import CaseStudy from "@/components/home/CaseStudy";
import dynamic from "next/dynamic";
const EquipmentSnapshot = dynamic(() => import("@/app/components/home/EquipmentSnapshot"), { ssr: true });
import FinalCTA from "@/components/home/FinalCTA";
import SectionDivider from "@/components/SectionDivider";
import Gallery from "@/components/gallery/Gallery";
import { LocalBusinessJSONLD, ServicesItemListJSONLD } from "@/lib/jsonld";

// Gallery images: user-provided photos (no captions so the title bar is removed)
const galleryImages = [
  { src: "/gallery-1.jpg", alt: "Arrant Solutions heavy haul transport" },
  { src: "/gallery-2.jpg", alt: "Crane operation with transport equipment" },
  { src: "/gallery-3.jpg", alt: "Industrial spool transport on trailer" },
  { src: "/gallery-4.jpg", alt: "Arrant fleet hauling oversize load" },
  { src: "/gallery-5.jpg", alt: "Oversize load transport on site" },
  { src: "/gallery-6.jpg", alt: "Arrant transport operation at night" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <main className="relative z-10 min-h-screen">
        <TrustStrip />
        <SectionDivider />
        <WhyArrant />
        <SectionDivider />
        <CaseStudy />
        <SectionDivider />
        <EquipmentSnapshot />
        <SectionDivider />
        
        {/* Gallery Section */}
        <section className="relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                Recent Moves & Capabilities
              </h2>
              <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto px-3 sm:px-0">
                See our fleet in action handling complex oversize and overweight transports, heavy lifting operations, and specialized equipment moves across the country.
              </p>
            </div>
            <Gallery 
              images={galleryImages}
              className="max-w-4xl mx-auto"
            />
          </div>
        </section>
        
        {/* Locations intentionally omitted (unused). Enable when copy is ready. */}
        <FinalCTA />
      </main>
      {/* JSON-LD: LocalBusiness + Services ItemList */}
      <LocalBusinessJSONLD />
      <ServicesItemListJSONLD />
    </>
  );
}

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "Oversize & Heavy-Haul Transportation Specialists | Arrant Solutions",
    description:
      "Multi-state heavy-haul logistics with permits, escorts, and route planning for oversize & superload moves.",
    pathname: "/",
  });
