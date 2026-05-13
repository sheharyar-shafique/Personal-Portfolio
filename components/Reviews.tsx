"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Loader2, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Reviews"
          title="What clients say."
          subtitle="Honest words from teams I've shipped for."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Carousel */}
          <div className="relative">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
              <Quote
                className="absolute right-6 top-6 text-white/5"
                size={86}
                strokeWidth={1.2}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45 }}
                >
                  <StarRow rating={testimonials[index].rating} />
                  <p className="mt-5 text-pretty text-lg leading-relaxed text-zinc-200 md:text-xl">
                    “{testimonials[index].message}”
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-violet to-brand-cyan font-bold text-white">
                      {testimonials[index].name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {testimonials[index].name}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {testimonials[index].role}
                        {testimonials[index].company &&
                          ` · ${testimonials[index].company}`}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index
                      ? "w-8 bg-white"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Show review ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Form */}
          <ReviewForm />
        </div>
      </div>
    </section>
  );
}

function StarRow({
  rating,
  size = 16,
}: {
  rating: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i < rating ? "text-yellow-400" : "text-zinc-700",
            "fill-current"
          )}
        />
      ))}
    </div>
  );
}

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (rating === 0) {
      setError("Please pick a star rating.");
      return;
    }
    const fd = new FormData(e.currentTarget);
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
      subject: `New review · ${rating} stars · ${fd.get("name")}`,
      from_name: "Portfolio Review Form",
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      role: fd.get("role"),
      rating,
      message: fd.get("message"),
    };

    setSubmitting(true);
    try {
      if (!payload.access_key) {
        // No backend wired yet — simulate success so the UX still demos.
        await new Promise((r) => setTimeout(r, 700));
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setRating(0);
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
      setRating(0);
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
      transition={{ duration: 0.6 }}
      className="glow-border rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-8"
    >
      <h3 className="text-lg font-semibold text-white">Leave a review</h3>
      <p className="mt-1 text-sm text-zinc-400">
        Worked with me? Drop a rating and a short note — it means a lot.
      </p>

      {success ? (
        <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
          <CheckCircle2 className="text-emerald-400" size={36} />
          <div className="text-base font-semibold text-white">Thank you!</div>
          <p className="max-w-sm text-sm text-zinc-400">
            Your review has been received and will be published once verified.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-2 text-xs text-zinc-400 underline-offset-4 hover:underline"
          >
            Leave another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {/* Stars */}
          <div>
            <div className="mb-2 text-xs text-zinc-500">Your rating</div>
            <div
              className="flex items-center gap-1"
              onMouseLeave={() => setHovered(0)}
            >
              {Array.from({ length: 5 }).map((_, i) => {
                const v = i + 1;
                const active = (hovered || rating) >= v;
                return (
                  <button
                    type="button"
                    key={v}
                    onMouseEnter={() => setHovered(v)}
                    onClick={() => setRating(v)}
                    className="p-1 transition-transform hover:scale-110"
                    aria-label={`${v} stars`}
                  >
                    <Star
                      size={26}
                      className={cn(
                        "fill-current transition-colors",
                        active ? "text-yellow-400" : "text-zinc-700"
                      )}
                    />
                  </button>
                );
              })}
              {rating > 0 && (
                <span className="ml-2 text-xs text-zinc-400">{rating}/5</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input name="name" placeholder="Your name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="role" placeholder="Role (e.g. Founder)" />
            <Input name="company" placeholder="Company" />
          </div>
          <Textarea
            name="message"
            placeholder="Share your experience working with Sheharyar…"
            rows={4}
            required
          />

          {error && (
            <div className="rounded-lg border border-rose-500/30 bg-rose-500/5 px-3 py-2 text-xs text-rose-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Submitting…
              </>
            ) : (
              "Submit review"
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-cyan/40 focus:bg-white/[0.05]"
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-cyan/40 focus:bg-white/[0.05]"
    />
  );
}
