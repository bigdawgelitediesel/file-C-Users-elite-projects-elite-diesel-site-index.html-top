"use client";

import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Show after scrolling roughly past hero (~85% of viewport height)
      const threshold = window.innerHeight * 0.85;
      setVisible(window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky-mobile-cta ${visible ? "is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <a href="tel:3074005090" className="cta-call">
        Call (307) 400-5090
      </a>
      <a
        href="https://maps.google.com/?q=104+Robert+Ave+Cheyenne+WY+82007"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-dir"
      >
        Directions
      </a>
    </div>
  );
}
