"use client";

import { useState } from "react";

export interface Service {
  title: string;
  desc: string;
  detail: string;
}

function ServiceModal({ service, color, onClose }: { service: Service; color: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div style={{ background: color, padding: "1.25rem 1.75rem" }}>
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-white font-black text-xl leading-tight">{service.title}</h2>
            <button
              onClick={onClose}
              className="text-white opacity-70 hover:opacity-100 transition-opacity shrink-0 text-xl leading-none mt-0.5"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
        {/* Body */}
        <div className="p-7">
          <p className="text-[#444] leading-relaxed mb-5">{service.detail}</p>
          <div className="pt-4 border-t border-[#f0ece5] flex gap-3">
            <a
              href="tel:3074005090"
              className="btn-primary text-sm py-2.5 px-6"
            >
              ☎ Call the Shop
            </a>
            <button
              onClick={onClose}
              className="btn-outline text-sm py-2.5 px-6"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceGrid({ services, color }: { services: Service[]; color: string }) {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <button
            key={s.title}
            onClick={() => setActive(s)}
            className="card-service text-left group cursor-pointer"
          >
            <h3 className="font-display text-base font-bold mb-2 text-[#1a1a1a] uppercase tracking-wide">{s.title}</h3>
            <p className="text-sm text-[#666] leading-relaxed">{s.desc}</p>
            <div
              className="mt-4 text-xs font-bold uppercase tracking-[0.15em] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-display"
              style={{ color }}
            >
              Learn more →
            </div>
          </button>
        ))}
      </div>

      {active && (
        <ServiceModal service={active} color={color} onClose={() => setActive(null)} />
      )}
    </>
  );
}
