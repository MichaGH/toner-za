import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium ring-1 ring-white/20">
            {company.partner.role} {company.partner.brand}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">
            {company.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/prenajom" variant="secondary">
              Prenájom techniky
            </Button>
            <Button href="/katalog" variant="outline">
              Prehliadať katalóg
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
