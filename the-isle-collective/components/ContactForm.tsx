"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import Button from "./Button";

const services = [
  { value: "ai-audit", label: "A — AI Audit" },
  { value: "ai-lead-management", label: "B — AI Lead Management" },
  { value: "ai-operations", label: "C — AI Operations System" },
  { value: "ai-communication", label: "D — AI Communication System" },
  { value: "ai-knowledge-hub", label: "E — AI Knowledge Hub" },
  { value: "ai-transformation", label: "F — Full AI Business Transformation" },
];

interface FormState {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  problem: string;
  currentProcess: string;
  desiredOutcome: string;
  budget: string;
}

const initial: FormState = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  service: "",
  problem: "",
  currentProcess: "",
  desiredOutcome: "",
  budget: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate() {
    const errs: Partial<FormState> = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.service) errs.service = "Please select a service";
    if (!form.problem.trim()) errs.problem = "Please describe the problem you're trying to solve";
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

  const f = (id: string, label: string, required = false, error?: string, children?: React.ReactNode) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white/70 mb-1">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {error && <p className="text-accent text-xs mt-1">{error}</p>}
    </div>
  );

  const inputCls = "w-full px-4 py-3 rounded-xl border border-white/10 bg-base/60 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean transition text-sm";

  if (status === "success") {
    return (
      <div className="bg-ocean/10 border border-ocean/20 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-ocean/20 border border-ocean/30 flex items-center justify-center mx-auto mb-4">
          <Check size={24} className="text-sky" />
        </div>
        <h3 className="font-heading font-bold text-white text-xl mb-2">Enquiry received!</h3>
        <p className="text-white/60 text-sm">
          Thanks for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Name + Business */}
      <div className="grid sm:grid-cols-2 gap-4">
        {f("fullName", "Full Name", true, errors.fullName,
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={inputCls}
            placeholder="Daniel Afif"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
        )}
        {f("businessName", "Business Name", false, undefined,
          <input
            id="businessName"
            type="text"
            autoComplete="organization"
            className={inputCls}
            placeholder="The Isle Collective"
            value={form.businessName}
            onChange={(e) => setForm({ ...form, businessName: e.target.value })}
          />
        )}
      </div>

      {/* Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        {f("email", "Email", true, errors.email,
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputCls}
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        )}
        {f("phone", "Contact Number", false, undefined,
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
            placeholder="04XX XXX XXX"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        )}
      </div>

      {/* Service */}
      {f("service", "What service are you interested in?", true, errors.service,
        <select
          id="service"
          className={`${inputCls} appearance-none cursor-pointer`}
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option value="" disabled>Select a service…</option>
          {services.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      )}

      {/* Problem */}
      {f("problem", "What problem are you trying to solve?", true, errors.problem,
        <textarea
          id="problem"
          rows={3}
          className={inputCls}
          placeholder="e.g. We spend hours manually following up leads and the team is overwhelmed with admin…"
          value={form.problem}
          onChange={(e) => setForm({ ...form, problem: e.target.value })}
        />
      )}

      {/* Current Process */}
      {f("currentProcess", "Current process", false, undefined,
        <textarea
          id="currentProcess"
          rows={3}
          className={inputCls}
          placeholder="Walk us through how you currently handle this — tools, steps, who's involved…"
          value={form.currentProcess}
          onChange={(e) => setForm({ ...form, currentProcess: e.target.value })}
        />
      )}

      {/* Desired Outcome */}
      {f("desiredOutcome", "Desired outcome", false, undefined,
        <textarea
          id="desiredOutcome"
          rows={3}
          className={inputCls}
          placeholder="What does success look like for you? e.g. leads responded to within 5 mins, zero manual data entry…"
          value={form.desiredOutcome}
          onChange={(e) => setForm({ ...form, desiredOutcome: e.target.value })}
        />
      )}

      {/* Budget */}
      {f("budget", "Budget", false, undefined,
        <input
          id="budget"
          type="text"
          className={inputCls}
          placeholder="e.g. $2,000–$5,000 / open to discussion"
          value={form.budget}
          onChange={(e) => setForm({ ...form, budget: e.target.value })}
        />
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}
