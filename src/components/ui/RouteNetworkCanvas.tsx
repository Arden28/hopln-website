"use client";
import { useEffect, useRef } from "react";
import { nodes, edges, buildRandomRoute, type NetworkNode } from "@/lib/routeNetworkData";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function RouteNetworkCanvas() {
  const dotRef     = useRef<SVGCircleElement>(null);
  const lineRef    = useRef<SVGLineElement>(null);
  const glowRef    = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let rafId: number;
    let route: NetworkNode[] = buildRandomRoute(10);
    let segIdx = 0;
    let progress = 0;
    let pauseFrames = 0;

    function frame() {
      rafId = requestAnimationFrame(frame);

      if (pauseFrames > 0) {
        pauseFrames--;
      } else {
        progress += 0.004;
        if (progress >= 1) {
          progress = 0;
          segIdx++;
          pauseFrames = 18;
          if (segIdx >= route.length - 1) {
            route = buildRandomRoute(10);
            segIdx = 0;
          }
        }
      }

      const from = route[segIdx];
      const to   = route[Math.min(segIdx + 1, route.length - 1)];
      const t    = easeInOut(progress);
      const x    = lerp(from.x, to.x, t);
      const y    = lerp(from.y, to.y, t);

      if (dotRef.current)  { dotRef.current.setAttribute("cx",  String(x)); dotRef.current.setAttribute("cy",  String(y)); }
      if (glowRef.current) { glowRef.current.setAttribute("cx", String(x)); glowRef.current.setAttribute("cy", String(y)); }
      if (lineRef.current) {
        lineRef.current.setAttribute("x1", String(from.x));
        lineRef.current.setAttribute("y1", String(from.y));
        lineRef.current.setAttribute("x2", String(x));
        lineRef.current.setAttribute("y2", String(y));
      }
    }

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full opacity-25"
      aria-hidden="true"
    >
      {/* Grid lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 32} x2="1000" y2={i * 32}
          stroke="var(--color-line-grid)" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 32 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 32} y1="0" x2={i * 32} y2="600"
          stroke="var(--color-line-grid)" strokeWidth="0.5" />
      ))}

      {/* Edges */}
      {edges.map((e, i) => {
        const from = nodes.find(n => n.id === e.from)!;
        const to   = nodes.find(n => n.id === e.to)!;
        return (
          <line key={i}
            x1={from.x} y1={from.y} x2={to.x} y2={to.y}
            stroke="var(--color-text-muted)" strokeWidth="1" strokeOpacity="0.4"
          />
        );
      })}

      {/* Nodes */}
      {nodes.map(n => (
        <circle key={n.id} cx={n.x} cy={n.y} r="3"
          fill="var(--color-text-muted)" fillOpacity="0.6" />
      ))}

      {/* Active edge glow */}
      <line ref={lineRef}
        x1="500" y1="300" x2="500" y2="300"
        stroke="var(--color-orange)" strokeWidth="2" strokeOpacity="0.8"
      />

      {/* Travelling dot glow */}
      <circle ref={glowRef} cx="500" cy="300" r="10"
        fill="var(--color-orange)" fillOpacity="0.15"
      />

      {/* Travelling dot */}
      <circle ref={dotRef} cx="500" cy="300" r="4"
        fill="var(--color-orange)"
      />
    </svg>
  );
}
