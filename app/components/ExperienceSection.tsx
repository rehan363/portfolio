"use client";
import React, { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
    {
        id: "EXP_01",
        year: "2025",
        role: "Chief Technology Officer",
        company: "Aptive Mind",
        location: "Islamabad",
        description: "Leading technology strategy and engineering division. Spearheading the development of autonomous agentic AI systems and overseeing critical infrastructure decisions.",
        tech: ["Leadership", "AI Architecture", "Strategic Planning", "Agentic Workflows"]
    },
    {
        id: "EXP_02",
        year: "2025",
        role: "Full Stack Engineer",
        company: "Auroxa Tech",
        location: "Innovista Rawal",
        description: "Engineered high-performance AI workflows using VAPI and OpenAI. Implemented complex backend management systems with Redis and Dapr.",
        tech: ["FastAPI", "Next.js", "Docker", "Dapr", "Redis"]
    },
    {
        id: "EXP_03",
        year: "2024",
        role: "Frontend Developer",
        company: "Dot Escapist",
        location: "Islamabad",
        description: "Developed robust full-stack applications with Django backends. Optimized UI flows and implemented secure server actions for data processing.",
        tech: ["Django", "Next.js", "PostgreSQL", "React"]
    },
    {
        id: "EXP_04",
        year: "2024",
        role: "Frontend Intern",
        company: "Al-Basirr Tech",
        location: "NSTP",
        description: "Gained intensive practical experience in API connectivity and enterprise-level frontend modules.",
        tech: ["Next.js", "TailwindCSS", "API Integration"]
    },
    {
        id: "EXP_05",
        year: "2023",
        role: "AI Engineering Student",
        company: "PIAIC (Air Univ)",
        location: "Islamabad",
        description: "Advanced diploma in Generative AI & Cloud Native technologies. Building next-gen applications with agentic frameworks.",
        tech: ["Python", "Docker", "Kubernetes", "LangGraph"]
    }
];

export default function ExperienceSection() {
    return (
        <SectionWrapper id="experience">
            <div className="max-w-4xl mx-auto px-6 py-20">

                {/* Minimal Header */}
                <div className="mb-24 flex items-baseline gap-4">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white tracking-wide">
                        EXPERIENCE
                    </h2>
                    <span className="text-sm font-mono text-zinc-500">
                        // PROOF_OF_WORK
                    </span>
                </div>

                {/* The Axis Layout */}
                <div className="relative border-l border-white/[0.1] ml-3 md:ml-6 space-y-16 py-4">

                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 md:pl-16 group">

                            {/* Axis Node - Minimal */}
                            <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-[#050505] border border-white/20 group-hover:border-white/60 transition-colors duration-500 rounded-full z-10"></div>

                            <motion.div
                                initial={{ opacity: 0.5, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="group-hover:opacity-100 transition-opacity duration-500"
                            >
                                {/* Meta Header */}
                                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-3">
                                    <span className="text-sm font-mono text-[#D10000] tracking-wide">
                                        {exp.year}
                                    </span>
                                    <h3 className="text-2xl font-bebas text-white tracking-wide">
                                        {exp.company}
                                    </h3>
                                    <span className="text-xs font-mono text-zinc-600 uppercase">
                                        {exp.location}
                                    </span>
                                </div>

                                {/* Role */}
                                <div className="text-xl md:text-2xl text-white/90 mb-4 font-light tracking-tight">
                                    {exp.role}
                                </div>

                                {/* Description */}
                                <p className="text-sm md:text-[15px] text-zinc-400 leading-relaxed max-w-2xl mb-6 font-light">
                                    {exp.description}
                                </p>

                                {/* Tech Tags - Minimal */}
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 cursor-default">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}
