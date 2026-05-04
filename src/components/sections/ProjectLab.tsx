"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MagneticCard } from "@/components/MagneticCard";

const projects = [
  {
    title: "AEROX2",
    category: "Project Alpha",
    description: "A sophisticated multiple-personality AI agent engineered for complex reasoning and multi-modal problem solving.",
    tech: ["LLM Orchestration", "Python", "Reasoning Engines"],
    source: "https://github.com/deyjayprakash123-cloud/AEROX2",
    liveLink: null,
    liveLabel: null
  },
  {
    title: "AEROX.AURA",
    category: "Project Beta",
    description: "A groundbreaking GitHub repository debugger visualized in a 3D rendered environment. Features classified data structure analysis to pinpoint repository bugs.",
    tech: ["3D Rendering", "Data Structures", "Static Analysis"],
    source: "https://github.com/deyjayprakash123-cloud/aerox.aura",
    liveLink: "https://aeroxaura.vercel.app/",
    liveLabel: "[ ACCESS LIVE ENVIRONMENT ]"
  },
  {
    title: "AEROX-WAR",
    category: "Project Beta-II",
    description: "A cinematic repository battle engine that performs side-by-side repo comparisons through immersive 3D visualization, real-time 3D rendered analysis, and interactive 3D graphical metric breakdowns.",
    tech: ["3D Visualization", "Three.js", "Repo Analysis", "Data Rendering"],
    source: "https://github.com/deyjayprakash123-cloud/aerox-war",
    liveLink: "https://aerox-war.vercel.app/",
    liveLabel: "[ ACCESS LIVE ENVIRONMENT ]"
  },
  {
    title: "FINGUARD (Frontend)",
    category: "Project Gamma",
    description: "A FinTech solution designed to empower the middle class by preventing debt traps and managing multiple loan structures through intelligent tracking.",
    tech: ["React/Next.js", "Financial Logic", "Data Visualization"],
    source: "https://github.com/deyjayprakash123-cloud/finguard-frontend",
    liveLink: "https://finguard-frontend-tawny.vercel.app/",
    liveLabel: "[ INITIALIZE INTERFACE ]"
  },
  {
    title: "YTDownload",
    category: "Project Delta",
    description: "A high-performance utility for seamless YouTube video acquisition and processing.",
    tech: ["Automation", "Python/Kotlin", "API Integration"],
    source: "https://github.com/deyjayprakash123-cloud/ytdownload",
    liveLink: null,
    liveLabel: null
  }
];

function ProjectItem({ project, index }: { project: any, index: number }) {
  const ref = useRef(null);
  // Trigger once when it comes into view
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <div ref={ref} className="relative w-full h-full">
      <MagneticCard magneticPull={25} className="w-full h-full rounded-2xl cursor-pointer">
        {/* Blueprint/Wireframe view (Fades out) */}
        <motion.div
          className="absolute inset-0 rounded-2xl p-8 border border-cyan-500/50 bg-[#000000] flex flex-col justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isInView ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="text-cyan-500/80 font-mono text-xs mb-2 border border-cyan-500/30 inline-block px-2 py-1 bg-cyan-500/10 w-max">
            [SCHEMATIC: {project.category.toUpperCase()}]
          </div>
          <h4 className="text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-transparent border-b border-dashed border-cyan-500/30 pb-2 mb-4 w-5/6">
            {project.title.toUpperCase()}_WIP
          </h4>
          <div className="grid grid-cols-4 gap-2 mt-auto">
            <div className="h-4 border border-cyan-500/20 bg-cyan-500/5"></div>
            <div className="h-4 border border-cyan-500/20 bg-cyan-500/5 col-span-2"></div>
            <div className="h-4 border border-cyan-500/20 bg-cyan-500/5"></div>
          </div>
        </motion.div>

        {/* High-Def View (Fades in) */}
        <motion.div
          className="h-full glass rounded-2xl p-6 md:p-8 border border-white/5 overflow-hidden flex flex-col justify-between group"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3">
              <div className="text-sm font-mono text-cyan-400 tracking-widest">{project.category}</div>
              
              {/* Source Code Button - visible on hover via group (desktop) and always visible on mobile */}
              <a 
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] px-3 py-1 rounded border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,194,0.5)] hover:bg-cyan-500/10 flex items-center gap-2"
                onClick={(e) => e.stopPropagation()} // Prevent card interaction when clicking link
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                SOURCE
              </a>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4 drop-shadow-lg leading-tight">{project.title}</h4>
            <p className="text-white/70 font-mono text-xs leading-relaxed mb-6">{project.description}</p>
            
            {/* LIVE DEPLOYMENT BUTTON */}
            {project.liveLink && (
              <div style={{ transform: "translateZ(20px)" }} className="mb-6 inline-block perspective-1000">
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="relative inline-flex items-center justify-center px-4 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono text-[10px] tracking-widest rounded shadow-[0_0_15px_rgba(0,255,194,0.15)] hover:shadow-[0_0_30px_rgba(0,255,194,0.4)] hover:bg-cyan-500/20 hover:text-white transition-all duration-300 overflow-hidden group/btn"
                >
                  <span className="absolute w-0 h-full bg-cyan-500/20 left-0 top-0 transition-all duration-300 group-hover/btn:w-full -z-10"></span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,194,1)] animate-ping absolute left-2 top-1/2 -translate-y-1/2"></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,194,1)] absolute left-2 top-1/2 -translate-y-1/2"></div>
                  <span className="ml-4">{project.liveLabel}</span>
                </a>
              </div>
            )}

          </div>
          
          <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
            {project.tech.map((t: string, idx: number) => (
              <span key={idx} className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-md text-[10px] font-mono text-white/90 border border-white/10 shadow-lg">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </MagneticCard>
    </div>
  );
}

export function ProjectLab() {
  return (
    <section className="py-32 relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-center">
      <div className="mb-16 text-right">
        <h2 className="text-sm font-mono text-cyan-500 tracking-[0.4em] uppercase mb-2">Experiment Logs</h2>
        <h3 className="text-5xl font-bold text-white tracking-tighter">Project Lab</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, i) => (
          <div key={i} className="h-auto min-h-[350px]">
            <ProjectItem project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
