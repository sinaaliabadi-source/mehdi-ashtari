import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

const baseClasses = "btn-base focus-visible:outline-accent-500";
const variantClasses: Record<string, string> = {
  primary:
    "bg-accent-500 text-navy-900 hover:bg-accent-600 shadow-glow shadow-accent-500/30",
  ghost:
    "text-white/80 hover:text-white hover:bg-white/5 border border-white/10",
};

type ButtonVariant = keyof typeof variantClasses;

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
