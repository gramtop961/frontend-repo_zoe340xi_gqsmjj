import React from 'react';

export default function HeaderNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-sky-400/20 border border-sky-300/30 backdrop-blur-md shadow-[0_0_30px_rgba(62,198,255,0.45)]" />
          <span className="text-white/90 tracking-tight font-semibold text-lg">Thamilarsan G P</span>
          <span className="hidden md:inline text-white/50">— Senior Full‑Stack Developer</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#work"
            className="hidden md:inline-block text-white/70 hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="hidden md:inline-block text-white/70 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-block text-white/70 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-white/90 backdrop-blur-xl hover:bg-white/10 hover:border-white/25 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
