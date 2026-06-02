import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Isle Collective. Book a free AI audit or ask us anything.",
};

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-ocean text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-6 leading-tight">
            Let&apos;s talk about what&apos;s possible
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Whether you&apos;re ready to start or just exploring — we&apos;d love to have a conversation. Book a free AI audit or send us a message below.
          </p>
        </div>
      </section>

      <Section className="bg-mist">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl mb-6">
              Book a Free AI Audit
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Our free AI audit is a 45-minute conversation where we map your current workflows and identify where AI can save you the most time. No commitment, no jargon — just clarity.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href="mailto:hello@theislecollective.co"
                className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-lg bg-mist flex items-center justify-center group-hover:bg-navy transition-colors">
                  <Mail size={18} className="text-navy group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-charcoal/50 uppercase tracking-wider">Email</div>
                  <div className="text-navy font-medium text-sm">hello@theislecollective.co</div>
                </div>
              </a>
              <a
                href="tel:0431027770"
                className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-lg bg-mist flex items-center justify-center group-hover:bg-navy transition-colors">
                  <Phone size={18} className="text-navy group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-charcoal/50 uppercase tracking-wider">Phone</div>
                  <div className="text-navy font-medium text-sm">0431 027 770</div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-mist">
              <h3 className="font-heading font-semibold text-navy mb-2">What to expect</h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>✓ Response within one business day</li>
                <li>✓ 45-minute audit call — no pitch, just value</li>
                <li>✓ Written summary of AI opportunities</li>
                <li>✓ No obligation to proceed</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-mist">
            <h2 className="font-heading font-bold text-navy text-xl mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
