"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-ink-950/70 border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan text-white shadow-lg shadow-brand-violet/30">
            <span className="text-[13px] font-bold">S</span>
          </span>
          <span className="hidden sm:inline text-zinc-100">
            Sheharyar<span className="text-zinc-500">.dev</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="relative z-10">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-200"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-medium text-ink-950"
                >
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
