"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Live Clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const navLinks = [
        { name: "CONTEXT", href: "/#about", code: "01" },
        { name: "EXPERIENCE", href: "/experience", code: "02" },
        { name: "ARSENAL", href: "/skills", code: "03" },
        { name: "WORK", href: "/projects", code: "04" },
        { name: "PROCESS", href: "/process", code: "05" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                    ? "bg-[#030303]/95 backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D10000]/50 to-transparent" />

            {/* FULL WIDTH Container matching section padding */}
            <div className="w-full px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="h-20 flex items-center justify-between">

                        {/* LEFT: Brand + Status */}
                        <div className="flex items-center gap-6">
                            {/* Logo Mark */}
                            <a href="/" className="group flex items-center gap-4">
                                <div className="relative">
                                    {/* Outer Ring */}
                                    <motion.div
                                        className="absolute -inset-1 border border-[#D10000]/30 opacity-0 group-hover:opacity-100 transition-opacity"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />
                                    {/* Logo */}
                                    <div className="w-10 h-10 bg-[#D10000] flex items-center justify-center relative overflow-hidden">
                                        <span className="font-bebas text-white text-xl relative z-10">A</span>
                                        {/* Shine Effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                        />
                                    </div>
                                </div>
                                <div className="hidden sm:block">
                                    <span className="font-bebas text-xl text-white tracking-[0.15em] group-hover:text-[#D10000] transition-colors">
                                        ADAM
                                    </span>
                                    <div className="text-[8px] font-mono text-gray-600 tracking-[0.3em]">
                                        SOLUTION.ARCHITECT
                                    </div>
                                </div>
                            </a>

                            {/* Status Indicator */}
                            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] border border-white/5">
                                <div className="relative">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                    <div className="absolute inset-0 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping opacity-75" />
                                </div>
                                <span className="text-[9px] font-mono text-gray-500 tracking-widest">
                                    ONLINE
                                </span>
                            </div>
                        </div>

                        {/* CENTER: Navigation Links */}
                        <div className="hidden md:flex items-center">
                            <div className="flex items-center bg-white/[0.02] border border-white/5 px-1">
                                {navLinks.map((link, i) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="group relative px-5 py-3 transition-colors"
                                    >
                                        {/* Background on hover */}
                                        <div className="absolute inset-0 bg-[#D10000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Content */}
                                        <div className="relative flex items-center gap-2">
                                            <span className="text-[9px] font-mono text-gray-600 group-hover:text-white/50 transition-colors">
                                                {link.code}
                                            </span>
                                            <span className="text-[10px] font-mono text-gray-400 group-hover:text-white tracking-[0.2em] transition-colors">
                                                {link.name}
                                            </span>
                                        </div>

                                        {/* Bottom indicator line */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-px bg-[#D10000] origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Metadata + CTA */}
                        <div className="flex items-center gap-6">
                            {/* Live Clock */}
                            <div className="hidden lg:flex flex-col items-end">
                                <div className="text-[9px] font-mono text-gray-600 tracking-widest">UTC+5</div>
                                <div className="text-sm font-mono text-white tabular-nums">{currentTime}</div>
                            </div>

                            {/* Divider */}
                            <div className="hidden lg:block w-px h-8 bg-white/10" />

                            {/* CTA Button */}
                            <a
                                href="#contact"
                                className="group relative overflow-hidden px-5 py-2.5 border border-white/20 hover:border-[#D10000] transition-colors"
                            >
                                <div className="absolute inset-0 bg-[#D10000] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative text-[10px] font-mono text-white tracking-[0.2em]">
                                    CONNECT
                                </span>
                            </a>

                            {/* Mobile Menu Toggle */}
                            <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-white/10 hover:border-[#D10000] transition-colors">
                                <span className="w-5 h-0.5 bg-white" />
                                <span className="w-3 h-0.5 bg-white ml-auto" />
                                <span className="w-5 h-0.5 bg-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Border with gradient */}
            <div className={`h-px transition-all duration-500 ${scrolled
                    ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    : "bg-transparent"
                }`} />
        </motion.nav>
    );
}
