"use client";
import { useMemo, useState } from "react";
import { quoteSchema, type QuoteForm } from "@/lib/quoteSchema";
import { z } from "zod";

export default function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Partial<QuoteForm>>({});

  const steps = useMemo(() => [
    { key: "route", label: "Route", fields: ["pickupAddress", "dropoffAddress"] as const },
    { key: "commodity", label: "Commodity", fields: ["commodity"] as const },
    { key: "dimensions", label: "Dimensions", fields: ["length", "width", "weight"] as const },
    { key: "notes", label: "Notes", fields: ["notes"] as const },
    { key: "contact", label: "Contact", fields: ["contactName", "phone", "email"] as const },
  ], []);

  const total = steps.length;
  const current = steps[step];

  function update<K extends keyof QuoteForm>(key: K, value: QuoteForm[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function next() {
    setError(null);
    const partial = Object.fromEntries(current.fields.map((f) => [f, data[f]]));

    // Step-level lightweight validation (allow broader ranges; stricter checks on submit)
    const stepFieldSchema: Record<keyof QuoteForm, z.ZodTypeAny> = {
      pickupAddress: z.string().min(5),
      dropoffAddress: z.string().min(5),
      commodity: z.string().min(2),
      length: z.coerce.number().positive(),
      width: z.coerce.number().positive(),
      weight: z.coerce.number().positive(),
      notes: z.string().max(1000).optional(),
      contactName: z.string().min(2),
      phone: z.string().min(7),
      email: z.string().email(),
    };

    const perStepShape = z.object(
      Object.fromEntries(current.fields.map((f) => [f, stepFieldSchema[f]])) as Record<string, z.ZodTypeAny>
    );

    const parsed = perStepShape.safeParse(partial);
    if (!parsed.success) {
      setError("Please complete the required fields");
      return;
    }
    if (step < total - 1) setStep((s) => s + 1);
  }

  function back() { if (step > 0) setStep((s) => s - 1); }

  async function submit() {
    setError(null);
    const parsed = quoteSchema.safeParse(data);
    if (!parsed.success) {
      setError("Some fields need attention before submitting");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...parsed.data, website: "" }) });
      const j = await res.json().catch(() => ({}));
      if (!res.ok || j?.ok === false) throw new Error("Request failed");
      setStep(total - 1);
    } catch {
      setError("Could not submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto mb-6 flex items-center justify-center gap-2">
        {steps.map((s, i) => (
          <div key={s.key} className={`h-2 rounded-full transition-all ${i <= step ? "bg-white/70" : "bg-white/20"}`} style={{ width: i === step ? 56 : 28 }} />
        ))}
      </div>

      <section className="relative overflow-hidden rounded-3xl p-6 sm:p-8 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] bg-neutral-900/60 backdrop-blur-sm">
        <div className="pointer-events-none absolute -inset-8 opacity-[0.10] bg-[radial-gradient(70%_60%_at_70%_20%,#47CE0C_0%,transparent_70%),radial-gradient(60%_60%_at_20%_80%,#CD1516_0%,transparent_70%)]" />
        <h1 className="relative z-10 text-center text-2xl font-bold text-white">Request a Quote</h1>
        <p className="relative z-10 mt-2 text-center text-white/85">Answer a few quick questions. We’ll prepare a same‑day plan.</p>
        <div className="relative z-10 mt-6 grid gap-4">
          {current.key === "route" && (<>
            <Input label="Pickup address" value={data.pickupAddress || ""} onChange={(v) => update("pickupAddress", v)} placeholder="123 Main St, Denver CO" />
            <Input label="Drop-off address" value={data.dropoffAddress || ""} onChange={(v) => update("dropoffAddress", v)} placeholder="456 Ave, Houston TX" />
          </>)}
          {current.key === "commodity" && (
            <Input label="What are we hauling?" value={data.commodity || ""} onChange={(v) => update("commodity", v)} placeholder="e.g., 135,000 lbs battery unit" />
          )}
          {current.key === "dimensions" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Input label="Length (ft)" type="number" value={data.length?.toString() || ""} onChange={(v) => update("length", Number(v))} />
              <Input label="Width (ft)" type="number" value={data.width?.toString() || ""} onChange={(v) => update("width", Number(v))} />
              <Input label="Weight (lbs)" type="number" value={data.weight?.toString() || ""} onChange={(v) => update("weight", Number(v))} />
            </div>
          )}
          {current.key === "notes" && (
            <Textarea label="Notes (optional)" value={data.notes || ""} onChange={(v) => update("notes", v)} placeholder="Special handling, escorts, crane, windows, etc." />
          )}
          {current.key === "contact" && (<>
            <Input label="Your name" value={data.contactName || ""} onChange={(v) => update("contactName", v)} />
            <Input label="Phone" value={data.phone || ""} onChange={(v) => update("phone", v)} />
            <Input label="Email" type="email" value={data.email || ""} onChange={(v) => update("email", v)} />
          </>)}
          {error && <div className="mt-1 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-300 ring-1 ring-red-500/30">{error}</div>}
        </div>
        <div className="relative z-10 mt-6 flex items-center justify-between">
          <button onClick={back} disabled={step === 0 || submitting} className="rounded-xl px-4 py-2 text-white/90 ring-1 ring-white/15 hover:bg-white/10 disabled:opacity-50">Back</button>
          {step < total - 1 ? (
            <button onClick={next} disabled={submitting} className="group relative overflow-hidden rounded-xl bg-[#CD1516] px-5 py-2.5 font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30">
              <span className="relative z-10">Next</span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          ) : (
            <button onClick={submit} disabled={submitting} className="group relative overflow-hidden rounded-xl bg-[#47CE0C] px-5 py-2.5 font-semibold text-black shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30">
              <span className="relative z-10">Request Quote</span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-white/40 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          )}
        </div>
      </section>
      <style jsx global>{`
        /* Hide spin buttons on number inputs (length/width/weight) */
        input.no-spin::-webkit-outer-spin-button,
        input.no-spin::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        input.no-spin[type=number] { -moz-appearance: textfield; appearance: textfield; }
      `}</style>
    </div>
  );
}

function Input({ label, type = "text", value, onChange, placeholder }: { label: string; type?: string; value: string | number; onChange: (v: string) => void; placeholder?: string; }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm text-white/80">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
             className={`rounded-xl bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 ${type === 'number' ? 'no-spin' : ''}`}
      />
    </label>
  );
}

function Textarea({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm text-white/80">{label}</span>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={4}
                className="rounded-xl bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
    </label>
  );
}


