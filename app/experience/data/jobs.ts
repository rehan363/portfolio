
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
        role: "Full Stack AI Developer",
        company: "AUROXA TECH",
        period: "JUL — NOV 2025",
        description: "Led Full Stack AI development initiatives. Managed agentic AI workflows, deployment pipelines, load balancing, cache systems, and proxy architectures.",
        achievements: [
            "Led Full Stack AI development initiatives and managed high-throughput REST API pipelines.",
            "Engineered bulk data synchronization systems for large-scale datasets with 100% accuracy.",
            "Managed agentic AI workflows, deployment pipelines, load balancing, and proxy architectures."
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
