import React from 'react';
import { CANONICAL_GEOMETRY } from '@/lib/fresco/geometry';

interface FrescoEmblemProps {
  pointerAngle?: number;
}

/**
 * components/fresco/FrescoEmblem.tsx
 * Vector SVG MK Center Emblem Overlay
 * ===================================
 * Locked Decision: Center emblem is 'MK' (Mayank Kamdi).
 * Located at canonical coordinates (836.7, 244.6) with radius 56.8.
 * Features dual-world phase discs, rotating indicator hand, and central pivot.
 */
export const FrescoEmblem: React.FC<FrescoEmblemProps> = ({ pointerAngle = 0 }) => {
  const { EMBLEM_CENTER, EMBLEM_RADIUS, STROKE_WEIGHT } = CANONICAL_GEOMETRY;
  const cx = EMBLEM_CENTER.x;
  const cy = EMBLEM_CENTER.y;
  const r = EMBLEM_RADIUS;

  return (
    <svg
      className="fresco-svg fresco-svg--over"
      viewBox={`0 0 ${CANONICAL_GEOMETRY.ART_WIDTH} ${CANONICAL_GEOMETRY.ART_HEIGHT}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Central pivot bead radial gold gradient */}
        <radialGradient id="fresco-pivot-grad" cx="40%" cy="36%" r="68%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="45%" stopColor="#F1D08E" />
          <stop offset="85%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A5A24" />
        </radialGradient>

        {/* Left hemisphere clip path (Human / Bio) */}
        <clipPath id="fresco-clip-emblem-left">
          <path d={`M${cx} ${cy - r} A${r} ${r} 0 0 0 ${cx} ${cy + r} Z`} />
        </clipPath>

        {/* Right hemisphere clip path (Machine / OS) */}
        <clipPath id="fresco-clip-emblem-right">
          <path d={`M${cx} ${cy - r} A${r} ${r} 0 0 1 ${cx} ${cy + r} Z`} />
        </clipPath>

        {/* Subtle dual-world fills */}
        <linearGradient id="fresco-fill-human" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7A4A22" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="fresco-fill-machine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A3E72" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2A4A8C" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      <g className="emblem-group" role="img" aria-label="MK Fresco Emblem">
        {/* Left Phase Disc (Human World) */}
        <circle
          cx={cx}
          cy={cy}
          r={r - 1}
          fill="url(#fresco-fill-human)"
          clipPath="url(#fresco-clip-emblem-left)"
        />

        {/* Right Phase Disc (Machine World) */}
        <circle
          cx={cx}
          cy={cy}
          r={r - 1}
          fill="url(#fresco-fill-machine)"
          clipPath="url(#fresco-clip-emblem-right)"
        />

        {/* Outer Golden Horizon Ring */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#16120F"
          strokeWidth={STROKE_WEIGHT}
        />
        <circle
          cx={cx}
          cy={cy}
          r={r + 3.5}
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.85"
          strokeOpacity="0.65"
          strokeDasharray="2 3"
        />

        {/* Vertical Center Axis Line */}
        <line
          x1={cx}
          y1={cy - r}
          x2={cx}
          y2={cy + r}
          stroke="#B07A35"
          strokeWidth="1.8"
          strokeOpacity="0.85"
        />

        {/* Rotating Indicator Compass Hand */}
        <g transform={`rotate(${pointerAngle} ${cx} ${cy})`}>
          <line
            x1={cx}
            y1={cy - r + 4}
            x2={cx}
            y2={cy + r - 4}
            stroke="#B07A35"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>

        {/* Monogram Letters: 'M' on the left, 'K' on the right */}
        {/* Left: 'M' (Humanity & Classical Form) */}
        <text
          x={cx - 26}
          y={cy + 13}
          textAnchor="middle"
          fontFamily="var(--font-serif)"
          fontSize="36"
          fontWeight="600"
          fill="#7A4A22"
          letterSpacing="0.02em"
        >
          M
        </text>

        {/* Right: 'K' (Computation & Architectural Systems) */}
        <text
          x={cx + 26}
          y={cy + 13}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="32"
          fontWeight="600"
          fill="#1A3E72"
          letterSpacing="0.02em"
        >
          K
        </text>

        {/* Central Pivot Bead */}
        <circle
          cx={cx}
          cy={cy}
          r="6.3"
          fill="url(#fresco-pivot-grad)"
          stroke="#7A4A22"
          strokeWidth="0.8"
        />
        <circle
          cx={cx}
          cy={cy}
          r="1.8"
          fill="#FFFFFF"
          fillOpacity="0.8"
        />
      </g>
    </svg>
  );
};
