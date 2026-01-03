"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

/**
 * Consistent Section Wrapper
 * - Full width with padding (px-6 md:px-12 lg:px-24)
 * - Centered content container (max-w-7xl)
 * - Matches Navbar structure for perfect alignment
 */
export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`relative w-full py-32 overflow-hidden bg-transparent ${className}`}
        >
            {/* Full width padding wrapper */}
            <div className="w-full px-6 md:px-12 lg:px-24">

                {/* Centered content container */}
                <div className="max-w-7xl mx-auto relative">

                    {/* Left Guide Line - Aligned with container edge */}
                    <div className="absolute -left-6 md:-left-12 lg:-left-24 top-0 bottom-0 w-px z-0">
                        <div className="h-full w-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                    </div>

                    {/* Section Metadata Label */}
                    <div className="absolute -top-16 left-0 font-mono text-[9px] text-gray-700 tracking-[0.3em] z-0">
                        SEC://{(id?.toUpperCase() || "NULL").substring(0, 6)}_01
                    </div>

                    {/* Animated Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
