"use client";

import dynamic from "next/dynamic";

const SystemBackground = dynamic(() => import("./SystemBackground"), {
    ssr: false,
});

export default function SystemBackgroundWrapper() {
    return <SystemBackground />;
}
