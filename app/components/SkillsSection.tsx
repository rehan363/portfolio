"use client";
import SectionWrapper from "./SectionWrapper";
import React from "react";

const skills = [
    { name: "React", category: "CORE", level: 98, status: "Active" },
    { name: "Next.js", category: "CORE", level: 95, status: "Active" },
    { name: "TypeScript", category: "LANG", level: 90, status: "Stable" },
    { name: "Node.js", category: "BACKEND", level: 85, status: "Scaling" },
    { name: "PostgreSQL", category: "DATA", level: 85, status: "Optimized" },
    { name: "Three.js", category: "VISUAL", level: 88, status: "Rendering" },
    { name: "Docker", category: "DEVOPS", level: 80, status: "Containerized" },
    { name: "AWS", category: "CLOUD", level: 70, status: "Deployed" },
];

export default function SkillsSection() {
    return (
        <SectionWrapper id="arsenal">
            <div className="w-full max-w-5xl mx-auto">
                {/* Minimalist Professional Header */}
                <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bebas text-white tracking-tight leading-none">
                            TECHNICAL<span className="text-[#D10000]">_</span>MATRIX
                        </h2>
                        <p className="font-mono text-xs text-gray-500 mt-2 max-w-md leading-relaxed">
                            A live overview of the production stack. <br />
                            Core technologies deployed across current active systems.
                        </p>
                    </div>
                    <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest text-right">
                        System_Status: Optimal<br />
                        Last_Audit: {new Date().toLocaleDateString()}
                    </div>
                </div>

                {/* The "Data Table" - Modern Minimalist Grid */}
                <div className="w-full">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 py-3 border-b border-white/10 text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-4 bg-white/5 rounded-t-sm">
                        <div className="col-span-4">Technology</div>
                        <div className="col-span-2">Domain</div>
                        <div className="col-span-4">Performance_Metric</div>
                        <div className="col-span-2 text-right">State</div>
                    </div>

                    {/* Table Rows */}
                    <div className="bg-[#080808] border border-white/5 rounded-b-sm">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="group grid grid-cols-12 gap-4 py-5 px-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors items-center"
                            >
                                {/* Tech Name */}
                                <div className="col-span-4 font-bebas text-xl text-zinc-300 group-hover:text-white transition-colors tracking-wide">
                                    {skill.name}
                                </div>

                                {/* Category */}
                                <div className="col-span-2">
                                    <span className="text-[9px] font-mono bg-white/5 border border-white/5 px-2 py-1 rounded text-zinc-400 group-hover:border-white/10 transition-colors">
                                        {skill.category}
                                    </span>
                                </div>

                                {/* Proficiency Bar */}
                                <div className="col-span-4 flex items-center h-full pr-8">
                                    <div className="w-full h-[2px] bg-zinc-800 relative overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-[#D10000] transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <span className="ml-3 text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Status */}
                                <div className="col-span-2 text-right">
                                    <span className="font-mono text-[10px] text-zinc-500 group-hover:text-[#D10000] relative pl-3 transition-colors">
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-zinc-800 rounded-full group-hover:bg-[#D10000] transition-colors"></span>
                                        {skill.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
