/** Decorative topographic contour lines (a nod to mountaineering). Pure SVG, deterministic. */
const RINGS = 14;
const POINTS = 90;

function ring(i: number): string {
  const base = 18 + i * 22;
  const pts = Array.from({ length: POINTS }, (_, k) => {
    const a = (k / POINTS) * Math.PI * 2;
    const r = base * (1 + 0.1 * Math.sin(3 * a + i * 0.35) + 0.05 * Math.sin(5 * a - i * 0.2));
    return `${(400 + r * 1.25 * Math.cos(a)).toFixed(1)},${(300 + r * Math.sin(a)).toFixed(1)}`;
  });
  return `M${pts.join("L")}Z`;
}

export default function Contour({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: RINGS }, (_, i) => (
          <path key={i} d={ring(i)} opacity={i % 5 === 4 ? 0.9 : 0.45} />
        ))}
      </g>
    </svg>
  );
}
