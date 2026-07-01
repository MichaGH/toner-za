// Prenájom tlačiarní a kopírovacích strojov.

export const rentalIntro =
  "Moderné zariadenie, servis a spotrebný materiál v jednom predvídateľnom mesačnom náklade – v konfigurácii podľa potrieb vašej firmy.";

export const rentalBenefits = [
  "Žiadne investičné náklady",
  "Zmluva je variabilná",
  "Zariadenie nemáte v majetku",
  "Prenájom je nákladová položka",
  "Starostlivosť o tlačiareň",
] as const;

export const smContractIntro =
  "Jedna zmluva pokrýva inštaláciu, pravidelnú údržbu, opravy, náhradné diely, výjazdy technika aj spotrebný materiál. Vy sa venujete svojej práci, my držíme tlačiareň v bezporuchovej prevádzke za vopred dohodnutý mesačný paušál.";

export const smContractBenefits = [
  {
    title: "Predĺženie záruky",
    text: "Záruka po celú dobu trvania zmluvy – štandardne 3 roky, v prípade záujmu 5 rokov.",
  },
  {
    title: "Zafixovanie nákladov",
    text: "Garantovaná jednotná cena – žiadne neplánované náklady navyše.",
  },
  {
    title: "Bezstarostnosť",
    text: "Kompletný servis, ktorý zahŕňa dodávky papiera (voliteľne), tonera, náhradných dielov, servis a prácu a cestovné technikov.",
  },
  {
    title: "Pružnosť zmluvy",
    text: "Možnosť rozšírenia o ďalšie služby.",
  },
  {
    title: "Garantovaný zásah servisu",
    text: "Do 8 pracovných hodín (štandardne), možné upraviť.",
  },
] as const;

export type RentalMachine = {
  model: string;
  type: "cb" | "color";
  typeLabel: string;
  description: string;
};

export const rentalMachines: RentalMachine[] = [
  {
    model: "bizhub 225i",
    type: "cb",
    typeLabel: "Čiernobiele zariadenie",
    description:
      "Spoľahlivé čiernobiele multifunkčné zariadenie vhodné pre menšie a stredné kancelárie.",
  },
  {
    model: "bizhub C257",
    type: "color",
    typeLabel: "Farebné zariadenie",
    description:
      "Farebné multifunkčné zariadenie pre tlač, kopírovanie a skenovanie v profesionálnej kvalite.",
  },
];
