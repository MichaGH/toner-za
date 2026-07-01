import Link from "next/link";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  visual,
  parent,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  visual?: ReactNode;
  parent?: {
    label: string;
    href: string;
  };
}) {
  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-950 text-white">
      <Container className={visual ? "py-10 sm:py-14" : "py-14 sm:py-20"}>
        <nav className="text-sm text-primary-200">
          <Link href="/" className="transition-colors hover:text-white">
            Domov
          </Link>
          <span className="px-2 text-primary-300">/</span>
          {parent && (
            <>
              <Link href={parent.href} className="transition-colors hover:text-white">
                {parent.label}
              </Link>
              <span className="px-2 text-primary-300">/</span>
            </>
          )}
          <span className="text-white">{title}</span>
        </nav>

        <div
          className={
            visual
              ? "mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-14"
              : ""
          }
        >
          <div>
            {eyebrow && (
              <p
                className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-200 ${
                  visual ? "" : "mt-8"
                }`}
              >
                <span className="h-2 w-2 bg-accent-500" />
                {eyebrow}
              </p>
            )}

            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {title}
            </h1>

            {description && (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-100">
                {description}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>

          {visual && <div>{visual}</div>}
        </div>
      </Container>
    </section>
  );
}
