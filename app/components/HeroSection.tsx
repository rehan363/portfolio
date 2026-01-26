"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiPython, SiTypescript, SiFastapi, SiDocker, SiPostgresql, SiLangchain, SiAmazon, SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

export default function HeroSection() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const techStack = [
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900' }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: SiGithub, color: '#ffffff', opacity: 0.15, url: 'https://github.com/AdamChoudary' },
        { name: 'LinkedIn', icon: SiLinkedin, color: '#0A66C2', opacity: 0.12, url: '#' },
        { name: 'Email', icon: MdEmail, color: '#EA4335', opacity: 0.12, url: 'mailto:chaudhrayadam@gmail.com' }
    ];

    return (
        <section id="hero" className="relative w-full min-h-screen bg-transparent overflow-hidden">

            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#D10000]/[0.03] rounded-full blur-[80px] pointer-events-none"></div>

            {/* Vertical Name */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block fixed left-8 xl:left-12 top-1/2 -translate-y-1/2 z-50"
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
                            <h1 className="font-bebas text-[36px] tracking-[0.4em] text-white/30 rotate-180" style={{ writingMode: 'vertical-rl' }}>MUHAMMAD ADAM</h1>
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
                            MUHAMMAD ADAM
                        </h1>
                    </div>
                    <motion.div
                        className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 w-full min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-20 xl:gap-24 items-center py-12 md:py-16">

                        {/* Left - Main Content */}
                        <div className="space-y-10 md:space-y-12 lg:space-y-16">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:hidden text-6xl sm:text-7xl md:text-8xl font-bebas text-white leading-[0.9] tracking-tight"
                            >
                                MUHAMMAD<br />ADAM
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
                                        FULL STACK<br />ENGINEER
                                    </h2>
                                    <p className="text-lg sm:text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-[600px]">
                                        Building AI-powered solutions and scalable architectures
                                    </p>
                                </div>

                                <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-[560px]">
                                    Specialized in developing production-ready applications with modern tech stacks.
                                    Experienced in full-stack development, agentic AI workflows, and cloud infrastructure.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <motion.button
                                        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium text-sm sm:text-base hover:bg-[#D10000] hover:text-white transition-all duration-300"
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
                                                    className="w-5 h-5 text-gray-600 transition-colors duration-300"
                                                    style={{ color: 'rgb(75 85 99)' }}
                                                    onMouseEnter={(e) => {
                                                        const parent = e.currentTarget.parentElement;
                                                        if (parent?.classList.contains('group')) e.currentTarget.style.color = tech.color;
                                                    }}
                                                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgb(75 85 99)'; }}
                                                />
                                                <span
                                                    className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300"
                                                    onMouseEnter={(e) => {
                                                        const icon = e.currentTarget.previousElementSibling as HTMLElement;
                                                        if (icon) icon.style.color = tech.color;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        const icon = e.currentTarget.previousElementSibling as HTMLElement;
                                                        if (icon) icon.style.color = 'rgb(75 85 99)';
                                                    }}
                                                >
                                                    {tech.name}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right - Minimal Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden lg:block space-y-10 xl:space-y-12"
                        >
                            {/* Current Work */}
                            <div className="space-y-4 xl:space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-white/10"></div>
                                    <span className="text-xs text-gray-700 uppercase tracking-widest">Currently</span>
                                </div>
                                <div className="space-y-2 xl:space-y-3 pl-11">
                                    <h3 className="text-2xl xl:text-3xl font-bebas text-white">APTIVE MIND</h3>
                                    <div className="text-sm xl:text-base text-gray-500">Full Stack Engineer</div>
                                    <div className="text-xs xl:text-sm text-gray-700 font-mono">Nov 2025 — Present</div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="space-y-4 xl:space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-white/10"></div>
                                    <span className="text-xs text-gray-700 uppercase tracking-widest">Overview</span>
                                </div>
                                <div className="grid grid-cols-2 gap-6 xl:gap-8 pl-11">
                                    <div>
                                        <div className="text-3xl xl:text-4xl font-bebas text-white tabular-nums mb-1">2.5+</div>
                                        <div className="text-xs xl:text-sm text-gray-600">Years</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl xl:text-4xl font-bebas text-white tabular-nums mb-1">11</div>
                                        <div className="text-xs xl:text-sm text-gray-600">Projects</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl xl:text-4xl font-bebas text-white tabular-nums mb-1">05</div>
                                        <div className="text-xs xl:text-sm text-gray-600">Roles</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl xl:text-4xl font-bebas text-white tabular-nums mb-1">15+</div>
                                        <div className="text-xs xl:text-sm text-gray-600">Technologies</div>
                                    </div>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="relative space-y-4 xl:space-y-6">
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-8 h-px bg-white/10"></div>
                                    <span className="text-xs text-gray-700 uppercase tracking-widest">Connect</span>
                                </div>
                                <div className="relative pl-11 min-h-[120px]">
                                    <div className="absolute -left-11 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
                                        {socialLinks.map((link) => {
                                            const Icon = link.icon;
                                            return (
                                                <div
                                                    key={link.name}
                                                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredLink === link.name ? 'opacity-100' : 'opacity-0'}`}
                                                >
                                                    <Icon
                                                        className="w-40 h-40"
                                                        style={{ color: link.color, opacity: link.opacity }}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="relative space-y-2 z-10">
                                        {socialLinks.map((link) => (
                                            <motion.a
                                                key={link.name}
                                                href={link.url}
                                                className="block py-2 text-sm xl:text-base text-gray-500 hover:text-white transition-colors duration-300"
                                                whileHover={{ x: 4 }}
                                                onMouseEnter={() => setHoveredLink(link.name)}
                                                onMouseLeave={() => setHoveredLink(null)}
                                            >
                                                {link.name}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="space-y-4 xl:space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-white/10"></div>
                                    <span className="text-xs text-gray-700 uppercase tracking-widest">Based in</span>
                                </div>
                                <div className="pl-11">
                                    <div className="text-sm xl:text-base text-gray-500">Islamabad, Pakistan</div>
                                    <div className="text-xs xl:text-sm text-gray-700">UTC+5</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
