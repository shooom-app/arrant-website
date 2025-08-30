export default function ActionBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden px-4 pb-5">
      <div className="grid grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
        <a 
          href="/quote" 
          className="group relative overflow-hidden text-center py-3 font-semibold bg-brand-red text-white transition-all duration-300 ease-out hover:scale-[1.02]"
        >
          <span className="relative z-10">Get quote</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#47CE0C] to-[#CD1516] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
        </a>
        <a 
          href="tel:+1XXXXXXXXXX" 
          className="group relative overflow-hidden text-center py-3 font-semibold bg-brand-charcoal text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_0_2px_rgba(205,21,22,0.3),0_0_0_4px_rgba(71,206,12,0.2)]"
        >
          <span className="relative z-10">Call now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#CD1516]/20 to-[#47CE0C]/20 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
        </a>
      </div>
    </div>
  );
}
