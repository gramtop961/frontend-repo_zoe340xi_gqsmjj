import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[92vh] md:h-screen w-full overflow-hidden bg-[#0b1020]">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Volumetric light + gradient vignettes (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/40 via-[#0b1020]/20 to-[#0b1020]/90" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[60vh] w-[60vw] rounded-full opacity-70 blur-3xl"
          style={{
            background: 'radial-gradient(closest-side, rgba(62,198,255,0.25), rgba(0,0,0,0))',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(1200px 600px at 50% 120%, rgba(62,198,255,0.06), transparent)',
          }}
        />
      </div>
    </section>
  );
}
