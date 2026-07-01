"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { NAV_HEIGHT } from "@/components/layout/Header";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

type Cleanup = () => void;

function once(
  target: EventTarget,
  event: string,
  fn: EventListener,
  options?: AddEventListenerOptions,
): Cleanup {
  let active = true;

  const onceFn: EventListener = (e) => {
    if (!active) return;

    active = false;
    target.removeEventListener(event, onceFn, options);
    fn(e);
  };

  target.addEventListener(event, onceFn, options);

  return () => {
    if (!active) return;

    active = false;
    target.removeEventListener(event, onceFn, options);
  };
}

export function TonerSection() {
  const wrap = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const wrapper = wrap.current;
      const video = videoRef.current;

      if (!wrapper || !video || !contextSafe) return;

      let tl: gsap.core.Timeline | null = null;
      let removeLoadedMetadata: Cleanup | null = null;
      let removeTouchStart: Cleanup | null = null;
      let blobUrl: string | null = null;
      let timeoutId: number | null = null;
      let killed = false;

      const abortController = new AbortController();

      // iOS/Safari niekedy potrebuje "aktivovať" video user gestom.
      removeTouchStart = once(
        document.documentElement,
        "touchstart",
        () => {
          video
            .play()
            .then(() => {
              video.pause();
            })
            .catch(() => {
              // autoplay/user gesture policy môže odmietnuť play(), nevadí
            });
        },
        { passive: true },
      );

      const buildScrollVideo = contextSafe(() => {
        if (killed) return;

        const duration = video.duration;

        if (!duration || !Number.isFinite(duration)) return;

        // Pre istotu zabi starý timeline, keby sa metadata event spustil viackrát.
        tl?.kill();

        video.pause();

        // Pomáha zobraziť prvý frame v niektorých browseroch.
        try {
          video.currentTime = 0.001;
        } catch {
          // ignored
        }

        tl = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          video,
          { currentTime: 0 },
          {
            currentTime: duration,
            duration: 1,
          },
        );

        ScrollTrigger.refresh();
      });

      const preloadAsBlob = () => {
        const sourceEl = video.querySelector("source");
        const src = video.currentSrc || video.src || sourceEl?.src;

        if (!src || src.startsWith("blob:")) return;

        timeoutId = window.setTimeout(() => {
          fetch(src, { signal: abortController.signal })
            .then((res) => {
              if (!res.ok) {
                throw new Error(`Video fetch failed: ${res.status}`);
              }

              return res.blob();
            })
            .then((blob) => {
              if (killed) return;

              const currentTime = video.currentTime;

              blobUrl = URL.createObjectURL(blob);
              video.src = blobUrl;

              try {
                video.currentTime = currentTime + 0.01;
              } catch {
                // ignored
              }
            })
            .catch((err) => {
              if (err?.name !== "AbortError") {
                console.warn("Video blob preload failed:", err);
              }
            });
        }, 1000);
      };

      const setupWhenReady = contextSafe(() => {
        buildScrollVideo();
        preloadAsBlob();
      });

      if (
        video.readyState >= 1 &&
        video.duration &&
        Number.isFinite(video.duration)
      ) {
        setupWhenReady();
      } else {
        removeLoadedMetadata = once(video, "loadedmetadata", setupWhenReady);
      }

      return () => {
        killed = true;

        removeLoadedMetadata?.();
        removeTouchStart?.();

        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }

        abortController.abort();

        tl?.scrollTrigger?.kill();
        tl?.kill();

        if (blobUrl) {
          URL.revokeObjectURL(blobUrl);
        }
      };
    },
    { scope: wrap },
  );

  return (
    <section className="bg-black text-white">
      {/* Výška wrappera = dĺžka scrollu. */}
      <div ref={wrap} className="relative h-[260vh]">
        {/* Sticky vrstva – presne 1 obrazovka mínus navbar, obsah je cez video. */}
        <div
          className="sticky flex flex-col overflow-hidden"
          style={{ top: NAV_HEIGHT, height: `calc(100svh - ${NAV_HEIGHT}px)` }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/toner_video_encoded.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />

          <div className="relative z-10 flex h-full flex-col">
            {/* Nadpis cez video */}
            <Container className="flex flex-1 flex-col justify-center pt-8">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                <span className="h-2 w-2 bg-accent-500" />
                Spotrebný materiál
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                Tonery a renovácie tonerov
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Predaj a repasácia tonerov pre kopírovacie stroje a laserové
                tlačiarne všetkých bežných značiek – originálne, kompatibilné aj
                renovované.
              </p>
            </Container>

            {/* Malé kartičky cez video */}
            <Container className="pb-8 sm:pb-10">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
                {tonerCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-black/50 ring-1 ring-white/10 backdrop-blur-sm"
                  >
                    <span
                      className="block h-1.5 w-full"
                      style={{ backgroundColor: card.color }}
                    />
                    <div className="p-4 sm:p-5">
                      <h3 className="text-sm font-bold text-white sm:text-base">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/tonery"
                  className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/85"
                >
                  Zobraziť ponuku tonerov
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/tonery#renovacie"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Renovácie tonerov
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
