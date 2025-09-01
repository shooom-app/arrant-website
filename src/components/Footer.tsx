export default function Footer() {
  return (
    <footer className="mt-20 bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="mx-auto max-w-wrap px-6 py-12 grid gap-8 md:gap-16 md:grid-cols-3 text-sm">
        <div>
          <div className="font-semibold text-white group cursor-pointer transition-all duration-300 ease-out hover:text-[#47CE0C]">
            Arrant Solutions
          </div>
          <p className="mt-2 text-neutral-300">Heavy-haul & superload transportation.</p>
        </div>
        <div>
          <div className="font-semibold text-white group cursor-pointer transition-all duration-300 ease-out hover:text-[#47CE0C]">
            Locations
          </div>
          <ul className="mt-2 text-neutral-300 space-y-1">
            <li className="transition-all duration-300 ease-out hover:text-white hover:translate-x-1">Brighton, CO — 880 N 9th Ave Unit B</li>
            <li className="transition-all duration-300 ease-out hover:text-white hover:translate-x-1">Williston, ND — 13831 60th St NW</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white group cursor-pointer transition-all duration-300 ease-out hover:text-[#47CE0C]">
            Contact
          </div>
          <ul className="mt-2 text-neutral-300 space-y-1">
            <li className="transition-all duration-300 ease-out hover:text-white hover:translate-x-1">Phone: (XXX) XXX-XXXX</li>
            <li className="transition-all duration-300 ease-out hover:text-white hover:translate-x-1">Email: info@arrantsolutions.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Arrant Solutions. All rights reserved.
      </div>
    </footer>
  );
}
