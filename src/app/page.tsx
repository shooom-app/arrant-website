export default function Home() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-wrap px-6 pt-28 pb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-brand-text underline decoration-brand-red">
            Oversize & Overweight Transport
            <br className="hidden md:block" />
            <span className="text-brand-dim font-semibold"> done right.</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-brand-dim">
            Permits, routes, safety—handled end-to-end. Transparent pricing and real project experience.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="/quote" className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
              Get instant quote
            </a>
            <a href="tel:+1XXXXXXXXXX" className="rounded-full border px-6 py-3 text-sm font-semibold text-brand-text hover:bg-brand-paper">
              Call now
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { k: "Credentials", v: "USDOT 3554296 · MC 1332806" }, // swap if owner prefers hidden
              { k: "Coverage", v: "Nationwide · Energy sector" },
              { k: "Fleet", v: "RGN · Lowboy · Stepdeck" },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl bg-white border p-5">
                <div className="text-xs uppercase tracking-wider text-brand-dim">{x.k}</div>
                <div className="mt-1 text-sm">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
