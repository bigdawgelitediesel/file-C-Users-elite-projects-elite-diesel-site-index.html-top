import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reform · The Pardon Arc & H.R. 8079",
  description:
    "Troy Lake's pardon, Elite Diesel Service's second pardon, and the Diesel Truck Liberation Act — H.R. 8079, Rep. Mike Collins (R-GA) and Sen. Cynthia Lummis (R-WY).",
};

const CHAPTERS = [
  {
    num: "I",
    date: "1983 – 2024",
    heading: "The Work",
    body: "Troy Lake spent 22 years at Caterpillar before going out on his own. He built Elite Diesel Service from a pickup truck in Dubois, Wyoming into a full-service shop in Cheyenne — chassis dyno, proprietary injector development, ASE-certified team. Thousands of trucks. A reputation earned the hard way: diagnose right, fix once, document everything.",
  },
  {
    num: "II",
    date: "2024",
    heading: "The Prosecution",
    body: "Troy and Elite Diesel Service were convicted under the Clean Air Act for disabling emissions controls on hundreds of commercial trucks. The work was done for customers who asked for it, in an industry where after-treatment failures regularly take rigs out of service at the worst possible times. A federal case followed. Troy served seven months.",
  },
  {
    num: "III",
    date: "November 7, 2025",
    heading: "The First Pardon",
    body: "President Trump granted Troy Lake a full and unconditional pardon. Civil rights restored. Record cleared. Troy was back under a truck the following morning. For the shop's customers — owner-operators who'd followed the case for a year — the news traveled fast.",
  },
  {
    num: "IV",
    date: "February 12, 2026",
    heading: "The Second Pardon",
    body: "A rarity: President Trump pardoned Elite Diesel Service itself. The company, not just the man. Owner cleared first, company cleared next. Two pardons closed the arc. The shop was whole again.",
  },
  {
    num: "V",
    date: "March 25, 2026",
    heading: "The Bill",
    body: "Representative Mike Collins (R-GA-10) — who built his own trucking company from a single rig before taking his seat in Congress — introduced the Diesel Truck Liberation Act, H.R. 8079, in the House. Senator Cynthia Lummis (R-WY) runs the companion bill in the Senate. The bill bars the EPA from enforcing Clean Air Act emissions-control requirements on commercial motor vehicles.",
  },
  {
    num: "VI",
    date: "Today",
    heading: "The Voice",
    body: "Troy is a leading public voice for the bill. Not a politician. A mechanic who's been on every side of this issue: the shop floor, the courtroom, the cell, and the press conference. Elite Diesel Service supports the Diesel Truck Liberation Act. Loudly.",
  },
];

