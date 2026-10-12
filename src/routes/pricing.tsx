import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/sections/EcosystemSections";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing | ROVIAN" }] }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 overflow-hidden pt-20">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
