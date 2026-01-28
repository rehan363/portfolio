"use client";
import React, { useEffect, useState, useRef } from 'react';

const CHARS = "ABCDEF0123456789X_";

interface ScrambleTextProps {
    text: string;
    className?: string;
    scrambleSpeed?: number;
    trigger?: "hover" | "auto";
}

export default function ScrambleText({
    text,
    className = "",
    scrambleSpeed = 30,
    trigger = "auto"
}: ScrambleTextProps) {
    const [display, setDisplay] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startScramble = React.useCallback(() => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

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
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsScrambling(false);
            }

            iteration += 1 / 3; // Hardcoded reveal cadence
        }, scrambleSpeed);
    }, [isScrambling, text, scrambleSpeed]);

    useEffect(() => {
        if (trigger === "auto") {
            // Avoid synchronous state update warning
            const timer = setTimeout(() => {
                startScramble();
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [trigger, startScramble]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <span
            className={className}
            onMouseEnter={trigger === "hover" ? startScramble : undefined}
        >
            {display}
        </span>
    );
}
