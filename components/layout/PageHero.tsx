import Link from "next/link";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-950 text-white">
      <Container className="py-14 sm:py-20">
        <nav className="text-sm text-primary-200">
          <Link href="/" className="transition-colors hover:text-white">
            Domov
          </Link>
          <span className="px-2 text-primary-300">/</span>
          <span className="text-white">{title}</span>
        </nav>

        {eyebrow && (
          <p className="mt-8 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-200">
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
      </Container>
    </section>
  );
}
