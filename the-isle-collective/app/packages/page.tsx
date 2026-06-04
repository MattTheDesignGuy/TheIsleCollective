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
    answer: "No lock-in contracts. Monthly retainers can be paused or cancelled with 30 days notice. We believe our results should keep you, not fine print.",
  },
  {
    question: "How long does implementation take?",
    answer: "The AI Audit takes 1 to 2 weeks. Most implementation packages are live within 3 to 6 weeks depending on complexity. We provide a clear timeline upfront.",
  },
  {
    question: "What if I want to start small and scale up?",
    answer: "Start with the AI Audit & Roadmap. It is designed to give you a clear picture before committing to implementation. From there, you can add modules as you grow.",
  },
  {
    question: "Do you work with any industry?",
    answer: "We work across a wide range of industries, with particular experience in professional services, construction and design, legal, and hospitality. If you are unsure, book a free chat.",
  },
  {
    question: "What tools and platforms do you integrate with?",
    answer: "We work with your existing tech stack, including CRMs, email platforms, project management tools, and more. We handle the technical setup so you do not have to.",
  },
  {
    question: "Is the monthly fee ongoing?",
    answer: "Yes. Monthly retainers include ongoing optimisation, monitoring and improvements. AI systems need regular tuning to stay effective, and we handle all of that.",
  },
];

export default function Packages() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[55vh] flex items-center">
        <Image
          src="/images/Gemini_Generated_Image_uym11auym11auym1.png"
          alt="Premium dark office workspace with city skyline at night"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-base/95 via-navy/85 to-ocean/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-6 leading-tight">
            Flexible packages built around your stage of growth
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Start with an audit or go all-in. Every package is designed to deliver measurable results from day one.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <Section className="bg-base">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Section>

      {/* Banner */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src="/images/ai-tech.jpg"
          alt="AI technology powering business automation"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-base/80 flex items-center justify-center">
          <p className="font-heading font-bold text-white text-xl sm:text-2xl text-center px-4">
            All prices AUD &middot; No lock-in contracts &middot; Ongoing support included
          </p>
        </div>
      </div>

      {/* FAQ */}
      <Section className="bg-surface border-y border-white/8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">Common Questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white text-center bg-base border-t border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,111,168,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Not sure which package is right for you?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Book a consult and we will map your workflows and recommend the right starting point.
          </p>
          <Button href="/contact" variant="secondary" size="lg">Book a Consult</Button>
        </div>
      </section>
    </div>
  );
}
