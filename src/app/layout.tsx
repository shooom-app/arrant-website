import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import BackgroundFX from "@/app/components/BackgroundFX";
import Footer from "@/components/Footer";
import ActionBar from "@/components/ActionBar";
import StickyQuoteCTA from "@/components/StickyQuoteCTA";
// import SmokeyBackground from "@/components/SmokeyBackground";

export const metadata: Metadata = {
  title: "Arrant Solutions — Heavy-Haul & Superload Transportation",
  description: "Oversize, overweight, and superload transport with modern fleet, veteran drivers, in-house permitting, and 24/7 dispatch. Insurance up to $5M.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-transparent text-brand-text antialiased">
        <BackgroundFX />
        <Header />
        {children}
        <Footer />
        <ActionBar />
        <StickyQuoteCTA />
      </body>
    </html>
  );
}
