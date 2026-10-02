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
  {
    image: "/images/hero/hero-3.png",
    width: 1600,
    height: 610,
    alt: "Al Ghani Developers",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /*
   * Automatically move to the next slide every 5 seconds.
   */
  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((current) => {
        return (current + 1) % slides.length;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /*
   * Get the currently active slide.
   *
   * IMPORTANT:
   * This must be declared BEFORE the JSX because
   * the slider uses current.width and current.height.
   */
  const current = slides[currentSlide];

  /*
   * Go to previous slide.
   */
  const goToPrevious = () => {
    setCurrentSlide((current) => {
      return (current - 1 + slides.length) % slides.length;
    });
  };

  /*
   * Go to next slide.
   */
  const goToNext = () => {
    setCurrentSlide((current) => {
      return (current + 1) % slides.length;
    });
  };

  /*
   * Go directly to a specific slide.
   */
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="hero-image"
            />
          </div>
        ))}
      </div>

      {/* =====================================================
          DESKTOP ARROWS
      ===================================================== */}

      {slides.length > 1 && (
        <>
          <button
  type="button"
  className="hero-arrow hero-arrow-left"
  onClick={goToPrevious}
  aria-label="Previous slide"
>
  <span className="hero-arrow-icon" />
</button>

<button
  type="button"
  className="hero-arrow hero-arrow-right"
  onClick={goToNext}
  aria-label="Next slide"
>
  <span className="hero-arrow-icon" />
</button>

          {/* =================================================
              SLIDE DOTS
          ================================================= */}

          <div className="hero-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                className={`hero-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={
                  index === currentSlide ? "true" : undefined
                }
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}