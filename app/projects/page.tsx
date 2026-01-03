"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import LabInterface from './components/LabInterface';
import ExperimentModule from './components/ExperimentModule';
import { projects } from './data/projects';

export default function ProjectsPage() {
    return (
        <main className="relative min-h-screen bg-[#020202] text-white overflow-x-hidden selection:bg-[#D10000] selection:text-white">

            {/* The Lab Environment */}
            <LabInterface />

            <div className="relative z-10">
                <Navbar />

                <div className="pt-32 pb-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">

                    {/* Command Center Header */}
                    <header className="mb-24 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-2"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#D10000] animate-pulse rounded-sm" />
                                <span className="text-xs font-mono text-[#D10000]">SECURE_CONNECTION_ESTABLISHED</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bebas text-white leading-[0.85] tracking-tight">
                                INNOVATION
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D10000] to-red-600">
                                    LAB
                                </span>
                            </h1>
                            <p className="max-w-xl text-gray-500 mt-6 font-mono text-sm leading-relaxed border-l border-[#D10000]/30 pl-4">
                                // ACCESSING EXPERIMENT LOGS...
                                <br />
                                // DISPLAYING ACTIVE PROTOTYPES AND DEPLOYED SYSTEMS.
                                <br />
                                // HOVER OVER MODULES TO INIT DIAGNOSTICS.
                            </p>
                        </motion.div>
                    </header>

                    {/* Experiment Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                        {projects.map((project, i) => (
                            <ExperimentModule
                                key={project.id}
                                project={project}
                                index={i}
                            />
                        ))}
                    </div>

                    {/* Footer Console */}
                    <div className="mt-32 border-t border-[#D10000]/20 pt-8 flex justify-between items-end font-mono text-[10px] text-gray-600">
                        <div>
                            <div>TERMINAL_ID: MAC_DEV_01</div>
                            <div>LOCATION: LOCALHOST</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[#D10000] animate-pulse">AWAITING INPUT...</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
