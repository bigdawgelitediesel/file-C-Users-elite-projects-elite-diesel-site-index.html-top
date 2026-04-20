import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press & Media · Elite Diesel Service",
  description:
    "Interviews, comment requests, and press inquiries on Elite Diesel Service, Troy Lake, and the H.R. 8079 pardon arc. Point of contact: Jake Dalton.",
};

const KIT_ASSETS = [
  "Elite Diesel Service logo (PNG & SVG)",
  "Troy Lake headshot (placeholder, coming soon)",
  "Shop exteriors · Cheyenne, WY (placeholder, coming soon)",
  "H.R. 8079 one-pager: Diesel Truck Liberation Act",
];

const COVERAGE_STUBS = [
  { outlet: "Coming soon", note: "Feature on the two-pardon arc." },
  { outlet: "Coming soon", note: "Interview on H.R. 8079 and the shop floor." },
  { outlet: "Coming soon", note: "Profile on Troy Lake & Elite Diesel Service." },
];

export default function PressPage() {
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
            Media &amp; Press
          </div>
          <h1 className="font-display uppercase text-white font-bold tracking-tight leading-[0.9] text-[clamp(3rem,9vw,7rem)] max-w-5xl">
            Press / <span className="text-ember">Media.</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-[#cbd5e1] leading-relaxed max-w-2xl">
            For interviews, comment requests, and press inquiries on Elite Diesel Service,
            Troy Lake, or the H.R. 8079 pardon arc, Jake Dalton is the point of contact.
          </p>
        </div>
      </section>

      {/* PRESS KIT */}
      <section className="section bg-[#f9f7f4]">
        <div className="container max-w-4xl">
          <div className="text-center mb-16 reveal">
            <div className="badge mb-3">Press Kit</div>
            <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-3 tracking-tight leading-[1.02]">
              Assets &amp; Materials
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#e5e7eb] shadow-sm reveal">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 pb-8 border-b border-[#e5e7eb]">
              <div>
                <div className="font-display uppercase text-xs tracking-[0.2em] text-[#8b0f1c] font-bold mb-2">
                  Full Kit
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-tight">
                  Elite Diesel Service Press Kit
                </div>
                <div className="text-[#64748b] text-sm mt-2">
                  Logos, photography, and H.R. 8079 background.
                </div>
              </div>
              <button
                type="button"
                disabled
                className="btn-outline opacity-60 cursor-not-allowed shrink-0"
              >
                Download Press Kit (PDF), coming soon
              </button>
            </div>

            <div className="font-display uppercase text-xs tracking-[0.2em] text-[#8b0f1c] font-bold mb-4">
              Available Assets
            </div>
            <ul className="flex flex-col gap-3">
              {KIT_ASSETS.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[#1a1a1a]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c8102e] shrink-0" />
                  <span className="text-base md:text-lg leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT BLOCK */}
      <section className="bg-[#0a0a0a] text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,16,46,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="container max-w-4xl relative reveal">
          <div className="text-center mb-12">
            <div className="font-display uppercase text-xs tracking-[0.25em] text-[#ff6b7e] font-bold mb-4">
              Press Inquiries
            </div>
            <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Jake Dalton
            </h2>
            <div className="text-[#94a3b8] mt-3 font-display uppercase tracking-[0.2em] text-sm">
              Media Contact · Elite Diesel Service
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:bigdawgelitediesel@gmail.com"
              className="bg-[#111] border border-[#1f2937] rounded-2xl p-8 hover:border-[#c8102e] transition-colors group"
            >
              <div className="font-display uppercase text-xs tracking-[0.2em] text-[#94a3b8] mb-3">
                Email
              </div>
              <div className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-[#ff6b7e] transition-colors break-all">
                bigdawgelitediesel@gmail.com
              </div>
            </a>
            <a
              href="tel:3074005090"
              className="bg-[#111] border border-[#1f2937] rounded-2xl p-8 hover:border-[#c8102e] transition-colors group"
            >
              <div className="font-display uppercase text-xs tracking-[0.2em] text-[#94a3b8] mb-3">
                Phone
              </div>
              <div className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-[#ff6b7e] transition-colors">
                (307) 400-5090
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* RECENT COVERAGE */}
      <section className="section bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-16 reveal">
            <div className="badge mb-3">Recent Coverage</div>
            <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-3 tracking-tight leading-[1.02]">
              In The Press
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 reveal">
            {COVERAGE_STUBS.map((c, i) => (
              <div
                key={i}
                className="card-service flex flex-col gap-3"
              >
                <div className="font-display uppercase text-xs tracking-[0.2em] text-[#8b0f1c] font-bold">
                  {c.outlet}
                </div>
                <div className="font-display text-xl font-bold text-[#1a1a1a] tracking-tight leading-snug">
                  Feature by &lt;outlet&gt;
                </div>
                <div className="text-[#64748b] text-sm leading-relaxed">
                  {c.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-[#0a0a0a] text-white border-t border-[#1f2937]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display uppercase text-2xl font-bold text-white tracking-tight mb-1">
              On deadline?
            </div>
            <div className="text-[#94a3b8] text-sm">
              Call Jake direct. Fastest way to a quote or interview.
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
