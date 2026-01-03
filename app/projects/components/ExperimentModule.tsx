"use client";
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../data/projects';

interface ExperimentModuleProps {
    project: Project;
    index: number;
    onClick: () => void;
}

export default function ExperimentModule({ project, index, onClick }: ExperimentModuleProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Tighter spring physics for "Heavy" feel
    const springConfig = { stiffness: 200, damping: 25 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);

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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="perspective-1200 w-full"
        >
            <motion.div
                ref={cardRef}
                onClick={onClick}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full aspect-[4/3] cursor-pointer group"
            >
                {/* --- TERMINAL FRAME --- */}
                <div className={`
                    absolute inset-0 bg-[#080808] 
                    border flex flex-col overflow-hidden
                    transition-all duration-300 ease-out z-10
                    ${isHovered
                        ? 'border-[#3B82F6]/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-[#0C0C0C]'
                        : 'border-white/10 shadow-lg shadow-black/50'
                    }
                `}>

                    {/* STATUS HEADER */}
                    <div className="h-8 border-b border-white/5 bg-[#0C0C0C] flex items-center justify-between px-3">
                        <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'ONLINE' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
                            <span className="text-[9px] font-mono text-gray-400 tracking-wider group-hover:text-white transition-colors">
                                {project.status} // {project.codename}
                            </span>
                        </div>
                        <div className="text-[9px] font-mono text-[#3B82F6] opacity-60 group-hover:opacity-100">ID: {project.id.toUpperCase()}</div>
                    </div>

                    {/* MAIN VISUAL (Holographic Viewport) */}
                    <div className="relative h-48 w-full bg-black/40 overflow-hidden group-hover:bg-[#3B82F6]/5 transition-colors duration-500">
                        <img
                            src={project.image}
                            alt=""
                            className={`w-full h-full object-cover transition-all duration-500 
                                ${isHovered ? 'opacity-90 scale-105 saturate-100' : 'opacity-40 grayscale scale-100'}
                            `}
                        />
                        {/* Scanline */}
                        <div className="absolute inset-0 bg-[url('/scanline.png')] opacity-[0.05] pointer-events-none" style={{ backgroundSize: '100% 3px' }} />
                        {isHovered && <div className="absolute top-0 w-full h-[1px] bg-[#3B82F6]/50 shadow-[0_0_10px_#3B82F6] animate-scan" />}

                        {/* Overlay Text (Hover Only) */}
                        <div className={`absolute bottom-2 right-2 text-[8px] font-mono text-[#3B82F6] bg-black/80 px-1 border border-[#3B82F6]/30 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                            VIEW_SOURCE_FEED
                        </div>
                    </div>

                    {/* TELEMETRY CONSOLE */}
                    <div className="flex-1 p-4 flex flex-col justify-between bg-[#0A0A0A] border-t border-white/5 relative group-hover:bg-[#0E0E0E] transition-colors">
                        {/* Title */}
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bebas text-gray-200 tracking-wide mb-1 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                {/* Arrow Icon */}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`text-[#3B82F6] transition-transform duration-300 ${isHovered ? '-rotate-45 opacity-100' : 'rotate-0 opacity-0'}`}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                            <div className="text-[10px] font-mono text-gray-500">{project.classification}</div>
                        </div>

                        {/* Performance MEtrics Grid */}
                        <div className="grid grid-cols-3 gap-2 mt-4 border-t border-white/5 pt-3">
                            <div>
                                <div className="text-[8px] font-mono text-gray-600 uppercase">LATENCY</div>
                                <div className="text-xs font-mono text-[#3B82F6]">{project.performance.latency}</div>
                            </div>
                            <div>
                                <div className="text-[8px] font-mono text-gray-600 uppercase">ACCURACY</div>
                                <div className="text-xs font-mono text-[#3B82F6]">{project.performance.accuracy}</div>
                            </div>
                            <div>
                                <div className="text-[8px] font-mono text-gray-600 uppercase">UPTIME</div>
                                <div className="text-xs font-mono text-[#3B82F6]">{project.performance.uptime}</div>
                            </div>
                        </div>
                    </div>

                    {/* ACTION FOOTER */}
                    <div className={`
                         h-8 bg-[#3B82F6] border-t border-[#3B82F6] flex items-center justify-center
                         transition-transform duration-300 absolute bottom-0 left-0 right-0 z-20
                         ${isHovered ? 'translate-y-0' : 'translate-y-full'}
                    `}>
                        <span className="text-[10px] font-mono text-white tracking-widest font-bold">INITIALIZE CONNECTION_</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
