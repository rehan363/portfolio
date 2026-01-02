"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "THE CONTEXT", href: "/#about" },
        { name: "EXPERIENCE", href: "/experience" },
        { name: "ARSENAL", href: "/skills" },
        { name: "WORK", href: "/projects" },
        { name: "PROCESS", href: "/#process" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${scrolled
                ? "bg-[#030303]/80 backdrop-blur-md border-white/10 py-4"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Brand */}
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = "/"}>
                    <div className="w-8 h-8 bg-[#D10000] rounded-sm flex items-center justify-center font-bebas text-white text-xl">
                        M
                    </div>
                    <span className="text-white font-bebas text-xl tracking-widest group-hover:text-[#D10000] transition-colors">ADAM</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-mono text-gray-400 hover:text-[#D10000] tracking-[0.2em] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Icon (Placeholder for now) */}
                <div className="md:hidden text-white">
                    <div className="space-y-1.5 cursor-pointer">
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-4 h-0.5 bg-white ml-auto"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
