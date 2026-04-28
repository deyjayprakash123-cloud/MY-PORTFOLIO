"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CeramicRobot } from "./CeramicRobot";
import { ShatterParticles } from "./ShatterParticles";
import { Suspense } from "react";

export function GlobalCanvas() {
  const { disassembled } = usePortfolio();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        {/* Pitch black void background is handled by CSS #000000 on the parent */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={1} color="#00FFC2" />
        
        <Suspense fallback={null}>
          {!disassembled ? (
            <CeramicRobot />
          ) : (
            <ShatterParticles />
          )}
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={!disassembled} 
          autoRotate={!disassembled} 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
