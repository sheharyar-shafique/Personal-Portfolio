"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-[0.6]"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-brand-violet/40 animate-pulse-glow"
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full bg-brand-cyan/30 animate-pulse-glow"
        animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[30%] bottom-[-20%] h-[380px] w-[380px] rounded-full bg-fuchsia-500/20 animate-pulse-glow"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/60"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              opacity: 0.2 + ((i * 13) % 60) / 100,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
