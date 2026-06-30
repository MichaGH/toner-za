// Obsah úvodnej stránky.

export type HeroSlide = {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/hero/slide-1.jpg",
    eyebrow: "Zmluvný distribútor a servisný partner KONICA MINOLTA",
    title: "Kancelárska technika bez kompromisov",
    text: "Predaj, prenájom a servis tlačiarní a kopírovacích strojov pre firmy každej veľkosti.",
    cta: { label: "Prenájom techniky", href: "/prenajom" },
  },
  {
    image: "/hero/slide-2.jpg",
    eyebrow: "Tonery a renovácie",
    title: "Tlačte v plnej farbe za rozumné náklady",
    text: "Originálne, kompatibilné aj renovované tonery pre všetky bežné značky.",
    cta: { label: "Predaj tonerov", href: "/tonery" },
  },
  {
    image: "/hero/slide-3.jpg",
    eyebrow: "Servisno-materiálová zmluva",
    title: "O techniku sa postaráme za vás",
    text: "Inštalácia, údržba, dodávka materiálu aj garantovaný servisný zásah do 8 hodín.",
    cta: { label: "Servisné služby", href: "/servis" },
  },
  {
    image: "/hero/slide-4.jpg",
    eyebrow: "Multifunkčné zariadenia",
    title: "Vyberte si zo špičkových zariadení",
    text: "Č/B aj farebné multifunkčné zariadenia s príslušenstvom na mieru.",
    cta: { label: "Prehliadať katalóg", href: "/katalog" },
  },
];
