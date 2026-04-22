import type { Metadata } from "next";
import Link from "next/link";
import { ServiceGrid } from "../_components/service-modal";

export const metadata: Metadata = {
  title: "Services | Elite Diesel Service · Cheyenne, WY",
  description:
    "Full-service diesel repair: engine rebuilds, chassis/engine dyno (coming soon), ECM diagnostics, proprietary injectors, turbo repair, custom race builds. CAT, Cummins, Detroit, PACCAR, Volvo.",
};

const CATEGORIES = [
  {
    heading: "Engine Services",
    color: "#c8102e",
    services: [
      {
        icon: "Activity",
        title: "Engine Diagnostics",
        desc: "Factory-level tooling across all major diesel platforms. We find the real problem, not just throw parts at it.",
        detail: "We use manufacturer-specific diagnostic software: CAT ET, Insite, DDDL, DAVIE, and more. Not generic code readers. We pull fault codes, read live datasets, and run active tests to isolate the root cause before anything gets replaced. Our approach is diagnose first, fix once. We've solved problems other shops have been chasing for months.",
      },
      {
        icon: "Wrench",
        title: "Engine Rebuilds & Overhauls",
        desc: "Full top-end and bottom-end rebuilds. Documented, done right, backed by experience.",
        detail: "We do complete in-frame and out-of-frame overhauls across all major diesel platforms. Every measurement gets recorded: bearing clearances, ring gaps, torque sequences. We don't skip steps because we're in a hurry. Whether it's a top-end refresh or a full bottom-end rebuild, the work is done to OEM spec with quality parts and verified before the truck leaves. Troy has been doing this for over 40 years. These engines get done right.",
      },
      {
        icon: "RefreshCw",
        title: "Reman Engines",
        desc: "Remanufactured engines available for sale or exchange. Get your truck back on the road faster.",
        detail: "When a repair isn't cost-effective, a remanufactured engine is often the fastest path back to full-power operation. We source factory-reman units for CAT, Cummins, Detroit, PACCAR, and Volvo. Core returns are handled in-shop; we'll pull the old engine, install the reman, and get you rolling again with minimal downtime. Call us to discuss availability for your specific engine.",
      },
      {
        icon: "Hammer",
        title: "New Engine Builds",
        desc: "Custom builds optimized for fuel economy or performance. We build to your application.",
        detail: "We build from scratch, whether that's a fuel-economy focused long-haul setup, a high-torque heavy-haul spec, or a full competition build. Every component is selected for the application. Once our chassis dynamometer is online (coming soon), every build will be verified on the dyno before it goes in the truck. Either way, you'll know exactly what you're getting before you drive away.",
      },
    ],
  },
  {
    heading: "Performance & Tuning",
    color: "#1c2434",
    services: [
      {
        icon: "Gauge",
        title: "Chassis/Engine Dynamometer (Coming Soon)",
        desc: "Coming soon: on-site chassis and engine dyno for real-world power measurement, verified break-in, and tune validation at the wheels or at the flywheel.",
        detail: "Coming soon to Elite Diesel Service: both a chassis dyno and an engine dyno in-house, which is rare for a shop our size anywhere in the region. The chassis dyno will measure real-world horsepower and torque at the wheels with the drivetrain loaded, which is how we'll verify tune results, diagnose driveability issues that only show up under load, and baseline a truck before and after work. The engine dyno will take the long block out of the equation and measure exactly what the engine itself produces, from idle to redline, which is how we'll handle verified break-in on fresh rebuilds, tune development on race builds, and final QA before the engine ever drops back into a frame. Having both will let us answer two different questions on the same build: what the engine makes, and what the truck delivers. Call the shop for a timeline on when the dyno comes online.",
      },
      {
        icon: "Cpu",
        title: "ECM Diagnostics & Programming",
        desc: "Complete electronic control module service. Fault reading, programming, and calibration across all major platforms.",
        detail: "We provide full ECM service: reading and clearing faults, performing parameter adjustments, updating calibrations, and programming replacement modules. We work across CAT, Cummins, Detroit, PACCAR, and Volvo platforms. We can adjust power ratings, fuel trims, and idle parameters, and we can chase intermittent electrical issues that other shops have written off as unsolvable. If your truck is acting up and no one can figure out why, we probably can.",
      },
      {
        icon: "Fuel",
        title: "Proprietary Injectors",
        desc: "Fuel-economy tuned injectors built in-house and proven before they ship. Performance you won't find off the shelf.",
        detail: "We design and build our own fuel injectors in-house. These aren't remanufactured stockers, they're purpose-engineered for improved fuel atomization and combustion efficiency. The result is measurably better fuel economy and, in most cases, better power. Every set is proven in-house before it leaves the shop, and once our dyno is online (coming soon), every set will get dyno verification too. We sell to owner-operators, fleets, and shops across the country. If you're tired of mediocre injectors, this is the upgrade.",
      },
      {
        icon: "Trophy",
        title: "Custom Diesel Race Engines",
        desc: "High-output builds for competitive diesel motorsport. We've been building race engines for decades.",
        detail: "We've been building competition diesel engines for serious competitors for decades: sled pulls, truck pulls, circuit events. These aren't modified stock engines. They're ground-up builds spec'd to your class rules, your power goals, and your budget. We've built winners at regional and national levels. If you're serious about competition, call the shop and we'll tell you straight what's possible.",
      },
    ],
  },
  {
    heading: "Turbo & Fuel",
    color: "#8b0f1c",
    services: [
      {
        icon: "Wind",
        title: "Turbo Repair & Rebuild",
        desc: "Complete turbocharger service: diagnosis, rebuild, or replacement. Full inventory on hand for all major engines.",
        detail: "We stock turbos for all major diesel platforms and do complete turbocharger service in-house. Whether your turbo is lazy, surging, leaking oil, making noise, or completely failed, we'll diagnose it accurately and fix it correctly. Core rebuilds available for most units. We don't just swap turbos; we figure out why it failed so the next one doesn't go the same way. Shaft wear, compressor damage, oil starvation: we trace the cause.",
      },
      {
        icon: "Flame",
        title: "FULL TILT Manifolds",
        desc: "Our proprietary FULL TILT intake and exhaust manifolds for enhanced airflow and performance.",
        detail: "FULL TILT is our proprietary line of intake and exhaust manifolds, designed in-house for enhanced airflow and durability. Available for select CAT and Cummins applications. They're engineered to improve flow efficiency over stock manifolds while addressing the cracking and warping failures that plague OEM units under high-heat cycling. If you've cracked a manifold more than once, it's worth having a conversation about FULL TILT.",
      },
      {
        icon: "Zap",
        title: "Fuel System Service",
        desc: "Full fuel system diagnostics, cleaning, and repair. Injectors, lift pumps, high-pressure systems.",
        detail: "We service the entire fuel system, from the tank forward. Lift pumps, transfer pumps, high-pressure common rail systems, injector cups, fuel coolers, and all related components. We test pressure at every stage and don't guess at what's causing low power or hard starts. Proper fuel system health is the foundation of everything else in a diesel engine. We've diagnosed fuel problems that were being masked as turbo or engine issues.",
      },
    ],
  },
  {
    heading: "Specialty Services",
    color: "#0a0a0a",
    services: [
      {
        icon: "Settings",
        title: "Natural Gas Engine Service",
        desc: "Service and maintenance for natural gas engines. We stay current on alternative fuel platforms.",
        detail: "As fleets continue to expand into alternative fuels, we've stayed current on CNG and LNG engine service requirements. We're one of the few shops in the region with the equipment and training to properly service natural gas platforms. Scheduled maintenance, diagnostics, and repairs handled correctly, not guessed at by a shop that's never seen one before.",
      },
      {
        icon: "Factory",
        title: "Diesel-to-Natural Gas Conversions",
        desc: "Full diesel-to-CNG/LNG conversion service for fleets looking to reduce fuel costs.",
        detail: "We handle complete diesel-to-natural gas conversions for fleet operators looking to reduce fuel costs over high mileage. This includes fuel system replacement, ECM recalibration, and all documentation. It's a significant upfront investment that pays back at scale. We'll be straight with you about whether the math makes sense for your operation before you commit. Call the shop to discuss your fleet size and mileage profile.",
      },
      {
        icon: "Factory",
        title: "Construction Equipment, Generators & Off-Highway",
        desc: "If it runs on diesel, we work on it. No license plate required. Excavators, dozers, loaders, gensets, ag equipment, industrial diesel.",
        detail: "We're not just a truck shop. If it runs on diesel, we work on it. That includes construction equipment (excavators, dozers, loaders, skid steers), standby and prime-power generators, agricultural equipment, and industrial diesel of every kind. Same techs, same tooling, same standards we hold to road trucks. Tier 4 aftertreatment, ECM diagnostics, in-frame and out-of-frame rebuilds, fuel system work, the whole book. Call the shop to talk through your equipment.",
      },
      {
        icon: "Package",
        title: "OEM & Aftermarket Parts",
        desc: "Full parts supply: OEM and quality aftermarket. Turbos, injectors, and major components in stock.",
        detail: "We stock a broad parts inventory for all major diesel platforms: turbos, injectors, engine components, gasket sets, filters, and more. We source OEM where it matters and quality aftermarket where it makes sense. We're not a parts counter, but if you need something for a repair you're doing yourself, call us. We can usually beat dealer pricing and we know what fits and what doesn't.",
      },
    ],
  },
];

