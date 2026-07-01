import { HeroSection } from "@/components/homepage/HeroSection";
import { PartnerStripSection } from "@/components/homepage/PartnerStripSection";
import { ServiceCardsSection } from "@/components/homepage/ServiceCardsSection";
import { RentalAdvantagesSection } from "@/components/homepage/RentalAdvantagesSection";
import { PrinterOffersSection } from "@/components/homepage/PrinterOffersSection";
import { TonerSection } from "@/components/homepage/TonerSection";
import { WhyUsSection } from "@/components/homepage/WhyUsSection";
import { CtaSection } from "@/components/homepage/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerStripSection />
      <ServiceCardsSection />
      <RentalAdvantagesSection />
      <PrinterOffersSection />
      <TonerSection />
      <WhyUsSection />
      <CtaSection />
    </>
  );
}
