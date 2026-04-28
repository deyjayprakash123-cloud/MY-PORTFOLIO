"use client";

import { useEffect, useState, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

export function TelemetryFooter() {
  const { interfaceMode } = usePortfolio();
  
  // Live Time in Bhubaneswar
  const [time, setTime] = useState("");
  // Mock NN Progress
  const [nnProgress, setNnProgress] = useState(0);
  // Real-time FPS
  const [fps, setFps] = useState(0);
  const frames = useRef(0);
  const prevTime = useRef(performance.now());

  useEffect(() => {
    if (interfaceMode === "unset") return;

    // 1. Time Interval
    const timeInterval = setInterval(() => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(now));
    }, 1000);

    // 2. NN Progress Loop (Mock: 0 to 100 over 10s, then loop)
    const progressInterval = setInterval(() => {
      setNnProgress(prev => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 2; // Increments slightly randomly
      });
    }, 100);

    // 3. FPS Calculation via requestAnimationFrame
    let animationFrameId: number;
    const calcFPS = () => {
      frames.current += 1;
      const current = performance.now();
      if (current > prevTime.current + 1000) {
        setFps(Math.round((frames.current * 1000) / (current - prevTime.current)));
        prevTime.current = current;
        frames.current = 0;
      }
      animationFrameId = requestAnimationFrame(calcFPS);
    };
    calcFPS();

    return () => {
      clearInterval(timeInterval);
      clearInterval(progressInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [interfaceMode]);

  if (interfaceMode === "unset") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 border-t border-white/10 bg-black/60 backdrop-blur-md z-50 flex items-center justify-between px-6 font-mono text-[10px] sm:text-xs text-white/50 tracking-widest uppercase">
      {/* Time */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
        <span>BHUBANESWAR_TIME: {time || "00:00:00"}</span>
      </div>

      {/* Mock NN Progress */}
      <div className="hidden md:flex items-center gap-4 flex-1 max-w-sm mx-8">
        <span>NN_TRAINING:</span>
        <div className="flex-1 h-1 bg-white/10 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-cyan-500 shadow-[0_0_10px_rgba(0,255,194,0.5)]"
            style={{ width: `${Math.min(100, nnProgress)}%` }}
          />
        </div>
        <span>{Math.min(100, nnProgress).toFixed(1)}%</span>
      </div>

      {/* Real-time FPS */}
      <div className="flex items-center gap-2">
        <span>SYS_FPS:</span>
        <span className={`${fps >= 55 ? "text-green-500" : fps >= 30 ? "text-yellow-500" : "text-red-500"}`}>
          {fps}
        </span>
      </div>
    </div>
  );
}
