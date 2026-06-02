import { Check } from "lucide-react";
import type { Package } from "@/lib/packages";
import Button from "./Button";

interface PricingCardProps {
  pkg: Package;
}

export default function PricingCard({ pkg }: PricingCardProps) {
  const { name, tagline, setupPrice, monthlyPrice, setupLabel, isPopular, inclusions, idealFor, outcome, optionalNote } = pkg;

  return (
    <div
      className={`relative rounded-2xl flex flex-col h-full transition-shadow duration-300 hover:shadow-xl ${
        isPopular
          ? "bg-navy text-white shadow-2xl ring-2 ring-accent"
          : "bg-white text-charcoal shadow-md border border-mist"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        <div className="mb-6">
          <h3 className={`font-heading font-bold text-xl mb-2 ${isPopular ? "text-white" : "text-navy"}`}>
            {name}
          </h3>
          <p className={`text-sm leading-relaxed ${isPopular ? "text-sky" : "text-charcoal/70"}`}>
            {tagline}
          </p>
        </div>

        <div className={`mb-6 pb-6 border-b ${isPopular ? "border-white/20" : "border-mist"}`}>
          {setupPrice !== null ? (
            <>
              <div className={`text-3xl font-heading font-bold ${isPopular ? "text-white" : "text-navy"}`}>
                ${setupPrice.toLocaleString()}
                <span className={`text-sm font-normal ml-1 ${isPopular ? "text-sky" : "text-charcoal/60"}`}>
                  {setupLabel ?? "setup"}
                </span>
              </div>
              {monthlyPrice > 0 && (
                <div className={`text-base mt-1 ${isPopular ? "text-sky" : "text-charcoal/70"}`}>
                  + ${monthlyPrice}/month
                </div>
              )}
            </>
          ) : (
            <>
              <div className={`text-3xl font-heading font-bold ${isPopular ? "text-white" : "text-navy"}`}>
                {setupLabel}
                <span className={`text-sm font-normal ml-1 ${isPopular ? "text-sky" : "text-charcoal/60"}`}>
                  setup
                </span>
              </div>
              <div className={`text-base mt-1 ${isPopular ? "text-sky" : "text-charcoal/70"}`}>
                + ${monthlyPrice}/month
              </div>
            </>
          )}
          <div className={`text-xs mt-1 ${isPopular ? "text-white/50" : "text-charcoal/40"}`}>All prices AUD</div>
        </div>

        <ul className="space-y-2.5 mb-6 flex-1">
          {inclusions.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check
                size={16}
                className={`mt-0.5 flex-shrink-0 ${isPopular ? "text-accent" : "text-ocean"}`}
              />
              <span className={`text-sm ${isPopular ? "text-white/90" : "text-charcoal/80"}`}>{item}</span>
            </li>
          ))}
        </ul>

        {idealFor && (
          <p className={`text-xs mb-4 ${isPopular ? "text-sky/80" : "text-charcoal/60"}`}>
            <strong>Ideal for:</strong> {idealFor}
          </p>
        )}

        {outcome && (
          <p className={`text-xs mb-4 italic ${isPopular ? "text-sky" : "text-ocean"}`}>
            &ldquo;{outcome}&rdquo;
          </p>
        )}

        {optionalNote && (
          <p className={`text-xs mb-4 ${isPopular ? "text-white/50" : "text-charcoal/40"}`}>
            {optionalNote}
          </p>
        )}

        <div className="mt-auto pt-4">
          <Button
            href="/contact"
            variant={isPopular ? "secondary" : "outline"}
            className="w-full justify-center"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
