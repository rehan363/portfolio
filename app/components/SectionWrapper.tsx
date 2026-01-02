"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`relative w-full min-h-screen flex flex-col justify-center px-4 md:px-10 py-24 overflow-hidden bg-transparent ${className}`}
        >
            {/* GLOBAL CONNECTORS ( The "Linkage" ) */}
            {/* 1. Left Guide Line */}
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-white/5 z-0 flex flex-col items-center justify-between py-12">
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="w-px h-full bg-gradient-to-b from-transparent via-[#D10000]/20 to-transparent"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            </div>

            {/* 2. Right Guide Line (Symmetry) */}
            <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-white/5 z-0 hidden md:flex flex-col items-center justify-between py-12">
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="w-px h-full bg-gradient-to-b from-transparent via-[#D10000]/20 to-transparent"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            </div>

            {/* 3. Section Metadata Decorations (Filling Black Space) */}
            {/* 3. Section Metadata Decorations (Filling Black Space) */}
            <div className="absolute top-12 left-16 md:left-24 font-mono text-[9px] text-gray-700 tracking-[0.3em] z-0">
                SEC://{(id?.toUpperCase() || "NULL").substring(0, 3)}_01
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-7xl mx-auto w-full relative z-10 pl-6 md:pl-0"
            >
                {children}
            </motion.div>

            {/* Subtle Background Grain/Texture can be added here if needed in future */}
        </section>
    );
}
