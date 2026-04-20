import Link from "next/link";

/**
 * Full-bleed dramatic section between the story and services.
 * Black background, red accent lines, monumental pardon dates,
 * Troy pull quote, H.R. 8079 callout.
 */
export function PardonSection() {
  return (
    <section className="pardon-section" id="pardon">
      <div className="pardon-accent-bar absolute top-0 left-0 right-0" />

      <div className="container relative">
        <div className="reveal flex flex-col items-center text-center mb-16">
          <div className="pardon-pill mb-6" style={{ background: "rgba(200,16,46,0.15)", color: "#ff9fac", borderColor: "rgba(200,16,46,0.45)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
            Two Presidential Pardons
          </div>
          <h2 className="font-display uppercase text-white font-bold leading-[0.95] tracking-tight text-[clamp(2.25rem,5.5vw,4.5rem)] max-w-4xl">
            Troy Lake: Pardoned.<br />
            Elite Diesel Service: <span className="text-ember">Pardoned.</span><br />
            <span className="text-[#94a3b8]">America&apos;s diesel shops are next.</span>
          </h2>
        </div>

        {/* Monumental date pair */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-20 items-start">
          <div className="md:border-r md:border-[#1f2937] md:pr-10">
            <div className="font-display uppercase tracking-[0.25em] text-[#ff6b7e] text-xs font-bold mb-4">
              Troy Lake · Full &amp; Unconditional
            </div>
            <div className="pardon-date pardon-date-filled mono-display">
              11.07.25
            </div>
            <div className="mt-6 text-[#cbd5e1] leading-relaxed max-w-md">
              President Trump grants Troy Lake a <strong className="text-white">full and unconditional pardon</strong>.
              Civil rights restored. Record cleared. Troy is back under a truck the following morning.
            </div>
          </div>

          <div>
            <div className="font-display uppercase tracking-[0.25em] text-[#ff6b7e] text-xs font-bold mb-4">
              Elite Diesel Service · The Shop Itself
            </div>
            <div className="pardon-date pardon-date-filled mono-display">
              02.12.26
            </div>
            <div className="mt-6 text-[#cbd5e1] leading-relaxed max-w-md">
              A rare second pardon: <strong className="text-white">Elite Diesel Service</strong> itself is pardoned.
              Owner cleared first, company cleared next. The shop is whole again.
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div className="reveal max-w-4xl mx-auto mb-20">
          <p className="pardon-pullquote">
            &ldquo;Diesel isn&apos;t a culture war. It&apos;s the supply chain. Every loaf of bread,
            every gallon of milk, every panel on every wind turbine in this state got here
            on a diesel truck. You break the trucks, you break the country.&rdquo;
          </p>
          <div className="mt-5 pl-8 font-display uppercase text-sm tracking-[0.2em] text-[#94a3b8]">
            Troy Lake, Owner
          </div>
        </div>

        <div className="pardon-accent-bar opacity-60 mb-16" />

        {/* H.R. 8079 callout */}
        <div className="reveal grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <div className="font-display uppercase tracking-[0.25em] text-[#ff6b7e] text-xs font-bold mb-3">
              Now in Congress
            </div>
            <h3 className="font-display uppercase text-white font-bold leading-[0.95] text-[clamp(1.75rem,4vw,3rem)] mb-5 tracking-tight">
              H.R. 8079: The Diesel Truck Liberation Act
            </h3>
            <p className="text-[#cbd5e1] leading-relaxed text-base md:text-lg max-w-2xl">
              Introduced March 25, 2026 by Representative{" "}
              <strong className="text-white">Mike Collins (R-GA-10)</strong>. Senate companion by Senator{" "}
              <strong className="text-white">Cynthia Lummis (R-WY)</strong>. The bill bars the EPA from enforcing
              Clean Air Act emissions-control requirements on commercial motor vehicles. Reform that puts the working
              mechanic back on equal footing with the regulator.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-[#1f2937] rounded-xl p-7">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-display text-5xl font-bold text-white leading-none">8079</span>
              <span className="font-display uppercase text-xs tracking-[0.2em] text-[#94a3b8]">House Bill</span>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between border-b border-[#1f2937] pb-2">
                <span className="text-[#94a3b8] uppercase text-xs tracking-wider">House Sponsor</span>
                <span className="text-white font-semibold">Rep. Collins (R-GA)</span>
              </div>
              <div className="flex justify-between border-b border-[#1f2937] pb-2">
                <span className="text-[#94a3b8] uppercase text-xs tracking-wider">Senate Companion</span>
                <span className="text-white font-semibold">Sen. Lummis (R-WY)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8] uppercase text-xs tracking-wider">Introduced</span>
                <span className="text-white font-semibold">March 25, 2026</span>
              </div>
            </div>
            <Link
              href="/reform"
              className="mt-6 inline-flex items-center gap-2 text-[#ff6b7e] font-display uppercase tracking-[0.15em] text-sm font-bold hover:text-white transition-colors"
            >
              Read the Bill →
            </Link>
          </div>
        </div>
      </div>

      <div className="pardon-accent-bar absolute bottom-0 left-0 right-0" />
    </section>
  );
}
