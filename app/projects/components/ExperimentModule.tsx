"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projects';

interface ExperimentModuleProps {
    project: Project;
    index: number;
}

// Micro-component for Glitch Text Effect
const GlitchText = ({ text, active }: { text: string, active: boolean }) => {
    return (
        <div className="relative inline-block">
            <span className="relative z-10">{text}</span>
            {active && (
                <>
                    <span className="absolute top-0 left-0 -ml-0.5 translate-x-[1px] text-red-500 opacity-70 animate-pulse">{text}</span>
                    <span className="absolute top-0 left-0 -ml-0.5 -translate-x-[1px] text-blue-500 opacity-70 animate-pulse delay-75">{text}</span>
                </>
            )}
        </div>
    );
};

export default function ExperimentModule({ project, index }: ExperimentModuleProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isBooting, setIsBooting] = useState(true);

    // Boot sequence effect
    useEffect(() => {
        const timer = setTimeout(() => setIsBooting(false), 800 + index * 200);
        return () => clearTimeout(timer);
    }, [index]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="perspective-1000 w-full"
            style={{ perspective: 1000 }}
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full aspect-[16/10] cursor-pointer group"
            >
                {/* Module Frame */}
                <div className={`
                    absolute inset-0 bg-[#050505]/90 backdrop-blur-md 
                    border flex flex-col overflow-hidden
                    transition-all duration-500
                    ${isHovered ? 'border-[#D10000] shadow-[0_0_40px_rgba(209,0,0,0.3)]' : 'border-[#D10000]/20'}
                `}>

                    {/* Header Bar */}
                    <div className="flex items-center justify-between p-4 border-b border-[#D10000]/20 bg-[#D10000]/5 z-20">
                        <div className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-sm ${isHovered ? 'bg-[#D10000] animate-pulse' : 'bg-gray-600'}`} />
                            <span className="text-[10px] font-mono text-[#D10000] tracking-widest">
                                {project.codename}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[9px] font-mono text-[#D10000]/50">[SECURE]</span>
                            <span className="text-[9px] font-mono text-gray-500">{project.classification}</span>
                        </div>
                    </div>

                    {/* Content Area - Transformation */}
                    <div className="relative flex-1 group-hover:bg-[#D10000]/5 transition-colors duration-500">

                        {/* Background Image (Low Opacity) */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={project.image}
                                alt=""
                                className={`w-full h-full object-cover transition-all duration-700
                                    ${isHovered ? 'opacity-40 scale-105 saturate-100' : 'opacity-20 scale-100 saturate-0'}
                                `}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                        </div>

                        {/* State A: PROBLEM (Default) */}
                        <div className={`
                            absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500 z-10
                            ${isHovered ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}
                        `}>
                            <div className="text-[#D10000] font-mono text-[10px] tracking-[0.2em] mb-3 uppercase">
                                <GlitchText text="Warning: Optimization Required" active={true} />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bebas text-gray-400 mb-4 tracking-wide">
                                {project.problem.desc}
                            </h3>
                            <div className="flex items-center gap-3 border-l-2 border-[#D10000]/30 pl-3">
                                <div className="text-[#D10000] text-3xl font-bebas opacity-80">
                                    {project.problem.metric}
                                </div>
                                <div className="text-[9px] font-mono text-[#D10000]/50 max-w-[100px] leading-tight">
                                    CURRENT<br />METRIC
                                </div>
                            </div>

                            {/* Scanning Line Effect */}
                            <div className="absolute inset-x-0 h-[2px] bg-[#D10000]/30 shadow-[0_0_10px_#D10000] animate-scan top-0" />
                        </div>

                        {/* State B: SOLUTION (Hover) */}
                        <div className={`
                            absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500 z-10
                            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                        `}>
                            <div className="text-green-400 font-mono text-[10px] tracking-[0.2em] mb-3 uppercase flex items-center gap-2">
                                <span className="w-1 h-1 bg-green-400 rounded-full animate-ping" />
                                Solution Deployment
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bebas text-white mb-4 tracking-wide drop-shadow-lg">
                                {project.solution.desc}
                            </h3>
                            <div className="flex items-center gap-3 border-l-2 border-green-400/50 pl-3">
                                <div className="text-white text-4xl font-bebas drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                                    {project.solution.metric}
                                </div>
                                <div className="text-[9px] font-mono text-green-400/50 max-w-[100px] leading-tight">
                                    TARGET<br />ACHIEVED
                                </div>
                            </div>

                            {/* Tech Stack Pills - Horizontal Scroll on hover */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                {project.tech_stack.map(tech => (
                                    <span key={tech} className="px-2 py-1 text-[9px] font-mono bg-[#D10000]/10 text-[#D10000] border border-[#D10000]/20 rounded-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Stats - Always Visible but interactive */}
                    <div className="p-4 border-t border-[#D10000]/20 bg-[#050505]/95 backdrop-blur-xl z-20 flex justify-between items-end">
                        <div>
                            <div className="text-[9px] font-mono text-gray-600 mb-1">PROJECT_ID</div>
                            <h4 className="text-xl font-bebas text-gray-400 group-hover:text-white transition-colors duration-300">
                                {project.title}
                            </h4>
                        </div>
                        <div className="flex gap-4">
                            {project.metrics.slice(0, 2).map((m, i) => (
                                <div key={m.label} className="text-right group-hover:translate-x-0 transition-transform duration-500" style={{ transitionDelay: `${i * 50}ms` }}>
                                    <div className="text-[9px] font-mono text-gray-600 uppercase">{m.label}</div>
                                    <div className="text-sm font-mono text-[#D10000] tabular-nums">{m.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Boot Overlay (Initial state) */}
                    <AnimatePresence>
                        {isBooting && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-[#050505] z-50 flex items-center justify-center border border-[#D10000]/20"
                            >
                                <div className="text-[#D10000] font-mono text-xs animate-pulse">
                                    INITIALIZING_MODULE...
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Holographic Projection (Reflection) */}
                <div
                    className="absolute -bottom-12 left-2 right-2 h-12 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-[#D10000]/20 to-transparent blur-md"
                    style={{ transform: 'rotateX(180deg) scaleX(0.95)' }}
                />

            </motion.div>
        </motion.div>
    );
}
