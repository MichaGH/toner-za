"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navItems } from "@/data/company";
import { Logo } from "./Logo";

// Výška navigácie v px (jediný zdroj pravdy – používa ju aj TonerSection).
// Ak by scrollovaná verzia mala inú výšku, pridaj NAV_HEIGHT_SCROLLED
// a prepínaj podľa stavu.
export const NAV_HEIGHT = 72;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        style={{ height: NAV_HEIGHT }}
      >
        <Link href="/" aria-label="TONER-ZA – domov">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-semibold transition-colors ${
                  active ? "text-primary-700" : "text-black hover:text-primary-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Kontakt
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center p-2 text-slate-700 lg:hidden"
          aria-label="Otvoriť menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-3 text-base font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-1 bg-primary-600 px-3 py-3 text-center text-base font-semibold text-white"
            >
              Kontakt
            </Link>
            <p className="px-3 py-3 text-sm text-slate-500">{company.contact.phone}</p>
          </div>
        </nav>
      )}
    </header>
  );
}
