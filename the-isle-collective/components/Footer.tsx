import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/case-study", label: "Case Study" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/logos/FullLogo_NoBuffer.webp"
              alt="The Isle Collective"
              width={160}
              height={60}
              className="h-14 w-auto [filter:brightness(0)_invert(1)] mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              We help businesses grow with clear strategy, strong execution, and AI-powered systems.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-sky mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-sky mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@theislecollective.co"
                  className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
                >
                  <Mail size={16} />
                  hello@theislecollective.co
                </a>
              </li>
              <li>
                <a
                  href="tel:0431027770"
                  className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
                >
                  <Phone size={16} />
                  0431 027 770
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-colors text-xs font-bold text-white/50 hover:text-white"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-colors text-xs font-bold text-white/50 hover:text-white"
              >
                ig
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 mt-12 pt-8 text-center text-white/25 text-xs">
          © {new Date().getFullYear()} The Isle Collective. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
