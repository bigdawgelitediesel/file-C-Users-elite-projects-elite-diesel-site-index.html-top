"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global initializer for:
 *  - Intersection-observer based .reveal fade-ins
 *  - Lightweight scroll parallax on [data-parallax] elements
 *
 * Safe on the server: runs only inside useEffect.
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // --- Intersection observer for .reveal elements ---
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    let io: IntersectionObserver | undefined;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      // Skip animation, just make sure nothing is hidden.
      revealEls.forEach((el) => el.classList.remove("is-pending"));
    } else if (revealEls.length > 0) {
      // Hide first (pending), observe, then animate in when in view.
      revealEls.forEach((el) => {
        el.classList.add("is-pending");
      });

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.remove("is-pending");
              el.classList.add("is-visible");
              io!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach((el) => io!.observe(el));

      // Safety net: if any .reveal is still pending after 2s, force-show it.
      // Prevents content lockout from any IO edge case.
      window.setTimeout(() => {
        document.querySelectorAll<HTMLElement>(".reveal.is-pending").forEach((el) => {
          el.classList.remove("is-pending");
          el.classList.add("is-visible");
        });
      }, 2000);
    }

    // --- Parallax ---
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );

    let raf = 0;
    let lastScroll = window.scrollY;

    function update() {
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        // Drift hero bg slower than content: translate by a fraction of scroll.
        const y = Math.round(-lastScroll * speed);
        el.style.setProperty("--parallax-y", `${y}px`);
      });
      raf = 0;
    }

    function onScroll() {
      lastScroll = window.scrollY;
      if (!raf) raf = requestAnimationFrame(update);
    }

    if (!prefersReduced && parallaxEls.length > 0) {
      window.addEventListener("scroll", onScroll, { passive: true });
      update();
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (io) io.disconnect();
    };
  }, [pathname]);

  return null;
}
