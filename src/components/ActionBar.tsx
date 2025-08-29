export default function ActionBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden px-4 pb-5">
      <div className="grid grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
        <a href="/quote" className="text-center py-3 font-semibold bg-brand-red text-white">Get quote</a>
        <a href="tel:+1XXXXXXXXXX" className="text-center py-3 font-semibold bg-brand-charcoal text-white">Call now</a>
      </div>
    </div>
  );
}
