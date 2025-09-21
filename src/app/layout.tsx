import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import BackgroundFX from "@/app/components/BackgroundFX";
import Footer from "@/components/Footer";
import "@fontsource-variable/inter";
import LoaderBoundary from "@/components/loader/LoaderBoundary";
import AnimGate from "@/app/components/AnimGate";
// import ActionBar from "@/components/ActionBar";
// import StickyQuoteCTA from "@/components/StickyQuoteCTA";
// import SmokeyBackground from "@/components/SmokeyBackground";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Arrant Solutions — Heavy-Haul & Superload Transportation",
  description: "Oversize, overweight, and superload transport with modern fleet, veteran drivers, in-house permitting, and 24/7 dispatch. Insurance up to $5M.",
  openGraph: {
    title: "Arrant Solutions — Heavy-Haul & Superload Transportation",
    description: "Oversize, overweight, and superload transport with modern fleet, veteran drivers, in-house permitting, and 24/7 dispatch. Insurance up to $5M.",
    siteName: "Arrant Solutions",
    images: [
      {
        url: "/heroPic.jpg",
        width: 1200,
        height: 630,
        alt: "Arrant Solutions on site"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrant Solutions — Heavy-Haul & Superload Transportation",
    description: "Oversize, overweight, and superload transport with modern fleet, veteran drivers, in-house permitting, and 24/7 dispatch.",
    images: ["/heroPic.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-transparent text-brand-text antialiased overflow-x-hidden">
        <BackgroundFX />
        <AnimGate />
        <Header />
        <LoaderBoundary variant="svg">
          <main>{children}</main>
        </LoaderBoundary>
        <Footer />
        {/* <ActionBar /> */}
        {/* <StickyQuoteCTA /> */}
      </body>
    </html>
  );
}
