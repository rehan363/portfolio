export const phases = [
    {
        id: 1,
        code: "DECODE",
        title: "DECONSTRUCT",
        subtitle: "Breaking Down Complexity",
        description: "Every complex problem is a system of interconnected smaller problems. I begin by mapping the entire landscape—identifying dependencies, constraints, and hidden assumptions that others might overlook.",
        details: [
            "Deep-dive stakeholder interviews to uncover true requirements",
            "System boundary analysis and constraint identification",
            "Technical debt assessment and risk mapping",
            "Data flow diagramming and bottleneck detection"
        ],
        tools: ["Miro", "Notion", "Draw.io", "SQL Profilers"],
        output: "Technical Specification Document",
        duration: "2-5 days",
        icon: "◇"
    },
    {
        id: 2,
        code: "DESIGN",
        title: "ARCHITECT",
        subtitle: "Designing Resilient Systems",
        description: "With a clear understanding of the problem space, I design solutions that prioritize scalability, maintainability, and performance. Every architectural decision is documented with its trade-offs.",
        details: [
            "Component hierarchy and data flow architecture",
            "API contract design with OpenAPI specifications",
            "Database schema design with normalization analysis",
            "Security threat modeling and mitigation strategies"
        ],
        tools: ["Figma", "Storybook", "TypeScript", "Prisma"],
        output: "Architecture Decision Records",
        duration: "3-7 days",
        icon: "◆"
    },
    {
        id: 3,
        code: "DEVELOP",
        title: "EXECUTE",
        subtitle: "Precision Implementation",
        description: "Code is poetry executed at scale. I write clean, type-safe, self-documenting code that future developers will thank me for. Every function has a purpose, every line has meaning.",
        details: [
            "Test-Driven Development with high coverage targets",
            "Continuous integration with automated quality gates",
            "Performance profiling and optimization cycles",
            "Documentation as code using JSDoc and MDX"
        ],
        tools: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis"],
        output: "Production-Ready Codebase",
        duration: "2-8 weeks",
        icon: "▣"
    },
    {
        id: 4,
        code: "DEPLOY",
        title: "OPTIMIZE",
        subtitle: "Continuous Refinement",
        description: "Deployment is not the end—it's the beginning of the learning phase. I instrument everything, monitor relentlessly, and iterate based on real-world data.",
        details: [
            "Blue-green deployments with instant rollback",
            "Real-time monitoring dashboards and alerting",
            "A/B testing infrastructure for feature validation",
            "Post-mortem culture for continuous improvement"
        ],
        tools: ["Vercel", "AWS", "Datadog", "Sentry"],
        output: "Optimized Live System",
        duration: "Ongoing",
        icon: "◈"
    }
];
