"use client";
import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
    return (
        <SectionWrapper id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Visual Side */}
                <div className="relative h-[600px] w-full hidden md:block group">
                    <div className="absolute inset-0 bg-[#111] rounded-sm transform group-hover:scale-95 transition-transform duration-700 ease-in-out border border-white/5 overflow-hidden">

                        {/* 1. Context Profile Image */}
                        <img
                            src="/profile/architect.png"
                            alt="Architect Profile"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale mix-blend-luminosity"
                        />

                        {/* 2. Cinematic Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>

                        <div className="absolute bottom-8 left-8 text-neutral-500 font-mono text-xs tracking-widest bg-black/50 backdrop-blur-sm px-2 py-1 border border-white/10">
                            FIG. 01 — IDENTITY // ARCHITECT
                        </div>
                    </div>
                    {/* Floating Accent */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 border-r border-b border-[#D10000] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text Side */}
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-[#D10000] tracking-widest flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#D10000] rounded-full animate-pulse"></span>
                            OPERATIONAL
                        </span>
                        <span className="text-[10px] font-mono text-gray-600 tracking-widest hidden md:block">
                            LOC: 34.0522° N, 118.2437° W
                        </span>
                    </div>

                    <h2 className="font-bebas text-[12vw] md:text-9xl leading-[0.8] text-white mb-8 mix-blend-difference">
                        THE <br /> <span className="text-[#D10000]">CONTEXT</span>
                    </h2>

                    <div className="h-px w-full bg-gradient-to-r from-[#D10000] to-transparent mb-10 opacity-50"></div>

                    <p className="text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed mb-8">
                        I craft digital experiences that <span className="text-white font-medium">defy expectations</span>.
                        Merging technical precision with cinematic atmosphere to build products that feel alive, responsive, and unmistakably premium.
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-8 border-l border-white/10 pl-6">
                        <div>
                            <h4 className="text-xs font-mono text-gray-500 mb-2 tracking-widest">DOMAIN</h4>
                            <p className="text-sm font-sans text-gray-300">Creative Engineering &<br />System Architecture</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-mono text-gray-500 mb-2 tracking-widest">CURRENTLY</h4>
                            <p className="text-sm font-sans text-gray-300">Building next-gen<br />Fintech Solutions</p>
                        </div>
                    </div>

                    <p className="text-gray-500 font-mono text-xs tracking-wide leading-loose">
                         // SYSTEM_READY<br />
                         // INITIALIZING_CREATIVE_SEQUENCE...
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
