import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { serviceCards } from "@/data/home";

export function ServiceCardsSection() {
  return (
    <Section className="bg-slate-50">
      <h2 className="text-center text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Naše služby
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {serviceCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group flex flex-col overflow-hidden bg-white shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
            </div>

            <div className="flex flex-1 flex-col items-center p-7 text-center">
              <h3 className="text-xl font-extrabold text-ink">{card.label}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {card.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
                Zistiť viac
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
