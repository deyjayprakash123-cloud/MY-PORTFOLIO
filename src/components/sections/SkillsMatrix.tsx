"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MagneticCard } from "@/components/MagneticCard";
import { Settings, Wrench, Combine, Activity, Cpu, Database, Code, Braces } from "lucide-react";

// PHYSICAL_LOGIC: Robotics & Mechanical
const physicalSkills = [
  { name: "Robotics", icon: Settings, type: "gear" },
  { name: "Mechanical Systems Design", icon: Wrench, type: "joint" },
  { name: "AI Integration", icon: Combine, type: "joint" },
  { name: "Industrial Automation", icon: Settings, type: "gear" },
  { name: "Predictive Maintenance", icon: Activity, type: "pulse" },
];

// VIRTUAL_LOGIC: AI & Software
const virtualSkills = [
  { name: "Data Management", icon: Database },
  { name: "Data Visualization", icon: Activity },
  { name: "Machine Learning", icon: Cpu },
  { name: "Python", icon: Code },
  { name: "Flask", icon: Braces },
  { name: "Android Development", icon: Code },
];

function PhysicalSkillItem({ skill }: { skill: any }) {
  const Icon = skill.icon;
  const isGear = skill.type === "gear";
  
  return (
    <MagneticCard magneticPull={30} className="w-full h-full cursor-pointer group">
      <div className="glass rounded-xl p-6 border border-white/5 hover:border-[#FF8A00]/50 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF8A00] to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
        
        <div className="flex justify-between items-start mb-4">
          <div className="text-[10px] font-mono text-[#FF8A00]/80 tracking-widest uppercase">
            // Hardware
          </div>
          <motion.div
            animate={isGear ? { rotate: 360 } : {}}
            transition={isGear ? { duration: 10, repeat: Infinity, ease: "linear" } : {}}
            whileHover={isGear ? { rotate: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } } : { scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
            className="text-[#FF8A00] drop-shadow-[0_0_8px_rgba(255,138,0,0.8)]"
          >
            <Icon size={24} />
          </motion.div>
        </div>
        
        <div className="text-lg font-bold text-white/90 group-hover:text-white transition-colors z-10">
          {skill.name}
        </div>
      </div>
    </MagneticCard>
  );
}

function VirtualSkillItem({ skill }: { skill: any }) {
  const Icon = skill.icon;
  
  return (
    <MagneticCard magneticPull={30} className="w-full h-full cursor-pointer group">
      <div className="glass rounded-xl p-6 border border-white/5 hover:border-[#00FFC2]/50 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFC2] to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
        
        <div className="flex justify-between items-start mb-4">
          <div className="text-[10px] font-mono text-[#00FFC2]/80 tracking-widest uppercase">
            // Software
          </div>
          <motion.div
            whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 15px rgba(0, 255, 194, 1))" }}
            className="text-[#00FFC2] drop-shadow-[0_0_8px_rgba(0,255,194,0.6)] transition-all"
          >
            <Icon size={24} />
          </motion.div>
        </div>
        
        <div className="text-lg font-bold text-white/90 group-hover:text-white transition-colors z-10">
          {skill.name}
        </div>
      </div>
    </MagneticCard>
  );
}

export function SkillsMatrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-32 relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
      <div className="mb-20 text-center">
        <h2 className="text-sm font-mono text-cyan-500 tracking-[0.4em] uppercase mb-2">Capabilities</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Skills Architecture</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        
        {/* NODE 01: PHYSICAL_LOGIC */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 rounded-2xl p-6 md:p-8 border border-[#FF8A00]/20"
        >
          <div className="flex items-center gap-4 mb-8 border-b border-[#FF8A00]/20 pb-4">
            <div className="w-12 h-12 rounded-lg bg-[#FF8A00]/10 border border-[#FF8A00]/30 flex items-center justify-center text-[#FF8A00] shadow-[0_0_15px_rgba(255,138,0,0.2)]">
              <Settings className="animate-[spin_4s_linear_infinite]" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#FF8A00] tracking-[0.2em] uppercase">Node 01</div>
              <h4 className="text-2xl font-bold text-white tracking-tighter">[PHYSICAL_LOGIC]</h4>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {physicalSkills.map((skill, i) => (
              <PhysicalSkillItem key={i} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* NODE 02: VIRTUAL_LOGIC */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 rounded-2xl p-6 md:p-8 border border-[#00FFC2]/20"
        >
          <div className="flex items-center gap-4 mb-8 border-b border-[#00FFC2]/20 pb-4">
            <div className="w-12 h-12 rounded-lg bg-[#00FFC2]/10 border border-[#00FFC2]/30 flex items-center justify-center text-[#00FFC2] shadow-[0_0_15px_rgba(0,255,194,0.2)]">
              <Cpu className="animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#00FFC2] tracking-[0.2em] uppercase">Node 02</div>
              <h4 className="text-2xl font-bold text-white tracking-tighter">[VIRTUAL_LOGIC]</h4>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {virtualSkills.map((skill, i) => (
              <VirtualSkillItem key={i} skill={skill} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
