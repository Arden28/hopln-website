"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { StarIcon } from "lucide-react";

// ── Realistic iPhone Mockup (Mathematically matched to 720x1463) ──────
function PhoneMockup({ imageSrc, alt, className = "" }: { imageSrc: string; alt: string; className?: string }) {
  return (
    <div className={`relative w-[280px] h-[544px] rounded-[2.75rem] bg-gradient-to-b from-[#e5e5e5] via-[#d4d4d4] to-[#c4c4c4] p-[2px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ${className}`}>
      
      {/* Hardware Buttons */}
      <div className="absolute top-24 -left-[2px] w-[2px] h-6 bg-[#a3a3a3] rounded-l-md shadow-sm" /> 
      <div className="absolute top-36 -left-[2px] w-[2px] h-12 bg-[#a3a3a3] rounded-l-md shadow-sm" /> 
      <div className="absolute top-52 -left-[2px] w-[2px] h-12 bg-[#a3a3a3] rounded-l-md shadow-sm" /> 
      <div className="absolute top-40 -right-[2px] w-[2px] h-16 bg-[#a3a3a3] rounded-r-md shadow-sm" /> 
      
      {/* Screen Bezel */}
      <div className="w-full h-full rounded-[calc(2.75rem-2px)] bg-black p-[10px] relative shadow-inner">
        <div className="w-full h-full rounded-[1.75rem] bg-[#0A0A0C] overflow-hidden relative border border-white/10">
          
          {/* Hardware Notch */}
          <div className="absolute top-0 inset-x-0 h-[20px] flex justify-center z-50">
            <div className="w-[100px] h-full bg-black rounded-b-[14px] relative">
              <div className="absolute top-1.5 right-4 size-1 rounded-full bg-[#1a1a1c] border border-white/5" /> 
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full bg-[#1a1a1c]" /> 
            </div>
          </div>
          
          {/* Screenshot */}
          <img 
            src={imageSrc} 
            alt={alt} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

// ── Animation Variants ──────────────────────────────────────────────────
const easeOutCirc = [0.16, 1, 0.3, 1] as const;

export function Download() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="relative py-28 lg:py-40 bg-(--color-surface) overflow-hidden">

      {/* Premium Light Theme Background Enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,111,0,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.04),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* ── Text + CTAs ────────────────────────────────────────────── */}
          <div className="lg:col-span-5 relative z-20 flex flex-col justify-center">
            
            <RevealWrapper>
              {/* Premium Pill Badge */}
              <div className="inline-flex items-center gap-2.5 bg-orange-50 border border-orange-100 shadow-sm rounded-full px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-[11px] font-bold text-orange-600 tracking-widest uppercase">
                  Free · No subscriptions
                </span>
              </div>

              {/* Elevated Typography */}
              <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-semibold tracking-tight leading-[1.05] text-(--color-text-primary) text-balance">
                Your city<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 drop-shadow-sm">
                  in your pocket.
                </span>
              </h2>

              <p className="mt-6 text-lg text-(--color-text-secondary) leading-relaxed max-w-md">
                Turn-by-turn matatu navigation, community-verified stops, and service alerts, built for the way Nairobi actually moves. Earn Safiri Points for every contribution that makes the city smarter.
              </p>
            </RevealWrapper>

            {/* Action Row: Buttons */}
            <RevealWrapper delay={0.15} className="mt-10 flex flex-col sm:flex-row gap-4">
              
              <a
                href="#"
                className="group relative flex items-center justify-center sm:justify-start gap-3.5 px-6 py-3.5 rounded-2xl bg-[#0A0A0C] border border-[#2A2A2C] text-white hover:bg-black active:scale-[0.97] transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg viewBox="0 0 24 24" className="size-6 fill-white shrink-0 relative z-10" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="relative z-10 text-left">
                  <p className="text-[10px] text-white/70 leading-none font-semibold mb-0.5">Download on the</p>
                  <p className="text-[15px] font-bold text-white leading-none tracking-tight">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-center sm:justify-start gap-3.5 px-6 py-3.5 rounded-2xl bg-white border border-(--color-border) hover:bg-gray-50 active:scale-[0.97] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true">
                  <path fill="#EA4335" d="M3.18 23.76c.34.19.72.24 1.1.15l12.44-12.44L13.28 8 3.18 23.76z"/>
                  <path fill="#FBBC05" d="M20.52 10.56L17.2 8.59l-3.92 3.93 3.92 3.92 3.32-1.97c.94-.56.94-1.95 0-2.51z"/>
                  <path fill="#4285F4" d="M4.28 1.09C3.9.97 3.47 1.05 3.18 1.31L13.28 12l3.44-3.41L4.28 1.09z"/>
                  <path fill="#34A853" d="M3.18 1.31C2.8 1.61 2.5 2.12 2.5 2.83v17.4c0 .71.3 1.22.68 1.52L13.28 12 3.18 1.31z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-(--color-text-muted) leading-none font-semibold mb-0.5">Get it on</p>
                  <p className="text-[15px] font-bold text-(--color-text-primary) leading-none tracking-tight">Google Play</p>
                </div>
              </a>

            </RevealWrapper>

            {/* Social Proof Row */}
            <RevealWrapper delay={0.25} className="mt-12 pt-8 border-t border-(--color-border)/60 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3">
                {["https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=100&h=100&fit=crop", 
                  "https://images.unsplash.com/photo-1506803682983-33f5b8cdd287?w=100&h=100&fit=crop", 
                  "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=100&h=100&fit=crop", 
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"].map((url, i) => (
                  <img 
                    key={i} 
                    src={url} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>

              {/* Rating Text */}
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(star => (
                    <StarIcon key={star} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-(--color-text-primary) ml-1.5">4.9/5</span>
                </div>
                <p className="text-[11px] font-medium text-(--color-text-muted)">
                  From over <strong className="text-(--color-text-primary)">12,000+</strong> daily commuters.
                </p>
              </div>

            </RevealWrapper>
          </div>

          {/* ── Multi-Device Presentation ──────────────────────────── */}
          <div ref={ref} className="lg:col-span-7 relative h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* Left Phone */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, x: -160, rotate: -8, scale: 0.85 } : {}}
              transition={{ duration: 1, ease: easeOutCirc }}
              className="absolute z-0 hidden lg:block"
            >
              <PhoneMockup 
                imageSrc="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800" 
                alt="Community Feed Screenshot" 
              />
            </motion.div>

            {/* Right Phone */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, x: 160, rotate: 8, scale: 0.85 } : {}}
              transition={{ duration: 1, ease: easeOutCirc }}
              className="absolute z-0 hidden lg:block"
            >
              <PhoneMockup 
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Live Alerts Screenshot" 
              />
            </motion.div>

            {/* Center Phone */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: easeOutCirc, delay: 0.1 }}
              className="relative z-20"
            >
              <PhoneMockup 
                imageSrc="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Navigation Map Screenshot" 
                className="shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]" 
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}