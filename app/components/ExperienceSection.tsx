"use client";
import React from 'react';
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const experiences = [
    {
        id: "NODE_01",
        role: "Senior Full Stack Engineer",
        company: "TechFlow Systems",
        period: "2024 - PRESENT",
        status: "ONLINE",
        latency: "12ms",
        description: "Architecting high-performance interface systems for enterprise data visualization. Spearheading the migration to React Server Components.",
        tech: ["Next.js 14", "TypeScript", "WebGL", "Rust"]
    },
    {
        id: "NODE_02",
        role: "Creative Developer",
        company: "Neon Digital",
        period: "2022 - 2024",
        status: "ARCHIVED",
        latency: "45ms",
        description: "Bridged design and engineering to build award-winning marketing sites. Implemented complex GSAP animations and 3D product configurators.",
        tech: ["Vue.js", "Three.js", "GSAP", "Tailwind"]
    },
    {
        id: "NODE_03",
        role: "UI Engineer",
        company: "StartBlock",
        period: "2020 - 2022",
        status: "DISCONNECTED",
        latency: "N/A",
        description: "Developed component libraries and design systems used across 5 different products. Focused on accessibility and pixel-perfect implementation.",
        tech: ["React", "Storybook", "Figma", "Sass"]
    }
];

export default function ExperienceSection() {
    return (
        <SectionWrapper id="experience">
            <div className="max-w-5xl mx-auto">

                {/* Header - System Terminal Style */}
                <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-6">
                    <div className="w-3 h-3 bg-[#D10000] animate-pulse"></div>
                    <h2 className="text-4xl md:text-6xl font-bebas text-white tracking-widest">
                        SYSTEM_LOGS
                    </h2>
                    <span className="font-mono text-xs text-gray-500 mt-2">
                        // ROOT_ACCESS_GRANTED
                    </span>
                </div>

                {/* The "Architecture Topology" Layout */}
                <div className="relative pl-8 border-l border-white/10 space-y-16">

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative group">

                            {/* Rigid Connector Line (Architecture Style) */}
                            <div className="absolute top-6 -left-8 w-8 h-px bg-white/10 group-hover:bg-[#D10000] group-hover:w-16 transition-all duration-500"></div>

                            {/* Node Indicator */}
                            <div className="absolute top-[21px] -left-[35px] w-1.5 h-1.5 bg-[#050505] border border-gray-500 group-hover:border-[#D10000] group-hover:bg-[#D10000] transition-colors rounded-none"></div>

                            {/* The "Server Block" */}
                            <div className="bg-[#080808] border border-white/10 p-8 hover:border-[#D10000]/50 transition-all duration-500 relative overflow-hidden">

                                {/* Background Tech Noise */}
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[10px] text-right pointer-events-none">
                                    <div>Latency: {exp.latency}</div>
                                    <div>Pkt_Loss: 0%</div>
                                </div>

                                {/* Top Row: Meta */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#D10000] font-mono text-xs tracking-widest uppercase">
                                            {exp.id}
                                        </span>
                                        <span className="text-xs font-mono text-gray-500">
                                            // {exp.company}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${exp.status === 'ONLINE' ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                                        <span className="text-[10px] font-mono text-gray-400 uppercase">
                                            {exp.status}
                                        </span>
                                        <span className="text-[10px] font-mono text-gray-600 ml-4 border border-white/10 px-2 py-0.5">
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                    <div className="col-span-12 md:col-span-8">
                                        <h3 className="text-3xl font-bebas text-white mb-4 tracking-wide group-hover:text-white transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-gray-400 font-sans text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-[#D10000] transition-colors">
                                            {exp.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack Column */}
                                    <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
                                        <span className="text-[10px] font-mono text-gray-600 mb-2 uppercase tracking-wider">
                                            Dependencies:
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <span key={t} className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-1 hover:text-white transition-colors cursor-default">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                    {/* End of Log Marker */}
                    <div className="absolute bottom-[-10px] -left-1 w-2 h-2 bg-white/10"></div>
                </div>
            </div>
        </SectionWrapper>
    );
}
