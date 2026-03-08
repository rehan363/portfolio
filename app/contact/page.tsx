"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaGithub, FaPaperPlane, FaCopy } from 'react-icons/fa';

const SystemBackground = dynamic(() => import("../components/3d/SystemBackground"), {
    ssr: false,
});

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    // Simple copy to clipboard
    const copyEmail = () => {
        navigator.clipboard.writeText("rehan007313@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="relative min-h-screen bg-[#050505] text-[#E0E0E0] overflow-hidden flex flex-col">
            <SystemBackground />
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 pt-20">

                {/* Header Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 max-w-4xl"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-[#4A70A9] rounded-full animate-pulse" />
                        <span className="text-xs font-mono text-[#4A70A9] tracking-[0.3em] uppercase">Secure Uplink Established</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bebas text-white leading-[0.8] mb-6">
                        INITIATE <br /> <span className="opacity-50">TRANSMISSION</span>
                    </h1>
                    <p className="text-gray-500 font-mono text-sm max-w-xl mx-auto leading-relaxed">
                        Secure channel open for collaboration inquiries, architectural consultations, and system access requests.
                        Response protocols active.
                    </p>
                </motion.div>

                {/* Transmit Terminal */}
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                    {/* Left: Direct Line */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Email Node */}
                        <div className="group relative">
                            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-[#4A70A9]/50 transition-all duration-300" />
                            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Direct Frequency</h3>
                            <div className="flex items-center gap-4">
                                <a href="mailto:rehan007313@gmail.com" className="text-2xl md:text-3xl font-bebas text-white hover:text-[#4A70A9] transition-colors tracking-wide">
                                    REHAN007313@GMAIL.COM
                                </a>
                                <button
                                    onClick={copyEmail}
                                    className="p-2 border border-white/10 rounded-sm hover:bg-white/5 text-gray-400 hover:text-white transition-all relative"
                                    title="Copy Frequency"
                                >
                                    {copied ? <span className="text-[10px] font-mono text-green-500">COPIED</span> : <FaCopy />}
                                </button>
                            </div>
                        </div>

                        {/* GitHub Node */}
                        <div className="group relative">
                            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-[#4A70A9]/50 transition-all duration-300" />
                            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Code Repository</h3>
                            <a
                                href="https://github.com/rehan363"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-2xl md:text-3xl font-bebas text-white hover:text-[#4A70A9] transition-colors tracking-wide"
                            >
                                <FaGithub />
                                <span>GITHUB.COM/REHAN363</span>
                                <span className="text-xs font-mono text-gray-600 ml-2 border border-white/10 px-2 py-0.5 rounded">PUBLICACCESS</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Message Form (Visual Only in this implementation unless using API) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-[#0A0A0A] border border-white/10 p-8 relative group"
                    >
                        {/* Decorators */}
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20" />

                        <div className="text-[10px] font-mono text-gray-600 mb-6 uppercase tracking-widest flex justify-between">
                            <span>ENCRYPTED MESSAGE PROTOCOL</span>
                            <span>STATUS: READY</span>
                        </div>

                        <form className="space-y-6" action="mailto:rehan007313@gmail.com" method="post" encType="text/plain">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase">Input // Identity</label>
                                <input
                                    type="text"
                                    name="identity"
                                    placeholder="DESIGNATION"
                                    className="w-full bg-[#050505] border border-white/10 text-white p-3 font-mono text-sm focus:border-[#4A70A9] focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase">Input // Purpose</label>
                                <textarea
                                    name="payload"
                                    rows={4}
                                    placeholder="TRANSMISSION CONTENT..."
                                    className="w-full bg-[#050505] border border-white/10 text-white p-3 font-mono text-sm focus:border-[#4A70A9] focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            <button className="w-full bg-white text-black font-bebas text-xl py-3 tracking-widest hover:bg-[#4A70A9] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                                <FaPaperPlane className="text-sm" />
                                <span>TRANSMIT PAYLOAD</span>
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Metrics */}
                <div className="mt-20 flex gap-8 text-[10px] font-mono text-gray-700 uppercase tracking-widest opacity-50">
                    <span>LATENCY: 12ms</span>
                    <span>ENCRYPTION: AES-256</span>
                    <span>LOC: ISLAMABAD, PK</span>
                </div>
            </div>
        </main>
    );
}
