import BrandMark from './BrandMark';

/* Horizontal lockup: glass mark + "getColabb" text.
   `size` controls the mark; text scales with it. */
export default function Wordmark({ size = 32, tone = 'default' }) {
  const textSize = Math.round(size * 0.72);
  const muted = tone === 'muted';
  return (
    <span className="row" style={{ gap: size * 0.32 }}>
      <BrandMark size={size} glow={!muted} />
      <span
        className="display"
        style={{
          fontSize: textSize,
          color: muted ? 'var(--ink-2)' : 'var(--ink)',
          letterSpacing: '-0.025em',
          lineHeight: 1,
        }}
      >
        get<span className="display-italic grad-text">Colabb</span>
      </span>
    </span>
  );
}
