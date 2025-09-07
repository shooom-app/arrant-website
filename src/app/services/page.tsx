import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Arrant Solutions",
  description: "Oversize hauling, permitting, routing, pilot cars, and 24/7 dispatch.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl">Services</h1>
      <p className="mt-3">Oversize hauling, mobile maintenance, parts & rentals.</p>
    </main>
  );
}
