"use client";

import { useEffect, useState } from "react";

interface StairsTransitionProps {
    onComplete: () => void;
}

export default function StairsTransition({ onComplete }: StairsTransitionProps) {
    const [stage, setStage] = useState<"enter" | "hold" | "exit">("enter");
    const numStairs = 5;
    const staggerDelay = 100;

    useEffect(() => {
        // Stage 1: Enter (Slide In from Bottom)
        // Start immediately on mount

        // Stage 2: Exit (Slide Out to Top)
        // Wait for enter animation + stagger to complete
        const exitTimeout = setTimeout(() => {
            setStage("exit");
        }, 1600); // 1.6s (animation time + buffer)

        // Complete
        const completeTimeout = setTimeout(() => {
            onComplete();
        }, 3800); // Total 4s approx

        return () => {
            clearTimeout(exitTimeout);
            clearTimeout(completeTimeout);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[60] pointer-events-none overflow-hidden h-screen w-screen">
            {Array.from({ length: numStairs }).map((_, index) => {
                const heightPercent = 100 / numStairs;
                const topPosition = index * heightPercent;

                let transformValue = "translateY(100%)"; // Default: below screen
                if (stage === "enter") transformValue = "translateY(100%)"; // Initial
                // Effectively we rely on mounting reset? 
                // Actually we need a 'mounted' state to trigger the first transition
                // Let's use a simpler logic with a 'mounted' effect

                return (
                    <StairColumn
                        key={index}
                        index={index}
                        total={numStairs}
                        topPosition={topPosition}
                        heightPercent={heightPercent}
                    />
                );
            })}
        </div>
    );
}

// Subcomponent to handle individual stair animation logic
function StairColumn({ index, total, topPosition, heightPercent }: any) {
    // Start below screen (100%)
    const [styleState, setStyleState] = useState({
        transform: "translate3d(0, 100%, 0)",
        transition: "transform 0.5s cubic-bezier(0.8, 0, 0.2, 1)" // Start FAST for entry
    });

    useEffect(() => {
        const reverseIndex = total - 1 - index;
        const exitStagger = reverseIndex * 100; // 100ms: Faster but still defined

        // Step 1: Slide In (Cover) - FAST (0.5s)
        const t1 = setTimeout(() => {
            setStyleState(prev => ({
                ...prev,
                transform: "translate3d(0, 0%, 0)"
            }));
        }, 50);

        // Step 2: Prepare for Exit (Transition Speed Change)
        const t2 = setTimeout(() => {
            setStyleState(prev => ({
                ...prev,
                transition: "transform 1.1s cubic-bezier(0.65, 0, 0.35, 1)" // Faster (1.1s)
            }));
        }, 550);

        // Step 3: Slide Out (Reveal)
        const t3 = setTimeout(() => {
            setStyleState(prev => ({
                ...prev,
                transform: "translate3d(0, -100%, 0)"
            }));
        }, 600 + exitStagger);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [index, total]);

    return (
        <div
            className="absolute bottom-0 bg-[#e5e5e5]"
            style={{
                left: `${topPosition}%`,
                width: `${heightPercent}%`, // Removed overlap for sharp definition
                height: `100%`,
                transform: styleState.transform,
                transition: styleState.transition,
                willChange: "transform",
                backfaceVisibility: "hidden",
                borderRight: "1px solid rgba(0,0,0,0.05)" // Subtle line to define steps
            }}
        />
    );
}
