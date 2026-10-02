import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.css";

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
      className={`${styles.aboutProject} ${className}`}
    >
      <div className={styles.aboutProjectImage}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
          className={styles.aboutProjectImageElement}
        />
      </div>

      <div className={styles.aboutProjectTitle}>
        {title}
      </div>
    </Link>
  );
}

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>

        {/* =================================================
            SECTION INTRO
        ================================================= */}

        <div className={styles.aboutIntro}>
          <span className={styles.aboutEyebrow}>
            AFFORDABLE HOUSING SOCIETY IN LAHORE
          </span>

          <h2 className={styles.aboutHeading}>
            AL GHANI DEVELOPERS
          </h2>

          <p className={styles.aboutIntroText}>
            Al Ghani Developers Is A Renowned Real
            Estate Development Company With A
            Footprint Of Almost 700 Acres Of Land
            Comprising More Than 12,000 Properties.
          </p>

          <p className={styles.aboutLocation}>
            Main G.T Road, 2km Quaid-e-azam
            Interchange, Ring Road, Lahore.
          </p>
        </div>

        {/* =================================================
            COMPLETE PROJECT SHOWCASE
        ================================================= */}

        <div className={styles.aboutProjectShowcase}>

          {/* LEFT LARGE IMAGE */}

          <ProjectImage
            title="Square Avenue"
            image="/images/about/square-avenue.png"
            className={styles.projectSquare}
            href="/square-avenue"
          />

          {/* RIGHT TOP */}

          <div className={styles.aboutRightTop}>
            <ProjectImage
              title="AL GHANI GARDEN PHASE 7"
              image="/images/about/33322999.jpeg"
              className={styles.projectPhase7}
              href="/phase-7"
            />

            <ProjectImage
              title="AL GHANI GARDEN PHASE 1"
              image="/images/about/phase-1.png"
              className={styles.projectPhase1}
              href="/al-ghani-phase-i"
            />
          </div>

          {/* BOTTOM PROJECTS */}

          <div className={styles.aboutBottomProjects}>

            <ProjectImage
              title="AL GHANI GARDEN PHASE 3"
              image="/images/about/phase-3.png"
              className={styles.projectPhase3}
              href="/al-ghani-phase-iii"
            />

            <ProjectImage
              title="AL GHANI GARDEN PHASE 2"
              image="/images/about/phase-2.png"
              className={styles.projectPhase2}
              href="/al-ghani-phase-ii"
            />

            <ProjectImage
              title="KINGS LANE"
              image="/images/about/kings-lane.png"
              className={styles.projectKingsLane}
              href="/kings-lane"
            />

          </div>
        </div>
      </div>
    </section>
  );
}