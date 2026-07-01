import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-none px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";

const variants: Record<Variant, string> = {
  primary: "bg-primary-600 text-white hover:bg-primary-700",
  secondary: "bg-white text-primary-700 ring-1 ring-primary-200 hover:bg-primary-50",
  outline:
    "border border-white/70 text-white hover:bg-white/10 focus-visible:outline-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
