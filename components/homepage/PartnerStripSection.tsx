import { Handshake, Zap, PackageCheck, ReceiptText, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Item = { icon: LucideIcon; title: string; subtitle: string };

const items: Item[] = [
  {
    icon: Handshake,
    title: "Profesionálny prístup",
    subtitle: "Poradenstvo a riešenie na mieru vašej firme.",
  },
  {
    icon: Zap,
    title: "Reagujeme ihneď",
    subtitle: "Servisný zásah do 8 hodín od nahlásenia.",
  },
  {
    icon: PackageCheck,
    title: "Originálne materiály",
    subtitle: "Kvalitný spotrebný materiál s dlhou výťažnosťou.",
  },
  {
    icon: ReceiptText,
    title: "Bez skrytých poplatkov",
    subtitle: "Jasné podmienky a fixné mesačné náklady.",
  },
];

export function PartnerStripSection() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-4">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex flex-col items-center px-2 text-center">
            <Icon size={32} strokeWidth={1.75} className="text-primary-600" />
            <p className="mt-4 font-bold text-ink">{title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{subtitle}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}
