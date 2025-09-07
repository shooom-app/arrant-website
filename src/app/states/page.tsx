import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "States — Arrant Solutions",
  description: "Nationwide coverage with state-specific permits and regulations expertise.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl font-bold">States</h1>
      <p className="mt-3 text-brand-dim">Nationwide coverage with state-specific permits and regulations expertise.</p>
    </main>
  );
}
