"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projects';

// --- TYPES & INTERFACES ---
interface ProjectTerminalProps {
    project: Project;
    onClose: () => void;
}

type TerminalTab = 'CONTEXT' | 'LOGIC' | 'ARCH' | 'METRICS';

// --- ASSETS ---
const NOISE_PATTERN = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E";

// --- SUB-COMPONENTS ---

// 1. Architecture Node ("Server Blade" Style)
const ArchNode = ({ icon, label, sub, status = 'active', delay = 0, type = 'standard' }: { icon: string, label: string, sub: string, status?: 'active' | 'idle' | 'processing', delay?: number, type?: 'standard' | 'core' }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.4 }}
        className={`
            relative flex flex-col p-4 rounded-sm border backdrop-blur-sm transition-all duration-300 min-w-[140px] group
            ${type === 'core'
                ? 'bg-zinc-900/90 border-[#D10000]/40 shadow-[0_0_20px_rgba(209,0,0,0.15)]'
                : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-600'
            }
        `}
    >
        {/* Status LED */}
        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
            <div className={`w-1.5 h-1.5 rounded-full ${status === 'active' || status === 'processing' ? (type === 'core' ? 'bg-[#D10000] shadow-[0_0_8px_#D10000]' : 'bg-emerald-500 shadow-[0_0_8px_#10B981]') : 'bg-zinc-700'}`} />
            <span className="text-[7px] font-mono text-zinc-600 tracking-wider">PID: {Math.floor(Math.random() * 9000) + 1000}</span>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center gap-2">
            <div className="text-2xl opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500">{icon}</div>
            <div>
                <div className={`text-[10px] uppercase font-bold tracking-wider ${type === 'core' ? 'text-white' : 'text-zinc-300'}`}>{label}</div>
                <div className="text-[9px] font-mono text-zinc-500 mt-1">{sub}</div>
            </div>
        </div>

        {/* Hover Payload (Dense Data) */}
        <div className="absolute top-full left-0 mt-2 w-[180px] bg-black border border-zinc-800 p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            <div className="text-[8px] font-mono text-zinc-400 space-y-1">
                <div className="flex justify-between"><span>mem_usage:</span> <span className="text-zinc-200">24MB</span></div>
                <div className="flex justify-between"><span>threads:</span> <span className="text-zinc-200">12</span></div>
                <div className="flex justify-between"><span>socket_id:</span> <span className="text-zinc-200">unix:8080</span></div>
            </div>
        </div>
    </motion.div>
);

// 2. Data Connector (Animated SVG Path)
const DataStream = ({ delay = 0 }: { delay?: number }) => (
    <div className="relative flex-1 h-[1px] bg-zinc-800 mx-4 overflow-hidden hidden md:block">
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: delay }}
            className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-80"
        />
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px] font-mono text-zinc-700 bg-[#0A0A0A] px-1">
            JSON/HTTPS
        </div>
    </div>
);

// 3. Metric Bar
const MetricBar = ({ label, value, max, unit }: { label: string, value: number, max: number, unit: string }) => (
    <div className="mb-5">
        <div className="flex justify-between items-end mb-1">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{label}</span>
            <span className="text-[10px] font-mono text-zinc-300">{value}{unit}</span>
        </div>
        <div className="h-1 w-full bg-zinc-900 overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(value / max) * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-zinc-500"
            />
        </div>
    </div>
);

