import { HeroSection } from "@/components/homepage/HeroSection";
import { AboutSection } from "@/components/homepage/AboutSection";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { RentalSection } from "@/components/homepage/RentalSection";
import { CtaSection } from "@/components/homepage/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RentalSection />
      <CtaSection />
    </>
  );
}
