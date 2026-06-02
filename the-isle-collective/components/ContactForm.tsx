"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import Button from "./Button";

interface FormState {
  name: string;
  email: string;
  business: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", business: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate() {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  }

  const field =
    "w-full px-4 py-3 rounded-xl border border-white/10 bg-base/60 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean transition text-sm";

  if (status === "success") {
    return (
      <div className="bg-ocean/10 border border-ocean/20 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-ocean/20 border border-ocean/30 flex items-center justify-center mx-auto mb-4">
          <Check size={24} className="text-sky" />
        </div>
        <h3 className="font-heading font-bold text-white text-xl mb-2">Message sent!</h3>
        <p className="text-white/60 text-sm">
          Thanks for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={field}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-accent text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={field}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-accent text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium text-white/70 mb-1">
          Business Name
        </label>
        <input
          id="business"
          type="text"
          autoComplete="organization"
          className={field}
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={field}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="text-accent text-xs mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
