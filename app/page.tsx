import Link from "next/link";
import { ReviewsCarousel } from "./_components/reviews-carousel";
import { RpmWave } from "./_components/rpm-wave";

const SERVICES = [
  {
    icon: "⚙",
    title: "Engine Rebuilds",
    desc: "Full engine rebuilds and overhauls for CAT, Cummins, Detroit, PACCAR, and Volvo. Done right, documented, backed by real experience.",
  },
  {
    icon: "◆",
    title: "Chassis/Engine Dynamometer (Coming Soon)",
    desc: "Coming soon: on-site chassis and engine dyno for real-world power measurement, verified break-in, and tune validation at the wheels or at the flywheel.",
  },
  {
    icon: "▲",
    title: "ECM Diagnostics",
    desc: "Complete electronic diagnostics across all major platforms. We find the real problem, not just the code.",
  },
  {
    icon: "●",
    title: "Proprietary Injectors",
    desc: "Fuel-economy tuned injectors built in-house and proven before they ship. Performance you won't find off the shelf.",
  },
  {
    icon: "■",
    title: "Turbo Repair & Supply",
    desc: "Full turbo inventory for every major truck engine. Repair, rebuild, or replace. We stock what you need.",
  },
  {
    icon: "✦",
    title: "Custom Race Engines",
    desc: "High-output diesel race engine builds for serious competitors. Troy has been building winners for decades.",
  },
];

const MILESTONES = [
  { year: "1983", label: "In the trade" },
  { year: "1996", label: "Elite Diesel founded" },
  { year: "2022", label: "Cheyenne shop opens" },
  { year: "2025", label: "Troy pardoned", accent: true },
  { year: "2026", label: "Shop pardoned", accent: true },
];

const STATS = [
  { value: "CAT", unit: "HISTORY", label: "Factory & engineering-team background" },
  { value: "40+", unit: "YRS", label: "In the heavy diesel trade since 1983" },
  { value: "FAMILY", unit: "OWNED", label: "Family-owned, veteran-owned" },
  { value: "2×", unit: "PARDONED", label: "Full presidential pardons", accent: true },
];

