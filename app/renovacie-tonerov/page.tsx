import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { tonerRefill } from "@/data/services";

export const metadata: Metadata = {
  title: "Renovácie tonerov",
  description: tonerRefill.intro,
};

export default function RenovaciePage() {
  return (
    <>
      <PageHero
        eyebrow="Renovácie tonerov"
        title={tonerRefill.title}
        description={tonerRefill.intro}
      >
        <Button href="/kontakt">Objednať renováciu</Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Ako to funguje"
              description="Repasujeme tonery na všetky bežne dostupné značky. Dôležité podmienky:"
            />
            <ul className="mt-8 space-y-4">
              {tonerRefill.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                    i
                  </span>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-50 p-7">
            <h3 className="text-lg font-semibold text-ink">Renovujeme značky</h3>
            <p className="mt-2 text-sm text-slate-600">
              KONICA MINOLTA, HP, Canon, Sharp, Epson, Samsung a ďalšie.
            </p>
            <div className="mt-6 rounded-xl border border-brand-100 bg-white p-5">
              <h4 className="font-semibold text-brand-800">
                Atramentové tlačiarne
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Atramentové cartridge neplníme. Do atramentových tlačiarní však
                predávame plniace sady, pomocou ktorých si zákazník plní sám.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/tonery" variant="secondary">
                Predaj tonerov
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
