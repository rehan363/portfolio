"use client";

import { useEffect, useState } from "react";
import StairsTransition from "./StairsTransition";

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [showLetters, setShowLetters] = useState(false);
    const [startStairs, setStartStairs] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false); // Controls container BG
    const text = "PORTFOLIO";

    useEffect(() => {
        // 1. Text Animation Start
        setTimeout(() => setShowLetters(true), 100);

        // 2. Trigger Stairs after text is done (e.g., 2s)
        const stairsTimer = setTimeout(() => {
            setStartStairs(true);
        }, 1800);

        // 3. Make background transparent ONCE stairs cover the screen
        // Stairs Slide In covers screen in ~0.5s. So at 1.8s + 0.6s = 2.4s
        const transparencyTimer = setTimeout(() => {
            setIsTransparent(true);
        }, 2400);

        // 4. Complete whole loading sequence (Unmount)
        // Stairs Slide Out finishes around 1.8s + 0.6s (cover) + 0.1s (wait) + 1.1s (exit) = ~3.6s
        // Let's give it ample time.
        const completionTimer = setTimeout(() => {
            onComplete();
        }, 4000);

        return () => {
            clearTimeout(stairsTimer);
            clearTimeout(transparencyTimer);
            clearTimeout(completionTimer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* 1. Black Background Layer - Fades out when stairs cover the screen */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${isTransparent ? 'opacity-0' : 'opacity-100'}`}
            ></div>

            {/* 2. Stairs Transition - Remains visible to play its animation */}
            {startStairs && <StairsTransition onComplete={() => { }} />}

            {/* 3. Text Content - Centered */}
            <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ${isTransparent ? 'opacity-0' : 'opacity-100'}`}>
                <div className="relative overflow-hidden">
                    <h1 className="font-bebas text-white text-[10vw] md:text-9xl tracking-[0.2em]">
                        <span className={`inline-block transition-all duration-700 ${showLetters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            PORTFOLIO
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
