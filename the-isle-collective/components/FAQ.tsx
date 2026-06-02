"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-mist rounded-xl overflow-hidden bg-white">
          <button
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-heading font-medium text-navy hover:bg-mist/30 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <ChevronDown
              size={18}
              className={`flex-shrink-0 text-ocean transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-sm text-charcoal/80 leading-relaxed border-t border-mist pt-4">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
