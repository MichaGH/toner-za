import { Section, SectionHeading } from "@/components/ui/Section";
import { brands } from "@/data/company";

const stats = [
  { value: "KONICA MINOLTA", label: "Zmluvný distribútor a servisný partner" },
  { value: "do 8 hod.", label: "Garantovaný servisný zásah" },
  { value: "3–5 rokov", label: "Záruka v rámci SM-zmluvy" },
];

export function AboutSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="O spoločnosti"
            title="Komplexná starostlivosť o vašu tlačovú techniku"
            description="Sme zmluvný distribútor a servisný partner KONICA MINOLTA. Okrem toho predávame a servisujeme aj ďalšie značky, renovujeme tonery a zabezpečíme prenájom kancelárskej techniky vrátane kompletného servisu."
          />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Renovujeme a servisujeme značky
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <li
                  key={brand}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-2xl font-bold text-brand-700">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
