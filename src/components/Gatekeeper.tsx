"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";
import { TypeAnimation } from "react-type-animation";

export function GatekeeperUI() {
  const { setInterfaceMode, disassembled, setDisassembled } = usePortfolio();

  const handleSelect = (mode: "workstation" | "mobile") => {
    setInterfaceMode(mode);
    setDisassembled(true);
  };

  const driveImageSrc = "/profile.jpg";

  return (
    <AnimatePresence>
      {!disassembled && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center md:justify-around pointer-events-none px-6"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Biometric ID Panel (Left side) */}
          <motion.div
            className="hidden md:flex flex-col items-center pointer-events-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Holographic Container */}
            <motion.div 
              className="relative p-6 glass rounded-2xl border border-cyan-500/30 bg-black/40 backdrop-blur-md overflow-hidden"
              animate={{ 
                x: [0, -3, 4, -2, 2, 0], 
                filter: ["contrast(1)", "contrast(1.5) hue-rotate(45deg)", "contrast(1)"]
              }}
              transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 5 }}
            >
              {/* Header Text */}
              <div className="mb-4 text-center">
                <div className="text-[10px] font-mono text-cyan-500 tracking-widest uppercase">Authorized Operator</div>
                <div className="text-sm font-bold text-white tracking-widest">JAYAPRAKASH DEY</div>
              </div>

              {/* Photo Mask Container */}
              <div 
                className="relative w-48 h-64 mx-auto mb-4 border border-cyan-500/50 rounded-xl overflow-hidden bg-cyan-900/20"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
                }}
              >
                {/* Fallback glow while loading */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-cyan-500/50 rounded-full animate-ping"></div>
                </div>

                {/* Actual Image */}
                <img 
                  src={driveImageSrc} 
                  alt="Biometric ID" 
                  className="w-full h-full object-cover mix-blend-screen opacity-80"
                  crossOrigin="anonymous"
                />

                {/* Cyan Scanner Line */}
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] z-10"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Hologram overlay scanlines */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,rgba(0,255,194,0.05)_3px,rgba(0,255,194,0.05)_4px)] pointer-events-none"></div>
              </div>

              {/* Footer Text */}
              <div className="text-center mt-2 flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse"></div>
                  <span className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase">Status:</span>
                </div>
                <div className="text-[10px] font-mono text-white/70 tracking-widest">MECHANICAL_ENGINEER_NODE_OUTR</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Terminal Window (Right side) */}
          <motion.div
            className="glass rounded-xl p-8 max-w-lg w-full border border-white/10 shadow-[0_0_50px_rgba(0,255,194,0.1)] backdrop-blur-md bg-black/60 relative pointer-events-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6 border-b border-white/10 pb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-500/80 shadow-[0_0_10px_rgba(0,255,194,0.8)]"></div>
              <span className="text-xs text-white/50 font-mono ml-2">neural_handshake.exe</span>
            </div>
            
            <div className="font-mono text-sm sm:text-base text-cyan-400 min-h-[60px] uppercase tracking-wider">
              <TypeAnimation
                sequence={[
                  "Connection established.",
                  500,
                  "Biometric verification complete.\nInterface Detected.\nSelecting operation mode...",
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                style={{ whiteSpace: 'pre-line' }}
              />
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <button
                onClick={() => handleSelect("mobile")}
                className="w-full py-4 px-4 bg-white/5 hover:bg-white/10 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 font-mono text-xs tracking-[0.2em] text-white/90 rounded-md shadow-[0_0_15px_rgba(0,255,194,0.1)] hover:shadow-[0_0_25px_rgba(0,255,194,0.3)]"
              >
                [ NEURAL LINK (MOBILE) ]
              </button>
              <button
                onClick={() => handleSelect("workstation")}
                className="w-full py-4 px-4 bg-white/5 hover:bg-white/10 border border-white/30 hover:border-white transition-all duration-300 font-mono text-xs tracking-[0.2em] text-white/90 rounded-md"
              >
                [ TERMINAL CONTROL (PC) ]
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
