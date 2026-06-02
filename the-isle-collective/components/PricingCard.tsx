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
      className={`relative rounded-2xl flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        isPopular
          ? "bg-ocean/20 border border-ocean/60 shadow-xl shadow-ocean/10 ring-1 ring-ocean/30"
          : "bg-surface border border-white/10 shadow-md hover:border-white/20"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-accent/30">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        <div className="mb-6">
          <h3 className={`font-heading font-bold text-xl mb-2 ${isPopular ? "text-sky" : "text-white"}`}>
            {name}
          </h3>
          <p className={`text-sm leading-relaxed ${isPopular ? "text-sky/70" : "text-white/50"}`}>
            {tagline}
          </p>
        </div>

        <div className={`mb-6 pb-6 border-b ${isPopular ? "border-ocean/30" : "border-white/10"}`}>
          {setupPrice !== null ? (
            <>
              <div className={`text-3xl font-heading font-bold ${isPopular ? "text-white" : "text-sky"}`}>
                ${setupPrice.toLocaleString()}
                <span className={`text-sm font-normal ml-1 ${isPopular ? "text-sky/60" : "text-white/40"}`}>
                  {setupLabel ?? "setup"}
                </span>
              </div>
              {monthlyPrice > 0 && (
                <div className={`text-base mt-1 ${isPopular ? "text-sky/80" : "text-white/60"}`}>
                  + ${monthlyPrice}/month
                </div>
              )}
            </>
          ) : (
            <>
              <div className={`text-3xl font-heading font-bold ${isPopular ? "text-white" : "text-sky"}`}>
                {setupLabel}
                <span className={`text-sm font-normal ml-1 ${isPopular ? "text-sky/60" : "text-white/40"}`}>
                  setup
                </span>
              </div>
              <div className={`text-base mt-1 ${isPopular ? "text-sky/80" : "text-white/60"}`}>
                + ${monthlyPrice}/month
              </div>
            </>
          )}
          <div className={`text-xs mt-1 ${isPopular ? "text-white/30" : "text-white/25"}`}>All prices AUD</div>
        </div>

        <ul className="space-y-2.5 mb-6 flex-1">
          {inclusions.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check
                size={16}
                className={`mt-0.5 flex-shrink-0 ${isPopular ? "text-accent" : "text-ocean"}`}
              />
              <span className={`text-sm ${isPopular ? "text-white/85" : "text-white/70"}`}>{item}</span>
            </li>
          ))}
        </ul>

        {idealFor && (
          <p className={`text-xs mb-4 ${isPopular ? "text-sky/70" : "text-white/40"}`}>
            <strong className={isPopular ? "text-sky" : "text-white/60"}>Ideal for:</strong> {idealFor}
          </p>
        )}

        {outcome && (
          <p className={`text-xs mb-4 italic ${isPopular ? "text-sky" : "text-ocean"}`}>
            &ldquo;{outcome}&rdquo;
          </p>
        )}

        {optionalNote && (
          <p className={`text-xs mb-4 ${isPopular ? "text-white/30" : "text-white/25"}`}>
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
