import React from "react";
import { motion } from "framer-motion";

export default function SmokeyBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1: rotating conic gradient (red/green haze) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] rounded-full mix-blend-multiply filter blur-[150px] opacity-30"
        style={{ background: 'conic-gradient(from 45deg, rgba(220,38,38,0.15), rgba(34,197,94,0.15), transparent)' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* Layer 2: drifting mist */}
      <motion.div
        className="absolute top-0 right-0 w-[1000px] h-[1000px] rounded-full mix-blend-overlay filter blur-[180px] opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)' }}
        animate={{ x: ["-10%", "20%", "-5%"], y: ["0%", "15%", "-10%"] }}
        transition={{ duration: 60, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* Layer 3: pulsing haze */}
      <motion.div
        className="absolute bottom-0 left-0 w-[900px] h-[900px] rounded-full mix-blend-soft-light filter blur-[200px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