// --- MAIN COMPONENT ---
export default function ProjectTerminal({ project, onClose }: ProjectTerminalProps) {
    const [activeTab, setActiveTab] = useState<TerminalTab>('CONTEXT');

    // Lock Body Scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    // Escape Key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] flex items-center justify-center font-sans p-0 md:p-6 lg:p-12"
        >
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md" onClick={onClose} />

            {/* TERMINAL FRAME */}
            <motion.div
                initial={{ scale: 0.98, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full md:max-w-[1500px] md:h-[88vh] bg-[#0A0A0A] border border-zinc-800 md:rounded-sm shadow-2xl flex flex-col md:flex-row overflow-hidden z-20 group"
            >
                {/* GLOBAL NOISE */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay" style={{ backgroundImage: `url("${NOISE_PATTERN}")` }} />

                {/* --- 1. SIDEBAR (Command Rail) --- */}
                <nav className="w-full md:w-64 bg-[#080808] border-r border-zinc-800 flex flex-col shrink-0 relative z-30">

                    {/* Identity Block */}
                    <div className="p-6 border-b border-zinc-800">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'ONLINE' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                <span className="text-[9px] font-mono text-zinc-500 tracking-[0.2em]">{project.status}</span>
                            </div>
                            <div className="text-[8px] font-mono text-zinc-700">SHA: 7a8b2c</div>
                        </div>
                        <h2 className="text-xl font-bebas text-zinc-100 leading-none tracking-wide mb-2">{project.title}</h2>
                        <div className="text-[9px] font-mono text-zinc-600">
                            repo: internal/{project.id.toLowerCase()}
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex-1 flex flex-row md:flex-col overflow-x-auto md:overflow-visible scrollbar-none bg-[#080808]">
                        {[
                            ['CONTEXT', '01 / CASE STUDY'],
                            ['LOGIC', '02 / SOURCE CODE'],
                            ['ARCH', '03 / TOPOLOGY'],
                            ['METRICS', '04 / TELEMETRY']
                        ].map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key as TerminalTab)}
                                className={`
                                     relative px-6 py-4 text-left text-[10px] font-mono tracking-[0.15em] transition-all duration-200 border-b border-zinc-800/50 md:border-b-0
                                     ${activeTab === key ? 'text-white bg-zinc-900/80 pl-7 border-l-2 border-l-[#D10000]' : 'text-zinc-600 hover:text-zinc-400 hover:bg-zinc-900/30 border-l-2 border-l-transparent'}
                                 `}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Footer Info */}
                    <div className="hidden md:block p-6 border-t border-zinc-800 bg-[#060606]">
                        <div className="space-y-3">
                            <div className="flex justify-between text-[9px] font-mono text-zinc-600">
                                <span>Build</span>
                                <span className="text-zinc-400">Passing (12s)</span>
                            </div>
                            <div className="flex justify-between text-[9px] font-mono text-zinc-600">
                                <span>Deploy</span>
                                <span className="text-zinc-400">Production</span>
                            </div>
                            <div className="flex justify-between text-[9px] font-mono text-zinc-600">
                                <span>Region</span>
                                <span className="text-zinc-400">us-east-1</span>
                            </div>
                        </div>
                    </div>
                </nav>


                {/* --- 2. MAIN VIEWPORT --- */}
                <main className="flex-1 flex flex-col relative bg-[#050505] min-w-0">

                    {/* Top Bar */}
                    <header className="h-12 border-b border-zinc-800 flex items-center justify-between px-6 bg-[#050505] sticky top-0 z-40">
                        <div className="flex items-center gap-6 text-[9px] font-mono text-zinc-600">
                            <span>root@cluster-01:~/{project.id.toLowerCase()}</span>
                            <span className="hidden md:inline text-zinc-700">|</span>
                            <span className="hidden md:inline text-zinc-500">master*</span>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-8 h-8 flex items-center justify-center hover:bg-zinc-800 transition-colors rounded-sm text-zinc-500"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </header>


                    {/* CONTENT CANVAS */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar relative">
                        <AnimatePresence mode='wait'>

                            {/* === TAB: 01 CASE STUDY === */}
                            {activeTab === 'CONTEXT' && (
                                <motion.div
                                    key="context"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="min-h-full flex flex-col"
                                >
                                    {/* Header Image - Full Width, High Fidelity */}
                                    <div className="w-full relative border-b border-zinc-800 group">
                                        <div className="aspect-[21/9] w-full relative overflow-hidden bg-[#0A0A0A]">
                                            {project.image ? (
                                                <Image src={project.image} fill className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 hover:scale-[1.01]" alt="" />
                                            ) : (
                                                <div className="w-full h-full bg-[#050505] flex items-center justify-center relative overflow-hidden">
                                                    <div className="absolute inset-0 opacity-10"
                                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30' stroke='white' stroke-width='1' fill='none' opacity='0.2'/%3E%3C/svg%3E")` }}
                                                    />
                                                    <div className="text-zinc-700 font-mono text-sm tracking-[0.5em] uppercase">NO_VISUAL_DATA</div>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                                        </div>
                                        <div className="absolute bottom-6 right-6 flex gap-2">
                                            <div className="px-2 py-1 bg-black/60 backdrop-blur border border-zinc-800 text-[9px] font-mono text-zinc-400">1920x1080</div>
                                            <div className="px-2 py-1 bg-black/60 backdrop-blur border border-zinc-800 text-[9px] font-mono text-zinc-400">RAW_RENDER</div>
                                        </div>
                                    </div>

                                    {/* Layout Columns */}
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[400px]">

                                        {/* Left: Main Content */}
                                        <div className="lg:col-span-8 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800">
                                            <div className="max-w-3xl">
                                                <div className="flex items-center gap-2 mb-6 opacity-50">
                                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">Executive Brief</span>
                                                </div>

                                                <h3 className="text-xl font-bebas text-zinc-100 mb-4 tracking-wide">The Challenge</h3>
                                                <p className="font-sans text-zinc-400 leading-relaxed text-sm lg:text-base mb-10 border-l border-zinc-800 pl-4">
                                                    {project.problem.desc}
                                                </p>

                                                <h3 className="text-xl font-bebas text-zinc-100 mb-4 tracking-wide">The Engineering</h3>
                                                <p className="font-sans text-zinc-400 leading-relaxed text-sm lg:text-base">
                                                    {project.solution.desc}
                                                </p>

                                                {project.link && (
                                                    <div className="mt-8 pt-8 border-t border-zinc-800">
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#D10000] transition-colors font-bebas text-xl tracking-wide group/link"
                                                        >
                                                            <span>INITIATE LIVE SEQUENCE</span>
                                                            <span className="transform transition-transform group-hover/link:translate-x-1">&rarr;</span>
                                                        </a>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Right: Technical Metadata Sidebars */}
                                            <div className="lg:col-span-4 p-8 bg-[#080808] flex flex-col gap-10">
                                                <div>
                                                    <h4 className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Dependencies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech_stack.map(tech => (
                                                            <span key={tech} className="px-2 py-1 text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-sm">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Metrics</h4>
                                                    <ul className="space-y-3">
                                                        <li className="flex justify-between text-[11px] font-mono border-b border-zinc-800/50 pb-2">
                                                            <span className="text-zinc-500">Daily Req</span>
                                                            <span className="text-white">1.2M+</span>
                                                        </li>
                                                        <li className="flex justify-between text-[11px] font-mono border-b border-zinc-800/50 pb-2">
                                                            <span className="text-zinc-500">Error Rate</span>
                                                            <span className="text-emerald-500">&lt;0.01%</span>
                                                        </li>
                                                        <li className="flex justify-between text-[11px] font-mono border-b border-zinc-800/50 pb-2">
                                                            <span className="text-zinc-500">Avg Latency</span>
                                                            <span className="text-white">{project.performance.latency}</span>
                                                        </li>
                                                    </ul>
                                 </div>
                                </div>
                            </div>
                </div>
            </motion.div>
                        )}


            {/* === TAB: 02 SOURCE CODE === */}
            {activeTab === 'LOGIC' && (
                <motion.div
                    key="logic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col bg-[#050505]"
                >
                    {/* IDE Toolbar */}
                    <div className="h-9 border-b border-zinc-800 flex items-center px-4 gap-4 bg-[#080808]">
                        <div className="flex items-center gap-2 px-3 py-1 bg-[#050505] border-t border-l border-r border-zinc-800 rounded-t-sm translate-y-[1px]">
                            <span className="text-[9px] font-mono text-zinc-300">core_logic.ts</span>
                        </div>
                        <span className="text-[9px] font-mono text-zinc-600">utils.py</span>
                        <span className="text-[9px] font-mono text-zinc-600">config.json</span>
                    </div>

                    {/* Editor Body */}
                    <div className="flex-1 flex overflow-hidden">
                        {/* Line Numbers */}
                        <div className="w-10 bg-[#080808] border-r border-zinc-800 pt-6 flex flex-col items-end px-2 text-[9px] font-mono text-zinc-700 select-none opacity-50">
                            {Array.from({ length: 25 }).map((_, i) => <div key={i} className="leading-6">{i + 1}</div>)}
                        </div>

                        {/* Code Area */}
                        <div className="flex-1 p-6 overflow-auto bg-[#050505]">
                            <pre className="font-mono text-xs md:text-sm leading-6 text-zinc-400">
                                <code className="language-typescript">
                                    {`import { NeuralCore, VectorDB } from '@internal/sys';
import { StreamProtocol } from '@internal/net';

/**
 * ==========================================
 * Project: ${project.codename}
 * License: PROPRIETARY / CONFIDENTIAL
 * ==========================================
 */
export class InferenceEngine extends NeuralCore {
    
    private tensors: TensorCache;

    constructor(config: Config) {
        super(config);
        // Initialize TensorRT optimization
        this.tensors = new TensorCache({
            precision: 'FP16',
            cuda_cores: 1024
        });
    }

    /* 
     * Main execution pipeline 
     * Optimizes for throughput > ${project.performance.throughput || '100 req/s'}
     */
    async execute(signal: InputBuffer): Promise<Result> {
        
        const span = this.telemetry.startSpan('inference_cycle');
        
        try {
            // 1. Vectorize & Normalize
            const embeddings = await this.vectorStore.query({
                vector: signal.embedding,
                topK: 12
            });

            // 2. Model Forward Pass
            const logits = await this.model.forward({
                input: embeddings,
                temp: 0.7 
            });

            return this.decode(logits);

        } catch (err) {
            span.recordException(err);
            throw new EngineError(err);
        } finally {
            span.end();
        }
    }
}`}
                                </code>
                            </pre>
                        </div>

                        {/* Debug Sidebar (Right) */}
                        <div className="w-60 border-l border-zinc-800 bg-[#080808] hidden lg:flex flex-col">
                            <div className="p-3 border-b border-zinc-800 text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Local Variables</div>
                            <div className="p-4 space-y-4 text-[9px] font-mono">
                                <div className="bg-zinc-900/50 p-2 rounded border border-zinc-800/50">
                                    <div className="text-[#D10000] mb-1">this.tensors</div>
                                    <div className="text-zinc-500">allocated: 2048MB</div>
                                </div>
                                <div className="bg-zinc-900/50 p-2 rounded border border-zinc-800/50">
                                    <div className="text-emerald-500 mb-1">signal.state</div>
                                    <div className="text-zinc-500">'READY'</div>
                                </div>
                                <div className="bg-zinc-900/50 p-2 rounded border border-zinc-800/50">
                                    <div className="text-blue-400 mb-1">threads.active</div>
                                    <div className="text-zinc-500">24 / 32</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}


            {/* === TAB: 03 TOPOLOGY === */}
            {activeTab === 'ARCH' && (
                <motion.div
                    key="arch"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col"
                >
                    {/* Diagram Canvas */}
                    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 relative overflow-hidden">
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                        <div className="text-[9px] font-mono text-zinc-600 mb-8 absolute top-8 left-8">
                            SYSTEM_TOPOLOGY_V4.2 // LIVE_VIEW
                        </div>

                        <div className="flex items-center gap-6 p-12 border border-zinc-800/40 rounded-xl bg-zinc-900/10 backdrop-blur-sm relative z-10">

                            <ArchNode icon="🌐" label="Client" sub="Next.js" status="idle" delay={0.1} />

                            <DataStream delay={0} />

                            <ArchNode icon="🛡️" label="Gateway" sub="Nginx/WAF" status="active" delay={0.2} />

                            <DataStream delay={1} />

                            <ArchNode icon="🧠" label="Neural Core" sub={project.codename} status="processing" type="core" delay={0.3} />

                            <DataStream delay={2} />

                            <ArchNode icon="💾" label="Vector DB" sub="Pinecone" status="idle" delay={0.4} />
                        </div>

                        <div className="absolute bottom-8 text-center">
                            <div className="text-[8px] font-mono text-zinc-600 mb-1">TRAFFIC INSPECTOR</div>
                            <div className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-[9px] font-mono text-emerald-500">
                                200 OK • 24ms • 1.2KB
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}


            {/* === TAB: 04 TELEMETRY === */}
            {activeTab === 'METRICS' && (
                <motion.div
                    key="metrics"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full p-8 md:p-12 flex flex-col overflow-auto"
                >
                    <div className="flex items-center justify-between mb-10 border-b border-zinc-800 pb-4">
                        <h3 className="text-2xl font-bebas text-white">Live Telemetry</h3>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <div className="text-[9px] font-mono text-zinc-500">REAL-TIME</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">

                        {/* Visual Bars */}
                        <div className="space-y-6">
                            <MetricBar label="Inference Latency" value={parseInt(project.performance.latency)} max={200} unit="ms" />
                            <MetricBar label="Cache Hit Rate" value={94} max={100} unit="%" />
                            <MetricBar label="GPU Utilization" value={34} max={100} unit="%" />
                            <MetricBar label="Memory" value={4.2} max={16} unit="GB" />
                        </div>

                        {/* Console Log */}
                        <div className="bg-[#030303] border border-zinc-800 rounded-sm flex flex-col h-72 font-mono text-[9px]">
                            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-[#080808]">
                                <span className="text-zinc-500">stdout</span>
                                <span className="text-zinc-700">bash</span>
                            </div>
                            <div className="flex-1 p-4 space-y-1.5 overflow-hidden text-zinc-500 opacity-80">
                                <div>$ init_sequence --force</div>
                                <div className="text-zinc-600">[info] Loading weights from s3://models/{project.codename.toLowerCase()}... (302ms)</div>
                                <div className="text-zinc-600">[info] Weights loaded. VRAM usage: 4.2GB</div>
                                <div className="text-zinc-600">[info] Warmup batch complete.</div>
                                <div className="text-zinc-300">$ start_server --port=8080</div>
                                <div className="text-emerald-600">[success] Server listening on port 8080</div>
                                <div>[req] POST /api/v1/inference - 200 OK (12ms)</div>
                                <div>[req] POST /api/v1/inference - 200 OK (14ms)</div>
                                <div>[req] POST /api/v1/inference - 200 OK (11ms)</div>
                                <div className="animate-pulse">_</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
                </div >

            </main >
        </motion.div >
    </motion.div >
    );
}
