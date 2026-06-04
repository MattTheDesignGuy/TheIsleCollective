import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Isle Collective. Book a consultation and discover how AI automation can transform your business.",
};

export default function Contact() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[55vh] flex items-center">
        <Image
          src="/images/hero-ocean.jpg"
          alt="Calm coastal waters"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-base/95 via-navy/85 to-ocean/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-6 leading-tight">
            {"Let's talk about what's possible"}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Whether you are ready to start or just exploring, we would love to have a conversation.
          </p>
        </div>
      </section>

      <Section className="bg-base">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <div>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl mb-6">
              Book a Consultation
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Our paid consultation is a focused 60-minute session where we map your current workflows,
              identify your highest-impact AI opportunities, and give you a clear roadmap — no fluff, no jargon.
            </p>

            <div className="space-y-3 mb-10">
              <a
                href="mailto:hello@theislecollective.co"
                className="flex items-center gap-4 bg-surface border border-white/8 rounded-xl px-5 py-4 hover:border-ocean/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-ocean/15 border border-ocean/20 flex items-center justify-center group-hover:bg-ocean/25 transition-colors">
                  <Mail size={18} className="text-sky" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">Email</div>
                  <div className="text-white font-medium text-sm">hello@theislecollective.co</div>
                </div>
              </a>
              <a
                href="tel:0431027770"
                className="flex items-center gap-4 bg-surface border border-white/8 rounded-xl px-5 py-4 hover:border-ocean/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-ocean/15 border border-ocean/20 flex items-center justify-center group-hover:bg-ocean/25 transition-colors">
                  <Phone size={18} className="text-sky" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">Phone</div>
                  <div className="text-white font-medium text-sm">0431 027 770</div>
                </div>
              </a>
            </div>

            <div className="bg-surface border border-white/8 rounded-2xl p-6 mb-8">
              <h3 className="font-heading font-semibold text-white mb-3">What to expect</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li className="flex items-center gap-2">
                  <span className="text-ocean font-bold">+</span> Response within one business day
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-ocean font-bold">+</span> 60-minute paid consultation — focused and actionable
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-ocean font-bold">+</span> Written AI opportunity roadmap included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-ocean font-bold">+</span> Pricing confirmed before your session
                </li>
              </ul>
            </div>

          </div>

          {/* Form */}
          <div className="bg-surface border border-white/10 rounded-2xl p-8 shadow-xl shadow-black/20 self-start">
            <h2 className="font-heading font-bold text-white text-xl mb-6">Tell us about your business</h2>
            <ContactForm />
          </div>

        </div>
      </Section>
    </div>
  );
}
