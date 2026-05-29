import React from 'react';

export default function DevLogo({ size = 36 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, display: 'inline-block' }} aria-hidden>
      <style>{`
        @keyframes rotateLogo { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes glowPulse { 0% { filter: drop-shadow(0 0 0px rgba(255,255,255,0.06)); } 50% { filter: drop-shadow(0 0 6px rgba(255,255,255,0.12)); } 100% { filter: drop-shadow(0 0 0px rgba(255,255,255,0.06)); } }
        .devlogo-wrap { display:inline-block; width:100%; height:100%; }
        .devlogo-svg { width:100%; height:100%; display:block; transform-origin: center; animation: rotateLogo 12s linear infinite; }
        .devlogo-glow { animation: glowPulse 2.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .devlogo-svg, .devlogo-glow { animation: none !important; } }
      `}</style>
      <svg className="devlogo-svg devlogo-glow" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="googleBlue" x1="0" x2="1">
            <stop offset="0" stopColor="#4285F4" />
            <stop offset="1" stopColor="#4285F4" />
          </linearGradient>
          <linearGradient id="googleRed" x1="0" x2="1">
            <stop offset="0" stopColor="#EA4335" />
            <stop offset="1" stopColor="#EA4335" />
          </linearGradient>
          <linearGradient id="googleYellow" x1="0" x2="1">
            <stop offset="0" stopColor="#FBBC05" />
            <stop offset="1" stopColor="#FBBC05" />
          </linearGradient>
          <linearGradient id="googleGreen" x1="0" x2="1">
            <stop offset="0" stopColor="#34A853" />
            <stop offset="1" stopColor="#34A853" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="10" fill="url(#g)" />
        <g transform="translate(9,9) scale(0.75)">
          <path d="M6 6 L18 6 L18 12 L6 12 Z" fill="url(#googleBlue)" opacity="0.9" />
          <path d="M8 20 L20 20 L20 26 L8 26 Z" fill="url(#googleRed)" opacity="0.9" />
          <circle cx="22" cy="10" r="2.2" fill="url(#googleYellow)" />
          <circle cx="22" cy="24" r="2.2" fill="url(#googleGreen)" />
          <text x="6" y="18" fontFamily="Space Grotesk, Inter, sans-serif" fontWeight="700" fontSize="20" fill="white">SP</text>
        </g>
      </svg>
    </div>
  );
}
