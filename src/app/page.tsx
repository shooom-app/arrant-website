import Hero from "./components/Hero";
import TrustStrip from "./components/home/TrustStrip";
import WhyArrant from "@/components/home/WhyArrant";
import CaseStudy from "@/components/home/CaseStudy";
import dynamic from "next/dynamic";
const EquipmentSnapshot = dynamic(() => import("@/app/components/home/EquipmentSnapshot"), { ssr: true });
import FinalCTA from "@/components/home/FinalCTA";
import SectionDivider from "@/components/SectionDivider";
import Gallery from "@/components/gallery/Gallery";

// Placeholder gallery images - replace with real images later
const galleryImages = [
  {
    src: "/heroPic.jpg",
    alt: "Heavy haul truck transporting oversize equipment",
    caption: "Precision transport of industrial equipment"
  },
  {
    src: "/case-study-mobile.jpg", 
    alt: "Arrant Solutions crew preparing for transport",
    caption: "Expert crew handling complex logistics"
  },
  // Add more real images here later
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
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                Recent Moves & Capabilities
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-2 sm:px-0">
                See our fleet in action handling complex oversize and overweight transports across the country.
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
    </>
  );
}
