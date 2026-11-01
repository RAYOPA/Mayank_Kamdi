/**
 * lib/fresco/geometry.ts
 * Canonical Coordinate System and Universal Stage Conversion Utilities
 * ====================================================================
 * Single source of truth for the 1672 × 941 artwork geometry, anchor points,
 * responsive canvas calculations, and coordinate conversions.
 */

export interface Point2D {
  x: number;
  y: number;
}

export interface Box2D {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CameraTransform {
  scale: number;
  translateX: number;
  translateY: number;
}

export interface StageMetrics {
  width: number;
  height: number;
  scale: number; // k = frameWidth / ART_WIDTH
  frameLeft: number;
  frameTop: number;
  frameWidth: number;
  frameHeight: number;
  isPortrait: boolean;
  isMobile: boolean;
  dpr: number;
}

/**
 * Authoritative Canonical Geometry Constants (1672 × 941 reference plane)
 */
export const CANONICAL_GEOMETRY = {
  ART_WIDTH: 1672,
  ART_HEIGHT: 941,
  ASPECT_RATIO: 1672 / 941, // ~1.776833

  // Core physical anchors
  SPLIT_AXIS_X: 836.7,

  // Center MK Monogram / Astronomical disc anchor
  EMBLEM_CENTER: {
    x: 836.7,
    y: 244.6,
  },
  EMBLEM_RADIUS: 56.8,
  STROKE_WEIGHT: 2.1,

  // Golden touchpoint / light orb between reaching fingertips
  MEETING_POINT: {
    x: 836.7,
    y: 441.2,
  },

  // Vertical plumb line apparatus
  PLUMB_LINE: {
    x: 836.7,
    yStart: 165.0,
    yEnd: 553.0,
    beadTopY: 368.2,
    tickY: 397.4,
    diamondY: 511.4,
    beadBottomY: 537.4,
    fieldRingRadius: 44.2,
  },

  // Focus reference anchors (e.g. portrait margin tracking)
  HUMAN_PROFILE: {
    x: 478.0,
    y: 262.0,
  },
  MACHINE_PROFILE: {
    x: 1268.0,
    y: 300.0,
  },

  // Half-world bounding boxes
  BOX_HUMAN: {
    x: 0,
    y: 0,
    width: 842,
    height: 941,
  },
  BOX_MACHINE: {
    x: 836.7,
    y: 0,
    width: 835.3,
    height: 941,
  },
} as const;

/**
 * Converts a canonical point (in the 1672 × 941 coordinate plane) into rendered CSS pixels on the stage.
 */
export function canonicalToStage(
  point: Point2D,
  metrics: StageMetrics,
  camera: CameraTransform = { scale: 1, translateX: 0, translateY: 0 }
): Point2D {
  const stageX = (metrics.frameLeft + point.x * metrics.scale) * camera.scale + camera.translateX;
  const stageY = (metrics.frameTop + point.y * metrics.scale) * camera.scale + camera.translateY;
  return { x: stageX, y: stageY };
}

/**
 * Converts a point in stage CSS pixels back into the canonical 1672 × 941 artwork coordinates.
 */
export function stageToCanonical(
  stagePoint: Point2D,
  metrics: StageMetrics,
  camera: CameraTransform = { scale: 1, translateX: 0, translateY: 0 }
): Point2D {
  if (metrics.scale === 0 || camera.scale === 0) {
    return { x: 0, y: 0 };
  }
  const uncamX = (stagePoint.x - camera.translateX) / camera.scale;
  const uncamY = (stagePoint.y - camera.translateY) / camera.scale;
  return {
    x: (uncamX - metrics.frameLeft) / metrics.scale,
    y: (uncamY - metrics.frameTop) / metrics.scale,
  };
}

/**
 * Calculates responsive stage metrics and frame position for both landscape and portrait compositions.
 */
export function calculateStageMetrics(
  stageWidth: number,
  stageHeight: number,
  dpr: number = 1
): StageMetrics {
  const safeW = Math.max(stageWidth, 1);
  const safeH = Math.max(stageHeight, 1);
  const isPortrait = safeH > 0 && safeW / safeH <= 1.1; // @container (max-aspect-ratio: 11/10)
  const isMobile = Math.min(safeW, safeH) < 700;

  let frameWidth: number;
  let frameHeight: number;
  let frameLeft: number;
  let frameTop: number;

  if (!isPortrait) {
    // Landscape composition:
    // Cover the stage smoothly while pinning the central fingertip split to the horizontal midline
    const baseWidth = Math.max(safeW, safeH * CANONICAL_GEOMETRY.ASPECT_RATIO);
    frameWidth = Math.min(baseWidth, 1.15 * baseWidth);
    frameHeight = frameWidth / CANONICAL_GEOMETRY.ASPECT_RATIO;

    // Center split axis (836.7 / 1672 = 0.500418) at 50% stage width
    const splitFraction = CANONICAL_GEOMETRY.SPLIT_AXIS_X / CANONICAL_GEOMETRY.ART_WIDTH;
    frameLeft = safeW * 0.5 - frameWidth * splitFraction;
    frameTop = safeH * 0.5 - frameHeight * 0.5;
  } else {
    // Portrait composition:
    // Intentional vertical recomposition: the artwork sits elevated, giving breathing space to the headline & CTAs
    frameWidth = Math.min(safeW * 1.52, safeH * 0.9 * CANONICAL_GEOMETRY.ASPECT_RATIO);
    frameHeight = frameWidth / CANONICAL_GEOMETRY.ASPECT_RATIO;
    frameLeft = safeW * 0.5 - frameWidth * 0.5;

    // In portrait, align the touchpoint (orb at y = 441.2 / 941 ~ 0.46886) near 58% of viewport height
    const meetingPointFraction = CANONICAL_GEOMETRY.MEETING_POINT.y / CANONICAL_GEOMETRY.ART_HEIGHT;
    frameTop = safeH * 0.58 - frameHeight * meetingPointFraction;
  }

  const scale = frameWidth / CANONICAL_GEOMETRY.ART_WIDTH;

  return {
    width: safeW,
    height: safeH,
    scale,
    frameLeft,
    frameTop,
    frameWidth,
    frameHeight,
    isPortrait,
    isMobile,
    dpr: Math.min(dpr || 1, isMobile ? 1.75 : 2.0),
  };
}
