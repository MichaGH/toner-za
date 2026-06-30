// Cenník servisných služieb. Všetky ceny sú bez DPH.
// Cenník platný od 1. 1. 2021 do odvolania.

export const pricingValidFrom = "1. 1. 2021";

// Cestovné pásma.
export type TravelZone = {
  zone: string;
  distance: string;
  hourlyRate: string;
  travel: string;
};

export const travelZones: TravelZone[] = [
  { zone: "Mesto", distance: "–", hourlyRate: "25,- €", travel: "3,- €" },
  { zone: "A", distance: "do 20 km", hourlyRate: "25,- €", travel: "18,- €" },
  { zone: "B", distance: "do 60 km", hourlyRate: "25,- €", travel: "25,- €" },
  { zone: "C", distance: "do 90 km", hourlyRate: "25,- €", travel: "35,- €" },
  { zone: "D", distance: "nad 90 km", hourlyRate: "25,- €", travel: "0,20 €/km" },
];

export const fastServiceNote =
  "Hodinová sadzba za rýchlo-servis: 35,- € + cestovné podľa pásma. Paušál za čistiace prostriedky: 2,- €.";

export const installationNote =
  "V cene inštalácie je zahrnuté zaškolenie dvoch pracovníkov kupujúceho. Každý ďalší pracovník – hodinová sadzba 35,- €.";

// Cenník servisných výkonov.
export type ServiceRate = {
  device: string;
  /** Hodinová sadzba (opravy) */
  hourly: string;
  /** Údržba stroja */
  maintenance: string;
  /** Údržba stroja s príslušenstvom */
  maintenancePlus: string;
};

export const serviceRates: ServiceRate[] = [
  { device: "Kopírovacie stroje A4 Č/B", hourly: "25,- €", maintenance: "—", maintenancePlus: "—" },
  { device: "Kopírovacie stroje A3 Č/B", hourly: "25,- €", maintenance: "55,- €", maintenancePlus: "55,- €" },
  { device: "Farebné kopírovacie stroje", hourly: "35,- €", maintenance: "55,- €", maintenancePlus: "75,- €" },
  { device: "Tlačiarne laserové A4", hourly: "25,- €", maintenance: "—", maintenancePlus: "—" },
  { device: "Tlačiarne laserové A3", hourly: "25,- €", maintenance: "—", maintenancePlus: "—" },
  { device: "Tlačiarne ihličkové", hourly: "25,- €", maintenance: "—", maintenancePlus: "—" },
  { device: "Software", hourly: "35,- €", maintenance: "✕", maintenancePlus: "✕" },
  { device: "Hardware + software", hourly: "35,- €", maintenance: "✕", maintenancePlus: "✕" },
];

export const pricingConditions = [
  "Cena inštalácie a dopravy je spravidla súčasťou KZ (kúpnej zmluvy).",
  "Pri obchodných prípadoch ako napr. leasing sa účtuje oddelene cez ZL technika.",
  "Hodinovou sadzbou sa rozumie cena jednej pracovnej hodiny výkonu.",
  "Účtuje sa každá začatá hodina.",
  "Cestovné a paušál za čistiace prostriedky je nedeliteľnou súčasťou externého zásahu.",
  "Rýchlo-servisom sa rozumie servisný zásah do 4 hodín od nahlásenia.",
  "Zaškolenie obsluhy (dvaja pracovníci) je súčasťou ceny za inštaláciu.",
  "Všetky ceny uvedené v cenníku sú bez DPH.",
  "Cenník je platný od 1. 1. 2021 do odvolania.",
] as const;
