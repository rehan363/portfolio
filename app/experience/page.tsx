"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useVelocity, useMotionValueEvent, useTransform } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import ScrambleText from '@/app/components/ui/ScrambleText';
import { jobs } from './data/jobs';

export default function ExperiencePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const [velocity, setVelocity] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Shutter Loader Effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useMotionValueEvent(smoothVelocity, "change", (latest) => {
        setVelocity(Math.round(latest));
    });

    return (
        <main
            ref={containerRef}
            className="relative min-h-screen bg-[#050505] text-[#E0E0E0] selection:bg-[#E0E0E0] selection:text-[#050505] overflow-x-hidden perspective-2000 antialiased"
        >
            {/* --- THE SHUTTER (LOADER) --- */}
            <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col">
                <motion.div
                    initial={{ height: "50%" }}
                    animate={{ height: isLoaded ? "0%" : "50%" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="w-full bg-[#050505] border-b border-white/10"
                />
                <motion.div
                    initial={{ height: "50%" }}
                    animate={{ height: isLoaded ? "0%" : "50%" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="w-full bg-[#050505] border-t border-white/10"
                />
            </div>

            {/* --- ATMOSPHERE --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#020202]" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"
                    }}
                />

                {/* Calibration Spine */}
                <div className="absolute left-[8%] md:left-[50%] top-0 bottom-0 w-px bg-white/[0.03]">
                    <motion.div
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                        className="w-full bg-gradient-to-b from-transparent via-white/[0.2] to-transparent"
                    />
                </div>
            </div>

            <Navbar />

            {/* --- CONTENT --- */}
            <div className="relative z-10 pt-24 md:pt-32 pb-40">

                {/* HEADER */}
                <header
                    className="mb-[10vh] md:mb-[15vh] px-6 md:px-0 max-w-[1800px] mx-auto text-center relative selection:bg-none perspective-1000 py-12 md:py-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className="relative inline-block"
                    >
                        <h1 className="text-[15vw] md:text-[11vw] leading-[0.8] font-bebas text-white mix-blend-difference select-none tracking-tighter relative z-10">
                            <ScrambleText text="CHRONICLES" trigger="auto" scrambleSpeed={30} />
                        </h1>
                        <span className="absolute top-0 left-0 text-[15vw] md:text-[11vw] leading-[0.8] font-bebas text-white/5 tracking-tighter blur-sm -z-10 translate-y-2 md:translate-y-4">CHRONICLES</span>

                        <div className="absolute inset-0 flex items-center justify-center z-20 translate-y-16 md:translate-y-24">
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#4A70A9] to-transparent" />
                                <p className="text-[10px] md:text-xs font-mono font-bold text-[#4A70A9] tracking-[0.6em] uppercase">
                                    Operational History
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* THE LIVING ARCHIVE GALLERY */}
                <div className="flex flex-col gap-[12vh] md:gap-[20vh] max-w-[1400px] mx-auto px-6 md:px-12">
                    {jobs.map((job, i) => (
                        <KineticModule key={job.id} job={job} index={i} isLoaded={isLoaded} />
                    ))}
                </div>
            </div>

            {/* SIGNATURE FOOTER */}
            <div className="h-[20vh] flex flex-col items-center justify-center relative z-10 gap-6 opacity-40">
                <div className="w-px h-12 bg-white/20" />
                <span className="text-2xl font-serif italic text-white/60">Fin.</span>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border border-white/30 rotate-45"
                />
            </div>
        </main>
    );
}

function KineticModule({ job, index, isLoaded }: { job: any, index: number, isLoaded: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const springConfig = { mass: 0.1, stiffness: 150, damping: 20 };

    const rawY = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const springY = useSpring(rawY, springConfig);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Parallax for Background Number - Now Smoothed
    const rawParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const parallaxY = useSpring(rawParallax, springConfig);

    const isEven = index % 2 === 0;

    return (
        <motion.article
            ref={ref}
            style={{ opacity }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.98 }}
            transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
            className={`
                relative min-h-[40vh] flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
                items-center gap-8 md:gap-24 group perspective-1000 will-change-transform
            `}
        >
            {/* PARALLAX ETCHED NUMBER */}
            <motion.div
                style={{ y: parallaxY }} // Parallax movement
                className={`absolute top-0 ${isEven ? 'left-0 md:left-[-5%]' : 'right-0 md:left-auto md:right-[-5%]'} z-0 pointer-events-none select-none opacity-20`}
            >
                <span
                    className="text-[6rem] md:text-[20rem] font-bebas leading-none tracking-tighter text-transparent mix-blend-overlay"
                    style={{
                        WebkitTextStroke: '2px rgba(255,255,255,0.08)',
                    }}
                >
                    {String(index + 1).padStart(2, '0')}
                </span>
            </motion.div>

            {/* MAIN MODULE (Holographic Glass Card) */}
            <motion.div
                style={{ y: springY }}
                whileHover={{ scale: 1.02, rotateX: isEven ? 1 : -1, rotateY: isEven ? -1 : 1 }} // Magnetic Tilt
                transition={{ type: "spring", ...springConfig, stiffness: 300 }} // Stiffness 300 for hover (snappier)
                className="flex-1 w-full md:w-auto relative z-10 will-change-transform"
            >
                <div className="
                    relative overflow-hidden
                    p-6 md:p-12
                    border border-white/10 bg-white/[0.02] backdrop-blur-[8px]
                    group-hover:border-[#4A70A9]/40 group-hover:bg-[#4A70A9]/[0.02]
                    transition-all duration-700
                    shadow-2xl
                ">
                    {/* Dossier ID Badge */}
                    <div className="absolute top-0 right-12 px-3 py-1 bg-[#4A70A9]/20 border-x border-b border-[#4A70A9]/30">
                        <span className="text-[8px] font-mono text-[#4A70A9] font-bold tracking-[0.2em]">{job.classification}</span>
                    </div>

                    {/* Technical Ornaments */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#4A70A9]/40" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#4A70A9]/40" />

                    {/* Metadata Header */}
                    <div className="flex flex-col gap-4 mb-10 relative z-10">
                        <div className="flex flex-wrap justify-between items-start gap-4">
                            <div className="space-y-1">
                                <h2 className="text-3xl md:text-6xl font-bebas text-white leading-none tracking-[0.02em]">
                                    <ChromaticText text={job.role} />
                                </h2>
                                <h3 className="text-sm md:text-xl font-mono text-[#4A70A9] font-medium tracking-wide">{job.company}</h3>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] md:text-xs font-mono text-white bg-white/5 px-4 py-1.5 border border-white/10">{job.period}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-8 space-y-8">
                            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
                                {job.description}
                            </p>

                            {/* Skills Tag Section */}
                            <div className="flex flex-wrap gap-2 pt-4">
                                {job.skills?.map((skill: string) => (
                                    <span key={skill} className="text-[9px] font-mono text-gray-500 border border-white/5 px-2 py-1 hover:border-[#4A70A9]/30 hover:text-white transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Telemetry Metrics */}
                        <div className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-white/5 lg:pl-10">
                            {job.metrics.map((m: any) => (
                                <div key={m.label} className="group/metric">
                                    <div className="text-[9px] uppercase tracking-[0.3em] text-gray-600 mb-1.5 font-bold group-hover/metric:text-[#4A70A9] transition-colors">
                                        {m.label}
                                    </div>
                                    <div className="text-sm font-mono text-white/90">
                                        <ScrambleText text={m.value} trigger="hover" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* MISSION OBJECTIVES - "Outcomes" */}
            <motion.div
                className={`w-full md:w-[320px] relative z-10 ${isEven ? 'pl-0 md:pl-8' : 'pr-0 md:pr-8 text-left md:text-right'} group/reveal`}
            >
                <div className={`flex items-center gap-4 py-4 ${!isEven && 'flex-row md:flex-row-reverse'}`}>
                    <div className="w-2 h-2 rounded-full border border-[#4A70A9]/40 bg-[#4A70A9]/10" />
                    <span className="text-[10px] font-mono text-[#4A70A9] tracking-[0.3em] uppercase font-bold">
                        Mission Outcomes
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className={`space-y-4 ${isEven ? 'border-l pl-6' : 'border-l pl-6 md:border-l-0 md:border-r md:pl-0 md:pr-6'} border-white/10`}>
                    {job.achievements.map((ach: string, i: number) => (
                        <div key={i} className="relative group/ach hover:translate-x-1 transition-transform">
                            <div className="text-[11px] md:text-xs text-gray-400 font-light leading-relaxed group-hover/ach:text-white transition-colors">
                                {ach}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

        </motion.article>
    );
}

// Chromatic Text Component
function ChromaticText({ text }: { text: string }) {
    return (
        <span className="relative inline-block group/text cursor-default">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 text-teal-500 opacity-0 group-hover/text:opacity-70 group-hover/text:-translate-x-0.5 transition-all duration-300 mix-blend-screen px-[0.05em]">{text}</span>
            <span className="absolute top-0 left-0 -z-10 text-cyan-500 opacity-0 group-hover/text:opacity-70 group-hover/text:translate-x-0.5 transition-all duration-300 mix-blend-screen px-[0.05em]">{text}</span>
        </span>
    );
}