export default function HomePage() {
  return (
    <>
      {/* =========== HERO — cinematic =========== */}
      <section className="hero-cinematic">
        <div className="hero-grid-overlay" data-parallax="0.08" />
        {/* Blurred logo as shop motif backdrop */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="hero-logo-backdrop"
        />
        <div className="hero-noise" style={{ zIndex: 2 }} />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
            zIndex: 3,
          }}
        />

        <div className="container relative min-h-screen flex items-center">
          <div className="grid lg:grid-cols-[1.3fr_1fr] items-center gap-12 w-full pt-6 pb-24">
            <div className="fade-up max-w-2xl">
              <div className="badge mb-7" style={{ background: "rgba(200,16,46,0.15)", color: "#ff9fac", borderColor: "rgba(200,16,46,0.4)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
                Cheyenne, Wyoming · Est. 1996
              </div>

              <h1 className="hero-headline text-white mb-6">
                HEAVY IRON.<br />
                <span className="text-ember">REAL MECHANICS.</span><br />
                <span className="text-chrome">NO SHORTCUTS.</span>
              </h1>

              <p className="text-lg md:text-xl text-[#cbd5e1] leading-relaxed max-w-xl mb-4">
                We keep America&apos;s rigs on the road. Master-certified heavy diesel repair for CAT, Cummins, Detroit, PACCAR, and Volvo. Family-owned. Veteran-owned.
              </p>

              <p className="text-sm uppercase tracking-[0.18em] font-display text-[#ff6b7e] mb-10">
                Trucks $175/hr · Motorhomes $250/hr
              </p>

              <div className="flex flex-wrap gap-4 fade-up fade-up-delay-1">
                <a href="tel:3074005090" className="btn-primary btn-phone-pulse text-base py-3.5 px-8">
                  ☎ Call (307) 400-5090
                </a>
                <Link href="/services" className="btn-outline-white text-base py-3.5 px-8">
                  See Our Services →
                </Link>
              </div>

            </div>

            {/* Logo panel — absolutely positioned so it's not capped by the grid column */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* RPM wave bottom edge */}
        <RpmWave />

        {/* Scroll cue */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[#94a3b8] text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2 opacity-70 font-display">
          <span>Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-[#94a3b8] to-transparent" />
        </div>
      </section>

      {/* =========== WHY ELITE — chrome credibility band =========== */}
      <section className="chrome-band text-white">
        <div className="container py-14 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center md:text-left md:px-4 md:border-l md:first:border-l-0 md:border-[#2d3a4f]">
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span
                    className={`stat-chrome text-5xl md:text-6xl leading-none ${s.accent ? "!bg-none" : ""}`}
                    style={
                      s.accent
                        ? { color: "#ff4a63", WebkitTextFillColor: "#ff4a63", background: "none" }
                        : undefined
                    }
                  >
                    {s.value}
                  </span>
                  <span className="font-display text-xs tracking-[0.2em] text-[#94a3b8]">{s.unit}</span>
                </div>
                <div className="text-[11px] md:text-xs uppercase tracking-[0.14em] text-[#94a3b8] mt-2 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== THE STORY — master mechanic, pardoned =========== */}
      <section className="story-section section">
        <div className="container max-w-5xl">
          <div className="text-center mb-14 reveal">
            <div className="pardon-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
              The Troy Lake Story
            </div>
            <h2 className="story-headline text-[#1c2434] text-4xl md:text-6xl mb-5">
              Built by a master mechanic.<br />
              <span className="text-[#8b0f1c]">Pardoned by a president.</span>
            </h2>
            <p className="text-[#555] text-lg max-w-2xl mx-auto leading-relaxed">
              Three decades of keeping America&apos;s trucks running. A federal case over emissions controls. Two full pardons from President Trump. And a national push for common-sense diesel reform.
            </p>
          </div>

          {/* Two-column story */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start mt-16 reveal">
            <div className="space-y-5 text-[#333] leading-relaxed">
              <p>
                Troy Lake started in the trade in <strong>1983</strong>. A long history with Caterpillar, time inside the company and years working alongside their engineering teams, taught him every heavy diesel platform from the ground up. The kind of expertise that can&apos;t be faked or fast-tracked.
              </p>
              <p>
                In <strong>1996</strong> he opened Elite Diesel Service out of a pickup truck in Dubois, Wyoming, running mobile repair for ranchers, loggers, and owner-operators who needed the work done right. The shop grew through Elko, Nevada and Windsor, Colorado before planting its flag in Cheyenne in March <strong>2022</strong>.
              </p>
              <div className="pull-quote">
                &ldquo;We have tools most shops don&apos;t carry, and standards most shops don&apos;t hold. That&apos;s why people drive three states to bring their trucks here.&rdquo;
              </div>
            </div>

            <div className="space-y-5 text-[#333] leading-relaxed">
              <p>
                Troy was later prosecuted under the Clean Air Act for conspiracy to disable emissions controls on hundreds of commercial trucks. The work was done for customers who asked for it, in an industry caught between regulators and the reality of keeping a truck on the road. He served seven months.
              </p>
              <p>
                On <strong>November 7, 2025</strong>, President Trump granted Troy a <strong>full and unconditional pardon</strong>. On <strong>February 12, 2026</strong>, the president pardoned <strong>Elite Diesel Service</strong> as well. A rare second pardon for the company itself. Civil rights fully restored.
              </p>
              <p>
                Today Troy is a leading public voice for the <strong>Diesel Truck Liberation Act</strong>, H.R. 8079, introduced March 25, 2026 by Rep. Mike Collins (R-GA-10) with a Senate companion from Sen. Cynthia Lummis (R-WY).
              </p>
            </div>
          </div>

          {/* Milestone strip */}
          <div className="mt-20 relative reveal">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#d1c8bb] to-transparent" />
            <div className="relative grid grid-cols-5 gap-2">
              {MILESTONES.map((m) => (
                <div key={m.year} className="flex flex-col items-center text-center">
                  <div className={`timeline-dot ${m.accent ? "timeline-dot-accent" : ""} mb-4`} />
                  <div className="font-display text-xl md:text-2xl font-bold text-[#1c2434] tracking-tight">
                    {m.year}
                  </div>
                  <div className={`text-[10px] md:text-xs uppercase tracking-[0.12em] mt-1 ${m.accent ? "text-[#8b0f1c] font-bold" : "text-[#666]"}`}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link href="/about" className="btn-outline">
              The Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* =========== SERVICES =========== */}
      <section className="section bg-[#f9f7f4]">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <div className="badge mb-3">What We Do</div>
            <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-3 tracking-tight">
              Full-Service Diesel Shop
            </h2>
            <p className="text-[#666] mt-4 max-w-xl mx-auto leading-relaxed">
              From a single diagnostic to a complete engine build, we handle everything heavy diesel under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
            {SERVICES.map((s) => (
              <Link key={s.title} href="/services" className="card-service-pro block">
                <div className="card-icon">{s.icon}</div>
                <h3 className="font-display text-base font-bold mb-2 text-[#1a1a1a] uppercase tracking-wide">{s.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* =========== WHY US — four cards =========== */}
      <section className="section bg-white border-t border-[#e8e2da]">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <div className="badge mb-3">Why Elite</div>
            <h2 className="font-display uppercase text-3xl md:text-5xl font-bold text-[#1a1a1a] mt-3 tracking-tight leading-[1.05]">
              Why Owner-Operators Drive Past<br />
              <span className="text-[#8b0f1c]">Three Shops to Get Here.</span>
            </h2>
            <p className="text-[#666] mt-5 max-w-2xl mx-auto leading-relaxed">
              There&apos;s a reason trucks from Laramie, Casper, Fort Collins, and the Nebraska panhandle show up on our lot. Four, actually.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
            {[
              {
                num: "43",
                title: "Years In The Trade",
                body: "Turning wrenches since 1983. Same family, same standards, same phone number. We’ve seen every failure mode at least twice.",
              },
              {
                num: "CAT",
                title: "Factory & Engineering-Team Background",
                body: "Troy has a deep history with Caterpillar: time inside the company and years working alongside their engineering teams. You can’t fake that kind of pattern recognition.",
              },
              {
                num: "Millions",
                title: "Trucks Kept Running",
                body: "Over four decades, we’ve put millions of rigs back on the road. Parts, injectors, turbos, rebuilds. Every mile America hauls, a shop like this is behind it.",
              },
              {
                num: "1",
                title: "Shop That Answers The Phone",
                body: "Call (307) 400-5090 during shop hours. A human picks up. Novel concept in 2026.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-[#f9f7f4] border border-[#e8e2da] rounded-2xl p-7 hover:border-[#c8102e] hover:shadow-md transition-all">
                <div className="font-display text-5xl md:text-6xl font-bold text-[#c8102e] leading-none tracking-tighter mb-4">{c.num}</div>
                <h3 className="font-display uppercase text-base font-bold text-[#1a1a1a] tracking-wide mb-3">{c.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== DYNO CALLOUT =========== */}
      <section className="section section-warm">
        <div className="container">
          <div className="rounded-2xl bg-[#0a0a0a] text-white p-10 md:p-14 overflow-hidden relative border border-[#1f2937] reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8102e] opacity-15 rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b0f1c] opacity-10 rounded-full -translate-x-1/3 translate-y-1/3" />
            <div className="relative max-w-2xl">
              <div className="badge mb-4" style={{ background: "rgba(200,16,46,0.18)", color: "#ff9fac", borderColor: "rgba(200,16,46,0.35)" }}>
                Built Different
              </div>
              <h2 className="font-display uppercase text-3xl md:text-4xl font-bold mt-3 mb-5 tracking-tight leading-[1.05]">
                Chassis &amp; Engine Dyno <span className="text-ember">(Coming Soon)</span>. Custom Injectors.<br />
                <span className="text-ember">This Isn&apos;t a Quick-Lube Shop.</span>
              </h2>
              <p className="text-[#94a3b8] leading-relaxed mb-8">
                We have tools most Wyoming diesel shops don&apos;t carry. An on-site chassis dynamometer is coming soon so we can tune and verify, not guess. Proprietary fuel-economy injectors are built here, tested here, and proven before they ship. We also handle diesel-to-natural gas conversions and custom race engines.
              </p>
              <a href="tel:3074005090" className="btn-primary">
                Talk to a Tech: (307) 400-5090
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========== REVIEWS =========== */}
      <section className="section bg-white border-y border-[#e8e2da]">
        <div className="container">
          <div className="text-center mb-12 reveal">
            <div className="badge mb-3">What Customers Say</div>
            <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-3 tracking-tight">
              Real Reviews. Real Trucks.
            </h2>
            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="text-sm font-semibold text-[#888]">Verified Google Reviews</span>
            </div>
          </div>
          <div className="reveal">
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      {/* =========== CONTACT =========== */}
      <section className="section bg-[#f9f7f4]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start reveal">
            <div>
              <div className="badge mb-4">Come See Us</div>
              <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-3 mb-4 tracking-tight leading-[1.02]">
                Ready to Bring Your Truck In?
              </h2>
              <p className="text-[#555] mb-8 leading-relaxed">
                Give us a call or stop by. We serve owner-operators, fleets, construction crews, and everyone in between. If it runs on diesel, we work on it. No license plate required. Honest estimates, real expertise, fast turnaround.
              </p>
              <a href="tel:3074005090" className="btn-primary text-base py-3.5 px-8">
                ☎ (307) 400-5090
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-[#e8e2da] p-8 shadow-sm">
              {[
                { label: "Address", value: "104 Robert Ave, Cheyenne, WY 82007", href: "https://maps.google.com/?q=104+Robert+Ave+Cheyenne+WY+82007" },
                { label: "Phone", value: "(307) 400-5090", href: "tel:3074005090" },
                { label: "Hours", value: "Mon to Fri · 8am to 5pm (closed 12 to 1)", href: null },
                { label: "Rates", value: "Trucks $175/hr · Motorhomes $250/hr", href: null },
              ].map((item) => (
                <div key={item.label} className="flex gap-5 py-4 border-b border-[#f0ece5] last:border-0">
                  <div className="font-display text-[#888] text-xs font-semibold uppercase tracking-wider w-16 pt-0.5 shrink-0">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-[#1a1a1a] hover:text-[#c8102e] transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-[#1a1a1a] font-medium">{item.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
