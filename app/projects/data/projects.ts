
export type ProjectCategory = 'SERVICE_MARKETPLACE' | 'LEGAL_AI' | 'REAL_ESTATE' | 'LUXURY_EVENT' | 'CONVERSATIONAL_AI' | 'FULL_STACK' | 'PROPRIETARY' | 'PHYSICAL_AI';

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

    // 1. THE HUMANOID BLUEPRINT
    {
        id: "PRJ-08",
        codename: "HUMANOID_BLUEPRINT",
        title: "THE HUMANOID BLUEPRINT",
        category: "PHYSICAL_AI",
        status: "ONLINE",
        classification: "RESEARCH // BLUEPRINT",
        link: "https://rehan363.github.io/TheHumanoidBlueprint/",
        tech_stack: ["ROS 2", "Isaac Sim", "VLA Models", "Python", "C++", "Jetson/Orin"],
        problem: {
            short: "Digital-Physical Gap",
            desc: "The disconnect between abstract digital intelligence and precise physical execution in complex humanoid robotics."
        },
        solution: {
            short: "VLA Mastery Blueprint",
            desc: "A comprehensive spec-driven guide for mastering the Physical AI stack, from low-latency actuator control to Vision-Language-Action orchestration."
        },
        image: "/humanoid book.jpeg",
        performance: {
            latency: "Ultra-Low",
            accuracy: "High-Fidelity",
            throughput: "Real-time Inference"
        }
    },

    // 2. MID-FLORIDA AI CLINIC
    {
        id: "PRJ-09",
        codename: "SARA_RECEPTIONIST",
        title: "AI RECEPTIONIST SARA",
        category: "CONVERSATIONAL_AI",
        status: "ONLINE",
        classification: "AI CLINIC // MEDICAL",
        link: "https://github.com/InnovaSalesLab-Dev/mid-florida-age-managment",
        tech_stack: ["FastAPI", "Healthie EHR", "Vapi", "Twilio", "GoHighLevel", "Python"],
        problem: {
            short: "Manual Patient Engagement",
            desc: "Specialty clinics face significant operational hurdles in manual patient qualification, outbound outreach, and EHR-integrated appointment scheduling."
        },
        solution: {
            short: "AI Receptionist Sara",
            desc: "Meet Sara: A high-performance AI receptionist integrated with Healthie EHR. She autonomously qualifies patients for hormone replacement programs, orchestrates outbound outreach via Vapi, and manages real-time appointment scheduling and SMS notifications."
        },
        image: "/mid_florida_ai.png",
        performance: {
            latency: "Sub-500ms",
            accuracy: "Medical Grade",
            throughput: "High-Volume Outreach"
        }
    },

    // 3. QUIZZLY.AI
    {
        id: "PRJ-10",
        codename: "QUIZZLY_AI",
        title: "QUIZZLY.AI",
        category: "FULL_STACK",
        status: "ONLINE",
        classification: "AI AGENT // EDTECH",
        link: "https://quizgenerator-eta.vercel.app/",
        tech_stack: ["Next.js 14", "FastAPI", "Google ADK", "OpenRouter LLM", "PostgreSQL", "Tailwind CSS"],
        problem: {
            short: "Topic learning",
            desc: "Traditional quiz preparation is static and often irrelevant to specific learning goals, making personalized assessment difficult."
        },
        solution: {
            short: "AI Quiz Agent",
            desc: "An intelligent platform that uses Google ADK and OpenRouter to generate adaptive, personalized MCQ quizzes on any topic with real-time feedback and session tracking."
        },
        image: "/quizly app.jpeg",
        performance: {
            latency: "Fast Generation",
            accuracy: "Agentic Logic",
            throughput: "Scalable Sessions"
        }
    },

    // 4. SKYMIND AI
    {
        id: "PRJ-11",
        codename: "SKYMIND_AI",
        title: "SKYMIND AI",
        category: "CONVERSATIONAL_AI",
        status: "ONLINE",
        classification: "AI AGENT // WEATHER",
        tech_stack: ["Next.js 14", "FastAPI", "Python", "Weather API", "OpenAI", "Tailwind CSS"],
        problem: {
            short: "Static data lookup",
            desc: "Traditional weather apps provide raw data that often lacks real-time conversational context or personalized advice based on atmospheric changes."
        },
        solution: {
            short: "Conversational Weather Agent",
            desc: "A mission-critical weather agent that bridges live API data with LLMs to provide real-time, context-aware weather advice through a minimalist Next.js chat interface."
        },
        image: "/projects/skymind_ai.png",
        performance: {
            latency: "Sub-400ms",
            accuracy: "Live Data",
            throughput: "Real-time Processing"
        }
    },


    // 5. BARBER BOOKING AGENT
    {
        id: "PRJ-05",
        codename: "BARBER_VOICE",
        title: "BARBER BOOKING AGENT",
        category: "CONVERSATIONAL_AI",
        status: "ONLINE",
        classification: "AI SYSTEM // LIVEKIT",
        tech_stack: ["LiveKit", "FastAPI", "OpenAI Realtime API", "Python", "SQLAlchemy"],
        problem: {
            short: "Appointment Friction",
            desc: "Barber shops frequently lose revenue due to missed calls and the inefficiency of manual scheduling during peak hours."
        },
        solution: {
            short: "Voice Appointment System",
            desc: "A low-latency, interruptible voice agent built on LiveKit. It autonomously handles appointment bookings, checks availability in real-time, and synchronizes all data directly into the database."
        },
        image: "/projects/barber_voice_agent.png",
        performance: {
            latency: "400ms",
            accuracy: "98%",
            throughput: "High-Volume Booking"
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
    // 8. VISIONMIND RAG
    {
        id: "PRJ-12",
        codename: "VISIONMIND_RAG",
        title: "VISIONMIND RAG ADVISOR",
        category: "FULL_STACK",
        status: "ONLINE",
        classification: "AI AGENT // RAG",
        tech_stack: ["Python", "FastAPI", "OpenAI", "Pinecone", "BeautifulSoup", "Next.js"],
        problem: {
            short: "Information Fragmentation",
            desc: "Users often struggle to find specific, grounded answers from large, evolving company websites without manual searching."
        },
        solution: {
            short: "Autonomous Knowledge Agent",
            desc: "An intelligent RAG system that crawls company domains, generates vector embeddings of all technical documentation, and provides a context-rich chat interface for instant, domain-specific answers."
        },
        image: "/projects/visionmind_rag.png",
        performance: {
            latency: "Sub-1s",
            accuracy: "Zero-Hallucination",
            throughput: "Real-time Knowledge Recovery"
        }
    },
];
