export interface Package {
  id: string;
  name: string;
  tagline: string;
  setupPrice: number | null;
  monthlyPrice: number;
  setupLabel?: string;
  monthlyLabel?: string;
  isPopular?: boolean;
  inclusions: string[];
  idealFor?: string;
  outcome?: string;
  optionalNote?: string;
}

const packages: Package[] = [
  {
    id: "ai-audit",
    name: "AI Audit & Roadmap",
    tagline: "Perfect for businesses wanting to understand where AI can create value.",
    setupPrice: 995,
    monthlyPrice: 0,
    setupLabel: "one-off",
    inclusions: [
      "Business workflow review",
      "Process mapping",
      "AI opportunity assessment",
      "Time-saving analysis",
      "Custom implementation roadmap",
      "Priority recommendations",
    ],
    optionalNote: "Optional implementation support from $295/month",
  },
  {
    id: "lead-management",
    name: "AI Lead Management System",
    tagline: "Never miss another lead.",
    setupPrice: 2500,
    monthlyPrice: 295,
    inclusions: [
      "Lead capture automation",
      "AI lead categorisation",
      "Lead summaries",
      "Internal notifications",
      "AI-drafted responses",
      "CRM integration",
      "Monthly optimisation",
    ],
    idealFor: "Builders, architects, designers, consultants, law firms and professional services.",
    outcome: "Every enquiry is automatically processed, organised and actioned.",
  },
  {
    id: "communication",
    name: "AI Communication System",
    tagline: "Reduce time spent managing emails and communication.",
    setupPrice: 3500,
    monthlyPrice: 495,
    inclusions: [
      "AI email drafting",
      "Enquiry summaries",
      "Follow-up reminders",
      "Meeting summaries",
      "Action item generation",
      "Internal communication workflows",
      "Monthly optimisation",
    ],
    outcome: "Faster response times and significantly less inbox management.",
  },
  {
    id: "operations",
    name: "AI Operations System",
    tagline: "Remove repetitive administration from the business.",
    setupPrice: 5000,
    monthlyPrice: 695,
    isPopular: true,
    inclusions: [
      "Client onboarding automation",
      "Project setup workflows",
      "Internal task creation",
      "Reporting automation",
      "Team notifications",
      "Workflow optimisation",
      "Monthly improvements",
    ],
    outcome: "A more efficient business with less manual work.",
  },
  {
    id: "knowledge-hub",
    name: "AI Knowledge Hub",
    tagline: "Your own AI assistant trained on your business.",
    setupPrice: 4500,
    monthlyPrice: 495,
    inclusions: [
      "Company knowledge base",
      "SOP integration",
      "Team documentation",
      "AI assistant setup",
      "Ongoing updates",
      "Monthly maintenance",
    ],
    outcome: "Instant access to information and reduced training time.",
  },
  {
    id: "transformation",
    name: "AI Business Transformation",
    tagline: "A complete AI-powered operating system.",
    setupPrice: null,
    monthlyPrice: 995,
    setupLabel: "From $10,000",
    inclusions: [
      "AI Audit & Roadmap",
      "Lead Management System",
      "Communication System",
      "Operations Automation",
      "Knowledge Hub",
      "Team Training",
      "Quarterly Strategy Reviews",
      "Ongoing optimisation",
    ],
    outcome: "A scalable business supported by AI and automation.",
  },
];

export default packages;
