import {
  Globe,
  Smartphone,
  MessageSquareCode,
  BrainCircuit,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  priceFrom: number;
  priceTo?: number;
  icon: typeof Globe;
  features: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Full-Stack Web App",
    description:
      "Modern, scalable web applications built end-to-end with Next.js, Node, and PostgreSQL.",
    priceFrom: 1500,
    priceTo: 2000,
    icon: Globe,
    features: [
      "Custom UI / UX",
      "REST or GraphQL API",
      "Auth + database",
      "Deployed & live",
    ],
  },
  {
    title: "Full-Stack Mobile App",
    description:
      "Cross-platform iOS + Android apps with native feel, real-time data, and clean architecture.",
    priceFrom: 2000,
    priceTo: 2500,
    icon: Smartphone,
    features: [
      "React Native or Flutter",
      "Auth + push notifications",
      "Offline support",
      "Store submission help",
    ],
  },
  {
    title: "Chatbot Development",
    description:
      "Smart conversational bots for support, sales, or internal tools — wired to your data.",
    priceFrom: 1000,
    icon: MessageSquareCode,
    features: [
      "GPT-powered",
      "Custom personality",
      "Web / WhatsApp / Telegram",
      "Analytics dashboard",
    ],
  },
  {
    title: "LLM Integration",
    description:
      "Drop GPT/Claude/Gemini straight into your product with safe prompts and streaming.",
    priceFrom: 1500,
    icon: BrainCircuit,
    features: [
      "Streaming responses",
      "RAG over your docs",
      "Cost guardrails",
      "Eval-ready",
    ],
  },
  {
    title: "Model Training",
    description:
      "Fine-tune or train models on your data for domain-specific accuracy.",
    priceFrom: 1000,
    icon: GraduationCap,
    features: [
      "Dataset curation",
      "Fine-tuning",
      "Evaluation reports",
      "Inference API",
    ],
  },
  {
    title: "Full AI Web or App",
    description:
      "Complete AI-first product — frontend, backend, model layer, deployed and production-ready.",
    priceFrom: 3000,
    priceTo: 4000,
    icon: Sparkles,
    featured: true,
    features: [
      "Everything above, bundled",
      "RAG + agents",
      "Stripe billing ready",
      "30 days post-launch support",
    ],
  },
];
