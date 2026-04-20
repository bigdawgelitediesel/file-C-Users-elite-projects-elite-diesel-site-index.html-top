import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Troy Lake & Elite Diesel Service",
  description:
    "Troy Lake founded Elite Diesel Service in 1995 after 22 years as a certified Master Mechanic at Caterpillar. Women-owned. Veteran-owned. Twice pardoned by President Trump.",
};

const TIMELINE = [
  {
    year: "1983",
    event: "In the trade",
    detail: "Troy starts turning wrenches on heavy diesel equipment. The beginning of a career built on doing the work himself, not watching someone else do it.",
  },
  {
    year: "22 yrs",
    event: "Caterpillar Master Mechanic",
    detail: "Twenty-two years with CAT honing expertise across every major diesel platform. The kind of experience that can't be faked or fast-tracked — it only comes from time on the tools.",
  },
  {
    year: "1995",
    event: "Elite Diesel founded · Dubois, WY",
    detail: "Troy opens Elite Diesel Service out of a pickup truck in Dubois, Wyoming, running mobile repair for ranchers, loggers, and owner-operators across the Wind River range.",
  },
  {
    year: "2022",
    event: "Cheyenne shop opens",
    detail: "After stops in Elko, Nevada and Windsor, Colorado, Elite Diesel plants its flag in Cheyenne: bigger shop, chassis dyno, full parts inventory, more trucks to serve.",
  },
  {
    year: "2024",
    event: "Federal prosecution",
    detail: "Troy and Elite Diesel Service are convicted under the Clean Air Act for disabling emissions controls on hundreds of commercial trucks — work done for customers who asked for it. Troy serves seven months.",
    accent: true,
  },
  {
    year: "11/7/25",
    event: "Troy Lake pardoned",
    detail: "President Trump grants Troy a full and unconditional pardon. Civil rights restored. Record cleared. Troy is back under a truck the following morning.",
    accent: true,
  },
  {
    year: "2/12/26",
    event: "Elite Diesel Service pardoned",
    detail: "A rare second pardon: Elite Diesel Service itself is pardoned. Owner cleared first, company cleared next. The shop is whole again.",
    accent: true,
  },
  {
    year: "Today",
    event: "Public voice for reform",
    detail: "Troy is a leading public voice for the Diesel Truck Liberation Act — H.R. 8079. Elite Diesel supports the effort. Loudly.",
  },
];

