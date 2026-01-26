"use client";
import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import {
    SiPython, SiTypescript, SiJavascript, SiReact, SiNextdotjs,
    SiDjango, SiFastapi, SiDocker, SiGit, SiTailwindcss,
    SiRedis, SiHtml5, SiCss3, SiPostgresql, SiLangchain
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { FaProjectDiagram } from "react-icons/fa";
import { HiCube } from "react-icons/hi";

// Icon mapping for technologies with hover colors
const techIcons: Record<string, { icon: React.ReactNode; hoverColor: string }> = {
    "Python": {
        icon: <SiPython className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#3776AB]"
    },
    "TypeScript": {
        icon: <SiTypescript className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#3178C6]"
    },
    "JavaScript": {
        icon: <SiJavascript className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#F7DF1E]"
    },
    "Next.js": {
        icon: <SiNextdotjs className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-white"
    },
    "React": {
        icon: <SiReact className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#61DAFB]"
    },
    "Django": {
        icon: <SiDjango className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#092E20]"
    },
    "FastAPI": {
        icon: <SiFastapi className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#009688]"
    },
    "Docker": {
        icon: <SiDocker className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#2496ED]"
    },
    "Git": {
        icon: <SiGit className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#F05032]"
    },
    "TailwindCSS": {
        icon: <SiTailwindcss className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#06B6D4]"
    },
    "Redis": {
        icon: <SiRedis className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#DC382D]"
    },
    "HTML5": {
        icon: <SiHtml5 className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#E34F26]"
    },
    "CSS": {
        icon: <SiCss3 className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#1572B6]"
    },
    "PostgreSQL": {
        icon: <SiPostgresql className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#4169E1]"
    },
    "OpenAI SDK": {
        icon: <TbBrandOpenai className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#412991]"
    },
    "VAPI SDK": {
        icon: <TbBrandOpenai className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#10B981]"
    },
    "LiveKit": {
        icon: <HiCube className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#5B51D8]"
    },
    "Dapr": {
        icon: <HiCube className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#0D2192]"
    },
    "LangGraph": {
        icon: <SiLangchain className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#1C3C3C]"
    },
    "CrewAI": {
        icon: <FaProjectDiagram className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#FF6B6B]"
    },
    "MCP": {
        icon: <FaProjectDiagram className="w-3.5 h-3.5" />,
        hoverColor: "group-hover/tech:text-[#8B5CF6]"
    }
};

// Redesigned with Swiss Design + Dieter Rams principles
// "Less but better" - Clarity, honesty, thorough to last detail

const experiences = [
    {
        id: "01",
        period: "Nov 2025 — Present",
        role: "Full Stack Engineer",
        company: "Aptive Mind",
        type: "Full-time",
        location: "Islamabad, PK",
        scope: "Building scalable full-stack applications with modern tech stacks. Working on cutting-edge AI-powered solutions and enterprise-grade systems.",
        impact: ["Active Role", "High Impact"],
        stack: ["Next.js", "FastAPI", "Docker", "TypeScript", "Python"]
    },
    {
        id: "02",
        period: "Jul — Nov 2025",
        role: "Full Stack Engineer",
        company: "Auroxa Tech",
        type: "Full-time",
        location: "DHA-1, Islamabad, PK",
        scope: "Led full-stack engineering initiatives. Managed agentic AI workflows, deployment pipelines, load balancing, cache systems, and proxy architectures.",
        impact: ["4 Months", "Critical Impact"],
        stack: ["FastAPI", "VAPI SDK", "OpenAI SDK", "LiveKit", "Dapr", "Docker", "Next.js", "Redis"]
    },
    {
        id: "03",
        period: "Aug 2024 — Jun 2025",
        role: "Frontend Developer",
        company: "Dot Escapist",
        type: "Full-time",
        location: "G-13, Islamabad, PK",
        scope: "Developed full-stack applications with Django backends. Implemented CRUD operations, optimized UI flows, managed API routes, and built secure server actions.",
        impact: ["10 Months", "High Impact"],
        stack: ["Django", "Next.js", "React", "PostgreSQL"]
    },
    {
        id: "04",
        period: "Jun — Aug 2024",
        role: "Frontend Developer",
        company: "Al-Basirr Technologies",
        type: "Internship",
        location: "NSTP, Islamabad, PK",
        scope: "Gained intensive practical experience in API connectivity and enterprise-level frontend development. Focused on backend integration and responsive user interfaces.",
        impact: ["2 Months", "Foundation"],
        stack: ["Next.js", "TailwindCSS", "HTML5"]
    },
    {
        id: "05",
        period: "Jun 2023 — Present",
        role: "AI Engineering Diploma",
        company: "PIAIC (Air University)",
        type: "Education",
        location: "Islamabad, PK",
        scope: "Certified engineering diploma in AI and Cloud Native technologies. Mastering modern development practices, agentic AI frameworks, and cloud-native architectures.",
        impact: ["Ongoing", "Certified"],
        stack: ["Python", "FastAPI", "Docker", "TypeScript", "Next.js", "React", "OpenAI SDK", "LangGraph", "CrewAI", "MCP", "Git", "TailwindCSS", "HTML5", "CSS"]
    }
];

export default function ExperienceSection() {
    return (
        <SectionWrapper id="experience">
            {/* Header - Dieter Rams: "Self-explanatory" */}
            <header className="mb-8 md:mb-12">
                <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-[10px] font-mono text-gray-600 tracking-[0.3em] uppercase">
                        Career Record
                    </span>
                    <div className="flex-1 h-px bg-white/[0.05]"></div>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-white leading-[0.9] tracking-tight mb-6">
                    Professional
                    <br />
                    Experience
                </h2>

                {/* Trust Metrics - Honest, Transparent */}
                <div className="flex flex-wrap gap-8 md:gap-12 pt-6 border-t border-white/[0.05]">
                    <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-bebas text-white tabular-nums">2.5+</span>
                        <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Years</span>
                    </div>
                    <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-bebas text-white tabular-nums">05</span>
                        <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Positions</span>
                    </div>
                    <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-bebas text-white tabular-nums">30+</span>
                        <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Projects</span>
                    </div>
                </div>
            </header>

            {/* Timeline - Swiss Design: Mathematical Grid */}
            <div className="relative ml-0 md:ml-16 lg:ml-28">
                {/* Vertical Timeline Axis */}
                <div className="absolute left-0 md:left-20 top-0 bottom-0 w-px bg-white/[0.08]"></div>

                {/* Experience List - Minimalist Cards */}
                <div className="space-y-0">
                    {experiences.map((exp, index) => (
                        <motion.article
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group relative border-b border-white/[0.05] last:border-0"
                        >
                            {/* Timeline Node - Centered on line */}
                            <div className="absolute left-[-4px] md:left-[76px] top-8 w-2 h-2 rounded-full bg-[#D10000] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>

                            {/* Card Content - Grid Layout */}
                            <div className="pl-10 md:pl-32 pr-0 md:pr-8 py-8 md:py-12 grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">

                                {/* Left Column - Meta Data */}
                                <div className="space-y-4">
                                    {/* ID Number */}
                                    <div className="text-[10px] font-mono text-gray-700 tracking-[0.2em]">
                                        {exp.id}
                                    </div>

                                    {/* Period */}
                                    <div>
                                        <div className="text-[11px] font-mono text-white/90 mb-1">
                                            {exp.period}
                                        </div>
                                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">
                                            {exp.type}
                                        </div>
                                    </div>

                                    {/* Location - Swiss precision */}
                                    <div className="text-[10px] font-mono text-gray-600">
                                        {exp.location}
                                    </div>

                                    {/* Impact Metrics - Trust Signal */}
                                    <div className="pt-2 space-y-1">
                                        {exp.impact.map((metric, i) => (
                                            <div key={i} className="text-[10px] font-mono text-gray-600">
                                                · {metric}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column - Main Content */}
                                <div className="space-y-5">
                                    {/* Company & Role */}
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bebas text-white mb-1 leading-none group-hover:text-[#D10000] transition-colors duration-300">
                                            {exp.company}
                                        </h3>
                                        <div className="text-base md:text-lg text-white/80 font-light">
                                            {exp.role}
                                        </div>
                                    </div>

                                    {/* Scope - What was built */}
                                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                                        {exp.scope}
                                    </p>

                                    {/* Tech Stack - Organized Grid with Icons */}
                                    <div className="pt-2">
                                        <div className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.25em] mb-3">
                                            Stack
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.stack.map((tech) => {
                                                const techData = techIcons[tech];
                                                return (
                                                    <span
                                                        key={tech}
                                                        className="group/tech flex items-center gap-1.5 text-[10px] font-mono text-gray-500 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1.5 hover:border-white/[0.12] hover:text-gray-300 transition-all duration-200 cursor-default"
                                                        title={tech}
                                                    >
                                                        {techData && (
                                                            <span className={`text-gray-600 transition-colors duration-200 ${techData.hoverColor}`}>
                                                                {techData.icon}
                                                            </span>
                                                        )}
                                                        {tech}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Footer - System Information */}
            <footer className="mt-16 pt-8 border-t border-white/[0.05] flex justify-between items-center">
                <div className="text-[9px] font-mono text-gray-700 tracking-[0.25em] uppercase">
                    End of Record
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[9px] font-mono text-gray-600 tracking-[0.2em] uppercase">
                        Available
                    </span>
                </div>
            </footer>
        </SectionWrapper>
    );
}
