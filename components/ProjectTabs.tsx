import Link from "next/link";

const projects = [
  {
    label: "Square Avenue",
    href: "/square-avenue",
  },
  {
    label: "Al Ghani Garden Phase 7",
    href: "/alghani",
  },
  {
    label: "Al Ghani Garden Phase 1",
    href: "/al-ghani-phase-i",
  },
  {
    label: "Al Ghani Garden Phase 3",
    href: "/al-ghani-phase-iii",
  },
  {
    label: "Al Ghani Garden Phase 2",
    href: "/al-ghani-phase-ii",
  },
  {
    label: "Kings Lane",
    href: "/kings-lane",
  },
  {
    label: "Azmat Heights",
    href: "/azmat-heights",
  },
];

export default function ProjectTabs() {
  return (
    <section
      id="projects"
      className="project-tabs-section"
    >
      <div className="container">
        <div className="section-heading">
          <span className="section-small-title">
            OUR PROJECTS
          </span>

          <h2>Explore Our Projects</h2>
        </div>

        <div className="project-tabs">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="project-tab"
            >
              {project.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}