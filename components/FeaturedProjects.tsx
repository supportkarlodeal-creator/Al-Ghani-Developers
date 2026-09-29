"use client";

import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    name: "OLIVE BLOCK",
    slug: "olive-block",
    image: "/images/projects/olive-block/olive-block-1.png",
  },
  {
    name: "THE EAST BLOCK",
    slug: "the-east-block",
    image: "/images/projects/the-east-block/the-east-block-1.png",
  },
  {
    name: "AL-GHANI GARDEN PHASE 7",
    slug: "phase-1",
    image: "/images/projects/phase-7/phase-7-1.png",
  },
  {
    name: "AL-GHANI GARDEN PHASE I",
    slug: "phase-1",
    image: "/images/projects/phase-1/phase-1-1.png",
  },
  {
    name: "AL GHANI GARDEN PHASE II",
    slug: "phase-2",
    image: "/images/projects/phase-2/phase-2-1.png",
  },
  {
    name: "KINGS LANE",
    slug: "kings-lane",
    image: "/images/projects/kings-lane/kings-lane-1.png",
  },
];

export default function FeaturedProjects() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  const scrollPrevious = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  return (
    <section className="featured-projects-section">
      <div className="featured-projects-container">

        {/* Heading */}
        <div className="featured-projects-heading">
          <span>AL GHANI DEVELOPERS</span>
          <h2>Featured Projects</h2>
        </div>

        {/* Carousel */}
        <div className="featured-projects-carousel-wrapper">

          <button
            type="button"
            className="featured-projects-arrow featured-projects-arrow-left"
            onClick={scrollPrevious}
            aria-label="Previous projects"
          >
            ‹
          </button>

          <div
            ref={carouselRef}
            className="featured-projects-carousel"
          >
            {projects.map((project) => (
              <article
                key={project.slug}
                className="featured-project-card"
              >
                <div className="featured-project-image">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 600px) 85vw, (max-width: 900px) 45vw, 285px"
                  />
                </div>

                <div className="featured-project-content">
                  <span className="featured-project-label">
                    AL GHANI DEVELOPERS
                  </span>

                  <h3>{project.name}</h3>

                  <a href={`/projects/${project.slug}`}>
                    VIEW PROJECT
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="featured-projects-arrow featured-projects-arrow-right"
            onClick={scrollNext}
            aria-label="Next projects"
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
}