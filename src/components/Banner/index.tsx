"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/images/banner/banner-01.jpg",
    alt: "Prosole shoe care & accessories supply chain",
  },
  {
    src: "/images/banner/banner-02.jpg",
    alt: "Prosole manufacturing & customization",
  },
  {
    src: "/images/banner/banner-03.jpg",
    alt: "Prosole global partnership",
  },
];

const AUTO_PLAY_MS = 5000;

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  const total = slides.length;

  const goTo = (i: number) => setIndex((i + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [paused, total]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 40) {
          delta < 0 ? next() : prev();
        }
      }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="relative h-[220px] w-full shrink-0 sm:h-[320px] md:h-[420px] lg:h-[520px] 2xl:h-[600px]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 左右切换按钮 */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white transition hover:bg-black/60 md:h-12 md:w-12"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 md:h-6 md:w-6">
          <path
            d="M15 5 8 12l7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white transition hover:bg-black/60 md:h-12 md:w-12"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 md:h-6 md:w-6">
          <path
            d="m9 5 7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 指示点 */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
