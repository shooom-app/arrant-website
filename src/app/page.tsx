import Hero from "./components/Hero";
import TrustStrip from "./components/home/TrustStrip";
import WhyArrant from "@/components/home/WhyArrant";
import CaseStudy from "@/components/home/CaseStudy";
import EquipmentSnapshot from "@/components/home/EquipmentSnapshot";
// import Locations from "@/components/home/Locations";
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
        {/* <Locations /> */}
        <FinalCTA />
      </main>
    </>
  );
}
