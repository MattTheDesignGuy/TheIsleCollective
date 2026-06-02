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

      {/* Hero — AJL Studio branded image */}
      <section className="relative text-white overflow-hidden min-h-[75vh] flex items-end">
        <Image
          src="/images/ajl-portfolio.png"
          alt="AJL Studio — interior design and architecture"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient rising from bottom so text sits on dark base */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />

        <div className="relative w-full px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
            <div>
              <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-3">Case Study</p>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                AJ Lawson Designs<br />
                <span className="text-sky">/ AJL Studio</span>
              </h1>
              <p className="text-white/70 text-lg mt-3">Interior Design & Architecture Studio, Australia</p>
            </div>
            {/* AJL monogram logo — white version via invert */}
            <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Image
                src="/images/ajl-logo.png"
                alt="AJL Studio logo"
                width={120}
                height={100}
                className="h-20 w-auto invert brightness-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results strip */}
      <section className="bg-navy py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {outcomes.map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-sky">{item.stat}</div>
              <div className="text-white/50 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem — text left, real interior photo right */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">The Challenge</p>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-6">
              Drowning in leads,<br />missing opportunities
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                AJL Studio was growing — and that growth was creating a new problem. As a highly regarded interior design and architecture practice, enquiries were coming in from multiple channels: website forms, email, Instagram DMs, and referrals. Without a system to manage them, leads were falling through the cracks.
              </p>
              <p>
                The team was spending hours each week manually reading, categorising, and responding to enquiries. Responses were inconsistent, follow-ups were missed, and there was no reliable way to know which leads were hot and which could wait.
              </p>
              <p>
                They needed a scalable solution — one that worked in the background so the team could focus on design, not admin.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/images/ajl-interior.jpg"
              alt="AJL Studio interior design project — curved staircase and open living"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
          </div>
        </div>
      </Section>

      {/* Solution — founder photo left, checklist right */}
      <Section className="bg-mist">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/images/ajl-founder.png"
              alt="AJL Studio founder in her studio"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            {/* Overlay badge */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3">
                <Image
                  src="/images/ajl-logo.png"
                  alt="AJL Studio"
                  width={36}
                  height={30}
                  className="h-8 w-auto"
                />
                <div>
                  <p className="font-heading font-bold text-navy text-sm leading-none">AJL Studio</p>
                  <p className="text-charcoal/50 text-xs mt-0.5">Interior Design & Architecture</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-6">
              An end-to-end AI lead management system
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              The Isle Collective designed and built a complete AI-powered lead management and communication system, integrated with the studio&apos;s existing tools. No new software to learn — just automation working quietly in the background.
            </p>
            <ul className="space-y-3">
              {systemsImplemented.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm">
                  <Check size={16} className="text-ocean mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Outcome + Testimonial — interior photo as backdrop */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">The Outcome</p>
              <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-6">
                A scalable, consistent,<br />efficient operation
              </h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Within weeks of implementation, AJL Studio had transformed its operations. Every enquiry — regardless of where it came from — was automatically captured, summarised, and categorised. The team received clean, prioritised lead summaries instead of raw inbox chaos.
                </p>
                <p>
                  AI-drafted response templates meant replies went out in minutes rather than hours. Follow-ups were automated. Nothing fell through the cracks. And the whole system continued to improve with monthly optimisation sessions.
                </p>
              </div>
            </div>

            {/* Testimonial card over interior photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-72">
              <Image
                src="/images/ajl-interior.jpg"
                alt="AJL Studio interior design project"
                fill
                className="object-cover object-right"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/85" />
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div className="text-5xl text-sky/40 font-heading leading-none">&ldquo;</div>
                <blockquote className="font-heading font-medium text-white text-lg italic leading-relaxed">
                  The system has completely changed how we handle enquiries. We used to dread Monday mornings — now everything is already organised and ready to action. It&apos;s like having an extra team member who never sleeps.
                </blockquote>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-sky/40">
                    <Image
                      src="/images/ajl-founder.png"
                      alt="AJL Studio founder"
                      width={40}
                      height={40}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">AJL Studio</p>
                    <p className="text-sky/60 text-xs">Interior Design & Architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
