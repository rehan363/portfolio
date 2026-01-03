"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import SystemBackground from '../components/3d/SystemBackground';
import { arsenal, TechCategory } from './data/arsenal';

// --- SUB-COMPONENTS ---
const WeaponCard = ({ weapon, index }: { weapon: typeof arsenal[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative bg-[#0A0A0A] border border-zinc-800 hover:border-[#D10000]/50 overflow-hidden rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(209,0,0,0.1)]"
        >
            {/* Header / ID */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-[#0C0C0C]">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{weapon.id}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${weapon.status === 'MASTERED' ? 'bg-[#D10000]' : 'bg-amber-500'}`} />
            </div>

            {/* Core Body */}
            <div className="p-6 relative">
                {/* Icon Backdrop */}
                <div className="absolute right-0 bottom-0 text-zinc-800/10 text-8xl leading-none pointer-events-none select-none font-bebas translate-y-2 translate-x-2 group-hover:text-[#D10000]/5 transition-colors duration-500">
                    {weapon.icon}
                </div>

                <div className="relative z-10">
                    <div className="text-3xl mb-1 filter grayscale group-hover:grayscale-0 transition-all">{weapon.icon}</div>
                    <h3 className="text-xl font-bebas text-white mb-2 tracking-wide group-hover:text-[#D10000] transition-colors">{weapon.name}</h3>
                    <p className="text-xs font-mono text-zinc-500 mb-6 leading-relaxed line-clamp-3">
                        {weapon.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {weapon.specs.map(spec => (
                            <span key={spec} className="px-2 py-1 text-[9px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-sm">
                                {spec}
                            </span>
                        ))}
                    </div>

                    {/* Mastery Bar */}
                    <div className="space-y-1">
                        <div className="flex justify-between text-[8px] font-mono uppercase text-zinc-600">
                            <span>Proficiency</span>
                            <span>{weapon.mastery}%</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${weapon.mastery}%` }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className={`h-full ${weapon.status === 'MASTERED' ? 'bg-[#D10000]' : 'bg-amber-500'}`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Deco */}
            <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 border-t border-r border-[#D10000]" />
            </div>
        </motion.div>
    );
};

export default function AboutPage() {
    const [activeCategory, setActiveCategory] = useState<TechCategory | 'ALL'>('ALL');

    const filteredArsenal = activeCategory === 'ALL'
        ? arsenal
        : arsenal.filter(w => w.category === activeCategory);

    return (
        <main className="relative min-h-screen bg-[#030303] text-white selection:bg-[#D10000] selection:text-white pb-32">
            <SystemBackground />
            <Navbar />

            <div className="relative z-10 pt-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">

                {/* HEADLINE: THE PROFILE */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">

                    {/* Left: Bio / Dossier */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center gap-4 mb-4 opacity-70">
                            <div className="h-px w-12 bg-[#D10000]" />
                            <span className="text-xs font-mono tracking-[0.3em] text-[#D10000]">ARCHITECT PROFILE</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bebas text-white leading-[0.85] tracking-tight">
                            BUILDING THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">IMPOSSIBLE</span>
                        </h1>

                        <div className="prose prose-invert max-w-2xl">
                            <p className="font-light text-zinc-400 leading-relaxed text-lg">
                                I am a Full-Stack Systems Architect obsessed with **precision**, **scalability**, and **aesthetic perfection**.
                                I don't just write code; I engineer digital ecosystems that feel alive.
                            </p>
                            <p className="font-light text-zinc-400 leading-relaxed text-lg mt-4">
                                My philosophy is simple: **Complexity should be invisible.** Whether it's a high-frequency trading bot
                                or a fluid 3D interface, the user should feel power, not friction.
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <div className="px-4 py-2 border border-zinc-800 bg-zinc-900/30 text-xs font-mono text-zinc-400 rounded-sm">
                                EST. 2019
                            </div>
                            <div className="px-4 py-2 border border-zinc-800 bg-zinc-900/30 text-xs font-mono text-zinc-400 rounded-sm">
                                BASE: CLASSIFIED
                            </div>
                        </div>
                    </div>

                    {/* Right: ID Card / Stats */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md bg-[#080808] border border-zinc-800 p-6 flex flex-col gap-6 rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">

                            <div className="aspect-[4/5] bg-zinc-900 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-cell group">
                                {/* Placeholder for Profile IMG - Using a generated-style placeholder if no real img */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center">
                                    <span className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">👤</span>
                                </div>
                                <div className="absolute inset-0 bg-[url('/scanline.png')] opacity-[0.1]" />
                                <div className="absolute bottom-4 left-4 text-xs font-mono bg-black/50 backdrop-blur px-2 py-1 text-white border border-white/10">
                                    IMG_REF_8812
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                                    <span className="text-xs font-mono text-zinc-500 uppercase">Clearance</span>
                                    <span className="text-sm font-mono text-[#D10000]">LEVEL 5 (ADMIN)</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                                    <span className="text-xs font-mono text-zinc-500 uppercase">Specialization</span>
                                    <span className="text-sm font-mono text-white">FULL_STACK_HEAVY</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                                    <span className="text-xs font-mono text-zinc-500 uppercase">Status</span>
                                    <span className="text-sm font-mono text-emerald-500 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        OPERATIONAL
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                {/* SECTION: THE ARSENAL */}
                <section>
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-zinc-800 pb-6 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-2">TECHNICAL ARSENAL</h2>
                            <p className="font-mono text-zinc-500 text-sm">Deployable technologies and frameworks.</p>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {['ALL', 'FRONTEND_OPS', 'BACKEND_SYS', 'AI_LABS', 'INFRA_GRID'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat as any)}
                                    className={`
                                        px-4 py-2 text-[10px] font-mono border transition-all duration-300
                                        ${activeCategory === cat
                                            ? 'bg-[#D10000] border-[#D10000] text-white'
                                            : 'bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'}
                                    `}
                                >
                                    {cat.replace('_', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence>
                            {filteredArsenal.map((weapon, i) => (
                                <WeaponCard key={weapon.id} weapon={weapon} index={i} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </section>

            </div>
        </main>
    );
}
