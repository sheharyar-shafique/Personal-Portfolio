export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string; // path under /public, e.g. "/projects/p1.png"
  live?: string;
  github?: string;
  tags?: ("AI" | "Web" | "Mobile" | "Backend" | "Full-Stack")[];
  role?: string;
  featured?: boolean;
};

// TODO: Replace these placeholders with your real projects.
// Save screenshots to /public/projects/ and reference them as "/projects/<file>.png".
export const projects: Project[] = [
  {
    title: "AI Voice Assistant",
    description:
      "Real-time voice assistant powered by Whisper + GPT-4 with streaming responses and tool use for calendar, email, and search.",
    tech: ["Next.js", "Python", "FastAPI", "OpenAI", "WebSockets"],
    tags: ["AI", "Full-Stack"],
    role: "Solo build — end to end",
    featured: true,
  },
  {
    title: "Medical Notes SaaS",
    description:
      "HIPAA-grade transcription + structured note generation for clinicians. 5-minute consults → exportable SOAP notes.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Stripe"],
    tags: ["AI", "Full-Stack", "Web"],
    role: "Solo build — end to end",
    featured: true,
  },
  {
    title: "Document RAG Chatbot",
    description:
      "Upload PDFs and chat with them. Vector search over 10k+ docs with citations and source highlighting.",
    tech: ["Python", "LangChain", "pgvector", "FastAPI", "React"],
    tags: ["AI", "Backend"],
    role: "Solo build",
  },
  {
    title: "E-commerce Storefront",
    description:
      "Production-ready storefront with Stripe checkout, admin dashboard, inventory sync, and order tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind"],
    tags: ["Full-Stack", "Web"],
    role: "Solo build",
  },
  {
    title: "Fitness Mobile App",
    description:
      "Cross-platform fitness tracker with workout plans, progress charts, and AI-coached form feedback.",
    tech: ["React Native", "Node.js", "PostgreSQL", "OpenAI"],
    tags: ["Mobile", "AI"],
    role: "Solo build",
  },
  {
    title: "Outbound Call Campaign Engine",
    description:
      "Voice-AI calling agent that runs campaigns, books appointments, and logs every call into a CRM.",
    tech: ["FastAPI", "Twilio", "OpenAI", "PostgreSQL", "Next.js"],
    tags: ["AI", "Full-Stack"],
    role: "Backend + AI",
  },
];
