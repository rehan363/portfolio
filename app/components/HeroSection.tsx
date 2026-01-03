"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden">

            {/* 1. Cinematic Background Texture */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
            </div>

            {/* Full width padding wrapper - matches Navbar */}
            <div className="w-full px-6 md:px-12 lg:px-24">
                {/* Centered content container */}
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: The "Architect" Identity */}
                    <div className="flex flex-col justify-center items-start text-left">

                        {/* Status Line */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] font-mono text-gray-300 tracking-widest uppercase">System Online</span>
                            </div>
                            <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">ID: MA-8080</span>
                        </motion.div>

                        {/* Massive Name Block */}
                        <div className="relative mb-8">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-7xl md:text-9xl font-bebas text-white leading-[0.9] tracking-tight"
                            >
                                MUHAMMAD <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-600">ADAM</span>
                            </motion.h1>
                            <div className="absolute -left-6 top-4 bottom-4 w-1 bg-[#D10000] hidden md:block"></div>
                        </div>

                        {/* Professional Statement */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="max-w-xl space-y-6"
                        >
                            <h2 className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
                                Senior Solution Architect
                            </h2>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-sans border-l border-white/10 pl-6">
                                I engineer <strong>mission-critical distributed systems</strong>.
                                Specializing in high-performance frontend architecture, WebGL visualization, and scalable backend infrastructure.
                                <br /><br />
                                <span className="text-white/80 font-mono text-xs">NO FLUFF. JUST PRODUCTION CODE.</span>
                            </p>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-10 flex gap-4"
                        >
                            <button
                                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-[#D10000] text-white font-bebas tracking-wider hover:bg-[#b00000] transition-colors"
                            >
                                VIEW ARCHITECTURE
                            </button>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-transparent border border-white/20 text-white font-bebas tracking-wider hover:bg-white/5 transition-colors"
                            >
                                CONTACT
                            </button>
                        </motion.div>

                    </div>

                    {/* RIGHT: The "Glass Monolith" - High Fidelity Tech Spec Card */}
                    <div className="hidden lg:flex justify-end items-center h-full perspective-[1000px]">
                        <motion.div
                            initial={{ rotateY: 10, rotateX: 5 }}
                            animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[400px] h-[550px] bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-sm p-8 shadow-2xl transform-style-3d group"
                        >
                            {/* Internal Reflection/Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-12 border-b border-white/10 pb-4">
                                <div>
                                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">System Profile</div>
                                    <div className="text-xl font-bebas text-white tracking-wide">PRIMARY_NODE</div>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#D10000] rounded-full"></div>
                                </div>
                            </div>

                            {/* Tech Specs List */}
                            <div className="space-y-6 font-mono text-xs">
                                <div className="flex justify-between items-center group/item hover:bg-white/5 p-2 rounded transition-colors -mx-2 cursor-default">
                                    <span className="text-gray-500">Architecture</span>
                                    <span className="text-gray-200">Microservices / Serverless</span>
                                </div>
                                <div className="flex justify-between items-center group/item hover:bg-white/5 p-2 rounded transition-colors -mx-2 cursor-default">
                                    <span className="text-gray-500">Frontend_Core</span>
                                    <span className="text-gray-200">React 19 / Next.js 15</span>
                                </div>
                                <div className="flex justify-between items-center group/item hover:bg-white/5 p-2 rounded transition-colors -mx-2 cursor-default">
                                    <span className="text-gray-500">Rendering</span>
                                    <span className="text-gray-200">WebGL / Three.js / R3F</span>
                                </div>
                                <div className="flex justify-between items-center group/item hover:bg-white/5 p-2 rounded transition-colors -mx-2 cursor-default">
                                    <span className="text-gray-500">Database</span>
                                    <span className="text-gray-200">PostgreSQL / Redis</span>
                                </div>
                                <div className="flex justify-between items-center group/item hover:bg-white/5 p-2 rounded transition-colors -mx-2 cursor-default">
                                    <span className="text-gray-500">Deployment</span>
                                    <span className="text-gray-200">AWS / Vercel Edge</span>
                                </div>
                            </div>

                            {/* Bottom Status */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-3">
                                    <div className="w-3/4 h-full bg-[#D10000]"></div>
                                </div>
                                <div className="flex justify-between text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                                    <span>Capacity: 75%</span>
                                    <span>Optimized</span>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>

                {/* Global Vertical Lines (Linkage) - Consistent with SectionWrapper */}
                <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-px bg-white/5 z-0"></div>
                <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-px bg-white/5 z-0 hidden lg:block"></div>
            </div>
        </section>
    );
}
