import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  rentalBenefits,
  rentalIntro,
  rentalMachines,
  smContractBenefits,
  smContractIntro,
} from "@/data/rental";

export const metadata: Metadata = {
  title: "Prenájom tlačiarní a kopírovacích strojov",
  description:
    "Variabilný prenájom kancelárskej techniky so servisno-materiálovou zmluvou. Žiadne investičné náklady a kompletná starostlivosť o zariadenie.",
};

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

      <Section>
        <SectionHeading
          title="Výhody prenájmu tlačiarní"
          description="Táto forma prináša množstvo výhod a benefitov pre vašu firmu."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rentalBenefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                ✓
              </span>
              <span className="font-medium text-slate-800">{benefit}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="SM-zmluva"
              title="Servisno-materiálová zmluva"
            />
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {smContractIntro}
            </p>
          </div>
          <div className="space-y-4">
            {smContractBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold text-brand-700">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Zariadenia na prenájom"
          title="Vyberte si zo zariadení v ponuke"
          description="Č/B aj farebné multifunkčné zariadenia. Konkrétnu konfiguráciu a paušál pripravíme podľa vašej spotreby."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {rentalMachines.map((machine) => (
            <div
              key={machine.model}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7"
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                  machine.type === "color"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {machine.typeLabel}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-ink">{machine.model}</h3>
              <p className="mt-2 flex-1 text-slate-600">{machine.description}</p>
              <div className="mt-6">
                <Button href="/kontakt" variant="secondary">
                  Vyžiadať ponuku
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
