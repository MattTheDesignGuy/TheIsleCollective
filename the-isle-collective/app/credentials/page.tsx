import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Award, Check, ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Credentials — The Isle Collective",
  description: "Certified AI & Automation Partner. View our Microsoft and Anthropic certifications, real client automations, and before/after case studies.",
};

const msBadges = [
  {
    title: "Leverage AI tools and resources for your business",
    issuer: "Microsoft",
    date: "June 2026",
    file: "/credentials/ms-leverage-ai-tools.pdf",
    icon: "🤖",
  },
  {
    title: "Build effective generative AI solutions in your organization",
    issuer: "Microsoft",
    date: "June 2026",
    file: "/credentials/ms-build-generative-ai.pdf",
    icon: "🏗️",
  },
  {
    title: "Understand the foundations of generative AI for business leaders",
    issuer: "Microsoft",
    date: "June 2026",
    file: "/credentials/ms-foundations-genai.pdf",
    icon: "🧠",
  },
  {
    title: "Embrace responsible AI principles and practices",
    issuer: "Microsoft",
    date: "June 2026",
    file: "/credentials/ms-responsible-ai.pdf",
    icon: "⚖️",
  },
  {
    title: "Create business value with AI",
    issuer: "Microsoft",
    date: "June 2026",
    file: "/credentials/ms-create-business-value.pdf",
    icon: "📈",
  },
  {
    title: "Scale AI in your organization",
    issuer: "Microsoft",
    date: "June 2026",
    file: "/credentials/ms-scale-ai.pdf",
    icon: "🚀",
  },
];

const anthropicCerts = [
  {
    title: "AI Fluency: AI Capabilities & Limitations",
    issuer: "Anthropic",
    date: "2026",
    file: "/credentials/anthropic-ai-fluency-capabilities.pdf",
    color: "from-[#c5a97d]/20 to-[#8b6f47]/10",
    border: "border-[#c5a97d]/30",
  },
  {
    title: "AI Fluency for Small Businesses",
    issuer: "Anthropic × PayPal",
    date: "2026",
    file: "/credentials/anthropic-ai-fluency-small-business.pdf",
    color: "from-[#4f9e5e]/20 to-[#2d6e3a]/10",
    border: "border-[#4f9e5e]/30",
  },
];

const automations = [
  {
    client: "AJL Studio",
    industry: "Interior Design",
    automation: "AI Lead Management & Email Automation",
    description: "Automated lead qualification pipeline that captures, scores and responds to new enquiries 24/7 — without a single manual touchpoint.",
    tools: ["Make.com", "Claude AI", "Gmail", "CRM"],
  },
  {
    client: "Service Business",
    industry: "Trade & Services",
    automation: "Booking Confirmation & Follow-Up",
    description: "Trigger-based workflows that send booking confirmations, reminders, and post-service follow-ups automatically — keeping clients engaged with zero admin.",
    tools: ["Zapier", "SMS Gateway", "Google Calendar"],
  },
  {
    client: "Consulting Firm",
    industry: "Professional Services",
    automation: "Proposal Generation & Onboarding",
    description: "AI-assisted proposal drafts generated from intake form responses — reducing proposal time from hours to minutes.",
    tools: ["Make.com", "Claude AI", "Google Docs", "DocuSign"],
  },
];

const caseStudyStats = [
  { stat: "70%", label: "Reduction in admin time" },
  { stat: "3×", label: "Faster client response" },
  { stat: "100%", label: "Leads actioned" },
  { stat: "10–20", label: "Hours saved per week" },
];

