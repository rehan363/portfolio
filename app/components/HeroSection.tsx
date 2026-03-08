"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiNextdotjs, SiPython, SiTypescript, SiFastapi, SiDocker, SiPostgresql, SiLangchain, SiAmazon, SiGithub, SiLinkedin, SiOpenai, SiN8N, SiAnthropic, SiGooglegemini, SiFlydotio, SiVercel } from 'react-icons/si';
import { TbPlugConnected } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';

export default function HeroSection() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const techStack = [
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
        { name: 'n8n', icon: SiN8N, color: '#FF6D5B' },
        { name: 'Claude', icon: SiAnthropic, color: '#D97757' },
        { name: 'Gemini', icon: SiGooglegemini, color: '#8E75FF' },
        { name: 'MCP', icon: TbPlugConnected, color: '#4A70A9' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
        { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
        { name: 'Fly.io', icon: SiFlydotio, color: '#4451ED' },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900' }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: SiGithub, color: '#ffffff', opacity: 0.15, url: 'https://github.com/rehan363' },
        { name: 'LinkedIn', icon: SiLinkedin, color: '#0A66C2', opacity: 0.12, url: 'https://www.linkedin.com/in/rehan-ahmed313' },
        { name: 'Email', icon: MdEmail, color: '#EA4335', opacity: 0.12, url: 'mailto:rehan007313@gmail.com' }
    ];

    return (
        <section id="hero" className="relative w-full min-h-screen bg-transparent overflow-hidden">

            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#4A70A9]/[0.03] rounded-full blur-[80px] pointer-events-none"></div>

            {/* Vertical Name */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block fixed left-4 xl:left-6 top-1/2 -translate-y-1/2 z-50"
            >
                <div className="relative flex flex-col items-center gap-8">
                    <motion.div
                        className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                    <div className="relative group">
                        <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <h1 className="font-bebas text-[36px] tracking-[0.4em] text-white/30 rotate-180" style={{ writingMode: 'vertical-rl' }}>REHAN AHMED</h1>
                        </div>
                        <h1
                            className="relative font-bebas text-[36px] tracking-[0.4em] rotate-180 transition-all duration-700 group-hover:tracking-[0.45em]"
                            style={{
                                writingMode: 'vertical-rl',
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
                            }}
                        >
                            REHAN AHMED
                        </h1>
                    </div>
                    <div className="flex flex-col gap-6 pt-4">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group p-2"
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    <div
                                        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"
                                        style={{ backgroundColor: `${link.color}10` }}
                                    />
                                    <Icon
                                        className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
                                        style={{ color: hoveredLink === link.name ? link.color : 'rgba(255,255,255,0.3)' }}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 w-full min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-20 xl:gap-24 items-start py-8 md:py-12">

                        {/* Left - Main Content */}
                        <div className="space-y-10 md:space-y-12 lg:space-y-16">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:hidden text-6xl sm:text-7xl md:text-8xl font-bebas text-white leading-[0.9] tracking-tight"
                            >
                                Rehan<br />Ahmed
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-8 md:space-y-10 lg:space-y-12"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
                                    </div>
                                    <span className="text-sm text-emerald-400">Available for opportunities</span>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bebas text-white leading-[0.95] tracking-tight">
                                        FULL STACK AI<br />DEVELOPER
                                    </h2>
                                    <p className="text-lg sm:text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-[600px]">
                                        Building <span className="text-[#4A70A9]">AI-Driven software solutions</span>
                                    </p>
                                </div>

                                <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-[560px]">
                                    Specialized in developing production-ready applications with modern tech stacks.
                                    Experienced in full-stack development, agentic AI workflows, and cloud infrastructure.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <motion.button
                                        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium text-sm sm:text-base hover:bg-[#4A70A9] hover:text-white transition-all duration-300"
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        View Work
                                    </motion.button>
                                    <motion.a
                                        href="/contact"
                                        className="px-6 sm:px-8 py-3 sm:py-4 text-white font-medium text-sm sm:text-base hover:text-white/70 transition-colors duration-300 flex items-center gap-2"
                                        whileHover={{ x: 4 }}
                                    >
                                        <span>Contact</span>
                                        <span className="text-sm">→</span>
                                    </motion.a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="pt-6 md:pt-8 border-t border-white/5"
                            >
                                <div className="text-xs text-gray-700 uppercase tracking-widest mb-3 md:mb-4">Working With</div>
                                <div className="flex flex-wrap gap-x-6 gap-y-3">
                                    {techStack.map((tech) => {
                                        const Icon = tech.icon;
                                        return (
                                            <motion.div
                                                key={tech.name}
                                                className="group flex items-center gap-2 cursor-pointer"
                                                whileHover={{ y: -2 }}
                                            >
                                                <Icon
                                                    className="w-5 h-5 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                                                    style={{ color: tech.color }}
                                                />
                                                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                                                    {tech.name}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="order-first lg:order-last relative group h-[400px] lg:h-[600px] mb-12 lg:mb-0"
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#4A70A9]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>

                            {/* Main Image Container */}
                            <div className="relative h-full w-full flex items-center justify-center">
                                {/* Border Frame (HUD Style) */}
                                <div className="absolute top-[40%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] lg:-translate-y-1/2 w-[280px] sm:w-[320px] lg:w-[380px] h-[380px] sm:h-[460px] lg:h-[520px] border border-white/5 group-hover:border-[#4A70A9]/30 transition-colors duration-500">
                                    {/* Corner Accents */}
                                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#4A70A9]"></div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#4A70A9]"></div>

                                    {/* Scanning Line Animation */}
                                    <motion.div
                                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A70A9] to-transparent z-20"
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* The Image */}
                                    <div className="absolute inset-0 p-4 bg-black/40 overflow-hidden">
                                        <div className="relative w-full h-full transition-all duration-700 group-hover:grayscale-0 grayscale opacity-80 group-hover:opacity-100">
                                            <img
                                                src="/portfolio professional image.png"
                                                alt="Rehan Ahmed"
                                                className="w-full h-full object-cover scale-[1.15] origin-top translate-y-0"
                                                onError={(e) => { e.currentTarget.src = "/hero-tactical.png"; }}
                                            />
                                            {/* Professional gradient fade to hide hands/watermark */}
                                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        </div>
                                    </div>


                                </div>

                                {/* Floating Stats Dots */}
                                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-[#4A70A9] rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: [0, 0.5, 0],
                                                x: Math.random() * 800 - 400,
                                                y: Math.random() * 800 - 400
                                            }}
                                            transition={{
                                                duration: Math.random() * 3 + 2,
                                                repeat: Infinity,
                                                delay: Math.random() * 2
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
