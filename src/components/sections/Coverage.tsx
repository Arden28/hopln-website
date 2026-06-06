"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { CoverageGraph } from "@/components/ui/MapboxCoverage";

// ── Types ─────────────────────────────────────────────────────────
interface CoverageApiResponse {
  graph: CoverageGraph;
  total_routes: number;
  total_stops: number;
  total_trips: number;
  total_contributions: number;
}

// ── Map frame loading skeleton (shown while Mapbox JS loads) ──────
function MapFrameLoading() {
  return (
    <div className="w-full h-full bg-(--color-surface-inset) flex items-center justify-center">
      <div
        className="size-10 rounded-full border-[3px] border-(--color-border) border-t-(--color-orange) animate-spin"
        aria-label="Loading map"
      />
    </div>
  );
}

// ── Stats skeleton cell ───────────────────────────────────────────
function StatSkeleton({ index }: { index: number }) {
  return (
    <div className="px-4 py-8 sm:px-8 border-r border-b sm:border-b-0 border-(--color-border) last:border-r-0">
      <div
        className="h-10 sm:h-12 w-20 rounded-xl bg-(--color-surface-inset) animate-pulse"
        style={{ animationDelay: `${index * 0.1}s` }}
      />
      <div
        className="mt-3 h-2.5 w-24 rounded bg-(--color-surface-inset) animate-pulse"
        style={{ animationDelay: `${index * 0.1 + 0.05}s` }}
      />
    </div>
  );
}

// ── Dynamic Mapbox import (client-only) ───────────────────────────
const MapboxCoverage = dynamic(
  () => import("@/components/ui/MapboxCoverage").then(m => m.MapboxCoverage),
  { ssr: false, loading: () => <MapFrameLoading /> }
);

// ── Section ───────────────────────────────────────────────────────
export function Coverage() {
  const token  = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

  const [apiData,   setApiData]   = useState<CoverageApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError,   setIsError]   = useState(false);

  useEffect(() => {
    if (!apiUrl) {
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25_000);

    fetch(`${apiUrl}/api/v1/coverage`, { signal: controller.signal })
      .then(r => { if (!r.ok) throw new Error(r.statusText); return r.json() as Promise<CoverageApiResponse>; })
      .then(data => setApiData(data))
      .catch(err => {
        if (err.name === "AbortError") return;
        setIsError(true);
      })
      .finally(() => {
        clearTimeout(timer);
        setIsLoading(false);
      });

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [apiUrl]);

  const stats = [
    { key: "total_routes",        suffix: "",  label: "Active Routes" },
    { key: "total_stops",         suffix: "+", label: "Stops Covered" },
    { key: "total_trips",         suffix: "+", label: "Trips Logged"  },
    { key: "total_contributions", suffix: "+", label: "Contributions" },
  ] as const;

  return (
    <section id="coverage" className="relative py-28 bg-(--color-surface) overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-(--color-orange)/5 blur-[120px] rounded-full pointer-events-none" />

      <style>{`
        .hopln-map-popup .mapboxgl-popup-content {
          padding: 10px 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.15);
          border: 1px solid var(--color-border);
          font-family: inherit;
        }
        .hopln-map-popup .mapboxgl-popup-tip { border-top-color: rgba(255, 255, 255, 0.95); }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-6 z-10">

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <RevealWrapper>
            <SectionLabel>Network Coverage</SectionLabel>
            <h2 className="mt-4 text-5xl sm:text-[64px] font-semibold tracking-[-0.03em] leading-[0.95] text-transparent bg-clip-text bg-gradient-to-br from-(--color-text-primary) to-(--color-text-secondary)">
              Your city,<br />mapped.
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.15} className="md:max-w-[320px] pb-1">
            <p className="text-base text-(--color-text-secondary) leading-relaxed">
              {isLoading ? (
                <>
                  <span className="inline-block h-[1em] w-8 bg-(--color-border) rounded animate-pulse align-middle mr-1" />
                  {" routes across Nairobi, tracked, verified, and updated in real time by local riders."}
                </>
              ) : (
                <>
                  <strong className="text-(--color-text-primary) font-semibold">
                    {apiData?.total_routes ?? "—"} routes
                  </strong>
                  {" across Nairobi, tracked, verified, and updated in real time by local riders."}
                </>
              )}
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-orange) opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-(--color-orange)" />
              </span>
              <span className="text-xs font-medium text-(--color-text-muted) uppercase tracking-widest">Live network data</span>
            </div>
          </RevealWrapper>
        </div>

        {/* ── Map ──────────────────────────────────────────────── */}
        <RevealWrapper delay={0.2}>
          <div className="group rounded-[24px] overflow-hidden relative aspect-[16/10] sm:aspect-[16/7] bg-(--color-surface-inset) shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-(--color-border) transition-shadow duration-500 hover:shadow-[0_16px_60px_-15px_rgba(0,0,0,0.15)]">

            {token ? (
              <MapboxCoverage token={token} graph={apiData?.graph} isApiLoading={isLoading} />
            ) : (
              <MapFrameLoading />
            )}

            {/* Live / Loading badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2.5 bg-white/80 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-sm transition-transform duration-300 group-hover:scale-105">
              {isLoading ? (
                <>
                  <div className="size-2 rounded-full border-2 border-[#FF6F00]/40 border-t-[#FF6F00] animate-spin" />
                  <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">Loading…</span>
                </>
              ) : (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6F00] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6F00]" />
                  </span>
                  <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-widest mt-0.5">Live</span>
                </>
              )}
            </div>

            {/* Legend */}
            <div className="absolute bottom-5 right-5 bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-sm">
              <p className="text-[11px] font-bold text-neutral-800 uppercase tracking-wider mb-3">Stop Activity</p>
              <div className="flex flex-col gap-2.5">
                {([
                  ["#94a3b8", "Low Volume"],
                  ["#FF6F00", "Active Hub"],
                  ["#FFB300", "High Transit"],
                ] as const).map(([color, label]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className="size-2.5 rounded-full shadow-inner"
                      style={{ background: color, boxShadow: `0 0 8px ${color}66` }}
                    />
                    <span className="text-[11px] font-medium text-neutral-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* ── Stats strip ──────────────────────────────────────── */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 border-t border-(--color-border)">
          {stats.map((stat, i) => (
            <RevealWrapper key={stat.label} delay={0.3 + 0.1 * i}>
              {isLoading ? (
                <StatSkeleton index={i} />
              ) : (
                <div className="relative group px-4 py-8 sm:px-8 border-r border-b sm:border-b-0 border-(--color-border) last:border-r-0 transition-colors duration-300 hover:bg-(--color-surface-inset)">
                  {isError || !apiData ? (
                    <span className="text-4xl sm:text-5xl font-extrabold text-(--color-text-muted) tabular-nums">—</span>
                  ) : (
                    <AnimatedCounter
                      to={apiData[stat.key]}
                      suffix={stat.suffix}
                      duration={2.2}
                      className="text-4xl sm:text-5xl font-extrabold text-(--color-text-primary) tabular-nums tracking-tight transition-transform duration-300 group-hover:-translate-y-1 inline-block"
                    />
                  )}
                  <p className="mt-3 text-xs font-semibold text-(--color-text-muted) uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-(--color-text-secondary)">
                    {stat.label}
                  </p>
                </div>
              )}
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}
