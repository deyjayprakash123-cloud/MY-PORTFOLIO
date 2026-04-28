"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { interfaceMode } = usePortfolio();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <ReactLenis root options={{ duration: interfaceMode === 'workstation' ? 1.2 : 0.8 }}>
      {children}
    </ReactLenis>
  );
}
