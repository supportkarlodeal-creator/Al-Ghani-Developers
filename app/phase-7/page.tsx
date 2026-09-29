import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

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

      <main className="phase7-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="phase7-hero">
          <Image
            src="/images/projects/phase-7/phase-7-hero.png"
            alt="Al Ghani Garden Phase 7"
            fill
            priority
            sizes="100vw"
            className="phase7-hero-image"
          />

          <div className="phase7-hero-overlay" />

          <div className="phase7-hero-content">
            <span className="phase7-eyebrow">
              AL GHANI DEVELOPERS
            </span>

            <h1>
              AL GHANI GARDEN
              <br />
              <span>PHASE 7</span>
            </h1>

            <p>
              Premium Residential Living in Eastern Lahore
            </p>

            <Link
              href="/contact-us"
              className="phase7-primary-button"
            >
              GET IN TOUCH
            </Link>
          </div>
        </section>

        {/* =====================================================
            ABOUT US
        ===================================================== */}

        <section className="phase7-about section-padding">
          <div className="phase7-container phase7-two-column">

            <div className="phase7-section-heading">
              <span>ABOUT US</span>
              <h2>
                AL GHANI
                <br />
                DEVELOPERS
              </h2>
            </div>

            <div className="phase7-text">
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

        {/* =====================================================
            PHASE 7 INTRO + AMENITIES
        ===================================================== */}

        <section className="phase7-introduction">
          <div className="phase7-container phase7-two-column">

            <div className="phase7-introduction-copy">

              <span className="phase7-small-title">
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

            <div className="phase7-amenities">

              <span className="phase7-small-title">
                AMENITIES
              </span>

              <div className="phase7-amenities-grid">
                {amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="phase7-amenity"
                  >
                    <span className="phase7-amenity-icon">
                      +
                    </span>

                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            MASTER PLAN
        ===================================================== */}

        <section className="phase7-master-plan">

          <div className="phase7-image-section">
            <Image
              src="/images/projects/phase-7/master-plan.png"
              alt="Al Ghani Garden Phase 7 Master Plan"
              fill
              sizes="100vw"
              className="phase7-full-image"
            />

            <div className="phase7-image-overlay" />

            <div className="phase7-image-title">
              <span>MASTER</span>
              <strong>PLAN</strong>
            </div>
          </div>

        </section>

        {/* =====================================================
            MASJID AL-AQSA
        ===================================================== */}

        <section className="phase7-masjid section-padding">
          <div className="phase7-container phase7-two-column">

            <div className="phase7-masjid-copy">

              <span className="phase7-small-title">
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

            <div className="phase7-feature-image">
              <Image
                src="/images/projects/phase-7/masjid-al-aqsa.png"
                alt="Masjid Al-Aqsa concept"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className="phase7-cover-image"
              />
            </div>

          </div>
        </section>

        {/* =====================================================
            TOWN PLANNING / VISION
        ===================================================== */}

        <section className="phase7-vision">
          <div className="phase7-container">

            <div className="phase7-vision-image">
              <Image
                src="/images/projects/phase-7/town-planning.png"
                alt="Al Ghani Garden Phase 7 town planning"
                fill
                sizes="100vw"
                className="phase7-cover-image"
              />
            </div>

          </div>
        </section>

        {/* =====================================================
            SCHOOL + UNIVERSITY
        ===================================================== */}

        <section className="phase7-education section-padding">
          <div className="phase7-container">

            <div className="phase7-education-grid">

              <div className="phase7-education-image">
                <Image
                  src="/images/projects/phase-7/school.png"
                  alt="Al Ghani Garden Phase 7 School"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className="phase7-cover-image"
                />
              </div>

              <div className="phase7-education-copy">
                <span className="phase7-small-title">
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

              <div className="phase7-education-copy phase7-university">
                <span className="phase7-small-title">
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

              <div className="phase7-education-image">
                <Image
                  src="/images/projects/phase-7/university.png"
                  alt="Al Ghani Garden Phase 7 University"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className="phase7-cover-image"
                />
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            OLIVE / GREEN LIVING
        ===================================================== */}

        <section className="phase7-green-living">
          <div className="phase7-container">

            <div className="phase7-green-living-grid">

              <div className="phase7-green-copy">
                <span className="phase7-small-title">
                  BUILDING
                </span>

                <h2>
                  A LEGACY OF FAITH,
                  <br />
                  NATURE & FUTURE
                </h2>

                <div className="phase7-olive-logo">
                  OLIVE
                  <small>THE GREEN LIVING</small>
                </div>
              </div>

              <div className="phase7-green-image">
                <Image
                  src="/images/projects/phase-7/olive-green-living.png"
                  alt="Olive The Green Living"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className="phase7-cover-image"
                />
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            GREEN LIVING INITIATIVE
        ===================================================== */}

        <section className="phase7-green-initiative section-padding">
          <div className="phase7-container phase7-two-column">

            <div className="phase7-green-initiative-copy">

              <span className="phase7-small-title">
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

            <div className="phase7-landscaped-image">
              <Image
                src="/images/projects/phase-7/landscaped-parks.png"
                alt="Landscaped Parks"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className="phase7-cover-image"
              />

              <div className="phase7-landscaped-title">
                <span>LANDSCAPED</span>
                <strong>PARKS</strong>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            MIYAWAKI FOREST
        ===================================================== */}

        <section className="phase7-miyawaki section-padding">
          <div className="phase7-container phase7-two-column">

            <div className="phase7-miyawaki-copy">

              <span className="phase7-small-title">
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

              <div className="phase7-miyawaki-stats">
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

              <div className="phase7-miyawaki-features">
                {miyawakiFeatures.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

            </div>

            <div className="phase7-miyawaki-image">
              <Image
                src="/images/projects/phase-7/miyawaki-forest.png"
                alt="Miyawaki Forest"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className="phase7-cover-image"
              />
            </div>

          </div>
        </section>

        {/* =====================================================
            DEVELOPMENT UPDATES
        ===================================================== */}

        <section className="phase7-development">
          <div className="phase7-image-section">

            <Image
              src="/images/projects/phase-7/development-updates.png"
              alt="Al Ghani Garden Phase 7 Development Updates"
              fill
              sizes="100vw"
              className="phase7-full-image"
            />

            <div className="phase7-image-overlay" />

            <div className="phase7-image-title">
              <span>DEVELOPMENT</span>
              <strong>UPDATES</strong>
            </div>

          </div>
        </section>

        {/* =====================================================
            LOCATION
        ===================================================== */}

        <section className="phase7-location section-padding">
          <div className="phase7-container phase7-two-column">

            <div className="phase7-location-copy">

              <span className="phase7-small-title">
                DESIGNED BY
              </span>

              <h2>
                MEINHARDT
              </h2>

              <p>
                World’s Leading
                <br />
                Town Planning Firm
              </p>

            </div>

            <div className="phase7-location-image">

              <Image
                src="/images/projects/phase-7/location.png"
                alt="Al Ghani Garden Phase 7 Location"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className="phase7-cover-image"
              />

              <div className="phase7-location-label">
                <span>LOCATION</span>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            LOCATION HIGHLIGHTS
        ===================================================== */}

        <section className="phase7-location-highlights">
          <div className="phase7-container">

            <div className="phase7-location-highlight-grid">

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

        {/* =====================================================
            AL GHANI TAHAFFUZ
        ===================================================== */}

        <section className="phase7-tahaffuz section-padding">
          <div className="phase7-container phase7-two-column">

            <div className="phase7-tahaffuz-image">
              <Image
                src="/images/projects/phase-7/tahaffuz.png"
                alt="Al Ghani Tahaffuz"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className="phase7-cover-image"
              />
            </div>

            <div className="phase7-tahaffuz-copy">

              <span className="phase7-small-title">
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

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="phase7-cta">
          <div className="phase7-container">

            <span>AL GHANI GARDEN</span>

            <h2>
              PHASE 7
            </h2>

            <p>
              Discover a thoughtfully planned community in eastern
              Lahore.
            </p>

            <Link
              href="/contact-us"
              className="phase7-primary-button"
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