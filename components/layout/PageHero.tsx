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
    <div className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white">
      <Container className="py-14 sm:py-20">
        <nav className="mb-4 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-700">
            Domov
          </Link>
          <span className="px-2">/</span>
          <span className="text-slate-700">{title}</span>
        </nav>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </div>
  );
}
