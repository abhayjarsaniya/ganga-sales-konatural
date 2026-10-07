import Link from "next/link";
import { BRAND_FULL } from "@/data/site";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label={BRAND_FULL}
    >
      {/* Premium Emblem: Gold & Maroon natural crest */}
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#6E2635] to-[#4A1521] text-[#E8D3A2] shadow-sm transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10"
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5 sm:h-[22px] sm:w-[22px]" fill="none">
          {/* Natural botanical leaf & drop shape representing purity */}
          <path
            d="M16 5.5C13.2 9.8 8.5 13.5 8.5 19C8.5 23.4 11.8 26.5 16 26.5C20.2 26.5 23.5 23.4 23.5 19C23.5 13.5 18.8 9.8 16 5.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11.5V23"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M16 15.5C18.2 13.8 20 14.5 20.5 15.8"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M16 18.5C13.8 16.8 12 17.5 11.5 18.8"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {/* Brand Typographic Identity */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif text-[15px] font-semibold leading-tight tracking-tight text-ink min-[360px]:text-[16px] sm:text-[20px]">
            Ganga Sales
          </span>
          <span className="text-[11px] font-light text-stone-400 sm:text-xs">|</span>
          <span className="font-serif text-[14px] font-medium tracking-wide text-[#6E2635] min-[360px]:text-[15px] sm:text-[18px]">
            Konatural
          </span>
        </div>
        <span className="text-[8.5px] font-medium uppercase tracking-[0.18em] text-stone-500 min-[400px]:text-[9px]">
          Naturally Premium · Est. 1996
        </span>
      </div>
    </Link>
  );
}
