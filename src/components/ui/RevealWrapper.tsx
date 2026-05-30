"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "none";
  className?: string;
}

export function RevealWrapper({ children, delay = 0, direction = "up", className }: RevealWrapperProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const initial =
    direction === "up"   ? { opacity: 0, y: 32 } :
    direction === "left" ? { opacity: 0, x: -32 } :
                           { opacity: 0 };

  const animate = inView
    ? { opacity: 1, y: 0, x: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
