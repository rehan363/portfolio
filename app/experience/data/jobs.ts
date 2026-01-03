
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
        role: "SENIOR SYSTEM ARCHITECT",
        company: "VORTEX DYNAMICS",
        period: "2023 - PRESENT",
        description: "Leading the architectural overhaul of legacy financial systems into distributed microservices. Orchestrating high-availability clusters for real-time payments.",
        achievements: [
            "Architected a distributed ledger system handling $50M+ daily volume.",
            "Migrated monolithic Java codebase to Go microservices in 8 months.",
            "Implemented 'Zero-Trust' security mesh across 4 global regions.",
            "Reduced AWS infrastructure costs by 35% via spot instance orchestration."
        ],
        related_projects: ["EXP-03"], // Aligns with Algorithmic Trader
        skills: ["Kubernetes", "Go", "Kafka", "AWS", "Terraform"],
        metrics: [
            { label: "Uptime", value: "99.99%" },
            { label: "Teams Led", value: "4" },
            { label: "Cost Redux", value: "-35%" }

        ],
        classification: "FULL_TIME // L5"
    },
    {
        id: "ROLE-02",
        role: "FULL STACK ENGINEER",
        company: "NEXUS INNOVATIONS",
        period: "2021 - 2023",
        description: "Core developer for the flagship SaaS product. Implemented the real-time collaboration engine using WebSockets and CRDTs.",
        achievements: [
            "Built a proprietary CRDT engine for real-time conflict resolution.",
            "Scaled WebSocket infrastructure to support 250k concurrent connection.",
            "Led the migration to Next.js App Router, improving LCP by 40%.",
            "Designed the 'Enterprise RAG' chatbot prototype."
        ],
        related_projects: ["EXP-02"], // Aligns with Enterprise Chat
        skills: ["React", "Node.js", "Redis", "WebSockets", "Postgres"],
        metrics: [
            { label: "Users", value: "250k+" },
            { label: "Latency", value: "<50ms" }
        ],
        classification: "FULL_TIME"
    },
    {
        id: "ROLE-03",
        role: "FRONTEND SPECIALIST",
        company: "AERO DESIGN LABS",
        period: "2019 - 2021",
        description: "Crafting pixel-perfect, motion-heavy interfaces for luxury automotive clients. Specialized in WebGL and 3D product configurators.",
        achievements: [
            "Developed the 3D car configurator for a major EV launch.",
            "Won 'Site of the Day' for the 'Vision Air' campaign.",
            "Optimized Three.js shaders to run at 60fps on mobile devices."
        ],
        related_projects: ["EXP-04"], // Aligns with Vision
        skills: ["Three.js", "GSAP", "Vue", "WebGL", "Blender"],
        metrics: [
            { label: "Awards", value: "3" },
            { label: "Conversion", value: "+15%" }
        ],
        classification: "CONTRACT"
    }
];
