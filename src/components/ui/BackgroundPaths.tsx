import React from 'react'

const BackgroundPaths: React.FC = () => {
    return (
        <div aria-hidden className="absolute inset-0 -z-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.08" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.04" />
                    </linearGradient>
                </defs>

                <g>
                    <path fill="url(#g1)" d="M0,120 C220,200 420,0 720,80 C1020,160 1220,40 1440,120 L1440,800 L0,800 Z">
                        <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,120 C220,200 420,0 720,80 C1020,160 1220,40 1440,120 L1440,800 L0,800 Z; M0,80 C240,0 480,200 720,120 C960,40 1200,200 1440,80 L1440,800 L0,800 Z; M0,120 C220,200 420,0 720,80 C1020,160 1220,40 1440,120 L1440,800 L0,800 Z" />
                    </path>

                    <path fill="url(#g2)" d="M0,220 C300,320 500,120 820,200 C1100,280 1300,180 1440,220 L1440,800 L0,800 Z" opacity="0.9">
                        <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,220 C300,320 500,120 820,200 C1100,280 1300,180 1440,220 L1440,800 L0,800 Z; M0,200 C260,120 480,300 760,160 C1040,20 1240,260 1440,200 L1440,800 L0,800 Z; M0,220 C300,320 500,120 820,200 C1100,280 1300,180 1440,220 L1440,800 L0,800 Z" />
                    </path>
                </g>
            </svg>
            <style>{`\n                .-z-0 { z-index: 0; }\n            `}</style>
        </div>
    )
}

export default BackgroundPaths
