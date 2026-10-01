import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./awami-block.module.css";

const features = [
  "3 & 5 Marla Residential Plot",
  "Easy Monthly Installments Starting from Just Rs. 15,000",
  "Booking from Only Rs. 300,000",
  "100% Approved and Secure Investment",
  "Carpeted Wide Roads & Modern Infrastructure",
  "Parks, Masjid, Schools & Commercial Areas Nearby",
];

const amenities = [
  {
    title: "Wide Roads",
    image:
      "https://alghani.com.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-10-at-5.27.50-PM-2.jpeg",
  },
  {
    title: "Modern Infrastructure",
    image:
      "https://alghani.com.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-10-at-5.27.50-PM.jpeg",
  },
];

export default function AwamiBlockPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className={styles.hero}>
          <Image
            src="https://alghani.com.pk/wp-content/uploads/2025/03/Web-Banner.jpg"
            alt="Al Ghani Garden Phase 7 - Awami Block"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
            unoptimized
          />

          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>
              AL GHANI GARDEN PHASE 7
            </span>

            <h1>AWAMI BLOCK</h1>

            <p className={styles.heroSubtitle}>
              AFFORDABLE LIVING, PREMIUM LOCATION!
            </p>

            <div className={styles.heroButtons}>
              <a
                href="#location"
                className={styles.primaryButton}
              >
                VIEW LOCATION
              </a>

              <Link
                href="/contact-us"
                className={styles.secondaryButton}
              >
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
                  src="https://alghani.com.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-10-at-5.27.50-PM-2.jpeg"
                  alt="Al Ghani Garden Phase 7 Awami Block"
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  className={styles.coverImage}
                  unoptimized
                />
              </div>

              <div className={styles.introContent}>
                <span className={styles.sectionEyebrow}>
                  AL GHANI GARDEN PHASE 7
                </span>

                <h2>
                  Awami Block
                </h2>

                <h3>Affordable Living, Premium Location!</h3>

                <p>
                  Welcome to Awami Block, the heart of Al Ghani Garden Phase 7,
                  where affordability meets comfort in one of Lahore&apos;s
                  most sought-after locations. Designed with the common man in
                  mind, Awami Block offers budget-friendly residential plots
                  without compromising on quality, lifestyle, or accessibility.
                </p>

                <div className={styles.featureList}>
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className={styles.featureItem}
                    >
                      <span className={styles.featureCheck}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATE OF THE ART DEVELOPMENT
        ========================================================= */}
        <section className={styles.developmentSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>AL GHANI GARDEN PHASE 7</span>
              <h2>State-of-the-art Development</h2>
            </div>

            <div className={styles.developmentGrid}>
              <div className={styles.developmentImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-10-at-5.27.50-PM.jpeg"
                  alt="Awami Block development"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.coverImage}
                  unoptimized
                />
              </div>

              <div className={styles.developmentContent}>
                <span className={styles.sectionEyebrow}>
                  MODERN INFRASTRUCTURE
                </span>

                <h2>State-of-the-art Development</h2>

                <p>
                  Al Ghani Garden Phase 7 proudly introduces a state-of-the-art
                  development that not only offers modern infrastructure, wide
                  carpeted roads, and advanced utilities—but also stands out
                  with a majestic spiritual symbol
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

        {/* =========================================================
            MASJID AL-AQSA
        ========================================================= */}
        <section className={styles.masjidSection}>
          <div className={styles.container}>
            <div className={styles.masjidGrid}>
              <div className={styles.masjidContent}>
                <span className={styles.sectionEyebrow}>
                  A UNIQUE LANDMARK
                </span>

                <h2>The Replica of Masjid Al-Aqsa</h2>

                <p>
                  Experience peaceful living in a community where architectural
                  brilliance meets spiritual inspiration. This one-of-a-kind
                  feature reflects our deep-rooted values and commitment to
                  preserving Islamic heritage, right in the heart of Lahore.
                </p>

                <Link
                  href="/contact-us"
                  className={styles.primaryButton}
                >
                  BOOK NOW
                </Link>
              </div>

              <div className={styles.masjidImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2025/04/1-3-1024x606-1.jpeg"
                  alt="Replica of Masjid Al-Aqsa"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.coverImage}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PAYMENT PLAN
        ========================================================= */}
        <section className={styles.paymentSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>AWAMI BLOCK</span>
              <h2>Payment Plan</h2>
            </div>

            <div className={styles.paymentCard}>
              <Image
                src="/images/projects/awami-block/1.png"
                alt="Awami Block Payment Plan"
                width={1024}
                height={606}
                sizes="(max-width: 900px) 100vw, 1000px"
                className={styles.paymentImage}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY CHOOSE AWAMI BLOCK
        ========================================================= */}
        <section className={styles.whySection}>
          <div className={styles.container}>
            <div className={styles.whyGrid}>
              <div className={styles.whyImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-10-at-5.27.50-PM-3.jpeg"
                  alt="Al Ghani Garden Phase 7 development"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.coverImage}
                  unoptimized
                />
              </div>

              <div className={styles.whyContent}>
                <span className={styles.sectionEyebrow}>
                  AWAMI BLOCK
                </span>

                <h2>Why Choose Awami Block?</h2>

                <p>
                  Whether you&apos;re looking for your first home or a secure
                  investment opportunity, Awami Block provides the ideal
                  balance of convenience, affordability, and future growth.
                  Its location in Phase 7 of Al Ghani Garden ensures seamless
                  access to the city&apos;s key hubs while offering a serene
                  and community-driven lifestyle.
                </p>

                <div className={styles.whyHighlights}>
                  <div>
                    <strong>3 & 5</strong>
                    <span>MARLA PLOTS</span>
                  </div>

                  <div>
                    <strong>15,000</strong>
                    <span>MONTHLY INSTALLMENT</span>
                  </div>

                  <div>
                    <strong>300,000</strong>
                    <span>BOOKING FROM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PHASE 7 LOCATION
        ========================================================= */}
        <section
          id="location"
          className={styles.locationSection}
        >
          <div className={styles.locationGrid}>
            <div className={styles.locationCopy}>
              <div className={styles.locationContent}>
                <span className={styles.sectionEyebrow}>
                  AL GHANI GARDEN PHASE 7
                </span>

                <h2>Phase 7 Location</h2>

                <p>
                  Awami Block is located within Al Ghani Garden Phase 7,
                  providing convenient access to major areas of Lahore while
                  maintaining a peaceful residential environment.
                </p>

                <a
                  href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2714.4877257248604!2d74.48266453874007!3d31.65778385034417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919116734a29f65%3A0x62ce91646af9b40b!2sAl%20Ghani%20Garden%20Phase%207%20(Gate%201)!5e1!3m2!1sen!2s!4v1790835865093!5m2!1sen!2s"
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
                title="Al Ghani Garden Phase 7 - Awami Block location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2714.4877257248604!2d74.48266453874007!3d31.65778385034417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919116734a29f65%3A0x62ce91646af9b40b!2sAl%20Ghani%20Garden%20Phase%207%20(Gate%201)!5e1!3m2!1sen!2s!4v1790835865093!5m2!1sen!2s"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT
        ========================================================= */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactCard}>
              <div className={styles.contactContent}>
                <span className={styles.sectionEyebrow}>
                  AL GHANI DEVELOPERS
                </span>

                <h2>Contact Us</h2>

                <p>
                  Affordable Living, Premium Location!
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