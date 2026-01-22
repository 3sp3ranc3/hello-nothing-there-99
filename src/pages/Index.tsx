import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PerformanceQuizSection from "@/components/sections/PerformanceQuizSection";
import TheAirSection from "@/components/sections/TheAirSection";
import TheArchitectSection from "@/components/sections/TheArchitectSection";
import TheAceSection from "@/components/sections/TheAceSection";
import PaddleCoverSection from "@/components/sections/PaddleCoverSection";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <PerformanceQuizSection />
      <TheAirSection />
      <TheArchitectSection />
      <TheAceSection />
      <PaddleCoverSection />
    </main>
  );
};

export default Index;
