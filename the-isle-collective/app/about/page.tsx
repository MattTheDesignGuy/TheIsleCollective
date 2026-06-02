import type { Metadata } from "next";
import Image from "next/image";
import { Search, Lightbulb, Wrench, Rocket, Scale, Check } from "lucide-react";
import Section from "@/components/Section";
import ProcessStep from "@/components/ProcessStep";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about The Isle Collective's mission to empower Australian businesses with AI-powered systems.",
};

const steps = [
  { step: 1, title: "Audit", description: "We map your current workflows and identify where time is being lost.", icon: Search },
  { step: 2, title: "Identify", description: "Pinpoint the highest-impact AI opportunities for your specific business.", icon: Lightbulb },
  { step: 3, title: "Design", description: "We design automation systems built specifically for how you work.", icon: Wrench },
  { step: 4, title: "Implement", description: "Hands-on build and integration â€” we do the heavy lifting.", icon: Rocket },
  { step: 5, title: "Scale", description: "Ongoing optimisation and strategy to keep growing.", icon: Scale },
];

const benefits = [
  "Save 10â€“20+ hours per week on admin",
  "Reduce manual data entry and costly errors",
  "Faster, more consistent client responses",
  "Improve team efficiency and communication",
  "Build scalable systems that grow with you",
  "Empower your people â€” not replace them",
  "Practical AI â€” no jargon, no complexity",
  "Ongoing support and continuous optimisation",
];

export default function About() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh] flex items-center">
        <Image
          src="/images/team-collab.jpg"
          alt="Team collaborating on strategy"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-base/95 via-navy/85 to-ocean/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-6 leading-tight">
            We exist to help businesses reclaim their time
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            The Isle Collective is an Australian consultancy that designs and implements AI-powered systems for businesses ready to grow smarter â€” not harder.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <Section id="philosophy" className="bg-base">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-white/10 order-2 lg:order-1">
            <Image
              src="/images/office-modern.jpg"
              alt="Modern collaborative workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/40 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Our Philosophy</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-6">
              Automate the repetitive.<br />Amplify the valuable.
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                We believe the best businesses aren&apos;t the ones that work the hardest â€” they&apos;re the ones that work the smartest. Every hour spent on manual admin is an hour not spent on clients, strategy, or growth.
              </p>
              <p>
                That&apos;s where we come in. We design practical AI systems that handle the routine, the repetitive, and the time-consuming â€” so you can focus on the things that only you can do.
              </p>
              <p>
                We&apos;re not here to replace your team. We&apos;re here to give them superpowers.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pull quote banner */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Image
          src="/images/hero-ocean.jpg"
          alt="Calm coastal waters"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-base/88" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <blockquote className="font-heading font-medium text-2xl sm:text-3xl italic leading-relaxed text-white/90">
            &ldquo;AI should feel like hiring the most efficient person you&apos;ve ever worked with â€” one who never forgets, never sleeps, and always follows the process.&rdquo;
          </blockquote>
          <div className="mt-6 text-sky/60 text-sm">â€” The Isle Collective</div>
        </div>
      </div>

      {/* Process */}
      <Section id="process" className="bg-surface border-y border-white/8">
        <div className="text-center mb-12">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">Our 5-Step Process</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A clear, structured approach â€” from first conversation to a fully running automation system.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <ProcessStep key={step.step} {...step} />
          ))}
        </div>
      </Section>

      {/* Why Us */}
      <Section id="why-us" className="bg-base">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-8">
              Built for results, not complexity
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 bg-surface border border-white/8 rounded-xl px-5 py-4">
                  <Check size={18} className="text-ocean mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/business-growth.jpg"
              alt="Business growth and strategy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent" />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white text-center bg-surface border-t border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,111,168,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Ready to see what&apos;s possible?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Book a free AI audit â€” no commitment, no jargon. Just a clear picture of where AI can unlock value in your business.
          </p>
          <Button href="/contact" variant="secondary" size="lg">Book a Free AI Audit</Button>
        </div>
      </section>
    </div>
  );
}
