import Image from 'next/image';

/* Icon-only: the Aurora Glass handshake tile.
   Sizes correspond to display dimensions in px. */
export default function BrandMark({ size = 40, glow = true, style }) {
  return (
    <span
      aria-label="getColabb"
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
        filter: glow ? 'drop-shadow(0 8px 24px rgba(88,71,232,.35))' : undefined,
        ...style,
      }}
    >
      <Image
        src="/logo.png"
        alt="getColabb"
        width={size}
        height={size}
        priority={size >= 64}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </span>
  );
}
