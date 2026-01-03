"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface PhaseNeuronProps {
    id: number;
    code: string;
    icon: string;
    isActive: boolean;
    isCompleted: boolean;
    onClick: () => void;
    position: { x: number; y: number };
}

export default function PhaseNeuron({
    id,
    code,
    icon,
    isActive,
    isCompleted,
    onClick,
    position
}: PhaseNeuronProps) {
    return (
        <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: id * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ cursor: 'pointer' }}
            onClick={onClick}
        >
            {/* Outer Glow Ring - Only when active */}
            {isActive && (
                <motion.circle
                    cx={position.x}
                    cy={position.y}
                    r={52}
                    fill="none"
                    stroke="#D10000"
                    strokeWidth={1}
                    opacity={0.3}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            )}

            {/* Pulse Ring - Breathing effect */}
            <motion.circle
                cx={position.x}
                cy={position.y}
                r={44}
                fill="none"
                stroke={isActive ? "#D10000" : isCompleted ? "#4A4A4A" : "#1a1a1a"}
                strokeWidth={1}
                animate={{
                    r: [44, 46, 44],
                    opacity: [0.5, 0.2, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: id * 0.5
                }}
            />

            {/* Main Circle */}
            <motion.circle
                cx={position.x}
                cy={position.y}
                r={40}
                fill={isActive ? "#D10000" : "#0a0a0a"}
                stroke={isActive ? "#D10000" : isCompleted ? "#4A4A4A" : "#1a1a1a"}
                strokeWidth={2}
                whileHover={{
                    scale: 1.1,
                    stroke: "#D10000",
                    transition: { duration: 0.2 }
                }}
            />

            {/* Inner Detail Ring */}
            <circle
                cx={position.x}
                cy={position.y}
                r={32}
                fill="none"
                stroke={isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.05)"}
                strokeWidth={1}
                strokeDasharray="4 4"
            />

            {/* Icon */}
            <text
                x={position.x}
                y={position.y - 4}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isActive ? "#fff" : "#4A4A4A"}
                fontSize={20}
                fontFamily="sans-serif"
            >
                {icon}
            </text>

            {/* Phase Code */}
            <text
                x={position.x}
                y={position.y + 14}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isActive ? "#fff" : "#4A4A4A"}
                fontSize={8}
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="0.2em"
            >
                0{id}
            </text>

            {/* Label Below */}
            <text
                x={position.x}
                y={position.y + 65}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isActive ? "#fff" : "#4A4A4A"}
                fontSize={10}
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="0.3em"
            >
                {code}
            </text>
        </motion.g>
    );
}
