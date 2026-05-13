"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import MagneticButton from "./MagneticButton";
import { profile } from "@/data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function useRotatingRole(roles: string[], delay = 2400) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), delay);
    return () => clearInterval(id);
  }, [roles.length, delay]);
  return roles[i];
}

export default function Hero() {
  const role = useRotatingRole(profile.roles);

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden pt-32 pb-16 md:pt-36"
    >
      <AnimatedBackground />

      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Left: copy */}
          <div className="relative z-10">
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
            >
              <Sparkles size={12} className="text-brand-cyan" />
              {profile.availability}
            </motion.div>

            <motion.h1
              variants={item}
              className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m <span className="text-gradient">{profile.firstName}</span>.
              <br />
              <span className="text-zinc-300">I build </span>
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-gradient inline-block"
              >
                {role.toLowerCase()}
              </motion.span>
              <br />
              <span className="text-zinc-300">that ship.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              {profile.tagline} {profile.yearsExperience}+ years of building
              production-grade web, mobile, and AI products for founders and
              teams worldwide.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="#contact">
                Hire me <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="/resume" variant="outline">
                <Download size={16} /> View resume
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-6 text-xs text-zinc-500"
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-cyan" />
                {profile.location}
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to new projects
              </div>
            </motion.div>
          </div>

          {/* Right: portrait card */}
          <motion.div variants={item} className="relative mx-auto md:mx-0">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-brand-violet/40 via-fuchsia-500/30 to-brand-cyan/40 blur-2xl opacity-70" />

              {/* Frame */}
              <div className="glow-border relative h-[420px] w-[320px] overflow-hidden rounded-[2rem] bg-ink-900 ring-1 ring-white/10 md:h-[480px] md:w-[360px]">
                {/* Portrait image with fallback */}
                <PortraitWithFallback />

                {/* Gradient veil */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />

                {/* Bottom card */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-ink-950/70 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan text-sm font-bold text-white">
                      S
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold text-white">
                        {profile.name}
                      </div>
                      <div className="text-xs text-zinc-400">
                        {profile.roles[0]} · {profile.roles[1]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating chips */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-3 top-10 rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 text-xs backdrop-blur-xl shadow-2xl shadow-black/40"
                >
                  <div className="text-zinc-500">Next.js · TypeScript</div>
                  <div className="font-medium text-white">Web App</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-3 top-32 rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 text-xs backdrop-blur-xl shadow-2xl shadow-black/40"
                >
                  <div className="text-zinc-500">OpenAI · FastAPI</div>
                  <div className="font-medium text-white">AI Agent</div>
                </motion.div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 grid grid-cols-2 gap-3 text-center md:grid-cols-4"
            >
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3"
                >
                  <div className="text-lg font-bold text-white">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PortraitWithFallback() {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-ink-800 to-ink-900">
        <div className="text-center">
          <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-brand-violet to-brand-cyan text-5xl font-bold text-white shadow-2xl">
            MS
          </div>
          <p className="mt-6 text-xs text-zinc-500">
            Save your photo as<br />
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-zinc-300">
              public/profile.jpg
            </code>
          </p>
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/profile.jpg"
      alt="Muhammad Sheharyar Shafique"
      onError={() => setErrored(true)}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
