import BrandMark from './BrandMark';

/* Centered stacked lockup for splash / CTA / hero callouts.
   Renders mark + an eyebrow + a big wordmark. */
export default function LogoStack({ size = 96, eyebrow = 'v 1.0 · Welcome', tagline }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <BrandMark size={size} />
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <div className="display" style={{ fontSize: Math.round(size * 0.5), lineHeight: 1 }}>
        get<span className="display-italic grad-text">Colabb</span>
      </div>
      {tagline && (
        <p className="body" style={{ fontSize: 14, maxWidth: 280, textAlign: 'center', margin: 0 }}>
          {tagline}
        </p>
      )}
    </div>
  );
}
