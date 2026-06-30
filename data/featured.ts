// Nami vybrané tlačiarne – showcase na úvodnej stránke.

export type FeaturedPrinter = {
  model: string;
  type: "cb" | "color";
  typeLabel: string;
  format: string;
  speed: string;
  highlights: string[];
  href: string;
};

export const featuredPrinters: FeaturedPrinter[] = [
  {
    model: "bizhub 225i",
    type: "cb",
    typeLabel: "Č/B",
    format: "A4",
    speed: "22 str./min",
    highlights: ["Kompaktné MFP", "Sieťová tlač", "Duplex"],
    href: "/prenajom",
  },
  {
    model: "bizhub 287",
    type: "cb",
    typeLabel: "Č/B",
    format: "A3",
    speed: "28 str./min",
    highlights: ["2× 500 hárkov", "250 GB HDD", "Gigabit Ethernet"],
    href: "/katalog/bizhub-287",
  },
  {
    model: "bizhub 367",
    type: "cb",
    typeLabel: "Č/B",
    format: "A3",
    speed: "36 str./min",
    highlights: ["Výkonné MFP", "Rozšíriteľné", "i-Option"],
    href: "/katalog",
  },
  {
    model: "bizhub C257",
    type: "color",
    typeLabel: "Farba",
    format: "A3",
    speed: "25 str./min",
    highlights: ["Plnofarebná tlač", "Skenovanie", "Duplex"],
    href: "/prenajom",
  },
  {
    model: "bizhub C300i",
    type: "color",
    typeLabel: "Farba",
    format: "A3",
    speed: "30 str./min",
    highlights: ["Dotykový panel", "Cloud pripojenie", "Vysoká kvalita"],
    href: "/katalog",
  },
];
