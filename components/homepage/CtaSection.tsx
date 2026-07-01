import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function CtaSection() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="relative overflow-hidden bg-primary-700 px-6 py-14 sm:px-12">
        <span className="absolute left-0 top-0 z-10 h-1.5 w-24 bg-accent-500" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Potrebujete poradiť s výberom techniky alebo tonerov?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-primary-100">
              Pripravíme vám riešenie na mieru vrátane servisno-materiálovej zmluvy.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Kontaktovať nás
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {company.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
