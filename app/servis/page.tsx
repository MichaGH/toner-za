import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fastServiceNote, installationNote } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Servis",
  description:
    "Inštalácia, údržba, opravy a výmena náhradných dielov certifikovanými technikmi vrátane rýchlo-servisu a zaškolenia obsluhy.",
};

const services = [
  {
    title: "Inštalácia a zaškolenie",
    text: "Inštalácia zariadenia vrátane zaškolenia dvoch pracovníkov kupujúceho. Každý ďalší pracovník podľa hodinovej sadzby.",
  },
  {
    title: "Údržba zariadení",
    text: "Pravidelná údržba kopírovacích strojov a tlačiarní Č/B aj farebných, A4 aj A3.",
  },
  {
    title: "Opravy a náhradné diely",
    text: "Opravy a výmena náhradných dielov certifikovanými technikmi vrátane cestovného podľa pásma.",
  },
  {
    title: "Rýchlo-servis",
    text: "Servisný zásah do 4 hodín od nahlásenia za zvýhodnené podmienky.",
  },
];

export default function ServisPage() {
  return (
    <>
      <PageHero
        eyebrow="Servis"
        title="Servisné služby"
        description="Postaráme sa o bezporuchovú prevádzku vašej techniky – od inštalácie cez údržbu až po opravy certifikovanými technikmi."
      >
        <Button href="/cennik">Pozrieť cenník servisu</Button>
      </PageHero>

      <Section>
        <SectionHeading
          title="Čo pre vás zabezpečíme"
          description="Kompletné servisné služby pre kopírovacie stroje, laserové aj ihličkové tlačiarne."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-brand-50 p-6">
            <h3 className="font-semibold text-brand-800">Rýchlo-servis</h3>
            <p className="mt-2 text-sm text-slate-700">{fastServiceNote}</p>
          </div>
          <div className="rounded-2xl bg-brand-50 p-6">
            <h3 className="font-semibold text-brand-800">Inštalácia</h3>
            <p className="mt-2 text-sm text-slate-700">{installationNote}</p>
          </div>
        </div>

        <div className="mt-12">
          <Button href="/cennik">Detailný cenník servisných výkonov</Button>
        </div>
      </Section>
    </>
  );
}
