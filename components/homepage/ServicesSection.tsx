import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { serviceAreas } from "@/data/services";

export function ServicesSection() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        center
        eyebrow="Naše služby"
        title="Všetko pre vašu kanceláriu na jednom mieste"
        description="Od prenájmu a predaja techniky, cez tonery a ich renovácie, až po servis a prehľadný cenník."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceAreas.map((area) => (
          <Link
            key={area.id}
            href={area.href}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-ink group-hover:text-brand-700">
              {area.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {area.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
              {area.cta}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
