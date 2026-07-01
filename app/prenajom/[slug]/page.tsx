import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/homepage/CtaSection";
import { TypeMark } from "@/components/printers/RentalPrinterCard";
import { getRentalPrinter, rentalPrinters } from "@/data/rentalPrinters";
import { company } from "@/data/company";
import { formatEur } from "@/lib/format";

export function generateStaticParams() {
  return rentalPrinters.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/prenajom/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const printer = getRentalPrinter(slug);
  if (!printer) return { title: "Tlačiareň nenájdená" };
  return {
    title: `${printer.model} – prenájom`,
    description: printer.description,
  };
}

export default async function RentalPrinterPage(
  props: PageProps<"/prenajom/[slug]">,
) {
  const { slug } = await props.params;
  const printer = getRentalPrinter(slug);

  if (!printer) {
    notFound();
  }

  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <Container className="py-10 sm:py-14">
          <nav className="text-sm text-slate-500">
            <Link href="/" className="hover:text-primary-700">
              Domov
            </Link>
            <span className="px-2">/</span>
            <Link href="/prenajom" className="hover:text-primary-700">
              Prenájom
            </Link>
            <span className="px-2">/</span>
            <span className="text-slate-700">{printer.model}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            {/* Galéria */}
            <div>
              <div className="relative aspect-square border border-slate-200 bg-white">
                <Image
                  src={printer.images[0]}
                  alt={printer.model}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8"
                  priority
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {printer.images.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-square border border-slate-200 bg-white"
                  >
                    <Image
                      src={src}
                      alt={`${printer.model} – pohľad ${i + 1}`}
                      fill
                      sizes="20vw"
                      className="object-contain p-3"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Informácie a cena */}
            <div>
              <div className="flex items-center gap-4">
                <TypeMark type={printer.type} />
                <span className="text-sm font-semibold text-slate-400">
                  {printer.format} · {printer.speed}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                {printer.model}
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-muted">
                {printer.description}
              </p>

              <ul className="mt-6 space-y-2">
                {printer.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-slate-700">
                    <span className="flex h-5 w-5 flex-none items-center justify-center bg-primary-50 text-primary-600">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Cenník */}
              <div className="mt-8 border border-slate-200">
                <div className="flex items-baseline justify-between bg-slate-50 px-5 py-4">
                  <span className="text-sm font-medium text-slate-600">
                    Prenájom (stojné)
                  </span>
                  <span className="text-3xl font-extrabold text-ink">
                    {formatEur(printer.monthly)}
                    <span className="text-sm font-medium text-slate-500"> / mes.</span>
                  </span>
                </div>
                <dl className="divide-y divide-slate-100 px-5 text-sm">
                  <div className="flex justify-between py-3">
                    <dt className="text-slate-600">Čiernobiela strana</dt>
                    <dd className="font-semibold text-ink">
                      {formatEur(printer.pageBw, 3, 4)}
                    </dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-slate-600">Farebná strana</dt>
                    <dd className="font-semibold text-ink">
                      {printer.pageColor != null
                        ? formatEur(printer.pageColor, 3, 4)
                        : "—"}
                    </dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-slate-600">Servis a údržba</dt>
                    <dd className="font-semibold text-primary-700">v cene paušálu</dd>
                  </div>
                </dl>
                <p className="px-5 pb-4 text-xs text-slate-400">
                  Ceny sú uvedené bez DPH. Strany sa fakturujú mesačne podľa počtu
                  výtlačkov.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/kontakt">Mám záujem o prenájom</Button>
                <a
                  href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary-600 hover:text-primary-700"
                >
                  {company.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Špecifikácia */}
      <Section>
        <SectionHeading title="Technická špecifikácia" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {printer.specs.map((spec) => (
            <li
              key={spec}
              className="flex items-start gap-3 border border-slate-200 bg-white px-4 py-3"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center bg-primary-50 text-primary-600">
                <Check size={13} strokeWidth={3} />
              </span>
              <span className="text-sm text-slate-700">{spec}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection />
    </>
  );
}
