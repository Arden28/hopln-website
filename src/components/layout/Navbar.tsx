"use client";
import Image from "next/image";
import { useScrolled } from "@/hooks/useScrolled";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const links = [
  { label: "Features",  href: "#features" },
  { label: "Coverage",  href: "#coverage" },
  { label: "Community", href: "#community" },
  { label: "Operators", href: "#operators" },
];

export function Navbar() {
  const scrolled = useScrolled(40);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-(--color-border) shadow-[0_1px_8px_rgb(0_0_0/0.06)]"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={scrolled ? "/hopln.png" : "/hopln.png"}
            alt="Hopln"
            width={28}
            height={28}
            className="rounded"
          />
          <span className={cn(
            "font-semibold text-sm tracking-tight transition-colors",
            scrolled ? "text-(--color-text-primary)" : "text-white",
          )}>
            Hopln
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors",
                scrolled
                  ? "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                  : "text-white/70 hover:text-white",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <CtaButton href="#download" size="sm" variant={scrolled ? "primary" : "outline-light"}>
          Get the App
        </CtaButton>
      </div>
    </motion.header>
  );
}