const BRANDS = ["CAT / Caterpillar", "Cummins", "Detroit Diesel", "PACCAR (MX)", "Volvo D-Series"];

export default function ServicesPage() {
  return (
    <>
      <section className="section-sm bg-[#0a0a0a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 70% 40%, rgba(200,16,46,0.4) 0%, transparent 60%)",
          }}
        />
        <div className="container relative">
          <div className="badge mb-4" style={{ background: "rgba(200,16,46,0.15)", color: "#ff9fac", borderColor: "rgba(200,16,46,0.4)" }}>What We Offer</div>
          <h1 className="font-display uppercase text-5xl md:text-7xl font-bold text-white mt-4 mb-5 tracking-tight leading-[0.95]">
            Our <span className="text-ember">Services</span>
          </h1>
          <p className="text-[#cbd5e1] max-w-2xl leading-relaxed text-lg">
            From a quick diagnostic to a ground-up race engine build, Elite Diesel handles the full spectrum of heavy diesel service. Trucks, construction equipment, generators, ag, industrial. If it runs on diesel, we work on it. Click any service to learn more.
          </p>
        </div>
      </section>

      {/* Rates */}
      <section className="bg-white border-b border-[#e8e2da]">
        <div className="container pt-10 pb-6 md:py-6">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#888]">Shop Rates</div>
            <div className="flex gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-display text-[#c8102e] font-bold text-2xl">$175</span>
                <span className="text-sm text-[#666]">/ hr · Trucks &amp; Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-[#c8102e] font-bold text-2xl">$250</span>
                <span className="text-sm text-[#666]">/ hr · Motorhomes</span>
              </div>
            </div>
            <div className="ml-auto">
              <a href="tel:3074005090" className="btn-primary py-2 px-5 text-xs">Call to Schedule</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-[#f9f7f4]">
        <div className="container flex flex-col gap-16">
          {CATEGORIES.map((cat) => (
            <div key={cat.heading} className="reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 rounded-full" style={{ background: cat.color }} />
                <h2 className="font-display text-base font-bold uppercase tracking-[0.18em] text-[#1a1a1a]">{cat.heading}</h2>
              </div>
              <ServiceGrid services={cat.services} color={cat.color} />
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="section-sm bg-white border-y border-[#e8e2da]">
        <div className="container text-center reveal">
          <div className="badge mb-3">Engine Platforms</div>
          <h2 className="font-display uppercase text-3xl font-bold text-[#1a1a1a] mt-3 mb-8 tracking-tight">Brands We Service</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {BRANDS.map((b) => (
              <div key={b} className="px-5 py-2.5 rounded-full border border-[#e8e2da] bg-[#f9f7f4] text-sm font-semibold text-[#444] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0a0a0a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(200,16,46,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="container text-center reveal relative">
          <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Not Sure What You Need?</h2>
          <p className="text-[#cbd5e1] max-w-md mx-auto mb-8 leading-relaxed">
            Call the shop and talk to a tech directly. We&apos;ll tell you straight what&apos;s going on with your truck.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:3074005090" className="btn-primary">☎ (307) 400-5090</a>
            <Link href="/contact" className="btn-outline-white">Get Directions →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
