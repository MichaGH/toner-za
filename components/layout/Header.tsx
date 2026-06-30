"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navItems } from "@/data/company";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Priehľadný režim len na úvodnej stránke v hornej polohe a so zatvoreným menu.
  const overlay = isHome && !scrolled && !open;

  return (
    <header
      className={`top-0 z-50 w-full transition-colors duration-300 ${
        isHome ? "fixed" : "sticky"
      } ${overlay ? "bg-transparent" : "border-b border-slate-200 bg-white/90 backdrop-blur"}`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-baseline gap-1 text-xl font-extrabold tracking-tight">
          <span className={overlay ? "text-white" : "text-brand-700"}>TONER</span>
          <span className={overlay ? "text-white/50" : "text-slate-400"}>-</span>
          <span className={overlay ? "text-white" : "text-ink"}>ZA</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                overlay ? "text-white/90 hover:text-white" : "text-slate-600 hover:text-brand-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              overlay
                ? "bg-white text-brand-700 hover:bg-brand-50"
                : "bg-brand-600 text-white hover:bg-brand-700"
            }`}
          >
            Kontakt
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-lg p-2 lg:hidden ${
            overlay ? "text-white" : "text-slate-700"
          }`}
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
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-1 rounded-lg bg-brand-600 px-3 py-3 text-center text-base font-semibold text-white"
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
