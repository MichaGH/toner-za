// Prenájom tlačiarní a kopírovacích strojov.

export const rentalIntro =
  "Prenájom tlačiarní je stále viac využívaná forma prenájmu v kanceláriách a spoločnostiach. Môžete sa spoľahnúť na profesionálne poradenstvo našej certifikovanej spoločnosti, ktoré vám uľahčí výber tlačiarne pre vašu firmu a bude vás sprevádzať krok za krokom pri vašich rozhodnutiach.";

export const rentalBenefits = [
  "Žiadne investičné náklady",
  "Zmluva je variabilná",
  "Zariadenie nemáte v majetku",
  "Prenájom je nákladová položka",
  "Starostlivosť o tlačiareň",
] as const;

export const smContractIntro =
  "Nestrácajte viac čas s údržbou vašej tlačiarne. Súčasťou prenájmu tlačiarne je aj servisno-materiálová zmluva (SM-zmluva). My sa postaráme o kompletné servisné služby – inštaláciu a údržbu zariadenia, prípadnú opravu a výmenu náhradných dielov technikom (vrátane cestovného), dodávku spotrebného materiálu – všetko potrebné pre bezporuchovú prevádzku zariadenia. Cena za tieto úkony je zahrnutá v paušálnom mesačnom poplatku, ktorý sa odvíja od vami predpokladaného počtu mesačne zhotovených výtlačkov.";

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
