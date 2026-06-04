import type { Metadata } from "next";
import Image from "next/image";
import { Users, Mail, Settings, Brain, BarChart3, Star } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "AI-powered services to help your business save time, reduce admin and grow.",
};

const services = [
  {
    icon: BarChart3,
    title: "AI Lead Management",
    description: "Never miss another enquiry. We build automated lead capture, categorisation, AI-generated response drafts and CRM integration so every lead is processed and actioned without manual effort.",
  },
  {
    icon: Mail,
    title: "AI Email & Communication Automation",
    description: "Reduce inbox overwhelm. AI drafts emails, summarises enquiries, sends follow-up reminders and generates meeting notes, saving hours every week on communication management.",
  },
  {
    icon: Settings,
    title: "AI Operations & Admin Automation",
    description: "Eliminate repetitive admin. Client onboarding, project setup, internal task creation, reporting and team notifications, all automated and running in the background.",
  },
  {
    icon: Brain,
    title: "AI Knowledge Hub",
    description: "Your own AI assistant trained on your business. Access SOPs, documentation and company knowledge instantly, reducing training time and improving team consistency.",
  },
  {
    icon: Users,
    title: "Market Entry & Go-To-Market Plans",
    description: "Strategic planning backed by AI analysis. Whether entering a new market or launching a product, we build the research, positioning and execution plan to move fast and smart.",
  },
  {
    icon: Star,
    title: "AI Content & Marketing Automation",
    description: "Keep your brand presence consistent without the hours. AI-powered content workflows, social scheduling and marketing automation, done for you.",
  },
];

const addOns = [
  { service: "Hourly Consulting", price: "$250 - $400/hr", note: "Short-term consulting / ad-hoc advice" },
  { service: "Project-Based Engagements", price: "$5,000 - $25,000+", note: "Fixed-scope campaigns, partnerships, investor prep" },
  { service: "AI Audit", price: "From $1,500", note: "Full workflow review and roadmap" },
  { service: "AI Lead Management", price: "From $2,000", note: "Setup and first month" },
  { service: "AI Communication Automation", price: "$1,500 - $3,500+/month", note: "Ongoing management" },
  { service: "AI Operations Automation", price: "From $3,000", note: "Custom workflow builds" },
  { service: "AI Content & Marketing Automation", price: "From $2,500", note: "Content + scheduling systems" },
  { service: "Event / Brand Launch Support", price: "From $3,000", note: "Campaign planning + execution" },
];

export default function Services() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh] flex items-center">
        <Image
          src="/images/services-d.jpg"
          alt="Server infrastructure powering AI automation"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-base/95 via-navy/80 to-ocean/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-6 leading-tight">
            AI systems built to transform how you work
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            From lead management to full business transformation, practical AI solutions with real, measurable outcomes.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <Section className="bg-base">
        <div className="text-center mb-12">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Core Capabilities</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">What we build for you</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="bg-surface border border-white/8 rounded-2xl p-8 hover:border-ocean/30 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-ocean/15 border border-ocean/20 flex items-center justify-center mb-4">
                <svc.icon size={22} className="text-sky" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">{svc.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mid-page image banner */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <Image
          src="/images/abstract-tech.jpg"
          alt="Abstract technology and data visualisation"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-base/80 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <p className="font-heading font-extrabold text-2xl sm:text-4xl max-w-xl">
              Every system we build is designed to pay for itself.
            </p>
            <p className="text-white/60 mt-3 text-lg max-w-lg">
              Real ROI, measured in hours saved, leads converted, and admin eliminated.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing table */}
      <Section className="bg-surface border-y border-white/8">
        <div className="text-center mb-12">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Pricing Overview</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">Add-On & Specialty Services</h2>
          <p className="text-white/50 mt-4">All prices in AUD. Custom quotes available for complex requirements.</p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ocean/20 border-b border-white/10">
                <th className="text-left px-6 py-4 font-heading font-semibold text-sky">Service</th>
                <th className="text-left px-6 py-4 font-heading font-semibold text-sky">Investment</th>
                <th className="text-left px-6 py-4 font-heading font-semibold text-sky hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {addOns.map((row, i) => (
                <tr key={row.service} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-surface" : "bg-base/50"}`}>
                  <td className="px-6 py-4 font-medium text-white/80">{row.service}</td>
                  <td className="px-6 py-4 text-sky font-semibold">{row.price}</td>
                  <td className="px-6 py-4 text-white/40 hidden md:table-cell">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white text-center bg-base border-t border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,111,168,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Not sure where to start?</h2>
          <p className="text-white/60 text-lg mb-8">
            Our AI Audit is the perfect first step, a clear picture of where automation can make the biggest difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">Book a Consult</Button>
            <Button href="/packages" variant="outline" size="lg">View Packages</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
