"use client";
import React, { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion, useInView } from "framer-motion";

const skills = [
    {
        category: "CORE ENGINEERING",
        items: ["Python", "TypeScript", "Next.js", "React", "Git"]
    },
    {
        category: "BACKEND & INFRA",
        items: ["FastAPI", "Docker", "Redis", "Django", "PostgreSQL"]
    },
    {
        category: "AI & AGENTIC SYSTEMS",
        items: ["OpenAI SDK", "LangGraph", "LiveKit", "CrewAI", "RAG Pipelines"]
    }
];

export default function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <SectionWrapper id="skills">
            <div ref={ref} className="max-w-4xl mx-auto px-6 py-20">

                {/* Header */}
                <div className="mb-20 flex items-baseline gap-4 border-b border-white/[0.05] pb-6">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white tracking-wide">
                        ARSENAL
                    </h2>
                    <span className="text-sm font-mono text-zinc-500">
                        // TECHNICAL_STACK
                    </span>
                </div>

                {/* The Tech Clusters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {skills.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <h3 className="font-mono text-xs text-[#D10000] tracking-widest uppercase mb-6 flex items-center gap-2">
                                <span className="w-1 h-1 bg-[#D10000] rounded-full"></span>
                                {group.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 text-[13px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.05] rounded-sm hover:text-white hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-300 cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}
