import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LottiePrinter } from "@/components/ui/LottiePrinter";
import { whyRental } from "@/data/home";

export function WhyRentalSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Vizuál – animovaná tlačiareň */}
        <div className="relative bg-primary-950">
          <div className="flex items-center justify-center p-8">
            <LottiePrinter className="h-72 w-72" />
          </div>
          <span className="absolute left-0 top-0 h-1 w-16 bg-primary-500" />
          <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Tlačiareň ako služba
          </p>
        </div>

        {/* Obsah */}
        <div>
          <SectionHeading
            eyebrow="Prenájom"
            title="Prečo prenájom multifunkčného zariadenia?"
            description="Prenájom je čoraz obľúbenejšia forma využívania kancelárskej techniky. Tu sú hlavné dôvody."
          />
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {whyRental.map((item, index) => (
              <div key={item.title} className="flex gap-5 py-5">
                <span className="text-2xl font-extrabold text-accent-500">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/prenajom">Zistiť viac o prenájme</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
