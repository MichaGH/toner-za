import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte TONER-ZA – poradíme s výberom techniky, tonerov, prenájmu aj servisu.",
};

export default function KontaktPage() {
  const { contact, partner } = company;

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Ozvite sa nám"
        description="Radi vám poradíme s výberom techniky, tonerov, prenájmu či servisu a pripravíme ponuku na mieru."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-brand-300"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Telefón
            </p>
            <p className="mt-2 text-xl font-bold text-brand-700">{contact.phone}</p>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-brand-300"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              E-mail
            </p>
            <p className="mt-2 text-xl font-bold text-brand-700">{contact.email}</p>
          </a>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Adresa
            </p>
            <address className="mt-2 not-italic text-slate-700">
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Otváracie hodiny
            </p>
            <p className="mt-2 text-slate-700">{contact.hours}</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-brand-50 p-6 text-brand-900">
          <p className="font-semibold">
            {partner.role} {partner.brand}
          </p>
        </div>
      </Section>
    </>
  );
}
