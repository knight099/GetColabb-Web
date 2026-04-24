const paths = {
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-left':  <path d="M19 12H5M11 6l-6 6 6 6" />,
  sparkles: (
    <>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
    </>
  ),
  shield: <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  check: <path d="M5 13l4 4L19 7" />,
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="4" />
      <path d="M1 21c1-4 4-6 8-6s7 2 8 6" />
      <circle cx="17" cy="7" r="3" />
      <path d="M23 21c-.5-3-2.5-4.5-5-5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  heart: <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />,
  star: <path d="M12 3l2.9 6 6.6.6-5 4.5 1.6 6.5L12 17l-6.1 3.6 1.6-6.5-5-4.5 6.6-.6z" />,
  download: <path d="M12 3v12m-5-5l5 5 5-5M4 21h16" />,
};

export default function Icon({ name, size = 18, color = 'currentColor', stroke = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
}
