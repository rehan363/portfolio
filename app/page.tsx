"use client";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";

import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import MethodologySection from "./components/MethodologySection";
import Navbar from "./components/Navbar";
import SystemBackground from "./components/3d/SystemBackground";
import LoadingScreen from "./components/LoadingScreen";
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[var(--bg-void)] text-[var(--fg-cinema)] overflow-x-hidden selection:bg-[var(--acc-red)] selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SystemBackground />
      <Navbar />

      {/* Scrollable Sections - Rendered immediately so they are visible upon reveal */}
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <MethodologySection />
      <ProjectsSection />

    </main>
  );
}
