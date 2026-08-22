interface LogoMarkProps {
  className?: string;
}

/**
 * The Geek's glasses — the site's drawn brand mark, replacing the previous
 * 👓 emoji stand-in. Matches public/favicon.svg so the browser tab and the
 * in-page logo are the same authored icon, not an emoji glyph.
 */
export default function LogoMark({ className = 'w-5 h-5' }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round">
        <circle cx="20" cy="34" r="12" fill="#faf8f2" />
        <circle cx="44" cy="34" r="12" fill="#faf8f2" />
        <line x1="31" y1="32" x2="33" y2="32" />
        <line x1="8" y1="29" x2="2" y2="24" />
        <line x1="56" y1="29" x2="62" y2="24" />
      </g>
      <circle cx="20" cy="34" r="4" fill="#1a1a1a" />
      <circle cx="44" cy="34" r="4" fill="#1a1a1a" />
    </svg>
  );
}
