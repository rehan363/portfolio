"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import SystemBackground from '../components/3d/SystemBackground';
import { jobs } from './data/jobs';

export default function ExperiencePage() {
    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    return (
        <main className="relative min-h-screen bg-[#030303] text-white selection:bg-[#D10000] selection:text-white pb-32">
            <SystemBackground />
            <Navbar />

            <div className="relative z-10 pt-32 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">

                {/* HEADLINE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-4 opacity-70">
                        <div className="h-px w-12 bg-[#D10000]" />
                        <span className="text-xs font-mono tracking-[0.3em] text-[#D10000]">CAREER TRAJECTORY</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bebas text-white leading-[0.85] tracking-tight">
                        OPERATIONAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">HISTORY</span>
                    </h1>
                </motion.div>

                {/* TIMELINE */}
                <div className="relative border-l border-zinc-800 ml-3 md:ml-12 pl-8 md:pl-16 py-8 space-y-24">
                    {/* Continuous Line Decoration */}
                    <div className="absolute left-[11px] md:left-[47px] top-0 bottom-0 w-px bg-gradient-to-b from-[#D10000] via-zinc-800 to-zinc-800 opacity-50" />

                    {jobs.map((job, i) => {
                        const isExpanded = expandedJob === job.id;

                        return (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative"
                            >
                                {/* Node Point */}
                                <div
                                    className={`absolute -left-[41px] md:-left-[73px] top-8 w-5 h-5 bg-[#030303] border transition-colors duration-500 rounded-full flex items-center justify-center z-10
                                    ${isExpanded ? 'border-[#D10000] shadow-[0_0_15px_rgba(209,0,0,0.5)]' : 'border-zinc-600'}`}
                                >
                                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isExpanded ? 'bg-[#D10000] scale-125' : (i === 0 ? 'bg-zinc-400' : 'bg-zinc-700')}`} />
                                </div>

                                {/* Job Card */}
                                <motion.div
                                    layout
                                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                                    className={`
                                        group relative bg-[#0A0A0A] border transition-all duration-300 rounded overflow-hidden cursor-pointer
                                        ${isExpanded ? 'border-[#D10000]/50 bg-zinc-900/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'border-zinc-800/50 hover:border-zinc-600 hover:bg-zinc-900/5'}
                                    `}
                                >
                                    {/* Decor Corners */}
                                    <div className="absolute top-0 right-0 p-2 opacity-50"><div className="w-2 h-2 border-t border-r border-zinc-500" /></div>
                                    <div className="absolute bottom-0 left-0 p-2 opacity-50"><div className="w-2 h-2 border-b border-l border-zinc-500" /></div>

                                    <div className="p-6 md:p-8">
                                        {/* Brief Header */}
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-2xl font-bebas text-white tracking-wide group-hover:text-[#D10000] transition-colors duration-300">{job.role}</h3>
                                                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 border border-zinc-800 rounded bg-[#050505]">
                                                        {job.classification}
                                                    </span>
                                                </div>
                                                <div className="text-sm font-mono text-[#D10000] tracking-widest uppercase">
                                                    {job.company}
                                                </div>
                                            </div>
                                            <div className="mt-2 md:mt-0 text-[10px] font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded border border-zinc-800">
                                                {job.period}
                                            </div>
                                        </div>

                                        <p className="text-zinc-400 font-light leading-relaxed max-w-3xl mb-8">
                                            {job.description}
                                        </p>

                                        {/* Metrics & Tech (Always Visible) */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-800/50 pt-6">
                                            <div className="flex gap-8">
                                                {job.metrics.map(m => (
                                                    <div key={m.label}>
                                                        <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1">{m.label}</div>
                                                        <div className="text-lg font-mono text-white group-hover:text-[#D10000] transition-colors">{m.value}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-2 justify-start md:justify-end content-center">
                                                {job.skills.slice(0, 4).map(skill => (
                                                    <span key={skill} className="text-[10px] font-mono text-zinc-500 px-2 py-1 bg-zinc-900 rounded border border-zinc-800/50">
                                                        {skill}
                                                    </span>
                                                ))}
                                                {job.skills.length > 4 && (
                                                    <span className="text-[10px] font-mono text-zinc-600 px-2 py-1">+{job.skills.length - 4}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* EXPANDED CONTENT: DEEP DIVE */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="bg-[#050505] border-t border-zinc-800 overflow-hidden"
                                            >
                                                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

                                                    {/* Achievements List */}
                                                    <div>
                                                        <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">Key Achievements</h4>
                                                        <ul className="space-y-3">
                                                            {job.achievements.map((item, idx) => (
                                                                <li key={idx} className="flex gap-3 text-sm text-zinc-400 font-light items-start">
                                                                    <span className="mt-1.5 w-1 h-1 bg-[#D10000] rounded-full shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Additional Context */}
                                                    <div>
                                                        <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">Tech Ecosystem</h4>
                                                        <div className="flex flex-wrap gap-2 mb-6">
                                                            {job.skills.map(skill => (
                                                                <span key={skill} className="px-2 py-1 text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-sm">
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {job.related_projects && (
                                                            <div>
                                                                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">Related Portfolio Units</h4>
                                                                <div className="flex gap-2">
                                                                    {job.related_projects.map(pid => (
                                                                        <div key={pid} className="px-3 py-1 bg-[#D10000]/10 border border-[#D10000]/30 text-[#D10000] text-[10px] font-mono rounded">
                                                                            PROJECT_ID: {pid}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Expand Handle */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300
                                        ${isExpanded ? 'bg-[#D10000]' : 'bg-zinc-800/50 group-hover:bg-[#D10000]/50'}`}
                                    />
                                    <div className="absolute top-6 right-6 text-zinc-700">
                                        {isExpanded ? (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 15l-6-6-6 6" /></svg>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6" /></svg>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </main>
    );
}
