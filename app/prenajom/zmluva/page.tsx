import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CtaSection } from "@/components/homepage/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { smContractBenefits, smContractIntro } from "@/data/rental";

export const metadata: Metadata = {
  title: "Servisno-materiálová zmluva",
  description:
    "Kompletná starostlivosť o prenajatú tlačiareň vrátane tonera, údržby, opráv, náhradných dielov a výjazdov technika.",
};

export default function RentalContractPage() {
  return (
    <>
      <PageHero
        parent={{ label: "Prenájom", href: "/prenajom" }}
        eyebrow="SM-zmluva"
        title="Servisno-materiálová zmluva"
        description={smContractIntro}
      >
        <Button href="/kontakt" variant="secondary">
          Nezáväzný dopyt
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="bg-primary-950 p-7 text-white sm:p-9 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-200">
              Náš servisný štandard
            </p>
            <div className="mt-8 flex items-end gap-3">
              <span className="text-7xl font-extrabold leading-none text-white sm:text-8xl">
                8
              </span>
              <span className="pb-2 text-2xl font-bold">hodín</span>
            </div>
            <p className="mt-4 leading-relaxed text-primary-100">
              Garantovaná reakcia na nahlásenie poruchy počas pracovných hodín.
            </p>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-2xl font-extrabold">3 až 5 rokov</p>
              <p className="mt-1 text-sm text-primary-200">
                predĺžená záruka počas trvania zmluvy
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Čo získate"
              title="Všetko pre bezporuchovú prevádzku"
              description="Jedna zmluva, jeden mesačný paušál a jeden partner zodpovedný za spoľahlivú prevádzku zariadenia."
            />

            <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {smContractBenefits.map((benefit) => (
                <li key={benefit.title} className="grid gap-2 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8">
                  <h3 className="flex items-start gap-3 font-bold text-ink">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center bg-primary-50 text-primary-700">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {benefit.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
