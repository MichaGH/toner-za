import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Katalóg",
  description:
    "Katalóg multifunkčných zariadení, príslušenstva a spotrebného materiálu. Ceny sú uvedené bez DPH.",
};

export default function KatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="Katalóg"
        title="Katalóg zariadení a príslušenstva"
        description="Multifunkčné zariadenia vrátane príslušenstva a spotrebného materiálu. Všetky ceny sú uvedené bez DPH."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/katalog/${product.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {product.categoryLabel}
              </span>
              <h2 className="mt-4 text-xl font-bold text-ink group-hover:text-brand-700">
                {product.model}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {product.shortDescription}
              </p>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-slate-500">Cena bez DPH od</p>
                  <p className="text-lg font-bold text-brand-700">
                    {formatPrice(product.priceEur)}
                  </p>
                </div>
                <span className="text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-1">
                  Detail →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
