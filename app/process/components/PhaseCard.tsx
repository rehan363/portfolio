"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhaseCardProps {
    id: string;
    phase: string;
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    tools: string[];
    output: string;
    isActive: boolean;
    onClick: () => void;
}

export default function PhaseCard({
    id,
    phase,
    title,
    subtitle,
    description,
    details,
    tools,
    output,
    isActive,
    onClick
}: PhaseCardProps) {
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`relative cursor-pointer group ${isActive ? 'col-span-2 row-span-2' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Corner Markers */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#D10000] opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#D10000] opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#D10000] opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#D10000] opacity-50 group-hover:opacity-100 transition-opacity" />

            <motion.div
                layout
                className={`relative overflow-hidden bg-[#0A0A0A] border transition-all duration-500 ${isActive
                        ? 'border-[#D10000] p-8'
                        : 'border-white/10 p-6 hover:border-white/30'
                    }`}
            >
                {/* Phase Number Background */}
                <div className="absolute -right-4 -top-4 text-[120px] font-bebas text-white/[0.03] select-none pointer-events-none">
                    {id}
                </div>

                {/* Header */}
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-mono text-[#D10000] tracking-widest border border-[#D10000]/30 px-2 py-1">
                            {phase}
                        </span>
                        <span className="text-[10px] font-mono text-gray-600">
                            PHASE_{id}
                        </span>
                    </div>

                    <h3 className="text-3xl font-bebas text-white mb-2 group-hover:text-[#D10000] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-4">
                        {subtitle}
                    </p>
                </div>

                {/* Collapsed State */}
                {!isActive && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gray-400 text-sm leading-relaxed line-clamp-3"
                    >
                        {description}
                    </motion.p>
                )}

                {/* Expanded State */}
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="relative z-10"
                        >
                            <p className="text-gray-300 leading-relaxed mb-8 border-l-2 border-[#D10000] pl-4">
                                {description}
                            </p>

                            {/* Detail List */}
                            <div className="mb-8">
                                <h4 className="text-[10px] font-mono text-gray-600 mb-4 tracking-widest">
                                    KEY_ACTIVITIES
                                </h4>
                                <ul className="space-y-3">
                                    {details.map((detail, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-3 text-sm text-gray-400"
                                        >
                                            <span className="w-1.5 h-1.5 bg-[#D10000] rounded-full mt-2 flex-shrink-0" />
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tools Grid */}
                            <div className="mb-8">
                                <h4 className="text-[10px] font-mono text-gray-600 mb-4 tracking-widest">
                                    TOOLS_&_FRAMEWORKS
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tool, i) => (
                                        <motion.span
                                            key={tool}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.05 }}
                                            className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5"
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Output */}
                            <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                <div>
                                    <span className="text-[10px] font-mono text-gray-600 block mb-1">OUTPUT</span>
                                    <span className="text-sm font-mono text-[#D10000]">{output}</span>
                                </div>
                                <div className="w-8 h-8 border border-[#D10000] flex items-center justify-center group-hover:bg-[#D10000] transition-colors">
                                    <span className="text-[#D10000] group-hover:text-white text-lg">→</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Collapse Indicator */}
                {!isActive && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[10px] font-mono text-gray-600">
                        <span>EXPAND</span>
                        <span className="text-[#D10000]">+</span>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
