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
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-colors duration-300 ${isTransparent ? 'bg-transparent pointer-events-none' : 'bg-black'}`}
        >
            {/* Background Stairs Transition */}
            {startStairs && <StairsTransition onComplete={() => { }} />}

            {/* Text Content - Hide when transparent (stairs are covering it anyway) */}
            {!isTransparent && (
                <div className="relative overflow-hidden z-20">
                    <h1 className="flex font-bebas text-white text-[10vw] md:text-9xl tracking-[0.2em] overflow-hidden">
                        {text.split("").map((char, i) => (
                            <span
                                key={i}
                                className={`inline-block transform transition-all duration-800 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${showLetters
                                    ? "translate-y-0 opacity-100 blur-0"
                                    : "translate-y-full opacity-0 blur-md"
                                    }`}
                                style={{
                                    transitionDelay: `${i * 80}ms`
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>
            )}
        </div>
    );
}
