import React from 'react';
import { motion } from 'framer-motion';

const avatarUrl = 'https://assets.leetcode.com/users/thamilarasangp/avatar_1760631800.png';

export default function HeroContent() {
  return (
    <div className="pointer-events-auto relative z-20 mx-auto mt-[20vh] md:mt-[24vh] max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_30px_120px_rgba(0,0,0,0.45)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-sky-400/20 blur-xl" />
            <img
              src={avatarUrl}
              alt="Thamilarsan G P avatar"
              className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl object-cover border border-white/15 shadow-[0_10px_60px_rgba(62,198,255,0.35)]"
            />
          </div>
          <div className="min-w-0">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(62,198,255,0.9)]" />
              <span>Senior Full‑Stack Developer • 3D‑first Interface Enthusiast</span>
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight">
              Thamilarsan G P — crafting
              <span className="text-sky-300"> ultra‑modern</span> web experiences
              with <span className="text-sky-300">3D</span>,
              performance and <span className="text-sky-300">clean architecture</span>.
            </h1>
            <p className="mt-5 max-w-3xl text-white/70 md:text-lg">
              Building elegant, scalable products across the stack — from reactive front‑ends and real‑time systems
              to reliable cloud back‑ends. Futuristic design, production‑grade code, and delightful performance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-xl bg-[#3EC6FF] px-6 py-3 text-black font-medium shadow-[0_10px_50px_rgba(62,198,255,0.45)] hover:brightness-110 transition"
              >
                View Projects
              </a>
              <a
                href="#resume"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-xl hover:bg-white/10 hover:border-white/25 transition"
              >
                Download Resume
              </a>
              <div className="hidden md:flex items-center gap-2 text-xs text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">TypeScript</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">React</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Node</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">FastAPI</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">3D UI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Holographic syntax characters hovering around content (non-blocking) */}
        <div className="pointer-events-none relative mt-6">
          <div className="absolute -top-6 left-3 text-sky-300/70 drop-shadow-[0_0_12px_rgba(62,198,255,0.65)]">{`</>`}</div>
          <div className="absolute -top-2 right-6 text-sky-300/60 drop-shadow-[0_0_12px_rgba(62,198,255,0.65)]">{`{}`}</div>
          <div className="absolute -bottom-6 left-1/3 text-sky-300/60 drop-shadow-[0_0_12px_rgba(62,198,255,0.65)]">fn()</div>
        </div>
      </motion.div>
    </div>
  );
}
