export default function BrandMark({ size = 36 }) {
  const id = `bm-${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="getColabb">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5847e8" />
          <stop offset="0.55" stopColor="#8f7dff" />
          <stop offset="1" stopColor="#8fd4c1" />
        </linearGradient>
        <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="18" fill={`url(#${id})`} />
      <rect x="3" y="3" width="58" height="30" rx="16" fill={`url(#${id}-gloss)`} />
      {/* two linked arcs forming a 'C'/collab mark */}
      <g fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round">
        <path d="M42 20 a14 14 0 1 0 0 24" opacity=".95" />
        <path d="M24 44 a14 14 0 1 1 0 -24" opacity=".7" />
      </g>
    </svg>
  );
}
