import Image from "next/image";

const nav = [
  { label: "Features",  href: "#features" },
  { label: "Coverage",  href: "#coverage" },
  { label: "Community", href: "/community" },
  { label: "Operators", href: "#operators" },
  { label: "Privacy",   href: "/privacy" },
  { label: "Terms",     href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-(--color-dark) border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Image src="/hopln.png" alt="Hopln" width={24} height={24} className="rounded" />
            <span className="font-semibold text-sm text-white">Hopln</span>
          </div>
          <p className="text-xs text-(--color-on-dark-secondary)">Built in Nairobi 🇰🇪</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {nav.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-(--color-on-dark-secondary)  transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-(--color-on-dark-muted)">
          © {new Date().getFullYear()} Hopln
        </p>
      </div>
    </footer>
  );
}
