import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Arrant Solutions",
  description: "Contact our 24/7 dispatch and project managers for quotes and support.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl">Contact</h1>
      <p className="mt-3">Get in touch for inquiries, support, or to discuss your transport needs.</p>
    </main>
  );
}
