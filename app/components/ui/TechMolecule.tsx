"use client";
import React from 'react';

interface TechMoleculeProps {
    skills: string[];
}

export default function TechMolecule({ skills }: TechMoleculeProps) {
    const nodes = skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const radius = 30 + (skill.length * 2);
        return {
            x: 50 + Math.cos(angle) * radius,
            y: 50 + Math.sin(angle) * radius,
            label: skill
        };
    });

    return (
        <div className="relative w-full h-32 md:h-40 overflow-visible bg-[#0A0A0A] border border-[#27272A] rounded-sm">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

            <svg className="w-full h-full relative z-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Connections */}
                {nodes.map((node, i) => (
                    <line
                        key={`link-${i}`}
                        x1="50" y1="50"
                        x2={node.x} y2={node.y}
                        stroke="#52525B" // Zinc-600
                        strokeWidth="0.5"
                    />
                ))}

                {/* Central Core - Gold */}
                <circle cx="50" cy="50" r="1.5" fill="#D4AF37" className="animate-pulse" />

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <g key={`node-${i}`}>
                        <circle cx={node.x} cy={node.y} r="1" fill="#A1A1AA" />
                        <text
                            x={node.x}
                            y={node.y - 3}
                            fontSize="3"
                            fill="#71717A"
                            textAnchor="middle"
                            fontFamily="monospace"
                        >
                            {node.label}
                        </text>
                    </g>
                ))}
            </svg>
            <div className="absolute bottom-1 right-2 text-[8px] text-[#52525B] font-mono tracking-widest">FIG 2.1: SKILL_GRAPH</div>
        </div>
    );
}
