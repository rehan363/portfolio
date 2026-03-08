"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface SynapticPathProps {
    start: { x: number; y: number };
    end: { x: number; y: number };
    isActive: boolean;
    delay?: number;
}

export default function SynapticPath({ start, end, isActive, delay = 0 }: SynapticPathProps) {
    // Calculate control points for curved path
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2 - 30;

    const pathD = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

    return (
        <g>
            {/* Base Path - Dashed */}
            <path
                d={pathD}
                fill="none"
                stroke="#1a1a1a"
                strokeWidth={1}
                strokeDasharray="8 8"
            />

            {/* Active Glow Path - Vector based for performance */}
            {isActive && (
                <>
                    {/* Outer Glow (Simulated with thick transparent stroke) */}
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="#4A70A9"
                        strokeWidth={6}
                        strokeLinecap="round"
                        strokeOpacity={0.2}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {/* Core Path */}
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="#4A70A9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
                    />
                </>
            )}

            {/* Traveling Pulse - Data packet visualization */}
            <motion.circle
                r={3}
                fill="#4A70A9"
                initial={{ opacity: 0 }}
                animate={isActive ? {
                    opacity: [0, 1, 1, 0],
                    offsetDistance: ['0%', '100%']
                } : { opacity: 0 }}
                transition={{
                    duration: 1.5,
                    delay: delay + 0.5,
                    repeat: isActive ? Infinity : 0,
                    repeatDelay: 1,
                    ease: "linear"
                }}
                style={{
                    offsetPath: `path('${pathD}')`,
                }}
            />
        </g>
    );
}
