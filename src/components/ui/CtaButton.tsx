"use client";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "outline-light" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function CtaButton({
  href, onClick, variant = "primary", size = "md", children, className,
}: CtaButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 select-none cursor-pointer";

  const variants = {
    primary:       "bg-(--color-orange) text-white hover:bg-(--color-orange-light) shadow-orange",
    outline:       "border border-(--color-border) text-(--color-text-secondary) hover:border-(--color-orange) hover:text-(--color-orange) bg-transparent",
    "outline-light":"border border-white/30 text-white hover:bg-white/10 bg-transparent",
    ghost:         "text-(--color-text-muted) hover:text-(--color-text-primary) bg-transparent",
    white:         "bg-white text-(--color-orange) hover:bg-white/90 font-bold",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
