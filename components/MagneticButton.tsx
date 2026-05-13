"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  download?: boolean;
};

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  download,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  function onMove(e: MouseEvent) {
    if (!ref.current) return;
    const rect = (ref.current as HTMLElement).getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    (ref.current as HTMLElement).style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  }
  function onLeave() {
    if (!ref.current) return;
    (ref.current as HTMLElement).style.transform = "translate(0,0)";
  }

  const base = cn(
    "relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 will-change-transform",
    variant === "primary"
      ? "bg-white text-ink-950 hover:bg-zinc-100 shadow-lg shadow-white/10"
      : "border border-white/15 bg-white/[0.02] text-white hover:bg-white/[0.06]",
    className
  );

  const inner = (
    <motion.span
      whileTap={{ scale: 0.96 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <span
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="inline-block"
      >
        <a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          download={download}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={base}
          style={{ transition: "transform 0.18s cubic-bezier(.2,.8,.2,1)" }}
        >
          {inner}
        </a>
      </span>
    );
  }

  return (
    <span
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
    >
      <button
        ref={ref as React.RefObject<HTMLButtonElement>}
        onClick={onClick}
        className={base}
        style={{ transition: "transform 0.18s cubic-bezier(.2,.8,.2,1)" }}
      >
        {inner}
      </button>
    </span>
  );
}
