"use client";

import { motion } from "framer-motion";
import { Award, Code2, Rocket, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

const traits = [
  {
    icon: Rocket,
    title: "Ships fast",
    body: "MVPs in 2–6 weeks. I scope, build, and deploy without ceremony.",
  },
  {
    icon: Code2,
    title: "Full-stack",
    body: "Comfortable across React/Next, Node/FastAPI, PostgreSQL, and AI layers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    body: "Auth, audit trails, and HIPAA-aware patterns built into every project.",
  },
  {
    icon: Award,
    title: "Client-obsessed",
    body: "Sharp communication, clean handoffs, support after launch.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About"
          title="Built to ship — engineered to last."
          subtitle="I help founders and teams turn ideas into production-grade products. Clean code, sharp UX, and AI baked in."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-relaxed text-zinc-300 md:text-lg"
          >
            <p>{profile.bio}</p>
            <p className="text-zinc-400">
              When I&apos;m not coding, I&apos;m reading papers, breaking things on
              purpose to learn how they work, or fine-tuning models on weekend
              projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glow-border group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20 text-brand-cyan ring-1 ring-white/10">
                  <t.icon size={18} />
                </div>
                <div className="text-sm font-semibold text-white">{t.title}</div>
                <p className="mt-1 text-sm text-zinc-400">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
