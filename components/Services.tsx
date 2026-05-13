"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

function priceLabel(from: number, to?: number) {
  if (to) return `$${from.toLocaleString()} – $${to.toLocaleString()}`;
  return `from $${from.toLocaleString()}`;
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="What I build, what it costs."
          subtitle="Transparent, scope-based pricing. Custom quotes available for anything outside these tiers."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className={cn(
                "glow-border relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-colors",
                s.featured
                  ? "border-brand-violet/40 bg-gradient-to-br from-brand-violet/10 via-fuchsia-500/5 to-brand-cyan/10"
                  : "border-white/10 bg-white/[0.02]"
              )}
            >
              {s.featured && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/15 bg-ink-950/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                  <Star size={10} className="text-yellow-400" /> Most popular
                </div>
              )}
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-violet/30 to-brand-cyan/30 text-brand-cyan ring-1 ring-white/10">
                <s.icon size={20} />
              </div>
              <div className="text-lg font-semibold text-white">{s.title}</div>
              <p className="mt-1.5 text-sm text-zinc-400">{s.description}</p>

              <div className="my-5 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">
                  {priceLabel(s.priceFrom, s.priceTo)}
                </span>
              </div>

              <ul className="space-y-2 text-sm text-zinc-300">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={14} className="text-brand-cyan" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 hover:underline"
                >
                  Start project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <MagneticButton href="#contact">
            Discuss your project
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
