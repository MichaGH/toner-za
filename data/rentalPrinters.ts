// Tlačiarne na prenájom vrátane cien.
// Ceny sú bez DPH. Zatiaľ používame fotky bizhub 225i pre všetky modely
// (kým nebudú k dispozícii vlastné fotky každého zariadenia).

const IMAGES_225I = [
  "/images/printers/konica_minolta_bizhub_225i/basic_zpredu.webp",
  "/images/printers/konica_minolta_bizhub_225i/full_vybava_zpredu.webp",
  "/images/printers/konica_minolta_bizhub_225i/zhora.webp",
];

export type RentalPrinter = {
  slug: string;
  model: string;
  type: "cb" | "color";
  typeLabel: string;
  format: string;
  speed: string;
  description: string;
  /** Stojné – mesačný paušál za prenájom (€/mesiac). */
  monthly: number;
  /** Cena za čiernobielu stranu (€/strana). */
  pageBw: number;
  /** Cena za farebnú stranu (€/strana) – null pri Č/B zariadeniach. */
  pageColor: number | null;
  highlights: string[];
  specs: string[];
  images: string[];
};

export const rentalPrinters: RentalPrinter[] = [
  {
    slug: "bizhub-225i",
    model: "bizhub 225i",
    type: "cb",
    typeLabel: "Čiernobiele",
    format: "A4",
    speed: "22 str./min",
    description:
      "Kompaktné čiernobiele multifunkčné zariadenie ideálne pre menšie kancelárie.",
    monthly: 13.9,
    pageBw: 0.009,
    pageColor: null,
    highlights: ["Tlač, kopírovanie, skenovanie", "Sieťová tlač", "Automatický duplex"],
    specs: [
      "Čiernobiele multifunkčné zariadenie A4",
      "22 strán za minútu",
      "Tlač, kopírovanie a skenovanie",
      "Automatický obojstranný (duplex) tlač",
      "Sieťová tlač cez Ethernet",
      "Médiá A6 – A4",
    ],
    images: IMAGES_225I,
  },
  {
    slug: "bizhub-c257i",
    model: "bizhub C257i",
    type: "color",
    typeLabel: "Farebné",
    format: "A3",
    speed: "25 str./min",
    description:
      "Farebné A3 multifunkčné zariadenie pre profesionálnu tlač, kopírovanie a skenovanie.",
    monthly: 49.9,
    pageBw: 0.0083,
    pageColor: 0.0495,
    highlights: ["Plnofarebná tlač", "Dotykový panel", "Automatický duplex"],
    specs: [
      "Farebné multifunkčné zariadenie A3",
      "25 strán za minútu",
      "Tlač, kopírovanie a skenovanie",
      "Dotykový ovládací panel",
      "Automatický obojstranný (duplex) tlač",
      "Médiá A6 – A3",
    ],
    images: IMAGES_225I,
  },
];

export function getRentalPrinter(slug: string): RentalPrinter | undefined {
  return rentalPrinters.find((p) => p.slug === slug);
}
