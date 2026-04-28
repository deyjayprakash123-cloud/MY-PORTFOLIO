"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  magneticPull?: number;
}

export function MagneticCard({ children, className = "", magneticPull = 20 }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const [hovered, setHovered] = useState(false);
  
  // Motion values for X and Y position relative to center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // True Kinetic Physics: High mass, low damping for a weighty, low-gravity bounce
  const springConfig = { stiffness: 100, damping: 10, mass: 1.5, bounce: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Transform position into 3D rotation
  const rotateX = useTransform(springY, [-100, 100], [15, -15]);
  const rotateY = useTransform(springX, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * (magneticPull / 100));
    y.set(distanceY * (magneticPull / 100));
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // Return to center with momentum
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileHover={{ 
        scale: 1.05, 
        z: 50, 
        boxShadow: "0 20px 40px rgba(0, 255, 194, 0.15)" 
      }}
      whileTap={{ 
        scale: 0.98,
        z: 0 
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 12,
        mass: 1.2
      }}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
