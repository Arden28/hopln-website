import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of Hopln.",
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    content: [
      {
        subtitle: "Agreement",
        text: "By downloading, installing, or using the Hopln app or visiting hopln.app, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.",
      },
      {
        subtitle: "Age requirement",
        text: "You must be at least 13 years old to use Hopln. If you are under 18, you confirm that you have your parent or guardian's permission to use the service.",
      },
      {
        subtitle: "Changes to terms",
        text: "We may update these terms from time to time. We will notify you of material changes through the app or by email. Continued use after the effective date of any change constitutes your acceptance.",
      },
    ],
  },
  {
    id: "the-service",
    title: "The service",
    content: [
      {
        subtitle: "What Hopln provides",
        text: "Hopln is a transit navigation app for Nairobi's matatu and bus network. We provide route planning, real-time tracking, service alerts, and community contribution tools. The service is provided 'as is' and 'as available'.",
      },
      {
        subtitle: "Service availability",
        text: "We aim for high availability but do not guarantee uninterrupted access. Maintenance, network disruptions, or events beyond our control may affect the service. We are not liable for losses arising from unavailability.",
      },
      {
        subtitle: "Transit information accuracy",
        text: "Route, stop, and schedule data comes from open datasets and community contributions. While we work hard to keep it accurate, real-world transit conditions change. Always exercise your own judgement when travelling — Hopln is a navigation aid, not a guarantee of service.",
      },
      {
        subtitle: "AI route planning",
        text: "The AI-powered trip planning feature interprets natural language queries and generates route suggestions. AI outputs may occasionally be incorrect or incomplete. Review suggested routes before travel.",
      },
    ],
  },
  {
    id: "your-account",
    title: "Your account",
    content: [
      {
        subtitle: "Registration",
        text: "Creating an account is optional for basic navigation but required for contributions and Safiri Points. You agree to provide accurate information and keep your login credentials secure.",
      },
      {
        subtitle: "Account security",
        text: "You are responsible for all activity that occurs under your account. Notify us immediately at support@hopln.app if you suspect unauthorised access.",
      },
      {
        subtitle: "Termination",
        text: "You may delete your account at any time through the app settings. We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or misuse the contribution system.",
      },
    ],
  },
  {
    id: "contributions",
    title: "Contributions",
    content: [
      {
        subtitle: "Submitting contributions",
        text: "When you submit a delay report, stop review, route correction, or photo, you grant Hopln a non-exclusive, royalty-free, perpetual licence to use, display, and distribute that content as part of the public transit dataset.",
      },
      {
        subtitle: "Accuracy and good faith",
        text: "Contributions must be accurate and submitted in good faith. Submitting false information, spam, or content intended to mislead other riders is prohibited and may result in account suspension.",
      },
      {
        subtitle: "Content standards",
        text: "Photos and text contributions must not contain: personal information of third parties, offensive or discriminatory content, commercial advertising, or content that violates any applicable law.",
      },
      {
        subtitle: "Safiri Points",
        text: "Safiri Points are awarded for approved contributions and are non-transferable, have no monetary value, and may not be redeemed for cash. We reserve the right to adjust point values or the programme at any time with reasonable notice.",
      },
    ],
  },
  {
    id: "prohibited-conduct",
    title: "Prohibited conduct",
    content: [
      {
        subtitle: "What you must not do",
        text: "You agree not to: reverse-engineer, scrape, or systematically extract data from the service; use automated bots or scripts to submit contributions; impersonate another person or entity; attempt to circumvent rate limits or security measures; use the service to harass other users; or resell or sublicence access to the service.",
      },
      {
        subtitle: "Operator accounts",
        text: "If you access the Hopln Operators Console on behalf of a SACCO or transport company, you represent that you are authorised to do so and that your organisation accepts these terms.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: [
      {
        subtitle: "Hopln IP",
        text: "The Hopln name, logo, app design, and proprietary data are owned by or licensed to Hopln. Nothing in these terms grants you a right to use our trademarks or branding.",
      },
      {
        subtitle: "Open data",
        text: "Transit data derived from open sources (including the Digital Matatus GTFS dataset) is used under their respective open licences. Community-contributed data that becomes part of the public dataset is similarly made available under an open data licence.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers & liability",
    content: [
      {
        subtitle: "No warranty",
        text: "The service is provided without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the service will be error-free or that transit data will be complete or up to date.",
      },
      {
        subtitle: "Limitation of liability",
        text: "To the maximum extent permitted by Kenyan law, Hopln shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the service — including missed journeys, late arrivals, or reliance on inaccurate route data.",
      },
      {
        subtitle: "Indemnification",
        text: "You agree to indemnify and hold harmless Hopln and its directors, employees, and agents from any claims, losses, or damages arising out of your violation of these terms or misuse of the service.",
      },
    ],
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    content: [
      {
        subtitle: "External links and services",
        text: "Hopln integrates third-party services including Mapbox (maps and routing), Google Gemini (AI), and OpenTripPlanner (transit calculations). Your use of these services is subject to their own terms of service and privacy policies. We are not responsible for third-party services.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These Terms of Service are governed by the laws of Kenya. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Nairobi, Kenya.",
      },
      {
        subtitle: "Severability",
        text: "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    content: [
      {
        subtitle: "General enquiries",
        text: "For questions about these terms or the service, contact us at support@hopln.app. We aim to respond within 5 business days.",
      },
      {
        subtitle: "Legal notices",
        text: "Formal legal notices should be sent to legal@hopln.app.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="bg-(--color-dark) pt-32 pb-16 border-b border-white/8">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold text-(--color-orange) uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-sm text-white/45">Last updated: June 2025 · Applies to Hopln iOS and Android apps, hopln.app, and the Operators Console</p>
        </div>
      </div>

      <main className="bg-(--color-canvas) min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">

          {/* Intro */}
          <p className="text-base text-(--color-text-secondary) leading-relaxed mb-14 pb-14 border-b border-(--color-border)">
            These Terms of Service govern your use of Hopln — the transit navigation app, website, and operator tools.
            Please read them carefully. We've written them in plain language; if anything is unclear, email us at support@hopln.app.
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
