import React from 'react'

const BackgroundPaths: React.FC = () => {
    return (
        <div aria-hidden className="absolute inset-0 -z-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
                    </linearGradient>
                </defs>

                <g>
                    <path fill="url(#g1)" d="M0,120 C220,170 420,60 720,100 C1020,140 1220,80 1440,120 L1440,800 L0,800 Z">
                        <animate attributeName="d" dur="22s" repeatCount="indefinite" values="M0,120 C220,170 420,60 720,100 C1020,140 1220,80 1440,120 L1440,800 L0,800 Z; M0,100 C240,120 480,100 720,110 C960,120 1200,100 1440,100 L1440,800 L0,800 Z; M0,120 C220,170 420,60 720,100 C1020,140 1220,80 1440,120 L1440,800 L0,800 Z" />
                    </path>

                    <path fill="url(#g2)" d="M0,220 C300,260 500,160 820,200 C1100,240 1300,180 1440,220 L1440,800 L0,800 Z" opacity="0.9">
                        <animate attributeName="d" dur="18s" repeatCount="indefinite" values="M0,220 C300,260 500,160 820,200 C1100,240 1300,180 1440,220 L1440,800 L0,800 Z; M0,200 C260,180 480,220 760,180 C1040,160 1240,220 1440,200 L1440,800 L0,800 Z; M0,220 C300,260 500,160 820,200 C1100,240 1300,180 1440,220 L1440,800 L0,800 Z" />
                    </path>
                </g>
            </svg>
            <style>{`\n                .-z-0 { z-index: 0; }\n            `}</style>
        </div>
    )
}

export default BackgroundPaths
