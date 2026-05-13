export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Pixel-perfect, accessible, fast interfaces.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    description: "Reliable APIs, databases, and integrations.",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "SQL", "REST"],
  },
  {
    title: "AI / ML",
    description: "LLMs, RAG, automation, and intelligent assistants.",
    items: [
      "OpenAI",
      "LangChain",
      "Hugging Face",
      "Vector DBs",
      "Prompt Engineering",
      "Model Fine-tuning",
    ],
  },
  {
    title: "Tools & Cloud",
    description: "From code to production.",
    items: ["Git", "Docker", "Vercel", "AWS", "Linux", "CI/CD"],
  },
];

export const marqueeSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Tailwind CSS",
  "OpenAI",
  "LangChain",
  "Docker",
  "AWS",
  "Framer Motion",
  "REST APIs",
];
