"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reform", label: "Reform" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#e8e2da] shadow-sm">
      {/* Top strip — CALL · HOURS · LOCATION */}
      <div className="hidden md:block bg-[#0a0a0a] text-[#cbd5e1] text-[11px] tracking-[0.06em]">
        <div className="container flex items-center justify-between h-8 gap-6 overflow-hidden">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-display font-bold uppercase tracking-[0.18em] text-[#ff9fac]">Call</span>
            <a href="tel:3074005090" className="hover:text-white transition-colors font-semibold">(307) 400-5090</a>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap truncate">
            <span className="font-display font-bold uppercase tracking-[0.18em] text-[#ff9fac]">Hours</span>
            <span className="truncate">Mon to Fri 8am to 5pm · closed daily 12 to 1 · Weekends closed</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-display font-bold uppercase tracking-[0.18em] text-[#ff9fac]">Location</span>
            <a href="https://maps.google.com/?q=104+Robert+Ave+Cheyenne+WY+82007" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">104 Robert Ave, Cheyenne, WY</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#c8102e] rounded-lg flex items-center justify-center shadow-sm">
              <span className="font-black text-white text-sm leading-none tracking-tight">ED</span>
            </div>
            <div>
              <div className="font-display font-bold text-[#1a1a1a] text-sm leading-tight tracking-tight uppercase">Elite Diesel</div>
              <div className="text-[10px] text-[#888] uppercase tracking-widest leading-tight">Service · Cheyenne, WY</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold transition-colors uppercase tracking-wider font-display ${
                  (l.href === "/" ? pathname === "/" : pathname.startsWith(l.href))
                    ? "text-[#c8102e]"
                    : "text-[#555] hover:text-[#1a1a1a]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:3074005090" className="btn-primary text-xs py-2 px-4">
              ☎ (307) 400-5090
            </a>
          </div>

          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#e8e2da] bg-white">
          <div className="container py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm font-semibold text-[#444] hover:text-[#1a1a1a] hover:bg-[#f9f7f4] font-display uppercase tracking-wider"
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:3074005090" className="mt-3 btn-primary justify-center">
              ☎ Call (307) 400-5090
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
