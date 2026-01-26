"use client";
import React, { useState, useMemo } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiPython, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiGit,
    SiNextdotjs, SiReact, SiTailwindcss,
    SiFastapi, SiDjango, SiPostgresql, SiRedis,
    SiDocker
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { FaProjectDiagram, FaSearch } from "react-icons/fa";
import { HiCube, HiViewGrid, HiViewList } from "react-icons/hi";

type CategoryType = 'foundation' | 'interface' | 'backend' | 'infra' | 'ai';
type ViewMode = 'grid' | 'list';

interface Technology {
    id: string;
    name: string;
    icon: any;
    color: string;
    category: CategoryType;
    proficiency: number;
    proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    yearsExperience: number;
    startDate: string;
    relatedTechs: string[];
    featured?: boolean;
}

const technologies: Technology[] = [
    // Foundation Stack
    { id: 'python', name: 'Python', icon: SiPython, color: '#3776AB', category: 'foundation', proficiency: 95, proficiencyLevel: 'Expert', yearsExperience: 2.5, startDate: '2023-06', relatedTechs: ['fastapi', 'django'], featured: true },
    { id: 'typescript', name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'foundation', proficiency: 90, proficiencyLevel: 'Expert', yearsExperience: 2.0, startDate: '2023-08', relatedTechs: ['nextjs', 'react'], featured: true },
    { id: 'javascript', name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'foundation', proficiency: 85, proficiencyLevel: 'Advanced', yearsExperience: 2.0, startDate: '2023-08', relatedTechs: ['react', 'nextjs'] },
    { id: 'html5', name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'foundation', proficiency: 95, proficiencyLevel: 'Expert', yearsExperience: 2.5, startDate: '2023-06', relatedTechs: ['css', 'tailwind'] },
    { id: 'css', name: 'CSS', icon: SiCss3, color: '#1572B6', category: 'foundation', proficiency: 90, proficiencyLevel: 'Expert', yearsExperience: 2.5, startDate: '2023-06', relatedTechs: ['html5', 'tailwind'] },
    { id: 'git', name: 'Git', icon: SiGit, color: '#F05032', category: 'foundation', proficiency: 90, proficiencyLevel: 'Expert', yearsExperience: 2.5, startDate: '2023-06', relatedTechs: [] },

    // Interface Layer
    { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', category: 'interface', proficiency: 95, proficiencyLevel: 'Expert', yearsExperience: 2.0, startDate: '2023-08', relatedTechs: ['react', 'typescript'], featured: true },
    { id: 'react', name: 'React', icon: SiReact, color: '#61DAFB', category: 'interface', proficiency: 90, proficiencyLevel: 'Expert', yearsExperience: 2.0, startDate: '2023-08', relatedTechs: ['nextjs', 'typescript'], featured: true },
    { id: 'tailwind', name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', category: 'interface', proficiency: 95, proficiencyLevel: 'Expert', yearsExperience: 2.0, startDate: '2023-08', relatedTechs: ['nextjs', 'react'] },

    // Backend / Engine Room
    { id: 'fastapi', name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'backend', proficiency: 90, proficiencyLevel: 'Expert', yearsExperience: 1.5, startDate: '2024-01', relatedTechs: ['python', 'postgresql'], featured: true },
    { id: 'django', name: 'Django', icon: SiDjango, color: '#092E20', category: 'backend', proficiency: 80, proficiencyLevel: 'Advanced', yearsExperience: 1.0, startDate: '2024-08', relatedTechs: ['python', 'postgresql'] },
    { id: 'postgresql', name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'backend', proficiency: 85, proficiencyLevel: 'Advanced', yearsExperience: 1.5, startDate: '2024-01', relatedTechs: ['fastapi', 'django'] },
    { id: 'redis', name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'backend', proficiency: 75, proficiencyLevel: 'Advanced', yearsExperience: 1.0, startDate: '2024-06', relatedTechs: ['fastapi'] },

    // Infrastructure
    { id: 'docker', name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'infra', proficiency: 85, proficiencyLevel: 'Advanced', yearsExperience: 1.5, startDate: '2024-01', relatedTechs: ['fastapi', 'nextjs'], featured: true },
    { id: 'dapr', name: 'Dapr', icon: HiCube, color: '#0D2192', category: 'infra', proficiency: 70, proficiencyLevel: 'Intermediate', yearsExperience: 0.5, startDate: '2025-07', relatedTechs: ['docker'] },

    // AI Arsenal
    { id: 'openai', name: 'OpenAI Agents SDK', icon: TbBrandOpenai, color: '#10A37F', category: 'ai', proficiency: 90, proficiencyLevel: 'Expert', yearsExperience: 1.5, startDate: '2024-01', relatedTechs: ['langgraph', 'python'] },
    { id: 'langgraph', name: 'LangGraph', icon: FaProjectDiagram, color: '#1C3C3C', category: 'ai', proficiency: 85, proficiencyLevel: 'Advanced', yearsExperience: 1.0, startDate: '2024-06', relatedTechs: ['openai', 'python'] },
    { id: 'crewai', name: 'CrewAI', icon: FaProjectDiagram, color: '#FF6B6B', category: 'ai', proficiency: 80, proficiencyLevel: 'Advanced', yearsExperience: 1.0, startDate: '2024-06', relatedTechs: ['openai', 'python'] },
    { id: 'mcp', name: 'MCP', icon: FaProjectDiagram, color: '#8B5CF6', category: 'ai', proficiency: 75, proficiencyLevel: 'Advanced', yearsExperience: 0.5, startDate: '2025-06', relatedTechs: ['openai'] },
    { id: 'livekit', name: 'LiveKit', icon: HiCube, color: '#07B0CE', category: 'ai', proficiency: 70, proficiencyLevel: 'Intermediate', yearsExperience: 0.5, startDate: '2025-07', relatedTechs: ['openai'] },
    { id: 'vapi', name: 'VAPI SDK', icon: TbBrandOpenai, color: '#6366F1', category: 'ai', proficiency: 75, proficiencyLevel: 'Advanced', yearsExperience: 0.5, startDate: '2025-07', relatedTechs: ['openai', 'livekit'] },
];

const categories = {
    foundation: { label: 'FOUNDATION STACK', description: 'Core languages & tools', icon: '⚡' },
    interface: { label: 'INTERFACE LAYER', description: 'Frontend frameworks', icon: '🎨' },
    backend: { label: 'ENGINE ROOM', description: 'Backend & databases', icon: '⚙️' },
    infra: { label: 'INFRASTRUCTURE', description: 'DevOps & deployment', icon: '🚀' },
    ai: { label: 'AI ARSENAL', description: 'AI & agentic systems', icon: '🤖' },
};

export default function SkillsSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>('all');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');

    // Calculate stats
    const stats = useMemo(() => {
        const avgProficiency = Math.round(technologies.reduce((sum, t) => sum + t.proficiency, 0) / technologies.length);
        const maxYears = Math.max(...technologies.map(t => t.yearsExperience));
        const categoryCount = Object.keys(categories).length;

        return {
            total: technologies.length,
            avgProficiency,
            maxYears,
            categories: categoryCount,
            byCategory: Object.keys(categories).reduce((acc, cat) => {
                acc[cat as CategoryType] = technologies.filter(t => t.category === cat).length;
                return acc;
            }, {} as Record<CategoryType, number>)
        };
    }, []);

    // Filter technologies
    const filteredTechs = useMemo(() => {
        return technologies.filter(tech => {
            const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || tech.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const featuredTechs = technologies.filter(t => t.featured);
    const groupedTechs = useMemo(() => {
        return Object.keys(categories).reduce((acc, cat) => {
            acc[cat as CategoryType] = filteredTechs.filter(t => t.category === cat);
            return acc;
        }, {} as Record<CategoryType, Technology[]>);
    }, [filteredTechs]);

    return (
        <SectionWrapper id="skills">
            {/* Section Header */}
            <motion.header
                className="mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="space-y-3">
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-1 bg-[#D10000] rounded-full"></div>
                        <span className="text-[11px] font-mono text-gray-600 uppercase tracking-[0.3em]">Technical Stack Overview</span>
                    </div>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bebas text-white leading-[0.85] tracking-tight">
                        TECHNICAL ARSENAL
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="h-px w-24 bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
                        <span className="text-xs text-gray-500 font-mono tabular-nums">{stats.total} Technologies • {stats.maxYears}Y Experience</span>
                    </div>
                </div>
            </motion.header>

            {/* Hero Stats Dashboard */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <StatsCard label="Total Stack" value={stats.total.toString()} sublabel="Technologies mastered" />
                <StatsCard label="Categories" value={stats.categories.toString()} sublabel="Specialized domains" />
                <StatsCard label="Proficiency" value={`${stats.avgProficiency}%`} sublabel="Average expertise" />
            </motion.div>

            {/* Command Bar */}
            <motion.div
                className="mb-12 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {/* Search & View Toggle */}
                <div className="flex items-center gap-4 flex-wrap">
                    {/* Search */}
                    <div className="flex-1 min-w-[250px] relative">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search technologies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-sm pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:border-white/20 focus:bg-white/[0.05] transition-all outline-none"
                        />
                    </div>

                    {/* View Toggle */}
                    <div className="flex gap-2 border border-white/[0.08] rounded-sm p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`px-3 py-2 rounded-sm transition-all ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-gray-600 hover:text-white'}`}
                        >
                            <HiViewGrid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-3 py-2 rounded-sm transition-all ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-gray-600 hover:text-white'}`}
                        >
                            <HiViewList className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Result Count */}
                    <div className="px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-sm">
                        <span className="text-sm font-mono text-gray-400 tabular-nums">{filteredTechs.length} techs</span>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex gap-3 flex-wrap">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-all ${selectedCategory === 'all'
                            ? 'bg-white/10 text-white border-white/20'
                            : 'bg-white/[0.02] text-gray-600 border-white/[0.06] hover:text-white hover:border-white/10'
                            }`}
                    >
                        All ({stats.total})
                    </button>
                    {Object.entries(categories).map(([key, cat]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedCategory(key as CategoryType)}
                            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-all ${selectedCategory === key
                                ? 'bg-white/10 text-white border-white/20'
                                : 'bg-white/[0.02] text-gray-600 border-white/[0.06] hover:text-white hover:border-white/10'
                                }`}
                        >
                            {cat.icon} {cat.label.split(' ')[0]} ({stats.byCategory[key as CategoryType]})
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Featured Stack */}
            {selectedCategory === 'all' && searchQuery === '' && (
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-2xl font-bebas text-white mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#D10000] rounded-full"></span>
                        FEATURED STACK
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                        {featuredTechs.map((tech, index) => (
                            <FeaturedCard key={tech.id} tech={tech} index={index} />
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Category Sections */}
            <AnimatePresence mode="wait">
                {viewMode === 'grid' ? (
                    <motion.div
                        key="grid-view"
                        className="space-y-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {Object.entries(groupedTechs).map(([catKey, techs]) => {
                            if (techs.length === 0) return null;
                            const category = categories[catKey as CategoryType];

                            return (
                                <CategorySection
                                    key={catKey}
                                    category={category}
                                    technologies={techs}
                                />
                            );
                        })}
                    </motion.div>
                ) : (
                    <ListView key="list-view" technologies={filteredTechs} />
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
}

// Stats Card Component
const StatsCard = React.memo(function StatsCard({ label, value, sublabel }: { label: string; value: string; sublabel: string }) {
    return (
        <div className="p-6 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all group">
            <div className="text-5xl font-bebas text-white mb-1 tabular-nums group-hover:text-[#D10000] transition-colors">
                {value}
            </div>
            <div className="text-sm font-medium text-gray-400 mb-1">{label}</div>
            <div className="text-xs font-mono text-gray-600">{sublabel}</div>
        </div>
    );
});

// Featured Card Component  
const FeaturedCard = React.memo(function FeaturedCard({ tech, index }: { tech: Technology; index: number }) {
    const Icon = tech.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -4, boxShadow: `0 12px 32px ${tech.color}20` }}
            className="group relative"
        >
            <div className="p-6 bg-white/[0.03] border border-white/[0.08] hover:border-[var(--tech-color)] transition-all duration-500 h-full flex flex-col"
                style={{ '--tech-color': tech.color } as React.CSSProperties}>
                {/* Icon */}
                <div className="mb-4">
                    <div style={{ color: tech.color, opacity: 0.6 }}>
                        <Icon className="w-12 h-12 group-hover:scale-110 transition-all duration-300" />
                    </div>
                </div>

                {/* Name */}
                <h4 className="text-lg font-semibold text-white mb-3">{tech.name}</h4>

                {/* Proficiency Bar */}
                <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="font-mono text-gray-500">Proficiency</span>
                        <span className="font-mono text-gray-400 tabular-nums">{tech.proficiency}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            style={{ backgroundColor: tech.color }}
                        />
                    </div>
                </div>

                {/* Metrics */}
                <div className="mt-auto pt-3 border-t border-white/[0.06]">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 font-mono">Experience</span>
                        <span className="text-white font-semibold tabular-nums">{tech.yearsExperience} Years</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

// Category Section
const CategorySection = React.memo(function CategorySection({ category, technologies }: { category: any; technologies: Technology[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
        >
            {/* Category Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-bebas text-white tracking-wide">{category.label}</h3>
                    <span className="text-sm font-mono text-gray-600">({technologies.length})</span>
                </div>
                <p className="text-sm text-gray-500 font-mono ml-11">{category.description}</p>
                <div className="h-px bg-gradient-to-r from-white/10 to-transparent mt-3"></div>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                    <TechCard key={tech.id} tech={tech} index={index} />
                ))}
            </div>
        </motion.div>
    );
});

// Tech Card Component
const TechCard = React.memo(function TechCard({ tech, index }: { tech: Technology; index: number }) {
    const Icon = tech.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            whileHover={{ y: -2 }}
            className="group"
        >
            <div className="p-5 bg-white/[0.03] border border-white/[0.08] hover:border-[var(--tech-color)] hover:bg-white/[0.05] transition-all duration-500 h-full"
                style={{ '--tech-color': tech.color } as React.CSSProperties}>
                <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 mt-0.5">
                        <div style={{ color: tech.color, opacity: 0.5 }}>
                            <Icon className="w-7 h-7 group-hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors truncate">{tech.name}</h4>
                        <span className="text-[10px] font-mono text-gray-600 uppercase">{tech.proficiencyLevel}</span>
                    </div>
                </div>

                {/* Proficiency */}
                <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono text-gray-600 uppercase">Proficiency</span>
                        <span className="text-xs font-mono text-gray-500 tabular-nums">{tech.proficiency}%</span>
                    </div>
                    <div className="h-1 bg-white/[0.08] rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-500 opacity-40 group-hover:opacity-100"
                            style={{ width: `${tech.proficiency}%`, backgroundColor: tech.color }} />
                    </div>
                </div>

                {/* Meta Info */}
                <div className="pt-3 border-t border-white/[0.05]">
                    <span className="text-xs font-mono text-gray-600 tabular-nums">{tech.yearsExperience}Y Experience</span>
                </div>
            </div>
        </motion.div>
    );
});

// List View Component
function ListView({ technologies }: { technologies: Technology[] }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-2"
        >
            {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                    <motion.div
                        key={tech.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        className="group flex items-center gap-6 p-4 bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all"
                    >
                        <div className="flex-shrink-0">
                            <div style={{ color: tech.color, opacity: 0.6 }}>
                                <Icon className="w-6 h-6 transition-opacity" />
                            </div>
                        </div>

                        <div className="flex-1 grid grid-cols-[200px_1fr_80px_80px_100px] gap-6 items-center">
                            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                                {tech.name}
                            </span>

                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-1 bg-white/[0.08] rounded-full overflow-hidden">
                                    <div className="h-full rounded-full"
                                        style={{ width: `${tech.proficiency}%`, backgroundColor: tech.color, opacity: 0.5 }} />
                                </div>
                                <span className="text-xs font-mono text-gray-600 tabular-nums w-10">{tech.proficiency}%</span>
                            </div>

                            <span className="text-xs font-mono text-gray-600 text-center tabular-nums">{tech.yearsExperience}Y Experience</span>

                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
