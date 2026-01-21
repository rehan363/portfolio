
export type ProjectCategory = 'SERVICE_MARKETPLACE' | 'LEGAL_AI' | 'CONVERSATIONAL_AI' | 'FULL_STACK';

export type DeploymentStatus = 'ONLINE' | 'OFFLINE' | 'TRAINING' | 'DEPRECATED';

export interface Project {
    id: string;
    codename: string;
    title: string;
    category: ProjectCategory;
    status: DeploymentStatus;
    classification: string;
    tech_stack: string[];
    problem: {
        short: string;
        desc: string;
    };
    solution: {
        short: string;
        desc: string;
    };
    image: string;
    performance: {
        latency: string;
        accuracy: string;
        throughput?: string;
        uptime?: string;
        [key: string]: string | undefined;
    };
}

export const projects: Project[] = [
    {
        id: "PRJ-01",
        codename: "OUIIMI_PF",
        title: "OUIIMI MARKETPLACE",
        category: "SERVICE_MARKETPLACE",
        status: "ONLINE",
        classification: "PRODUCTION // PUBLIC",
        tech_stack: ["Next.js 14", "React 18", "MongoDB", "Stripe", "TailwindCSS"],
        problem: {
            short: "In efficient booking systems",
            desc: "Small service businesses struggle with high platform fees (15-30%), no-shows, and complex booking management, while customers face fragmented discovery and lack of transparency."
        },
        solution: {
            short: "Fair-revenue marketplace",
            desc: "Full-stack marketplace with 5% revenue split model. Features real-time multi-staff scheduling, double-booking prevention, geospatial search, and secure split payments via Stripe."
        },
        image: "/ouiimi_portfolio_thumbnail_1768828611462.png",
        performance: {
            latency: "<50ms",
            accuracy: "100%",
            throughput: "High Concurrency",
            uptime: "99.9%"
        }
    },
    {
        id: "PRJ-02",
        codename: "GOCREATION_AI",
        title: "GOCREATION LEGAL AI",
        category: "LEGAL_AI",
        status: "ONLINE",
        classification: "PRODUCTION // PROPRIETARY",
        tech_stack: ["Next.js 15", "LangGraph", "FastAPI", "OpenAI GPT-4", "Pinecone"],
        problem: {
            short: "Complex business formation",
            desc: "Entrepreneurs in Morocco face bureaucratic hurdles, language barriers, and high legal costs when creating companies, often requiring multiple manual steps and expensive consultation."
        },
        solution: {
            short: "AI Legal Assistant",
            desc: "AI-powered platform combining conversational interfaces with automated legal document generation. Features TALYA (AI assistant), multi-language support (RTL), and dynamic PDF generation."
        },
        image: "/gocreation_landing_page_screenshot_1768829344794.png",
        performance: {
            latency: "120ms",
            accuracy: "99.5%",
            throughput: "Scalable",
            uptime: "99.9%"
        }
    }
];
