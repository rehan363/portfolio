"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

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
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-[var(--bg-void)]/98 backdrop-blur-xl border-b border-white/[0.08]"
                : "bg-transparent"
                }`}
        >
            {/* FULL WIDTH Container matching section padding */}
            <div className="w-full px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="h-20 flex items-center justify-between">

                        {/* LEFT: Brand + Status */}
                        <div className="flex items-center gap-6">
                            {/* Logo Mark - Enhanced */}
                            <Link href="/" className="group flex items-center gap-4">
                                <div className="relative">
                                    {/* Glow Effect on Hover */}
                                    <div className="absolute -inset-2 bg-[var(--acc-red)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Outer Ring */}
                                    <motion.div
                                        className="absolute -inset-1.5 border border-[var(--acc-red)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* Logo */}
                                    <div className="relative w-11 h-11 bg-gradient-to-br from-[var(--acc-red)] to-[#A00000] flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_20px_rgba(209,0,0,0.4)] transition-all duration-300">
                                        <span className="font-bebas text-white text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">M</span>
                                        {/* Shine Effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "100%" }}
                                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                        />
                                    </div>
                                </div>
                                <div className="hidden sm:block">
                                    <span className="font-bebas text-xl text-[var(--fg-cinema)] tracking-[0.15em] group-hover:text-[var(--acc-red)] transition-colors duration-300">
                                        MUHAMMAD
                                    </span>
                                    <div className="text-[8px] font-mono text-gray-600 tracking-[0.3em] uppercase">
                                        Full Stack Engineer
                                    </div>
                                </div>
                            </Link>

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

                            {/* CTA Button - Hidden on Mobile */}
                            <a
                                href="/contact"
                                className="hidden md:flex group relative overflow-hidden px-5 py-2.5 border border-white/20 hover:border-[#D10000] transition-colors"
                            >
                                <div className="absolute inset-0 bg-[#D10000] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative text-[10px] font-mono text-white tracking-[0.2em]">
                                    CONNECT
                                </span>
                            </a>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-white/10 hover:border-[#D10000] transition-colors z-50 relative"
                            >
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                    className="w-5 h-0.5 bg-white origin-center"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="w-3 h-0.5 bg-white ml-auto"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    className="w-5 h-0.5 bg-white origin-center"
                                />
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

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[var(--bg-void)]/95 backdrop-blur-2xl flex flex-col pt-32 px-6 md:hidden h-[100dvh]"
                    >
                        {/* Background Elements */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--acc-red)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                        </div>

                        <div className="flex flex-col gap-2 relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-baseline gap-4 border-b border-white/5 py-5 group"
                                >
                                    <span className="text-xs font-mono text-[#D10000] opacity-60">{link.code}</span>
                                    <span className="text-4xl font-bebas text-white/50 group-hover:text-white transition-colors tracking-wide">
                                        {link.name}
                                    </span>
                                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#D10000]">
                                        →
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Mobile Connect Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 relative z-10"
                        >
                            <a
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-3 w-full bg-[#D10000] hover:bg-[#A00000] text-white py-4 transition-colors group"
                            >
                                <span className="font-mono text-sm tracking-[0.2em]">START A PROJECT</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </motion.div>

                        {/* Mobile Footer Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto pb-8 space-y-4 relative z-10"
                        >
                            <div className="h-px w-full bg-white/10 mb-6" />
                            <div className="flex justify-between items-end">
                                <div className="space-y-2">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                        System Status: <span className="text-emerald-500">Online</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                        Loc: Islamabad, PK
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                                        Local Time
                                    </div>
                                    <div className="text-xl font-mono text-white/80 tabular-nums">
                                        {currentTime}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
