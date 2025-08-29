import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActionBar from "@/components/ActionBar";

export const metadata: Metadata = {
  title: "Arrant Solutions",
  description: "Heavy Haul & Energy Support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-brand-text antialiased">
        <Header />
        {children}
        <Footer />
        <ActionBar />
      </body>
    </html>
  );
}
