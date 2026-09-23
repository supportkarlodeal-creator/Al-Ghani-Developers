import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AL-GHANI GARDEN PHASE I",
    href: "/al-ghani-phase-i",
  },
  {
    title: "AZMAT HEIGHTS",
    href: "/azmat-heights",
  },
  {
    title: "AL GHANI GARDEN PHASE II",
    href: "/al-ghani-phase-ii",
  },
  {
    title: "KINGS LANE",
    href: "/kings-lane",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-small-title">
            AL GHANI DEVELOPERS
          </span>

          <h2>Featured Projects</h2>
        </div>

        <div className="featured-projects-grid">
          {projects.map((project) => (
            <article
              key={project.href}
              className="project-card"
            >
              <div className="project-card-image-wrapper">
                <Image
                  src="/images/hero/hero-1.png"
                  alt={project.title}
                  width={700}
                  height={500}
                  className="project-card-image"
                />
              </div>

              <div className="project-card-content">
                <span className="project-card-category">
                  AL GHANI DEVELOPERS
                </span>

                <h3 className="project-card-title">
                  {project.title}
                </h3>

                <Link
                  href={project.href}
                  className="project-card-link"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-projects-button">
          <Link
            href="/projects"
            className="primary-button"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}