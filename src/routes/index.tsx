import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { ProblemSection } from "@/components/sections/StorySections";
import OnePlatform from "@/components/sections/OnePlatform";
import {
  AIChatSection,
  AITutorSection,
  ContentStudioSection,
  EnglishSection,
  PracticeSection,
  UPSCInterviewSection,
  WrittenPracticeSection,
  DashboardSection,
} from "@/components/sections/ProductSections";
import {
  ExamUniverseSection,
  FAQSection,
  FinalCTA,
  HowItWorksSection,
  IntelligenceSection,
  PricingSection,
  SpacedRepetitionSection,
  StudentTeacherSection,
  TrustSection,
} from "@/components/sections/EcosystemSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROVIAN — Your AI-powered learning companion" },
      {
        name: "description",
        content:
          "Learn, practice, create and improve with ROVIAN, one intelligent AI-powered learning ecosystem.",
      },
      { property: "og:title", content: "ROVIAN — Your AI-powered learning companion" },
      {
        property: "og:description",
        content:
          "AI tutoring, personalized practice, exam preparation and learning intelligence in one connected platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 overflow-hidden ">
        <Hero />
        <ProblemSection />
        <OnePlatform />
        <AIChatSection />
        <DashboardSection />
        <AITutorSection />
        <ContentStudioSection />
        <PracticeSection />
        <WrittenPracticeSection />
        <EnglishSection />
        <UPSCInterviewSection />
        <ExamUniverseSection />
        <IntelligenceSection />
        <SpacedRepetitionSection />
        <StudentTeacherSection />
        <HowItWorksSection />
        <TrustSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
