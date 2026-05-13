"use client";

import {
  ArrowLeft,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Printer,
} from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";

export default function ResumePage() {
  function onDownload() {
    if (typeof window !== "undefined") window.print();
  }

  return (
    <div className="min-h-screen bg-ink-950 py-8 md:py-12">
      {/* Top toolbar — hidden on print */}
      <div className="no-print mx-auto mb-8 flex max-w-3xl items-center justify-between px-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 hover:bg-white/[0.06]"
        >
          <ArrowLeft size={14} /> Back to site
        </Link>
        <button
          onClick={onDownload}
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-zinc-100"
        >
          <Download size={14} /> Download PDF
        </button>
      </div>

      {/* Resume sheet */}
      <article className="print-page mx-auto max-w-3xl rounded-2xl border border-white/10 bg-ink-900 px-8 py-10 shadow-2xl shadow-black/40 md:px-12 md:py-14">
        {/* Header */}
        <header className="mb-8 border-b border-white/10 pb-7">
          {/* Profile photo + name row */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            {/* Profile photo */}
            <div className="no-print relative shrink-0">
              {/* Glow behind photo */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-brand-violet/40 to-brand-cyan/40 blur-xl opacity-60" />
              {/* Gradient ring */}
              <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-brand-violet via-fuchsia-500 to-brand-cyan p-[3px] shadow-2xl shadow-brand-violet/20">
                <div className="h-full w-full overflow-hidden rounded-full bg-ink-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt={profile.name}
                    className="h-full w-full object-cover object-top brightness-90 contrast-105 saturate-[0.85]"
                  />
                </div>
              </div>
            </div>

            {/* Name + contact */}
            <div className="flex flex-1 flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {profile.name}
                </h1>
                <p className="mt-1.5 text-sm font-medium uppercase tracking-[0.2em] text-brand-cyan">
                  {profile.roles[0]} · {profile.roles[1]}
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-400 md:text-right">
                <li className="flex items-center gap-2 justify-center md:justify-end">
                  <Mail size={12} className="text-brand-cyan" />
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-end">
                  <Phone size={12} className="text-brand-cyan" />
                  {profile.phone}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-end">
                  <MessageCircle size={12} className="text-brand-cyan" />
                  WhatsApp: {profile.phone}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-end">
                  <Linkedin size={12} className="text-brand-cyan" />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-end">
                  <MapPin size={12} className="text-brand-cyan" />
                  {profile.location}
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-zinc-300">
            {resume.summary}
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-6">
            {resume.experience.map((e) => (
              <div key={e.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-white">
                    {e.role}{" "}
                    <span className="text-zinc-400 font-normal">
                      · {e.company}
                    </span>
                  </h3>
                  <span className="text-xs text-zinc-500">{e.period}</span>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-300 marker:text-brand-cyan">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {Object.entries(resume.skills).map(([cat, items]) => (
              <div key={cat}>
                <div className="text-[11px] uppercase tracking-wider text-brand-cyan">
                  {cat}
                </div>
                <div className="mt-1 text-sm text-zinc-300">
                  {items.join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          {resume.education.map((e) => (
            <div key={e.degree} className="mb-4 last:mb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  {e.degree}{" "}
                  <span className="text-zinc-400 font-normal">
                    · {e.school}
                  </span>
                </h3>
                <span className="text-xs text-zinc-500">{e.period}</span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-300 marker:text-brand-cyan">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Footer hint — hidden on print */}
        <div className="no-print mt-10 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-zinc-500">
          <span className="inline-flex items-center gap-2">
            <Printer size={12} /> Use the Download button to save as PDF.
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-zinc-300"
          >
            <Github size={12} /> GitHub
          </a>
        </div>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-7 last:mb-0">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cyan">
        {title}
      </h2>
      {children}
    </section>
  );
}
