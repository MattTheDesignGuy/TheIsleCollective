import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Case Study — AJL Studio",
  description: "How The Isle Collective transformed AJ Lawson Designs with AI-powered lead management and workflow automation.",
};

const systemsImplemented = [
  "Automated lead capture from all enquiry channels",
  "AI lead qualification and categorisation",
  "AI-generated email response drafts",
  "Enquiry summary and prioritisation system",
  "CRM integration and automated follow-up sequences",
  "Internal notification workflows for the team",
  "Scalable workflow automation framework",
];

const outcomes = [
  { stat: "↓ 70%", label: "Reduction in admin time" },
  { stat: "3×", label: "Improvement in response consistency" },
  { stat: "100%", label: "Leads captured and actioned" },
  { stat: "< 5min", label: "Average lead response time" },
];

export default function CaseStudy() {
  return (
    <div className="pt-20">
      {/* Hero with interior design image */}
      <section className="relative text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[65vh] flex items-center">
        <Image
          src="/images/interior-design.jpg"
          alt="AJL Studio — interior design workspace"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-3">Case Study</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-4 leading-tight">
            AJ Lawson Designs / AJL Studio
          </h1>
          <p className="text-white/80 text-lg">Interior Design & Architecture Studio, Australia</p>
        </div>
      </section>

      {/* Results Strip */}
      <section className="bg-mist py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {outcomes.map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">{item.stat}</div>
              <div className="text-charcoal/60 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem — split with image */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">The Challenge</p>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-6">
              Drowning in leads, missing opportunities
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                AJL Studio was growing — and that growth was creating a new problem. As a highly regarded interior design and architecture practice, enquiries were coming in from multiple channels: website forms, email, Instagram DMs, and referrals. Without a system to manage them, leads were falling through the cracks.
              </p>
              <p>
                The team was spending hours each week manually reading, categorising, and responding to enquiries. Responses were inconsistent, follow-ups were missed, and the studio had no reliable way to know which leads were hot and which could wait.
              </p>
              <p>
                They needed a scalable solution — one that worked in the background so the team could focus on design, not admin.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/images/interior-design.jpg"
              alt="AJL Studio interior design workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section className="bg-mist">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/images/workflow-automation.jpg"
              alt="Automated workflow systems"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
          </div>
          <div>
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-6">
              An end-to-end AI lead management system
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              The Isle Collective designed and built a complete AI-powered lead management and communication system, integrated with the studio&apos;s existing tools. No new software to learn — just automation that works quietly in the background.
            </p>
            <ul className="space-y-2.5">
              {systemsImplemented.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-ocean mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Outcome */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">The Outcome</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-6">
            A scalable, consistent, and efficient operation
          </h2>
          <div className="space-y-4 text-charcoal/70 leading-relaxed mb-10">
            <p>
              Within weeks of implementation, AJL Studio had transformed its operations. Every enquiry — regardless of where it came from — was automatically captured, summarised, and categorised. The team received clean, prioritised lead summaries instead of raw inbox chaos.
            </p>
            <p>
              AI-drafted response templates meant replies went out in minutes rather than hours. Follow-ups were automated. Nothing fell through the cracks. And the whole system continued to improve with monthly optimisation sessions.
            </p>
          </div>

          {/* Testimonial */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/office-modern.jpg"
              alt="Professional workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-navy/90" />
            <div className="relative p-10 border-l-4 border-sky">
              <blockquote className="font-heading font-medium text-white text-lg italic leading-relaxed mb-4">
                &ldquo;The system has completely changed how we handle enquiries. We used to dread Monday mornings — now everything is already organised and ready to action. It&apos;s like having an extra team member who never sleeps.&rdquo;
              </blockquote>
              <div className="text-sky/70 text-sm">— Client, AJL Studio &nbsp;(placeholder testimonial)</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy text-white text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
          Want results like these?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Book a free AI audit and find out exactly where AI can save your business the most time and money.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="secondary" size="lg">Book a Free AI Audit</Button>
          <Button href="/packages" variant="outline" size="lg">View Packages</Button>
        </div>
      </Section>
    </div>
  );
}
