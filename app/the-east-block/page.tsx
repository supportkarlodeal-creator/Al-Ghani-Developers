import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const amenities = [
  "Beautiful Parks & Green Areas",
  "Grand Mosque",
  "Commercial Avenue",
  "Medical Complex",
  "Eco Community School",
  "Wide Carpeted Roads",
  "24/7 Security & Gated Access",
];

const plotSizes = ["3 Marla", "5 Marla", "8 Marla", "10 Marla"];

const developmentImages = [
  "/images/projects/east-block/development-1.jpg",
  "/images/projects/east-block/development-2.jpg",
  "/images/projects/east-block/development-3.jpg",
  "/images/projects/east-block/development-4.jpg",
  "/images/projects/east-block/development-5.jpg",
  "/images/projects/east-block/development-6.jpg",
];

export const metadata = {
  title: "The East Block | Al Ghani Garden Phase 7",
  description:
    "Al Ghani Garden Phase 7 - The East Block. Premium on-ground residential plots in a modern gated community.",
};

export default function TheEastBlockPage() {
  return (
    <>
      <Header />

      <main className="east-block-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="east-hero">
          <div className="east-hero-image">
            <Image
              src="/images/projects/east-block/hero.png"
              alt="Al Ghani Garden Phase 7 - The East Block"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <div className="east-hero-overlay" />

          <div className="east-hero-content">
            <span>AL GHANI GARDEN PHASE 7</span>

            <h1>The East Block</h1>

            <p>
              Premium On-Ground Residential Plots
              <br />
              in a Modern Gated Community
            </p>

            <div className="east-hero-buttons">
              <a
                href="https://maps.app.goo.gl/Lajy7fqVeyjfdxfd6"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW LOCATION
              </a>

              <a
                href="https://wa.me/923073777841?text=Hello%2C%20I%20would%20like%20information%20about%20The%20East%20Block."
                target="_blank"
                rel="noopener noreferrer"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </section>


        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section className="east-intro">
          <div className="east-container">

            <div className="east-section-heading">
              <span>AL GHANI GARDEN PHASE 7</span>

              <h2>
                Welcome to Al Ghani Garden Phase 7 —
                The East Block
              </h2>
            </div>

            <div className="east-intro-content">

              <p>
                Al Ghani Developers introduces The East Block in Al Ghani
                Garden Phase 7 — a thoughtfully planned residential
                destination offering premium on-ground plots with flexible
                payment options and a modern lifestyle environment.
              </p>

              <p>
                Strategically located just 8 minutes from Bhaini Interchange,
                Ring Road Lahore, The East Block combines accessibility,
                comfort, and long-term investment potential in one exceptional
                address.
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            AMENITIES
        ===================================================== */}

        <section className="east-amenities">
          <div className="east-container">

            <div className="east-section-heading center">
              <span>EXCLUSIVE LIFESTYLE AMENITIES</span>

              <h2>
                Designed for Comfortable
                <br />
                Modern Living
              </h2>

              <p>
                Experience a community designed for comfortable modern living
                with premium facilities including:
              </p>
            </div>


            <div className="east-amenities-grid">

              {amenities.map((amenity, index) => (
                <div
                  className="east-amenity-card"
                  key={amenity}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{amenity}</h3>
                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            SMART INVESTMENT
        ===================================================== */}

        <section className="east-investment">
          <div className="east-container">

            <div className="east-investment-grid">

              <div className="east-investment-image">
                <Image
                  src="/images/projects/east-block/investment.png"
                  alt="The East Block"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>

              <div className="east-investment-content">

                <span> A SMART INVESTMENT FOR YOUR FUTURE</span>

                <h2>
                  A Place to Build
                  <br />
                  Your Future
                </h2>

                <p>
                  Whether you are planning to build your dream home or looking
                  for a secure real estate investment, The East Block offers
                  an excellent opportunity with affordable monthly
                  installments and strong future growth potential.
                </p>

                <Link href="/contact-us">
                  CONTACT US
                </Link>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROJECT HIGHLIGHTS
        ===================================================== */}

        <section className="east-highlights">
          <div className="east-container">

            <div className="east-section-heading center">
              <span>PROJECT HIGHLIGHTS</span>

              <h2>
                The East Block
              </h2>
            </div>


            <div className="east-highlight-layout">

              <div className="east-highlight-image">
                <Image
                  src="/images/projects/east-block/highlights.png"
                  alt="The East Block project highlights"
                  fill
                  sizes="(max-width: 800px) 100vw, 55vw"
                />
              </div>


              <div className="east-highlight-list">

                <div>
                  <strong>01</strong>
                  <span>On-Ground Residential Plots</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Easy Installment Plan</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>
                    Monthly Installment Starting from Rs. 5,000 Per Marla
                  </span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>TMA Approved Project</span>
                </div>

                <div>
                  <strong>05</strong>
                  <span>Registry & Intaqal Available</span>
                </div>

                <div>
                  <strong>06</strong>
                  <span>Secure Gated Community</span>
                </div>

                <div>
                  <strong>07</strong>
                  <span>Limited Plots Available</span>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PLOT SIZES
        ===================================================== */}

        <section className="east-plots">
          <div className="east-container">

            <div className="east-section-heading center">
              <span>AVAILABLE PLOT SIZES</span>

              <h2>
                Residential Plots
              </h2>

              <p>
                Residential plots are available in:
              </p>
            </div>


            <div className="east-plot-grid">

              {plotSizes.map((size) => (
                <div
                  className="east-plot-card"
                  key={size}
                >
                  <span>RESIDENTIAL</span>

                  <strong>{size}</strong>

                  <small>PLOT</small>
                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            LOCATION
        ===================================================== */}

        <section className="east-location">
          <div className="east-container">

            <div className="east-location-grid">

              <div className="east-location-content">

                <span>PRIME LOCATION</span>

                <h2>
                  Just 8 Minutes from
                  <br />
                  Bhaini Interchange
                </h2>

                <p>
                  Just 8 Minutes from Bhaini Interchange, Ring Road Lahore.
                </p>

                <p>
                  The East Block offers excellent connectivity to major areas
                  of Lahore while providing a peaceful and family-friendly
                  living environment.
                </p>

                <a
                  href="https://maps.app.goo.gl/Lajy7fqVeyjfdxfd6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW LOCATION
                </a>

              </div>


              <div className="east-location-map">

                <iframe
                  src="https://www.google.com/maps?q=Al%20Ghani%20Garden%20Phase%207%20Gate%201&output=embed"
                  loading="lazy"
                  title="Al Ghani Garden Phase 7 - The East Block location"
                />

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PAYMENT PLAN
        ===================================================== */}

        <section className="east-payment">
          <div className="east-container">

            <div className="east-section-heading center">
              <span>PAYMENT PLAN</span>

              <h2>
                Easy Payment Options
              </h2>
            </div>

            <div className="east-payment-image">
              <Image
                src="/images/projects/east-block/payment-plan.png"
                alt="The East Block payment plan"
                width={1600}
                height={1000}
                sizes="100vw"
              />
            </div>

          </div>
        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section className="east-contact">
          <div className="east-container">

            <span>CONTACT US</span>

            <h2>
              Book Your Plot Today
            </h2>

            <p>
              Have questions or need assistance? Our team at Al Ghani Phase 7
              is always here to help. Feel free to reach out to us for
              inquiries, bookings, or any support you may need.
            </p>

            <div className="east-contact-buttons">

              <a
                href="https://wa.me/923073777841?text=Hello%2C%20I%20would%20like%20information%20about%20The%20East%20Block."
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP US
              </a>

              <Link href="/contact-us">
                CONTACT US
              </Link>

            </div>

          </div>
        </section>


        {/* =====================================================
            DEVELOPMENT UPDATES
        ===================================================== */}

        {/* <section className="east-development">
          <div className="east-container">

            <div className="east-section-heading center">
              <span>LATEST DEVELOPMENT UPDATE</span>

              <h2>
                Development Updates
              </h2>
            </div>


            <div className="east-development-grid">

              {developmentImages.map((image, index) => (
                <div
                  className="east-development-image"
                  key={image}
                >
                  <Image
                    src={image}
                    alt={`The East Block development update ${index + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>
              ))}

            </div>

          </div>
        </section> */}


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="east-final-cta">

          <div className="east-final-overlay" />

          <div className="east-final-content">

            <span>AL GHANI GARDEN PHASE 7</span>

            <h2>
              THE EAST BLOCK
            </h2>

            <p>
              Premium On-Ground Residential Plots
              <br />
              in a Modern Gated Community
            </p>

            <a
              href="https://wa.me/923073777841?text=Hello%2C%20I%20would%20like%20information%20about%20The%20East%20Block."
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK YOUR PLOT
            </a>

          </div>

        </section>

      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}