"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function PulseBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base Black */}
            <div className="absolute inset-0 bg-[#030303]" />

            {/* Central Radial Gradient - Breathing */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 4, // 0.25Hz for calm breathing
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(209,0,0,0.03) 0%, transparent 60%)'
                }}
            />

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '64px 64px'
                }}
            />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                style={{
                    backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"
                }}
            />

            {/* Corner Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)'
                }}
            />

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/10 rounded-full"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
}
