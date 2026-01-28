"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
    priority?: boolean;
}

export default function ProjectCard({ project, index, onClick, priority = false }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            onClick={onClick}
            className="group relative h-[420px] bg-[#0A0A0A] border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 cursor-pointer overflow-hidden flex flex-col will-change-transform"
        >
            {/* 1. VISUAL LAYER (Top Half) */}
            <div className="relative h-[220px] overflow-hidden bg-black/50 border-b border-zinc-900 group-hover:border-zinc-700 transition-colors">
                {/* ID Watermark (Subtle) */}
                <div className="absolute top-4 left-4 z-20 mix-blend-difference">
                    <span className="text-[10px] font-mono text-white/50 tracking-widest">{project.id}</span>
                </div>

                {project.image ? (
                    <Image
                        src={project.image}
                        fill
                        priority={priority}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 will-change-transform"
                        alt={project.title}
                    />
                ) : (
                    // Fallback 'Wireframe' visualization
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    </div>
                )}

                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* 2. DATA LAYER (Bottom Half) */}
            <div className="flex-1 p-6 flex flex-col justify-between relative bg-[#0A0A0A]">

                <div>
                    <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                            {project.category.replace(/_/g, ' ')}
                        </span>
                        <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'ONLINE' ? 'bg-emerald-500' : 'bg-zinc-600'}`} />
                    </div>

                    <h3 className="text-3xl font-bebas text-zinc-100 tracking-wide mb-2 group-hover:text-white transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed font-sans border-l border-zinc-800 pl-3">
                        {project.solution.short}
                    </p>
                </div>

                {/* Stats Footer */}
                <div className="flex items-center justify-between mt-6 border-t border-zinc-900 pt-4">
                    <div className="flex gap-4">
                        {project.tech_stack.slice(0, 2).map(tech => (
                            <span key={tech} className="text-[9px] font-mono text-zinc-600">{tech}</span>
                        ))}
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 group-hover:text-white transition-colors">VIEW CASE &rarr;</span>
                </div>
            </div>
        </motion.div>
    );
}