export default function ReformPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(200,16,46,0.5) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/></svg>\")",
          }}
        />
        <div className="container relative py-32 md:py-44">
          <div className="pardon-pill mb-6" style={{ background: "rgba(200,16,46,0.15)", color: "#ff9fac", borderColor: "rgba(200,16,46,0.45)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
            The Pardon Arc · H.R. 8079
          </div>
          <h1 className="font-display uppercase text-white font-bold tracking-tight leading-[0.9] text-[clamp(3rem,9vw,7rem)] max-w-5xl">
            One Mechanic.<br />
            <span className="text-ember">Two Pardons.</span><br />
            <span className="text-chrome">One Bill.</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-[#cbd5e1] leading-relaxed max-w-2xl">
            The story of how Troy Lake and Elite Diesel Service got here — and where the fight goes next.
          </p>
        </div>
      </section>

      {/* DATE BOOKENDS */}
      <section className="pardon-section">
        <div className="container relative grid md:grid-cols-2 gap-10 md:gap-16 items-center reveal">
          <div>
            <div className="font-display uppercase tracking-[0.25em] text-[#ff6b7e] text-xs font-bold mb-4">
              Troy Lake · Full &amp; Unconditional
            </div>
            <div className="pardon-date pardon-date-filled mono-display">11.07.25</div>
            <p className="mt-6 text-[#cbd5e1] leading-relaxed">
              Civil rights restored. Record cleared. Back under a truck the next morning.
            </p>
          </div>
          <div>
            <div className="font-display uppercase tracking-[0.25em] text-[#ff6b7e] text-xs font-bold mb-4">
              Elite Diesel Service · The Shop Itself
            </div>
            <div className="pardon-date pardon-date-filled mono-display">02.12.26</div>
            <p className="mt-6 text-[#cbd5e1] leading-relaxed">
              A rare second pardon for the company. Owner cleared first, company cleared next.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTERED NARRATIVE */}
      <section className="section bg-[#f9f7f4]">
        <div className="container max-w-4xl">
          <div className="text-center mb-20 reveal">
            <div className="badge mb-3">The Arc</div>
            <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-3 tracking-tight leading-[1.02]">
              How We Got Here
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            {CHAPTERS.map((c) => (
              <div key={c.num} className="reveal grid grid-cols-[auto_1fr] gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className="font-display text-6xl md:text-8xl font-bold text-[#c8102e] leading-none tracking-tighter">
                    {c.num}
                  </div>
                  <div className="mt-2 w-px flex-1 bg-gradient-to-b from-[#c8102e]/40 to-transparent" />
                </div>
                <div className="pb-4">
                  <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8b0f1c] mb-2">
                    {c.date}
                  </div>
                  <h3 className="font-display uppercase text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
                    {c.heading}
                  </h3>
                  <p className="text-[#444] leading-relaxed text-base md:text-lg">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-[#0a0a0a] text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,16,46,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="container max-w-4xl relative reveal">
          <div className="pardon-pullquote text-xl md:text-3xl">
            &ldquo;Diesel isn&apos;t a culture war. It&apos;s the supply chain. Every loaf of bread, every gallon
            of milk, every panel on every wind turbine in this state got here on a diesel truck. You break
            the trucks, you break the country.&rdquo;
          </div>
          <div className="mt-6 pl-8 font-display uppercase text-sm tracking-[0.2em] text-[#94a3b8]">
            — Troy Lake, Owner · Elite Diesel Service
          </div>
        </div>
      </section>

      {/* BILL DETAIL */}
      <section className="section bg-white" id="bill">
        <div className="container max-w-4xl reveal">
          <div className="text-center mb-12">
            <div className="badge mb-3">The Bill</div>
            <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-3 tracking-tight leading-[1.02]">
              H.R. 8079 — Diesel Truck Liberation Act
            </h2>
          </div>

          <div className="bg-[#0a0a0a] text-white rounded-2xl p-8 md:p-12 border border-[#1f2937] mb-10">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-display text-7xl font-bold text-white leading-none tracking-tight">8079</span>
              <span className="font-display uppercase text-sm tracking-[0.2em] text-[#94a3b8]">House Bill</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="font-display uppercase text-xs tracking-[0.15em] text-[#94a3b8] mb-2">House Sponsor</div>
                <div className="text-white font-semibold text-lg">Rep. Mike Collins</div>
                <div className="text-[#cbd5e1] text-sm">R-GA-10</div>
              </div>
              <div>
                <div className="font-display uppercase text-xs tracking-[0.15em] text-[#94a3b8] mb-2">Senate Companion</div>
                <div className="text-white font-semibold text-lg">Sen. Cynthia Lummis</div>
                <div className="text-[#cbd5e1] text-sm">R-WY</div>
              </div>
              <div>
                <div className="font-display uppercase text-xs tracking-[0.15em] text-[#94a3b8] mb-2">Introduced</div>
                <div className="text-white font-semibold text-lg">March 25, 2026</div>
                <div className="text-[#cbd5e1] text-sm">119th Congress</div>
              </div>
            </div>
            <p className="text-[#cbd5e1] leading-relaxed text-base md:text-lg border-t border-[#1f2937] pt-8">
              The bill bars the Environmental Protection Agency from enforcing Clean Air Act emissions-control
              requirements on commercial motor vehicles. It&apos;s reform aimed at the shop floor: restoring the
              working mechanic to equal footing with the regulator, and recognizing that the people keeping
              America&apos;s trucks running should not be prosecuted for doing so.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="btn-primary">Read the full bill text →</a>
            <Link href="/about" className="btn-outline">About Troy Lake →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-[#0a0a0a] text-white border-t border-[#1f2937]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display uppercase text-2xl font-bold text-white tracking-tight mb-1">
              Stand with the shop.
            </div>
            <div className="text-[#94a3b8] text-sm">
              Elite Diesel Service supports the Diesel Truck Liberation Act.
            </div>
          </div>
          <a href="tel:3074005090" className="btn-primary text-base py-3.5 px-8 shrink-0">
            ☎ (307) 400-5090
          </a>
        </div>
      </section>
    </>
  );
}
