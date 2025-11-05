import React from 'react';
import HeaderNav from './components/HeaderNav';
import Hero3D from './components/Hero3D';
import HeroContent from './components/HeroContent';
import FloatingShapes from './components/FloatingShapes';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-white">
      <HeaderNav />

      <main className="relative">
        {/* 3D Scene */}
        <Hero3D />

        {/* Decorative/ambient floating shapes */}
        <FloatingShapes />

        {/* Foreground content */}
        <HeroContent />
      </main>

      {/* Subtle bottom gradient to blend into rest of page */}
      <div className="pointer-events-none relative z-10 h-40 w-full"
           style={{
             background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)',
           }}
      />

      {/* Placeholder sections (non-intrusive) */}
      <section id="work" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-xl md:text-2xl font-semibold text-white/90">Selected Work</h2>
          <p className="mt-2 text-white/60">Curated case studies coming next.</p>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-white/40">
        © {new Date().getFullYear()} Nebula Studio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
