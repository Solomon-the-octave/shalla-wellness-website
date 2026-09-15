type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.2}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const Sun = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export const Moon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
  </svg>
);

export const MapPin = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const Mail = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
  </svg>
);

export const Phone = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 3.5h3.2l1.6 4.3-2.1 1.3a11 11 0 006.2 6.2l1.3-2.1 4.3 1.6V18a2.5 2.5 0 01-2.7 2.5A16.5 16.5 0 012.5 6.2 2.5 2.5 0 015 3.5z" />
  </svg>
);

export const Send = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M21.5 3.5L10.5 13.5M21.5 3.5l-7 17-4-7-7-4 18-6z" />
  </svg>
);

export const Flask = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 3h6M10 3v6.2L4.6 18.4A1.8 1.8 0 006.2 21h11.6a1.8 1.8 0 001.6-2.6L14 9.2V3" />
    <path d="M7.5 15h9" />
  </svg>
);

export const Shield = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const UserHeart = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0110.4-5.2" />
    <path d="M18 20.5s-3.5-2.1-3.5-4.6a1.9 1.9 0 013.5-1 1.9 1.9 0 013.5 1c0 2.5-3.5 4.6-3.5 4.6z" />
  </svg>
);

export const Award = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 13.9L7 21l5-2.8 5 2.8-1.5-7.1" />
  </svg>
);

export const Leaf = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M20 4c-9 0-15 4.5-15 11a5 5 0 005 5c6.5 0 10-6 10-16z" />
    <path d="M4 21c3-5 7-8.5 11-10.5" />
  </svg>
);

export const HeartPulse = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M20.4 12.6A5.2 5.2 0 0012 6.4a5.2 5.2 0 00-8.4 6.2L12 21z" />
    <path d="M3.5 12h4l2-3 3 5 2-2h6" />
  </svg>
);

export const ArrowUp = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);
