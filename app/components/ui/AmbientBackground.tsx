"use client";

export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020202]">

            {/* Universal Matrix Grid - The "Spacer" Structure */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Deep Galaxy / Nebula Orbs */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20 blur-[100px] mix-blend-screen"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(209,0,0,0.1) 40%, transparent 70%)"
                }}
            />

            <div
                className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-10 blur-[120px] mix-blend-screen"
                style={{
                    background: "radial-gradient(circle, rgba(50,50,100,0.2) 0%, rgba(0,0,0,0) 70%)"
                }}
            />

            {/* The "Outer Layer" Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80"></div>

            {/* Cinematic Noise */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
}
