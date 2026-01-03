"use client";
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../data/projects';

// --- VISUAL ASSETS ---
// A subtle noise texture for the "analog/tactile" feel
const NOISE_SVG = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E";

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // --- PHYSICS ---
    // Tighter spring for "heavy professional equipment" feel
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 400, damping: 30 }); // Very stiff
    const mouseY = useSpring(y, { stiffness: 400, damping: 30 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [2, -2]); // Micro-tilt only
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2, 2]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            className="perspective-1000 w-full"
        >
            <motion.div
                ref={cardRef}
                onClick={onClick}
                onMouseMove={onMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    x.set(0);
                    y.set(0);
                }}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="group relative w-full flex flex-col cursor-pointer bg-[#050505] border border-zinc-800 hover:border-zinc-500 transition-colors duration-300 rounded overflow-hidden shadow-sm hover:shadow-2xl"
            >
                {/* --- 1. IMAGE SECTION (Fixed Aspect Ratio) --- */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-900 border-b border-zinc-800/50">
                    <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30" style={{ backgroundImage: `url("${NOISE_SVG}")` }} />

                    {/* Status Dot (Top Right) */}
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-2 px-2 py-1 bg-black/50 backdrop-blur rounded border border-white/5">
                        <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'ONLINE' ? 'bg-emerald-500 shadow-[0_0_8px_#10B981]' : 'bg-amber-500'}`} />
                        <span className="text-[9px] font-mono text-white/80 tracking-wider">
                            {project.status === 'ONLINE' ? 'LIVE' : 'OFF'}
                        </span>
                    </div>

                    {/* Image proper */}
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                    />
                </div>

                {/* --- 2. DATA SECTION (Flex Column) --- */}
                <div className="flex flex-col p-5 md:p-6 bg-[#050505] relative z-20">

                    {/* Header Group */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] font-mono text-[#D10000] tracking-widest uppercase">
                                {project.id} // {project.category.replace(/_/g, ' ')}
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bebas text-zinc-300 group-hover:text-white transition-colors tracking-wide leading-none">
                            {project.title}
                        </h3>
                    </div>

                    {/* Metrics Grid (Auto-layout) */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-900">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-wider mb-1">Latency</span>
                            <span className="text-xs font-mono text-zinc-300 font-medium">{project.performance.latency}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-wider mb-1">Accuracy</span>
                            <span className="text-xs font-mono text-zinc-300 font-medium">{project.performance.accuracy}</span>
                        </div>
                    </div>

                    {/* Action Hint */}
                    <div className="mt-4 flex items-center gap-2 text-[9px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        <span>INIT_CONNECTION</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                </div>

                {/* --- DECORATIVE RETICLES (Corner Canvas) --- */}
                <div className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-zinc-500" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-zinc-500" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-zinc-500" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-zinc-500" />
                </div>

            </motion.div>
        </motion.div>
    );
}
