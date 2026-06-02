import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessStep({ step, title, description, icon: Icon }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-white/8 hover:border-ocean/40 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300">
      <div className="w-14 h-14 rounded-2xl bg-ocean/15 border border-ocean/20 flex items-center justify-center mb-4 relative">
        <Icon size={24} className="text-sky" />
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-ocean text-white text-xs font-bold flex items-center justify-center font-heading">
          {step}
        </span>
      </div>
      <h3 className="font-heading font-semibold text-white text-base mb-2">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{description}</p>
    </div>
  );
}
