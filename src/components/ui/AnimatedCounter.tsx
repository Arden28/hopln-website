"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate, useTransform, motion } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ to, suffix = "", prefix = "", duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] });
    return controls.stop;
  }, [inView, to, duration, count]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
