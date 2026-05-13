"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan text-sm font-bold text-white">
            S
          </span>
          <div>
            <div className="text-sm font-semibold text-white">{profile.name}</div>
            <div className="text-xs text-zinc-500">
              © {new Date().getFullYear()} · Crafted in {profile.location}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <SocialButton
            href={`mailto:${profile.email}`}
            label="Email"
            icon={<Mail size={16} />}
          />
          <SocialButton
            href={`https://wa.me/${profile.whatsapp}`}
            label="WhatsApp"
            icon={<MessageCircle size={16} />}
            external
          />
          <SocialButton
            href={profile.linkedin}
            label="LinkedIn"
            icon={<Linkedin size={16} />}
            external
          />
          <SocialButton
            href={profile.github}
            label="GitHub"
            icon={<Github size={16} />}
            external
          />
        </div>
      </div>
    </footer>
  );
}

function SocialButton({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
    >
      {icon}
    </a>
  );
}
