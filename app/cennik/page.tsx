import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import {
  fastServiceNote,
  installationNote,
  pricingConditions,
  pricingValidFrom,
  serviceRates,
  travelZones,
} from "@/data/pricing";

export const metadata: Metadata = {
  title: "Cenník",
  description:
    "Cenník servisných výkonov, cestovných pásiem a inštalácií. Všetky ceny sú uvedené bez DPH.",
};

export default function CennikPage() {
  return (
    <>
      <PageHero
        eyebrow="Cenník"
        title="Cenník servisných služieb"
        description={`Všetky ceny sú uvedené bez DPH. Cenník je platný od ${pricingValidFrom} do odvolania.`}
      />

      <Section>
        <SectionHeading title="Cestovné pásma" />
        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Pásmo</th>
                <th className="px-4 py-3 font-semibold">km</th>
                <th className="px-4 py-3 font-semibold">Hod. sadzba</th>
                <th className="px-4 py-3 font-semibold">Cestovné</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {travelZones.map((zone) => (
                <tr key={zone.zone} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-ink">{zone.zone}</td>
                  <td className="px-4 py-3 text-slate-600">{zone.distance}</td>
                  <td className="px-4 py-3 text-slate-600">{zone.hourlyRate}</td>
                  <td className="px-4 py-3 font-medium text-brand-700">
                    {zone.travel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600">{fastServiceNote}</p>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Cenník servisných výkonov" />
        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Zariadenie</th>
                <th className="px-4 py-3 font-semibold">Hod. sadzba (opravy)</th>
                <th className="px-4 py-3 font-semibold">Údržba stroja</th>
                <th className="px-4 py-3 font-semibold">
                  Údržba s príslušenstvom
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {serviceRates.map((rate) => (
                <tr key={rate.device} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-ink">{rate.device}</td>
                  <td className="px-4 py-3 text-slate-600">{rate.hourly}</td>
                  <td className="px-4 py-3 text-slate-600">{rate.maintenance}</td>
                  <td className="px-4 py-3 text-slate-600">
                    {rate.maintenancePlus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600">{installationNote}</p>
      </Section>

      <Section>
        <SectionHeading title="Podmienky používania cenníka" />
        <ol className="mt-8 space-y-3">
          {pricingConditions.map((condition, index) => (
            <li
              key={condition}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                {index + 1}
              </span>
              <span className="text-sm text-slate-700">{condition}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
