import type { Metadata } from "next";
import Image from "next/image";
import { Clock, TrendingUp, Mail, BarChart3, Search, Lightbulb, Wrench, Rocket, Scale, Check, ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import ProcessStep from "@/components/ProcessStep";
import ValueProp from "@/components/ValueProp";
import PricingCard from "@/components/PricingCard";
import Button from "@/components/Button";
import packages from "@/lib/packages";

export const metadata: Metadata = {
  title: "The Isle Collective — AI-Powered Systems & Automation",
  description: "We help Australian businesses save time, reduce admin and grow through AI-powered systems and automation.",
};

const valueProps = [
  { icon: Clock, title: "Save 10–20+ hrs/week", description: "Reclaim your time by automating repetitive tasks." },
  { icon: BarChart3, title: "Reduce manual admin", description: "Let systems handle the paperwork so you don’t have to." },
  { icon: Mail, title: "Faster client response", description: "AI-assisted communication keeps every lead warm." },
  { icon: TrendingUp, title: "Scalable growth", description: "Build systems that grow with your business, not against it." },
];

const processSteps = [
  { step: 1, title: "Audit", description: "We map your current workflows and identify where time is lost.", icon: Search },
  { step: 2, title: "Identify", description: "Pinpoint the highest-impact AI opportunities for your business.", icon: Lightbulb },
  { step: 3, title: "Design", description: "We design automation systems built specifically for how you work.", icon: Wrench },
  { step: 4, title: "Implement", description: "Hands-on build and integration — we do the heavy lifting.", icon: Rocket },
  { step: 5, title: "Scale", description: "Ongoing optimisation and strategy to keep growing.", icon: Scale },
];

const deliverables = [
  "AI Lead Management",
  "Market Entry & Go-To-Market Plans",
  "AI Email Automation",
  "AI Operations & Admin",
  "Business Process Automation",
];

const benefits = [
  "Save 10–20+ hours per week on admin",
  "Reduce manual data entry and errors",
  "Faster, more consistent client responses",
  "Improve team efficiency and clarity",
  "Build scalable systems that grow with you",
  "We empower your people — not replace them",
];

const featuredPackages = packages.filter((p) =>
  ["lead-management", "operations", "transformation"].includes(p.id)
);

export default function Home() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative text-white py-36 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh] flex items-center">
        <Image
          src="/images/hero-ocean.jpg"
          alt="Coastal ocean, calm and expansive"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-base/95 via-navy/80 to-ocean/50" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — content, left-aligned */}
            <div>
              <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-4">AI-Powered Systems & Automation</p>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                We help businesses save time, reduce admin, and grow through AI-powered systems.
              </h1>
              <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-10">
                Australian-based consultancy delivering practical AI automation so you can focus on the work that matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="secondary" size="lg">Book a Consult</Button>
                <Button href="/packages" variant="outline" size="lg">View Packages</Button>
              </div>
            </div>

            {/* Right — logo, visible but softened */}
            <div className="hidden lg:flex items-center justify-end pr-8 pointer-events-none select-none">
              <Image
                src="/logos/ed712f47-d51f-458a-91d7-3502b922fc3c-cropped-dark.PNG"
                alt=""
                width={480}
                height={680}
                className="h-auto w-full max-h-[70vh] object-contain opacity-100 mix-blend-screen"
                aria-hidden="true"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Value Props */}
      <Section className="bg-surface border-y border-white/8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {valueProps.map((vp) => (
            <ValueProp key={vp.title} {...vp} />
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-base">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Our Philosophy</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-6">
              Automate the repetitive.<br />Amplify the valuable.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              We believe every business deserves to reclaim its time. The Isle Collective designs AI-powered systems
              that handle the routine, freeing you and your team to focus on the relationships, creativity, and
              strategy that truly drive growth.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              We&apos;re here to empower people, not replace them.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/office-modern.jpg"
              alt="Modern collaborative workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent" />
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-surface border-y border-white/8">
        <div className="text-center mb-12">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step) => (
            <ProcessStep key={step.step} {...step} />
          ))}
        </div>
      </Section>

      {/* Full-bleed AI banner */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/images/ai-tech.jpg"
          alt="AI technology and automation"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-base/75 flex items-center justify-center">
          <p className="font-heading font-extrabold text-white text-2xl sm:text-4xl text-center px-4">
            Practical AI. Real outcomes. Zero jargon.
          </p>
        </div>
      </div>

      {/* What We Deliver */}
      <Section className="bg-base">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">What We Deliver</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-6">
              End-to-end AI systems for growing businesses
            </h2>
            <ul className="space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-ocean/20 border border-ocean/30 flex items-center justify-center flex-shrink-0">
                    <ArrowRight size={12} className="text-sky" />
                  </span>
                  <span className="text-white/80 font-medium">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Why The Isle Collective</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-6">
              Real results, no fluff
            </h2>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={18} className="text-ocean mt-0.5 flex-shrink-0" />
                  <span className="text-white/70">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Featured Packages */}
      <Section className="bg-surface border-y border-white/8">
        <div className="text-center mb-12">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Flexible Pricing</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-4">Popular Packages</h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Flexible packages built around your stage of growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {featuredPackages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="text-center">
          <Button href="/packages" variant="outline">View All Packages</Button>
        </div>
      </Section>

      {/* Case Study split layout */}
      <section className="bg-base border-y border-white/8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[560px]">

            {/* Left: AJL branded image */}
            <div className="relative min-h-[380px] lg:min-h-full">
              <Image
                src="/images/ajl-portfolio.png"
                alt="AJL Studio interior design and architecture"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-base/60 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-base/80 to-transparent lg:hidden" />
            </div>

            {/* Right: content */}
            <div className="flex flex-col justify-center px-8 py-14 lg:px-14">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/ajl-logo.png"
                  alt="AJL Studio"
                  width={48}
                  height={40}
                  className="h-10 w-auto [filter:brightness(0)_invert(1)] opacity-70"
                />
                <span className="text-white/30 text-xs uppercase tracking-widest">Case Study</span>
              </div>
              <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-4">
                AJ Lawson Designs<br />
                <span className="text-sky">/ AJL Studio</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                A leading design studio was drowning in manual lead management and inbox chaos. We built an
                end-to-end AI system: automated lead qualification, AI-drafted email responses, and workflow
                automation, transforming their operations overnight.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { stat: "70%", label: "Less admin time" },
                  { stat: "3×", label: "Response speed" },
                  { stat: "100%", label: "Leads actioned" },
                ].map((item) => (
                  <div key={item.label} className="bg-surface border border-white/8 rounded-xl px-3 py-4 text-center">
                    <div className="font-heading font-extrabold text-2xl text-sky">{item.stat}</div>
                    <div className="text-white/40 text-xs mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <Button href="/case-study" variant="secondary">Read the Full Case Study</Button>
            </div>

          </div>
        </div>
      </section>

      {/* Certified AI & Automation Partner strip */}
      <section className="bg-base border-y border-white/8 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: statement */}
          <div className="text-center lg:text-left flex-1">
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Verified Expertise</p>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl mb-3">
              Certified AI & Automation Partner
            </h2>
            <p className="text-white/50 text-base max-w-md mx-auto lg:mx-0">
              Backed by certifications from Microsoft and Anthropic — the teams building the world&apos;s leading AI platforms.
            </p>
            <div className="mt-5">
              <Button href="/credentials" variant="outline" size="sm">View All Credentials</Button>
            </div>
          </div>

          {/* Right: cert badges */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:flex-1">
            {/* Microsoft row */}
            <div className="bg-surface border border-white/8 rounded-2xl px-6 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00A4EF]/10 border border-[#00A4EF]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">Ⓜ</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Microsoft</p>
                <p className="text-white/40 text-xs">6 AI Learning Achievements · June 2026</p>
              </div>
              <ArrowRight size={14} className="text-white/20 ml-auto" />
            </div>
            {/* Anthropic row */}
            <div className="bg-surface border border-white/8 rounded-2xl px-6 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-400/10 border border-orange-400/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Anthropic</p>
                <p className="text-white/40 text-xs">AI Fluency Certificates · 2026</p>
              </div>
              <ArrowRight size={14} className="text-white/20 ml-auto" />
            </div>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white text-center overflow-hidden bg-surface border-t border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,111,168,0.15)_0%,_transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Ready to reclaim your time?</h2>
          <p className="text-white/60 text-lg mb-8">
            Book a consult and discover exactly where automation can unlock the most value in your business.
          </p>
          <Button href="/contact" variant="secondary" size="lg">Book a Consult</Button>
        </div>
      </section>
    </div>
  );
}
