"use client";
import SectionWrapper from "./SectionWrapper";
import React from 'react';

const projects = [
    {
        id: "01",
        title: "NEO • BANK",
        category: "FINTECH_ARCHITECTURE",
        image: "/projects/neobank.png",
        year: "2024",
        description: "A complete reimagining of digital finance interfaces. Utilizing React Server Components for sub-millisecond data hydration and WebGL for real-time market visualization.",
        tech: ["Next.js 14", "TypeScript", "WebGL", "PostgreSQL"],
        status: "PRODUCTION"
    },
    {
        id: "02",
        title: "LUXE • FASHION",
        category: "E-COMMERCE_EXPERIENCE",
        image: "/projects/luxe.png",
        year: "2023",
        description: "Immersive shopping platform blending editorial aesthetics with high-conversion UX flows. Features AI-driven sizing recommendations and cloth simulation.",
        tech: ["Shopify Plus", "React", "Three.js", "Node.js"],
        status: "LIVE"
    },
    {
        id: "03",
        title: "AERO • DASH",
        category: "IOT_ANALYTICS",
        image: "/projects/aerodash.png",
        year: "2022",
        description: "Enterprise dashboard for aviation logistics. handling millions of data points with D3.js and WebSocket connections for live fleet tracking.",
        tech: ["Vue.js", "D3.js", "Python", "Redis"],
        status: "INTERNAL"
    }
];

export default function ProjectsSection() {
    return (
        <SectionWrapper id="work">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-8">
                    <div>
                        <div className="text-[#D10000] font-mono text-sm tracking-widest mb-2">PORTFOLIO_INDEX // SELECTED</div>
                        <h2 className="font-bebas text-6xl md:text-8xl text-white leading-none">
                            ENGINEERED <br /> <span className="opacity-50">SOLUTIONS</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="flex items-center gap-2 justify-end mb-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-mono text-white">ALL SYSTEMS NOMINAL</span>
                        </div>
                        <p className="text-gray-500 font-mono text-xs">AWAITING INPUT...</p>
                    </div>
                </div>

                {/* Projects Grid - "Technical Blueprint" Style */}
                <div className="grid grid-cols-1 gap-24">
                    {projects.map((project, index) => (
                        <div key={project.id} className="group relative">
                            {/* Project Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                                {/* 1. Visual Block (Left) */}
                                <div className="lg:col-span-7 relative">
                                    {/* Decorators */}
                                    <div className="absolute -left-4 -top-4 w-8 h-8 border-t border-l border-[#D10000]/50 transition-all duration-500 group-hover:border-[#D10000]"></div>
                                    <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b border-r border-[#D10000]/50 transition-all duration-500 group-hover:border-[#D10000]"></div>

                                    <div className="relative aspect-video bg-[#0A0A0A] border border-white/10 overflow-hidden group-hover:border-white/20 transition-colors">
                                        {/* Project Image */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                                        />

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>

                                        {/* Hover Reveal Content */}
                                        <div className="absolute inset-0 bg-[#D10000]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                                    </div>
                                </div>

                                {/* 2. Technical Spec Block (Right) */}
                                <div className="lg:col-span-5 flex flex-col justify-center">

                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-[#D10000] font-mono text-xl">0{index + 1}</span>
                                        <span className="h-px bg-white/10 flex-grow"></span>
                                        <span className="text-xs font-mono text-gray-400 border border-white/10 px-2 py-1 rounded">
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-5xl font-bebas text-white mb-4 group-hover:text-[#D10000] transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <div className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">
                                        {project.category}
                                    </div>

                                    <p className="text-gray-400 font-sans leading-relaxed mb-8 border-l border-white/10 pl-6 group-hover:border-[#D10000] transition-colors">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Matrix */}
                                    <div className="mb-8">
                                        <div className="text-[10px] font-mono text-gray-600 mb-3 uppercase">Tech Stack</div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-xs font-mono text-gray-300 bg-white/5 px-3 py-1.5 border border-white/5 group-hover:border-white/10 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="self-start relative px-6 py-3 bg-white text-black font-bebas text-lg tracking-wide hover:bg-[#D10000] hover:text-white transition-all duration-300 group/btn">
                                        CASE STUDY
                                        <span className="inline-block ml-2 transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section Footer */}
                <div className="mt-32 pt-12 border-t border-white/10 flex justify-between items-center text-xs font-mono text-gray-600">
                    <div>TOTAL_PROJECTS: {projects.length}</div>
                    <div>END_OF_LIST</div>
                </div>
            </div>
        </SectionWrapper>
    );
}
