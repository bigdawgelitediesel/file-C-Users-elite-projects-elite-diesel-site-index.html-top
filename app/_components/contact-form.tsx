"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired — show a confirmation state so the form feels alive.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-[#f9f7f4] border border-[#e8e2da] rounded-2xl p-10 text-center">
        <div className="font-display uppercase text-2xl font-bold text-[#1a1a1a] mb-2 tracking-tight">
          Message queued.
        </div>
        <p className="text-[#555] leading-relaxed mb-6 max-w-md mx-auto">
          Thanks — we&apos;ll get back to you within a business day. If it&apos;s urgent or your truck is down,
          please call the shop directly.
        </p>
        <a href="tel:3074005090" className="btn-primary">
          ☎ Call (307) 400-5090
        </a>
      </div>
    );
  }

  return (
    <form
      className="bg-[#f9f7f4] border border-[#e8e2da] rounded-2xl p-8 grid gap-5"
      onSubmit={onSubmit}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <label className="flex flex-col gap-1.5">
          <span className="font-display text-xs uppercase tracking-[0.15em] text-[#555] font-bold">Name</span>
          <input
            type="text"
            name="name"
            required
            className="bg-white border border-[#e8e2da] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 transition"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-display text-xs uppercase tracking-[0.15em] text-[#555] font-bold">Phone</span>
          <input
            type="tel"
            name="phone"
            className="bg-white border border-[#e8e2da] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 transition"
            placeholder="(555) 555-5555"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="font-display text-xs uppercase tracking-[0.15em] text-[#555] font-bold">Email</span>
        <input
          type="email"
          name="email"
          className="bg-white border border-[#e8e2da] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 transition"
          placeholder="you@example.com"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="font-display text-xs uppercase tracking-[0.15em] text-[#555] font-bold">Truck / Engine</span>
        <input
          type="text"
          name="truck"
          className="bg-white border border-[#e8e2da] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 transition"
          placeholder="e.g. 2018 Peterbilt 579, Cummins X15"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="font-display text-xs uppercase tracking-[0.15em] text-[#555] font-bold">
          What&apos;s going on?
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="bg-white border border-[#e8e2da] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 transition resize-y"
          placeholder="Symptoms, codes, when it started, whatever you've got..."
        />
      </label>
      <div className="flex flex-wrap gap-4 items-center justify-between pt-2">
        <div className="text-xs text-[#888]">We usually respond within one business day.</div>
        <button type="submit" className="btn-primary">
          Send Message →
        </button>
      </div>
    </form>
  );
}
