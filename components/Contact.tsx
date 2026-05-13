"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something exceptional."
          subtitle="Tell me about your project — I usually reply within a few hours."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <ContactCard
              icon={<Mail size={18} />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactCard
              icon={<MessageCircle size={18} />}
              label="WhatsApp"
              value={profile.phone}
              href={`https://wa.me/${profile.whatsapp}`}
              external
            />
            <ContactCard
              icon={<Phone size={18} />}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              icon={<Linkedin size={18} />}
              label="LinkedIn"
              value="sheharyar-shafique"
              href={profile.linkedin}
              external
            />
            <ContactCard
              icon={<MapPin size={18} />}
              label="Location"
              value={profile.location}
            />

            <div className="mt-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Currently accepting new projects
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                Typical response time: under 6 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-violet/25 to-brand-cyan/25 text-brand-cyan ring-1 ring-white/10">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-wider text-zinc-500">
          {label}
        </div>
        <div className="text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );

  const wrap =
    "glow-border rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]";

  if (!href) return <div className={wrap}>{inner}</div>;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={wrap}
    >
      {inner}
    </a>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
      subject: `New project inquiry · ${fd.get("name")}`,
      from_name: "Portfolio Contact Form",
      name: fd.get("name"),
      email: fd.get("email"),
      budget: fd.get("budget"),
      message: fd.get("message"),
    };

    setSubmitting(true);
    try {
      if (!payload.access_key) {
        // No backend wired yet — simulate success so the UX still demos.
        await new Promise((r) => setTimeout(r, 700));
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        return;
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Submission failed");
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="glow-border rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-8"
    >
      <h3 className="text-lg font-semibold text-white">Start a project</h3>
      <p className="mt-1 text-sm text-zinc-400">
        A few details and I&apos;ll come back with next steps.
      </p>

      {success ? (
        <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
          <CheckCircle2 className="text-emerald-400" size={36} />
          <div className="text-base font-semibold text-white">Message sent.</div>
          <p className="max-w-sm text-sm text-zinc-400">
            I&apos;ll reply to {profile.email.split("@")[0]}@… within a few hours.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-2 text-xs text-zinc-400 underline-offset-4 hover:underline"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-cyan/40 focus:bg-white/[0.05]"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-cyan/40 focus:bg-white/[0.05]"
            />
          </div>
          <select
            name="budget"
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-cyan/40 focus:bg-white/[0.05]"
          >
            <option value="" disabled>
              Project budget
            </option>
            <option value="<$1k">Under $1,000</option>
            <option value="$1k–$2k">$1,000 – $2,000</option>
            <option value="$2k–$4k">$2,000 – $4,000</option>
            <option value="$4k+">$4,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell me about your project…"
            rows={5}
            required
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-cyan/40 focus:bg-white/[0.05]"
          />

          {error && (
            <div className="rounded-lg border border-rose-500/30 bg-rose-500/5 px-3 py-2 text-xs text-rose-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending…
              </>
            ) : (
              <>
                Send message
                <Send
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}
