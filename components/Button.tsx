import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white shadow-glow-accent hover:bg-accent-light",
  secondary: "bg-surface border border-border text-text hover:bg-surface-hover",
  ghost: "border border-border text-text-secondary hover:text-text hover:border-text-secondary",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 min-h-[44px] text-[13px] font-bold uppercase tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light";

export default function Button({ children, variant = "primary", href, type = "button", className = "" }: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
