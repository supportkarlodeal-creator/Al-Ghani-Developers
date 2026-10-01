import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./al-ghani-phase-iii.module.css";

const amenities = [
  {
    title: "Masjid",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/mosque-1-150x150-1.png",
  },
  {
    title: "Park",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/playground-1-150x150-1.png",
  },
  {
    title: "School",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/Aminities-1.png",
  },
  {
    title: "Sewerage System",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/Aminities.png",
  },
  {
    title: "Shuttle Service",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/ambulance.png",
  },
  {
    title: "Water Filtration Plant",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/water-filter.png",
  },
  {
    title: "24/7 Hours Security",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/cctv.png",
  },
  {
    title: "Commercial Avenue",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/store.png",
  },
  {
    title: "Building Control Department",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/garage.png",
  },
];

export default function AlGhaniPhaseIIIPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =========================================================
            HERO
            IMAGE ONLY — NO TEXT / NO CAPTION
        ========================================================= */}
        <section className={styles.hero}>
          <Image
            src="https://alghani.com.pk/wp-content/uploads/2025/02/Web-Banner-Slider.jpg"
            alt="Al Ghani Garden Phase III"
            width={1920}
            height={700}
            priority
            sizes="100vw"
            className={styles.heroImage}
            unoptimized
          />
        </section>

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              {/* LOGO / GRAPHIC — NOT A BLOCK IMAGE */}
              <div className={styles.introLogo}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2025/06/3-3.jpg"
                  alt="Al Ghani Garden Phase III"
                  width={500}
                  height={500}
                  sizes="(max-width: 900px) 70vw, 420px"
                  className={styles.logoImage}
                  unoptimized
                />
              </div>

              <div className={styles.introContent}>
                <span className={styles.sectionEyebrow}>
                  AL GHANI GARDEN PHASE III
                </span>

                <h2>Phase 3</h2>

                <p>
                  Phase 3 brings a perfect community designed for the middle
                  class, with lush green roads and a reflexotherapy walking
                  track, ensuring a serene and healthy living environment for
                  all residents.
                </p>

                <p>
                  Phase 3 offers a range of amenities, including a mosque,
                  school, park, jogging track, and carpeted roads.
                </p>

                <h3>
                  Haidar Block: Beautifully Planned Plots – Designed for your
                  dream home.
                </h3>

                <p>
                  Haider Block offers lasting value, peaceful surroundings,
                  and modern lifestyle.
                </p>

                <div className={styles.buttonRow}>
                  <a
                    href="https://www.google.com/maps/dir//Al%2BGhani%2BGarden%2BPhase%2B3%2BYadgar-e-Shahuda%2BRoad%2BPhase%2B3%2BAl%2BGhani%2BGarden%2C%2BLahore%2C%2BPunjab/%4031.6020652%2C74.4575362%2C13z"
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
            KEY HIGHLIGHTS
        ========================================================= */}
        <section className={styles.highlightsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>AL GHANI GARDEN PHASE III</span>
              <h2>Key Highlights</h2>
            </div>

            <div className={styles.highlightGrid}>
              <article className={styles.highlightCard}>
                <div className={styles.highlightNumber}>01</div>

                <h3>Premium Living Spaces</h3>

                <p>
                  Discover beautifully designed residential units that exude
                  elegance and functionality. From 5 marla to 1 kanal spacious
                  plots, we offer a range of housing options to suit your
                  preferences and requirements.
                </p>
              </article>

              <article className={styles.highlightCard}>
                <div className={styles.highlightNumber}>02</div>

                <h3>Modern Security</h3>

                <p>
                  Your safety is our top priority. Our housing society boasts
                  a state-of-the-art security system, including surveillance
                  cameras, access control, and trained security personnel,
                  ensuring you and your loved ones are protected at all times.
                </p>
              </article>

              <article className={styles.highlightCard}>
                <div className={styles.highlightNumber}>03</div>

                <h3>Lifestyle Amenities</h3>

                <p>
                  Embrace a fulfilling lifestyle with our range of amenities.
                  From parks and recreational areas to a fully equipped
                  commercial zone, there&apos;s something for everyone to
                  enjoy.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            EXTENDED SOCIETY / KINGS LANE
        ========================================================= */}
        <section className={styles.extendedSection}>
          <div className={styles.container}>
            <div className={styles.extendedGrid}>
              <div className={styles.extendedContent}>
                <span className={styles.sectionEyebrow}>
                  EXTENDED SOCIETY
                </span>

                <h2>Now Extending Towards Kings Lane</h2>

                <p>
                  Now that you have appreciated our efforts on phase 3, we are
                  extending the land by the name of Kings Lane with even more
                  luxury experience.
                </p>

                <Link
                  href="/kings-lane"
                  className={styles.primaryButton}
                >
                  EXPLORE KINGS LANE
                </Link>
              </div>

              <div className={styles.extendedImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/5.jpg"
                  alt="Al Ghani Phase III"
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
            AMENITIES
        ========================================================= */}
        <section className={styles.amenitiesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>PHASE III</span>
              <h2>AMENITIES</h2>
            </div>

            <div className={styles.amenitiesGrid}>
              {amenities.map((amenity) => (
                <div
                  key={amenity.title}
                  className={styles.amenityCard}
                >
                  <div className={styles.amenityIcon}>
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      sizes="85px"
                      className={styles.containImage}
                      unoptimized
                    />
                  </div>

                  <h3>{amenity.title}</h3>
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
              <span>AL GHANI GARDEN PHASE III</span>
              <h2>PAYMENT PLAN</h2>
            </div>

            <div className={styles.paymentBlock}>
              <div className={styles.paymentHeading}>
                <h3>Payment Plan (Option I)</h3>
              </div>

              <div className={styles.paymentImageBox}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-15-at-12.10.22-PM.jpeg"
                  alt="Al Ghani Phase III Payment Plan Option I"
                  width={1200}
                  height={850}
                  sizes="(max-width: 900px) 100vw, 1100px"
                  className={styles.paymentImage}
                  unoptimized
                />
              </div>
            </div>

            <div className={styles.paymentBlock}>
              <div className={styles.paymentHeading}>
                <h3>Payment Plan (Option II)</h3>
              </div>

              <div className={styles.paymentImageBox}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/Phase-3-2-1.jpg"
                  alt="Al Ghani Phase III Payment Plan Option II"
                  width={1200}
                  height={850}
                  sizes="(max-width: 900px) 100vw, 1100px"
                  className={styles.paymentImage}
                  unoptimized
                />
              </div>
            </div>

            <p className={styles.paymentNote}>
              Corner, Facing Park &amp; main Boulevard 10% Extra
            </p>
          </div>
        </section>

        {/* =========================================================
            CONTACT / LOCATION
        ========================================================= */}
        <section className={styles.locationSection}>
          <div className={styles.locationGrid}>
            <div className={styles.locationCopy}>
              <div className={styles.locationContent}>
                <span className={styles.sectionEyebrow}>
                  AL GHANI GARDEN PHASE III
                </span>

                <h2>Contact Us</h2>

                <p>
                  Al Ghani Garden Phase 3, Yadgar-e-Shahuda Road, Phase 3 Al
                  Ghani Garden, Lahore, Punjab
                </p>

                <a
                  href="https://www.google.com/maps/dir//Al%2BGhani%2BGarden%2BPhase%2B3%2BYadgar-e-Shahuda%2BRoad%2BPhase%2B3%2BAl%2BGhani%2BGarden%2C%2BLahore%2C%2BPunjab/%4031.6020652%2C74.4575362%2C13z"
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
                title="Al Ghani Garden Phase III location"
                src="https://maps.google.com/maps?iwloc=near&output=embed&q=Al%20Ghani%20Garden%20Phase%203%2C%20Yadgar-e-Shahuda%20Road%2C%20Lahore&t=m&z=13"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactCard}>
              <div className={styles.contactContent}>
                <span className={styles.sectionEyebrow}>
                  AL GHANI DEVELOPERS
                </span>

                <h2>Today&apos;s Client, Tomorrow&apos;s Neighbour</h2>

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