"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero/hero-2.png",
    width: 1600,
    height: 610,
    alt: "Al Ghani Developers",
  },
  {
    image: "/images/hero/hero-1.png",
    width: 1600,
    height: 581,
    alt: "Al Ghani Developers",
  },
{   image: "/images/hero/hero-3.png",
     width: 1600,
     height: 610,
     alt: "Al Ghani Developers",
   },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide(
        (current) => (current + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  return (
    <section className="hero-section">
      <div
        className="hero-slider"
        style={{
          aspectRatio: `${current.width} / ${current.height}`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              priority={index === 0}
              sizes="100vw"
              className="hero-image"
            />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="hero-arrow hero-arrow-left"
            onClick={() =>
              setCurrentSlide(
                (current) =>
                  (current - 1 + slides.length) %
                  slides.length
              )
            }
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            type="button"
            className="hero-arrow hero-arrow-right"
            onClick={() =>
              setCurrentSlide(
                (current) =>
                  (current + 1) % slides.length
              )
            }
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="hero-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                className={`hero-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}