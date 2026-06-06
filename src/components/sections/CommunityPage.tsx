"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { CtaButton } from "@/components/ui/CtaButton";
import {
  MapPinIcon, AlertTriangleIcon, RouteIcon, BanknoteIcon,
  CheckCircle2Icon, ArrowRightIcon,
} from "lucide-react";

const NAIROBI_PHOTO = "https://images.unsplash.com/photo-1741991110666-88115e724741?w=1600&q=80&auto=format&fit=crop";

const contributionTypes = [
  {
    icon: MapPinIcon,
    title: "Stop Verifications",
    description: "Confirm stops exist and are correctly placed. Add photos, update names, mark inactive stops.",
    count: "12,400+",
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    icon: AlertTriangleIcon,
    title: "Delay Reports",
    description: "Real-time delay crowdsourcing. Three reports in 15 minutes triggers an automatic service alert.",
    count: "8,200+",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: RouteIcon,
    title: "Route Updates",
    description: "Flag route changes, new diversions, or temporary closures. Keep the map accurate for everyone.",
    count: "3,100+",
    color: "text-(--color-orange)",
    bg: "bg-orange-50",
  },
  {
    icon: BanknoteIcon,
    title: "Fare Reports",
    description: "Report fare price changes so other riders always know what to expect before they board.",
    count: "1,850+",
    color: "text-green-500",
    bg: "bg-green-50",
  },
];

const howSteps = [
  { number: "01", title: "Report",  description: "Spot a problem or update? Tap to report from anywhere in the app." },
  { number: "02", title: "Review",  description: "Community moderators and Hopln staff review for accuracy." },
  { number: "03", title: "Live",    description: "Approved contributions go live for all riders within minutes." },
];

const leaderboard = [
  { name: "Aisha M.",  contributions: 342, badge: "🏆" },
  { name: "David K.",  contributions: 289, badge: "🥈" },
  { name: "Fatima N.", contributions: 231, badge: "🥉" },
  { name: "Samuel O.", contributions: 178, badge: "⭐" },
  { name: "Grace W.",  contributions: 154, badge: "⭐" },
];

const guidelines = [
  "Be accurate, only report what you've personally seen or experienced",
  "Be respectful, contributions should help riders, not harm businesses",
  "Be specific, include route numbers, stop names, and times when possible",
  "Be consistent, regular contributors make the map better for everyone",
];

export function CommunityPage() {
  const leaderRef  = useRef(null);
  const leaderInView = useInView(leaderRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Hero banner, dark with Nairobi photo */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-(--color-dark)">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${NAIROBI_PHOTO}')` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-(--color-dark)/75" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-(--color-canvas) to-transparent" />
        <div className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto">
          <RevealWrapper>
            <SectionLabel>Community</SectionLabel>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.05] text-balance">
              Build the map<br />with us.
            </h1>
            <p className="mt-5 text-base text-white/60 max-w-md mx-auto leading-relaxed">
              Hopln is powered by the people who ride every day. Your local knowledge makes every journey better.
            </p>
            <div className="mt-8">
              <CtaButton href="#download" size="lg">
                Download the App
                <ArrowRightIcon className="size-4" />
              </CtaButton>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* How contributions work */}
      <section className="py-24 px-6 bg-(--color-surface)">
        <div className="max-w-4xl mx-auto">
          <RevealWrapper className="text-center mb-14">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-3 text-4xl font-bold text-(--color-text-primary) tracking-tight">
              Report → Review → Live
            </h2>
          </RevealWrapper>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-4">
            {howSteps.map((s, i) => (
              <RevealWrapper key={s.number} delay={i * 0.12} className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-card flex items-center justify-center mb-5 relative">
                  <span className="text-xl font-bold text-(--color-orange)">{s.number}</span>
                </div>
                <h3 className="font-semibold text-(--color-text-primary) mb-2">{s.title}</h3>
                <p className="text-sm text-(--color-text-muted) leading-relaxed max-w-[200px]">{s.description}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution types */}
      <section className="py-24 px-6 bg-(--color-canvas)">
        <div className="max-w-5xl mx-auto">
          <RevealWrapper className="text-center mb-12">
            <SectionLabel>Contribution types</SectionLabel>
            <h2 className="mt-3 text-4xl font-bold text-(--color-text-primary) tracking-tight">Every report matters</h2>
          </RevealWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contributionTypes.map((c, i) => (
              <RevealWrapper key={c.title} delay={i * 0.1}>
                <div className="flex gap-4 p-5 rounded-2xl shadow-card hover:shadow-card-hover bg-(--color-surface-card) h-full transition-all duration-200">
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
                    <c.icon className={`size-5 ${c.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-semibold text-sm text-(--color-text-primary)">{c.title}</h3>
                      <span className="text-xs font-bold text-(--color-orange)">{c.count}</span>
                    </div>
                    <p className="text-xs text-(--color-text-muted) leading-relaxed">{c.description}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-24 px-6 bg-(--color-surface)">
        <div className="max-w-2xl mx-auto">
          <RevealWrapper className="text-center mb-10">
            <SectionLabel>Leaderboard</SectionLabel>
            <h2 className="mt-3 text-4xl font-bold text-(--color-text-primary) tracking-tight">
              Nairobi's most helpful riders.
            </h2>
          </RevealWrapper>

          <motion.div ref={leaderRef} className="flex flex-col gap-3">
            {leaderboard.map((u, i) => (
              <motion.div
                key={u.name}
                initial={{ opacity: 0, x: -24 }}
                animate={leaderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl shadow-card bg-(--color-surface-card)"
              >
                <span className="text-xl w-8 text-center">{u.badge}</span>
                <span className="flex-1 text-sm font-medium text-(--color-text-primary)">{u.name}</span>
                <span className="text-sm font-bold text-(--color-orange)">{u.contributions} contributions</span>
              </motion.div>
            ))}
          </motion.div>

          <RevealWrapper delay={0.4} className="mt-6 text-center">
            <p className="text-xs text-(--color-text-muted)">Rankings update weekly. Top contributors get early access to new features.</p>
          </RevealWrapper>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-24 px-6 bg-(--color-canvas)">
        <div className="max-w-2xl mx-auto">
          <RevealWrapper className="text-center mb-10">
            <SectionLabel>Guidelines</SectionLabel>
            <h2 className="mt-3 text-4xl font-bold text-(--color-text-primary) tracking-tight">Keep it useful</h2>
          </RevealWrapper>
          <div className="flex flex-col gap-4">
            {guidelines.map((g, i) => (
              <RevealWrapper key={i} delay={i * 0.08}>
                <div className="flex gap-3 items-start p-4 rounded-xl bg-(--color-surface-card) shadow-card">
                  <CheckCircle2Icon className="size-4 text-(--color-orange) mt-0.5 shrink-0" />
                  <p className="text-sm text-(--color-text-secondary) leading-relaxed">{g}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 px-6 bg-(--color-orange) relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-xl mx-auto text-center">
          <RevealWrapper>
            <h2 className="text-4xl font-bold text-white tracking-tight">Start contributing today.</h2>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              Download Hopln and help make Nairobi's transit network better for everyone.
            </p>
            <div className="mt-8">
              <CtaButton href="#download" variant="white" size="lg">
                Download the App
                <ArrowRightIcon className="size-4" />
              </CtaButton>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
