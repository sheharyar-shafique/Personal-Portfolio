"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { type MouseEvent, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const tagFilters = ["All", "AI", "Full-Stack", "Web", "Mobile", "Backend"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof tagFilters)[number]>("All");

  const filtered = projects.filter(
    (p) =>
      active === "All" ||
      p.tags?.includes(active as NonNullable<Project["tags"]>[number])
  );

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects, hand-built."
          subtitle="A snapshot of products I've shipped — full-stack apps, AI systems, and mobile experiences."
        />

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {tagFilters.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition-all",
                active === t
                  ? "border-white/20 bg-white text-ink-950"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-zinc-500">
          More case studies available on request.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-50, 50], [6, -6]);
  const rotateY = useTransform(mx, [-50, 50], [-6, 6]);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="glow-border group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
    >
      <div className="relative h-44 overflow-hidden">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.2),transparent_60%)]">
            <Sparkles className="text-white/30" size={42} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
        {project.featured && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/15 bg-ink-950/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
            <Sparkles size={10} className="text-yellow-400" /> Featured
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="text-base font-semibold text-white">{project.title}</div>
        <p className="mt-1.5 text-sm text-zinc-400">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-zinc-300"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 text-xs">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-white"
            >
              <ExternalLink size={12} /> Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-white"
            >
              <Github size={12} /> Code
            </a>
          )}
          {project.role && (
            <span className="ml-auto text-[11px] text-zinc-500">{project.role}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
