"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

export function ShatterParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 2000 : 5000;
  
  // State to track if the explosion phase is over
  const explosionPhase = useRef(true);
  const explosionTimer = useRef(0);

  const { positions, velocities } = useMemo(() => {
    const p = new Float32Array(particleCount * 3);
    const v = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Start them tightly packed in the center (where the robot was)
      p[i * 3] = (Math.random() - 0.5) * 2;
      p[i * 3 + 1] = (Math.random() - 0.5) * 3;
      p[i * 3 + 2] = (Math.random() - 0.5) * 2;
      
      // Explosion velocities (rapid expansion in all directions, but heavy +z towards camera)
      v[i * 3] = (Math.random() - 0.5) * 50;     // X velocity
      v[i * 3 + 1] = (Math.random() - 0.5) * 50; // Y velocity
      v[i * 3 + 2] = Math.random() * 60 + 10;    // Z velocity (towards camera)
    }
    
    return { positions: p, velocities: v };
  }, [particleCount]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    explosionTimer.current += delta;
    
    if (explosionTimer.current < 2) {
      // Explosion Phase (first 2 seconds)
      // Exponential decay of velocity for a "shatter and settle" effect
      const dampening = Math.exp(-explosionTimer.current * 3); 
      
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i * 3] * dampening * delta;
        pos[i * 3 + 1] += velocities[i * 3 + 1] * dampening * delta;
        pos[i * 3 + 2] += velocities[i * 3 + 2] * dampening * delta;
      }
    } else {
      // Settled Phase: Antigravity Drift
      // Particles float slowly upwards, and loop around when too high
      for (let i = 0; i < particleCount; i++) {
        // Slow upward drift
        pos[i * 3 + 1] += 0.5 * delta;
        
        // Loop vertically
        if (pos[i * 3 + 1] > 20) {
          pos[i * 3 + 1] = -20;
        }
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial 
        transparent 
        color="#00FFC2" 
        size={0.03} 
        sizeAttenuation={true} 
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
      />
    </Points>
  );
}
