import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./phase-7.module.css";

const amenities = [
  "Amusement Park",
  "Food Court / Club",
  "Ambulance Service",
  "Graveyard (Cemetery)",
  "Hospital",
  "Sewerage System",
  "School",
  "Sports Complex",
  "24/7 Security",
  "Carpeted Roads",
  "Commercial Avenue",
  "E-Tag System",
  "Building Control Department",
  "Community Management",
  "Sector Mosques",
  "Landscape Maintenance",
  "Water Filtration Plant",
  "Shuttle Service",
];

function AmenityIcon({ type }: { type: number }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (type) {
    case 0:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 4v4M20 12h-4M12 20v-4M4 12h4" />
        </svg>
      );

    case 1:
      return (
        <svg {...common}>
          <path d="M5 12h14a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5Z" />
          <path d="M8 8v4M6 5v4M10 5v4M18 5v7" />
        </svg>
      );

    case 2:
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="11" rx="2" />
          <path d="M7 6V4h10v2M8 10h3v3H8zM16 10h2M5 20h14M6 17v3M18 17v3" />
        </svg>
      );

    case 3:
      return (
        <svg {...common}>
          <path d="M7 21V8a5 5 0 0 1 10 0v13" />
          <path d="M5 21h14M9 12h6M12 9v6" />
        </svg>
      );

    case 4:
      return (
        <svg {...common}>
          <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
          <path d="M9 8h6M12 5v6M8 21v-5h8v5" />
        </svg>
      );

    case 5:
      return (
        <svg {...common}>
          <path d="M4 7h16v5H4zM7 12v5M17 12v5M3 17h18M8 20h8" />
        </svg>
      );

    case 6:
      return (
        <svg {...common}>
          <path d="m3 10 9-7 9 7v10H3z" />
          <path d="M8 20v-6h8v6M10 10h4" />
        </svg>
      );

    case 7:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m8 8 8 8M16 8l-8 8M12 4v16M4 12h16" />
        </svg>
      );

    case 8:
      return (
        <svg {...common}>
          <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case 9:
      return (
        <svg {...common}>
          <path d="M3 18h18M5 18l3-10h8l3 10M10 8l2-4 2 4M9 14h6" />
        </svg>
      );

    case 10:
      return (
        <svg {...common}>
          <path d="M3 10h18v10H3zM5 10V7h14v3M3 14h18M8 14v6M16 14v6" />
        </svg>
      );

    case 11:
      return (
        <svg {...common}>
          <path d="M4 7h11l5 5v5H4z" />
          <path d="M15 7v5h5M7 11h4M9 9v4" />
        </svg>
      );

    case 12:
      return (
        <svg {...common}>
          <path d="M5 21V4h14v17M8 8h3M13 8h3M8 12h3M13 12h3M8 16h3M13 16h3" />
        </svg>
      );

    case 13:
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="3" />
          <circle cx="16" cy="9" r="3" />
          <path d="M3 19c.8-3 2.5-4 5-4s4.2 1 5 4M11 19c.8-3 2.5-4 5-4s4.2 1 5 4" />
        </svg>
      );

    case 14:
      return (
        <svg {...common}>
          <path d="M4 20h16M6 20V11a6 6 0 0 1 12 0v9M9 20v-6h6v6M3 11h18M12 5V2" />
        </svg>
      );

    case 15:
      return (
        <svg {...common}>
          <path d="M12 21s7-5.3 7-11A7 7 0 0 0 5 10c0 5.7 7 11 7 11Z" />
          <path d="M12 6v5M9.5 8.5h5" />
        </svg>
      );

    case 16:
      return (
        <svg {...common}>
          <path d="M12 3s5 5.3 5 9a5 5 0 0 1-10 0c0-3.7 5-9 5-9Z" />
          <path d="M9.5 14a3 3 0 0 0 5 1" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M7 6V4h10v2M7 18v2M17 18v2M3 12h18M7 10h3" />
        </svg>
      );
  }
}

const greenInitiatives = [
  "Street Plantation",
  "Aik Ghar — Aik Darakht",
  "Miyawaki Forest",
  "Green Roofs",
  "Sarak Kinaray — Sarsabz Nazary",
  "Ravi Kinara — Project",
  "Machu National Park Integrated Fruit Orchard, Layyah",
];

const miyawakiFeatures = [
  "Carbon Sink",
  "Cleaner Air",
  "Soil Revival",
  "Water Cycle",
  "Urban Shield",
  "Zero Waste Cycle",
  "Biodiversity Restored",
];

