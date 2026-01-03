"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingMetadataProps {
    currentPhase: number | null;
    totalPhases: number;
}

export default function FloatingMetadata({ currentPhase, totalPhases }: FloatingMetadataProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed left-8 bottom-8 z-50 hidden lg:block"
        >
            <div className="bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 p-4 min-w-[160px]">
                {/* Status Indicator */}
                <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${currentPhase ? 'bg-[#D10000] animate-pulse' : 'bg-gray-600'}`} />
                    <span className="text-[10px] font-mono text-gray-500 tracking-widest">
                        {currentPhase ? 'ACTIVE' : 'IDLE'}
                    </span>
                </div>

                {/* Phase Counter */}
                <div className="mb-4">
                    <div className="text-[10px] font-mono text-gray-600 mb-1">PHASE</div>
                    <div className="text-2xl font-bebas text-white">
                        {currentPhase ? `0${currentPhase}` : '—'}
                        <span className="text-gray-600 text-lg ml-1">/ 0{totalPhases}</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="text-[10px] font-mono text-gray-600">PROGRESS</div>
                    <div className="flex gap-1">
                        {[...Array(totalPhases)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`h-1 flex-1 ${currentPhase && i < currentPhase
                                        ? 'bg-[#D10000]'
                                        : currentPhase && i === currentPhase - 1
                                            ? 'bg-[#D10000]'
                                            : 'bg-white/10'
                                    }`}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                                style={{ transformOrigin: 'left' }}
                            />
                        ))}
                    </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-white/5 my-4" />

                {/* Algorithm Version */}
                <div className="flex items-center justify-between text-[9px] font-mono">
                    <span className="text-gray-600">ALGORITHM</span>
                    <span className="text-gray-500">v3.0</span>
                </div>
            </div>
        </motion.div>
    );
}
