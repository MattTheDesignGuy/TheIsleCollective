import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessStep({ step, title, description, icon: Icon }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-mist hover:shadow-md transition-shadow">
      <div className="w-14 h-14 rounded-2xl bg-mist flex items-center justify-center mb-4 relative">
        <Icon size={24} className="text-navy" />
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center font-heading">
          {step}
        </span>
      </div>
      <h3 className="font-heading font-semibold text-navy text-base mb-2">{title}</h3>
      <p className="text-sm text-charcoal/70 leading-relaxed">{description}</p>
    </div>
  );
}
