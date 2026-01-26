"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function SingularityCursor() {
    // --- MOUSE POSITION ---
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // --- PHYSICS (The "Executive" System) ---
    // 1. Primary Dot: Instant tracking (No lag) - Snappier
    const dotConfig = { damping: 35, stiffness: 1000, mass: 0.05 };
    const dotX = useSpring(mouseX, dotConfig);
    const dotY = useSpring(mouseY, dotConfig);

    // 2. Secondary Ring: Smooth, architectural trail - Faster follow
    const ringConfig = { damping: 30, stiffness: 300, mass: 0.1 };
    const ringX = useSpring(mouseX, ringConfig);
    const ringY = useSpring(mouseY, ringConfig);

    // --- STATES ---
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseOut = () => setIsVisible(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Simple robust hover detection
            if (target.tagName.toLowerCase() === 'a' || target.closest('a') ||
                target.tagName.toLowerCase() === 'button' || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <style jsx global>{`
                * { cursor: none !important; }
                body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
             `}</style>

            <AnimatePresence>
                {isVisible && (
                    <>
                        {/* --- LAYER 1: THE RING (Architectural Trail) --- */}
                        <motion.div
                            style={{ x: ringX, y: ringY }}
                            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] hidden md:block mix-blend-difference"
                        >
                            <motion.div
                                className="absolute inset-0 border border-white/50 rounded-full"
                                animate={{
                                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                                    opacity: isHovering ? 0.3 : 0.5,
                                    borderWidth: isHovering ? '1px' : '1px'
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </motion.div>

                        {/* --- LAYER 2: THE DOT (Precision Pointer) --- */}
                        <motion.div
                            style={{ x: dotX, y: dotY }}
                            className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                        >
                            <motion.div
                                className="absolute inset-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
                                animate={{
                                    scale: isClicking ? 0.5 : isHovering ? 0.8 : 1
                                }}
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
