// Základné informácie o firme TONER-ZA.
// Neskôr môže byť nahradené dátami zo Sanity CMS.

export const company = {
  name: "TONER-ZA",
  fullName: "TONER-ZA",
  tagline: "Predaj tonerov a prenájom kancelárskej techniky",
  description:
    "Zmluvný distribútor a servisný partner KONICA MINOLTA. Predávame tonery, renovujeme ich pre všetky bežné značky a poskytujeme prenájom a servis kancelárskej techniky.",
  partner: {
    role: "Zmluvný distribútor a servisný partner",
    brand: "KONICA MINOLTA",
  },
  // Doplňte reálne kontaktné údaje.
  contact: {
    phone: "+421 900 000 000",
    email: "info@toner-za.sk",
    addressLines: ["Ulica 0", "010 01 Žilina", "Slovensko"],
    hours: "Po – Pia: 8:00 – 16:00",
  },
} as const;

// Hlavná navigácia – každá položka má aj samostatnú podstránku.
export const navItems = [
  { label: "Prenájom", href: "/prenajom" },
  { label: "Predaj tlačiarní", href: "/predaj-tlaciarni" },
  { label: "Tonery", href: "/tonery" },
  { label: "Servis", href: "/servis" },
] as const;

// Značky, ktoré firma servisuje / pre ktoré renovuje tonery.
export const brands = [
  "KONICA MINOLTA",
  "HP",
  "Canon",
  "Sharp",
  "Epson",
  "Samsung",
] as const;
