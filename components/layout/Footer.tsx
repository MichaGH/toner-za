import Link from "next/link";
import { company, navItems } from "@/data/company";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
            {company.description}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-none bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-800">
            {company.partner.role} {company.partner.brand}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Navigácia
          </h3>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-600 transition-colors hover:text-primary-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <a href={`tel:${company.contact.phone.replace(/\s/g, "")}`} className="hover:text-primary-700">
                {company.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.contact.email}`} className="hover:text-primary-700">
                {company.contact.email}
              </a>
            </li>
            {company.contact.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li className="pt-2 text-slate-500">{company.contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {company.name}. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
}
