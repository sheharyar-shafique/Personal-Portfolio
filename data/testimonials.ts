export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  message: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar?: string;
};

// TODO: Replace with real client testimonials.
// When clients submit a review through the form on your site,
// you'll get an email — vet it, then paste it here and redeploy.
export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Khan",
    role: "Founder",
    company: "CloudPath",
    message:
      "Sheharyar delivered our AI dashboard ahead of schedule and the quality blew us away. Communication was sharp the whole way through.",
    rating: 5,
  },
  {
    name: "Sara Williams",
    role: "Product Manager",
    company: "MedScribe",
    message:
      "We needed a HIPAA-grade transcription pipeline and he shipped one that actually works. Easily the best freelancer we've worked with this year.",
    rating: 5,
  },
  {
    name: "Daniel Chen",
    role: "CTO",
    company: "VoxReach",
    message:
      "Hired him for an LLM integration and ended up keeping him for three more projects. Senior-level engineering, founder-friendly pricing.",
    rating: 5,
  },
];
