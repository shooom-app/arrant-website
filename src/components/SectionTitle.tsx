"use client";

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-3xl px-4 text-center ${className}`}>
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-white/80">{subtitle}</p> : null}
      <div className="mx-auto mt-4 h-[2px] w-36 rounded-full bg-gradient-to-r from-[#CD1516] via-white/30 to-[#47CE0C] opacity-80" />
      <div className="mt-6" />
    </div>
  );
}
