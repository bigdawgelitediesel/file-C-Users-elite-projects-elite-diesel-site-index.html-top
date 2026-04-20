/**
 * Engine-RPM sound-wave SVG. Pure SVG, animated via CSS on .rpm-wave-path.
 * Tiled horizontally using preserveAspectRatio="none" so it stretches full width.
 */
export function RpmWave() {
  // Build a ragged sine-like path that suggests engine harmonics.
  // Width 1440, height 60, repeats smoothly.
  const path =
    "M 0 30 " +
    "Q 20 10, 40 30 T 80 30 T 120 30 T 160 30 " +
    "Q 180 0, 200 30 T 240 30 T 280 30 T 320 30 " +
    "Q 340 18, 360 30 T 400 30 T 440 30 " +
    "Q 460 4, 480 30 T 520 30 T 560 30 T 600 30 " +
    "Q 620 14, 640 30 T 680 30 T 720 30 " +
    "Q 740 -2, 760 30 T 800 30 T 840 30 T 880 30 " +
    "Q 900 20, 920 30 T 960 30 T 1000 30 T 1040 30 " +
    "Q 1060 8, 1080 30 T 1120 30 T 1160 30 " +
    "Q 1180 22, 1200 30 T 1240 30 T 1280 30 T 1320 30 " +
    "Q 1340 6, 1360 30 T 1400 30 T 1440 30";

  return (
    <svg
      className="rpm-wave"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rpmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c8102e" stopOpacity="0" />
          <stop offset="30%" stopColor="#c8102e" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#ff4a63" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c8102e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="rpm-wave-path">
        <path
          d={path}
          fill="none"
          stroke="url(#rpmGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* A second, offset tracer for depth */}
        <path
          d={path}
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="0.75"
          strokeLinecap="round"
          transform="translate(12 4)"
        />
      </g>
    </svg>
  );
}
