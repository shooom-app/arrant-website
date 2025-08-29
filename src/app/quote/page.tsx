export default function Quote() {
  return (
    <div className="mx-auto max-w-wrap px-6 py-16">
      <h1 className="text-3xl font-bold">Request a Quote</h1>
      <p className="mt-3 text-brand-dim">
        We'll confirm permits, route, and pricing. You'll get a fast estimate range.
      </p>
      <ul className="mt-6 text-sm list-disc pl-6 text-brand-dim">
        <li>Pickup & Drop-off (full addresses / ZIPs)</li>
        <li>Commodity (e.g., CAT 320), photos optional</li>
        <li>Dimensions (L×W×H) and Weight</li>
        <li>Ready date / delivery window</li>
        <li>Special handling (crane, escorts, tarps, etc.)</li>
        <li>Contact info (name, phone, email)</li>
      </ul>
      <div className="mt-8 rounded-2xl border p-6 text-sm text-brand-dim bg-brand-paper">
        <b>Next:</b> multi-step quote wizard (Apple-clean) + instant estimate range.
      </div>
    </div>
  );
}
