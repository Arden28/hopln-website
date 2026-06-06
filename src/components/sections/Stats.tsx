"use client";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 134,   suffix: "",   label: "Routes mapped",    sublabel: "across Nairobi" },
  { value: 2400,  suffix: "+",  label: "Bus stops",        sublabel: "and counting" },
  { value: 50000, suffix: "+",  label: "Daily riders",     sublabel: "trust Hopln" },
  { value: 40,    suffix: "+",  label: "SACCOs onboard",   sublabel: "growing monthly" },
];

export function Stats() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-dark overflow-hidden px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => (
              <RevealWrapper key={s.label} delay={i * 0.1} className="text-center px-6">
                <p className="text-4xl sm:text-5xl font-bold text-(--color-orange) tabular-nums">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{s.label}</p>
                <p className="text-xs text-(--color-on-dark-secondary) mt-0.5">{s.sublabel}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
