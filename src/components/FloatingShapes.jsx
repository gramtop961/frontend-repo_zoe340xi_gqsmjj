import React from 'react';
import { motion } from 'framer-motion';

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  ease: 'easeInOut',
  repeatType: 'mirror',
};

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">{/* sits above Spline but doesn't block */}
      {/* Neon glass cube */}
      <motion.div
        initial={{ y: -10, rotate: 15, opacity: 0.9 }}
        animate={{ y: 20, rotate: 35 }}
        transition={floatTransition}
        className="absolute left-[6%] top-[28%] h-24 w-24 md:h-32 md:w-32"
      >
        <div
          className="h-full w-full rounded-[12px] border border-sky-300/60 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(62,198,255,0.35)]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.02))',
          }}
        />
      </motion.div>

      {/* Holographic UI panel */}
      <motion.div
        initial={{ y: 0, rotate: -8, opacity: 0.85 }}
        animate={{ y: -25, rotate: 12 }}
        transition={{ ...floatTransition, duration: 7.5 }}
        className="absolute right-[8%] top-[34%] h-24 w-44 md:h-28 md:w-60"
      >
        <div className="h-full w-full rounded-2xl border border-sky-300/50 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(62,198,255,0.3)]">
          <div className="h-full w-full rounded-2xl opacity-70"
               style={{
                 background:
                   'repeating-linear-gradient( to bottom, rgba(62,198,255,0.15) 0 2px, transparent 2px 6px )',
               }}
          />
        </div>
      </motion.div>

      {/* Liquid metal blob */}
      <motion.div
        initial={{ y: 10, scale: 0.98, opacity: 0.9 }}
        animate={{ y: -18, scale: 1.02 }}
        transition={{ ...floatTransition, duration: 8.5 }}
        className="absolute left-[62%] top-[18%] h-24 w-28 md:h-36 md:w-44"
      >
        <div
          className="h-full w-full border border-sky-200/50 bg-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(62,198,255,0.35)]"
          style={{
            borderRadius: '30% 70% 65% 35% / 35% 35% 65% 65%',
            backgroundImage:
              'radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.35), rgba(255,255,255,0.04))',
          }}
        />
      </motion.div>

      {/* Floating glowing syntax characters */}
      <motion.div
        initial={{ y: 0, opacity: 0.9 }}
        animate={{ y: -12 }}
        transition={{ ...floatTransition, duration: 7 }}
        className="absolute left-[20%] top-[18%] text-sky-300/80 text-2xl md:text-3xl drop-shadow-[0_0_12px_rgba(62,198,255,0.65)]"
      >
        {`const`} <span className="text-white/80">dev</span> = {`{`}
      </motion.div>

      {/* Soft glossy shadow sweep */}
      <div
        className="absolute left-1/2 top-[70%] h-64 w-[60vw] -translate-x-1/2 opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(closest-side, rgba(0,0,0,0.55), rgba(0,0,0,0))',
        }}
      />
    </div>
  );
}
