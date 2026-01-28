"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectDetailProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
    // Lock Body Scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    // Escape Key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex justify-end font-sans"
        >
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* SLIDE-OVER PANEL */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="relative w-full max-w-2xl h-full bg-[#0A0A0A] border-l border-white/10 shadow-2xl flex flex-col z-20 overflow-hidden"
            >
                {/* GLOBAL NOISE TEXTURE */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
                />

                {/* HEADER ACTIONS */}
                <div className="absolute top-0 right-0 left-0 p-6 flex justify-between items-start z-30 bg-gradient-to-b from-black/80 to-transparent">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-[10px] font-mono tracking-widest text-white/80 uppercase border border-white/5">
                        {project.category.replace('_', ' ')}
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
                    >
                        <FaTimes className="text-sm" />
                    </button>
                </div>

                {/* SCROLLABLE CONTENT */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {/* HERO IMAGE */}
                    <div className="relative w-full aspect-video bg-[#111]">
                        {project.image ? (
                            <Image
                                src={project.image}
                                fill
                                className="object-cover"
                                alt={project.title}
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-xs tracking-widest">
                                NO_VISUAL
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />

                        {/* TITLE OVERLAY */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                            <h2 className="text-5xl md:text-6xl font-bebas text-white leading-[0.9] mb-2">
                                {project.title}
                            </h2>
                            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                                <span className={project.status === 'ONLINE' ? 'text-emerald-500' : 'text-amber-500'}>
                                    ● {project.status}
                                </span>
                                <span>|</span>
                                <span>{project.classification}</span>
                            </div>
                        </div>
                    </div>

                    {/* DETAILS BODY */}
                    <div className="p-8 space-y-12">

                        {/* 1. SYNOPSIS */}
                        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest pt-1">Challenge</div>
                            <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                                {project.problem.desc}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest pt-1">Solution</div>
                            <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                                {project.solution.desc}
                            </p>
                        </div>

                        {/* 2. TECH STACK */}
                        <div className="border-t border-white/10 pt-8">
                            <h3 className="text-lg font-bebas text-white mb-6 tracking-wide">Technical Architecture</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 bg-zinc-900 border border-zinc-700/50 rounded-sm text-xs text-zinc-300 font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 3. METRICS */}
                        <div className="border-t border-white/10 pt-8">
                            <h3 className="text-lg font-bebas text-white mb-6 tracking-wide">Performance Metrics</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {Object.entries(project.performance).map(([key, value]) => (
                                    <div key={key} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-sm">
                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{key}</div>
                                        <div className="text-xl font-bebas text-white">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. ACTIONS */}
                        {project.link && (
                            <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none flex justify-end">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pointer-events-auto flex items-center gap-3 px-8 py-4 bg-[#D10000] hover:bg-[#b00000] text-white font-bebas text-xl tracking-widest transition-all rounded-sm shadow-xl hover:shadow-[0_0_20px_rgba(209,0,0,0.4)]"
                                >
                                    <span>LAUNCH PROJECT</span>
                                    <FaExternalLinkAlt className="text-sm" />
                                </a>
                            </div>
                        )}

                        {/* Spacing for fixed button */}
                        <div className="h-24" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
