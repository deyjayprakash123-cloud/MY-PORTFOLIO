"use client";

import { useEffect, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import gsap from "gsap";

const data = [
  { epoch: 1, loss: 0.8 },
  { epoch: 5, loss: 0.65 },
  { epoch: 10, loss: 0.5 },
  { epoch: 15, loss: 0.42 },
  { epoch: 20, loss: 0.35 },
  { epoch: 25, loss: 0.28 },
  { epoch: 30, loss: 0.22 },
  { epoch: 35, loss: 0.18 },
  { epoch: 40, loss: 0.15 },
  { epoch: 45, loss: 0.12 },
  { epoch: 50, loss: 0.1 },
];

export function DataCorner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { interfaceMode } = usePortfolio();

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(containerRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "center center",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <section className="py-32 relative z-10 max-w-4xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-mono text-green-500 tracking-[0.3em] uppercase mb-2">Metrics</h2>
        <h3 className="text-4xl font-bold text-white tracking-tight">Performance Data</h3>
      </div>
      
      <div ref={containerRef} className="glass rounded-2xl p-6 md:p-10 border border-white/5 relative overflow-hidden">
        {/* Subtle grid background for the chart area */}
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        
        <div className="mb-8">
          <h4 className="text-white/90 font-mono text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Model Training Loss
          </h4>
          <p className="text-white/40 text-sm font-mono mt-1">Simulated performance over 50 epochs</p>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="epoch" 
                stroke="#ffffff40" 
                tick={{ fill: '#ffffff60', fontSize: 12, fontFamily: 'monospace' }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#ffffff40" 
                tick={{ fill: '#ffffff60', fontSize: 12, fontFamily: 'monospace' }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontFamily: 'monospace' }}
                itemStyle={{ color: '#22c55e' }}
              />
              <Area 
                type="monotone" 
                dataKey="loss" 
                stroke="#22c55e" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorLoss)" 
                animationDuration={interfaceMode === 'mobile' ? 0 : 1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
