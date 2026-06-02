import { LucideIcon } from "lucide-react";

interface ValuePropProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueProp({ icon: Icon, title, description }: ValuePropProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-12 h-12 rounded-xl bg-sky/30 flex items-center justify-center mb-4">
        <Icon size={22} className="text-navy" />
      </div>
      <h3 className="font-heading font-semibold text-navy text-sm mb-1">{title}</h3>
      <p className="text-xs text-charcoal/70 leading-relaxed">{description}</p>
    </div>
  );
}
