"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MagneticCard } from "@/components/MagneticCard";

const ibmCerts = [
  {
    title: "Data Science in Python",
    issuer: "IBM Cognitive Classes",
    link: "https://drive.google.com/file/d/1yZVGuE8AJwlt2Kq5j95qMy48v6MOq0LS/view?usp=drivesdk"
  },
  {
    title: "Data Visualization for Real-Life Problems",
    issuer: "IBM Cognitive Classes",
    link: "https://drive.google.com/file/d/1-h8DTnLWEMleVxBqS9jgKzhT-K2v5Lg2/view?usp=drivesdk"
  }
];

export function EducationLogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-24 relative z-10 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-cyan-500 tracking-[0.4em] uppercase mb-2">System Certification Log</h2>
        <h3 className="text-4xl font-bold text-white tracking-tighter">Academic Calibration</h3>
      </div>
      
      <div ref={ref} className="space-y-12">
        {/* PRIMARY PROCESSING NODE (B.Tech) */}
        <div>
          <h4 className="text-xs font-mono text-white/50 tracking-[0.2em] mb-4 uppercase">Primary Processing Node</h4>
          <MagneticCard magneticPull={15} className="w-full cursor-default h-[200px]">
            {/* Blueprint Reveal Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl p-8 border border-cyan-500/50 bg-[#000000] flex flex-col justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: isInView ? 0 : 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="text-cyan-500/80 font-mono text-xs mb-2 border border-cyan-500/30 inline-block px-2 py-1 bg-cyan-500/10 w-max">
                [SCHEMATIC: ACTIVE_EDUCATION]
              </div>
              <h4 className="text-xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-transparent border-b border-dashed border-cyan-500/30 pb-2 mb-4 w-3/4">
                B.TECH_MECHANICAL_ROBOTICS
              </h4>
            </motion.div>

            {/* High-Def Active State */}
            <motion.div
              className="absolute inset-0 glass rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between border border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,194,0.1)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="flex items-start md:items-center gap-4 md:gap-8">
                <div className="hidden md:flex flex-col items-center justify-center relative">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] animate-pulse mb-1"></div>
                  <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                  {/* Glowing halo rings */}
                  <div className="absolute top-[-4px] left-[-4px] w-5 h-5 border border-cyan-400/50 rounded-full animate-ping"></div>
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                    STATUS: ACTIVE [1ST YEAR]
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Odisha University of Technology and Research (OUTR)</h4>
                  <p className="text-white/70 font-mono text-sm">Bachelor of Technology (B.Tech) — Mechanical Engineering</p>
                  <p className="text-cyan-500/70 font-mono text-xs mt-2">Focus: Robotics and Artificial Intelligence</p>
                </div>
              </div>
            </motion.div>
          </MagneticCard>
        </div>

        {/* HISTORICAL RECORDS (JEE & Schooling) */}
        <div className="pt-4">
          <h4 className="text-xs font-mono text-white/50 tracking-[0.2em] mb-4 uppercase">Historical Records</h4>
          <div className="space-y-4">
            {[
              { level: "JEE Mains", score: "93 Percentile", status: "VERIFIED" },
              { level: "Senior Secondary (12th)", details: "Jhadeswar International School", score: "75%", status: "VERIFIED" },
              { level: "Secondary (10th)", details: "St. James Convent School", score: "85%", status: "VERIFIED" }
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <MagneticCard magneticPull={10} className="w-full">
                  <div className="glass rounded-xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between border border-white/5 hover:border-cyan-500/20 transition-colors">
                    <div className="flex items-start md:items-center gap-4">
                      <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>
                      <div>
                        <div className="text-[10px] font-mono text-cyan-500/70 mb-1 tracking-widest uppercase">[{edu.status}]</div>
                        <h4 className="text-lg font-bold text-white mb-0.5">{edu.level}</h4>
                        {edu.details && <p className="text-white/40 font-mono text-xs">{edu.details}</p>}
                      </div>
                    </div>
                    
                    <div className="mt-3 md:mt-0 text-left md:text-right">
                      <div className="text-[10px] font-mono text-white/30 mb-1 uppercase tracking-widest">Score</div>
                      <div className="text-lg font-mono text-cyan-400/80">{edu.score}</div>
                    </div>
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CREDENTIAL VAULT (IBM Certs) */}
        <div>
          <h4 className="text-xs font-mono text-white/50 tracking-[0.2em] mb-4 uppercase">Credential Vault</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ibmCerts.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                className="group relative"
              >
                <MagneticCard magneticPull={20} className="w-full h-full">
                  <div className="glass rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-cyan-500 mb-2 uppercase tracking-widest">Verified Certification</div>
                      <h5 className="text-lg font-bold text-white mb-1">{cert.title}</h5>
                      <p className="text-white/50 font-mono text-xs mb-6">Issuer: {cert.issuer}</p>
                    </div>
                    
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors w-fit border border-cyan-500/30 px-3 py-1.5 rounded bg-cyan-500/5 hover:bg-cyan-500/20"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                      Verify Credential ↗
                    </a>
                  </div>
                </MagneticCard>

                {/* Custom Tooltip on Hover */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-cyan-500/50 text-cyan-400 text-[10px] font-mono px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                  External Validation: Verified via IBM Cognitive Class
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
