
export type ProjectCategory = 'SERVICE_MARKETPLACE' | 'LEGAL_AI' | 'REAL_ESTATE' | 'LUXURY_EVENT' | 'CONVERSATIONAL_AI' | 'FULL_STACK' | 'PROPRIETARY';

export type DeploymentStatus = 'ONLINE' | 'OFFLINE' | 'TRAINING' | 'DEPRECATED' | 'CONFIDENTIAL';

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
    link?: string; // Live URL
    image?: string; // Optional now, we handle missing images
    performance: {
        latency: string;
        accuracy: string;
        throughput?: string;
        uptime?: string;
        [key: string]: string | undefined;
    };
}

export const projects: Project[] = [

    // 2. GOCREATION
    {
        id: "PRJ-02",
        codename: "GOCREATION_AI",
        title: "GO CREATION",
        category: "LEGAL_AI",
        status: "ONLINE",
        classification: "PRODUCTION // PROPRIETARY",
        link: "https://gocreation.ma",
        tech_stack: ["Next.js 15", "Talya AI", "LangGraph", "FastAPI", "OpenAI GPT-4", "Pinecone"],
        problem: {
            short: "Complex formation",
            desc: "Entrepreneurs in Morocco face bureaucratic hurdles and high legal costs when creating companies (SARL & SARL AU), often requiring 7+ days and expensive consultation."
        },
        solution: {
            short: "AI Legal Assistant",
            desc: "AI-powered platform featuring 'TALYA', an automated legal assistant. Generates compliant legal documents in minutes, handles domiciliation, and streamlines the entire 7-day formation process."
        },
        image: "/projects/gocreation.png",
        performance: {
            latency: "120ms",
            accuracy: "99.5%",
            uptime: "99.9%"
        }
    },
    // 5. JORDAN VOICE AGENT
    {
        id: "PRJ-05",
        codename: "JORDAN_VOICE",
        title: "JORDAN VOICE AGENT",
        category: "CONVERSATIONAL_AI",
        status: "ONLINE",
        classification: "AI SYSTEM // LIVEKIT",
        tech_stack: ["LiveKit", "FastAPI", "OpenAI Realtime API", "Python"],
        problem: {
            short: "Support Scalability",
            desc: "Handling high volumes of inbound customer support calls with human agents was costly and led to long wait times."
        },
        solution: {
            short: "Real-time Voice Support",
            desc: "Low-latency voice agent capable of natural, interruptible conversations. Handles customer queries, processes tickets, and escalates complex issues."
        },
        image: "/projects/jordan_voice.png",
        performance: {
            latency: "400ms", // Voice-to-voice latency
            accuracy: "95%",
            throughput: "50 Concurrent Calls"
        }
    },
    // 6. FONTIS WATER VOICE AGENT
    {
        id: "PRJ-06",
        codename: "FONTIS_CORE",
        title: "FONTIS CRM AGENT",
        category: "CONVERSATIONAL_AI",
        status: "ONLINE",
        classification: "AI SYSTEM // VAPI",
        tech_stack: ["Vapi.ai", "FastAPI", "PostgreSQL", "CRM Integration"],
        problem: {
            short: "Lead Registration",
            desc: "Manual registration of new water service customers was error-prone and labor-intensive during peak hours."
        },
        solution: {
            short: "Automated Onboarding",
            desc: "Voice agent that identifies existing customers via DB lookup and registers new ones by collecting details and dispatching secure registration forms via SMS."
        },
        image: "/projects/fontis_agent.png",
        performance: {
            latency: "600ms",
            accuracy: "98%",
            uptime: "99.9%"
        }
    },
    // 7. HVAC APPOINTMENT AGENT
    {
        id: "PRJ-07",
        codename: "HVAC_SCHEDULER",
        title: "HVAC APPOINTMENT BOT",
        category: "CONVERSATIONAL_AI",
        status: "ONLINE",
        classification: "AI SYSTEM // GHL",
        tech_stack: ["GoHighLevel", "Vapi.ai", "Zapier", "Python"],
        problem: {
            short: "Missed Appointments",
            desc: "HVAC service providers were losing revenue due to missed calls and inefficient manual scheduling processes."
        },
        solution: {
            short: "Autonomous Scheduling",
            desc: "Voice agent integrated with GoHighLevel calendar. Qualifies leads, checks availability, and books appointments directly into the CRM."
        },
        image: "/projects/hvac_bot.png",
        performance: {
            latency: "550ms",
            accuracy: "96%",
            throughput: "Scalable"
        }
    },
];
