"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LabInterface() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toISOString().split('T')[1].split('.')[0] + " UTC");
        };
        const timer = setInterval(updateTime, 1000);
        updateTime();

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(timer);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Ambient Red Glow following cursor */}
            <div
                className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-[120px] bg-[#D10000] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
                style={{ top: mousePos.y, left: mousePos.x }}
            />

            {/* 3D Perspective Grid Floor */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    transform: 'perspective(1000px) rotateX(60deg) translateY(200px) scale(2)',
                    background: `
                        linear-gradient(transparent 0%, #D10000 100%),
                        repeating-linear-gradient(90deg, transparent 0, transparent 40px, rgba(209, 0, 0, 0.1) 40px, rgba(209, 0, 0, 0.1) 41px),
                        repeating-linear-gradient(0deg, transparent 0, transparent 40px, rgba(209, 0, 0, 0.1) 40px, rgba(209, 0, 0, 0.1) 41px)
                    `
                }}
            />

            {/* HUD Overlay Lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D10000]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D10000]/30 to-transparent" />

            {/* Status Corners */}
            <div className="absolute top-6 left-6 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-[#D10000] opacity-70">SYS: ONLINE</span>
                <span className="text-[10px] font-mono text-[#D10000] opacity-50">VER: 2.4.0</span>
            </div>

            <div className="absolute top-6 right-6 text-right">
                <span className="text-[10px] font-mono text-[#D10000] opacity-70">{time}</span>
            </div>

            {/* Decorative Crosshairs */}
            <div className="absolute top-1/2 left-6 w-2 h-[1px] bg-[#D10000] opacity-30" />
            <div className="absolute top-1/2 right-6 w-2 h-[1px] bg-[#D10000] opacity-30" />
            <div className="absolute bottom-6 left-1/2 w-[1px] h-2 bg-[#D10000] opacity-30" />
        </div>
    );
}
