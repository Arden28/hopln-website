"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/CtaButton";
import { ZapIcon, TrophyIcon, AwardIcon, ArrowRightIcon } from "lucide-react";

const PHOTO = "https://images.unsplash.com/photo-1521443331827-88ee11ea2706?w=900&q=85&auto=format&fit=crop";

const items = [
  {
    icon: ZapIcon,
    label: "Real, lasting impact",
    detail: "Approved contributions go live immediately. Every rider on that route benefits from your report the moment it clears review.",
  },
  {
    icon: TrophyIcon,
    label: "Earn Safiri Points",
    detail: "+3 for a delay report, +10 for a stop review. Level up through 7 tiers, from Commuter to Community Elder.",
  },
  {
    icon: AwardIcon,
    label: "Badges & Leaderboard",
    detail: "Unlock exclusive achievement badges tied to specific milestones and climb Nairobi's city-wide contributor ranking.",
  },
];

// Cinematic easing curve
const easeOutCirc = [0.16, 1, 0.3, 1] as const;

export function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="overflow-hidden bg-(--color-surface) border-t border-(--color-border)">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[720px]">

        {/* ── Photo Side (Cinematic & Deep) ─────────────────────────── */}
        <div className="relative min-h-[500px] lg:min-h-0 order-2 lg:order-1 overflow-hidden">
          
          {/* Subtle slow-zoom effect on load */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.5, ease: easeOutCirc }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${PHOTO}')` }}
            aria-hidden="true"
          />
          
          {/* Layered gradients for text contrast and depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-orange-500/10 to-transparent" />

          {/* Premium Glassmorphic Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutCirc }}
            className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-auto bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-[1.5rem] p-6 sm:min-w-[320px] overflow-hidden group"
          >
            {/* Inner ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-orange-500/20 border border-orange-500/30">
                    <TrophyIcon className="size-4 text-orange-400" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-[0.15em]">
                    Safiri Points
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full border border-orange-400/20">
                  Lvl 3
                </span>
              </div>

              {/* Animated 7-segment progress bar */}
              <div className="flex items-center gap-1.5 mb-3">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1), ease: easeOutCirc }}
                    className="h-1.5 flex-1 rounded-full origin-left overflow-hidden relative bg-white/10"
                  >
                    {i <= 3 && (
                      <div className="absolute inset-0 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-1">
                <span className="text-[11px] text-white font-semibold">Commuter</span>
                <span className="text-[11px] text-white/40 font-medium">Community Elder</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Text Side (Editorial & Clean) ─────────────────────────── */}
        <div
          ref={ref}
          className="flex flex-col justify-center px-6 sm:px-12 xl:px-24 py-20 lg:py-28 bg-(--color-surface) order-1 lg:order-2 border-l border-(--color-border)"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easeOutCirc }}
          >
            <SectionLabel>The Collective</SectionLabel>
            
            <h2 className="mt-5 text-4xl sm:text-5xl font-semibold text-(--color-text-primary) tracking-tight leading-[1.05] text-balance">
              The city,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                teaching itself.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-(--color-text-secondary) leading-relaxed max-w-md">
              Every rider who reports a delay, verifies a stop, or corrects a route makes the
              network smarter for the next person. Your knowledge is the map.
            </p>
          </motion.div>

          {/* Elegant, borderless feature rows */}
          <div className="mt-12 flex flex-col gap-6 sm:gap-8">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: easeOutCirc, delay: 0.15 + i * 0.1 }}
                className="group flex items-start gap-5 cursor-default"
              >
                {/* Glowing Icon Container */}
                <div className="relative w-12 h-12 rounded-2xl bg-(--color-surface-inset) border border-(--color-border) flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-orange-500/5 shadow-sm group-hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] group-hover:scale-105">
                  <item.icon className="size-5.5 text-(--color-text-muted) transition-colors duration-300 group-hover:text-orange-500" strokeWidth={1.5} aria-hidden="true" />
                </div>
                
                <div className="flex-1 pt-1">
                  <p className="text-base font-bold text-(--color-text-primary) tracking-tight transition-colors duration-300 group-hover:text-orange-500">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm text-(--color-text-secondary) leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOutCirc }}
            className="mt-12"
          >
            <CtaButton href="/community" variant="outline" size="lg" className="hover:border-orange-500/50 group">
              Join the collective
              <ArrowRightIcon className="size-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </CtaButton>
          </motion.div>
        </div>

      </div>
    </section>
  );
}