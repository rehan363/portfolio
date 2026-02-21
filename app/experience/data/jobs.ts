
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
        role: "FULL STACK ENGINEER",
        company: "APTIVE MIND",
        period: "NOV 2025 — PRESENT",
        description: "Building scalable full-stack applications with modern tech stacks. Working on cutting-edge AI-powered solutions and enterprise-grade systems.",
        achievements: [
            "Building scalable full-stack applications with modern tech stacks.",
            "Architecting enterprise-grade systems for large-scale location data orchestration and AI-powered automation.",
            "Integrating advanced AI-powered solutions into complex business logic."
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
        role: "FULL STACK ENGINEER",
        company: "AUROXA TECH",
        period: "JUL — NOV 2025",
        description: "Led full-stack engineering initiatives. Managed agentic AI workflows, deployment pipelines, load balancing, cache systems, and proxy architectures.",
        achievements: [
            "Led full-stack engineering initiatives and managed high-throughput REST API pipelines.",
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
        role: "FRONTEND DEVELOPER",
        company: "DOT ESCAPIST",
        period: "AUG 2024 — JUN 2025",
        description: "Developed full-stack applications with Django backends. Implemented CRUD operations, optimized UI flows, managed API routes, and built secure server actions.",
        achievements: [
            "Developed full-stack applications with Django backends.",
            "Implemented CRUD operations, optimized UI flows, managed API routes, and built secure server actions."
        ],
        skills: ["Django", "Next.js", "React", "PostgreSQL"],
        metrics: [
            { label: "Type", value: "Full-time" },
            { label: "Duration", value: "10 Months" },
            { label: "Impact", value: "High Impact" }
        ],
        classification: "FULL_TIME"
    },
    {
        id: "ROLE-04",
        role: "FRONTEND DEVELOPER",
        company: "AL-BASIRR TECHNOLOGIES",
        period: "JUN — AUG 2024",
        description: "Gained intensive practical experience in API connectivity and enterprise-level frontend development. Focused on backend integration and responsive user interfaces.",
        achievements: [
            "Gained intensive practical experience in API connectivity and enterprise-level frontend development.",
            "Troubleshot complex REST API errors, verification hurdles, and data conflicts during large-scale integrations.",
            "Focused on backend integration and responsive user interfaces."
        ],
        skills: ["Next.js", "TailwindCSS", "HTML5"],
        metrics: [
            { label: "Type", value: "Internship" },
            { label: "Duration", value: "2 Months" },
            { label: "Level", value: "Foundation" }
        ],
        classification: "INTERNSHIP"
    },
    {
        id: "ROLE-05",
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
