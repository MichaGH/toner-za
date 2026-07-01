// Tlačiarne v ponuke na prenájom – showcase na úvodnej stránke.
// Mesačné ceny sú orientačné (PLACEHOLDER) a závisia od doby prenájmu
// a predpokladaného objemu tlače. Nahradiť reálnymi cenami.

export type PrinterOffer = {
  model: string;
  type: "cb" | "color";
  typeLabel: string;
  format: string;
  speed: string;
  description: string;
  highlights: string[];
  /** Mesačný paušál za prenájom (orientačné rozmedzie, EUR/mes. bez DPH). */
  monthlyFrom: number;
  monthlyTo: number;
  href: string;
};

export const printerOffers: PrinterOffer[] = [
  {
    model: "bizhub 225i",
    type: "cb",
    typeLabel: "Čiernobiele",
    format: "A4",
    speed: "22 str./min",
    description:
      "Kompaktné čiernobiele multifunkčné zariadenie pre menšie kancelárie.",
    highlights: ["Tlač, kopírovanie, skenovanie", "Sieťová tlač", "Duplex"],
    monthlyFrom: 12,
    monthlyTo: 18,
    href: "/prenajom",
  },
  {
    model: "bizhub 287",
    type: "cb",
    typeLabel: "Čiernobiele",
    format: "A3",
    speed: "28 str./min",
    description:
      "Výkonné čiernobiele A3 MFP s veľkou kapacitou pre stredné firmy.",
    highlights: ["2× 500 hárkov", "Duplex", "Gigabit Ethernet"],
    monthlyFrom: 19,
    monthlyTo: 29,
    href: "/predaj-tlaciarni/bizhub-287",
  },
  {
    model: "bizhub C257",
    type: "color",
    typeLabel: "Farebné",
    format: "A3",
    speed: "25 str./min",
    description:
      "Farebné A3 multifunkčné zariadenie pre profesionálnu tlač a skenovanie.",
    highlights: ["Plnofarebná tlač", "Dotykový panel", "Duplex"],
    monthlyFrom: 29,
    monthlyTo: 45,
    href: "/prenajom",
  },
];
