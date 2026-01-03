"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentPanelProps {
    phase: {
        id: number;
        code: string;
        title: string;
        subtitle: string;
        description: string;
        details: string[];
        tools: string[];
        output: string;
        duration: string;
    } | null;
    onClose: () => void;
}

export default function ContentPanel({ phase, onClose }: ContentPanelProps) {
    if (!phase) return null;

    return (
        <AnimatePresence>
            <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-4xl mx-auto"
            >
                {/* Glassmorphic Container */}
                <div className="relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 overflow-hidden">

                    {/* Top Bar */}
                    <div className="flex items-center justify-between px-8 py-4 border-b border-white/5">
                        <div className="flex items-center gap-4">
                            <span className="text-[#D10000] font-mono text-xs tracking-[0.3em]">
                                PHASE_0{phase.id}
                            </span>
                            <span className="h-4 w-px bg-white/10" />
                            <span className="text-gray-500 font-mono text-xs tracking-widest">
                                {phase.code}
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
                        >
                            ×
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="p-8 md:p-12">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-12"
                        >
                            <h2 className="text-5xl md:text-7xl font-bebas text-white mb-2 leading-none">
                                {phase.title}
                            </h2>
                            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                                {phase.subtitle}
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-gray-300 text-lg leading-relaxed mb-12 border-l-2 border-[#D10000] pl-6"
                        >
                            {phase.description}
                        </motion.p>

                        {/* Two Column Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                            {/* Key Activities */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <h3 className="text-[10px] font-mono text-gray-600 tracking-[0.3em] mb-6 flex items-center gap-3">
                                    <span className="w-6 h-px bg-[#D10000]" />
                                    KEY ACTIVITIES
                                </h3>
                                <ul className="space-y-4">
                                    {phase.details.map((detail, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                                            className="flex items-start gap-3 text-sm text-gray-400"
                                        >
                                            <span className="w-1.5 h-1.5 bg-[#D10000] rounded-full mt-2 flex-shrink-0" />
                                            <span>{detail}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Tools & Output */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="space-y-8"
                            >
                                {/* Tools */}
                                <div>
                                    <h3 className="text-[10px] font-mono text-gray-600 tracking-[0.3em] mb-4 flex items-center gap-3">
                                        <span className="w-6 h-px bg-white/20" />
                                        TOOLCHAIN
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {phase.tools.map((tool, i) => (
                                            <motion.span
                                                key={tool}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                                                className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 hover:border-[#D10000]/50 transition-colors"
                                            >
                                                {tool}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Output */}
                                <div className="p-6 bg-white/[0.02] border border-white/5">
                                    <h3 className="text-[10px] font-mono text-gray-600 tracking-[0.3em] mb-3">
                                        DELIVERABLE
                                    </h3>
                                    <p className="text-[#D10000] font-mono text-sm">
                                        {phase.output}
                                    </p>
                                </div>

                                {/* Duration */}
                                <div className="flex items-center justify-between text-xs font-mono">
                                    <span className="text-gray-600">EST. DURATION</span>
                                    <span className="text-gray-400">{phase.duration}</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Progress Bar */}
                    <motion.div
                        className="h-1 bg-[#D10000]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{ transformOrigin: 'left' }}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
