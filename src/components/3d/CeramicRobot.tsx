"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function CeramicRobot() {
  const [hovered, setHovered] = useState(false);
  const handRef = useRef<THREE.Group>(null);
  const neonMaterialRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    // Pulse and Vibrate logic when hovered
    if (hovered) {
      if (handRef.current) {
        // High frequency mechanical vibration
        handRef.current.position.y = Math.sin(state.clock.elapsedTime * 50) * 0.05;
        handRef.current.position.x = 1.5 + Math.cos(state.clock.elapsedTime * 45) * 0.02;
      }
      if (neonMaterialRef.current) {
        // Intense pulsing
        neonMaterialRef.current.color.setHSL(0.5, 1, 0.5 + Math.sin(state.clock.elapsedTime * 15) * 0.3);
      }
    } else {
      if (handRef.current) {
        // Smooth return to default
        handRef.current.position.y = THREE.MathUtils.lerp(handRef.current.position.y, 0, 0.1);
        handRef.current.position.x = THREE.MathUtils.lerp(handRef.current.position.x, 1.5, 0.1);
      }
      if (neonMaterialRef.current) {
        // Default cyan glow
        neonMaterialRef.current.color.setHex(0x00FFC2);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={[0, -1, 0]}>
        {/* Torso */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[1.2, 2, 0.8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
        </mesh>
        
        {/* Neon Chest Accent */}
        <mesh position={[0, 1.5, 0.41]}>
          <planeGeometry args={[0.2, 1.5]} />
          <meshBasicMaterial ref={neonMaterialRef} color="#00FFC2" />
        </mesh>

        {/* Head */}
        <mesh position={[0, 3, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
        </mesh>

        {/* Eyes */}
        <mesh position={[0.2, 3.1, 0.41]}>
          <planeGeometry args={[0.2, 0.1]} />
          <meshBasicMaterial color="#00FFC2" />
        </mesh>
        <mesh position={[-0.2, 3.1, 0.41]}>
          <planeGeometry args={[0.2, 0.1]} />
          <meshBasicMaterial color="#00FFC2" />
        </mesh>

        {/* Left Arm (idle) */}
        <mesh position={[-1.0, 1.5, 0]}>
          <boxGeometry args={[0.4, 1.8, 0.4]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
        </mesh>

        {/* Right Arm & Hand (Handshake extended) */}
        <group 
          ref={handRef} 
          position={[1.5, 1.5, 0.5]} 
          rotation={[-Math.PI / 4, 0, 0]}
        >
          {/* Upper Arm */}
          <mesh position={[0, -0.5, 0]}>
            <boxGeometry args={[0.4, 1.2, 0.4]} />
            <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
          </mesh>
          {/* Forearm extending forward */}
          <mesh position={[0, -1.2, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
            <boxGeometry args={[0.3, 1.2, 0.3]} />
            <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
          </mesh>
          
          {/* The Hand / Interaction Zone */}
          <mesh 
            position={[0, -1.2, 1.2]}
            onPointerOver={() => {
              setHovered(true);
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
              setHovered(false);
              document.body.style.cursor = 'auto';
            }}
          >
            <boxGeometry args={[0.4, 0.4, 0.5]} />
            <meshStandardMaterial color="#eeeeee" roughness={0.2} metalness={0.3} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}
