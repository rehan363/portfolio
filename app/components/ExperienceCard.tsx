"use client";

import TiltCard from "./3d/TiltCard";

interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    tech: string[];
}

export default function ExperienceCard({ item, index }: { item: ExperienceItem, index: number }) {
    return (
        <TiltCard className="w-full" intensity={10}>
            <div className="relative bg-[#0A0A0A]/80 backdrop-blur-md border border-white/5 p-8 rounded-xl overflow-hidden group hover:border-[#D10000]/30 transition-colors duration-500">

                {/* HUD Elements - Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#D10000]/50 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#D10000]/50 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#D10000]/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#D10000]/50 transition-colors" />

                {/* Background Gradient Hint */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#D10000] rounded-full filter blur-[100px] opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" />

                {/* Header Content */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-6 border-b border-white/5">
                    <div>
                        <h3 className="text-4xl font-bebas text-white mb-2 group-hover:text-[#D10000] transition-colors duration-300 tracking-wide">{item.role}</h3>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-mono text-[#D10000] tracking-widest uppercase">
                                {item.company}
                            </span>
                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            <span className="text-xs font-mono text-gray-400">
                                {item.period}
                            </span>
                        </div>
                    </div>
                    {/* Index for Desktop */}
                    <div className="hidden md:block text-5xl font-bebas text-white/5 group-hover:text-white/10 transition-colors">
                        0{index + 1}
                    </div>
                </div>

                {/* Description */}
                <p className="relative z-10 text-gray-300 font-sans text-base leading-relaxed mb-8 max-w-3xl opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                    {item.tech.map((t, i) => (
                        <span key={i} className="text-[10px] uppercase font-mono tracking-widest text-gray-500 border border-white/5 px-2 py-1 rounded hover:bg-white/5 hover:text-white transition-all">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Scanline Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay transition-opacity duration-500" />
            </div>
        </TiltCard>
    );
}
