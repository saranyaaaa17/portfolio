import React from 'react';

export default function DevLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#06b6d4" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#g)" />
      <g transform="translate(9,9) scale(0.75)">
        <path d="M6 6 L18 6 L18 12 L6 12 Z" fill="rgba(255,255,255,0.12)" />
        <path d="M8 20 L20 20 L20 26 L8 26 Z" fill="rgba(255,255,255,0.12)" />
        <text x="6" y="18" fontFamily="Space Grotesk, Inter, sans-serif" fontWeight="700" fontSize="20" fill="white">SP</text>
      </g>
    </svg>
  );
}
