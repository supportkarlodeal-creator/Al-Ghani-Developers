import Image from "next/image";

const projects = [
  {
    title: "Square Avenue",
    image: "/images/about/square-avenue.png",
    className: "project-square",
  },
  {
    title: "AL GHANI GARDEN PHASE 7",
    image: "/images/about/phase-7.png",
    className: "project-phase-7",
  },
  {
    title: "AL GHANI GARDEN PHASE 1",
    image: "/images/about/phase-1.png",
    className: "project-phase-1",
  },
  {
    title: "AL GHANI GARDEN PHASE 3",
    image: "/images/about/phase-3.png",
    className: "project-phase-3",
  },
  {
    title: "AL GHANI GARDEN PHASE 2",
    image: "/images/about/phase-2.png",
    className: "project-phase-2",
  },
  {
    title: "KINGS LANE",
    image: "/images/about/kings-lane.png",
    className: "project-kings-lane",
  },
  {
    title: "AZMAT HEIGHTS",
    image: "/images/about/azmat-heights.png",
    className: "project-azmat-heights",
  },
];

function ProjectImage({
  title,
  image,
  className,
}: {
  title: string;
  image: string;
  className: string;
}) {
  return (
    <div className={`about-project ${className}`}>
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
    </div>
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
          />

          {/* RIGHT TOP */}

          <div className="about-right-top">
            <ProjectImage
              title="AL GHANI GARDEN PHASE 7"
              image="/images/about/phase-7.png"
              className="project-phase-7"
            />

            <ProjectImage
              title="AL GHANI GARDEN PHASE 1"
              image="/images/about/phase-1.png"
              className="project-phase-1"
            />
          </div>

          {/* BOTTOM FOUR PROJECTS */}

          <div className="about-bottom-projects">

            <ProjectImage
              title="AL GHANI GARDEN PHASE 3"
              image="/images/about/phase-3.png"
              className="project-phase-3"
            />

            <ProjectImage
              title="AL GHANI GARDEN PHASE 2"
              image="/images/about/phase-2.png"
              className="project-phase-2"
            />

            <ProjectImage
              title="KINGS LANE"
              image="/images/about/kings-lane.png"
              className="project-kings-lane"
            />

            <ProjectImage
              title="AZMAT HEIGHTS"
              image="/images/about/azmat-heights.png"
              className="project-azmat-heights"
            />

          </div>
        </div>
      </div>
    </section>
  );
}