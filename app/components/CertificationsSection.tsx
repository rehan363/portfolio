"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FaCertificate, FaExternalLinkAlt, FaAward } from "react-icons/fa";

interface Certificate {
    id: string;
    title: string;
    description: string;
    image: string;
    issuer: string;
    date: string;
    level: string;
}

const certificates: Certificate[] = [
    {
        id: "cert-l2",
        title: "Agentic AI Professional Level 2 Developer",
        description: "Advanced certification focused on complex multi-agent orchestration, stateful agent deployments with LangGraph, and integrating AI agents into enterprise-grade production environments. Validates expertise in high-fidelity agentic logic and tool-calling mastery.",
        image: "/level2_cirtificate.png",
        issuer: "Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
        date: "January 30, 2026",
        level: "Level 2"
    },
    {
        id: "cert-l1",
        title: "Agentic AI Developer - Level 1",
        description: "Comprehensive mastery of foundational agentic systems, including LLM orchestration, structured prompting, and the development of autonomous digital workflows. This certification validates the ability to build reliable, responsive AI components.",
        image: "/level1cirtificate.png",
        issuer: "Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
        date: "January 2026",
        level: "Level 1"
    },
    {
        id: "cert-mcp",
        title: "Model Context Protocol: Advanced Topics",
        description: "Advanced certification from Anthropic validating expertise in the Model Context Protocol (MCP). Specialized in architecting standardized interfaces for AI context exchange, enabling seamless integration between LLMs and complex data ecosystems.",
        image: "/mcp cirtificate.jpeg",
        issuer: "Anthropic",
        date: "September 18, 2025",
        level: "Advanced"
    }
];

export default function CertificationsSection() {
    return (
        <SectionWrapper id="certifications">
            <motion.header
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="space-y-3">
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-1 bg-[#4A70A9] rounded-full"></div>
                        <span className="text-[11px] font-mono text-gray-600 uppercase tracking-[0.3em]">Credentials & Validation</span>
                    </div>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bebas text-white leading-[0.85] tracking-tight">
                        CERTIFICATIONS
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="h-px w-24 bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
                        <span className="text-xs text-gray-500 font-mono tabular-nums">Validated Expertise in Agentic Systems</span>
                    </div>
                </div>
            </motion.header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        className="group relative bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-500 rounded-sm overflow-hidden"
                    >
                        {/* Certificate Image Container */}
                        <div className="relative aspect-[16/11] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>

                            {/* Level Badge */}
                            <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#4A70A9] text-white font-bebas tracking-wider text-lg">
                                {cert.level}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bebas text-white tracking-wide group-hover:text-[#4A70A9] transition-colors uppercase">
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono italic">
                                        <FaAward className="text-[#4A70A9]" />
                                        {cert.issuer}
                                    </div>
                                </div>
                                <div className="text-xs font-mono text-gray-600 tabular-nums">
                                    {cert.date}
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 leading-relaxed font-medium text-justify">
                                {cert.description}
                            </p>

                            <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.05] rounded-full">
                                    <FaCertificate className="text-[#4A70A9] text-[10px]" />
                                    <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">Verified Credential</span>
                                </div>
                                <button className="flex items-center gap-2 text-[10px] font-mono text-gray-400 hover:text-white transition-colors group/btn">
                                    VIEW FULL SIZE <FaExternalLinkAlt className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Verification Footer Note */}
            <motion.div
                className="mt-12 p-6 border border-dashed border-white/10 rounded-sm flex flex-col md:flex-row items-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <FaAward className="text-white/20 w-6 h-6" />
                </div>
                <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500 leading-relaxed">
                        These certifications were issued by the <span className="text-white font-semibold">Presidential Initiative for Artificial Intelligence & Computing (PIAIC)</span> after rigorous training and examination. They represent a deep commitment to mastering the evolving landscape of Agentic AI and Physical Intelligence.
                    </p>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
