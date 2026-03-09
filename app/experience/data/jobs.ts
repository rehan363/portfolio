
export interface Job {
    id: string;
    role: string;
    company: string;
    period: string;
    logo?: string;
    description: string;
    achievements: string[]; // Deep dive content
    related_projects?: string[]; // IDs of projects in this portfolio
    skills: string[];
    metrics: {
        label: string;
        value: string;
    }[];
    classification: string;
}

export const jobs: Job[] = [
    {
        id: "ROLE-01",
        role: "Full Stack AI Developer",
        company: "APTIVE MIND",
        period: "NOV 2025 — PRESENT",
        description: "Building scalable full-stack applications with modern tech stacks. Working on cutting-edge AI Driven software solutions and enterprise-grade systems.",
        achievements: [
            "Building scalable full-stack applications with modern tech stacks.",
            "Architecting enterprise-grade systems for large-scale location data orchestration and AI-powered automation.",
            "Integrating advanced AI Driven software solutions into complex business logic."
        ],
        skills: ["Next.js", "FastAPI", "Docker", "TypeScript", "Python"],
        metrics: [
            { label: "Type", value: "Full-time" },
            { label: "Status", value: "Active Role" },
            { label: "Impact", value: "High Impact" }
        ],
        classification: "FULL_TIME // ENGINEER"
    },
    {
        id: "ROLE-02",
        role: "Agentic AI Developer (Voice)",
        company: "AUROXA TECH",
        period: "JUL — NOV 2025",
        description: "Led Agentic AI voice development initiatives. Managed voice agentic workflows, deployment pipelines, load balancing, and high-performance proxy architectures.",
        achievements: [
            "Architected high-throughput Agentic AI voice pipelines and managed complex REST API infrastructures.",
            "Engineered bulk data synchronization systems for large-scale datasets with high precision and low latency.",
            "Orchestrated real-time voice agent workflows, optimizing for sub-500ms response times across distributed systems."
        ],
        skills: ["FastAPI", "VAPI SDK", "OpenAI SDK", "LiveKit", "Dapr", "Docker", "Next.js", "Redis"],
        metrics: [
            { label: "Type", value: "Full-time" },
            { label: "Duration", value: "4 Months" },
            { label: "Impact", value: "Critical Impact" }
        ],
        classification: "FULL_TIME"
    },
    {
        id: "ROLE-04",
        role: "Python AI Developer",
        company: "VISIONAI MIND",
        period: "JAN — JUN 2025",
        description: "Developed mission-critical RAG (Retrieval-Augmented Generation) systems and knowledge extraction pipelines for a German AI startup.",
        achievements: [
            "Architected autonomous RAG systems that crawl and index corporate domains with high-precision vector embeddings.",
            "Optimized knowledge recovery workflows using FastAPI and Pinecone, achieving sub-second query latency.",
            "Integrated large-scale language models (LLMs) into production-ready chat interfaces for domain-specific insights."
        ],
        skills: ["Python", "FastAPI", "OpenAI", "Pinecone", "BeautifulSoup", "RAG"],
        metrics: [
            { label: "Type", value: "Contract" },
            { label: "Duration", value: "6 Months" },
            { label: "Impact", value: "Research Driven" }
        ],
        classification: "HYBRID // ENGINEER"
    },
    {
        id: "ROLE-03",
        role: "AI ENGINEERING DIPLOMA",
        company: "PIAIC (AIR UNIVERSITY)",
        period: "JUN 2023 — PRESENT",
        description: "Certified engineering diploma in AI and Cloud Native technologies. Mastering modern development practices, agentic AI frameworks, and cloud-native architectures.",
        achievements: [
            "Certified engineering diploma in AI and Cloud Native technologies.",
            "Mastering modern development practices, agentic AI frameworks, and cloud-native architectures."
        ],
        skills: ["Python", "FastAPI", "Docker", "TypeScript", "Next.js", "React", "OpenAI SDK", "LangGraph", "CrewAI", "MCP", "Git", "TailwindCSS", "HTML5", "CSS"],
        metrics: [
            { label: "Type", value: "Education" },
            { label: "Status", value: "Ongoing" },
            { label: "Level", value: "Certified" }
        ],
        classification: "EDUCATION"
    }
];
