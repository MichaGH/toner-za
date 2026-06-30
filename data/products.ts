// Katalóg produktov. Ceny sú uvedené bez DPH (EUR).
// Príklad: model bizhub 287 vrátane príslušenstva a spotrebného materiálu.
// Neskôr bude spravované cez Sanity CMS.

export type CatalogItem = {
  name: string;
  code: string;
  description?: string;
  /** Cena bez DPH v EUR. null = informácia na vyžiadanie. */
  priceEur: number | null;
};

export type AccessoryGroup = {
  id: string;
  title: string;
  items: CatalogItem[];
};

export type Product = {
  slug: string;
  model: string;
  category: "cb-mfp" | "color-mfp";
  categoryLabel: string;
  shortDescription: string;
  specs: string[];
  /** Cena samotného stroja bez DPH v EUR. */
  priceEur: number | null;
  accessoryGroups: AccessoryGroup[];
};

export const products: Product[] = [
  {
    slug: "bizhub-287",
    model: "bizhub 287",
    category: "cb-mfp",
    categoryLabel: "Čiernobiele MFP (A3)",
    shortDescription:
      "Čiernobiele multifunkčné zariadenie formátu A3 s rýchlosťou 28 str./min (A4).",
    specs: [
      "Čiernobiele MFP (A3)",
      "28 čb str./min (A4)",
      "PCL / PS",
      "Zásobníky 2× 500 hárkov",
      "Duplex",
      "Médiá A6 – A3, 60–220 g/m²",
      "Pamäť 2 GB, 250 GB HDD",
      "Gigabit Ethernet",
      "Vývojnica + fotovalec (čierny)",
      "Nutné dokúpiť stolík a podávač originálov alebo kryt",
    ],
    priceEur: 2246,
    accessoryGroups: [
      {
        id: "machine-accessories",
        title: "Príslušenstvo stroja",
        items: [
          {
            name: "OC-514 Kryt originálu",
            code: "A7YPWY1",
            description: "Nutné dokúpiť, ak nie je zakúpený podávač originálov.",
            priceEur: 55,
          },
          {
            name: "DF-628 Duplexný podávač originálov",
            code: "A7V7WY2",
            description: "Reverzný podávač originálov, kapacita až 100 hárkov.",
            priceEur: 376,
          },
          {
            name: "DK-513 Jednoduchý stolík",
            code: "9967004020",
            description: "Jednoduchý stolík s odkladacím priestorom.",
            priceEur: 108,
          },
          {
            name: "PC-113 Systémový stolík s 1 zás.",
            code: "A7VAWY1",
            description: "Stolík s jedným zásobníkom na až 500 hárkov, A5–A3.",
            priceEur: 513,
          },
          {
            name: "PC-213 Systémový stolík s 2 zás.",
            code: "A7VAWY2",
            description: "Stolík s dvomi zásobníkmi, každý na až 500 hárkov, A5–A3.",
            priceEur: 748,
          },
          {
            name: "PC-413 Systémový stolík s veľkokap. zás.",
            code: "A7VAWY3",
            description: "Stolík s veľkokapacitným zásobníkom na až 2 500 hárkov A4.",
            priceEur: 748,
          },
          {
            name: "HT-509 Ohrievacia jednotka",
            code: "A4NHWY4",
            description:
              "Ohrievacia jednotka k stolíkom PC-110/115/210/215/410/415 a DK-510 – nutné dokúpiť aj MK-734, v kombinácii s LU-302 nutné dokúpiť MK-734 aj TK-101.",
            priceEur: 139,
          },
          {
            name: "MK-734 Mont. sada pre HT-509",
            code: "A4NJWY2",
            description: "Potrebná pre montáž HT-509.",
            priceEur: 638,
          },
          {
            name: "JS-506 Oddeľovač úloh",
            code: "A2YVWY2",
            description:
              "Oddeľovanie kópií, výtlačkov alebo faxov (nie je možné inštalovať súčasne s finišerom), kapacita: 1. priehradka – až 100 hárkov, 2. priehradka – až 150 hárkov.",
            priceEur: 283,
          },
          {
            name: "FS-533 Vstavaný finišer",
            code: "A2YUWY2",
            description:
              "Interný zošívací finišer, zošíva až 50 hárkov, spinky SK-602; (bizhub xx7 – potrebné doplniť MK-602, bizhub Cxx7 – potrebné doplniť MK-602 a MK-603).",
            priceEur: 646,
          },
          {
            name: "MK-602 Montážna sada pre FS-533",
            code: "A84FWY1",
            description: "Potrebné pre inštaláciu vstavaného finišera FS-533 (pre b227, 287).",
            priceEur: 24,
          },
          {
            name: "PK-519 Dierovacia jedn. pre FS-533",
            code: "A3EUW22",
            description: "2 a 4-dierové dierovanie, doplnok k FS-533.",
            priceEur: 265,
          },
          {
            name: "FS-534 Zošívací finišer",
            code: "A3EPWY2",
            description:
              "Zošívanie (rohové a postranné), až 50 listov, výstupná kapacita až 3 200 listov, spinky SK-602. Pre bizhub xx7 doplniť RU-514, pre bizhub xx4e/Cxx4e/Cxx8 doplniť RU-513, pre bizhub Cxx7 doplniť MK-603 a RU-514.",
            priceEur: 963,
          },
          {
            name: "FS-534SD Brožúrovací finišer",
            code: "A3EPWYC",
            description:
              "Rohové a postranné zošívanie až 50 listov, výstupná kapacita až 2 200 listov; chrbtové zošívanie (až 20 listov), pol-sklad, listový trojsklad, spinky SK-602. Pre b xx7 doplniť RU-514, pre b xx4e/Cxx4e/Cxx8 doplniť RU-513, pre b Cxx7 doplniť MK-603 a RU-514.",
            priceEur: 1710,
          },
          {
            name: "RU-514 Transportná jedn. pre FS-534/SD",
            code: "A84GWY1",
            description: "Potrebné pre inštaláciu finišerov FS-534/SD (pre b227, 287).",
            priceEur: 124,
          },
          {
            name: "PK-520 Dierovacia jednotka",
            code: "A3ETW21",
            description: "2 a 4-dierové dierovanie, doplnok k FS-534(SD) a FS-536(SD).",
            priceEur: 305,
          },
          {
            name: "FK-513 Faxová jednotka",
            code: "A879021",
            description: "Pre b227, 287; nie je potrebná montážna sada.",
            priceEur: 753,
          },
          {
            name: "SP-501 Pečiatkový modul",
            code: "4614506",
            description:
              "Jednotka faxovej pečiatky na označenie originálov odfaxovaných cez automatický podávač originálov (príslušenstvo pre ADF).",
            priceEur: 26,
          },
          {
            name: "Náhradná pečiatka",
            code: "4614511",
            description: "Náhradná pečiatka pre SP-501.",
            priceEur: 19,
          },
          {
            name: "EK-608 USB rozhranie",
            code: "A88AWY2",
            description:
              "USB rozhranie pre klávesnicu, zároveň rozširovacia karta potrebná pre čítačky kariet, biometrickú autentifikáciu alebo UK-212 interné WiFi.",
            priceEur: 92,
          },
          {
            name: "EK-609 USB + Bluetooth",
            code: "A87DWY2",
            description:
              "USB rozhranie pre klávesnicu, Bluetooth; zároveň rozširovacia karta potrebná pre čítačky kariet, biometrickú autentifikáciu alebo UK-212 interné WiFi.",
            priceEur: 183,
          },
          {
            name: "KH-102 Držiak na klávesnicu",
            code: "A4NRWY1",
            description: "Na umiestnenie USB klávesnice.",
            priceEur: 59,
          },
          {
            name: "AU-102 Biometrický cievny snímač",
            code: "A0X9WY1",
            description:
              "Novšia generácia snímača na overovanie užívateľa snímaním cievnej štruktúry prsta.",
            priceEur: 626,
          },
          {
            name: "WT-506 Pracovný pult",
            code: "A0W4WY3",
            description: "Pultík pre umiestnenie autentifikačných zariadení.",
            priceEur: 81,
          },
          {
            name: "KP-101 Numerická klávesnica",
            code: "A64TWY3",
            description: "Numerická klávesnica; doplnok k ovládaciemu panelu.",
            priceEur: 22,
          },
          {
            name: "UK-212 Integrované WIFI",
            code: "A87EWY2",
            description:
              "Integrované WIFI štandardne aj v móde Access Point (AP); možnosť vzdialeného ovládania zo zariadení s OS Android; pre C227, C287 potrebné doplniť EK-608 alebo EK-609.",
            priceEur: 177,
          },
          {
            name: "MK-735 Montážna sada",
            code: "A4NMWY1",
            description: "Potrebná pre inštaláciu čítačky kariet pod predný kryt.",
            priceEur: 39,
          },
          {
            name: "MK-747 Montážna sada pre CU-101",
            code: "A8W3WY1",
            description: "Inštalačná sada pre CU-101.",
            priceEur: 141,
          },
          {
            name: 'Dotykové pero (pre "7" sériu)',
            code: "A7AH166700",
            priceEur: 1.08,
          },
          {
            name: "SX-BR-4600WAN WiFi adaptér",
            code: "9967002640",
            description: "WiFi adaptér pre modely s ethernet rozhraním.",
            priceEur: 179,
          },
          {
            name: "Montážna sada na Key Counter",
            code: "4623485",
            description: "Len montážna sada. Potrebné doplniť key counter a socket.",
            priceEur: 94,
          },
        ],
      },
      {
        id: "ioption",
        title: "i-Option príslušenstvo",
        items: [
          {
            name: "LK-102 v3 Podpora PDF/A",
            code: "A0PD026",
            description:
              "i-Option License Kit – rozšírené možnosti PDF pri skenovaní (PDF/A, šifrovanie PDF); pre C308, C368, 227, 287, 367 nutné pridať UK-211.",
            priceEur: 128,
          },
          {
            name: "LK-105 v4 OCR skenovanie",
            code: "A0PD02T",
            description:
              "Umožní skenovať do prehľadávateľného PDF a PPTX (pre C308, C368, 227, 287, 367 – potrebná pamäť UK-211).",
            priceEur: 301,
          },
          {
            name: "LK-106 Čiarové kódy",
            code: "A0PD029",
            description:
              "i-Option License Kit – natívna podpora tlače čiarových kódov; pre C308, C368, 227, 287, 367 nutné pridať UK-211.",
            priceEur: 360,
          },
          {
            name: "LK-107 Unicode",
            code: "A0PD02F",
            description:
              "i-Option License Kit – natívna podpora tlače Unicode; pre C308, C368, 227, 287, 367 nutné pridať UK-211.",
            priceEur: 360,
          },
          {
            name: "LK-108 Tlač OCR",
            code: "A0PD02G",
            description:
              "i-Option License Kit – natívna podpora tlače fontov OCR A a B; pre C308, C368, 227, 287, 367 nutné pridať UK-211.",
            priceEur: 219,
          },
          {
            name: "LK-110 v2 Rozšírené OCR",
            code: "A0PD02U",
            description:
              "Skenovanie do editovateľných formátov DOCX, XLSX, PPTX, prehľadávateľného PDF a do PDF/A 1a a 1b; šifrovanie PDF; priama tlač príloh z emailu; faxovanie do sPDF (pre C308, C368, 227, 287, 367 – potrebná pamäť UK-211).",
            priceEur: 349,
          },
          {
            name: "LK-111 ThinPrint",
            code: "A0PD02K",
            description: "i-Option License Kit – natívny ThinPrint klient.",
            priceEur: 22,
          },
          {
            name: "LK-115 v2 Bezpečnostný chip",
            code: "A0PD02V",
            description:
              "i-Option License Kit – chip na ukladanie hesiel, šifrovacích kľúčov a pod. Zvyšuje bezpečnosť MFP; nie je potrebná dodatočná pamäť.",
            priceEur: 32,
          },
          {
            name: "UK-211 Rozšírenie pamäti pre i-Option",
            code: "9967004026",
            description: "Rozšírenie pamäte (2 GB) pre i-Option.",
            priceEur: 64,
          },
        ],
      },
      {
        id: "consumables",
        title: "Spotrebný materiál",
        items: [
          {
            name: "TN-323 Toner čierny",
            code: "A87M050",
            description: "1 toner na cca 23 000 strán (b227, 287).",
            priceEur: 55,
          },
          {
            name: "DR-312K Fotovalec čierny",
            code: "A7Y00RD",
            description: "Na cca 80 000 strán (b227), 100 000 strán (b287).",
            priceEur: 119,
          },
          {
            name: "DV-312K Vývojnica čierna",
            code: "A7Y003D",
            description: "Na cca 600 000 strán, vývojnica obsahuje štartér.",
            priceEur: 77,
          },
          {
            name: "Odpadová jednotka",
            code: "A7XWWY2",
            description: "Životnosť cca 110 000 strán (b227, 287).",
            priceEur: 27,
          },
          {
            name: "Transferová jednotka",
            code: "A7AHR72900",
            description:
              "Náhradný diel, potrebná výmena certifikovaným technikom; životnosť cca 150 000 strán (b227, 287).",
            priceEur: 37.21,
          },
          {
            name: "Spinky SK-602",
            code: "14YK",
            description:
              "Spinky: 3 zásobníky po 5 000 ks, pre finišery FS-536, FS-537SD, FS-534, FS-527, FS-529, SD-511, SD-512, SD-509, FS-514, FS-517, FS-519, FS-520.",
            priceEur: 56,
          },
        ],
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
