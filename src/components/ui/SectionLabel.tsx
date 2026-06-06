"use client";
import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn(
      "inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-(--color-orange)",
      className,
    )}>
      {children}
    </span>
  );
}
