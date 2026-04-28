"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;
    
    // Parallax effect on scroll
    gsap.to(textRef.current, {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col items-center justify-center relative pt-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-96 h-96 rounded-full bg-blue-500 blur-[150px]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10"
      >
        <h1 ref={textRef} className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 uppercase">
          Jayaprakash Dey <br />
          <span className="text-3xl md:text-5xl text-blue-400 font-mono tracking-widest block mt-4">Robotics & AI</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-mono leading-relaxed mt-8">
          Architecting mechanical intelligence. Bridging the gap between neural networks and physical reality.
        </p>
      </motion.div>
    </section>
  );
}
