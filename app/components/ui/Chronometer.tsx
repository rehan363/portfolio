"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Chronometer() {
    const { scrollYProgress } = useScroll();
    const [currentYear, setCurrentYear] = useState(2025);

    // Heavier mass for "Architectural" sluggishness/weight
    const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 500]), {
        stiffness: 80,
        damping: 30,
        mass: 1.5
    });

    const yearDisplay = useTransform(scrollYProgress, [0, 1], [2025, 2018]);

    useEffect(() => {
        const unsubscribe = yearDisplay.on("change", (latest) => {
            setCurrentYear(Math.round(latest));
        });
        return () => unsubscribe();
    }, [yearDisplay]);

    return (
        <div className="fixed left-0 top-24 bottom-0 w-24 z-10 pointer-events-none hidden md:flex flex-col items-center justify-start text-[#52525B]">

            {/* Static Axis - Aligned to Grid */}
            <div className="absolute left-[50%] top-0 bottom-12 w-[0.5px] bg-[#27272A]" />

            {/* The Indicator - Bronze */}
            <motion.div
                style={{ y: smoothY }}
                className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20"
            >
                <div className="flex flex-col items-end pr-4">
                    <span className="font-playfair text-sm font-bold tracking-widest text-[#D4AF37] tabular-nums">{currentYear}</span>
                    <span className="text-[7px] font-mono text-[#52525B] uppercase tracking-[0.2em] opacity-80">A.D.</span>
                </div>
                {/* Horizontal Tick */}
                <div className="absolute right-0 top-1/2 w-3 h-[1px] bg-[#D4AF37]" />
            </motion.div>

            {/* Ticks - Subtle Measurement */}
            <div className="w-full h-full relative overflow-hidden opacity-50">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute left-1/2 w-1.5 h-[0.5px] bg-[#27272A]"
                        style={{ top: `${(i / 20) * 100}%` }}
                    />
                ))}
            </div>
        </div>
    );
}
