import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { printerOffers, type PrinterOffer } from "@/data/featured";

// Dočasne rovnaké fotky pre všetky zariadenia.
const IMG_BASE = "/images/printers/konica_minolta_bizhub_225i/basic_zpredu.webp";
const IMG_HOVER = "/images/printers/konica_minolta_bizhub_225i/zhora.webp";

function TypeMark({ type }: { type: PrinterOffer["type"] }) {
  const dots =
    type === "color"
      ? ["#00a7e1", "#e5007d", "#ffd400", "#111111"]
      : ["#111111", "#ffffff"];
  const label = type === "color" ? "Farebné" : "Čiernobiele";

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex -space-x-1.5">
        {dots.map((c, i) => (
          <span
            key={i}
            className="h-4 w-4 rounded-full ring-2 ring-white"
            style={{
              backgroundColor: c,
              boxShadow: c === "#ffffff" ? "inset 0 0 0 1px #cbd5e1" : undefined,
            }}
          />
        ))}
      </div>
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
        {label}
      </span>
    </div>
  );
}

export function PrinterOffersSection() {
  return (
    <Section>
      {/* Hlavička: vľavo nadpis, vpravo popis */}
      <div className="grid gap-6 border-b border-slate-200 pb-8 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">
            <span className="h-2 w-2 bg-accent-500" />
            Zariadenia na prenájom
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Vybrané tlačiarne z našej ponuky
          </h2>
        </div>
        <p className="text-base leading-relaxed text-muted lg:text-right">
          Mesačný paušál závisí od doby prenájmu a predpokladaného objemu tlače.
          Konfiguráciu pripravíme na mieru vašej firme.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {printerOffers.map((printer) => (
          <div
            key={printer.model}
            className="group flex flex-col border border-slate-200 bg-white"
          >
            {/* Fotka s prepnutím pri hoveri */}
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <Image
                src={IMG_BASE}
                alt={printer.model}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-5 transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={IMG_HOVER}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            <div className="flex flex-1 flex-col border-t border-slate-100 p-6">
              <div className="flex items-center justify-between">
                <TypeMark type={printer.type} />
                <span className="text-xs font-semibold text-slate-400">
                  {printer.format} · {printer.speed}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-ink">{printer.model}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {printer.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {printer.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 flex-none bg-primary-500" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Prenájom už od
                  </p>
                  <p className="text-3xl font-extrabold text-ink">
                    {printer.monthlyFrom}&nbsp;€
                    <span className="text-sm font-medium text-slate-500"> / mes.</span>
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">bez DPH</p>
                </div>
                <Link
                  href={printer.href}
                  className="inline-flex items-center gap-1 bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Detail
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Odkaz pod kartičkami */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/prenajom"
          className="inline-flex items-center gap-2 border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary-600 hover:text-primary-700"
        >
          Všetky možnosti prenájmu
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
