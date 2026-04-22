import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="footer-red-bar" />
      <div className="container" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: identity + hours */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand-logo.jpg"
                alt="Elite Diesel Service logo"
                className="w-12 h-12 object-contain shrink-0 rounded-md bg-white"
              />
              <div>
                <div className="font-display font-bold text-white text-sm tracking-tight uppercase">Elite Diesel Service</div>
                <div className="text-[10px] text-[#94a3b8] uppercase tracking-widest">Cheyenne, WY</div>
              </div>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed max-w-xs mb-5 italic">
              &ldquo;We keep America&apos;s rigs on the road.&rdquo;
            </p>
            <div className="mt-4">
              <div className="font-display text-xs font-semibold uppercase tracking-widest text-[#c8102e] mb-2">Address</div>
              <a
                href="https://maps.google.com/?q=104+Robert+Ave+Cheyenne+WY+82007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#cbd5e1] hover:text-white transition-colors leading-snug block"
              >
                104 Robert Ave<br />Cheyenne, WY 82007
              </a>
            </div>
            <div className="mt-5">
              <div className="font-display text-xs font-semibold uppercase tracking-widest text-[#c8102e] mb-2">Hours</div>
              <div className="text-sm text-[#cbd5e1]">Mon to Fri · 8am to 5pm</div>
              <div className="text-xs text-[#64748b]">Closed daily 12pm to 1pm</div>
              <div className="text-xs text-[#64748b]">Sat &amp; Sun closed</div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <div className="font-display text-xs font-semibold uppercase tracking-widest text-[#c8102e] mb-5">Services</div>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/services#engine", label: "Engine Rebuilds" },
                { href: "/services#dyno", label: "Chassis/Engine Dynamometer" },
                { href: "/services#ecm", label: "ECM Diagnostics" },
                { href: "/services#injectors", label: "Proprietary Injectors" },
                { href: "/services#turbo", label: "Turbo Service" },
                { href: "/services#race", label: "Custom Race Engines" },
                { href: "/services#cng", label: "Diesel-to-Natural-Gas" },
                { href: "/services#fleet", label: "Fleet Services" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-[#cbd5e1] hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: mission + legal */}
          <div>
            <div className="font-display text-xs font-semibold uppercase tracking-widest text-[#c8102e] mb-5">Mission</div>
            <div className="flex flex-col gap-2.5 mb-6">
              <Link href="/about" className="text-sm text-[#cbd5e1] hover:text-white transition-colors">About Troy</Link>
              <Link href="/press" className="text-sm text-[#cbd5e1] hover:text-white transition-colors">Press &amp; Media</Link>
              <Link href="/contact" className="text-sm text-[#cbd5e1] hover:text-white transition-colors">Contact &amp; Directions</Link>
              <a href="https://www.facebook.com/elitediesel307/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#cbd5e1] hover:text-white transition-colors">Facebook @elitediesel307</a>
            </div>

            <div className="border-t border-[#1f2937] pt-5">
              <a href="tel:3074005090" className="block font-display text-2xl font-bold text-white hover:text-[#ff6b7e] transition-colors tracking-tight mb-1">
                (307) 400-5090
              </a>
              <div className="text-xs uppercase tracking-widest text-[#94a3b8] font-display">Call a tech directly</div>
            </div>
          </div>
        </div>

        {/* Pride lines + legal */}
        <div className="mt-14 pt-6 border-t border-[#1f2937]">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-5 font-display uppercase tracking-[0.15em] text-[11px]">
            <span className="text-[#ff6b7e] font-bold">Since 1995</span>
            <span className="text-[#64748b]">·</span>
            <span className="text-[#cbd5e1]">Family-Owned</span>
            <span className="text-[#64748b]">·</span>
            <span className="text-[#cbd5e1]">Veteran-Owned</span>
            <span className="text-[#64748b]">·</span>
            <span className="text-[#cbd5e1]">Family-Run</span>
            <span className="text-[#64748b]">·</span>
            <span className="text-[#ff6b7e] font-bold">Twice Pardoned</span>
          </div>

          <div className="text-center mb-5 font-display uppercase tracking-[0.18em] text-[11px] text-[#cbd5e1]">
            Diesel moves America. <span className="text-[#ff6b7e] font-bold">We keep diesel moving.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748b]">
            <span>© {new Date().getFullYear()} Elite Diesel Service, Inc. · Cheyenne, Wyoming</span>
            <span className="italic">Heavy Iron. Real Mechanics. No Shortcuts.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
