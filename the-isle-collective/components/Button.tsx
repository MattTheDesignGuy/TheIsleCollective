import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const base =
  "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark";

const variants: Record<Variant, string> = {
  primary: "bg-ocean text-white hover:bg-navy focus-visible:ring-ocean shadow-sm hover:shadow-md",
  secondary: "bg-accent text-white hover:bg-accent/80 focus-visible:ring-accent shadow-sm hover:shadow-md",
  outline: "border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70 focus-visible:ring-white/50",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
