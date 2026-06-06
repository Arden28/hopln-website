"use client";
import { motion } from "framer-motion";
import { RouteNetworkCanvas } from "@/components/ui/RouteNetworkCanvas";
import { CtaButton } from "@/components/ui/CtaButton";
import { ArrowRightIcon, MapPinIcon } from "lucide-react";

const NAIROBI_PHOTO = "https://images.unsplash.com/photo-1741991110666-88115e724741?w=1920&q=85&auto=format&fit=crop";

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};

const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const stats = [
  { value: "134",   label: "Routes" },
  { value: "2,400+", label: "Stops" },
  { value: "50K+",  label: "Daily riders" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">

      {/* Real Nairobi city photo, base layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${NAIROBI_PHOTO}')` }}
        aria-hidden="true"
      />

      {/* Multi-layer overlay: photo dimming + brand tint */}
      <div className="absolute inset-0 bg-dark/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-dark" aria-hidden="true" />

      {/* Route network animation, on top of photo */}
      <RouteNetworkCanvas />

      {/* Radial orange glow, center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgb(255 111 0 / 0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Pill badge */}
          <motion.div variants={item} className="mb-7">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-white/60 tracking-wide">
              <span className="size-1.5 rounded-full bg-(--color-orange) animate-pulse inline-block" />
              Live · Nairobi transit
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-[80px] font-bold tracking-[-0.03em] text-white leading-[1.0] text-balance"
          >
            Navigate the city<br />
            <span className="text-(--color-orange)">you live in</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="mt-6 text-base sm:text-lg text-white/70 max-w-lg mx-auto leading-relaxed"
          >
            Real-time matatu tracking, AI-powered routing, and service alerts, built for how Nairobi actually moves.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CtaButton href="#download" size="lg">
              Get the App
              <ArrowRightIcon className="size-4" />
            </CtaButton>
            <CtaButton href="#features" variant="outline-light" size="lg">
              See how it works
            </CtaButton>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="mt-14 flex items-center justify-center gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="relative text-center">
                {i > 0 && <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-px h-5 bg-white/15" />}
                <p className="text-xl font-bold text-white tracking-tight">{s.value}</p>
                <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom dissolve into light section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-canvas to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
