import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./projects.module.css";

const projects = [
  {
    title: "AL-GHANI GARDEN PHASE I & II",
    image:
      "https://alghani.com.pk/wp-content/uploads/2024/12/phase-1-2-01-1024x819.png",
    href: "/al-ghani-phase-i",
  },
  {
    title: "AL GHANI GARDEN PHASE III",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/3-3.jpg",
    href: "/al-ghani-phase-iii",
  },
  {
    title: "KINGS LANE",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/Kings-Lane.jpg",
    href: "/kings-lane",
  },
  {
    title: "SQUARE AVENUE",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/1-1.png",
    href: "/square-avenue",
  },
  {
    title: "AL GHANI GARDEN PHASE 7",
    image:
      "https://alghani.com.pk/wp-content/uploads/2024/10/L1-e1737031360776-300x279.png",
    href: "/phase-7",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.projectsSection}>
          <div className={styles.container}>
            {/* =================================================
                PAGE HEADING
            ================================================= */}
            <div className={styles.heading}>
              <span>AL-GHANI DEVELOPERS</span>

              <h1>OUR PROJECTS</h1>

              <p>
                Al-Ghani Developers continues to innovate and transform
                Lahore&apos;s residential and commercial landscapes with
                groundbreaking projects. These achievements have made a
                significant impact in the real estate industry. Our primary
                focus is customer satisfaction, which drives the success of
                our projects. We uphold the highest quality and professional
                standards in all our projects, offering diverse services and
                flexible payment plans that enhance the value of our
                customers&apos; assets.
              </p>
            </div>

            {/* =================================================
                PROJECTS GRID
            ================================================= */}
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <article
                  key={project.href}
                  className={styles.projectCard}
                >
                  <Link
                    href={project.href}
                    className={styles.projectLink}
                  >
                    {/* PROJECT IMAGE */}
                    <div className={styles.projectImage}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                        className={styles.projectImageElement}
                        unoptimized
                      />
                    </div>

                    {/* PROJECT INFORMATION */}
                    <div className={styles.projectContent}>
                      <h2>{project.title}</h2>

                      <span className={styles.viewProject}>
                        VIEW PROJECT
                        <span className={styles.arrow}>→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FloatingActions />

      <Footer />
    </>
  );
}