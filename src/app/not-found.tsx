import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-brand-dim">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-full border px-4 py-2">Go home</Link>
    </main>
  );
}


