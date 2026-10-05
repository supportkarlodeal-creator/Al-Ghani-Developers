import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import styles from "./square-avenue.module.css";

const sourceBase = "/images/projects/square-avenue";

const images = {
  hero: `${sourceBase}/hero.png`,
  intro: `${sourceBase}/1.png`,
  development: `${sourceBase}/2.png`,
  clockTower: `${sourceBase}/3.png`,
  masjid: `${sourceBase}/4.png`,
  paymentOne: `${sourceBase}/payment.jpeg`,
  paymentTwo: `${sourceBase}/2024/10/Untitled-design-7-e1729083978760.png`,
};

const amenities = [
  ["Masjid", `${sourceBase}/masjid.png`],
  ["Gated Community", `${sourceBase}/gated.png`],
  ["School", `${sourceBase}/educational.png`],
  ["Commercial Avenue", `${sourceBase}/shopping.png`],
  ["Park", `${sourceBase}/park.png`],
  ["Modern Security System", `${sourceBase}/security.png`],
  ["Graveyard", `${sourceBase}/cemetery.png`],
  ["Proper Sewerage System", `${sourceBase}/sewerage.png`],
  ["Dispensary", `${sourceBase}/pharmacy.png`],
  ["Life-Time Maintenance", `${sourceBase}/maintenance.png`],
  ["Water Filtration Plant", `${sourceBase}/water-filteration.png`],
  ["Mini Zoo", `${sourceBase}/zoo.png`],
  ["Building Control Department", `${sourceBase}/garage.png`],
  ["Shuttle Ambulance Service", `${sourceBase}/ambulance.png`],
  ["Community Center", `${sourceBase}/community.png`],
];

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=31%C2%B038%2709.3%22N+74%C2%B029%2727.1%22E";

export const metadata = {
  title: "Square Avenue – Al Ghani Developers",
  description: "Square Avenue – Al Ghani Developers",
};

