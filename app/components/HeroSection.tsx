"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen bg-transparent overflow-hidden">

            {/* VERTICAL NAME - Reduced 10% */}
            <div className="hidden lg:block fixed left-10 xl:left-14 z-40" style={{ top: '110px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        writingMode: 'vertical-lr',
                        textOrientation: 'upright',
                        letterSpacing: '-0.02em'
                    }}
                >
                    <h1 className="font-bebas text-[50px] leading-none text-[#E0E0E0]" style={{ textShadow: '0 0 30px rgba(224, 224, 224, 0.1)' }}>
                        MUHAMMAD ADAM
                    </h1>
                </motion.div>
            </div>

            {/* MAIN CONTENT - Perfect Alignment */}
            <div className="relative z-10 min-h-screen flex items-center px-6 lg:pl-48 xl:pl-60 lg:pr-16 xl:pr-24">
                <div className="w-full max-w-[1400px] mx-auto lg:mx-0">

                    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 xl:gap-28 items-center">

                        {/* LEFT COLUMN - Clean & Organized */}
                        <div>
                            {/* Status Badge */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="mb-16 inline-flex items-center gap-3 px-5 py-2.5 border border-white/[0.12] bg-white/[0.03] backdrop-blur-md"
                            >
                                <div className="relative">
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-emerald-500"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-40" />
                                </div>
                                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-[0.35em] font-medium">
                                    Available for Projects
                                </span>
                            </motion.div>

                            {/* Main heading */}
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[110px] font-bebas text-[#E0E0E0] leading-[0.86] mb-10 tracking-tight"
                                style={{ textShadow: '0 2px 40px rgba(224, 224, 224, 0.08)' }}
                            >
                                CHIEF TECHNOLOGY
                                <br />
                                OFFICER
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.4 }}
                                className="text-base lg:text-lg text-[#D4D4D8] font-light leading-[1.8] mb-12 max-w-[600px]"
                            >
                                Full-stack engineer and technical leader specializing in AI-powered solutions, cloud infrastructure,
                                and scalable system architecture. Driving innovation through agentic AI workflows and modern tech stacks.
                            </motion.p>

                            {/* Polished Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.6 }}
                                className="flex flex-wrap gap-3 mb-16"
                            >
                                {['Python', 'TypeScript', 'Next.js', 'FastAPI', 'Docker', 'Redis', 'Django', 'OpenAI SDK'].map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.7 + i * 0.05, duration: 0.4 }}
                                        className="px-4 py-2.5 text-[10px] font-mono text-white/[0.6] border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:text-white/[0.9] hover:border-white/[0.2] transition-all duration-300 backdrop-blur-md"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.9 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.button
                                    onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group relative px-11 py-4 bg-[#E0E0E0] text-[#050505] font-semibold text-sm overflow-hidden transition-all duration-300"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">View Portfolio</span>
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </motion.button>
                                <motion.button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-11 py-4 border-2 border-white/[0.15] text-[#E0E0E0] font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.25] transition-all duration-300 backdrop-blur-md"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get in Touch
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN - About Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                            className="hidden lg:block"
                        >
                            <div className="relative border border-white/[0.1] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-xl p-10 xl:p-12">
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20"></div>
                                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20"></div>
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20"></div>

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#D10000] to-transparent"></div>
                                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.35em]">About</span>
                                </div>

                                {/* Content */}
                                <div className="space-y-5 mb-10">
                                    <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                                        Currently serving as Chief Technology Officer at Aptive Mind, where I lead technology strategy and
                                        engineering initiatives. My journey began with the PIAIC certified engineering diploma in AI and Cloud Native
                                        technologies, which laid the foundation for my expertise in modern development practices.
                                    </p>

                                    <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                                        I've progressed from a frontend developer intern at Al-Basirr Technologies to full-stack roles at Dot Escapist
                                        and Auroxa Tech, where I mastered AI workflows, deployment pipelines, and system architecture. My experience
                                        spans from building scalable applications to leading teams and driving technical innovation.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/[0.1]">
                                    <div>
                                        <div className="text-4xl font-bebas text-[#E0E0E0] mb-2" style={{ textShadow: '0 0 20px rgba(224, 224, 224, 0.1)' }}>
                                            2.5+
                                        </div>
                                        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                                            Years Experience
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bebas text-[#E0E0E0] mb-2" style={{ textShadow: '0 0 20px rgba(224, 224, 224, 0.1)' }}>
                                            15+
                                        </div>
                                        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                                            Projects Delivered
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-40"
            >
                <span className="text-[8px] font-mono text-white/70 uppercase tracking-[0.45em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-16 bg-gradient-to-b from-white/50 via-white/30 to-transparent"
                />
            </motion.div>

        </section>
    );
}
