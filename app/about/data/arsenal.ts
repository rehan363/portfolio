
export type TechCategory = 'FRONTEND_OPS' | 'BACKEND_SYS' | 'AI_LABS' | 'INFRA_GRID';

export interface Weapon {
    id: string;
    name: string;
    category: TechCategory;
    icon: string; // Emoji or SVG path identifier
    mastery: number; // 0-100
    specs: string[]; // e.g. "Server Actions", "RSC"
    status: 'ACTIVE' | 'MASTERED' | 'DEPRECATED';
    description: string;
}

export const arsenal: Weapon[] = [
    // FRONTEND OPS
    {
        id: "WPN-REACT",
        name: "REACT / NEXT.JS",
        category: "FRONTEND_OPS",
        icon: "⚛️",
        mastery: 98,
        specs: ["App Router", "Server Actions", "Framer Motion"],
        status: "MASTERED",
        description: "Primary interface construction tool. Optimized for high-performance rendering and component modularity."
    },
    {
        id: "WPN-TS",
        name: "TYPESCRIPT",
        category: "FRONTEND_OPS",
        icon: "📘",
        mastery: 95,
        specs: ["Strict Mode", "Generics", "Type Guards"],
        status: "MASTERED",
        description: "Static type enforcement system. Ensures codebase integrity and prevents runtime anomalies."
    },
    {
        id: "WPN-TAILWIND",
        name: "TAILWIND CSS",
        category: "FRONTEND_OPS",
        icon: "🎨",
        mastery: 99,
        specs: ["JIT Engine", "Custom Tokens", "Animations"],
        status: "MASTERED",
        description: "Utility-first styling engine. Rapid UI deployment with atomic precision."
    },

    // BACKEND SYS
    {
        id: "WPN-PYTHON",
        name: "PYTHON / FASTAPI",
        category: "BACKEND_SYS",
        icon: "🐍",
        mastery: 92,
        specs: ["AsyncIO", "Pydantic", "SQLAlchemy"],
        status: "ACTIVE",
        description: "High-speed backend logic processing. Used primarily for AI service orchestration and data pipelines."
    },
    {
        id: "WPN-GO",
        name: "GOLANG",
        category: "BACKEND_SYS",
        icon: "🐹",
        mastery: 85,
        specs: ["Goroutines", "gRPC", "Microservices"],
        status: "ACTIVE",
        description: "Concurrency-focused language for high-throughput system components and distributed architectures."
    },

    // AI LABS
    {
        id: "WPN-TORCH",
        name: "PYTORCH",
        category: "AI_LABS",
        icon: "🔥",
        mastery: 88,
        specs: ["Tensors", "Autograd", "Transformers"],
        status: "ACTIVE",
        description: "Deep learning research framework. Capable of custom model training and neural architecture search."
    },
    {
        id: "WPN-LANGCHAIN",
        name: "LANGCHAIN / RAG",
        category: "AI_LABS",
        icon: "🦜",
        mastery: 90,
        specs: ["Agents", "Vector Stores", "Memory"],
        status: "ACTIVE",
        description: "LLM augmentation suite. Facilitates retrieval-augmented generation and autonomous agent flows."
    },

    // INFRA GRID
    {
        id: "WPN-DOCKER",
        name: "DOCKER / K8S",
        category: "INFRA_GRID",
        icon: "🐳",
        mastery: 82,
        specs: ["Containers", "Orchestration", "CI/CD"],
        status: "ACTIVE",
        description: "Containerization standard. Ensures consistent environment recreation across development and production sectors."
    }
];
