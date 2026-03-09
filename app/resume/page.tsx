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
                    className="flex items-center gap-2 px-4 py-2 bg-[#4A70A9] text-white rounded-sm hover:bg-[#a00000] transition-colors font-mono uppercase tracking-wider text-sm"
                >
                    <FaPrint /> Print / Save PDF
                </button>
            </div>

            {/* Resume A4 Container - Responsive */}
            <div className={`w-full max-w-[210mm] md:w-[210mm] min-h-[min(297mm,100vh)] md:h-[297mm] h-auto bg-[#F3F2F0] text-[#1A1A1A] shadow-2xl overflow-hidden relative print:border-0 print:shadow-none print:w-full print:h-screen print:absolute print:top-0 print:left-0 print:m-0 mt-16 print:mt-0 flex flex-col`}>

                {/* Header / Hero */}
                <header className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between px-6 py-6 md:px-10 md:py-8 border-b border-gray-300 bg-[#EAE8E6] text-center md:text-left gap-6 md:gap-0">
                    <div className="flex-1 md:pr-6 md:pt-2">
                        <h1 className="text-4xl md:text-5xl font-bebas tracking-wide text-[#000000] mb-2 md:mb-1 leading-none">REHAN AHMED</h1>
                        <p className="text-[#4A70A9] font-mono tracking-[0.2em] uppercase text-xs mb-4 md:mb-3 font-bold">Full Stack AI Developer & Agentic AI Specialist</p>
                        <p className="text-gray-700 text-xs leading-relaxed max-w-xl font-medium text-justify md:text-justify mx-auto md:mx-0">
                            Results-driven Engineer specializing in scalable AI architectures and full-stack systems. Expert in constructing agentic workflows and production-grade applications using Next.js and Python. Committed to clean code, high-performance computing, and cloud-native solutions.
                        </p>
                    </div>
                    {/* Photo */}
                    <div className="w-24 h-24 md:w-28 md:h-28 relative shrink-0 rounded-full overflow-hidden border-[3px] border-white shadow-md">
                        <Image
                            src="/portfolio professional image.png"
                            alt="REHAN AHMED"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </header>

                <div className="flex flex-col md:grid md:grid-cols-[30%_70%] flex-1">
                    {/* Sidebar (Left) - Darker Warm Grey */}
                    <aside className="bg-[#EAE8E6] p-6 space-y-8 border-b md:border-b-0 md:border-r border-gray-300 h-auto md:h-full">
                        {/* Contact */}
                        <section>
                            <h3 className="text-base font-bebas text-[#000000] border-b-2 border-[#4A70A9] pb-1 mb-3">Contact</h3>
                            <div className="space-y-2.5 text-xs text-gray-800 font-medium">
                                <a href="tel:+923360007313" className="flex items-center gap-2 hover:text-[#4A70A9] transition-colors">
                                    <FaPhone className="text-[#4A70A9] shrink-0" />
                                    <span>+92 336 0007313</span>
                                </a>
                                <a href="mailto:rehan007313@gmail.com" className="flex items-center gap-2 hover:text-[#4A70A9] transition-colors">
                                    <FaEnvelope className="text-[#4A70A9] shrink-0" />
                                    <span className="truncate">rehan007313@gmail.com</span>
                                </a>
                                <a href="https://github.com/rehan363" className="flex items-center gap-2 hover:text-[#4A70A9] transition-colors">
                                    <FaGithub className="text-[#4A70A9] shrink-0" />
                                    <span>rehan363</span>
                                </a>
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-[#4A70A9] shrink-0" />
                                    <span>Islamabad, Pakistan</span>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-base font-bebas text-[#000000] border-b-2 border-[#4A70A9] pb-1 mb-3">Education</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-[#000000] font-bold text-xs leading-tight uppercase">BS in Computer Science</div>
                                    <div className="text-[#4A70A9] text-[10px] font-mono mb-0.5 font-bold">University of the Punjab</div>
                                    <div className="text-gray-600 text-[10px] font-semibold">2023 — 2027</div>
                                </div>
                                <div>
                                    <div className="text-[#000000] font-bold text-xs leading-tight uppercase">AI Engineering Diploma</div>
                                    <div className="text-[#4A70A9] text-[10px] font-mono mb-0.5 font-bold">PIAIC (Air University)</div>
                                    <div className="text-gray-600 text-[10px] font-semibold">2023 — Present</div>
                                    <p className="text-[10px] text-gray-600 mt-1 leading-tight">Generative AI, Cloud Native Computing & Agentic Systems.</p>
                                </div>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h3 className="text-base font-bebas text-[#000000] border-b-2 border-[#4A70A9] pb-1 mb-3">Technical Toolbox</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {["Python", "TypeScript", "Next.js", "FastAPI", "Django", "SQLAlchemy", "OpenAI Realtime API", "OpenAI Agents SDK", "Google AI SDK", "Claude Code", "Gemini CLI", "LiveKit Voice Agents", "LangChain", "Docker", "CI/CD Workflows", "Kubernetes", "Fly.io", "Vercel", "MongoDB", "PostgreSQL", "React", "Redis", "VAPI", "TailwindCSS"].map(tech => (
                                    <span key={tech} className="px-1.5 py-0.5 bg-white border border-gray-300 text-[10px] text-gray-800 rounded-sm font-semibold shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Languages */}
                        <section>
                            <h3 className="text-base font-bebas text-[#000000] border-b-2 border-[#4A70A9] pb-1 mb-3">Languages</h3>
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
                    <main className="p-6 md:p-8 pt-6 space-y-6 bg-[#F3F2F0]">
                        {/* Experience */}
                        <section>
                            <h2 className="text-xl font-bebas text-[#000000] mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#4A70A9] rounded-full"></span>
                                PROFESSIONAL EXPERIENCE
                            </h2>

                            <div className="space-y-5 border-l-2 border-gray-300 ml-1 pl-5">
                                {/* Aptive Mind */}
                                <div className="relative group">
                                    <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 bg-[#4A70A9] rounded-full border-2 border-[#F3F2F0]"></div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="text-sm font-bold text-[#000000] uppercase">Full Stack AI Developer</h3>
                                        <span className="font-mono text-[10px] text-gray-600 font-bold bg-[#Eae8e6] px-1.5 rounded">Nov 2025 — Present</span>
                                    </div>
                                    <div className="text-[#4A70A9] text-xs font-bold mb-1 uppercase tracking-wide">Aptive Mind</div>
                                    <p className="text-xs text-gray-700 leading-snug font-medium text-justify">
                                        Architecting enterprise-grade full-stack solutions. Integrating Python/FastAPI backends with Next.js frontends to deliver high-performance AI-powered applications.
                                    </p>
                                </div>

                                {/* Auroxa Tech */}
                                <div className="relative group">
                                    <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 bg-gray-400 rounded-full border-2 border-[#F3F2F0]"></div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="text-sm font-bold text-[#000000] uppercase">Agentic AI Developer (Voice)</h3>
                                        <span className="font-mono text-[10px] text-gray-600 font-bold bg-[#Eae8e6] px-1.5 rounded">Jul — Nov 2025</span>
                                    </div>
                                    <div className="text-[#4A70A9] text-xs font-bold mb-1 uppercase tracking-wide">Auroxa Tech</div>
                                    <p className="text-xs text-gray-700 leading-snug font-medium text-justify">
                                        Engineered agentic systems using VAPI and OpenAI (Realtime API). Implemented robust deployment pipelines using Docker and Nginx, optimized with Redis caching.
                                    </p>
                                </div>

                                {/* VisionAI Mind */}
                                <div className="relative group">
                                    <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 bg-gray-400 rounded-full border-2 border-[#F3F2F0]"></div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="text-sm font-bold text-[#000000] uppercase">Python AI Developer</h3>
                                        <span className="font-mono text-[10px] text-gray-600 font-bold bg-[#Eae8e6] px-1.5 rounded">Jan — Jun 2025</span>
                                    </div>
                                    <div className="text-[#4A70A9] text-xs font-bold mb-1 uppercase tracking-wide">VisionAI Mind (German Startup)</div>
                                    <p className="text-xs text-gray-700 leading-snug font-medium text-justify">
                                        Developed mission-critical RAG (Retrieval-Augmented Generation) systems and knowledge extraction pipelines. Optimized vector embeddings and scaled AI agent architectures.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section className="mt-2">
                            <h2 className="text-xl font-bebas text-[#000000] mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#4A70A9] rounded-full"></span>
                                NOTABLE PROJECTS
                            </h2>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="bg-white border border-gray-300 p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-[#000000]">The Humanoid Blueprint</h4>
                                        <span className="text-[9px] font-mono text-[#4A70A9] uppercase font-bold">humanoid-blueprint.com</span>
                                    </div>
                                    <p className="text-[11px] text-gray-700 mb-1.5 font-medium leading-tight text-justify">
                                        Mastering Physical AI through VLA models & robotic autonomy. A spec-driven guide for bridging the gap between digital brains and humanoid bodies using ROS 2 & Isaac Sim.
                                    </p>
                                    <div className="text-[9px] font-mono text-gray-500 font-bold">ROS 2 • NVIDIA Isaac Sim • VLA Models</div>
                                </div>

                                <div className="bg-white border border-gray-300 p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-[#000000]">AI Receptionist Sara</h4>
                                        <span className="text-[9px] font-mono text-[#4A70A9] uppercase font-bold text-right leading-none">github.com/innovasaleslab-dev/</span>
                                    </div>
                                    <p className="text-[11px] text-gray-700 mb-1.5 font-medium leading-tight text-justify">
                                        Mission-critical AI receptionist for specialty clinics. Meet Sara: autonomously orchestrating patient qualification for HRT programs, Healthie EHR appointment booking, and real-time Vapi outbound engagement.
                                    </p>
                                    <div className="text-[9px] font-mono text-gray-500 font-bold">FastAPI • Healthie EHR • Vapi • Twilio</div>
                                </div>

                                <div className="bg-white border border-gray-300 p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-[#000000]">Quizzly.AI</h4>
                                        <span className="text-[9px] font-mono text-[#4A70A9] uppercase font-bold text-right leading-none">quizgenerator-eta.vercel.app</span>
                                    </div>
                                    <p className="text-[11px] text-gray-700 mb-1.5 font-medium leading-tight text-justify">
                                        AI-powered quiz generation platform. Uses Google ADK and OpenRouter to generate adaptive, on-demand MCQ quizzes on any topic with instant feedback and session persistence.
                                    </p>
                                    <div className="text-[9px] font-mono text-gray-500 font-bold">Next.js 14 • FastAPI • Google ADK • PostgreSQL</div>
                                </div>


                                <div className="bg-white border border-gray-300 p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-[#000000]">Barber Booking Agent</h4>
                                        <span className="text-[9px] font-mono text-[#4A70A9] uppercase font-bold text-right leading-none">LiveKit Voice Booking</span>
                                    </div>
                                    <p className="text-[11px] text-gray-700 mb-1.5 font-medium leading-tight text-justify">
                                        High-performance AI barber receptionist built on LiveKit. Autonomously handles incoming booking calls, checks real-time availability, and captures appointments directly into the database with sub-400ms latency.
                                    </p>
                                    <div className="text-[9px] font-mono text-gray-500 font-bold">LiveKit • OpenAI Realtime • FastAPI • SQLAlchemy</div>
                                </div>

                                <div className="bg-white border border-gray-300 p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-[#000000]">OUIIMI Marketplace</h4>
                                        <span className="text-[9px] font-mono text-[#4A70A9] uppercase font-bold">ouiimi.com</span>
                                    </div>
                                    <p className="text-[11px] text-gray-700 mb-1.5 font-medium leading-tight">
                                        Fair-revenue service marketplace with real-time scheduling. Features complex multi-staff calendar management and split-payment processing via Stripe.
                                    </p>
                                    <div className="text-[9px] font-mono text-gray-500 font-bold">Next.js 14 • MongoDB • Stripe Connect</div>
                                </div>


                                <div className="bg-white border border-gray-300 p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-[#000000]">VisionMind RAG</h4>
                                        <span className="text-[9px] font-mono text-[#4A70A9] uppercase font-bold text-right leading-none">AI Knowledge Agent</span>
                                    </div>
                                    <p className="text-[11px] text-gray-700 mb-1.5 font-medium leading-tight text-justify">
                                        Autonomous RAG system for corporate intelligence. Crawls company domains, generates high-dimensional vector embeddings, and provides a grounded chat interface for domain-specific knowledge recovery.
                                    </p>
                                    <div className="text-[9px] font-mono text-gray-500 font-bold">Python • FastAPI • OpenAI • Pinecone</div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>

                {/* Footer Decor */}
                <div className="h-1.5 bg-[#4A70A9] w-full"></div>
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
