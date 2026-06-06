import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Hopln collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: [
      {
        subtitle: "Location data",
        text: "When you use navigation features, Hopln accesses your device's GPS to calculate routes and provide turn-by-turn directions. Location is processed on-device and through our API for routing purposes only. We do not store your precise location history.",
      },
      {
        subtitle: "Usage data",
        text: "We collect anonymised information about how you interact with the app — screens visited, searches performed, routes requested — to improve the service. This data is not tied to your identity.",
      },
      {
        subtitle: "Contributions",
        text: "When you submit a delay report, stop review, photo, or route correction, that contribution is stored and associated with your account. Approved contributions become part of the public dataset that all riders benefit from.",
      },
      {
        subtitle: "Account information",
        text: "If you create an account, we store your display name, email address, and Safiri Points balance. Your password is hashed and never stored in plain text.",
      },
      {
        subtitle: "Device information",
        text: "We collect your device type, operating system version, and app version to diagnose bugs and ensure compatibility.",
      },
    ],
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    content: [
      {
        subtitle: "Providing the service",
        text: "Your location is used solely to calculate routes and display your position on the navigation map. Search queries are sent to our API to find matching stops and routes.",
      },
      {
        subtitle: "AI route planning",
        text: "When you use natural language or voice input to plan a trip, your query is sent to Google Gemini to extract destination information. Queries are processed transiently and are not used to train models on your personal data.",
      },
      {
        subtitle: "Improving the network",
        text: "Anonymised journey patterns help us identify gaps in coverage, poorly-mapped stops, and routes that need verification. No individual's journeys are exposed.",
      },
      {
        subtitle: "Safiri Points & gamification",
        text: "Your contribution history is used to calculate your Safiri Points balance, tier level, and badge unlocks, and to populate the community leaderboard.",
      },
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services",
    content: [
      {
        subtitle: "Mapbox",
        text: "Maps, route tiles, and geocoding are provided by Mapbox. Your map interactions and search queries may be processed by Mapbox under their own Privacy Policy (mapbox.com/legal/privacy).",
      },
      {
        subtitle: "Google Gemini",
        text: "AI-powered trip planning queries are processed by Google's Gemini API. Queries are sent when you use the voice or natural language input feature.",
      },
      {
        subtitle: "OpenTripPlanner",
        text: "Route calculations are performed by our self-hosted OpenTripPlanner instance running Nairobi GTFS data. No data leaves our infrastructure for this purpose.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data retention",
    content: [
      {
        subtitle: "Contributions",
        text: "Approved contributions are retained indefinitely as part of the public dataset. Pending or rejected contributions are deleted after 90 days.",
      },
      {
        subtitle: "Account data",
        text: "Your account data is retained for as long as your account is active. You may request deletion at any time by contacting privacy@hopln.app.",
      },
      {
        subtitle: "Location data",
        text: "Precise GPS coordinates are not stored beyond the active navigation session. Anonymised origin-destination pairs may be retained for up to 12 months for network analysis.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: [
      {
        subtitle: "Access and portability",
        text: "You may request a copy of all personal data we hold about you. We will respond within 14 days.",
      },
      {
        subtitle: "Correction",
        text: "If any data we hold is inaccurate, you may request a correction at any time.",
      },
      {
        subtitle: "Deletion",
        text: "You may request deletion of your account and all associated personal data. Contributions already approved and incorporated into the public dataset may remain in anonymised form.",
      },
      {
        subtitle: "Withdraw consent",
        text: "You may withdraw consent for location access at any time through your device settings. This will disable navigation features.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    content: [
      {
        subtitle: "Privacy queries",
        text: "For any privacy-related questions, requests, or concerns, contact us at privacy@hopln.app. We aim to respond within 5 business days.",
      },
      {
        subtitle: "Governing law",
        text: "This Privacy Policy is governed by the laws of Kenya, including the Data Protection Act, 2019.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="bg-(--color-dark) pt-32 pb-16 border-b border-white/8">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold text-(--color-orange) uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-sm text-white/45">Last updated: June 2025 · Applies to Hopln iOS and Android apps and hopln.app</p>
        </div>
      </div>

      <main className="bg-(--color-canvas) min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">

          {/* Intro */}
          <p className="text-base text-(--color-text-secondary) leading-relaxed mb-14 pb-14 border-b border-(--color-border)">
            Hopln ("we", "our", "us") is a transit navigation app built for Nairobi's matatu and bus network.
            This policy explains what data we collect when you use the app, how we use it, and the choices you have.
            We believe in plain language — if anything here is unclear, email us.
          </p>

          {/* Table of contents */}
          <nav className="mb-14 p-6 rounded-2xl bg-(--color-surface) border border-(--color-border)" aria-label="Table of contents">
            <p className="text-xs font-bold text-(--color-text-muted) uppercase tracking-widest mb-4">Contents</p>
            <ol className="flex flex-col gap-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-(--color-text-secondary) hover:text-(--color-orange) transition-colors duration-150 flex items-center gap-2"
                  >
                    <span className="text-xs text-(--color-text-muted) tabular-nums w-4">{i + 1}.</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold text-(--color-text-primary) mb-6 pb-3 border-b border-(--color-border)">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-5">
                  {section.content.map((block) => (
                    <div key={block.subtitle}>
                      <h3 className="text-sm font-semibold text-(--color-text-primary) mb-1.5">{block.subtitle}</h3>
                      <p className="text-sm text-(--color-text-secondary) leading-relaxed">{block.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-(--color-border)">
            <p className="text-xs text-(--color-text-muted)">
              This policy may be updated periodically. Continued use of the app after changes constitutes acceptance.
              Previous versions are available on request.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
