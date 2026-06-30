import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getProduct, products } from "@/data/products";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(
  props: PageProps<"/katalog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return { title: "Produkt nenájdený" };
  return {
    title: product.model,
    description: product.shortDescription,
  };
}

export default async function ProductPage(props: PageProps<"/katalog/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={product.categoryLabel}
        title={product.model}
        description={product.shortDescription}
      >
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="rounded-xl bg-white px-5 py-3 ring-1 ring-brand-200">
            <p className="text-xs text-slate-500">Cena bez DPH od</p>
            <p className="text-2xl font-bold text-brand-700">
              {formatPrice(product.priceEur)}
            </p>
          </div>
          <Button href="/kontakt">Vyžiadať cenovú ponuku</Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeading title="Technická špecifikácia" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {product.specs.map((spec) => (
            <li
              key={spec}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                ✓
              </span>
              <span className="text-sm text-slate-700">{spec}</span>
            </li>
          ))}
        </ul>
      </Section>

      {product.accessoryGroups.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          className={index % 2 === 0 ? "bg-slate-50" : ""}
        >
          <SectionHeading title={group.title} />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Názov</th>
                  <th className="px-4 py-3 font-semibold">Kód</th>
                  <th className="hidden px-4 py-3 font-semibold md:table-cell">
                    Popis
                  </th>
                  <th className="px-4 py-3 text-right font-semibold">
                    Cena bez DPH
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {group.items.map((item) => (
                  <tr key={item.code} className="align-top hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-ink">
                      {item.name}
                      {item.description && (
                        <p className="mt-1 font-normal text-slate-500 md:hidden">
                          {item.description}
                        </p>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-500">
                      {item.code}
                    </td>
                    <td className="hidden max-w-md px-4 py-3 text-slate-600 md:table-cell">
                      {item.description ?? "—"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-brand-700">
                      {formatPrice(item.priceEur)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ))}

      <Section>
        <div className="rounded-3xl bg-brand-700 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Potrebujete pomôcť s konfiguráciou?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            Pripravíme vám zostavu {product.model} vrátane potrebného príslušenstva
            a spotrebného materiálu.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/kontakt" variant="secondary">
              Kontaktovať nás
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
