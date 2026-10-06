import React from "react";

interface MuruganVelProps {
  className?: string;
  size?: number;
  withAura?: boolean;
  withVibhuti?: boolean;
}

export default function MuruganVel({
  className = "",
  size = 48,
  withAura = true,
  withVibhuti = true,
}: MuruganVelProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size * 1.5 }}
      aria-label="Sacred Murugan Vel - Symbol of Wisdom and Divine Energy"
    >
      {/* Divine Radiant Aura / Glow */}
      {withAura && (
        <div
          className="absolute inset-0 -m-3 rounded-full pointer-events-none animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.35) 0%, rgba(198,156,75,0.15) 50%, transparent 75%)",
            filter: "blur(6px)",
          }}
        />
      )}

      {/* Sacred SVG Vel */}
      <svg
        viewBox="0 0 100 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(180,120,40,0.4)]"
      >
        <defs>
          {/* Rich Gold Gradient */}
          <linearGradient id="velGold" x1="20" y1="10" x2="80" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="25%" stopColor="#F5CF68" />
            <stop offset="55%" stopColor="#D4AF37" />
            <stop offset="85%" stopColor="#966F1E" />
            <stop offset="100%" stopColor="#63450E" />
          </linearGradient>

          {/* Core Ridge Gradient */}
          <linearGradient id="velSpine" x1="50" y1="8" x2="50" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFEAA7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B38528" stopOpacity="0.6" />
          </linearGradient>

          {/* Shaft Gradient */}
          <linearGradient id="velShaft" x1="48" y1="100" x2="52" y2="155" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F7DA85" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#7E5417" />
          </linearGradient>

          {/* Radial Aura for Kumkum */}
          <radialGradient id="kumkumGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF3344" />
            <stop offset="70%" stopColor="#A8151E" />
            <stop offset="100%" stopColor="#65080E" />
          </radialGradient>
        </defs>

        {/* Sacred Vel Blade - Authentic Spearhead Geometry */}
        <path
          d="M 50 6 
             C 53 18, 59 34, 69 50 
             C 79 66, 82 78, 77 92 
             C 74 100, 68 106, 56 109 
             L 54 114 
             L 46 114 
             L 44 109 
             C 32 106, 26 100, 23 92 
             C 18 78, 21 66, 31 50 
             C 41 34, 47 18, 50 6 Z"
          fill="url(#velGold)"
          stroke="#795318"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Inner Blade Shimmer Facet (Left side highlight) */}
        <path
          d="M 50 8 
             C 48 20, 42 36, 33 51 
             C 24 66, 22 76, 26 88 
             C 29 96, 35 102, 45 106 
             L 50 108 Z"
          fill="#FFF6D6"
          fillOpacity="0.25"
        />

        {/* Central Spine / Raised Nerve of the Vel */}
        <path
          d="M 50 8 L 50 108"
          stroke="url(#velSpine)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Holy Vibhuti (Three sacred horizontal white ash stripes) */}
        {withVibhuti && (
          <g filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))">
            {/* Top stripe */}
            <path
              d="M 37 42 C 45 40, 55 40, 63 42"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeOpacity="0.95"
            />
            {/* Middle stripe */}
            <path
              d="M 34 48 C 44 46, 56 46, 66 48"
              stroke="#FFFFFF"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeOpacity="0.95"
            />
            {/* Bottom stripe */}
            <path
              d="M 37 54 C 45 52, 55 52, 63 54"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeOpacity="0.95"
            />

            {/* Sacred Kumkum Pottu (Vermilion Bindu) at Center of Vibhuti */}
            <circle
              cx="50"
              cy="48"
              r="3.2"
              fill="url(#kumkumGlow)"
              stroke="#FFEAA7"
              strokeWidth="0.6"
            />
            <circle cx="49" cy="47" r="0.8" fill="#FFFFFF" fillOpacity="0.8" />
          </g>
        )}

        {/* Blade Base Collar / Lotus Ring (கண்டிகை) */}
        <path
          d="M 40 111 C 45 109, 55 109, 60 111 L 62 116 C 56 118, 44 118, 38 116 Z"
          fill="url(#velGold)"
          stroke="#6B4712"
          strokeWidth="1"
        />
        {/* Decorative Lotus Petal Beads at Base */}
        <circle cx="44" cy="113.5" r="1.5" fill="#FFEBA3" />
        <circle cx="50" cy="113.5" r="1.8" fill="#FFEBA3" />
        <circle cx="56" cy="113.5" r="1.5" fill="#FFEBA3" />

        {/* Polished Shaft (தண்டம்) */}
        <rect
          x="47.5"
          y="116"
          width="5"
          height="38"
          rx="1.5"
          fill="url(#velShaft)"
          stroke="#684210"
          strokeWidth="1"
        />

        {/* Shaft Decorative Rings */}
        <line x1="47.5" y1="126" x2="52.5" y2="126" stroke="#FFEAA7" strokeWidth="1.2" />
        <line x1="47.5" y1="138" x2="52.5" y2="138" stroke="#FFEAA7" strokeWidth="1.2" />

        {/* Base Pedestal / Peedam Mount */}
        <path
          d="M 43 154 L 57 154 L 60 159 L 40 159 Z"
          fill="url(#velGold)"
          stroke="#684210"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
