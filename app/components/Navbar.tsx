"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [currentTime, setCurrentTime] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20; // More sensitive scroll trigger
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    // Live Clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    // Scroll Lock when Mobile Menu is Open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "EXPERIENCE", href: "/experience", code: "01" },
        { name: "ARSENAL", href: "/skills", code: "02" },
        { name: "WORK", href: "/projects", code: "03" },
        { name: "PROCESS", href: "/process", code: "04" },
        { name: "RESUME", href: "/resume", code: "05" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${scrolled || isMobileMenuOpen
                    ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/5"
                    : "bg-transparent"
                    }`}
            >
                {/* FULL WIDTH Container */}
                <div className="w-full px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="h-20 flex items-center justify-between">

                            {/* LEFT: Brand */}
                            <div className="flex items-center gap-6">
                                <Link href="/" className="group flex items-center gap-4" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-[#D10000]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <motion.div
                                            className="absolute -inset-1.5 border border-[#D10000]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        />
                                        <div className="relative w-11 h-11 bg-gradient-to-br from-[#D10000] to-[#8a0000] flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_20px_rgba(209,0,0,0.4)] transition-all duration-300">
                                            <span className="font-bebas text-white text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">M</span>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "100%" }}
                                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden sm:block">
                                        <span className="font-bebas text-xl text-[#E0E0E0] tracking-[0.15em] group-hover:text-[#D10000] transition-colors duration-300">
                                            MUHAMMAD
                                        </span>
                                        <div className="text-[8px] font-mono text-gray-500 tracking-[0.3em] uppercase">
                                            Full Stack Engineer
                                        </div>
                                    </div>
                                </Link>

                                {/* Desktop Status */}
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

                            {/* CENTER: Navigation Links (Desktop) */}
                            <div className="hidden md:flex items-center">
                                <div className="flex items-center bg-white/[0.02] border border-white/5 px-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="group relative px-5 py-3 transition-colors"
                                        >
                                            <div className="absolute inset-0 bg-[#D10000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="relative flex items-center gap-2">
                                                <span className="text-[9px] font-mono text-gray-600 group-hover:text-white/50 transition-colors">
                                                    {link.code}
                                                </span>
                                                <span className="text-[10px] font-mono text-gray-400 group-hover:text-white tracking-[0.2em] transition-colors">
                                                    {link.name}
                                                </span>
                                            </div>
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-px bg-[#D10000] origin-left"
                                                initial={{ scaleX: 0 }}
                                                whileHover={{ scaleX: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT: Actions */}
                            <div className="flex items-center gap-6">
                                {/* Clock */}
                                <div className="hidden lg:flex flex-col items-end">
                                    <div className="text-[9px] font-mono text-gray-600 tracking-widest">UTC+5</div>
                                    <div className="text-sm font-mono text-white tabular-nums">{currentTime}</div>
                                </div>

                                <div className="hidden lg:block w-px h-8 bg-white/10" />

                                <Link
                                    href="/contact"
                                    className="hidden md:flex group relative overflow-hidden px-5 py-2.5 border border-white/20 hover:border-[#D10000] transition-colors"
                                >
                                    <div className="absolute inset-0 bg-[#D10000] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative text-[10px] font-mono text-white tracking-[0.2em]">
                                        CONNECT
                                    </span>
                                </Link>

                                {/* CUSTOM MOBILE TOGGLE */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="md:hidden w-12 h-12 flex items-center justify-center relative group z-50 border border-white/10 bg-[#0A0A0A]"
                                    aria-label="Toggle Menu"
                                >
                                    {/* Animated Grid Icon */}
                                    <div className="relative w-5 h-5 flex flex-col justify-between">
                                        <motion.span
                                            animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                                            className="w-full h-[2px] bg-white origin-center transition-all duration-300"
                                        />
                                        <motion.span
                                            animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                            className="w-2/3 h-[2px] bg-[#D10000] transition-all duration-300 self-end"
                                        />
                                        <motion.span
                                            animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                                            className="w-full h-[2px] bg-white origin-center transition-all duration-300"
                                        />
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D10000] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#D10000] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="fixed inset-0 z-40 bg-[#050505] flex flex-col md:hidden pt-28 px-6 overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[#D10000]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </div>

                        {/* Navigation Items */}
                        <div className="flex flex-col gap-1 relative z-10 h-full">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.4 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-between py-6 border-b border-white/5 group active:bg-white/5 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-mono text-[#D10000]/60">{link.code}</span>
                                            <span className="text-3xl font-bebas text-[#E0E0E0] tracking-wider group-hover:text-white group-hover:translate-x-2 transition-all">
                                                {link.name}
                                            </span>
                                        </div>
                                        <motion.span
                                            className="text-[#D10000] text-xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                                        >
                                            →
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full py-5 bg-[#D10000] text-white font-mono text-sm tracking-[0.2em] hover:bg-[#b00000] transition-colors"
                                >
                                    START A PROJECT
                                </Link>
                            </motion.div>

                            {/* Mobile Footer */}
                            <div className="mt-auto pb-10 flex justify-between items-end opacity-50">
                                <div className="text-[10px] font-mono text-gray-500 uppercase">
                                    <div>SYS: ONLINE</div>
                                    <div>Ver 3.0.1</div>
                                </div>
                                <div className="text-[10px] font-mono text-gray-500 text-right uppercase">
                                    <div>Islamabad</div>
                                    <div className="text-white">{currentTime}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
