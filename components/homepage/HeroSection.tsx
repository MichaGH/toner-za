import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { hero } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/office-1.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* modrý overlay pre biely text */}
      <div className="absolute inset-0 -z-10 bg-primary-900/85" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-950/70 via-transparent to-primary-950/30" />

      <Container className="pt-24 pb-12 text-center text-white sm:pt-32 sm:pb-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Prenájom a servis tlačiarenskej techniky
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-100">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/prenajom"
              className="group inline-flex items-center justify-center gap-2 bg-white px-7 py-4 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Prenájom techniky
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 border border-white/50 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Nezáväzný dopyt
            </Link>
          </div>

          {/* Partnerstvo KONICA MINOLTA */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-sm font-medium uppercase tracking-wide text-primary-200">
              Zmluvný distribútor a servisný partner
            </p>
            <span className="relative w-32 h-32 inline-flex px-5  ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src="/images/Logo_Konica_Minolta.svg"
                alt="KONICA MINOLTA"
                fill
                className="object-fit"
              />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
