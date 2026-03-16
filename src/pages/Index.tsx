import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LevelUpSection from "@/components/LevelUpSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LevelUpSection />
      <WhyUsSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
