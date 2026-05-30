"use client";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function CtaButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
}: CtaButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 select-none cursor-pointer";

  const variants = {
    primary: "bg-[var(--color-orange)] text-white hover:bg-[var(--color-orange-bright)] shadow-[0_0_24px_var(--color-orange-dim)]",
    outline: "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] bg-transparent",
    ghost:   "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <button onClick={onClick} className={cls}>{children}</button>;
}
