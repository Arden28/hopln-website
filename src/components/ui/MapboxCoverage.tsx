"use client";
import { useEffect, useRef, useState } from "react";

// ── Shared types ──────────────────────────────────────────────────
export interface GraphNode {
  id: string;
  name: string;
  lat: number;
  lng: number;
  trip_count: number;
  route_count: number;
}

export interface GraphEdge {
  id: string;
  route_id: string;
  route_short_name: string;
  route_color: string | null;
  points: [number, number][];
}

export interface CoverageCorridorData {
  id: string;
  name: string;
  route_count: number;
  stop_count: number;
  color: string;
}

export interface CoverageGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

interface Props {
  token: string;
  graph?: CoverageGraph;
  isApiLoading?: boolean;
}

function buildRoutesGeoJSON(edges: GraphEdge[]): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: edges
      .filter(e => e.points.length >= 2)
      .map(e => ({
        type: "Feature" as const,
        geometry: { type: "LineString" as const, coordinates: e.points },
        properties: { route_color: e.route_color ? `#${e.route_color}` : "#FF6F00" },
      })),
  };
}

function buildStopsGeoJSON(nodes: GraphNode[]): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: nodes.map(n => ({
      type: "Feature" as const,
      geometry: { type: "Point" as const, coordinates: [n.lng, n.lat] },
      properties: { id: n.id, name: n.name, trip_count: n.trip_count, route_count: n.route_count },
    })),
  };
}

const EMPTY_FC: GeoJSON.FeatureCollection = { type: "FeatureCollection", features: [] };

export function MapboxCoverage({ token, graph, isApiLoading }: Props) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const mapRef        = useRef<any>(null);
  const pendingGraph  = useRef<CoverageGraph | undefined>(undefined);
  const [mapReady, setMapReady] = useState(false);

  // ── Effect 1: initialize the map once ────────────────────────────
  useEffect(() => {
    if (!containerRef.current || !token) return;

    let cancelled = false;

    async function initMap() {
      const mapboxgl = (await import("mapbox-gl")).default;
      await import("mapbox-gl/dist/mapbox-gl.css");
      if (cancelled || !containerRef.current) return;

      mapboxgl.accessToken = token;

      const map = new mapboxgl.Map({
        container: containerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [36.8219, -1.2921],
        zoom: 11,
        attributionControl: false,
        logoPosition: "bottom-left",
        pitchWithRotate: false,
        dragRotate: false,
      });

      map.on("load", () => {
        if (cancelled) return;

        map.addSource("routes", { type: "geojson", data: EMPTY_FC });
        map.addLayer({
          id: "routes-layer",
          type: "line",
          source: "routes",
          paint: {
            "line-color": ["get", "route_color"],
            "line-width": 2,
            "line-opacity": 0.7,
          },
        });

        map.addSource("stops", { type: "geojson", data: EMPTY_FC });
        map.addLayer({
          id: "stops-layer",
          type: "circle",
          source: "stops",
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["get", "trip_count"], 0, 4, 20, 10],
            "circle-color": [
              "interpolate", ["linear"], ["get", "route_count"],
              0, "#94a3b8",
              1, "#FF6F00",
              5, "#FFB300",
            ],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 1.5,
            "circle-opacity": 0.9,
          },
        });

        const popup = new mapboxgl.Popup({
          closeButton: false, closeOnClick: false,
          offset: 10, className: "hopln-map-popup",
        });
        map.on("mouseenter", "stops-layer", (e: any) => {
          map.getCanvas().style.cursor = "pointer";
          const p = e.features[0].properties;
          popup
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(
              `<div style="font:600 12px/1.4 sans-serif;color:#0A0A0A">${p.name}</div>` +
              `<div style="font:400 11px/1.4 sans-serif;color:#525252;margin-top:2px">${p.route_count} route${p.route_count !== 1 ? "s" : ""}</div>`
            )
            .addTo(map);
        });
        map.on("mouseleave", "stops-layer", () => {
          map.getCanvas().style.cursor = "";
          popup.remove();
        });

        mapRef.current = map;
        setMapReady(true);

        if (pendingGraph.current) {
          (map.getSource("routes") as any)?.setData(buildRoutesGeoJSON(pendingGraph.current.edges));
          (map.getSource("stops")  as any)?.setData(buildStopsGeoJSON(pendingGraph.current.nodes));
          pendingGraph.current = undefined;
        }
      });
    }

    initMap().catch(console.error);

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [token]);

  // ── Effect 2: push new data into existing sources ─────────────
  useEffect(() => {
    if (!graph) return;

    const map = mapRef.current;

    if (map && map.isStyleLoaded()) {
      (map.getSource("routes") as any)?.setData(buildRoutesGeoJSON(graph.edges));
      (map.getSource("stops")  as any)?.setData(buildStopsGeoJSON(graph.nodes));
    } else {
      pendingGraph.current = graph;
    }
  }, [graph]);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />

      {/* Loading overlay, shown while map tiles initialize */}
      {!mapReady && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-(--color-surface-inset)">
          <div className="flex flex-col items-center gap-3">
            <div
              className="size-10 rounded-full border-[3px] border-(--color-border) border-t-(--color-orange) animate-spin"
              aria-label="Loading map"
            />
          </div>
        </div>
      )}
    </div>
  );
}
