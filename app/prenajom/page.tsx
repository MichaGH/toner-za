import type { Metadata } from "next";
import { ReceiptText, Settings2, Wallet, Wrench } from "lucide-react";
import { CtaSection } from "@/components/homepage/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { RentalPrinterCard } from "@/components/printers/RentalPrinterCard";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { rentalIntro } from "@/data/rental";
import { rentalPrinters } from "@/data/rentalPrinters";

export const metadata: Metadata = {
  title: "Prenájom tlačiarní a kopírovacích strojov",
  description:
    "Variabilný prenájom kancelárskej techniky so servisno-materiálovou zmluvou. Žiadne investičné náklady a kompletná starostlivosť o zariadenie.",
};

const rentalHighlights = [
  { icon: Wallet, title: "Bez vstupnej investície" },
  { icon: Settings2, title: "Podmienky na mieru" },
  { icon: ReceiptText, title: "Predvídateľné náklady" },
  { icon: Wrench, title: "Servis bez starostí" },
];

export default function PrenajomPage() {
  return (
    <>
      <PageHero
        eyebrow="Prenájom"
        title="Prenájom tlačiarní a kopírovacích strojov"
        description={rentalIntro}
      >
        <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3">
          <Button href="/kontakt" variant="secondary">
            Nezáväzný dopyt
          </Button>
          <Button href="/prenajom/zmluva" variant="outline">
            Viac o SM-zmluve
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-4 gap-y-4 px-4 py-5 sm:px-6 lg:grid-cols-[auto_repeat(4,minmax(0,1fr))] lg:items-center lg:gap-0 lg:px-8">
          <p className="col-span-2 flex items-center gap-2.5 pr-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700 lg:col-span-1">
            <span className="h-2 w-2 bg-accent-500" />
            Prečo prenájom
          </p>
          {rentalHighlights.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-3 lg:border-l lg:border-slate-200 lg:px-6"
            >
              <Icon
                size={21}
                strokeWidth={1.8}
                className="flex-none text-primary-600"
              />
              <p className="text-sm font-semibold leading-snug text-ink">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <SectionHeading
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
