
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
    // 1. OUIIMI
    {
        id: "PRJ-01",
        codename: "OUIIMI_PF",
        title: "OUIIMI MARKETPLACE",
        category: "SERVICE_MARKETPLACE",
        status: "ONLINE",
        classification: "PRODUCTION // PUBLIC",
        link: "https://ouiimi.com",
        tech_stack: ["Next.js 14", "React 18", "MongoDB", "Stripe", "TailwindCSS"],
        problem: {
            short: "Inefficient bookings",
            desc: "Small service businesses struggle with high platform fees (15-30%), no-shows, and complex booking management, while customers face fragmented discovery."
        },
        solution: {
            short: "Fair-revenue marketplace",
            desc: "Full-stack marketplace with 5% revenue split model. Features real-time multi-staff scheduling, double-booking prevention, and secure split payments via Stripe."
        },
        image: "/ouiimi_portfolio_thumbnail_1768828611462.png",
        performance: {
            latency: "<50ms",
            accuracy: "100%",
            uptime: "99.9%"
        }
    },
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
        image: "/gocreation_landing_page_screenshot_1768829344794.png",
        performance: {
            latency: "120ms",
            accuracy: "99.5%",
            uptime: "99.9%"
        }
    },
    // 3. MY EXPAT STAYS
    {
        id: "PRJ-03",
        codename: "EXPAT_STAYS",
        title: "MY EXPAT STAYS",
        category: "REAL_ESTATE",
        status: "ONLINE",
        classification: "PRODUCTION // PUBLIC",
        link: "https://myexpatstays.com",
        tech_stack: ["Next.js", "PostgreSQL", "Google Maps API", "Vercel"],
        problem: {
            short: "Trust & Quality",
            desc: "Overseas Pakistanis struggle to find trusted, premium vetted accommodation that meets international standards when visiting or relocating back home."
        },
        solution: {
            short: "Premium Vetted Housing",
            desc: "Curated marketplace for luxury short-term rentals (Margalla View, Sky One Park). Features simple trust-based booking, verified listings, and 'Isa Husain' architectural heritage properties."
        },
        image: "/projects/aerodash.png", // Placeholder mapping for now
        performance: {
            latency: "85ms",
            accuracy: "N/A",
            uptime: "99.9%"
        }
    },
    // 4. THE GOLDEN CHARIOT
    {
        id: "PRJ-04",
        codename: "GOLDEN_CHARIOT",
        title: "THE GOLDEN CHARIOT",
        category: "LUXURY_EVENT",
        status: "ONLINE",
        classification: "PRODUCTION // PUBLIC",
        link: "https://thegoldenchariot.com",
        tech_stack: ["Next.js", "Framer Motion", "Resend", "TailwindCSS"],
        problem: {
            short: "Digital Presence",
            desc: "A luxury wedding venue required a digital presence that matched its physical grandeur, capable of handling high-volume inquiries and visual showcases."
        },
        solution: {
            short: "Immersive Venue Experience",
            desc: "High-performance website featuring cinematic visual storytelling, automated inquiry routing, and SEO optimization for event keywords."
        },
        image: "/projects/luxe.png", // Placeholder
        performance: {
            latency: "60ms",
            accuracy: "100%",
            uptime: "99.99%"
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
        performance: {
            latency: "550ms",
            accuracy: "96%",
            throughput: "Scalable"
        }
    },
];
