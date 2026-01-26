"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import SystemBackground from '../components/3d/SystemBackground';
import ProjectCard from './components/ProjectCard';
import ProjectTerminal from './components/ProjectTerminal';
import { projects, ProjectCategory, Project } from './data/projects';

const categories: { id: ProjectCategory | 'ALL', label: string }[] = [
    { id: 'ALL', label: 'ALL SYSTEMS' },
    { id: 'CONVERSATIONAL_AI', label: 'AI AGENTS' },
    { id: 'SERVICE_MARKETPLACE', label: 'MARKETPLACE' },
    { id: 'REAL_ESTATE', label: 'REAL ESTATE' },
    { id: 'PROPRIETARY', label: 'CLASSIFIED' },
];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'ALL'>('ALL');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = activeFilter === 'ALL'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <main className="relative min-h-screen bg-[var(--bg-void)] text-[var(--fg-cinema)] selection:bg-[var(--acc-red)] selection:text-white">

            {/* 1. LAYER: BACKGROUND */}
            <SystemBackground />

            {/* 2. LAYER: UI CONTENT */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                {/* Main Content Area */}
                <div className="flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-32">

                    {/* Header Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6 opacity-60">
                            <span className="w-2 h-2 bg-[var(--acc-red)] rounded-full animate-pulse" />
                            <span className="text-xs font-mono tracking-[0.2em] text-[var(--fg-muted)]">CLASSIFIED PORTFOLIO</span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-bebas text-[var(--fg-cinema)] leading-[0.85] tracking-tight mb-8">
                            ENGINEERING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-600">
                                INTELLIGENCE
                            </span>
                        </h1>

                        <p className="max-w-2xl text-[var(--fg-muted)] text-lg font-light leading-relaxed border-l border-[var(--color-border)] pl-6">
                            A curated archive of high-performance autonomous agents, financial algorithms, and neural interfaces.
                            Deployed for enterprise scale.
                        </p>
                    </motion.div>

                    {/* Filter Bar */}
                    <div className="sticky top-20 z-40 bg-[var(--bg-void)]/80 backdrop-blur-md mb-12 border-b border-[var(--color-border)] pb-0 overflow-x-auto scrollbar-none">
                        <div className="flex gap-8 min-w-max">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveFilter(cat.id)}
                                    className={`relative pb-4 text-xs font-mono tracking-widest transition-colors duration-300
                                        ${activeFilter === cat.id ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}
                                    `}
                                >
                                    {cat.label}
                                    {activeFilter === cat.id && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--acc-red)]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid Layout - Standardized */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project, i) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={i}
                                    onClick={() => setSelectedProject(project)}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="py-24 border border-dashed border-zinc-800 rounded bg-zinc-900/20 flex flex-col items-center justify-center text-zinc-500">
                            <div className="mb-4 text-4xl">∅</div>
                            <div className="text-sm font-mono tracking-widest">NO SYSTEMS ACTIVE IN SECTOR</div>
                        </div>
                    )}
                </div>
            </div>

            {/* 3. LAYER: MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectTerminal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}
