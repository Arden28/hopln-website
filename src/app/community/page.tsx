import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommunityPage } from "@/components/sections/CommunityPage";

export const metadata: Metadata = {
  title: "Community",
  description: "Join thousands of Nairobi riders who make Hopln better every day.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CommunityPage />
      </main>
      <Footer />
    </>
  );
}
