
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
        role: "CHIEF TECHNOLOGY OFFICER",
        company: "APTIVE MIND",
        period: "NOV 2025 - PRESENT",
        description: "Leading technology strategy and engineering teams at Islamabad-based tech company. Overseeing product development, technical architecture, and innovation initiatives for AI-powered solutions.",
        achievements: [
            "Established technical vision and product roadmap for AI-powered solutions.",
            "Built and scaled engineering team focusing on cutting-edge AI technologies.",
            "Implemented strategic partnerships and technology stack decisions.",
            "Driving innovation in agentic AI and modern full-stack development."
        ],
        skills: ["Leadership", "Technical Strategy", "Team Building", "AI Architecture", "Product Development"],
        metrics: [
            { label: "Team Size", value: "Growing" },
            { label: "Focus", value: "AI/ML" },
            { label: "Location", value: "Islamabad" }
        ],
        classification: "FULL_TIME // CTO"
    },
    {
        id: "ROLE-02",
        role: "FULL STACK ENGINEER",
        company: "AUROXA TECH",
        period: "JUL 2025 - NOV 2025",
        description: "Led full-stack development projects with focus on AI workflows and infrastructure at Innovista Rawal, DHA Phase-1, Islamabad. Managed deployment pipelines, load balancing, cache optimization, and proxy configurations.",
        achievements: [
            "Architected and deployed agentic AI workflows using OpenAI Agent SDK and LiveKit.",
            "Implemented complete CI/CD pipeline management for production deployments.",
            "Optimized caching strategies with Redis for high-performance applications.",
            "Led project development from conception to deployment with Dapr and Docker.",
            "Managed backend infrastructure with FastAPI and Next.js full-stack integration."
        ],
        skills: ["FastAPI", "VAPI SDK", "OpenAI Agent SDK", "LiveKit", "Dapr", "Docker", "Next.js", "Redis"],
        metrics: [
            { label: "Role", value: "Project Lead" },
            { label: "Stack", value: "Full-Stack" },
            { label: "Focus", value: "AI Workflows" }
        ],
        classification: "FULL_TIME"
    },
    {
        id: "ROLE-03",
        role: "FRONTEND DEVELOPER",
        company: "DOT ESCAPIST",
        period: "AUG 2024 - JUN 2025",
        description: "Developed and maintained full-stack applications with Django backend at G-13, Islamabad. Implemented CRUD operations, managed database connectivity, and optimized UI flows.",
        achievements: [
            "Built complete CRUD operations for multiple production applications.",
            "Integrated Django backend with modern frontend frameworks.",
            "Managed database connectivity and API route handling.",
            "Implemented server actions for optimal performance.",
            "Designed and optimized UI flows for seamless user experience."
        ],
        skills: ["Django", "Next.js", "Database Connectivity", "API Routes", "Server Actions"],
        metrics: [
            { label: "Projects", value: "5+" },
            { label: "Stack", value: "Full-Stack" },
            { label: "Duration", value: "10 Months" }
        ],
        classification: "FULL_TIME"
    },
    {
        id: "ROLE-04",
        role: "FRONTEND DEVELOPER INTERN",
        company: "AL-BASIRR TECHNOLOGIES",
        period: "JUN 2024 - AUG 2024",
        description: "Completed paid internship at NSTP, Islamabad focusing on frontend development. Gained hands-on experience in API connectivity, backend integration, and modern web development practices.",
        achievements: [
            "Mastered API connectivity and management best practices.",
            "Implemented backend integration for multiple client projects.",
            "Gained proficiency in modern frontend frameworks and tools.",
            "Contributed to production-ready applications using Next.js and TailwindCSS."
        ],
        skills: ["Next.js", "HTML5", "TailwindCSS", "API Management", "Backend Integration"],
        metrics: [
            { label: "Type", value: "Paid Intern" },
            { label: "Duration", value: "3 Months" },
            { label: "Location", value: "NSTP, Islamabad" }
        ],
        classification: "INTERNSHIP"
    },
    {
        id: "ROLE-05",
        role: "AI & CLOUD NATIVE STUDENT",
        company: "PIAIC (AIR UNIVERSITY)",
        period: "JUN 2023 - PRESENT",
        description: "Pursuing certified engineering diploma in Artificial Intelligence and Cloud Native technologies at Air University, Islamabad. Building expertise in modern AI frameworks, cloud infrastructure, and full-stack development.",
        achievements: [
            "Mastered Docker containerization and Git version control.",
            "Built full-stack applications with TypeScript, Python, and FastAPI.",
            "Developed expertise in modern frontend frameworks (React, Next.js).",
            "Learned advanced AI concepts with OpenAI Agents SDK, LangGraph, and CrewAI.",
            "Implemented Model Context Protocol (MCP) integrations."
        ],
        skills: ["Docker", "Git", "TypeScript", "Python", "FastAPI", "Next.js", "React", "OpenAI Agents SDK", "LangGraph", "CrewAI", "MCP"],
        metrics: [
            { label: "Program", value: "AI & Cloud" },
            { label: "Institution", value: "Air University" },
            { label: "Status", value: "Active" }
        ],
        classification: "EDUCATION // ONGOING"
    }
];
