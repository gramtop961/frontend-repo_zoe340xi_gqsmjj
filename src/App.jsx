import React from 'react';
import HeaderNav from './components/HeaderNav';
import Hero3D from './components/Hero3D';
import HeroContent from './components/HeroContent';
import FloatingShapes from './components/FloatingShapes';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b1020] font-sans text-white">
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
      <div
        className="pointer-events-none relative z-10 h-40 w-full"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,16,32,0) 0%, rgba(11,16,32,1) 80%)',
        }}
      />

      {/* ABOUT ME */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div
            className="absolute left-1/2 top-0 h-[40vh] w-[60vw] -translate-x-1/2 blur-3xl opacity-50"
            style={{ background: 'radial-gradient(closest-side, rgba(62,198,255,0.12), transparent)' }}
          />
        </div>
        <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_140px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-2xl bg-sky-400/20 blur-xl" />
              <img
                src="https://assets.leetcode.com/users/thamilarasangp/avatar_1760631800.png"
                alt="Thamilarsan G P avatar"
                className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl object-cover border border-white/15 shadow-[0_10px_60px_rgba(62,198,255,0.35)]"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">About Me</h2>
              <p className="mt-3 max-w-3xl text-white/70">
                I’m a senior full‑stack engineer crafting ultra‑modern product experiences. I fuse clean architecture
                with immersive 3D, building fast, accessible interfaces and robust cloud backends. My approach is
                design‑driven, performance‑minded, and relentlessly user‑focused.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">TypeScript</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">React</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">Next.js</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">Node</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">FastAPI</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">Three.js</span>
              </div>
            </div>
          </div>
          {/* ambient coding icons */}
          <div className="pointer-events-none relative mt-6">
            <span className="absolute -top-2 right-8 text-sky-300/70 drop-shadow-[0_0_12px_rgba(62,198,255,0.7)]">{`</>`}</span>
            <span className="absolute -bottom-4 left-10 text-sky-300/70 drop-shadow-[0_0_12px_rgba(62,198,255,0.7)]">JS</span>
            <span className="absolute -bottom-6 right-1/3 text-sky-300/60 drop-shadow-[0_0_12px_rgba(62,198,255,0.7)]">React</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected Projects</h2>
          <a href="#contact" className="text-sky-300 hover:text-sky-200 transition">Get in touch</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: 'Realtime Trading Dashboard',
            desc: 'Low‑latency charts, WebSockets, 3D depth, audit‑ready.',
            tags: ['React', 'WebSockets', 'D3']
          }, {
            title: '3D Product Customizer',
            desc: 'Three.js + parametric configs, blazing UX at scale.',
            tags: ['Three.js', 'Next.js', 'Node']
          }, {
            title: 'AI Knowledge Hub',
            desc: 'Vector search, RAG, multi‑tenant, privacy‑first.',
            tags: ['FastAPI', 'Pinecone', 'OpenAI']
          }, {
            title: 'Design System — Neon',
            desc: 'Token‑driven, accessible, motion‑ready components.',
            tags: ['Radix', 'Tailwind', 'Framer']
          }].map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_30px_120px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background:
                'repeating-linear-gradient(135deg, rgba(62,198,255,0.06) 0 2px, transparent 2px 6px)'}} />
              <div className="relative">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs text-sky-200 shadow-[0_0_16px_rgba(62,198,255,0.25)]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60" style={{ background:
                'radial-gradient(400px 200px at 60% 20%, rgba(62,198,255,0.25), transparent)'}} />
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS / TOOLBOX */}
      <section id="skills" className="relative mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Skills & Toolbox</h2>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0" style={{ background:
            'radial-gradient(600px 200px at 20% 0%, rgba(62,198,255,0.15), transparent)'}} />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 relative z-10">
            {['React','TypeScript','Next.js','Node','FastAPI','PostgreSQL','MongoDB','Three.js','Tailwind','Framer','AWS','Docker'].map((s) => (
              <div key={s} className="flex flex-col items-center gap-3">
                <div className="relative h-16 w-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(62,198,255,0.25)]">
                  <div className="absolute inset-0 rounded-full" style={{ background:
                    'radial-gradient(closest-side, rgba(255,255,255,0.25), rgba(255,255,255,0.05))'}} />
                  <div className="absolute -inset-0.5 rounded-full opacity-40 blur-md" style={{ background:
                    'conic-gradient(from 0deg, rgba(62,198,255,0.35), transparent 60%)'}} />
                </div>
                <span className="text-sm text-white/80">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="relative mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Experience</h2>
        <div className="relative pl-6">
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-sky-300/30 shadow-[0_0_12px_rgba(62,198,255,0.6)]" />
          {[{
            role: 'Lead Full‑Stack Engineer',
            org: 'Fintech Systems',
            period: '2022 — Present',
            desc: 'Led platform re‑architecture, cut p95 latency by 45%, introduced 3D data UX.'
          },{
            role: 'Senior Frontend Engineer',
            org: 'SaaS Scale‑Up',
            period: '2019 — 2022',
            desc: 'Shipped design system, accessibility pass AA, micro‑frontend migration.'
          },{
            role: 'Full‑Stack Engineer',
            org: 'Product Studio',
            period: '2015 — 2019',
            desc: 'Built end‑to‑end apps across web and cloud, mentored team, CI/CD pipelines.'
          }].map((e, i) => (
            <div key={i} className="relative mb-8 last:mb-0">
              <div className="absolute left-0 top-2 h-3 w-3 -translate-x-[7px] rounded-full bg-sky-300 shadow-[0_0_14px_rgba(62,198,255,0.9)]" />
              <div className="ml-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-base md:text-lg font-semibold">{e.role} • <span className="text-white/70">{e.org}</span></h3>
                  <span className="text-xs text-white/60">{e.period}</span>
                </div>
                <p className="mt-2 text-white/70 text-sm">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl">
          <div className="pointer-events-none absolute -inset-1 opacity-60 blur-2xl" style={{ background:
            'radial-gradient(800px 200px at 50% -10%, rgba(62,198,255,0.18), transparent)'}} />
          <h2 className="relative z-10 text-2xl md:text-3xl font-semibold">Let’s build something <span className="text-sky-300">futuristic</span> together</h2>
          <p className="relative z-10 mt-3 text-white/70 max-w-2xl mx-auto">High‑impact web apps, immersive 3D interfaces, and scalable systems. I’m available for select collaborations and leadership roles.</p>
          <a
            href="mailto:hello@thamil.dev"
            className="relative z-10 mt-8 inline-flex items-center justify-center rounded-xl bg-[#3EC6FF] px-7 py-3 text-black font-medium shadow-[0_10px_50px_rgba(62,198,255,0.45)] hover:brightness-110 transition"
          >
            Get in Touch
          </a>
          <div className="pointer-events-none absolute inset-0" style={{ background:
            'radial-gradient(400px 800px at 0% 100%, rgba(62,198,255,0.08), transparent), radial-gradient(400px 800px at 100% 100%, rgba(62,198,255,0.08), transparent)'}} />
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-white/40">
        © {new Date().getFullYear()} Thamilarsan G P. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
