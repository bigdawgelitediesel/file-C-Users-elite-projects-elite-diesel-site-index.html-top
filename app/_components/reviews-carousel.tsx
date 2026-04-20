"use client";

import { useRef, useState } from "react";

const REVIEWS: { name: string; truck: string; text: string }[] = [
  {
    name: "Mario T.",
    truck: "Peterbilt 389 · CAT C15",
    text: "These guys don't need stars, they need diamonds. Everything from the first interaction to the final product was nothing short of amazing. Attention to detail and quality of work is unparalleled. No parts changers here — actual experienced technicians who care. Stop reading this review and call them!",
  },
  {
    name: "Larisa P.",
    truck: "Class A Motorhome · Cummins ISX",
    text: "Amazing customer service! We came through town on our way to South Dakota with a terrible shake at 70 mph on I-25. They got us in right away, no wait: balanced two tires and fixed a leak at no charge. These guys are the real deal.",
  },
  {
    name: "Robert D.",
    truck: "Peterbilt 379 · Detroit Series 60",
    text: "Took my Pete to the shop. Was able to get it in right away. I had a complete engine exchanged. Elite was able to get my truck back to me in a reasonable amount of time. Good people, clean work.",
  },
  {
    name: "Dillon M.",
    truck: "Kenworth T680 · PACCAR MX-13",
    text: "Brian and the tuning department are awesome: very intelligent, knowledgeable, and friendly. Dyno'd my truck and figured out something two other shops missed. Definitely recommend Elite Diesel to anyone. Awesome staff.",
  },
  {
    name: "Will S.",
    truck: "Volvo VNL · Volvo D13",
    text: "Service oriented shop, confident, knowledgeable guys performing on the spot. Rare find in this industry. They pulled codes, explained what was actually going on, and fixed it the first time.",
  },
  {
    name: "Derrick W.",
    truck: "Freightliner Cascadia · DD15",
    text: "Good quick service. Was right in and right out. Truck got fixed so I'm definitely a happy camper. Would recommend to anyone looking to get an ECM flashed or diagnosed right.",
  },
  {
    name: "Lendon L.",
    truck: "Kenworth W900 · Cummins N14",
    text: "Elite Diesel does a good job and helps me out all the time. They're honest and trustworthy — and in this business, that matters more than anything.",
  },
];

export function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const cardWidth = 380;
  const gap = 20;

  function scroll(dir: "prev" | "next") {
    const next = dir === "next"
      ? Math.min(activeIdx + 1, REVIEWS.length - 1)
      : Math.max(activeIdx - 1, 0);
    setActiveIdx(next);
    scrollRef.current?.scrollTo({
      left: next * (cardWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      {/* Carousel track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            style={{
              minWidth: `${cardWidth}px`,
              maxWidth: `${cardWidth}px`,
              scrollSnapAlign: "start",
            }}
            className="card-service flex flex-col gap-3 shrink-0"
          >
            <div className="flex items-center justify-between">
              <div className="text-[#c8102e] text-lg tracking-widest">★★★★★</div>
              <div className="font-display text-[10px] text-[#888] uppercase tracking-[0.15em] font-bold">
                Google Review
              </div>
            </div>
            <p className="text-sm text-[#444] leading-relaxed flex-1 italic">&ldquo;{r.text}&rdquo;</p>
            <div className="pt-3 border-t border-[#f0ece5]">
              <div className="font-display font-bold text-[#1a1a1a] text-sm tracking-tight">{r.name}</div>
              <div className="text-[11px] text-[#888] uppercase tracking-[0.1em] mt-0.5">{r.truck}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIdx(i);
                scrollRef.current?.scrollTo({ left: i * (cardWidth + gap), behavior: "smooth" });
              }}
              className="transition-all rounded-full"
              style={{
                width: i === activeIdx ? "24px" : "8px",
                height: "8px",
                background: i === activeIdx ? "#c8102e" : "#e8e2da",
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("prev")}
            disabled={activeIdx === 0}
            className="w-10 h-10 rounded-full border border-[#e8e2da] bg-white flex items-center justify-center text-[#555] hover:border-[#c8102e] hover:text-[#c8102e] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
            aria-label="Previous review"
          >
            ←
          </button>
          <button
            onClick={() => scroll("next")}
            disabled={activeIdx === REVIEWS.length - 1}
            className="w-10 h-10 rounded-full border border-[#e8e2da] bg-white flex items-center justify-center text-[#555] hover:border-[#c8102e] hover:text-[#c8102e] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
            aria-label="Next review"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
