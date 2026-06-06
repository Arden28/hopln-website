"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/CtaButton";
import {
  WalletIcon,
  UsersIcon,
  MapIcon,
  BarChart3Icon,
  BellRingIcon,
  ArrowRightIcon,
  PlayIcon,
  XIcon,
  PencilRulerIcon,
  NetworkIcon,
  ActivityIcon,
} from "lucide-react";

// ── Feature Data ─────────────────────────────────────────────────────────
const features = [
  {
    icon: MapIcon,
    title: "Live Fleet Map",
    description: "Real-time vehicle positions with bearing arrows, refreshed every 5 seconds. On-time percentage, average delay, ghost trip detection, and full position history playback.",
  },
  {
    icon: WalletIcon,
    title: "Ledger & Settlements",
    description: "Multi-wallet system, vehicle, SACCO, and platform balances tracked separately. Automated revenue splits with per-vehicle and per-route reporting across 7, 30, and 90-day windows.",
  },
  {
    icon: BellRingIcon,
    title: "Service Alerts",
    description: "Publish detours, reduced-service notices, and cancellations with info, warning, or critical severity. Alerts propagate instantly to riders in the Hopln app.",
  },
  {
    icon: PencilRulerIcon,
    title: "Route & Trip Editor",
    description: "Map-based editor for routes, trips, and shapes with Mapbox integration. Full GTFS support, route colours, short names, trip variants, all editable without touching raw files.",
  },
  {
    icon: ActivityIcon,
    title: "On-Time Performance",
    description: "Delay heatmaps by day and hour, journey counts, and top origin-destination pairs. Multi-period dashboards show exactly where your network under-performs.",
  },
  {
    icon: UsersIcon,
    title: "Crew & Vehicle Management",
    description: "Driver profiles, licence tracking, and vehicle assignments in one place. Set status (active, inactive, suspended) per vehicle and monitor the full fleet roster.",
  },
  {
    icon: NetworkIcon,
    title: "Network Planning",
    description: "Coverage heatmaps, desire lines from real journey data, headway optimizer, and what-if scenario modelling, all without touching production data.",
  },
];

// ── Animation Curves ──────────────────────────────────────────────────────
const easeOutCirc = [0.16, 1, 0.3, 1] as const;

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: easeOutCirc } 
  },
};

export function ForOperators() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section id="operators" className="relative py-32 bg-(--color-surface) overflow-hidden border-t border-(--color-border)">
        
        {/* ── Background Engineering Grid ── */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

            {/* ── Left Column: Headline & Video Thumbnail ── */}
            <div className="lg:col-span-6 flex flex-col gap-10 sticky top-24">
              
              {/* Header Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOutCirc }}
              >
                <SectionLabel>For Operators</SectionLabel>
                <h2 className="mt-4 text-4xl sm:text-5xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-(--color-text-primary) to-(--color-text-secondary) tracking-tight text-balance leading-[1.05]">
                  Run your SACCO like a modern operator.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-(--color-text-secondary) leading-relaxed max-w-lg">
                  Hopln Console gives transit operators enterprise-grade dispatch, ledger, and routing tools, without the enterprise price tag.
                </p>
                <div className="mt-8">
                  <CtaButton href="mailto:ops@hopln.app" size="lg" className="shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40">
                    Request early access
                    <ArrowRightIcon className="size-4 ml-2" />
                  </CtaButton>
                </div>
              </motion.div>

              {/* Premium Video Thumbnail */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
                animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                transition={{ duration: 0.9, ease: easeOutCirc, delay: 0.1 }}
                className="relative w-full aspect-video rounded-[2rem] bg-neutral-900 border border-(--color-border) shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden group cursor-pointer perspective-[2000px]"
                onClick={() => setIsVideoOpen(true)}
              >
                {/* Replace src with your actual thumbnail image */}
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
                  alt="Hopln Console Demo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Glassmorphic Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    {/* Glowing ring behind play button */}
                    <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <PlayIcon className="size-8 text-white fill-white ml-1 relative z-10" />
                  </div>
                </div>

                {/* Duration Badge (Optional detail) */}
                <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-medium text-white tracking-wide">
                  02:14
                </div>
              </motion.div>
            </div>

            {/* ── Right Column: Features Grid ── */}
            <div className="lg:col-span-6 lg:pt-10">
              <motion.div
                ref={ref}
                variants={containerVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-col gap-4 sm:gap-5"
              >
                {features.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariant}
                    className="group relative flex flex-col sm:flex-row gap-5 p-6 rounded-[1.25rem] border border-(--color-border) bg-(--color-surface-card) transition-all duration-300 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-orange-500/30 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative w-12 h-12 rounded-xl bg-(--color-surface-inset) border border-(--color-border) flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 group-hover:bg-orange-500/10 group-hover:border-orange-500/20">
                      <item.icon className="size-5.5 text-(--color-text-secondary) transition-colors duration-300 group-hover:text-orange-500" strokeWidth={1.5} />
                    </div>
                    
                    <div className="relative z-10 flex-1">
                      <h3 className="font-bold text-base text-(--color-text-primary) mb-1.5 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Cinematic Video Modal ── */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: easeOutCirc }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside video from closing modal
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-colors backdrop-blur-md"
              >
                <XIcon className="size-6" />
              </button>

              {/* Replace iframe src with your actual video link (e.g., YouTube embed or a raw <video> tag) */}
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0" 
                title="Platform Demo"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}