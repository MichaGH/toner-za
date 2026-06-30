// Renovácie tonerov a predaj tonerov.

export const tonerRefill = {
  title: "Renovácie tonerov",
  intro:
    "Vykonávame repasácie tonerov na všetky bežne dostupné značky, t. j. KONICA MINOLTA, HP, Canon, Sharp, Epson, Samsung a ďalšie.",
  points: [
    "Plníme tonery iba pre kopírovacie stroje a laserové tlačiarne.",
    "Atramentové cartridge neplníme.",
    "Do atramentových tlačiarní predávame plniace sady, pomocou ktorých si zákazník plní sám.",
  ],
} as const;

export const tonerSales = {
  title: "Predaj tonerov",
  intro:
    "Predávame originálne aj kompatibilné tonery pre kopírovacie stroje a laserové tlačiarne všetkých bežných značiek. Ako zmluvný distribútor KONICA MINOLTA vám poradíme so správnym výberom spotrebného materiálu pre vaše zariadenie.",
} as const;

// Prehľad hlavných oblastí činnosti – použité na homepage.
export type ServiceArea = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    id: "prenajom",
    title: "Prenájom techniky",
    description:
      "Prenájom tlačiarní a kopírovacích strojov vrátane servisno-materiálovej zmluvy. Žiadne investičné náklady, kompletná starostlivosť.",
    href: "/prenajom",
    cta: "Zistiť viac o prenájme",
  },
  {
    id: "tonery",
    title: "Predaj tonerov",
    description:
      "Originálne aj kompatibilné tonery pre kopírovacie stroje a laserové tlačiarne všetkých bežných značiek.",
    href: "/tonery",
    cta: "Zobraziť ponuku tonerov",
  },
  {
    id: "renovacie",
    title: "Renovácie tonerov",
    description:
      "Repasácie tonerov pre KONICA MINOLTA, HP, Canon, Sharp, Epson, Samsung a ďalšie značky.",
    href: "/renovacie-tonerov",
    cta: "Viac o renováciách",
  },
  {
    id: "katalog",
    title: "Katalóg a predaj",
    description:
      "Multifunkčné zariadenia, príslušenstvo a spotrebný materiál. Pomôžeme s výberom aj zostavením konfigurácie.",
    href: "/katalog",
    cta: "Prehliadať katalóg",
  },
  {
    id: "servis",
    title: "Servis",
    description:
      "Inštalácia, údržba, opravy a výmena náhradných dielov certifikovanými technikmi vrátane rýchlo-servisu.",
    href: "/servis",
    cta: "Servisné služby",
  },
  {
    id: "cennik",
    title: "Cenník",
    description:
      "Prehľadný cenník servisných výkonov, cestovných pásiem a inštalácií. Všetky ceny bez DPH.",
    href: "/cennik",
    cta: "Otvoriť cenník",
  },
];
