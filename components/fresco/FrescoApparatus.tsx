import React from 'react';
import { CANONICAL_GEOMETRY } from '@/lib/fresco/geometry';

/**
 * components/fresco/FrescoApparatus.tsx
 * Vector SVG Apparatus Under-Layer
 * ================================
 * Renders the vertical plumb line, suspension beads, tick marks,
 * diamond ornament, field ring, and the central radiant orb.
 * All coordinates match the canonical 1672 × 941 reference frame.
 */
export const FrescoApparatus: React.FC = () => {
  const { PLUMB_LINE, MEETING_POINT } = CANONICAL_GEOMETRY;
  const axisX = PLUMB_LINE.x;

  return (
    <svg
      className="fresco-svg fresco-svg--under"
      viewBox={`0 0 ${CANONICAL_GEOMETRY.ART_WIDTH} ${CANONICAL_GEOMETRY.ART_HEIGHT}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Plumb line vertical gradient */}
        <linearGradient
          id="fresco-thread-grad"
          gradientUnits="userSpaceOnUse"
          x1={axisX}
          y1={PLUMB_LINE.yStart}
          x2={axisX}
          y2={PLUMB_LINE.yEnd}
        >
          <stop offset="0%" stopColor="#7A4A22" stopOpacity="0.25" />
          <stop offset="30%" stopColor="#B07A35" stopOpacity="0.6" />
          <stop offset="65%" stopColor="#D4AF37" stopOpacity="0.85" />
          <stop offset="92%" stopColor="#B07A35" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7A4A22" stopOpacity="0.15" />
        </linearGradient>

        {/* Central touchpoint radiant orb gradient */}
        <radialGradient id="fresco-orb-grad" cx="42%" cy="38%" r="68%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="40%" stopColor="#F1D08E" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A5A24" />
        </radialGradient>
      </defs>

      <g className="apparatus-group">
        {/* Upper Plumb Line Thread (leads into top of emblem) */}
        <path
          d={`M${axisX} ${PLUMB_LINE.yStart}V187.8`}
          fill="none"
          stroke="url(#fresco-thread-grad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Lower Plumb Line Thread (emerges from bottom of emblem down to fingertip orb) */}
        <path
          d={`M${axisX} 301.4V${PLUMB_LINE.yEnd}`}
          fill="none"
          stroke="url(#fresco-thread-grad)"
          strokeWidth="1.9"
          strokeLinecap="round"
        />

        {/* Decorative Suspension Beads & Alignment Ticks */}
        <g className="apparatus-ornaments">
          {/* Top suspension bead */}
          <circle cx={axisX} cy={PLUMB_LINE.beadTopY} r="2.0" fill="#B07A35" />

          {/* Golden alignment tick */}
          <path
            d={`M${axisX - 7.5} ${PLUMB_LINE.tickY}H${axisX + 7.5}`}
            stroke="#B07A35"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Central Touchpoint Field Ring (concentric behind fingertips) */}
          <circle
            cx={axisX}
            cy="441.6"
            r={PLUMB_LINE.fieldRingRadius}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.3"
            strokeOpacity="0.45"
            strokeDasharray="4 3"
          />

          {/* Radiant Starburst Rays around the Touchpoint */}
          <path
            d={`M${axisX - 6} ${MEETING_POINT.y}L${axisX - 16} ${MEETING_POINT.y}L${axisX - 6} ${MEETING_POINT.y + 0.8}Z
               M${axisX + 6} ${MEETING_POINT.y}L${axisX + 16} ${MEETING_POINT.y}L${axisX + 6} ${MEETING_POINT.y + 0.8}Z
               M${axisX} ${MEETING_POINT.y - 6}L${axisX} ${MEETING_POINT.y - 16}L${axisX + 0.8} ${MEETING_POINT.y - 6}Z
               M${axisX} ${MEETING_POINT.y + 6}L${axisX} ${MEETING_POINT.y + 16}L${axisX + 0.8} ${MEETING_POINT.y + 6}Z`}
            fill="#D4AF37"
            fillOpacity="0.85"
          />

          {/* Central Touchpoint Golden Orb */}
          <circle
            cx={axisX}
            cy={MEETING_POINT.y}
            r="7.5"
            fill="url(#fresco-orb-grad)"
            stroke="#8A5A24"
            strokeWidth="0.8"
          />

          {/* Diamond Plummet Ornament */}
          <path
            d={`M${axisX} ${PLUMB_LINE.diamondY - 6.5} L${axisX + 6.5} ${PLUMB_LINE.diamondY} L${axisX} ${PLUMB_LINE.diamondY + 6.5} L${axisX - 6.5} ${PLUMB_LINE.diamondY} Z`}
            fill="#D4AF37"
            stroke="#8A5A24"
            strokeWidth="1.1"
          />

          {/* Bottom terminal bead */}
          <circle cx={axisX} cy={PLUMB_LINE.beadBottomY} r="2.2" fill="#B07A35" />
        </g>
      </g>
    </svg>
  );
};
