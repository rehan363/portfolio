"use client";
import React, { useEffect, useState, useRef } from 'react';

const CHARS = "ABCDEF0123456789X_";

interface ScrambleTextProps {
    text: string;
    className?: string;
    scrambleSpeed?: number;
    revealSpeed?: number;
    trigger?: "hover" | "auto";
}

export default function ScrambleText({
    text,
    className = "",
    scrambleSpeed = 30,
    revealSpeed = 50,
    trigger = "auto"
}: ScrambleTextProps) {
    const [display, setDisplay] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startScramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;
        const maxIterations = text.length * 3;

        clearInterval(intervalRef.current!);

        intervalRef.current = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current!);
                setIsScrambling(false);
            }

            iteration += 1 / 3; // Slower reveal
        }, scrambleSpeed);
    };

    useEffect(() => {
        if (trigger === "auto") {
            startScramble();
        }
    }, [trigger]);

    return (
        <span
            className={className}
            onMouseEnter={trigger === "hover" ? startScramble : undefined}
        >
            {display}
        </span>
    );
}