export default function SquareAvenuePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroImageWrap}>
            <Image
              src={images.hero}
              alt="Square Avenue"
              fill
              priority
              sizes="100vw"
              className={styles.heroImage}
              unoptimized
            />
          </div>
        </section>

        <section className={styles.intro}>
          <div className={styles.container}>
            <p>
              In the housing sector of Lahore City, Al Ghani is considered to
              have a distinguished status which has delivered multiple
              completed projects with big success. The projects where already
              hundreds of residents are living, and thousands of investments
              are shining bright with high rise value.
            </p>

            <p>
              With the growing population of Lahore city, the trend of new
              housing projects is increasing in East Lahore adjacent to Ring
              Road. So, considering the need of a modern and complete housing
              project in the eastern suburbs of Lahore city by keeping in view
              the needs of the growing population in the current situation,
              Al-Ghani developers has planned a comprehensive and modern
              housing project on the space that is equipped with all the
              conveniences of life.The economic and social structure of the
              housing schemes and its developer, along with the location play
              a key role in the success of any project.To maintain our profile,
              Al-Ghani developers have planned to build Square Avenue on unique
              lines.
            </p>

            <p>
              Our research team concludes that access to value added services
              and quality amenities are top priority for every resident. They
              are happy to pay a little more willingly for these uninterrupted
              and continues supply of these values.
            </p>

            <div className={styles.introImage}>
              <Image
                src={images.intro}
                alt="Square Avenue"
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 1200px"
                unoptimized
              />
            </div>

            <div className={styles.actionRow}>
              <a
                href={mapUrl}
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

        <section className={styles.unique}>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Unique Features:</h2>
              <p>
                The following features of Square Avenue helps to make it
                unique, compressive and a modern housing project.
              </p>
            </div>

            <article className={styles.feature}>
              <div className={styles.featureImage}>
                <Image
                  src={images.development}
                  alt="State of Art Development"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  unoptimized
                />
              </div>
              <div className={styles.featureText}>
                <h3>State of Art Development</h3>
                <p>
                  Our engineering team is fully empowered by the management in
                  terms of quality and quantity. Expert Town Planners, Civil
                  Engineers and Architects are present on the panel of our
                  sister company ‘Karsaaz’ who is responsible for the
                  development of every project of Al-Ghani Garden.
                  Developmental work is carried out in accordance with the
                  higher standards like it has WASA standard level sewerage
                  system and (TEPA) standard level road and traffic layout plan
                  with lifetime existence.
                </p>
              </div>
            </article>

            <div className={styles.actionRow}>
              <a
                href={mapUrl}
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

            <article className={styles.feature}>
              <div className={styles.featureImage}>
                <Image
                  src={images.clockTower}
                  alt="Avenue Clock Tower"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  unoptimized
                />
              </div>
              <div className={styles.featureText}>
                <h3>Avenue Clock Tower</h3>
                <p>
                  Located right in the middle of project ‘Square Avenue’,
                  Avenue clock tower is a masterpiece of modern town planning
                  and magnificent architecture designed with Seljuk and Ottoman
                  architecture concept with an aim to reconcile our community
                  with the importance of civilized civic life and punctuality.
                  Avenue Clock Tower will be known as the regional residential
                  and commercial center of the future. Which, of course, will
                  be prestigious to the residents of Square Avenue.
                </p>
              </div>
            </article>

            <div className={styles.actionRow}>
              <a
                href={mapUrl}
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

            {/* <div className={styles.doubleImage}>
              <Image
                src={images.clockTower}
                alt="Square Avenue"
                width={900}
                height={650}
                sizes="(max-width: 800px) 100vw, 50vw"
                unoptimized
              />
              <Image
                src={images.clockTowerDetail}
                alt="Square Avenue"
                width={900}
                height={650}
                sizes="(max-width: 800px) 100vw, 50vw"
                unoptimized
              />
            </div> */}

            <article className={styles.feature}>
              <div className={styles.featureImage}>
                <Image
                  src={images.masjid}
                  alt="Shah Muhammad Masjid"
                  width={900}
                  height={900}
                  sizes="(max-width: 900px) 100vw, 45vw"
                  unoptimized
                />
              </div>
              <div className={styles.featureText}>
                <h3>Shah Muhammad Masjid</h3>
                <p>
                  The Shah Mohammad Mosque is designed over a wide area of land
                  to strengthen the regional need of the future with the
                  concept of a collective place to worship for Muslims, which
                  is a masterpiece in itself of modern architecture.
                </p>
              </div>
            </article>

            <div className={styles.actionRow}>
              <a
                href={mapUrl}
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

        <section className={styles.amenities}>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>AMENITIES</h2>
            </div>

            <div className={styles.amenityGrid}>
              {amenities.map(([title, src]) => (
                <div className={styles.amenity} key={title}>
                  <div className={styles.amenityIcon}>
                    <Image
                      src={src}
                      alt={title}
                      width={150}
                      height={150}
                      unoptimized
                    />
                  </div>
                  <h3>{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.paymentSection}>
  <div className={styles.container}>
    <h2>PAYMENT PLAN</h2>

    <div className={styles.paymentImageWrap}>
      <Image
        src={images.paymentOne}
        alt="Square Avenue Payment Plan"
        width={1600}
        height={1100}
        sizes="100vw"
        className={styles.paymentImage}
      />
    </div>

    <div className={styles.paymentNotes}>
      <p><strong>BOOKING 40%</strong></p>
      <p>Corner facing park and main boulevard 10% extra.</p>
      <p>File processing charges 5000/-</p>
      <p><strong>18 MONTHS CUSTOMIZED LAN</strong></p>
    </div>
  </div>
</section>

        <section className={styles.contact}>
          <div className={styles.container}>
            <h2>Contact Us</h2>

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.coordinates}
            >
            
            </a>

            <h3>Today&apos;s Client, Tomorrow&apos;s Neighbour</h3>

            <Link href="/contact-us" className={styles.primaryButton}>
              Book Now
            </Link>
          </div>
        </section>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}
