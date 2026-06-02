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
        <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-surface hover:border-white/20 transition-colors">
          <button
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-heading font-medium text-white hover:text-sky transition-colors"
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
            <div className="px-6 pb-5 text-sm text-white/60 leading-relaxed border-t border-white/8 pt-4">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
