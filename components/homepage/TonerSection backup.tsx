"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const cmyk = ["#00a7e1", "#e5007d", "#ffd400", "#111111"];

const tonerCards = [
  {
    title: "Originálne tonery",
    text: "Garantovaná kvalita a výťažnosť priamo od výrobcu.",
    color: "#00a7e1",
  },
  {
    title: "Kompatibilné tonery",
    text: "Cenovo výhodná alternatíva pre bežnú prevádzku.",
    color: "#e5007d",
  },
  {
    title: "Renovované tonery",
    text: "Repasácia pre väčšinu bežných značiek za zvýhodnené ceny.",
    color: "#ffd400",
  },
  {
    title: "Plniace sady",
    text: "Pre atramentové tlačiarne – jednoduché plnenie svojpomocne.",
    color: "#ffffff",
  },
];

export function TonerSection() {
  const wrap = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const video = videoRef.current;
      if (!video) return;

      let trigger: ScrollTrigger | undefined;
      const build = () => {
        trigger = ScrollTrigger.create({
          trigger: wrap.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
          onUpdate: (self) => {
            const d = video.duration;
            if (d && Number.isFinite(d)) {
              video.currentTime = self.progress * d;
            }
          },
        });
      };

      if (video.readyState >= 1 && video.duration) build();
      else video.addEventListener("loadedmetadata", build, { once: true });

      return () => trigger?.kill();
    },
    { scope: wrap },
  );

  return (
    <section className="bg-black text-white">
      {/* Video ovládané scrollom. Výšku wrappera možno upraviť (dĺžka scrollu). */}
      <div ref={wrap} className="relative h-[260vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-end overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-contain"
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/cmyk_into_black.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <Container className="relative z-10 pb-16 sm:pb-24">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              <span className="h-2 w-2 bg-accent-500" />
              Spotrebný materiál
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Tonery a renovácie tonerov
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
              Predaj a repasácia tonerov pre kopírovacie stroje a laserové
              tlačiarne všetkých bežných značiek – originálne, kompatibilné aj
              renovované.
            </p>
          </Container>
        </div>
      </div>

      {/* Výrazný CMYK pásik */}
      <div className="flex h-3 w-full gap-px bg-white/15">
        {cmyk.map((c) => (
          <span key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>

      <Container className="pb-20 pt-16">
        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {tonerCards.map((card) => (
            <div key={card.title} className="bg-black">
              <span className="block h-2 w-full" style={{ backgroundColor: card.color }} />
              <div className="p-6">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/tonery"
            className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/85"
          >
            Zobraziť ponuku tonerov
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/renovacie-tonerov"
            className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Renovácie tonerov
          </Link>
        </div>
      </Container>
    </section>
  );
}
