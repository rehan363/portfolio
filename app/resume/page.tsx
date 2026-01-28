"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaPrint, FaArrowLeft, FaPhone } from "react-icons/fa";

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-[#111111] text-white p-4 md:p-8 flex flex-col items-center print:bg-white print:p-0">
            {/* Controls - No Print */}
            <div className="print:hidden fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-[#111111]/90 backdrop-blur-md z-50 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <FaArrowLeft /> Back to Portfolio
                </Link>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-[#D10000] text-white rounded-sm hover:bg-[#a00000] transition-colors font-mono uppercase tracking-wider text-sm"
                >
                    <FaPrint /> Print / Save PDF
                </button>
            </div>

            {/* Resume A4 Container - Dense Creamy Theme */}
            <div className={`w-[210mm] h-[297mm] bg-[#F3F2F0] text-[#1A1A1A] shadow-2xl overflow-hidden relative print:border-0 print:shadow-none print:w-full print:h-screen print:absolute print:top-0 print:left-0 print:m-0 mt-16 print:mt-0 flex flex-col`}>

                {/* Header / Hero */}
                <header className="flex items-start justify-between px-10 py-8 border-b border-gray-300 bg-[#EAE8E6]">
                    <div className="flex-1 pr-6 pt-2">
                        <h1 className="text-5xl font-bebas tracking-wide text-[#000000] mb-1 leading-none">MUHAMMAD ADAM</h1>
                        <p className="text-[#D10000] font-mono tracking-[0.2em] uppercase text-xs mb-3 font-bold">Full Stack Engineer & Solution Architect</p>
                        <p className="text-gray-700 text-xs leading-relaxed max-w-xl font-medium text-justify">
                            Results-driven Engineer specializing in scalable AI architectures and full-stack systems. Expert in constructing agentic workflows and production-grade applications using Next.js and Python. Committed to clean code, high-performance computing, and cloud-native solutions.
                        </p>
                    </div>
                    {/* Photo */}
                    <div className="w-28 h-28 relative shrink-0 rounded-full overflow-hidden border-[3px] border-white shadow-md">
                        <Image
                            src="/me.png"
                            alt="Muhammad Adam"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </header>

                <div className="grid grid-cols-[30%_70%] flex-1">
                    {/* Sidebar (Left) - Darker Warm Grey */}
                    <aside className="bg-[#EAE8E6] p-6 space-y-8 border-r border-gray-300 h-full">
                        {/* Contact */}
                        <section>
                            <h3 className="text-base font-bebas text-[#000000] border-b-2 border-[#D10000] pb-1 mb-3">Contact</h3>
                            <div className="space-y-2.5 text-xs text-gray-800 font-medium">
                                <a href="tel:+923038705165" className="flex items-center gap-2 hover:text-[#D10000] transition-colors">
                                    <FaPhone className="text-[#D10000] shrink-0" />
                                    <span>+92 303 8705165</span>
                                </a>
                                <a href="mailto:chaudhrayadam@gmail.com" className="flex items-center gap-2 hover:text-[#D10000] transition-colors">
                                    <FaEnvelope className="text-[#D10000] shrink-0" />
                                    <span className="truncate">chaudhrayadam@gmail.com</span>
                                </a>
                                <a href="https://github.com/AdamChoudary" className="flex items-center gap-2 hover:text-[#D10000] transition-colors">
                                    <FaGithub className="text-[#D10000] shrink-0" />
                                    <span>AdamChoudary</span>
                                </a>
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-[#D10000] shrink-0" />
                                    <span>Islamabad, Pakistan</span>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-base font-bebas text-[#000000] border-b-2 border-[#D10000] pb-1 mb-3">Education</h3>
                            <div>
                                <div className="text-[#000000] font-bold text-xs">AI Engineering Diploma</div>
                                <div className="text-[#D10000] text-[10px] font-mono mb-0.5 font-bold">PIAIC (Air University)</div>
                                <div className="text-gray-600 text-[10px] font-semibold">2023 — Present</div>
                                <p className="text-[10px] text-gray-600 mt-1 leading-tight">Generative AI, Cloud Native Computing & Agentic Systems.</p>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h3 className="text-base font-bebas text-[#000000] border-b-2 border-[#D10000] pb-1 mb-3">Technical Arsenal</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {["Python", "TypeScript", "Next.js", "FastAPI", "Django", "OpenAI Agents SDK", "LiveKit Voice Agents", "LangChain", "Docker", "CI/CD workflows", "Fly.io", "MongoDB", "PostgreSQL", "React", "Redis", "VAPI", "TailwindCSS"].map(tech => (
                                    <span key={tech} className="px-1.5 py-0.5 bg-white border border-gray-300 text-[10px] text-gray-800 rounded-sm font-semibold shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Languages */}
                        <section>
                            <h3 className="text-base font-bebas text-[#000000] border-b-2 border-[#D10000] pb-1 mb-3">Languages</h3>
                            <div className="space-y-1.5 text-xs text-gray-800 font-medium">
                                <div className="flex justify-between border-b border-gray-300 pb-0.5">
                                    <span>English</span>
                                    <span className="text-[#000000] font-bold">Professional</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300 pb-0.5">
                                    <span>Urdu</span>
                                    <span className="text-[#000000] font-bold">Native</span>
                                </div>
                            </div>
                        </section>
                    </aside>

                    {/* Main Content (Right) - Dense Cream */}
                    <main className="p-8 pt-6 space-y-6 bg-[#F3F2F0]">
                        {/* Experience */}
                        <section>
                            <h2 className="text-xl font-bebas text-[#000000] mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#D10000] rounded-full"></span>
                                PROFESSIONAL EXPERIENCE
                            </h2>

                            <div className="space-y-5 border-l-2 border-gray-300 ml-1 pl-5">
                                {/* Aptive Mind */}
                                <div className="relative group">
                                    <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 bg-[#D10000] rounded-full border-2 border-[#F3F2F0]"></div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="text-sm font-bold text-[#000000] uppercase">Full Stack Engineer</h3>
                                        <span className="font-mono text-[10px] text-gray-600 font-bold bg-[#Eae8e6] px-1.5 rounded">Nov 2025 — Present</span>
                                    </div>
                                    <div className="text-[#D10000] text-xs font-bold mb-1 uppercase tracking-wide">Aptive Mind</div>
                                    <p className="text-xs text-gray-700 leading-snug font-medium text-justify">
                                        Architecting enterprise-grade full-stack solutions. Integrating Python/FastAPI backends with Next.js frontends to deliver high-performance AI-powered applications.
                                    </p>
                                </div>

                                {/* Auroxa Tech */}
                                <div className="relative group">
                                    <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 bg-gray-400 rounded-full border-2 border-[#F3F2F0]"></div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="text-sm font-bold text-[#000000] uppercase">Full Stack Engineer</h3>
                                        <span className="font-mono text-[10px] text-gray-600 font-bold bg-[#Eae8e6] px-1.5 rounded">Jul — Nov 2025</span>
                                    </div>
                                    <div className="text-[#D10000] text-xs font-bold mb-1 uppercase tracking-wide">Auroxa Tech</div>
                                    <p className="text-xs text-gray-700 leading-snug font-medium text-justify">
                                        Engineered agentic systems using VAPI and OpenAI (Realtime API). Implemented robust deployment pipelines using Docker and Nginx, optimized with Redis caching.
                                    </p>
                                </div>

                                {/* Dot Escapist */}
                                <div className="relative group">
                                    <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 bg-gray-400 rounded-full border-2 border-[#F3F2F0]"></div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="text-sm font-bold text-[#000000] uppercase">Frontend Developer</h3>
                                        <span className="font-mono text-[10px] text-gray-600 font-bold bg-[#Eae8e6] px-1.5 rounded">Aug 2024 — Jun 2025</span>
                                    </div>
                                    <div className="text-[#D10000] text-xs font-bold mb-1 uppercase tracking-wide">Dot Escapist</div>
                                    <p className="text-xs text-gray-700 leading-snug font-medium text-justify">
                                        Developed responsive full-stack applications. Streamlined API integration between Django backends and Next.js interfaces, ensuring rigorous type safety and performance.
                                    </p>
                                </div>

                                {/* Al-Basirr */}
                                <div className="relative group">
                                    <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 bg-gray-400 rounded-full border-2 border-[#F3F2F0]"></div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="text-sm font-bold text-[#000000] uppercase">Frontend Intern</h3>
                                        <span className="font-mono text-[10px] text-gray-600 font-bold bg-[#Eae8e6] px-1.5 rounded">Jun — Aug 2024</span>
                                    </div>
                                    <div className="text-[#D10000] text-xs font-bold mb-1 uppercase tracking-wide">Al-Basirr Technologies</div>
                                    <p className="text-xs text-gray-700 leading-snug font-medium text-justify">
                                        Optimized frontend architecture for enterprise clients. Handled complex API state management and responsive UI implementation.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section className="mt-2">
                            <h2 className="text-xl font-bebas text-[#000000] mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#D10000] rounded-full"></span>
                                NOTABLE PROJECTS
                            </h2>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="bg-white border border-gray-300 p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-[#000000]">OUIIMI Marketplace</h4>
                                        <span className="text-[9px] font-mono text-[#D10000] uppercase font-bold">ouiimi.com</span>
                                    </div>
                                    <p className="text-[11px] text-gray-700 mb-1.5 font-medium leading-tight">
                                        Fair-revenue service marketplace with real-time scheduling. Features complex multi-staff calendar management and split-payment processing via Stripe.
                                    </p>
                                    <div className="text-[9px] font-mono text-gray-500 font-bold">Next.js 14 • MongoDB • Stripe Connect</div>
                                </div>

                                <div className="bg-white border border-gray-300 p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-[#000000]">GoCreation AI</h4>
                                        <span className="text-[9px] font-mono text-[#D10000] uppercase font-bold">gocreation.ma</span>
                                    </div>
                                    <p className="text-[11px] text-gray-700 mb-1.5 font-medium leading-tight">
                                        Automated legal tech platform for company formation in Morocco. Generates compliant legal PDFs in minutes using an Agentic AI workflow.
                                    </p>
                                    <div className="text-[9px] font-mono text-gray-500 font-bold">Next.js 15 • LangGraph • FastAPI</div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>

                {/* Footer Decor */}
                <div className="h-1.5 bg-[#D10000] w-full"></div>
            </div>

            <style jsx global>{`
                @media print {
                    @page {
                        margin: 0;
                        size: auto;
                    }
                    body {
                        background: none;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            `}</style>
        </div>
    );
}
