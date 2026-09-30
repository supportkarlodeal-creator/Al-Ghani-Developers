import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import styles from "./olive-block.module.css";

const paymentPlan = [
  {
    size: "3 MARLA",
    total: "1,125,000",
    booking: "225,000",
    installment: "9,000",
    balloting: "225,000",
    possession: "297,000",
  },
  {
    size: "5 MARLA",
    total: "1,750,000",
    booking: "350,000",
    installment: "15,000",
    balloting: "350,000",
    possession: "420,000",
  },
  {
    size: "10 MARLA",
    total: "3,200,000",
    booking: "640,000",
    installment: "30,000",
    balloting: "640,000",
    possession: "660,000",
  },
  {
    size: "01 KANAL",
    total: "6,000,000",
    booking: "1,200,000",
    installment: "60,000",
    balloting: "1,200,000",
    possession: "1,080,000",
  },
];

const amenities = [
  "Sector Masajid",
  "Water Filtration Plant",
  "Shuttle Service",
  "Commercial Venue",
  "Planning Control Department",
  "Community Engagement",
  "Hospital",
  "Sewerage System",
  "School",
  "Sports Complex",
  "24/7 Security",
  "Amusement Park",
  "Food Court / Club",
  "Ambulance Service",
  "Qabristan",
];

const distances = [
  ["8 Minutes", "Orange Train"],
  ["8 Minutes", "Ring Road"],
  ["15 Minutes", "Airport"],
  ["15 Minutes", "DHA Phase 8"],
  ["15 Minutes", "Cantt"],
  ["18 Minutes", "Mall Road"],
];

export const metadata = {
  title: "Olive — The Green Living | Al Ghani Garden Phase 7",
  description:
    "Olive — The Green Living, Al Ghani Garden Phase 7. Residential plots in 3 Marla, 5 Marla, 10 Marla and 01 Kanal sizes.",
};

export default function OliveBlockPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/images/projects/olive-block/olive-hero.jpg"
            alt="Olive — The Green Living, Al Ghani Garden Phase 7"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span>AL GHANI GARDEN · PHASE 7</span>
            <h1>OLIVE</h1>
            <p>THE GREEN LIVING</p>
            <a href="#payment-plan" className={styles.heroButton}>
              VIEW PAYMENT PLAN
            </a>
          </div>
        </section>

        <section className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>AL GHANI GARDEN · PHASE 7</span>
              <h2>OLIVE</h2>
              <p>THE GREEN LIVING</p>
            </div>
            <p className={styles.introText}>
              Residential plots are offered in 3 Marla, 5 Marla, 10 Marla
              and 01 Kanal sizes. The supplied Olive material presents the
              project around the theme “Perfect Lifestyle with Affordability”.
            </p>
          </div>
        </section>

        <section id="payment-plan" className={styles.paymentSection}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeading} ${styles.lightHeading}`}>
              <span>RESIDENTIAL PLOTS</span>
              <h2>PAYMENT PLAN</h2>
            </div>

            <div className={styles.priceHighlight}>
              <small>42 MONTHLY INSTALLMENT</small>
              <strong>3,000</strong>
              <span>PER MARLA</span>
            </div>

            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>SIZE</th>
                    <th>TOTAL AMOUNT<br />(COST OF LAND ONLY)</th>
                    <th>BOOKING</th>
                    <th>42 MONTHLY<br />INSTALLMENT</th>
                    <th>BALLOTING</th>
                    <th>POSSESSION</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentPlan.map((row) => (
                    <tr key={row.size}>
                      <td>{row.size}</td>
                      <td>{row.total}</td>
                      <td>{row.booking}</td>
                      <td>{row.installment}</td>
                      <td>{row.balloting}</td>
                      <td>{row.possession}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={styles.disclaimer}>* Development Charges Extra.</p>
          </div>
        </section>

        <section className={styles.amenitiesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>OLIVE · THE GREEN LIVING</span>
              <h2>Perfect</h2>
              <p>Lifestyle with Affordability</p>
            </div>

            <div className={styles.amenitiesTitle}>AMENITIES</div>

            <div className={styles.amenitiesGrid}>
              {amenities.map((item) => (
                <div key={item} className={styles.amenity}>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.amenitiesSourceImage}>
              <Image
                src="/images/projects/olive-block/olive-amenities.png"
                alt="Amenities artwork from the supplied Olive flyer"
                width={1110}
                height={410}
                sizes="(max-width: 900px) 100vw, 1110px"
              />
            </div>

            <p className={styles.sourceNote}>
              The original supplied flyer artwork is retained below so the
              page does not silently reinterpret wording that is difficult to
              read from the graphic.
            </p>
          </div>
        </section>

        <section className={styles.masterPlanSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>ORIGINAL PROPOSED MASTER PLAN</span>
              <h2>Olive Master Plan</h2>
              <p>Designed by MEINHARDT Pakistan Pvt. Ltd.</p>
            </div>

            <div className={styles.largeImage}>
              <Image
                src="/images/projects/olive-block/olive-master-plan.png"
                alt="Original proposed Olive master plan by Meinhardt"
                width={1191}
                height={830}
                sizes="(max-width: 900px) 100vw, 1100px"
              />
            </div>
          </div>
        </section>

        <section className={styles.locationSection}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeading} ${styles.lightHeading}`}>
              <span>AL GHANI GARDEN · PHASE 7</span>
              <h2>LOCATION</h2>
            </div>

            <div className={styles.locationGrid}>
              <div className={styles.locationImage}>
                <Image
                  src="/images/projects/olive-block/olive-location-map.png"
                  alt="Olive location map"
                  width={1191}
                  height={755}
                  sizes="(max-width: 900px) 100vw, 700px"
                />
              </div>

              <div className={styles.distanceCard}>
                <h3>LOCATION HIGHLIGHTS</h3>

                {distances.map(([time, place]) => (
                  <div key={place} className={styles.distanceRow}>
                    <strong>{time}</strong>
                    <span>{place}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className={styles.registrySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>FROM THE SUPPLIED OLIVE FLYER</span>
              <h2>Registry & Transfer</h2>
            </div>

            <div className={styles.registryImage}>
              <Image
                src="/images/projects/olive-block/olive-registry-tahaffuz.png"
                alt="Registry and transfer information from Olive flyer"
                width={415}
                height={580}
                sizes="(max-width: 700px) 100vw, 415px"
              />
            </div>
          </div>
        </section> */}

        <section className={styles.campaignSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>OLIVE · THE GREEN LIVING</span>
              <h2>Campaign</h2>
            </div>

            <div className={styles.campaignGrid}>
              {[
                "olive-offer-1.jpg",
                "olive-offer-2.jpg",
                "olive-offer-3.jpg",
              ].map((image, index) => (
                <div className={styles.campaignCard} key={image}>
                  <Image
                    src={`/images/projects/olive-block/${image}`}
                    alt={`Olive campaign creative ${index + 1}`}
                    width={819}
                    height={2048}
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.container}>
            <span>AL GHANI GARDEN · PHASE 7</span>
            <h2>OLIVE</h2>
            <p>THE GREEN LIVING</p>

            <div className={styles.ctaActions}>
              <a href="tel:+92-307-3777841">CALL +92-307-3777841</a>
              <a
                href="https://wa.me/923073777841"
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}
