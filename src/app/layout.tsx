import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import BackgroundFX from "@/app/components/BackgroundFX";
import Footer from "@/components/Footer";
import ActionBar from "@/components/ActionBar";
// import SmokeyBackground from "@/components/SmokeyBackground";

export const metadata: Metadata = {
  title: "Arrant Solutions",
  description: "Heavy Haul & Energy Support",
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
      </body>
    </html>
  );
}
