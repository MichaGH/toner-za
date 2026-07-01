import { Section, SectionHeading } from "@/components/ui/Section";
import { aboutLead, whyUs } from "@/data/home";

export function WhyUsSection() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        eyebrow="Prečo my"
        title="Spoľahlivý partner pre vašu kanceláriu"
        description={aboutLead}
      />
      <div className="mt-12 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((item, index) => (
          <div key={item.title} className="bg-white p-6">
            <span className="block font-mono text-sm font-semibold text-accent-500">
              0{index + 1}
            </span>
            <h3 className="mt-4 border-l-2 border-primary-600 pl-3 text-base font-bold leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
