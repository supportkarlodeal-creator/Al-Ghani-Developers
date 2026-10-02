import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./kings-lane.module.css";

const amenities = [
  {
    name: "Masjid",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/mosque-1-150x150-1.png",
  },
  {
    name: "School",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/Aminities-1.png",
  },
  {
    name: "Park",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/playground-1-150x150-1.png",
  },
  {
    name: "Life-Time Maintance",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/shield-150x150-1.png",
  },
  {
    name: "Commercial Avenue",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/store.png",
  },
  {
    name: "Water Filteration",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/water-filter.png",
  },
  {
    name: "Modern Security System",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/cctv.png",
  },
  {
    name: "Proper Sewerage System",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/Aminities.png",
  },
];

const projects = [
  {
    title: "Clock Tower",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-02-at-6.26.42-PM-2.jpeg",
    description:
      "Beyond its architectural significance, the Clock Tower serves as a gathering place, fostering a sense of belonging, to the enduring spirit of a community united by their shared history and shared aspirations through its architecture. Its presence is a constant reminder that time is both a precious gift and a fleeting entity, urging the community to seize every moment.",
  },
  {
    title: "Masjid",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/02/5-2048x1152.jpg",
    description:
      "Covering a substantial area, the mosque is meticulously designed to cater to the community needs, serving as a communal place of worship for Muslims. It exemplifies modern architecture at its finest, showcasing a masterpiece with its beautiful design surrounded by green belt.",
  },
];

export default function KingsLanePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className={styles.hero}>
          <Image
            src="https://alghani.com.pk/wp-content/uploads/2023/01/5.jpg"
            alt="Kings Lane"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
            unoptimized
          />

          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>AL GHANI DEVELOPERS</p>

            <h1>KINGS LANE</h1>

            <p className={styles.heroSubtitle}>
              A UNIQUE EXPERIENCE ON EVERY LEVEL
            </p>

            <div className={styles.heroButtons}>
              <a
                href="https://maps.app.goo.gl/RnXqMBeRJ5SstBHGA"
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                VIEW LOCATION
              </a>

              <Link href="/contact-us" className={styles.secondaryButton}>
                BOOK NOW
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div className={styles.introImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/5.jpg"
                  alt="Kings Lane"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.coverImage}
                  unoptimized
                />
              </div>

              <div className={styles.introContent}>
                <span className={styles.sectionEyebrow}>
                  KINGS LANE
                </span>

                <h2>
                  KINGS LANE
                </h2>

                <p>
                  Kings Lane,’ is ideally located at the confluence of Chahar
                  Bagh and RUDA, offering residents a prime location.
                  Additionally, Kings Lane is in close proximity to the Ring
                  Road, ensuring easy access to key areas of the city.
                </p>

                <p>
                  Currently in its development phase, this project is designed
                  to deliver ultimate perfection and a unique experience on
                  every level, offering various amenities to improve the
                  lifestyle of our residents.
                </p>

                <div className={styles.buttonRow}>
                  <a
                    href="https://maps.app.goo.gl/RnXqMBeRJ5SstBHGA"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.primaryButton}
                  >
                    VIEW LOCATION
                  </a>

                  <Link
                    href="/contact-us"
                    className={styles.outlineButton}
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PROJECT FEATURES
        ========================================================= */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`${styles.featureRow} ${
                  index % 2 !== 0 ? styles.featureRowReverse : ""
                }`}
              >
                <div className={styles.featureImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.coverImage}
                    unoptimized
                  />
                </div>

                <div className={styles.featureContent}>
                  <span className={styles.sectionEyebrow}>
                    KINGS LANE
                  </span>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className={styles.buttonRow}>
                    <a
                      href="https://maps.app.goo.gl/RnXqMBeRJ5SstBHGA"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.primaryButton}
                    >
                      VIEW LOCATION
                    </a>

                    <Link
                      href="/contact-us"
                      className={styles.outlineButton}
                    >
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            AMENITIES
        ========================================================= */}
        <section className={styles.amenitiesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>WHY KINGS LANE</span>
              <h2>AMENITIES</h2>
            </div>

            <div className={styles.amenitiesGrid}>
              {amenities.map((amenity) => (
                <div
                  key={amenity.name}
                  className={styles.amenityCard}
                >
                  <div className={styles.amenityIcon}>
                    <Image
                      src={amenity.image}
                      alt={amenity.name}
                      fill
                      sizes="90px"
                      className={styles.containImage}
                      unoptimized
                    />
                  </div>

                  <h3>{amenity.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PAYMENT PLAN
        ========================================================= */}
        <section className={styles.paymentSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>KINGS LANE</span>
              <h2>KINGS LANE PAYMENT PLAN</h2>
            </div>

            <div className={styles.paymentGrid}>
              <div className={styles.paymentCard}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2025/06/kingslane-flyer-final-22-8-24_page-0001-725x1024.jpg"
                  alt="Kings Lane payment plan"
                  width={725}
                  height={1024}
                  sizes="(max-width: 700px) 100vw, 50vw"
                  className={styles.paymentImage}
                  unoptimized
                />
              </div>

              <div className={styles.paymentCard}>
                <Image
                  src="/images/projects/kings-lane/payment.png"
                  alt="Kings Lane payment plan"
                  width={725}
                  height={1024}
                  sizes="(max-width: 700px) 100vw, 50vw"
                  className={styles.paymentImage}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LOCATION
        ========================================================= */}
        <section className={styles.locationSection}>
          <div className={styles.containerWide}>
            <div className={styles.locationGrid}>
              <div className={styles.locationCopy}>
                <div className={styles.locationContent}>
                  <span className={styles.sectionEyebrow}>
                    KINGS LANE
                  </span>

                  <h2>LOCATION</h2>

                  <p>
                    Kings Lane is ideally located at the confluence of Chahar
                    Bagh and RUDA and is in close proximity to Ring Road,
                    providing easy access to key areas of Lahore.
                  </p>

                  <a
                    href="https://maps.google.com/maps?iwloc=near&output=embed&q=31%C2%B036%2759.5%22N+74%C2%B026%2748.0%22E&t=m&z=12"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.primaryButton}
                  >
                    VIEW LOCATION
                  </a>
                </div>
              </div>

              <div className={styles.map}>
                <iframe
                  title="Kings Lane location"
                  src="https://maps.google.com/maps?iwloc=near&output=embed&q=31%C2%B036%2759.5%22N+74%C2%B026%2748.0%22E&t=m&z=12"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT / CTA
        ========================================================= */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactCard}>
              <div className={styles.contactContent}>
                <span className={styles.sectionEyebrow}>
                  KINGS LANE
                </span>

                <h2>Contact Us</h2>

                <p>
                  Today&apos;s Client, Tomorrow&apos;s Neighbour
                </p>

                <Link
                  href="/contact-us"
                  className={styles.primaryButton}
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}