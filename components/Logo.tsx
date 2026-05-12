export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* SVG logo mark — red figure */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Head */}
        <circle cx="50" cy="14" r="12" fill="#CC0000" />
        {/* Body */}
        <path
          d="M50 26 L50 70"
          stroke="#CC0000"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Arms */}
        <path
          d="M20 38 L80 38"
          stroke="#CC0000"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Left leg */}
        <path
          d="M50 70 L28 105"
          stroke="#CC0000"
          strokeWidth="9"
          strokeLinecap="round"
        />
        {/* Right leg */}
        <path
          d="M50 70 L72 105"
          stroke="#CC0000"
          strokeWidth="9"
          strokeLinecap="round"
        />
      </svg>
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
