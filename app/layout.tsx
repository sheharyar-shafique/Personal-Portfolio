import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.roles[0]}`,
  description: profile.tagline,
  keywords: [
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "Freelance",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.roles[0]}`,
    description: profile.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.roles[0]}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-ink-950 text-zinc-100 antialiased">
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
