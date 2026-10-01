import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import styles from "./phase-i.module.css";

const HERO_IMAGE =
  "https://alghani.com.pk/wp-content/uploads/2024/11/unnamed-file.png";

const PHASE_1_LOGO =
  "https://alghani.com.pk/wp-content/uploads/2023/01/Al-Ghani-Phase-I.png";

const PHASE_1_IMAGE =
  "https://alghani.com.pk/wp-content/uploads/2023/01/1.png";

const GARDEN_IMAGE =
  "https://alghani.com.pk/wp-content/uploads/2023/01/2.jpg";

const PHASE_2_LOGO =
  "https://alghani.com.pk/wp-content/uploads/2023/01/Al-Ghani-Phase-II.png";

const amenities = [
  {
    name: "School",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/Aminities-1.png",
  },
  {
    name: "Masjid",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/mosque-1-150x150-1.png",
  },
  {
    name: "Park",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/playground-1-150x150-1.png",
  },
  {
    name: "Water Filteration",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/water-filter.png",
  },
  {
    name: "Commercial Avenue",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/store.png",
  },
  {
    name: "Proper Sewerage System",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/Aminities.png",
  },
  {
    name: "Gated Society",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/access.png",
  },
  {
    name: "Modern Security System",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/cctv.png",
  },
];

const phase1Map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25842.69588825431!2d74.4206288743164!3d31.592989100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191100443cf2f5%3A0xb16ef3940a22a8c4!2sAl%20Ghani%20Garden%20Phase%201!5e1!3m2!1sen!2sus!4v1790837919424!5m2!1sen!2sus";

const phase2Map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.2862472182956!2d74.45294773178088!3d31.5944523076054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391911cbfaf7ac65%3A0x48e8fc440967fd88!2sPhase%202%20Al%20Ghani%20Garden%2C%20Lahore%2C%20Pakistan!5e1!3m2!1sen!2sus!4v1790838016956!5m2!1sen!2sus";

export default function AlGhaniPhaseIPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className={styles.hero}>
          <Image
            src={HERO_IMAGE}
            alt="Al Ghani Garden Phase I"
            width={1920}
            height={700}
            priority
            sizes="100vw"
            className={styles.heroImage}
            unoptimized
          />
        </section>


        {/* =====================================================
            PHASE I LOGO
        ===================================================== */}

        <section className={styles.logoSection}>
          <div className={styles.container}>
            <Image
              src={PHASE_1_LOGO}
              alt="Al Ghani Garden Phase I"
              width={180}
              height={140}
              className={styles.topLogo}
              unoptimized
            />
          </div>
        </section>


        {/* =====================================================
            FIRST ROW
            TEXT LEFT / IMAGE RIGHT
        ===================================================== */}

        <section className={styles.firstSection}>
          <div className={styles.container}>

            <div className={styles.firstRow}>

              <div className={styles.firstContent}>

                <p>
                  Al Ghani Garden Phase 1 is located at a prime location,
                  just 2 km from the Quaid-e-Azam Interchange on GT Road.
                  A blissful society, offering a small and close-knit
                  community, Additionally the head office of Al Ghani
                  Developers is situated within this phase. ensuring direct
                  access and support for all residents.
                </p>

                <div className={styles.buttons}>

                  <a
                    href={phase1Map}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.locationButton}
                  >
                    VIEW LOCATION
                  </a>

                  <a
                    href="#contact"
                    className={styles.bookButton}
                  >
                    BOOK NOW
                  </a>

                </div>

              </div>


              <div className={styles.firstImage}>
                <Image
                  src={PHASE_1_IMAGE}
                  alt="Al Ghani Garden Phase I"
                  width={900}
                  height={600}
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.contentImage}
                  unoptimized
                />
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            SECOND ROW
            IMAGE LEFT / LOGO + TEXT RIGHT
        ===================================================== */}

        <section className={styles.secondSection}>
          <div className={styles.container}>

            <div className={styles.secondRow}>

              <div className={styles.secondImage}>
                <Image
                  src={GARDEN_IMAGE}
                  alt="Al Ghani Garden Phase I"
                  width={900}
                  height={600}
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.contentImage}
                  unoptimized
                />
              </div>


              <div className={styles.secondContent}>

                <Image
                  src={PHASE_2_LOGO}
                  alt="Al Ghani Garden Phase II"
                  width={110}
                  height={90}
                  className={styles.secondLogo}
                  unoptimized
                />

                <p>
                  In view of growing housing demand in the city, Al Ghani
                  gardens has built a quality housing project in a prime
                  location that covers an area of 50 acres, It’s well designed
                  and planned by seasoned architects. Our aim is to develop
                  residential and commercial signature projects that meet the
                  market needs and requirements with high competencies and an
                  integrated team.
                </p>

                <p>
                  Many facilities are provided in phase 2 to make the life of
                  residents easy, such as 24 hours of electricity supply, so
                  the residents do not have to face any difficulty in any
                  season; markets, parks, graveyards, and educational
                  institutes.
                </p>

                <div className={styles.buttons}>

                  <a
                    href={phase2Map}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.locationButton}
                  >
                    VIEW LOCATION
                  </a>

                  <a
                    href="#contact"
                    className={styles.bookButton}
                  >
                    BOOK NOW
                  </a>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            AMENITIES
        ===================================================== */}

        <section className={styles.amenitiesSection}>
          <div className={styles.container}>

            <div className={styles.sectionHeading}>
              <span>AL GHANI GARDEN PHASE I</span>
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
                      width={150}
                      height={150}
                      className={styles.amenityImage}
                      unoptimized
                    />
                  </div>

                  <h3>{amenity.name}</h3>
                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
    LOCATION
===================================================== */}

<section className={styles.locationsSection}>
  <div className={styles.container}>

    <div className={styles.locationHeading}>
      <span>AL GHANI GARDEN</span>
      <h2>LOCATION</h2>
    </div>

    <div className={styles.mapsGrid}>

      {/* PHASE I */}

      <div className={styles.mapColumn}>

        <h3>Phase I Location</h3>

        <div className={styles.mapWrapper}>
          <iframe
            title="Al Ghani Garden Phase I Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25842.69588825431!2d74.4206288743164!3d31.592989100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191100443cf2f5%3A0xb16ef3940a22a8c4!2sAl%20Ghani%20Garden%20Phase%201!5e1!3m2!1sen!2sus!4v1790837919424!5m2!1sen!2sus"
            loading="lazy"
          />
        </div>

      </div>


      {/* PHASE II */}

      <div className={styles.mapColumn}>

        <h3>Phase II Location</h3>

        <div className={styles.mapWrapper}>
          <iframe
            title="Al Ghani Garden Phase II Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.2862472182956!2d74.45294773178088!3d31.5944523076054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391911cbfaf7ac65%3A0x48e8fc440967fd88!2sPhase%202%20Al%20Ghani%20Garden%2C%20Lahore%2C%20Pakistan!5e1!3m2!1sen!2sus!4v1790838016956!5m2!1sen!2sus"
            loading="lazy"
          />
        </div>

      </div>

    </div>

  </div>
</section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className={styles.contactSection}
        >
          <div className={styles.contactInner}>

            <span>CONTACT US</span>

            <h2>
              Today&apos;s Client, Tomorrow&apos;s Neighbour
            </h2>

            <a
              href="#contact"
              className={styles.contactButton}
            >
              BOOK NOW
            </a>

          </div>
        </section>

      </main>

      <FloatingActions />

      <Footer />
    </>
  );
}