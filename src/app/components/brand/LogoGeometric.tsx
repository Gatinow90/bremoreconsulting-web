interface LogoGeometricProps {
  className?: string;
  variant?: "light" | "dark";
}

export function LogoGeometric({ className = "", variant = "dark" }: LogoGeometricProps) {
  const color = variant === "dark" ? "#0A1A2F" : "#FFFFFF";
  const accentColor = "#0066FF";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* AI-inspired geometric pattern */}
      <rect x="4" y="4" width="18" height="18" fill={accentColor} rx="2" />
      <rect x="26" y="4" width="18" height="18" fill={color} fillOpacity="0.2" rx="2" />
      <rect x="4" y="26" width="18" height="18" fill={color} fillOpacity="0.3" rx="2" />
      <rect x="26" y="26" width="18" height="18" fill={accentColor} fillOpacity="0.7" rx="2" />

      {/* Connection lines */}
      <line x1="22" y1="13" x2="26" y2="13" stroke={accentColor} strokeWidth="2" />
      <line x1="13" y1="22" x2="13" y2="26" stroke={accentColor} strokeWidth="2" />
      <line x1="22" y1="35" x2="26" y2="35" stroke={color} strokeOpacity="0.4" strokeWidth="2" />
      <line x1="35" y1="22" x2="35" y2="26" stroke={color} strokeOpacity="0.4" strokeWidth="2" />
    </svg>
  );
}