const CREDS = [
  "22 years at Caterpillar",
  "Certified Master Mechanic",
  "ASE-Certified Shop",
  "Proprietary injector and turbo development",
  "Chassis dynamometer on-site",
  "Women-owned · Veteran-owned · Family-run",
];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="section-sm bg-[#0a0a0a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 30% 40%, rgba(200,16,46,0.4) 0%, transparent 60%)",
          }}
        />
        <div className="container relative">
          <div className="badge mb-4" style={{ background: "rgba(200,16,46,0.15)", color: "#ff9fac", borderColor: "rgba(200,16,46,0.4)" }}>Our Story</div>
          <h1 className="font-display uppercase text-5xl md:text-7xl font-bold text-white mt-4 mb-5 tracking-tight leading-[0.95]">
            Built on Real<br />
            <span className="text-ember">Experience.</span>
          </h1>
          <p className="text-[#cbd5e1] text-lg max-w-2xl leading-relaxed">
            Elite Diesel wasn&apos;t built on a business plan. It was built on 22 years at Caterpillar, a pickup truck in Wyoming, and a refusal to do anything halfway. Women-owned. Veteran-owned. Family-run since 1995.
          </p>
        </div>
      </section>

      {/* Troy */}
      <section className="section bg-[#f9f7f4]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start reveal">
            <div>
              <div className="badge mb-4">The Owner</div>
              <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-4 mb-6 tracking-tight leading-[1.05]">Troy Lake</h2>
              <p className="text-[#444] leading-relaxed mb-5">
                Troy Lake is a certified Master Mechanic who spent 22 years at Caterpillar before going out on his own. He started Elite Diesel in Dubois, Wyoming — mobile service out of a pickup, serving the ranchers, loggers, and truckers of the mountain west who needed the work done right.
              </p>
              <p className="text-[#444] leading-relaxed mb-5">
                He&apos;s built engines for work trucks and race trucks alike. He&apos;s diagnosed problems that stumped every other shop in a 300-mile radius. He doesn&apos;t guess. He knows.
              </p>
              <p className="text-[#444] leading-relaxed mb-8">
                His son TJ works alongside him at the Cheyenne shop. Two generations. Same standard.
              </p>
              <div className="flex flex-col gap-3">
                {CREDS.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[#333]">
                    <span className="text-[#c8102e] font-bold shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "22+", label: "Years at CAT" },
                  { value: "1995", label: "Founded" },
                  { value: "5", label: "Major Platforms" },
                  { value: "2×", label: "Pardoned", accent: true },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-[#e8e2da] rounded-2xl p-7 text-center shadow-sm">
                    <div className={`font-display text-5xl font-bold mb-2 tracking-tight ${s.accent ? "text-[#c8102e]" : "text-[#1a1a1a]"}`}>{s.value}</div>
                    <div className="font-display text-xs font-semibold text-[#555] uppercase tracking-[0.15em]">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* The Essentials — facts dossier */}
              <div className="bg-[#0a0a0a] text-white border border-[#1f2937] rounded-2xl p-7 shadow-sm">
                <div className="font-display uppercase text-xs font-bold tracking-[0.2em] text-[#ff9fac] mb-5">The Essentials</div>
                <dl className="flex flex-col divide-y divide-[#1f2937]">
                  {[
                    { dt: "Founded", dd: "1995" },
                    { dt: "Headquarters", dd: "Cheyenne, Wyoming" },
                    { dt: "Owner", dd: "Troy Lake" },
                    { dt: "Certification", dd: "Master Mechanic" },
                    { dt: "Prior Experience", dd: "22 Years at Caterpillar" },
                    { dt: "Ownership", dd: "Women-Owned · Veteran-Owned" },
                    { dt: "Platforms Serviced", dd: "CAT · Cummins · Detroit · PACCAR · Volvo" },
                  ].map((f) => (
                    <div key={f.dt} className="flex justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
                      <dt className="font-display uppercase text-[10px] tracking-[0.15em] text-[#94a3b8] pt-1 shrink-0">{f.dt}</dt>
                      <dd className="text-sm font-semibold text-white text-right">{f.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pardon arc — dramatic block */}
      <section className="pardon-section">
        <div className="container relative reveal">
          <div className="pardon-pill mb-5" style={{ background: "rgba(200,16,46,0.15)", color: "#ff9fac", borderColor: "rgba(200,16,46,0.45)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
            The Pardon Arc
          </div>
          <h2 className="font-display uppercase text-white text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[0.95] mb-12 tracking-tight max-w-3xl">
            Two Full Pardons.<br />
            <span className="text-ember">The Shop Is Whole Again.</span>
          </h2>

          <div className="max-w-3xl text-[#cbd5e1] space-y-5 leading-relaxed text-base md:text-lg">
            <p>
              Troy was prosecuted under the Clean Air Act for disabling emissions controls on hundreds of commercial trucks — work done for customers who asked for it, in an industry caught between regulators and the realities of keeping a truck on the road. He served seven months.
            </p>
            <p>
              On <strong className="text-white">November 7, 2025</strong>, President Trump granted Troy a full and unconditional pardon. On <strong className="text-white">February 12, 2026</strong>, the president pardoned Elite Diesel Service itself — a rare second pardon for the company. Civil rights fully restored.
            </p>
            <p>
              Today Troy is a leading public voice for the <strong className="text-white">Diesel Truck Liberation Act</strong> — H.R. 8079, introduced March 25, 2026 by Rep. Mike Collins (R-GA-10) with a Senate companion from Sen. Cynthia Lummis (R-WY). The bill would bar the EPA from enforcing Clean Air Act emissions-control requirements on motor vehicles.
            </p>
          </div>

          <div className="pardon-pullquote mt-12 max-w-3xl">
            &ldquo;Diesel isn&apos;t a culture war. It&apos;s the supply chain. Every loaf of bread, every gallon of milk, every panel on every wind turbine in this state got here on a diesel truck. You break the trucks, you break the country.&rdquo;
          </div>
          <div className="mt-5 pl-8 font-display uppercase text-sm tracking-[0.2em] text-[#94a3b8]">
            — Troy Lake, Owner
          </div>

          <div className="mt-12">
            <Link href="/reform" className="btn-primary">
              The full story on reform →
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white border-y border-[#e8e2da]">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <div className="badge mb-3">The History</div>
            <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-3 tracking-tight">How We Got Here</h2>
          </div>
          <div className="max-w-2xl mx-auto reveal">
            {TIMELINE.map((t, i) => (
              <div key={`${t.year}-${i}`} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm ${t.accent ? "bg-[#c8102e]" : "bg-[#1c2434]"}`}
                  >
                    <span className="text-white font-display font-bold text-[10px] text-center leading-tight px-1">{t.year}</span>
                  </div>
                  {i < TIMELINE.length - 1 && <div className={`w-0.5 flex-1 my-2 ${t.accent ? "bg-[#c8102e]/40" : "bg-[#e8e2da]"}`} />}
                </div>
                <div className="pb-10">
                  <div className={`font-display font-bold text-base uppercase tracking-wide mb-1 ${t.accent ? "text-[#8b0f1c]" : "text-[#1a1a1a]"}`}>{t.event}</div>
                  <div className="text-sm text-[#555] leading-relaxed">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-[#f9f7f4]">
        <div className="container max-w-3xl mx-auto text-center reveal">
          <div className="badge mb-4">Our Philosophy</div>
          <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-4 mb-6 tracking-tight leading-[1.02]">
            Knowledge. Quality. Innovation.
          </h2>
          <p className="text-lg text-[#444] leading-relaxed mb-5">
            These aren&apos;t words on a sign. They&apos;re how the shop runs. We don&apos;t guess at diagnoses. We don&apos;t cut corners on rebuilds. And we never stop looking for a better way to do things.
          </p>
          <p className="text-[#666] leading-relaxed mb-10">
            That&apos;s why we build our own injectors. That&apos;s why we have a chassis dyno instead of just taking the customer&apos;s word. That&apos;s why people who could go to a shop down the street drive 800 miles to bring their truck to us.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:3074005090" className="btn-primary">☎ (307) 400-5090</a>
            <Link href="/services" className="btn-outline">See Our Services →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
