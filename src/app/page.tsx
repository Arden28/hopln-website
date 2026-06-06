import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Coverage } from "@/components/sections/Coverage";
import { DataCredits } from "@/components/sections/DataCredits";
import { Community } from "@/components/sections/Community";
import { ForOperators } from "@/components/sections/ForOperators";
import { Stats } from "@/components/sections/Stats";
import { Download } from "@/components/sections/Download";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        {/* <Stats /> */}
        <Coverage />
        <DataCredits />
        <Community />
        <ForOperators />
        <Download />
      </main>
      <Footer />
    </>
  );
}
