export interface NetworkNode {
  id: string;
  x: number;
  y: number;
  label?: string;
}

export interface NetworkEdge {
  from: string;
  to: string;
}

export const nodes: NetworkNode[] = [
  // CBD core
  { id: "kencom",     x: 500, y: 300, label: "Kencom" },
  { id: "gpo",        x: 530, y: 280, label: "GPO" },
  { id: "archives",   x: 470, y: 320, label: "Archives" },
  { id: "railways",   x: 490, y: 350, label: "Railways" },

  // Thika Road corridor (NE)
  { id: "pangani",    x: 580, y: 230, label: "Pangani" },
  { id: "muthaiga",   x: 620, y: 185, label: "Muthaiga" },
  { id: "roysambu",   x: 670, y: 148, label: "Roysambu" },
  { id: "thika_rd",   x: 720, y: 110, label: "Thika Rd" },

  // Mombasa Road (SE)
  { id: "mlolongo",   x: 580, y: 390, label: "Mlolongo" },
  { id: "embakasi",   x: 640, y: 420, label: "Embakasi" },
  { id: "airport",    x: 700, y: 450, label: "Airport" },

  // Ngong Road (SW)
  { id: "dagoretti",  x: 380, y: 360, label: "Dagoretti" },
  { id: "kawangware", x: 310, y: 400, label: "Kawangware" },
  { id: "ngong_rd",   x: 260, y: 440, label: "Ngong Rd" },

  // Westlands (NW)
  { id: "museum_hill",x: 430, y: 240, label: "Museum Hill" },
  { id: "westlands",  x: 360, y: 200, label: "Westlands" },
  { id: "parklands",  x: 400, y: 170, label: "Parklands" },

  // Karen / Langata (SW far)
  { id: "langata",    x: 340, y: 470, label: "Langata" },
  { id: "karen",      x: 280, y: 510, label: "Karen" },

  // Eastlands (E)
  { id: "gikomba",    x: 570, y: 320, label: "Gikomba" },
  { id: "buruburu",   x: 640, y: 300, label: "Buruburu" },
  { id: "kayole",     x: 700, y: 280, label: "Kayole" },
];

export const edges: NetworkEdge[] = [
  // CBD internal
  { from: "kencom",      to: "gpo" },
  { from: "kencom",      to: "archives" },
  { from: "kencom",      to: "railways" },
  { from: "gpo",         to: "museum_hill" },

  // Thika Road corridor
  { from: "kencom",      to: "pangani" },
  { from: "pangani",     to: "muthaiga" },
  { from: "muthaiga",    to: "roysambu" },
  { from: "roysambu",    to: "thika_rd" },

  // Mombasa Road
  { from: "railways",    to: "mlolongo" },
  { from: "mlolongo",    to: "embakasi" },
  { from: "embakasi",    to: "airport" },

  // Ngong Road
  { from: "archives",    to: "dagoretti" },
  { from: "dagoretti",   to: "kawangware" },
  { from: "kawangware",  to: "ngong_rd" },

  // Westlands
  { from: "museum_hill", to: "westlands" },
  { from: "westlands",   to: "parklands" },
  { from: "gpo",         to: "parklands" },

  // Karen / Langata
  { from: "kawangware",  to: "langata" },
  { from: "langata",     to: "karen" },
  { from: "dagoretti",   to: "langata" },

  // Eastlands
  { from: "kencom",      to: "gikomba" },
  { from: "gikomba",     to: "buruburu" },
  { from: "buruburu",    to: "kayole" },
  { from: "gikomba",     to: "embakasi" },

  // Cross connections
  { from: "muthaiga",    to: "parklands" },
  { from: "pangani",     to: "buruburu" },
  { from: "roysambu",    to: "kayole" },
];

const nodeMap = new Map(nodes.map(n => [n.id, n]));

function getNeighbours(id: string): string[] {
  return edges
    .filter(e => e.from === id || e.to === id)
    .map(e => (e.from === id ? e.to : e.from));
}

export function buildRandomRoute(length = 10): NetworkNode[] {
  const start = nodes[Math.floor(Math.random() * nodes.length)];
  const path: NetworkNode[] = [start];
  const visited = new Set([start.id]);

  while (path.length < length) {
    const current = path[path.length - 1];
    const neighbours = getNeighbours(current.id).filter(id => !visited.has(id));
    if (neighbours.length === 0) break;
    const next = neighbours[Math.floor(Math.random() * neighbours.length)];
    const node = nodeMap.get(next)!;
    path.push(node);
    visited.add(next);
  }
  return path;
}
