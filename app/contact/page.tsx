"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaGithub, FaPaperPlane, FaCopy, FaLinkedin } from 'react-icons/fa';

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
                    className="text-center mb-16 max-w-4xl"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="relative flex h-2 w-2">
                            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                            <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                        </div>
                        <span className="text-[10px] font-mono text-green-500 tracking-[0.4em] uppercase font-bold">Available for new opportunities</span>
                    </div>
                    <h1 className="text-7xl md:text-9xl font-bebas text-white leading-[0.8] mb-8 tracking-tight">
                        LET'S BUILD <br /> <span className="text-[#4A70A9]">SOMETHING GREAT</span>
                    </h1>
                    <p className="text-gray-400 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Whether you have a specific project in mind or just want to discuss the future of Agentic AI, my inbox is always open. Let's connect and turn your vision into reality.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="w-full max-w-4xl mb-20">

                    {/* Centered: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-16 text-center"
                    >
                        <div className="space-y-4 flex flex-col items-center">
                            <h2 className="text-4xl font-bebas text-white tracking-wider">CONTACT DETAILS</h2>
                            <div className="h-1 w-20 bg-[#4A70A9]"></div>
                        </div>

                        <div className="grid grid-cols-1 gap-12">
                            {/* Email */}
                            <div className="group relative flex flex-col items-center">
                                <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3 font-bold">Email Address</h3>
                                <div className="flex items-center gap-6">
                                    <a href="mailto:rehan007313@gmail.com" className="text-3xl md:text-5xl font-bebas text-white hover:text-[#4A70A9] transition-all tracking-wide">
                                        REHAN007313@GMAIL.COM
                                    </a>
                                    <button
                                        onClick={copyEmail}
                                        className="p-3 border border-white/10 rounded-sm hover:bg-white/5 text-gray-400 hover:text-white transition-all relative group/copy"
                                        title="Copy Email"
                                    >
                                        {copied ? <span className="text-[10px] font-mono text-green-500 font-bold">COPIED!</span> : <FaCopy className="group-hover/copy:scale-110 transition-transform" />}
                                    </button>
                                </div>
                            </div>

                            {/* Digital Presence */}
                            <div className="group relative flex flex-col items-center">
                                <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3 font-bold">Digital Presence</h3>
                                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                                    <a
                                        href="https://github.com/rehan363"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-2xl md:text-4xl font-bebas text-white hover:text-[#4A70A9] transition-all tracking-wide group/link"
                                    >
                                        <FaGithub className="text-xl md:text-2xl group-hover/link:rotate-12 transition-transform" />
                                        <span>GITHUB</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/rehan-ahmed313"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-2xl md:text-4xl font-bebas text-white hover:text-[#4A70A9] transition-all tracking-wide group/link"
                                    >
                                        <FaLinkedin className="text-xl md:text-2xl group-hover/link:rotate-12 transition-transform" />
                                        <span>LINKEDIN</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-white/5 max-w-xs mx-auto">
                            <p className="text-xs font-mono text-gray-600 leading-relaxed uppercase tracking-[0.3em]">
                                Based in Islamabad, Pakistan <br />
                                Working with clients worldwide
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Status */}
                <div className="flex gap-12 py-10 border-t border-white/5 w-full max-w-6xl justify-center md:justify-start items-center text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                        <span>System Online</span>
                    </div>
                    <span>Latency: 12ms</span>
                    <span className="hidden md:block">Timezone: UTC+5</span>
                </div>
            </div>
        </main>
    );
}
