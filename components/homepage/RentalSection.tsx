import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PrinterIcon } from "@/components/ui/PrinterIcon";
import { rentalBenefits } from "@/data/rental";

export function RentalSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Prenájom techniky"
            title="Tlačiareň ako služba – bez investície"
            description="Prenájom je čoraz obľúbenejšia forma využívania kancelárskej techniky. Zariadenie nemáte v majetku, platíte mesačný paušál a o všetko ostatné sa staráme my."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {rentalBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  ✓
                </span>
                <span className="text-sm font-medium text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button href="/prenajom">Zistiť viac o prenájme</Button>
          </div>
        </div>

        {/* Vizuál */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-10 text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 80% 0%, white 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />
            <PrinterIcon className="relative mx-auto h-48 w-48 text-white/90" />
            <p className="relative mt-6 text-center text-sm uppercase tracking-wide text-brand-200">
              Súčasťou prenájmu je servisno-materiálová zmluva
            </p>
          </div>

          {/* Plávajúce štítky */}
          <div className="absolute -left-4 top-8 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100">
            <p className="text-2xl font-bold text-brand-700">do 8 h</p>
            <p className="text-xs text-slate-500">servisný zásah</p>
          </div>
          <div className="absolute -right-4 bottom-8 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100">
            <p className="text-2xl font-bold text-brand-700">3–5 r.</p>
            <p className="text-xs text-slate-500">záruka v cene</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
