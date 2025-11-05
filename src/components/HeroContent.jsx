import React from 'react';
import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="pointer-events-auto relative z-20 mx-auto mt-[22vh] md:mt-[26vh] max-w-5xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_30px_120px_rgba(0,0,0,0.45)]"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(62,198,255,0.9)]" />
          <span>Futuristic Portfolio Experience</span>
        </div>
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
          Ultra 3D. Pure Focus. <span className="text-sky-300">Premium</span> Presence.
        </h1>
        <p className="mt-5 max-w-2xl text-white/70 md:text-lg">
          A cinematic hero with glassmorphism, reflective surfaces, volumetric light and
          elegant motion energy—crafted for award‑level showcases.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-xl bg-[#3EC6FF] px-6 py-3 text-black font-medium shadow-[0_10px_50px_rgba(62,198,255,0.45)] hover:brightness-110 transition"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-xl hover:bg-white/10 hover:border-white/25 transition"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
}
