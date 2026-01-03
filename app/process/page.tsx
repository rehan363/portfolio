"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhaseNeuron from './components/PhaseNeuron';
import SynapticPath from './components/SynapticPath';
import ContentPanel from './components/ContentPanel';
import PulseBackground from './components/PulseBackground';
import FloatingMetadata from './components/FloatingMetadata';
import Navbar from '../components/Navbar';
import { phases } from './data/phases';

// Node positions for the neural network (calculated for SVG viewBox)
const nodePositions = [
    { x: 150, y: 120 },
    { x: 350, y: 120 },
    { x: 550, y: 120 },
    { x: 750, y: 120 }
];

export default function ProcessPage() {
    const [activePhase, setActivePhase] = useState<number | null>(null);

    const handlePhaseClick = (id: number) => {
        setActivePhase(activePhase === id ? null : id);
    };

    const activePhaseData = activePhase
        ? phases.find(p => p.id === activePhase) || null
        : null;

    return (
        <main className="relative min-h-screen bg-[var(--bg-void)] text-[var(--fg-cinema)] overflow-x-hidden selection:bg-[var(--acc-red)] selection:text-white">
            <PulseBackground />
            <Navbar />

            {/* Full width padding wrapper - matches Navbar */}
            <div className="relative z-10 pt-32 pb-32 w-full px-6 md:px-12 lg:px-24">
                {/* Centered content container */}
                <div className="max-w-7xl mx-auto">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-7xl mx-auto mb-20"
                    >
                        {/* Status Bar */}
                        <div className="flex items-center gap-4 mb-8">
                            <motion.div
                                className="w-2 h-2 bg-[var(--acc-red)] rounded-full"
                                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-[10px] font-mono text-[var(--fg-muted)] tracking-[0.3em]">
                                METHODOLOGY_V3.0 // NEURAL_ALGORITHM
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bebas text-[var(--fg-cinema)] leading-[0.85] mb-8">
                            THE
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--acc-red)] via-red-600 to-[var(--acc-red)]">
                                ALGORITHM
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-[var(--fg-muted)] max-w-xl leading-relaxed font-light">
                            A systematic approach to transforming complexity into elegant solutions.
                            Four phases. Infinite iterations. Zero compromises.
                        </p>
                    </motion.div>

                    {/* Neural Network Visualization */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="max-w-5xl mx-auto mb-24"
                    >
                        <svg
                            viewBox="0 0 900 240"
                            className="w-full h-auto"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            {/* Glow Filter */}
                            <defs>
                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Input Label */}
                            <text x="50" y="125" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                INPUT
                            </text>
                            <text x="50" y="140" textAnchor="middle" fill="var(--acc-red)" fontSize="9" fontFamily="JetBrains Mono, monospace">
                                PROBLEM
                            </text>

                            {/* Synaptic Paths */}
                            {nodePositions.slice(0, -1).map((pos, i) => (
                                <SynapticPath
                                    key={i}
                                    start={{ x: pos.x + 40, y: pos.y }}
                                    end={{ x: nodePositions[i + 1].x - 40, y: nodePositions[i + 1].y }}
                                    isActive={activePhase !== null && activePhase > i}
                                    delay={i * 0.2}
                                />
                            ))}

                            {/* Phase Neurons */}
                            {phases.map((phase, i) => (
                                <PhaseNeuron
                                    key={phase.id}
                                    id={phase.id}
                                    code={phase.code}
                                    icon={phase.icon}
                                    isActive={activePhase === phase.id}
                                    isCompleted={activePhase !== null && phase.id < activePhase}
                                    onClick={() => handlePhaseClick(phase.id)}
                                    position={nodePositions[i]}
                                />
                            ))}

                            {/* Output Label */}
                            <text x="850" y="125" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                OUTPUT
                            </text>
                            <text x="850" y="140" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="JetBrains Mono, monospace">
                                SOLUTION
                            </text>
                        </svg>
                    </motion.div>

                    {/* Content Panel */}
                    <ContentPanel
                        phase={activePhaseData}
                        onClose={() => setActivePhase(null)}
                    />

                    {/* Instruction Text */}
                    {!activePhase && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="text-center mt-16"
                        >
                            <p className="text-sm font-mono text-[var(--fg-muted)] tracking-widest">
                                SELECT A PHASE TO EXPLORE
                            </p>
                        </motion.div>
                    )}

                    {/* Terminal Log */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="max-w-3xl mx-auto mt-32"
                    >
                        <div className="bg-[#0A0A0A]/60 backdrop-blur-sm border border-[var(--color-border)] p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                <span className="ml-3 text-[10px] font-mono text-gray-600">neural_algorithm.log</span>
                            </div>

                            <div className="font-mono text-xs space-y-1 text-[var(--fg-muted)]">
                                <p><span className="text-[var(--fg-cinema)]">&gt;</span> initializing neural_algorithm v3.0...</p>
                                <p><span className="text-[var(--fg-cinema)]">&gt;</span> loading cognitive_frameworks...</p>
                                <p><span className="text-[var(--acc-red)]">&gt;</span> <span className="text-[var(--acc-red)]">READY:</span> awaiting problem input</p>
                                <p className="text-[var(--fg-muted)] pt-2">
                                // This is how I think. Not linear, but iterative.<br />
                                // Each phase informs the next. Each iteration refines.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Metadata */}
            <FloatingMetadata
                currentPhase={activePhase}
                totalPhases={phases.length}
            />
        </main>
    );
}
