"use client";

import { useEffect, useState, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const LOG_MESSAGES = [
  "Initializing ML Model...",
  "Loading training dataset (4.2GB)...",
  "Optimizing Weights [Epoch 1/50]",
  "Loss function configured (MSE)",
  "Training in progress...",
  "GPU acceleration engaged...",
  "Epoch 10: Loss = 0.421",
  "Epoch 20: Loss = 0.285",
  "Epoch 30: Loss = 0.150",
  "Evaluating validation set...",
  "Validation Accuracy: 96.4%",
  "Model Checkpoint saved.",
  "Awaiting new input vector...",
];

export function SystemLogs() {
  const { interfaceMode } = usePortfolio();
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (interfaceMode === "unset") return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, `[SYS_TIME ${new Date().toISOString().split('T')[1].slice(0,8)}] ${LOG_MESSAGES[currentIndex]}`];
        if (newLogs.length > 20) newLogs.shift();
        return newLogs;
      });
      currentIndex = (currentIndex + 1) % LOG_MESSAGES.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [interfaceMode]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  if (interfaceMode === "mobile") return null; // Hide on mobile for performance and space

  return (
    <div className="fixed left-0 top-1/4 bottom-1/4 w-64 glass hidden lg:flex flex-col border-l-0 rounded-r-xl overflow-hidden z-40 opacity-80 pointer-events-none">
      <div className="bg-white/5 px-4 py-2 border-b border-white/5 font-mono text-xs text-white/50 tracking-wider">
        LIVE SYSTEM LOGS
      </div>
      <div 
        ref={scrollRef}
        className="flex-1 p-4 font-mono text-[10px] text-green-500/80 overflow-y-hidden flex flex-col justify-end space-y-1"
      >
        {logs.map((log, i) => (
          <div key={i} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
