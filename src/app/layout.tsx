import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://hopln.app"),
  title: {
    default: "Hopln, Navigate the city you live in",
    template: "%s | Hopln",
  },
  description:
    "Real-time matatu and bus navigation for Nairobi. Live tracking, AI-powered route planning, service alerts, built for the city you actually live in.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@hoplnapp",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FF6F00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
