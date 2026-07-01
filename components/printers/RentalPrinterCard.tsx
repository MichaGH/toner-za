import Image from "next/image";
import Link from "next/link";
import { type RentalPrinter } from "@/data/rentalPrinters";
import { formatEur } from "@/lib/format";

export function TypeMark({ type }: { type: RentalPrinter["type"] }) {
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

export function RentalPrinterCard({ printer }: { printer: RentalPrinter }) {
  const detailHref = `/prenajom/${printer.slug}`;

  return (
    <div className="group flex h-full flex-col border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={detailHref} className="relative block aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={printer.images[0]}
          alt={printer.model}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-5 transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src={printer.images[2] ?? printer.images[0]}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </Link>

      <div className="flex flex-1 flex-col border-t border-slate-100 p-6">
        <div className="flex items-center justify-between">
          <TypeMark type={printer.type} />
          <span className="text-xs font-semibold text-slate-400">
            {printer.format} · {printer.speed}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-ink">
          <Link href={detailHref} className="hover:text-primary-700">
            {printer.model}
          </Link>
        </h3>
        {/* Pevná výška pre text – ceny a tlačidlá tak sedia v rovnakej výške. */}
        <p className="mt-1.5 min-h-[4.5rem] text-sm leading-relaxed text-slate-600">
          {printer.description}
        </p>

        <div className="mt-auto border-t border-slate-100 pt-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Prenájom už od (stojné)
          </p>
          <p className="text-3xl font-extrabold text-ink">
            {formatEur(printer.monthly)}
            <span className="text-sm font-medium text-slate-500"> / mes.</span>
          </p>

          <dl className="mt-3 divide-y divide-slate-100 text-sm">
            <div className="flex justify-between py-1.5">
              <dt className="text-slate-500">Čiernobiela strana</dt>
              <dd className="font-semibold text-ink">{formatEur(printer.pageBw, 3, 4)}</dd>
            </div>
            <div className="flex justify-between py-1.5">
              <dt className="text-slate-500">Farebná strana</dt>
              <dd className="font-semibold text-ink">
                {printer.pageColor != null ? formatEur(printer.pageColor, 3, 4) : "—"}
              </dd>
            </div>
            <div className="flex justify-between py-1.5">
              <dt className="text-slate-500">Servis a údržba</dt>
              <dd className="font-semibold text-primary-700">v cene paušálu</dd>
            </div>
          </dl>

          <Link
            href={detailHref}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Detail a cenník
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
