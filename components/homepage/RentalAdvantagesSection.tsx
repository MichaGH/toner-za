import Image from "next/image";
import { Wallet, FileText, Wrench, ShieldCheck, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";

type Advantage = { icon: LucideIcon; title: string; text: string };

const leftAdvantages: Advantage[] = [
  {
    icon: Wallet,
    title: "Žiadne investičné náklady",
    text: "Neviažete kapitál v technike. Platíte prehľadný mesačný paušál, ktorý je nákladovou položkou.",
  },
  {
    icon: FileText,
    title: "Variabilná zmluva",
    text: "Podmienky prispôsobíme vašim potrebám a objemu tlače, s možnosťou rozšírenia.",
  },
];

const rightAdvantages: Advantage[] = [
  {
    icon: Wrench,
    title: "Kompletný servis v cene",
    text: "Údržba, opravy, spotrebný materiál aj cestovné technikov sú súčasťou paušálu.",
  },
  {
    icon: ShieldCheck,
    title: "Bez starostí o techniku",
    text: "O inštaláciu, údržbu a bezporuchovú prevádzku zariadenia sa staráme my.",
  },
];

function AdvantageCard({ item }: { item: Advantage }) {
  const Icon = item.icon;
  return (
    <div className="flex flex-col items-center px-2 text-center">
      <Icon size={44} strokeWidth={1.75} className="text-primary-600" />
      <h3 className="mt-5 text-xl font-extrabold text-ink">{item.title}</h3>
      <p className="mt-2.5 text-base leading-relaxed text-slate-600">{item.text}</p>
    </div>
  );
}

export function RentalAdvantagesSection() {
  return (
    <Section className="bg-white">
      <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Výhody prenájmu tlačiarne
      </h2>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_minmax(300px,440px)_1fr] lg:gap-12">
        {/* ľavé kartičky */}
        <div className="flex flex-col gap-12 lg:order-1">
          {leftAdvantages.map((item) => (
            <AdvantageCard key={item.title} item={item} />
          ))}
        </div>

        {/* tlačiareň v strede */}
        <div className="lg:order-2">
          <Image
            src="/images/printers/konica_minolta_bizhub_225i/full_vybava_zpredu.webp"
            alt="Konica Minolta bizhub 225i s plnou výbavou"
            width={600}
            height={812}
            className="mx-auto h-auto w-full max-w-[280px] lg:max-w-none"
          />
        </div>

        {/* pravé kartičky */}
        <div className="flex flex-col gap-12 lg:order-3">
          {rightAdvantages.map((item) => (
            <AdvantageCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
