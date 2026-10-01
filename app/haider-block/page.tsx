import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./haider-block.module.css";

const amenities = [
  {
    title: "School",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/Aminities-1.png",
  },
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
    title: "Building Control",
    image:
      "https://alghani.com.pk/wp-content/uploads/2024/11/Untitled-design.png",
  },
  {
    title: "Water Filteration",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/water-filter.png",
  },
  {
    title: "Commercial Avenue",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/store.png",
  },
  {
    title: "Proper Sewerage System",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/Aminities.png",
  },
  {
    title: "Gated Society",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/access.png",
  },
  {
    title: "Modern Security System",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/cctv.png",
  },
  {
    title: "Modern Security System",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/cctv.png",
  },
];

const locationUrl =
  "https://www.google.com/maps/search/?api=1&query=HFW4%2B6F6%2C%20Yadgar%20Rd%2C%20Phase%202%20Al%20Ghani%20Garden%2C%20Lahore";

const mapEmbedUrl =
  "https://maps.google.com/maps?iwloc=near&output=embed&q=HFW4%2B6F6%2C%20Yadgar%20Rd%2C%20Phase%202%20Al%20Ghani%20Garden%2C%20Lahore%2C%20Punjab%2054400&t=m&z=15";

export default function HaiderBlockPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =========================================================
            HERO
            IMAGE ONLY — NO CAPTION / NO TEXT
        ========================================================= */}
        <section className={styles.hero}>
          <Image
            src="/images/projects/haider-block/hero.png"
            alt="Haider Block - Al Ghani Garden Phase 3"
            width={1920}
            height={750}
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
            <div className={styles.introContent}>
              <span className={styles.sectionEyebrow}>
                AL GHANI GARDEN PHASE 3
              </span>

              <h1>HAIDER BLOCK</h1>

              <p>
                Haider Block - Al Ghani Garden Phase 3 offers a modern
                lifestyle with a perfect combination of comfort and
                convenience. This block is thoughtfully designed to meet the
                needs of families, ensuring a peaceful and secure living
                environment. It features a beautifully constructed Masjid for
                spiritual fulfillment, a school providing quality education,
                and a park where families can relax and children can play.
              </p>

              <p>
                The commercial avenue caters to all shopping and business
                needs, while the water filtration system ensures access to
                clean drinking water.
              </p>

              <p>
                The block is equipped with a proper sewerage system and follows
                strict building control regulations to maintain a well-structured
                community. The gated society and modern security systems provide
                a safe and secure environment for all residents. With these
                amenities, Haider Block sets the standard for contemporary
                living in Al Ghani Garden Phase 3.
              </p>

              <div className={styles.buttonRow}>
                <a
                  href={locationUrl}
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
        </section>

        {/* =========================================================
            PROJECT IMAGE
        ========================================================= */}
        <section className={styles.projectImageSection}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="https://alghani.com.pk/wp-content/uploads/2024/11/WhatsApp-Image-2023-02-02-at-6.26.44-PM-1.jpeg"
              alt="Haider Block"
              width={1600}
              height={900}
              sizes="100vw"
              className={styles.projectImage}
              unoptimized
            />
          </div>
        </section>

        {/* =========================================================
            AMENITIES
        ========================================================= */}
        <section className={styles.amenitiesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span>HAIDER BLOCK</span>
              <h2>AMENITIES</h2>
            </div>

            <div className={styles.amenitiesGrid}>
              {amenities.map((amenity, index) => (
                <div
                  key={`${amenity.title}-${index}`}
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

        {/* Payment Plan */}
<section className={styles.paymentSection}>
  <div className={styles.sectionInner}>
    <div className={styles.sectionHeading}>
      <span>HAIDER BLOCK</span>
      <h2>PAYMENT PLAN</h2>
    </div>

    <div className={styles.paymentImageWrap}>
      <Image
        src="/images/projects/haider-block/payment-plan.jpeg"
        alt="Haider Block payment plan"
        width={1244}
        height={868}
        sizes="(max-width: 900px) 100vw, 1100px"
        className={styles.paymentImage}
      />
    </div>
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
                  HAIDER BLOCK
                </span>

                <h2>Contact Us</h2>

                <p>
                  Al ghani gardens phase II, HFW4+6F6, Yadgar Rd, Phase 2 Al
                  Ghani Garden, Lahore, Punjab 54400
                </p>

                <a
                  href={locationUrl}
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
                title="Haider Block location"
                src={mapEmbedUrl}
                loading="lazy"
              />
            </div>
          </div>
        </section>
        
        {/* YouTube Videos */}
<section className={styles.videosSection}>
  <div className={styles.videosContainer}>
    <div className={styles.videosGrid}>

      <a
        href="https://www.youtube.com/watch?v=pKWvsihIHcQ"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.videoCard}
      >
        <div className={styles.videoFrame}>
          <Image
            src="https://img.youtube.com/vi/pKWvsihIHcQ/maxresdefault.jpg"
            alt="Al Ghani Garden Phase 3 - Haider Block"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw"
            className={styles.videoImage}
          />
          <span className={styles.playButton}>▶</span>
        </div>
      </a>

      <a
        href="https://www.youtube.com/watch?v=RWl5HBbIM_4"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.videoCard}
      >
        <div className={styles.videoFrame}>
          <Image
            src="https://img.youtube.com/vi/RWl5HBbIM_4/maxresdefault.jpg"
            alt="Al Ghani Garden development update"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw"
            className={styles.videoImage}
          />
          <span className={styles.playButton}>▶</span>
        </div>
      </a>

      <a
        href="https://www.youtube.com/watch?v=qguqWfD24E4"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.videoCard}
      >
        <div className={styles.videoFrame}>
          <Image
            src="https://img.youtube.com/vi/qguqWfD24E4/maxresdefault.jpg"
            alt="Al Ghani Garden update"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw"
            className={styles.videoImage}
          />
          <span className={styles.playButton}>▶</span>
        </div>
      </a>

    </div>
  </div>
</section>

        {/* =========================================================
            FINAL CTA
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