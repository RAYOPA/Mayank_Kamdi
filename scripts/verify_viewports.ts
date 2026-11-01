import { calculateStageMetrics, canonicalToStage, CANONICAL_GEOMETRY } from '../lib/fresco/geometry';

const viewports = [
  { name: '1672x941 (Canonical Desktop)', width: 1672, height: 941 },
  { name: '1366x768 (Standard Laptop)', width: 1366, height: 768 },
  { name: '768x1024 (Tablet Portrait)', width: 768, height: 1024 },
  { name: '390x844 (Mobile Phone)', width: 390, height: 844 },
  { name: '320x568 (Compact Mobile)', width: 320, height: 568 },
];

console.log('========================================================================');
console.log('STAGE 1 & 2 RESPONSIVE VIEWPORT GEOMETRY VERIFICATION');
console.log('========================================================================\n');

for (const vp of viewports) {
  const metrics = calculateStageMetrics(vp.width, vp.height, 2);
  const touchpoint = canonicalToStage(CANONICAL_GEOMETRY.MEETING_POINT, metrics);
  const emblemCenter = canonicalToStage(CANONICAL_GEOMETRY.EMBLEM_CENTER, metrics);

  console.log(`Viewport: ${vp.name}`);
  console.log(`  Dimensions: ${vp.width} × ${vp.height} (Aspect: ${(vp.width / vp.height).toFixed(3)})`);
  console.log(`  Mode: ${metrics.isPortrait ? 'PORTRAIT' : 'LANDSCAPE'} (Mobile: ${metrics.isMobile})`);
  console.log(`  Scale Factor (k): ${metrics.scale.toFixed(4)}`);
  console.log(`  Frame Box: [Left: ${metrics.frameLeft.toFixed(1)}px, Top: ${metrics.frameTop.toFixed(1)}px, W: ${metrics.frameWidth.toFixed(1)}px, H: ${metrics.frameHeight.toFixed(1)}px]`);
  console.log(`  Rendered Touchpoint: (${touchpoint.x.toFixed(1)}px, ${touchpoint.y.toFixed(1)}px)`);
  console.log(`  Rendered MK Emblem:  (${emblemCenter.x.toFixed(1)}px, ${emblemCenter.y.toFixed(1)}px)\n`);
}
