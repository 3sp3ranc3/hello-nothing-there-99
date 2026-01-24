import Navbar from "@/components/layout/Navbar";
import MegaFooter from "@/components/layout/MegaFooter";
import HeroSection from "@/components/sections/HeroSection";
import TheArchitectSection from "@/components/sections/TheArchitectSection";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <TheArchitectSection />
      <MegaFooter />
    </main>
  );
};

export default Index;