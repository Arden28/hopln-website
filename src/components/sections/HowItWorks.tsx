"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SearchIcon, NavigationIcon, SmartphoneIcon } from "lucide-react";

const steps = [
  {
    icon: SmartphoneIcon,
    number: "01",
    title: "Open Hopln",
    description: "Your location is detected automatically. No typing needed, just open and go.",
  },
  {
    icon: SearchIcon,
    number: "02",
    title: "Search destination",
    description: "Type a stage or landmark. Hopln understands how Nairobians actually talk.",
  },
  {
    icon: NavigationIcon,
    number: "03",
    title: "Go",
    description: "Turn-by-turn guidance through every transfer, with live vehicle positions.",
  },
];

// Cinematic easing curve
const easeOutCirc = [0.16, 1, 0.3, 1] as const;

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-32 bg-(--color-surface) overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easeOutCirc }}
          >
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-(--color-text-primary) to-(--color-text-secondary) text-balance pb-2">
              Three taps to destination
            </h2>
          </motion.div>
        </div>

        <div ref={ref} className="relative">
          {/* Animated Glowing Track (Desktop) */}
          <div className="absolute top-[3.5rem] left-[16.67%] right-[16.67%] hidden lg:block pointer-events-none z-0">
            <svg width="100%" height="4" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Base faint track */}
              <line x1="0" y1="2" x2="100%" y2="2" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="8 8" />
              
              {/* Animated fill track */}
              <motion.line
                x1="0" y1="2" x2="100%" y2="2"
                stroke="url(#gradient-line)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              />

              {/* Infinite moving light pulse (Comet) */}
              {inView && (
                <motion.line
                  x1="0" y1="2" x2="100%" y2="2"
                  stroke="url(#gradient-pulse)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, pathOffset: 1 }}
                  animate={{ pathLength: 0.2, pathOffset: -0.2 }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: "loop", delay: 1.8 }}
                />
              )}

              <defs>
                <linearGradient id="gradient-line" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--color-orange)" stopOpacity="0" />
                  <stop offset="0.5" stopColor="var(--color-orange)" stopOpacity="0.5" />
                  <stop offset="1" stopColor="var(--color-orange)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient-pulse" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--color-orange)" stopOpacity="0" />
                  <stop offset="0.5" stopColor="var(--color-orange)" stopOpacity="1" />
                  <stop offset="1" stopColor="var(--color-orange)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: easeOutCirc, delay: 0.2 + 0.15 * i }}
                className="group flex-1 flex flex-col items-center text-center relative"
              >
                {/* Structural Background Number Watermark */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] font-extrabold text-(--color-text-primary) opacity-[0.03] pointer-events-none select-none tracking-tighter">
                  {s.number}
                </div>

                {/* Cinematic Icon Node */}
                <div className="relative flex items-center justify-center mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                  {/* Glowing aura on hover */}
                  <div className="absolute inset-0 bg-orange-500/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Machined Outer Ring */}
                  <div className="relative w-28 h-28 rounded-[2rem] bg-gradient-to-b from-white to-transparent dark:from-white/10 dark:to-transparent p-[1px] shadow-sm">
                    {/* Inner Glass Core */}
                    <div className="w-full h-full rounded-[calc(2rem-1px)] bg-(--color-surface) flex items-center justify-center relative overflow-hidden backdrop-blur-xl">
                      
                      {/* Subtle diagonal highlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Step Pill (Inline) */}
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-(--color-surface-inset) border border-(--color-border) text-[9px] font-bold text-(--color-text-muted) tracking-widest uppercase shadow-inner">
                        Step {i + 1}
                      </span>
                      
                      <s.icon 
                        className="size-10 text-orange-500 transform transition-transform duration-500 group-hover:scale-110" 
                        strokeWidth={1.25} 
                      />
                    </div>
                  </div>
                </div>

                {/* Typography */}
                <h3 className="font-semibold text-xl text-(--color-text-primary) mb-3 tracking-tight transition-colors duration-300 group-hover:text-orange-500">
                  {s.title}
                </h3>
                <p className="text-base text-(--color-text-secondary) leading-relaxed max-w-[260px]">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}