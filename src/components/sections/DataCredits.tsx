"use client";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const partners = [
  "University of Nairobi",
  "MIT Civic Data Design Lab",
  "Columbia University",
  "UN HABITAT",
];

const stats = [
  { value: "5,000+", label: "Map downloads in 6 months" },
  { value: "130+",   label: "Routes documented" },
  { value: "2014",   label: "First published" },
  { value: "GTFS",   label: "Open data standard" },
];

export function DataCredits() {
  return (
    <section className="py-24 bg-(--color-canvas) relative overflow-hidden">

      {/* Decorative orange glow, far right */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgb(255 111 0 / 0.10) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────── */}
        <RevealWrapper className="max-w-xl">
          <SectionLabel>Data Foundation</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[0.95] text-(--color-text-primary)">
            Nairobi's transit<br />finally mapped.
          </h2>
        </RevealWrapper>

        {/* ── Main grid ──────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: attribution ─────────────────────────────────── */}
          <RevealWrapper delay={0.1} className="lg:col-span-5 flex flex-col gap-6">

            <p className="text-base text-(--color-text-secondary) leading-relaxed">
              Hopln's route network and stop data are built on the foundation laid by{" "}
              <a
                href="https://www.digitalmatatus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-(--color-text-primary) underline underline-offset-2 decoration-(--color-orange)/50 hover:decoration-(--color-orange) transition-colors"
              >
                Digital Matatus
              </a>{" "}
             , a research collaboration that produced the first open GTFS dataset of Nairobi's
              informal matatu system.
            </p>

            <p className="text-sm text-(--color-text-muted) leading-relaxed">
              Before their work, Nairobi's transit data was inaccessible and unreliable.
              Student researchers from the University of Nairobi rode every route themselves,
              collecting GPS traces and building the first comprehensive map of the city's
              14-million-trip-per-year informal network.
            </p>

            {/* Pull quote */}
            <figure className="pl-5 border-l-[3px] border-(--color-orange) my-2">
              <blockquote>
                <p className="text-base sm:text-lg font-medium italic text-(--color-text-primary) leading-snug">
                  "Free, public data spurs innovation and improved services for citizens."
                </p>
              </blockquote>
              <figcaption className="mt-2 text-[11px] font-semibold text-(--color-text-muted) uppercase tracking-[0.15em]">
               , Digital Matatus
              </figcaption>
            </figure>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 pt-2">
              {stats.map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-(--color-text-primary) tabular-nums tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-(--color-text-muted) uppercase tracking-[0.12em]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Research partners */}
            <div className="pt-5 border-t border-(--color-border)">
              <p className="text-[11px] font-semibold text-(--color-text-muted) uppercase tracking-[0.15em] mb-3">
                Research Partners
              </p>
              <div className="flex flex-wrap gap-2">
                {partners.map(p => (
                  <span
                    key={p}
                    className="text-xs font-medium text-(--color-text-secondary) bg-(--color-surface) border border-(--color-border) px-3 py-1.5 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://www.digitalmatatus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-orange) hover:gap-2.5 transition-all duration-200 group"
            >
              Visit Digital Matatus
              <svg viewBox="0 0 16 16" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>

          </RevealWrapper>

          {/* Right: visuals ────────────────────────────────────── */}
          <RevealWrapper delay={0.2} className="lg:col-span-7 flex flex-col gap-3">

            {/* Main map image */}
            <div className="rounded-2xl overflow-hidden border border-(--color-border) bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.10)]">
              <img
                src="/digital-matatus-map.png"
                alt="Digital Matatus diagrammatic map of Nairobi's matatu network, first comprehensive visualization of the city's 130+ routes"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>

            {/* Photo strip */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-(--color-surface-inset)">
                <img
                  src="/digital-matatus-field.jpg"
                  alt="Researchers collecting GPS data by riding Nairobi matatus"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-(--color-surface-inset)">
                <img
                  src="/digital-matatus-papermap.jpg"
                  alt="Release of the Digital Matatus paper map"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-(--color-surface-inset)">
                <img
                  src="/digital-matatus-workshop.jpg"
                  alt="Digital Matatus community workshop in Nairobi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-[11px] text-(--color-text-muted) text-right">
              Images courtesy of{" "}
              <a
                href="https://www.digitalmatatus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--color-orange) transition-colors underline underline-offset-2"
              >
                digitalmatatus.com
              </a>
            </p>

          </RevealWrapper>

        </div>
      </div>
    </section>
  );
}
