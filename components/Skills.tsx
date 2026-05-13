"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { marqueeSkills, skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Soft background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-radial-fade opacity-60"
      />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills & tools"
          title="A modern toolkit, used in production."
          subtitle="Not a list of buzzwords — these are the technologies I ship with every week."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="glow-border relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-brand-cyan">
                {g.title}
              </div>
              <div className="text-sm text-zinc-400">{g.description}</div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-200"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent"
        />
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="text-2xl font-semibold tracking-tight text-zinc-700 md:text-4xl"
            >
              {s}
              <span className="mx-6 text-brand-violet/40">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
