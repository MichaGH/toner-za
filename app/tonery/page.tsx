import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { brands } from "@/data/company";
import { tonerSales } from "@/data/services";

export const metadata: Metadata = {
  title: "Predaj tonerov",
  description: tonerSales.intro,
};

export default function ToneryPage() {
  return (
    <>
      <PageHero
        eyebrow="Predaj tonerov"
        title={tonerSales.title}
        description={tonerSales.intro}
      >
        <Button href="/kontakt">Dopytovať toner</Button>
      </PageHero>

      <Section>
        <SectionHeading
          title="Tonery pre všetky bežné značky"
          description="Dodávame spotrebný materiál pre kopírovacie stroje a laserové tlačiarne. Ak si nie ste istí, ktorý toner potrebujete, radi vám poradíme."
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {brands.map((brand) => (
            <li
              key={brand}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700"
            >
              {brand}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Originálne tonery",
              text: "Originálny spotrebný materiál s garantovanou kvalitou a výťažnosťou.",
            },
            {
              title: "Kompatibilné tonery",
              text: "Cenovo výhodná alternatíva pre bežnú kancelársku prevádzku.",
            },
            {
              title: "Renovované tonery",
              text: "Repasované tonery pre väčšinu bežných značiek za zvýhodnené ceny.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-50 p-6 sm:flex sm:items-center sm:justify-between">
          <p className="max-w-xl text-slate-700">
            Hľadáte úsporu? Pozrite si možnosti{" "}
            <strong className="text-brand-800">renovácie tonerov</strong> pre vaše
            zariadenie.
          </p>
          <div className="mt-4 sm:mt-0">
            <Button href="/renovacie-tonerov" variant="secondary">
              Renovácie tonerov
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
