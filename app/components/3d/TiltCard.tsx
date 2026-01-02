"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number; // How much it tilts (default 15)
}

export default function TiltCard({ children, className = "", intensity = 15 }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the tilt
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to center of card
        const relativeX = e.clientX - rect.left - width / 2;
        const relativeY = e.clientY - rect.top - height / 2;

        // Set rotation values
        // Rotate X depends on Y position (up/down)
        // Rotate Y depends on X position (left/right)
        const rotateX = (relativeY / (height / 2)) * -intensity;
        const rotateY = (relativeX / (width / 2)) * intensity;

        x.set(rotateY);
        y.set(rotateX);
    }

    function handleMouseLeave() {
        // Reset to 0,0 on leave
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: mouseY,
                rotateY: mouseX,
                transformStyle: "preserve-3d",
            }}
            className={`relative active:scale-95 transition-transform duration-200 ease-out will-change-transform ${className}`}
        >
            {children}
        </motion.div>
    );
}
