"use client";
import React from 'react';
import SectionWrapper from "./SectionWrapper";

const steps = [
    {
        id: "01",
        phase: "DISCOVERY_&_AUDIT",
        action: "DECONSTRUCT",
        description: "Analyzing system requirements, identifying bottlenecks, and defining core architectural constraints.",
        output: "Technical Specification Doc"
    },
    {
        id: "02",
        phase: "SYSTEM_ARCHITECTURE",
        action: "DESIGN",
        description: "Mapping data flows, selecting optimal tech stacks, and designing scalable component hierarchies.",
        output: "Architecture Diagram"
    },
    {
        id: "03",
        phase: "IMPLEMENTATION",
        action: "EXECUTE",
        description: "Writing clean, type-safe production code. Focusing on performance metrics and modular reusability.",
        output: "Production Build"
    },
    {
        id: "04",
        phase: "QUALITY_ASSURANCE",
        action: "OPTIMIZE",
        description: "Rigorous testing, enhancing load times, and verifying accessibility standards before deployment.",
        output: "Deployment Success"
    }
];

export default function MethodologySection() {
    return (
        <SectionWrapper id="process">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">
                        PROBLEM SOLVING <span className="text-[#D10000]">MATRIX</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
                        // EXECUTION_ALGORITHM
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[19px] top-6 bottom-6 w-px bg-white/10 md:left-1/2 md:-ml-px"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>

                                {/* Content Block */}
                                <div className="flex-1 w-full text-left md:text-right group-even:text-left">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <div className="text-[10px] font-mono text-[#D10000] mb-2 tracking-widest uppercase border border-[#D10000]/20 px-2 py-1 inline-block">
                                            {step.phase}
                                        </div>
                                        <h3 className="text-3xl font-bebas text-white mb-3">
                                            {step.action}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                            {step.description}
                                        </p>
                                        <div className="mt-4 text-[10px] font-mono text-gray-600 uppercase">
                                            Output: <span className="text-gray-400">{step.output}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="relative z-10 flex-shrink-0 w-10 h-10 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#D10000] group-hover:bg-[#D10000] transition-colors duration-500">
                                    <span className="text-[10px] font-mono font-bold text-white">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Empty Spacer to balance the flex row */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
