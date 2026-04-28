"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ContactInterface() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px" });

  return (
    <section className="py-24 relative z-10 w-full px-6 mb-32 border-t border-cyan-500/20 bg-gradient-to-b from-[#000000] to-cyan-900/10 mt-32">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 md:p-12 border border-cyan-500/30 relative overflow-hidden"
        >
          {/* High-Tech Accents */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
          
          <div className="mb-10 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">TERMINAL: CONNECT</h2>
              <p className="text-cyan-500/70 font-mono text-xs mt-2 tracking-widest uppercase">Communication Hub Online</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
              <span className="text-green-400 font-mono text-[10px] tracking-widest">STATUS: OPEN TO CONNECT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
            {/* Identity & Direct Contact */}
            <div className="space-y-6">
              <div>
                <div className="text-[10px] text-white/40 mb-1 uppercase tracking-widest">Identity</div>
                <div className="text-lg text-white">JAYAPRAKASH DEY</div>
              </div>
              
              <div>
                <div className="text-[10px] text-white/40 mb-1 uppercase tracking-widest">Data Transmission (Email)</div>
                <a 
                  href="mailto:deyjayprakash123@gmail.com" 
                  className="inline-block text-cyan-400 text-sm md:text-base hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all"
                >
                  deyjayprakash123@gmail.com
                </a>
              </div>
              
              <div>
                <div className="text-[10px] text-white/40 mb-1 uppercase tracking-widest">Hardware Link (Phone)</div>
                <a 
                  href="tel:+919348354573" 
                  className="inline-block text-cyan-400 text-sm md:text-base hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all"
                >
                  +91 9348354573
                </a>
              </div>
            </div>

            {/* Social Nodes */}
            <div>
              <div className="text-[10px] text-white/40 mb-4 uppercase tracking-widest">Social Nodes</div>
              <div className="space-y-4">
                <a 
                  href="https://github.com/deyjayprakash123-cloud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  <span className="text-white group-hover:text-cyan-400 font-bold tracking-wider">GITHUB</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/jayaprakash-dey-75b444387" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  <span className="text-white group-hover:text-cyan-400 font-bold tracking-wider">LINKEDIN</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
