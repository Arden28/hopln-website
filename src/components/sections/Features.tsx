"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  SparklesIcon, NavigationIcon, BellRingIcon, TrophyIcon,
  UsersIcon, MapPinIcon, BookmarkIcon,
} from "lucide-react";

type Accent = "orange" | "blue" | "amber" | "violet" | "teal" | "sky" | "rose";

// Upgraded accent system to handle text, glass backgrounds, borders, and cinematic glows.
const ACCENTS: Record<Accent, { text: string; bg: string; border: string; glow: string; line: string }> = {
  orange: { text: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", glow: "from-orange-500/10", line: "via-orange-500/40" },
  blue:   { text: "text-blue-500",   bg: "bg-blue-500/10",   border: "border-blue-500/20",   glow: "from-blue-500/10",   line: "via-blue-500/40" },
  amber:  { text: "text-amber-500",  bg: "bg-amber-500/10",  border: "border-amber-500/20",  glow: "from-amber-500/10",  line: "via-amber-500/40" },
  violet: { text: "text-violet-500", bg: "bg-violet-500/10", border: "border-violet-500/20", glow: "from-violet-500/10", line: "via-violet-500/40" },
  teal:   { text: "text-teal-500",   bg: "bg-teal-500/10",   border: "border-teal-500/20",   glow: "from-teal-500/10",   line: "via-teal-500/40" },
  sky:    { text: "text-sky-500",    bg: "bg-sky-500/10",    border: "border-sky-500/20",    glow: "from-sky-500/10",    line: "via-sky-500/40" },
  rose:   { text: "text-rose-500",   bg: "bg-rose-500/10",   border: "border-rose-500/20",   glow: "from-rose-500/10",   line: "via-rose-500/40" },
};

const features: {
  icon: React.ElementType;
  title: string;
  description: string;
  accent: Accent;
  featured?: true;
  pills?: string[];
}[] = [
  {
    icon: SparklesIcon,
    title: "Ask Kwame",
    description:
      "Talk or type where you're going in plain language. Kwame understands Nairobi context, your saved home, work, and school addresses, and launches turn-by-turn navigation the moment it has a route. Voice input with live waveform feedback, powered by Gemini.",
    accent: "orange",
    featured: true,
    pills: ["Voice & Text Input", "Gemini AI", "Auto-launch Nav"],
  },
  {
    icon: NavigationIcon,
    title: "Turn-by-Turn Navigation",
    description:
      "Projection-based positioning maps your GPS onto the route polyline, not just proximity, so step advancement stays accurate through noisy urban GPS. Live ETAs, off-route alerts, and automatic rerouting.",
    accent: "blue",
  },
  {
    icon: BellRingIcon,
    title: "Service Alerts",
    description:
      "Real riders submit delay and diversion reports as they happen. Three verified reports in 15 minutes auto-triggers a live alert for everyone on that route.",
    accent: "amber",
  },
  {
    icon: TrophyIcon,
    title: "Safiri Points",
    description:
      "Earn points for every contribution, 3 for a delay report, 10 for a stop review, up to 50 for an approved new stop. Progress through 7 tiers from Commuter to Community Elder and compete on the city leaderboard.",
    accent: "violet",
  },
  {
    icon: UsersIcon,
    title: "Community Contributions",
    description:
      "Six contribution types: delay reports, stop reviews, stop photos, info edits, route corrections, and new stop suggestions. Each goes through community voting before it goes live.",
    accent: "teal",
  },
  {
    icon: MapPinIcon,
    title: "Stop Discovery",
    description:
      "Search any stop or area and see real GTFS route data, community safety and comfort ratings, crowdsourced photos, and a one-tap shortcut to start navigating.",
    accent: "sky",
  },
  {
    icon: BookmarkIcon,
    title: "Saved Places",
    description:
      "Pin home, work, and school for one-tap routing at any time. Organize everywhere else into Favorites, Travel Plans, and your own custom lists.",
    accent: "rose",
  },
];

// Refined, cinematic easing curves
const container: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
  },
};

const item: Variants = {
  hidden:  { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32 bg-(--color-surface) overflow-hidden">
      {/* Subtle ambient lighting for the entire section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/[0.02] blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-20">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="mt-4 text-2xl sm:text-5xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-(--color-text-primary) to-(--color-text-secondary) text-balance pb-2">
            Everything you need to move
          </h2>
          <p className="mt-4 text-(--color-text-secondary) max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Built from the ground up for Nairobi's complex transit network, not a watered-down port of a Western app.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map(f => {
            const accent = ACCENTS[f.accent];

            if (f.featured) {
              return (
                <motion.div
                  key={f.title}
                  variants={item}
                  className="group relative rounded-[2rem] border border-(--color-border) bg-(--color-surface-card) p-8 sm:p-10 flex flex-col gap-6 cursor-default transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden md:col-span-2 lg:col-span-2 z-10"
                >
                  {/* Cinematic layered lighting */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-(--color-orange)/10 blur-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-8">
                    
                    <div className={`w-14 h-14 rounded-2xl ${accent.bg} border ${accent.border} flex items-center justify-center shrink-0 shadow-inner backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                      <f.icon className={`size-7 ${accent.text}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-extrabold text-(--color-text-primary) text-2xl tracking-tight">{f.title}</h3>
                        <div className="relative flex items-center justify-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 animate-[shimmer_2s_infinite]" />
                           <span className="relative text-[11px] font-bold text-orange-500 uppercase tracking-wider">
                             AI Powered
                           </span>
                        </div>
                      </div>
                      
                      <p className="text-base text-(--color-text-secondary) leading-relaxed max-w-2xl">
                        {f.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2.5">
                        {f.pills!.map(p => (
                          <span
                            key={p}
                            className="text-[12px] font-medium text-(--color-text-primary) bg-white/5 backdrop-blur-md border border-(--color-border) shadow-xs px-3.5 py-1.5 rounded-full transition-colors group-hover:border-(--color-text-muted)/30"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={f.title}
                variants={item}
                className="group relative rounded-[2rem] border border-(--color-border) bg-(--color-surface-card) p-8 flex flex-col gap-6 cursor-default transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden z-10"
              >
                {/* Subtle sweeping top edge glow */}
                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Corner ambient glow */}
                <div className={`absolute -top-12 -left-12 w-32 h-32 rounded-full bg-gradient-to-br ${accent.glow} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className={`relative z-10 w-12 h-12 rounded-2xl ${accent.bg} border ${accent.border} flex items-center justify-center shrink-0 shadow-inner backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <f.icon className={`size-5.5 ${accent.text}`} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-bold text-(--color-text-primary) text-lg mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-(--color-text-secondary) leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}