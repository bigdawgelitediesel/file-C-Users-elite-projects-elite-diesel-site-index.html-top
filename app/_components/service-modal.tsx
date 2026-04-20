"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  Cpu,
  Factory,
  Flame,
  Fuel,
  Gauge,
  Hammer,
  Package,
  RefreshCw,
  Settings,
  Trophy,
  Truck,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Icon registry — services pass icon names as strings (serializable) and we
// resolve to the actual component here on the client. This keeps the data
// layer safe to author in a Server Component.
const ICONS: Record<string, LucideIcon> = {
  Activity,
  Cpu,
  Factory,
  Flame,
  Fuel,
  Gauge,
  Hammer,
  Package,
  RefreshCw,
  Settings,
  Trophy,
  Truck,
  Wind,
  Wrench,
  Zap,
};

export type ServiceIconName = keyof typeof ICONS | string;

export interface Service {
  title: string;
  desc: string;
  detail: string;
  icon: ServiceIconName;
}

function resolveIcon(name: string): LucideIcon {
  return ICONS[name] ?? Wrench;
}

function ServiceModal({ service, color, onClose }: { service: Service; color: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    // Lock body scroll while open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const Icon = resolveIcon(service.icon);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200"
      style={{ background: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden transition-transform duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div style={{ background: color, padding: "1.25rem 1.75rem" }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="shrink-0 flex items-center justify-center rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  width: 44,
                  height: 44,
                }}
              >
                <Icon size={26} color="#ffffff" strokeWidth={2} />
              </div>
              <h2 id="service-modal-title" className="text-white font-black text-xl leading-tight">{service.title}</h2>
            </div>
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
              ☎ Call to Schedule
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
        {services.map((s) => {
          const Icon = resolveIcon(s.icon);
          return (
            <button
              key={s.title}
              onClick={() => setActive(s)}
              className="card-service text-left group cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div
                className="mb-4 inline-flex items-center justify-center rounded-lg"
                style={{
                  background: `${color}15`,
                  width: 48,
                  height: 48,
                  color,
                }}
              >
                <Icon size={28} strokeWidth={2} />
              </div>
              <h3 className="font-display text-base font-bold mb-2 text-[#1a1a1a] uppercase tracking-wide">{s.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{s.desc}</p>
              <div
                className="mt-4 text-xs font-bold uppercase tracking-[0.15em] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-display"
                style={{ color }}
              >
                Learn more →
              </div>
            </button>
          );
        })}
      </div>

      {active && (
        <ServiceModal service={active} color={color} onClose={() => setActive(null)} />
      )}
    </>
  );
}
