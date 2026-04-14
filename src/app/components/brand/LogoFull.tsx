interface LogoFullProps {
  className?: string;
  variant?: "light" | "dark";
}

export function LogoFull({ className = "", variant = "dark" }: LogoFullProps) {
  const color = variant === "dark" ? "#0A1A2F" : "#FFFFFF";
  const accentColor = "#0066FF";

  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract tech symbol - geometric B */}
      <path
        d="M8 8h16c4.418 0 8 3.582 8 8 0 2.761-1.4 5.195-3.528 6.632C30.6 23.805 32 26.239 32 29c0 4.418-3.582 8-8 8H8V8z"
        fill={accentColor}
      />
      <path
        d="M8 8h14c3.314 0 6 2.686 6 6s-2.686 6-6 6H8V8z"
        fill={color}
        fillOpacity="0.15"
      />
      <rect x="14" y="26" width="10" height="11" fill={color} fillOpacity="0.1" />

      {/* Company name */}
      <text
        x="44"
        y="21"
        fill={color}
        fontSize="16"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Bremore Consulting
      </text>
      <text
        x="44"
        y="34"
        fill={color}
        fillOpacity="0.6"
        fontSize="11"
        fontWeight="400"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="0.5"
      >
        Ltd
      </text>
    </svg>
  );
}
