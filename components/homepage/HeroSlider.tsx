"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { heroSlides } from "@/data/home";

const AUTOPLAY_MS = 6000;

export function HeroSlider() {
  const root = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [current, setCurrent] = useState(0);

  const count = heroSlides.length;
  const goTo = useCallback((i: number) => setCurrent(((i % count) + count) % count), [count]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Crossfade + Ken Burns animácia pri zmene slidu.
  useGSAP(
    () => {
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        gsap.to(slide, {
          autoAlpha: i === current ? 1 : 0,
          duration: 1.1,
          ease: "power2.inOut",
        });
      });

      const activeImage = imageRefs.current[current];
      if (activeImage) {
        gsap.fromTo(
          activeImage,
          { scale: 1.18 },
          { scale: 1, duration: AUTOPLAY_MS / 1000 + 1.2, ease: "none" },
        );
      }

      const activeContent = contentRefs.current[current];
      if (activeContent) {
        const items = activeContent.querySelectorAll<HTMLElement>("[data-anim]");
        gsap.fromTo(
          items,
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12, ease: "power3.out", delay: 0.25 },
        );
      }
    },
    { scope: root, dependencies: [current] },
  );

  // Autoplay – reštartuje sa pri každej zmene slidu.
  useEffect(() => {
    const id = window.setTimeout(() => goTo(current + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [current, goTo]);

  // Ovládanie klávesnicou.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      ref={root}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-slate-900 text-white"
      aria-roledescription="carousel"
      aria-label="Úvodná prezentácia"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.image}
          ref={(el) => {
            slideRefs.current[i] = el;
          }}
          className="absolute inset-0 invisible opacity-0"
          aria-hidden={i !== current}
        >
          <div
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          <div className="relative mx-auto flex h-full w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
            <div
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
              className="max-w-2xl"
            >
              <p
                data-anim
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide ring-1 ring-white/20 backdrop-blur sm:text-sm"
              >
                {slide.eyebrow}
              </p>
              <h1
                data-anim
                className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                {slide.title}
              </h1>
              <p data-anim className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
                {slide.text}
              </p>
              <div data-anim className="mt-9">
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
                >
                  {slide.cta.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Šípky */}
      <button
        type="button"
        onClick={prev}
        aria-label="Predchádzajúci"
        className="group absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/20 sm:left-6"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Ďalší"
        className="group absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/20 sm:right-6"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Guličky */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Prejsť na slide ${i + 1}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
