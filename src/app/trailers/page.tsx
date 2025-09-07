import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trailers — Arrant Solutions",
  description: "RGN, lowboy, stepdeck, and specialized heavy haul equipment.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl font-bold">Trailers</h1>
      <p className="mt-3 text-brand-dim">RGN, lowboy, stepdeck, and specialized heavy haul equipment.</p>
    </main>
  );
}
