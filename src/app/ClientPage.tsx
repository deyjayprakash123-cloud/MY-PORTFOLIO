"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { GatekeeperUI } from "@/components/Gatekeeper";
import { GlobalCanvas } from "@/components/3d/GlobalCanvas";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BackgroundMatrix } from "@/components/BackgroundMatrix";
import { SystemLogs } from "@/components/SystemLogs";
import { Hero } from "@/components/sections/Hero";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ProjectLab } from "@/components/sections/ProjectLab";
import { EducationLogs } from "@/components/sections/EducationLogs";
import { ContactInterface } from "@/components/sections/ContactInterface";
import { LaserScanner } from "@/components/LaserScanner";
import { TelemetryFooter } from "@/components/TelemetryFooter";
import { motion } from "framer-motion";

export function ClientPage() {
  const { disassembled } = usePortfolio();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#000000] selection:bg-cyan-500/30">
      {/* Permanent Global 3D Background */}
      <GlobalCanvas />
      
      {/* Phase 1: Intro UI */}
      <GatekeeperUI />

      {/* Phase 2: Main Portfolio UI (Fades in after disassemble) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: disassembled ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }} // Wait for explosion
        className={`w-full relative ${disassembled ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <SmoothScroll>
          <BackgroundMatrix />
          <LaserScanner />
          <SystemLogs />
          
          <div className="flex flex-col relative z-10 pl-0 lg:pl-16 pb-16 pt-32">
            <Hero />
            <SkillsMatrix />
            <ProjectLab />
            <EducationLogs />
            <ContactInterface />
            
            <footer className="py-8 text-center text-white/30 font-mono text-xs border-t border-cyan-500/10">
              © {new Date().getFullYear()} Jayaprakash Dey. Living Machine.
            </footer>
          </div>

          <TelemetryFooter />
        </SmoothScroll>
      </motion.div>
    </main>
  );
}
