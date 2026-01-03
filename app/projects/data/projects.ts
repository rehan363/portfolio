export interface Project {
    id: string;
    codename: string;
    title: string;
    status: 'DEPLOYED' | 'PROTOTYPE' | 'CLASSIFIED';
    classification: string;

    problem: {
        desc: string;
        metric: string;
    };
    solution: {
        desc: string;
        metric: string;
    };

    metrics: { label: string; value: string }[];
    tech_stack: string[];
    image: string; // New holographic image paths
    link?: string;
}

export const projects: Project[] = [
    {
        id: "neo-bank",
        codename: "PROJECT_NEO",
        title: "NeoBank Core",
        status: "DEPLOYED",
        classification: "FINTECH_INFRASTRUCTURE",
        problem: {
            desc: "Legacy latency detected. High user attrition.",
            metric: "12m Latency"
        },
        solution: {
            desc: "WebSocket engine active. Zero-friction.",
            metric: "45s Latency"
        },
        metrics: [
            { label: "Throughput", value: "50K TPS" },
            { label: "Uptime", value: "99.99%" },
            { label: "Growth", value: "+40%" }
        ],
        tech_stack: ["Next.js", "Rust", "AWS"],
        image: "/projects/neobank-holo.png",
        link: "#"
    },
    {
        id: "luxe-fashion",
        codename: "VIRTUAL_FIT",
        title: "Luxe AR Experience",
        status: "DEPLOYED",
        classification: "ECOMMERCE_VISUALIZATION",
        problem: {
            desc: "Visualization gap. Return rate critical.",
            metric: "40% Returns"
        },
        solution: {
            desc: "WebGL/AR Try-On. Photorealistic render.",
            metric: "18% Returns"
        },
        metrics: [
            { label: "Conversion", value: "+40%" },
            { label: "Savings", value: "$2.1M" },
            { label: "Engagement", value: "4m Avg" }
        ],
        tech_stack: ["Three.js", "React", "WebGL"],
        image: "/projects/luxe-holo.png",
        link: "#"
    },
    {
        id: "aero-dash",
        codename: "AERO_STREAM",
        title: "AeroDash Analytics",
        status: "PROTOTYPE",
        classification: "REALTIME_ANALYTICS",
        problem: {
            desc: "Data blindness. 5m reporting delay.",
            metric: "5m Delay"
        },
        solution: {
            desc: "Edge-computed streaming. Instant visibility.",
            metric: "50ms Delay"
        },
        metrics: [
            { label: "Events", value: "2M/s" },
            { label: "Latency", value: "<50ms" },
            { label: "Clients", value: "200+" }
        ],
        tech_stack: ["D3.js", "Socket.io", "Redis"],
        image: "/projects/aerodash-holo.png",
        link: "#"
    }
];
