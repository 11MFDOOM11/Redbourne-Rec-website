import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Real Logo */}
      <div className="relative w-10 h-10 shrink-0">
        <Image
          src="/images/Logo.jpg"
          alt="Redbourn Recreation Centre & Playing Fields Trust Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="leading-tight">
        <div className="text-xs font-bold text-[#1A1A1A] uppercase tracking-tight leading-none">
          Redbourn Recreation Centre
        </div>
        <div className="text-[10px] text-[#4A4A4A] leading-tight">
          &amp; Playing Fields Trust
        </div>
      </div>
    </div>
  );
}
