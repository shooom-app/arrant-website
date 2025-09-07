import Hero from "./components/Hero";
import TrustStrip from "./components/home/TrustStrip";
import WhyArrant from "@/components/home/WhyArrant";
import CaseStudy from "@/components/home/CaseStudy";
import dynamic from "next/dynamic";
const EquipmentSnapshot = dynamic(() => import("@/app/components/home/EquipmentSnapshot"), { ssr: true });
import FinalCTA from "@/components/home/FinalCTA";
import SectionDivider from "@/components/SectionDivider";

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
        {/* Locations intentionally omitted (unused). Enable when copy is ready. */}
        <FinalCTA />
      </main>
    </>
  );
}
