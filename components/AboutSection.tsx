import Image from "next/image";
import Link from "next/link";

function ProjectImage({
  title,
  image,
  className,
  href,
}: {
  title: string;
  image: string;
  className: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`about-project ${className}`}
    >
      <div className="about-project-image">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
          className="about-project-image-element"
        />
      </div>

      <div className="about-project-title">
        {title}
      </div>
    </Link>
  );
}

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* =================================================
            SECTION INTRO
        ================================================= */}

        <div className="about-intro">
          <span className="about-eyebrow">
            AFFORDABLE HOUSING SOCIETY IN LAHORE
          </span>

          <h2 className="about-heading">
            AL GHANI DEVELOPERS
          </h2>

          <p className="about-intro-text">
            Al Ghani Developers Is A Renowned Real
            Estate Development Company With A
            Footprint Of Almost 700 Acres Of Land
            Comprising More Than 12,000 Properties.
          </p>

          <p className="about-location">
            Main G.T Road, 2km Quaid-e-azam
            Interchange, Ring Road, Lahore.
          </p>
        </div>

        {/* =================================================
            COMPLETE PROJECT SHOWCASE
        ================================================= */}

        <div className="about-project-showcase">

          {/* LEFT LARGE IMAGE */}

          <ProjectImage
            title="Square Avenue"
            image="/images/about/square-avenue.png"
            className="project-square"
            href="/square-avenue"
          />

          {/* RIGHT TOP */}

          <div className="about-right-top">
            <ProjectImage
              title="AL GHANI GARDEN PHASE 7"
              image="/images/about/33322999.jpeg"
              className="project-phase-7"
              href="/phase-7"
            />

            <ProjectImage
              title="AL GHANI GARDEN PHASE 1"
              image="/images/about/phase-1.png"
              className="project-phase-1"
              href="/al-ghani-phase-i"
            />
          </div>

          {/* BOTTOM PROJECTS */}

          <div className="about-bottom-projects">

            <ProjectImage
              title="AL GHANI GARDEN PHASE 3"
              image="/images/about/phase-3.png"
              className="project-phase-3"
              href="/al-ghani-phase-iii"
            />

            <ProjectImage
              title="AL GHANI GARDEN PHASE 2"
              image="/images/about/phase-2.png"
              className="project-phase-2"
              href="/al-ghani-phase-ii"
            />

            <ProjectImage
              title="KINGS LANE"
              image="/images/about/kings-lane.png"
              className="project-kings-lane"
              href="/kings-lane"
            />

          </div>
        </div>
      </div>
    </section>
  );
}