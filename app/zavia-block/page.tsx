import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import styles from "./zavia-block.module.css";

const salesNumber = "923278754344";
const whatsappHref = `https://wa.me/${salesNumber}?text=${encodeURIComponent(
  "Hello, I would like information about Al Ghani Garden Phase 7 - Zavia Block."
)}`;

const amenities = [
  ["Educational Institutions", "educational.png"],
  ["Grand Masjid", "masjid.png"],
  ["Family Parks", "parks.png"],
  ["Water Filteration", "water-filteration.png"],
  ["Shopping Centers", "shopping.png"],
  ["Proper Sewerage System", "sewerage.png"],
  ["Gated Society", "gated.png"],
  ["Modern Security System", "security.png"],
];

const developmentImages = Array.from(
  { length: 12 },
  (_, i) => `/images/projects/zavia-block/development-${String(i + 1).padStart(2, "0")}.jpg`
);

const spotlightImages = Array.from(
  { length: 16 },
  (_, i) => `/images/projects/zavia-block/spotlight-${String(i + 1).padStart(2, "0")}.jpg`
);

const ceremonyImages = Array.from(
  { length: 12 },
  (_, i) => `/images/projects/zavia-block/ceremony-${String(i + 1).padStart(2, "0")}.jpg`
);

export const metadata = {
  title: "Al Ghani Garden Phase 7 - Zavia Block",
  description:
    "Al Ghani Garden Phase 7 - Zavia Block. Affordable plots with premium amenities, easy installment plans and a prime location.",
};

export default function ZaviaBlockPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/images/projects/zavia-block/hero.png"
            alt="Al Ghani Garden Phase 7 - Zavia Block"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span>AL GHANI GARDEN</span>
            <h1>PHASE 7</h1>
            <h2>ZAVIA BLOCK</h2>
            <p>Perfect Lifestyle With Affordability</p>
            <div className={styles.heroActions}>
              <a href="#location" className={styles.primaryButton}>
                VIEW LOCATION
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className={styles.secondaryButton}>
                BOOK NOW
              </a>
            </div>
          </div>
        </section>

        <section className={styles.intro}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>AL GHANI GARDEN PHASE 7</span>
            <h2>Al Ghani Garden Phase 7 - Zavia Block</h2>
            <p>
              Welcome to Zavia Block – a modern extension of Al Ghani Garden
              Phase 7, offering affordable plots with premium amenities and a
              prime location. With easy installment plans, secure investment
              opportunities, and a peaceful community lifestyle, Zavia Block
              is the perfect choice for both living and investing in Lahore’s
              real estate market.
            </p>
          </div>
        </section>

        <section className={styles.amenities}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>AMENITIES</span>
              <h2>Everything You Need</h2>
            </div>

            <div className={styles.amenityGrid}>
              {amenities.map(([title, image]) => (
                <div className={styles.amenityCard} key={title}>
                  <div className={styles.amenityIcon}>
                    <Image
                      src={`/images/projects/zavia-block/${image}`}
                      alt={title}
                      width={90}
                      height={90}
                    />
                  </div>
                  <h3>{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.location} id="location">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>LOCATION</span>
              <h2>Al Ghani Garden Phase 7 - Zavia Block</h2>
            </div>

            <div className={styles.locationGrid}>
              <div className={styles.locationCopy}>
                <p className={styles.coordinates}></p>
                <a
                  href="https://maps.google.com/maps?q=31%C2%B039%2732.8%22N+74%C2%B029%2704.2%22E"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  VIEW LOCATION
                </a>
              </div>

              <div className={styles.map}>
                <iframe
                  title="Al Ghani Garden Phase 7 - Zavia Block location"
                  src="https://maps.google.com/maps?iwloc=near&output=embed&q=31%C2%B039%2732.8%22N+74%C2%B029%2704.2%22E&t=m&z=13"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.payment}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>PAYMENT PLAN</span>
              <h2>Al Ghani Garden Phase 7 Zavia Block</h2>
            </div>

            <div className={styles.paymentGrid}>
              <Image
                src="/images/projects/zavia-block/payment-plan-1.jpg"
                alt="Zavia Block residential payment plan"
                width={725}
                height={1024}
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <Image
                src="/images/projects/zavia-block/payment-plan-2.jpg"
                alt="Zavia Block amenities and location plan"
                width={725}
                height={1024}
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.contactBox}>
              <span className={styles.eyebrow}>CONTACT US</span>
              <h2>Have questions or need assistance?</h2>
              <p>
                Our team at Al Ghani Phase 7 is always here to help. Feel free
                to reach out to us for inquiries, bookings, or any support you
                may need. We’ll be happy to connect with you.
              </p>
              <div className={styles.contactActions}>
                <a href={`tel:+${salesNumber}`} className={styles.primaryButton}>
                  CALL SALES
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.whatsappButton}
                >
                  WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={styles.gallerySection}>
          <div className={styles.containerWide}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>LATEST DEVELOPMENT UPDATE</span>
              <h2>Latest Development Update</h2>
            </div>
            <div className={styles.galleryGrid}>
              {developmentImages.map((src, i) => (
                <div className={styles.galleryItem} key={src}>
                  <Image
                    src={src}
                    alt={`Zavia Block development update ${i + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* <section className={styles.spotlight}>
          <div className={styles.containerWide}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>THE SPOTLIGHT</span>
              <h2>The Spotlight</h2>
              <p>
                Witness key highlights of Al Ghani Garden Phase 7 as rapid
                development unfolds. The 5 Marla deal briefing with sales
                partners marked a major milestone, boosting collaboration and
                paving the way forward
              </p>
            </div>
            <div className={styles.galleryGrid}>
              {spotlightImages.map((src, i) => (
                <div className={styles.galleryItem} key={src}>
                  <Image
                    src={src}
                    alt={`Zavia Block spotlight ${i + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* <section className={styles.ceremony}>
          <div className={styles.containerWide}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>5 MARLA DEAL</span>
              <h2>5 Marla Deal Launching Ceremony</h2>
            </div>
            <div className={styles.galleryGrid}>
              {ceremonyImages.map((src, i) => (
                <div className={styles.galleryItem} key={src}>
                  <Image
                    src={src}
                    alt={`5 Marla Deal Launching Ceremony ${i + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <span className={styles.eyebrow}>ZAVIA BLOCK</span>
              <h2>Secure Your Place in Al Ghani Garden Phase 7</h2>
              <p>Contact our sales team for booking and further information.</p>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className={styles.primaryButton}>
                CONTACT SALES
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
