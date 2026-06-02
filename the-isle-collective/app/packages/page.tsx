import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import Button from "@/components/Button";
import packages from "@/lib/packages";

export const metadata: Metadata = {
  title: "Packages",
  description: "Flexible AI automation packages built around your stage of growth. All prices AUD.",
};

const faqs = [
  {
    question: "Do I need to commit to a long-term contract?",
    answer:
      "No lock-in contracts. Monthly retainers can be paused or cancelled with 30 days notice. We believe our results should keep you, not fine print.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "The AI Audit takes 1–2 weeks. Most implementation packages are live within 3–6 weeks depending on complexity. We provide a clear timeline upfront.",
  },
  {
    question: "What if I want to start small and scale up?",
    answer:
      "Start with the AI Audit & Roadmap — it's designed to give you a clear picture before committing to implementation. From there, you can add modules as you grow.",
  },
  {
    question: "Do you work with any industry?",
    answer:
      "We work across a wide range of industries, with particular experience in professional services, construction and design, legal, and hospitality. If you're unsure, book a free chat.",
  },
  {
    question: "What tools and platforms do you integrate with?",
    answer:
      "We work with your existing tech stack — CRMs, email platforms, project management tools, and more. We handle the technical setup so you don't have to.",
  },
  {
    question: "Is the monthly fee ongoing?",
    answer:
      "Yes. Monthly retainers include ongoing optimisation, monitoring and improvements. AI systems need regular tuning to stay effective — we handle all of that.",
  },
];

export default function Packages() {
  return (
    <div className="pt-20">
      {/* Hero with image */}
      <section className="relative text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[55vh] flex items-center">
        <Image
          src="/images/business-growth.jpg"
          alt="Business growth strategy"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-navy/80 to-ocean/70" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-6 leading-tight">
            Flexible packages built around your stage of growth
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Start with an audit or go all-in. Every package is designed to deliver measurable results from day one.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <Section className="bg-mist">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Section>

      {/* Mid-page banner */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src="/images/ai-tech.jpg"
          alt="AI technology powering business automation"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ocean/80 flex items-center justify-center">
          <p className="font-heading font-bold text-white text-xl sm:text-2xl text-center px-4">
            All prices AUD · No lock-in contracts · Ongoing support included
          </p>
        </div>
      </div>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl">Common Questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy text-white text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
          Not sure which package is right for you?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Book a free AI audit — we&apos;ll map your workflows and recommend the right starting point.
        </p>
        <Button href="/contact" variant="secondary" size="lg">
          Book a Free AI Audit
        </Button>
      </Section>
    </div>
  );
}
