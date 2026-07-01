import type { Metadata } from "next";
import { Check, Wallet, Settings2, Package, ReceiptText, Wrench } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/homepage/CtaSection";
import { RentalPrinterCard } from "@/components/printers/RentalPrinterCard";
import { rentalIntro, smContractBenefits, smContractIntro } from "@/data/rental";
import { rentalPrinters } from "@/data/rentalPrinters";

export const metadata: Metadata = {
  title: "Prenájom tlačiarní a kopírovacích strojov",
  description:
    "Variabilný prenájom kancelárskej techniky so servisno-materiálovou zmluvou. Žiadne investičné náklady a kompletná starostlivosť o zariadenie.",
};

const rentalHighlights = [
  { icon: Wallet, text: "Žiadne investičné náklady" },
  { icon: Settings2, text: "Zmluva je variabilná" },
  { icon: Package, text: "Zariadenie nemáte v majetku" },
  { icon: ReceiptText, text: "Prenájom je nákladová položka" },
  { icon: Wrench, text: "Starostlivosť o tlačiareň" },
];

export default function PrenajomPage() {
  return (
    <>
      <PageHero
        eyebrow="Prenájom"
        title="Prenájom tlačiarní a kopírovacích strojov"
        description={rentalIntro}
      >
        <Button href="/kontakt">Nezáväzný dopyt</Button>
      </PageHero>

      {/* Výhody prenájmu – kartičky s ikonami */}
      <Section>
        <SectionHeading center eyebrow="Prečo prenájom" title="Výhody prenájmu tlačiarní" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {rentalHighlights.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center border border-slate-200 bg-white p-6 text-center"
            >
              <Icon size={32} strokeWidth={1.75} className="text-primary-600" />
              <p className="mt-4 text-sm font-semibold text-ink">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Servisno-materiálová zmluva – vľavo body, vpravo text */}
      <Section className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <SectionHeading
              eyebrow="SM-zmluva"
              title="Servisno-materiálová zmluva"
              description={smContractIntro}
            />
          </div>
          <ul className="space-y-4 lg:order-1">
            {smContractBenefits.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center bg-primary-50 text-primary-600">
                  <Check size={14} strokeWidth={3} />
                </span>
                <div>
                  <p className="font-bold text-ink">{benefit.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                    {benefit.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Zariadenia na prenájom */}
      <Section>
        <SectionHeading
          eyebrow="Zariadenia"
          title="Tlačiarne na prenájom"
          description="Vyberte si zo zariadení v ponuke. Mesačný paušál (stojné) sa dopĺňa cenou za vytlačenú stranu podľa reálnej spotreby."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {rentalPrinters.map((printer) => (
            <RentalPrinterCard key={printer.slug} printer={printer} />
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Ceny sú uvedené bez DPH. Servis a údržba sú zahrnuté v mesačnom paušále.
        </p>
      </Section>

      <CtaSection />
    </>
  );
}
