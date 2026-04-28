"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const getSeededRandom = (seed: number, min: number, max: number) => {
  const x = Math.sin(seed * 9999) * 10000;
  const rand = x - Math.floor(x);
  return rand * (max - min) + min;
};

export function BackgroundMatrix() {
  const { interfaceMode } = usePortfolio();
  const isWorkstation = interfaceMode === "workstation";
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Cursor interaction state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Antigravity scroll logic
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 20 });
  
  // Move particles UP when scrolling DOWN (Antigravity)
  const y1 = useTransform(smoothScrollY, [0, 2000], [0, -400]);
  const y2 = useTransform(smoothScrollY, [0, 2000], [0, -800]);
  const y3 = useTransform(smoothScrollY, [0, 2000], [0, -1200]);

  useEffect(() => {
    if (!isWorkstation) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isWorkstation]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#000000]">
      {/* Interactive Blueprint Grid */}
      <div 
        className="absolute inset-0 bg-grid opacity-30 transition-opacity duration-300"
        style={{
          maskImage: isWorkstation 
            ? `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, black 10%, transparent 100%)`
            : 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: isWorkstation 
            ? `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, black 10%, transparent 100%)`
            : 'linear-gradient(to bottom, black, transparent)'
        }}
      />

      {/* Grid overlay to ensure visibility everywhere but brighter near cursor */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Antigravity Particles */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {Array.from({ length: isWorkstation ? 15 : 5 }).map((_, i) => (
          <div 
            key={`p1-${i}`}
            className="absolute rounded-full bg-cyan-500/40 blur-[1px]"
            style={{
              width: getSeededRandom(i + 1, 2, 6) + 'px',
              height: getSeededRandom(i + 2, 2, 6) + 'px',
              left: getSeededRandom(i + 3, 0, 100) + '%',
              top: getSeededRandom(i + 4, 50, 150) + '%',
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {Array.from({ length: isWorkstation ? 10 : 3 }).map((_, i) => (
          <div 
            key={`p2-${i}`}
            className="absolute rounded-full bg-orange-500/30 blur-[2px]"
            style={{
              width: getSeededRandom(i + 10, 4, 12) + 'px',
              height: getSeededRandom(i + 11, 4, 12) + 'px',
              left: getSeededRandom(i + 12, 0, 100) + '%',
              top: getSeededRandom(i + 13, 100, 200) + '%',
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {Array.from({ length: isWorkstation ? 5 : 1 }).map((_, i) => (
          <div 
            key={`p3-${i}`}
            className="absolute rounded-full bg-white/20 blur-[3px]"
            style={{
              width: getSeededRandom(i + 20, 5, 20) + 'px',
              height: getSeededRandom(i + 21, 5, 20) + 'px',
              left: getSeededRandom(i + 22, 0, 100) + '%',
              top: getSeededRandom(i + 23, 150, 250) + '%',
            }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_100%)] pointer-events-none" />
    </div>
  );
}
