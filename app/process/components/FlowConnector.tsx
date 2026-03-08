"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface FlowConnectorProps {
    direction?: 'horizontal' | 'vertical';
    animated?: boolean;
}

export default function FlowConnector({
    direction = 'horizontal',
    animated = true
}: FlowConnectorProps) {
    const isHorizontal = direction === 'horizontal';

    return (
        <div className={`relative flex items-center justify-center ${isHorizontal ? 'w-full h-16' : 'w-16 h-full'}`}>
            <svg
                className={`${isHorizontal ? 'w-full h-8' : 'w-8 h-full'}`}
                viewBox={isHorizontal ? "0 0 100 20" : "0 0 20 100"}
                preserveAspectRatio="none"
            >
                {/* Background Line */}
                <line
                    x1={isHorizontal ? "0" : "10"}
                    y1={isHorizontal ? "10" : "0"}
                    x2={isHorizontal ? "100" : "10"}
                    y2={isHorizontal ? "10" : "100"}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                />

                {/* Animated Pulse Line */}
                {animated && (
                    <motion.line
                        x1={isHorizontal ? "0" : "10"}
                        y1={isHorizontal ? "10" : "0"}
                        x2={isHorizontal ? "100" : "10"}
                        y2={isHorizontal ? "10" : "100"}
                        stroke="#4A70A9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1]
                        }}
                    />
                )}

                {/* Arrow Head */}
                <polygon
                    points={isHorizontal
                        ? "90,5 100,10 90,15"
                        : "5,90 10,100 15,90"
                    }
                    fill="rgba(255,255,255,0.2)"
                />
            </svg>

            {/* Data Flow Particles */}
            {animated && (
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[#4A70A9] rounded-full"
                            style={{
                                [isHorizontal ? 'top' : 'left']: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                            animate={{
                                [isHorizontal ? 'left' : 'top']: ['0%', '100%'],
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.6,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
