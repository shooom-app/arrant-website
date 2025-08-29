export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-wrap px-6 py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="font-semibold">Arrant Solutions</div>
          <p className="mt-2 text-brand-dim">Heavy haul & energy support services.</p>
        </div>
        <div>
          <div className="font-semibold">Locations</div>
          <ul className="mt-2 text-brand-dim space-y-1">
            <li>Brighton, CO — 880 N 9th Ave Unit B</li>
            <li>Williston, ND — 13831 60th St NW</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 text-brand-dim space-y-1">
            <li>Phone: (XXX) XXX-XXXX</li>
            <li>Email: info@arrantsolutions.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-brand-dim">
        © {new Date().getFullYear()} Arrant Solutions. All rights reserved.
      </div>
    </footer>
  );
}
