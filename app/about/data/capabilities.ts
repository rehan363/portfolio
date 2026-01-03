
export type CapabilityCategory = 'COMPUTE' | 'INTERFACE' | 'DATA' | 'INFRASTRUCTURE';

export interface CapabilityElement {
    symbol: string;      // e.g. "Rx", "Ts", "Py"
    name: string;        // e.g. "React.js"
    atomicNumber: number; // e.g. 01
    mass: number;        // e.g. 98.5 (Mastery)
    category: CapabilityCategory;
    desc: string;
    // Technical Metadata for the "Lens" view
    version: string;
    modules: string[];
    index: number;
}

export const capabilities: CapabilityElement[] = [
    // --- INTERFACE (The Glass) ---
    {
        index: 1,
        symbol: "Nx",
        name: "NEXT.JS",
        atomicNumber: 1,
        mass: 99.0,
        category: "INTERFACE",
        desc: "Server-rendered React framework for production-grade applications.",
        version: "14.1.0",
        modules: ["App Router", "Server Actions", "Edge Runtime"]
    },
    {
        index: 2,
        symbol: "Ts",
        name: "TYPESCRIPT",
        atomicNumber: 2,
        mass: 96.5,
        category: "INTERFACE",
        desc: "Strict syntactical superset of JavaScript adding static typing.",
        version: "5.3",
        modules: ["Generics", "Utility Types", "Decorators"]
    },
    {
        index: 3,
        symbol: "Tw",
        name: "TAILWIND",
        atomicNumber: 3,
        mass: 98.2,
        category: "INTERFACE",
        desc: "Utility-first CSS framework for rapid UI development.",
        version: "3.4",
        modules: ["JIT", "Plugins", "Arbitrary Values"]
    },
    {
        index: 4,
        symbol: "Fm",
        name: "FRAMER",
        atomicNumber: 4,
        mass: 92.0,
        category: "INTERFACE",
        desc: "Production-ready motion library for React.",
        version: "10.0",
        modules: ["Layout Animations", "Gestures", "3D Transforms"]
    },
    {
        index: 5,
        symbol: "Gl",
        name: "WEBGL",
        atomicNumber: 5,
        mass: 88.5,
        category: "INTERFACE",
        desc: "High-performance interactive 2D and 3D graphics.",
        version: "2.0",
        modules: ["Three.js", "R3F", "GLSL Shaders"]
    },

    // --- COMPUTE (The Core) ---
    {
        index: 6,
        symbol: "Py",
        name: "PYTHON",
        atomicNumber: 6,
        mass: 94.0,
        category: "COMPUTE",
        desc: "Interpreted, high-level, general-purpose programming language.",
        version: "3.12",
        modules: ["AsyncIO", "Typing", "Multiprocessing"]
    },
    {
        index: 7,
        symbol: "Go",
        name: "GOLANG",
        atomicNumber: 7,
        mass: 86.0,
        category: "COMPUTE",
        desc: "Statically typed, compiled language designed for concurrency.",
        version: "1.21",
        modules: ["Goroutines", "Channels", "net/http"]
    },
    {
        index: 8,
        symbol: "Rs",
        name: "RUST",
        atomicNumber: 8,
        mass: 78.5,
        category: "COMPUTE",
        desc: "Systems programming language focused on safety and performance.",
        version: "1.75",
        modules: ["Ownership", "Borrow Checker", "Cargo"]
    },

    // --- DATA (The Memory) ---
    {
        index: 9,
        symbol: "Pg",
        name: "POSTGRES",
        atomicNumber: 9,
        mass: 91.0,
        category: "DATA",
        desc: "Advanced object-relational database system.",
        version: "16",
        modules: ["PL/pgSQL", "JSONB", "Extensions"]
    },
    {
        index: 10,
        symbol: "Rd",
        name: "REDIS",
        atomicNumber: 10,
        mass: 89.0,
        category: "DATA",
        desc: "In-memory data structure store, used as a database, cache, and broker.",
        version: "7.2",
        modules: ["Pub/Sub", "Streams", "Lua Scripting"]
    },
    {
        index: 11,
        symbol: "Vd",
        name: "VECTOR DB",
        atomicNumber: 11,
        mass: 93.0,
        category: "DATA",
        desc: "High-dimensional vector storage for similarity search.",
        version: "N/A",
        modules: ["Pinecone", "Weaviate", "HNSW Indexing"]
    },

    // --- INFRASTRUCTURE (The Grid) ---
    {
        index: 12,
        symbol: "K8",
        name: "KUBERNETES",
        atomicNumber: 12,
        mass: 84.0,
        category: "INFRASTRUCTURE",
        desc: "Open-source system for automating deployment, scaling, and management.",
        version: "1.29",
        modules: ["Pods", "Services", "Ingress Controllers"]
    },
    {
        index: 13,
        symbol: "Dk",
        name: "DOCKER",
        atomicNumber: 13,
        mass: 90.5,
        category: "INFRASTRUCTURE",
        desc: "Set of platform as a service products that use OS-level virtualization.",
        version: "25.0",
        modules: ["Compose", "BuildKit", "Registry"]
    },
    {
        index: 14,
        symbol: "Aw",
        name: "AWS",
        atomicNumber: 14,
        mass: 87.0,
        category: "INFRASTRUCTURE",
        desc: "On-demand cloud computing platforms and APIs.",
        version: "N/A",
        modules: ["EC2", "Lambda", "S3", "VPC"]
    },
    {
        index: 15,
        symbol: "Gf",
        name: "GRAFANA",
        atomicNumber: 15,
        mass: 82.0,
        category: "INFRASTRUCTURE",
        desc: "Multi-platform open source analytics and interactive visualization web application.",
        version: "10.0",
        modules: ["Prometheus", "Dashboards", "Alerting"]
    }
];