export default function Phase7Page() {
  return (
    <>
      <Header />

      <main className={styles.phase7Page}>
        <section className={styles.phase7Hero}>
          <Image
            src="/images/projects/phase-7/phase-7-hero.png"
            alt="Al Ghani Garden Phase 7"
            fill
            priority
            sizes="100vw"
            className={styles.phase7HeroImage}
          />

          <div className={styles.phase7HeroOverlay} />

          <div className={styles.phase7HeroContent}>
            <span className={styles.phase7Eyebrow}>
              AL GHANI DEVELOPERS
            </span>

            <h1>
              AL GHANI GARDEN
              <br />
              <span>PHASE 7</span>
            </h1>

            <p>Premium Residential Living in Eastern Lahore</p>

            <Link
              href="/contact-us"
              className={styles.phase7PrimaryButton}
            >
              GET IN TOUCH
            </Link>
          </div>
        </section>

        <section
          className={`${styles.phase7About} ${styles.sectionPadding}`}
        >
          <div
            className={`${styles.phase7Container} ${styles.phase7TwoColumn}`}
          >
            <div className={styles.phase7SectionHeading}>
              <span>ABOUT US</span>

              <h2>
                AL GHANI
                <br />
                DEVELOPERS
              </h2>
            </div>

            <div className={styles.phase7Text}>
              <p>
                Al Ghani Developers is a distinguished real estate
                development company with an established footprint
                spanning more than 800 acres and a diverse portfolio
                comprising 18,000 properties.
              </p>

              <p>
                With a strong foundation built on excellence, trust,
                and innovation, the company is committed to delivering
                high-quality developments that redefine modern living
                standards. Our strategic approach focuses on sustainable
                growth, meticulous planning, and value creation,
                ensuring long-term benefits for our stakeholders.
              </p>

              <p>
                Driven by a vision of excellence, Al Ghani Developers
                continues to shape vibrant communities through premium
                developments that reflect quality, reliability, focusing
                affordable living.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.phase7Introduction}>
          <div
            className={`${styles.phase7Container} ${styles.phase7TwoColumn}`}
          >
            <div className={styles.phase7IntroductionCopy}>
              <span className={styles.phase7SmallTitle}>
                AL GHANI GARDEN
              </span>

              <h2>PHASE 7</h2>

              <p>
                Al-Ghani Garden Phase 7 is the flagship project of
                Al-Ghani Developers and sets the benchmark for premium
                residential living in eastern Lahore.
              </p>

              <p>
                Master-planned by MEINHARDT, a globally renowned
                engineering and design firm, the project embraces the
                “5-Minute City” concept, ensuring residents have
                convenient access to essential educational,
                recreational, and commercial amenities within a
                five-minute walk.
              </p>

              <p>
                The development offers world-class infrastructure,
                contemporary urban design, and a well-organized living
                environment — all at accessible price points.
              </p>

              <p>
                Al-Ghani Garden Phase 7 exemplifies the company’s vision
                for sustainable urban growth, combining state-of-the-art
                infrastructure with cohesive, well-integrated
                communities that enhance Lahore’s modern urban
                landscape.
              </p>
            </div>

            <div className={styles.phase7Amenities}>
              <span className={styles.phase7SmallTitle}>
                AMENITIES
              </span>

              <div className={styles.phase7AmenitiesGrid}>
                {amenities.map((amenity, index) => (
                  <div
                    key={amenity}
                    className={styles.phase7Amenity}
                  >
                    <span className={styles.phase7AmenityIcon}>
                      <AmenityIcon type={index} />
                    </span>

                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.phase7MasterPlan}>
          <div className={styles.phase7ImageSection}>
            <Image
              src="/images/projects/phase-7/master-plan.png"
              alt="Al Ghani Garden Phase 7 Master Plan"
              fill
              sizes="100vw"
              className={styles.phase7FullImage}
            />

            <div className={styles.phase7ImageOverlay} />

            <div className={styles.phase7ImageTitle}>
              <span>MASTER</span>
              <strong>PLAN</strong>
            </div>
          </div>
        </section>

        <section
          className={`${styles.phase7Masjid} ${styles.sectionPadding}`}
        >
          <div
            className={`${styles.phase7Container} ${styles.phase7TwoColumn}`}
          >
            <div className={styles.phase7MasjidCopy}>
              <span className={styles.phase7SmallTitle}>
                MASJID
              </span>

              <h2>AL-AQSA</h2>

              <p>
                Masjid Al Aqsa, located in Jerusalem, Palestine, is the
                first Qibla of Muslims and one of Islam’s most revered
                places of worship. Every believer longs to visit this
                sacred site, but due to ongoing political circumstances
                and regional instability, many Muslims — particularly
                those from Pakistan — are unable to make this spiritual
                journey.
              </p>

              <p>
                To honor this deep religious connection, Al-Ghani Garden
                Phase 7 is developing a replica of Masjid Al Aqsa,
                making it the first project of its kind in the Islamic
                world. Serving as the project’s central congregational
                mosque, it will provide worshippers with a spiritually
                inspiring environment while offering an opportunity to
                experience the architectural essence of this historic
                landmark.
              </p>

              <p>
                The replica is being developed on 18 kanals of land,
                designed at a 1:16 scale of the original Temple Mount,
                which spans approximately 37 acres in Jerusalem.
              </p>

              <p>
                The project will include replicas of both Masjid Al
                Aqsa and the Dome of the Rock. The Dome of the Rock
                replica will be dedicated as an Islamic Library and
                Museum, while the replica of Masjid Al Aqsa will serve
                as the central mosque for residents of Al-Ghani Garden
                Phase 7.
              </p>

              <p>
                Beyond serving the local community, it is envisioned as
                a significant spiritual destination for Muslims across
                Pakistan, allowing visitors to experience the beauty
                and atmosphere of this iconic Islamic landmark.
              </p>
            </div>

            <div className={styles.phase7FeatureImage}>
              <Image
                src="/images/projects/phase-7/masjid-al-aqsa.png"
                alt="Masjid Al-Aqsa concept"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className={styles.phase7CoverImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.phase7Vision}>
          <div className={styles.phase7Container}>
            <div className={styles.phase7VisionImage}>
              <Image
                src="/images/projects/phase-7/town-planning.png"
                alt="Al Ghani Garden Phase 7 town planning"
                fill
                sizes="100vw"
                className={styles.phase7CoverImage}
              />
            </div>
          </div>
        </section>

        <section
          className={`${styles.phase7Education} ${styles.sectionPadding}`}
        >
          <div className={styles.phase7Container}>
            <div className={styles.phase7EducationGrid}>
              <div className={styles.phase7EducationImage}>
                <Image
                  src="/images/projects/phase-7/school.png"
                  alt="Al Ghani Garden Phase 7 School"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.phase7CoverImage}
                />
              </div>

              <div className={styles.phase7EducationCopy}>
                <span className={styles.phase7SmallTitle}>
                  SCHOOL
                </span>

                <p>
                  Al Ghani Garden Phase 7 is home to a modern and
                  inspiring school where learning meets creativity.
                  With a friendly environment, dedicated teachers,
                  and quality education, the school helps students
                  grow with confidence, knowledge, and strong values
                  for a brighter future.
                </p>
              </div>

              <div
                className={`${styles.phase7EducationCopy} ${styles.phase7University}`}
              >
                <span className={styles.phase7SmallTitle}>
                  UNIVERSITY
                </span>

                <p>
                  In collaboration with Al-Ghani Foundation,
                  Al-Ghani Developers, and Islah-e-Taleem Trust,
                  Pakistan’s first university and institute of its
                  kind is planned to be established. This proposed
                  institution will help meet the growing demand for
                  quality higher education in North and East Lahore,
                  providing students with modern learning opportunities
                  close to home.
                </p>
              </div>

              <div className={styles.phase7EducationImage}>
                <Image
                  src="/images/projects/phase-7/university.png"
                  alt="Al Ghani Garden Phase 7 University"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.phase7CoverImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.phase7GreenLiving}>
          <div className={styles.phase7Container}>
            <div className={styles.phase7GreenLivingGrid}>
              <div className={styles.phase7GreenCopy}>
                <span className={styles.phase7SmallTitle}>
                  BUILDING
                </span>

                <h2>
                  A LEGACY OF FAITH,
                  <br />
                  NATURE & FUTURE
                </h2>

                <div className={styles.phase7OliveLogo}>
                  OLIVE
                  <small>THE GREEN LIVING</small>
                </div>
              </div>

              <div className={styles.phase7GreenImage}>
                <Image
                  src="/images/projects/phase-7/olive-green-living.png"
                  alt="Olive The Green Living"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.phase7CoverImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.phase7GreenInitiative} ${styles.sectionPadding}`}
        >
          <div
            className={`${styles.phase7Container} ${styles.phase7TwoColumn}`}
          >
            <div className={styles.phase7GreenInitiativeCopy}>
              <span className={styles.phase7SmallTitle}>
                GREEN LIVING
              </span>

              <h2>INITIATIVE</h2>

              <p>
                Al Ghani’s philanthropic green living initiative is
                breathing life back into our city. Through the
                Million+ Trees Lahore Initiative.
              </p>

              <ul>
                {greenInitiatives.map((initiative) => (
                  <li key={initiative}>{initiative}</li>
                ))}
              </ul>
            </div>

            <div className={styles.phase7LandscapedImage}>
              <Image
                src="/images/projects/phase-7/landscaped-parks.png"
                alt="Landscaped Parks"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className={styles.phase7CoverImage}
              />

              <div className={styles.phase7LandscapedTitle}>
                <span>LANDSCAPED</span>
                <strong>PARKS</strong>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.phase7Miyawaki} ${styles.sectionPadding}`}
        >
          <div
            className={`${styles.phase7Container} ${styles.phase7TwoColumn}`}
          >
            <div className={styles.phase7MiyawakiCopy}>
              <span className={styles.phase7SmallTitle}>
                MIYAWAKI
              </span>

              <h2>FOREST</h2>

              <h3>
                SMALL SPACE,
                <br />
                MIGHTY ECOSYSTEM
              </h3>

              <p>
                MIYAWAKI FOREST is a dense, native woodland created
                using a Japanese technique developed by botanist Akira
                Miyawaki, where diverse native plant species are planted
                close together to accelerate natural forest growth.
              </p>

              <div className={styles.phase7MiyawakiStats}>
                <div>
                  <strong>10x</strong>
                  <span>FASTER GROWTH</span>
                </div>

                <div>
                  <strong>30x</strong>
                  <span>DENSER CANOPY</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>NATIVE SPECIES</span>
                </div>
              </div>

              <div className={styles.phase7MiyawakiFeatures}>
                {miyawakiFeatures.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </div>

            <div className={styles.phase7MiyawakiImage}>
              <Image
                src="/images/projects/phase-7/miyawaki-forest.png"
                alt="Miyawaki Forest"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className={styles.phase7CoverImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.phase7Development}>
          <div className={styles.phase7ImageSection}>
            <Image
              src="/images/projects/phase-7/development-updates.png"
              alt="Al Ghani Garden Phase 7 Development Updates"
              fill
              sizes="100vw"
              className={styles.phase7FullImage}
            />

            <div className={styles.phase7ImageOverlay} />

            <div className={styles.phase7ImageTitle}>
              <span>DEVELOPMENT</span>
              <strong>UPDATES</strong>
            </div>
          </div>
        </section>

        <section
          className={`${styles.phase7Location} ${styles.sectionPadding}`}
        >
          <div
            className={`${styles.phase7Container} ${styles.phase7TwoColumn}`}
          >
            <div className={styles.phase7LocationCopy}>
              <span className={styles.phase7SmallTitle}>
                DESIGNED BY
              </span>

              <h2>MEINHARDT</h2>

              <p>
                World’s Leading
                <br />
                Town Planning Firm
              </p>
            </div>

            <div className={styles.phase7LocationImage}>
              <Image
                src="/images/projects/phase-7/location.png"
                alt="Al Ghani Garden Phase 7 Location"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className={styles.phase7CoverImage}
              />

              <div className={styles.phase7LocationLabel}>
                <span>LOCATION</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.phase7LocationHighlights}>
          <div className={styles.phase7Container}>
            <div className={styles.phase7LocationHighlightGrid}>
              <div>
                <strong>8 MINUTES</strong>
                <span>FROM ORANGE TRAIN</span>
              </div>

              <div>
                <strong>8 MINUTES</strong>
                <span>FROM RING ROAD</span>
              </div>

              <div>
                <strong>15 MINUTES</strong>
                <span>FROM AIRPORT</span>
              </div>

              <div>
                <strong>15 MINUTES</strong>
                <span>FROM DHA PHASE 8</span>
              </div>

              <div>
                <strong>15 MINUTES</strong>
                <span>FROM CANTT</span>
              </div>

              <div>
                <strong>18 MINUTES</strong>
                <span>FROM MALL ROAD</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.phase7Tahaffuz} ${styles.sectionPadding}`}
        >
          <div
            className={`${styles.phase7Container} ${styles.phase7TwoColumn}`}
          >
            <div className={styles.phase7TahaffuzImage}>
              <Image
                src="/images/projects/phase-7/tahaffuz.png"
                alt="Al Ghani Tahaffuz"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className={styles.phase7CoverImage}
              />
            </div>

            <div className={styles.phase7TahaffuzCopy}>
              <span className={styles.phase7SmallTitle}>
                AL-GHANI
              </span>

              <h2>TAHAFFUZ</h2>

              <h3>
                CREATING HISTORY
                <br />
                A NEW NORM!
              </h3>

              <p>
                For the very first time in real estate’s history, in
                the unfortunate event of the plot allottee’s demise
                during the installment tenure, all outstanding
                installments will be fully waived.
              </p>

              <p>
                The ownership of the plot, file, or land will be
                seamlessly transferred to the designated nominee or
                legal heirs, in accordance with the applicable terms
                and conditions, with no additional charges levied.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.phase7Cta}>
          <div className={styles.phase7Container}>
            <span>AL GHANI GARDEN</span>

            <h2>PHASE 7</h2>

            <p>
              Discover a thoughtfully planned community in eastern
              Lahore.
            </p>

            <Link
              href="/contact-us"
              className={styles.phase7PrimaryButton}
            >
              CONTACT US
            </Link>
          </div>
        </section>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}