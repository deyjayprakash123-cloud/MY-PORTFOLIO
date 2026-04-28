"use client";

import { useScroll, motion, useTransform } from "framer-motion";

export function LaserScanner() {
  const { scrollYProgress } = useScroll();
  
  // The scanner moves from 20% to 80% of the viewport height as you scroll down
  const top = useTransform(scrollYProgress, [0, 1], ["20%", "80%"]);

  return (
    <motion.div
      className="fixed left-0 right-0 h-32 z-30 pointer-events-none"
      style={{ top }}
    >
      {/* The visible laser line */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(0,255,194,1)]" />
      
      {/* 
        The blend-mode area. This rectangle will affect the colors of elements behind it.
        We use mix-blend-color-dodge with an orange/cyan tint to dramatically shift colors.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent mix-blend-color-dodge backdrop-brightness-150" />
    </motion.div>
  );
}
