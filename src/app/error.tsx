"use client";
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html><body>
      <main className="mx-auto max-w-wrap px-6 py-16">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-brand-dim">{error?.message || "An unexpected error occurred."}</p>
        <a href="/" className="mt-6 inline-block rounded-full border px-4 py-2">Go home</a>
      </main>
    </body></html>
  );
}


