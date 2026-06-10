"use client";
import { Check } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";

const services = [
  { value: "ai-audit", label: "A — AI Audit" },
  { value: "ai-lead-management", label: "B — AI Lead Management" },
  { value: "ai-operations", label: "C — AI Operations System" },
  { value: "ai-communication", label: "D — AI Communication System" },
  { value: "ai-knowledge-hub", label: "E — AI Knowledge Hub" },
  { value: "ai-transformation", label: "F — Full AI Business Transformation" },
];

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkoazkre");

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

  if (state.succeeded) {
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
        {f("fullName", "Full Name", true, undefined,
          <>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              className={inputCls}
              placeholder="Daniel Afif"
              required
            />
            <ValidationError field="fullName" errors={state.errors} className="text-accent text-xs mt-1" />
          </>
        )}
        {f("businessName", "Business Name", false, undefined,
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            className={inputCls}
            placeholder="The Isle Collective"
          />
        )}
      </div>

      {/* Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        {f("email", "Email", true, undefined,
          <>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputCls}
              placeholder="you@example.com"
              required
            />
            <ValidationError field="email" errors={state.errors} className="text-accent text-xs mt-1" />
          </>
        )}
        {f("phone", "Contact Number", false, undefined,
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
            placeholder="04XX XXX XXX"
          />
        )}
      </div>

      {/* Service */}
      {f("service", "What service are you interested in?", true, undefined,
        <>
          <select
            id="service"
            name="service"
            className={`${inputCls} appearance-none cursor-pointer`}
            defaultValue=""
            required
          >
            <option value="" disabled>Select a service…</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          <ValidationError field="service" errors={state.errors} className="text-accent text-xs mt-1" />
        </>
      )}

      {/* Problem */}
      {f("problem", "What problem are you trying to solve?", true, undefined,
        <>
          <textarea
            id="problem"
            name="problem"
            rows={3}
            className={inputCls}
            placeholder="e.g. We spend hours manually following up leads and the team is overwhelmed with admin…"
            required
          />
          <ValidationError field="problem" errors={state.errors} className="text-accent text-xs mt-1" />
        </>
      )}

      {/* Current Process */}
      {f("currentProcess", "Current process", false, undefined,
        <textarea
          id="currentProcess"
          name="currentProcess"
          rows={3}
          className={inputCls}
          placeholder="Walk us through how you currently handle this — tools, steps, who's involved…"
        />
      )}

      {/* Desired Outcome */}
      {f("desiredOutcome", "Desired outcome", false, undefined,
        <textarea
          id="desiredOutcome"
          name="desiredOutcome"
          rows={3}
          className={inputCls}
          placeholder="What does success look like for you? e.g. leads responded to within 5 mins, zero manual data entry…"
        />
      )}

      {/* Budget */}
      {f("budget", "Budget", false, undefined,
        <input
          id="budget"
          name="budget"
          type="text"
          className={inputCls}
          placeholder="e.g. $2,000–$5,000 / open to discussion"
        />
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}