export default function CredentialsPage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-base overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(46,111,168,0.18)_0%,_transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/20 rounded-full px-5 py-2 mb-8">
            <Award size={16} className="text-sky" />
            <span className="text-sky font-semibold text-sm uppercase tracking-widest">Verified Credentials</span>
          </div>
          <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Certified AI &<br />Automation Partner
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Our expertise isn&apos;t theoretical — it&apos;s backed by certifications from Microsoft and Anthropic,
            and proven in real client results.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span className="font-semibold text-white/70">Microsoft</span>
              <span>·</span>
              <span>6 Achievements</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span className="font-semibold text-white/70">Anthropic</span>
              <span>·</span>
              <span>2 Certificates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Badges */}
      <Section className="bg-surface border-y border-white/8">
        <div className="mb-12">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Microsoft Learn</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">Microsoft Achievements</h2>
          <p className="text-white/50 mt-3 max-w-xl">
            Completed through Microsoft&apos;s official AI learning path — signed by Satya Narayana Nadella, June 2026.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {msBadges.map((badge) => (
            <Link
              key={badge.title}
              href={badge.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-base border border-white/8 rounded-2xl p-6 hover:border-sky/30 hover:bg-base/80 transition-all duration-200 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#00A4EF]/10 border border-[#00A4EF]/20 flex items-center justify-center text-2xl">
                  {badge.icon}
                </div>
                <ExternalLink size={14} className="text-white/20 group-hover:text-sky/60 transition-colors mt-1" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#00A4EF] text-xs font-bold uppercase tracking-wider">Microsoft</span>
                  <span className="text-white/20 text-xs">· {badge.date}</span>
                </div>
                <p className="text-white font-semibold text-sm leading-snug">{badge.title}</p>
              </div>
              <div className="mt-auto pt-2 border-t border-white/5">
                <span className="text-sky/60 text-xs group-hover:text-sky transition-colors flex items-center gap-1">
                  View Certificate <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Anthropic Certificates */}
      <Section className="bg-base">
        <div className="mb-12">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Anthropic</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">Anthropic Certificates</h2>
          <p className="text-white/50 mt-3 max-w-xl">
            Certificates of completion from Anthropic — the team behind Claude AI.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {anthropicCerts.map((cert) => (
            <Link
              key={cert.title}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-br ${cert.color} border ${cert.border} rounded-2xl p-7 hover:opacity-90 transition-all duration-200`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                  <Check size={12} className="text-white/70" />
                  <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">Certificate of Completion</span>
                </div>
                <ExternalLink size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
              </div>
              <p className="text-white font-bold text-lg leading-snug mb-3">{cert.title}</p>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <span>{cert.issuer}</span>
                <span>·</span>
                <span>{cert.date}</span>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10">
                <span className="text-white/50 text-xs group-hover:text-white/80 transition-colors flex items-center gap-1">
                  View Certificate <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Real Client Automations */}
      <Section className="bg-surface border-y border-white/8">
        <div className="mb-12">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Real Work</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">Client Automations</h2>
          <p className="text-white/50 mt-3 max-w-xl">
            Live automation systems we&apos;ve built and deployed for real Australian businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {automations.map((a) => (
            <div key={a.client} className="bg-base border border-white/8 rounded-2xl p-6 flex flex-col gap-4">
              <div>
                <span className="text-xs text-white/30 uppercase tracking-widest">{a.industry}</span>
                <h3 className="text-white font-bold text-base mt-1">{a.automation}</h3>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">{a.description}</p>
              <div className="mt-auto pt-4 border-t border-white/5">
                <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Tools used</p>
                <div className="flex flex-wrap gap-2">
                  {a.tools.map((tool) => (
                    <span key={tool} className="bg-ocean/10 border border-ocean/15 text-sky/80 text-xs rounded-full px-3 py-1">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Before / After Case Study */}
      <Section className="bg-base">
        <div className="mb-12">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Before & After</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">Case Study: AJL Studio</h2>
          <p className="text-white/50 mt-3 max-w-xl">
            A real transformation — from inbox chaos to a fully automated lead management system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <div className="bg-red-950/20 border border-red-500/15 rounded-2xl p-7">
            <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-5">Before</p>
            <ul className="space-y-3">
              {[
                "Manually checking inbox for every new lead",
                "Hours spent copy-pasting client details into spreadsheets",
                "Leads going cold while waiting for a response",
                "No consistent follow-up process",
                "Team overwhelmed with admin instead of billable work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                  <span className="text-red-400/60 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-ocean/10 border border-ocean/20 rounded-2xl p-7">
            <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-5">After</p>
            <ul className="space-y-3">
              {[
                "Leads auto-captured and scored the moment they arrive",
                "AI-drafted personalised email responses sent within minutes",
                "Full CRM record created automatically — zero manual entry",
                "Automated follow-up sequences keep every lead warm",
                "Team freed to focus on design work and client relationships",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                  <Check size={14} className="text-ocean mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {caseStudyStats.map((item) => (
            <div key={item.label} className="bg-surface border border-white/8 rounded-2xl px-4 py-6 text-center">
              <div className="font-heading font-extrabold text-3xl text-sky mb-1">{item.stat}</div>
              <div className="text-white/40 text-xs">{item.label}</div>
            </div>
          ))}
        </div>

        <Button href="/case-study" variant="secondary">Read the Full Case Study</Button>
      </Section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white text-center overflow-hidden bg-surface border-t border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,111,168,0.15)_0%,_transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Ready to work with a certified AI partner?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Book a free AI audit and we&apos;ll show you exactly where automation can save you time and money.
          </p>
          <Button href="/contact" variant="secondary" size="lg">Book a Free AI Audit</Button>
        </div>
      </section>

    </div>
  );
}
