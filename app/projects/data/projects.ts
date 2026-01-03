
export type ProjectCategory = 'NEURAL_VOICE' | 'CONVERSATIONAL_AI' | 'ALGORITHMIC_FINANCE' | 'DEEP_RESEARCH';

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
        id: "EXP-01",
        codename: "VOX_SYNTH_V4",
        title: "NEURAL VOICE ENGINE",
        category: "NEURAL_VOICE",
        status: "ONLINE",
        classification: "CONFIDENTIAL // PROPRIETARY",
        tech_stack: ["Python", "PyTorch", "FastAPI", "Redis"],
        problem: {
            short: "High latency in TTS",
            desc: "Standard Text-to-Speech engines suffer from robotic intonation and high inference latency (>400ms), making real-time conversation impossible."
        },
        solution: {
            short: "Real-time diffusion",
            desc: "Implemented a non-autoregressive transformer model with distinct pitch/duration predictors, reducing inference time to <40ms while maintaining human-like prosody."
        },
        image: "/projects/voice_ui.png",
        performance: {
            latency: "38ms",
            accuracy: "99.2%",
            throughput: "450 req/s"
        }
    },
    {
        id: "EXP-02",
        codename: "ALPHA_CHAT_Q",
        title: "ENTERPRISE ASSISTANT",
        category: "CONVERSATIONAL_AI",
        status: "TRAINING",
        classification: "RESTRICTED // ENTERPRISE ONLY",
        tech_stack: ["Next.js", "LangChain", "OpenAI", "Pinecone"],
        problem: {
            short: "Context loss in long chats",
            desc: "LLMs struggle with long-context retrieval, often hallucinating or forgetting earlier instructions in complex enterprise workflows."
        },
        solution: {
            short: "Vector-augmented memory",
            desc: "Hybrid search architecture combining dense vector retrieval with sparse keyword search (BM25), enabling accurate recall across 100k+ token context windows."
        },
        image: "/projects/chat_ui.png",
        performance: {
            latency: "120ms",
            accuracy: "96.5%",
            uptime: "99.99%"
        }
    },
    {
        id: "EXP-03",
        codename: "PREDICT_X_7",
        title: "ALGORITHMIC TRADER",
        category: "ALGORITHMIC_FINANCE",
        status: "ONLINE",
        classification: "TOP SECRET // FINANCIAL",
        tech_stack: ["Rust", "Python", "Kafka", "Postgres"],
        problem: {
            short: "Market noise filtering",
            desc: "High-frequency trading signals are often drowned out by market microstructure noise, leading to false positives in trade execution."
        },
        solution: {
            short: "Kalman Filter ensemble",
            desc: "Deployed an ensemble of Kalman Filters and LSTM networks to separate signal from noise, improving Sharpe ratio by 45% in backtesting."
        },
        image: "/projects/fintech_ui.png",
        performance: {
            latency: "4ms",
            accuracy: "84.3%",
            throughput: "12k tx/s"
        }
    },
    {
        id: "EXP-04",
        codename: "DEEP_VISION_R",
        title: "AUTONOMOUS VISION",
        category: "DEEP_RESEARCH",
        status: "OFFLINE",
        classification: "CLASSIFIED // MIL-SPEC",
        tech_stack: ["C++", "CUDA", "TensorRT", "OpenCV"],
        problem: {
            short: "Edge detection failure",
            desc: "Standard CV models fail in low-light conditions, critical for autonomous drone navigation in subterranean environments."
        },
        solution: {
            short: "Thermal fusion model",
            desc: "Created a multi-modal input pipeline fusing standard RGB with thermal imaging data, training a custom YOLOv8 variant for reliable detection in 0 lux."
        },
        image: "/projects/vision_ui.png",
        performance: {
            latency: "12ms",
            accuracy: "99.8%",
            uptime: "N/A"
        }
    }
];
