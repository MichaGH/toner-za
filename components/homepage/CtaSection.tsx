import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand-700 px-6 py-14 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Potrebujete poradiť s výberom techniky alebo tonerov?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
            Ozvite sa nám – pripravíme vám riešenie na mieru vrátane servisno-materiálovej zmluvy.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/kontakt" variant="secondary">
              Kontaktovať nás
            </Button>
            <Button href="/cennik" variant="outline">
              Pozrieť cenník
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
