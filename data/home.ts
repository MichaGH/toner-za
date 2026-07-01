// Obsah úvodnej stránky.

export const hero = {
  eyebrow: "Zmluvný distribútor a servisný partner KONICA MINOLTA",
  title: "Prenájom a servis tlačiarenskej techniky",
  subtitle:
    "Predaj a prenájom multifunkčných zariadení, tonerov a kompletný servis pre firmy. Spoľahlivý partner pre vašu kanceláriu.",
};

export type ServiceCard = {
  label: string;
  text: string;
  image: string;
  href: string;
};

// Tri hlavné služby.
export const serviceCards: ServiceCard[] = [
  {
    label: "Prenájom tlačiarní",
    text: "Multifunkčné zariadenia na prenájom so servisno-materiálovou zmluvou a prehľadným mesačným paušálom.",
    image: "/images/servicesSection-rent.webp",
    href: "/prenajom",
  },
  {
    label: "Predaj a servis tlačiarní",
    text: "Dodávka, inštalácia, údržba a opravy kancelárskej techniky certifikovanými technikmi.",
    image: "/images/servicesSection-repair.webp",
    href: "/servis",
  },
  {
    label: "Predaj a renovácia tonerov",
    text: "Originálne, kompatibilné aj renovované tonery pre všetky bežné značky.",
    image: "/images/servicesSection-toner.webp",
    href: "/tonery",
  },
];

// Prečo my / o nás.
export const aboutLead =
  "Sme zmluvný distribútor a servisný partner KONICA MINOLTA. Dodávame, prenajímame a servisujeme kancelársku techniku a postaráme sa o ňu počas celej jej životnosti.";

export const whyUs = [
  {
    title: "Partner KONICA MINOLTA",
    text: "Zmluvný distribútor a servisný partner – záruka kvality a originálneho materiálu.",
  },
  {
    title: "Certifikovaní technici",
    text: "Inštaláciu, údržbu aj opravy realizujú vyškolení technici priamo u vás.",
  },
  {
    title: "Servisný zásah do 8 hodín",
    text: "Garantovaná reakcia na nahlásenie poruchy v rámci servisno-materiálovej zmluvy.",
  },
  {
    title: "Všetko na jednom mieste",
    text: "Predaj, prenájom, tonery aj servis – jeden dodávateľ pre celú vašu kanceláriu.",
  },
];

// Prečo prenájom multifunkčného zariadenia.
export const whyRental = [
  {
    title: "Žiadne investičné náklady",
    text: "Neviažete kapitál v technike. Platíte prehľadný mesačný paušál, ktorý je nákladovou položkou.",
  },
  {
    title: "Kompletný servis v cene",
    text: "Súčasťou prenájmu je servisno-materiálová zmluva – materiál, servis, práca aj cestovné technikov.",
  },
  {
    title: "Flexibilita a istota",
    text: "Variabilná zmluva s možnosťou rozšírenia, predĺžená záruka a fixné náklady bez prekvapení.",
  },
];
