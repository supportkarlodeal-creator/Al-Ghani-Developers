import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata = {
  title: "Contact Us | Al Ghani Developers",
  description:
    "Get in touch with Al Ghani Developers for project information and sales inquiries.",
};

export default function ContactUsPage() {
  return (
    <>
      <Header />

      <main className="contact-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="contact-hero">
          <div className="contact-hero-overlay" />

          <div className="contact-hero-content">
            <span>AL GHANI DEVELOPERS</span>

            <h1>Contact Us</h1>

            <p>
              Get in touch with us for project information,
              sales inquiries and further details.
            </p>
          </div>
        </section>

        {/* =====================================================
            SALES CONTACT
        ===================================================== */}

        <section className="contact-sales">
          <div className="contact-container">

            <div className="contact-sales-content">
              <span className="contact-eyebrow">
                CALL US
              </span>

              <h2>Let&apos;s talk about
                <br />
                your next investment.
              </h2>

              <p>
                Our sales team is available to assist you with
                information about Al Ghani projects.
              </p>

              <a
                href="tel:+92-307-3777841"
                className="contact-phone"
              >
                +92-307-3777841
              </a>

              <div className="contact-actions">

                <a
                  href="tel:+92-307-3777841"
                  className="contact-primary-button"
                >
                  CALL NOW
                </a>

                <a
                  href="https://wa.me/923073777841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-secondary-button"
                >
                  WHATSAPP
                </a>

              </div>
            </div>

            <div className="contact-sales-decoration">
              <div className="contact-gold-circle" />
              <div className="contact-green-circle" />

              <div className="contact-number-card">
                <span>SALES & INQUIRIES</span>

                <strong>
                  +92-307-3777841
                </strong>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            OFFICES
        ===================================================== */}

        <section className="contact-offices">
          <div className="contact-container">

            <div className="contact-section-heading">
              <span>OUR OFFICES</span>

              <h2>
                Visit Us
              </h2>

              <p>
                Find us at our office locations in Lahore.
              </p>
            </div>

            <div className="contact-office-grid">

              {/* HEAD OFFICE */}

              <article className="contact-office-card">

                <div className="contact-office-header">
                  <span>HEAD OFFICE</span>

                  <h3>
                    Lahore Ring Road
                  </h3>
                </div>

                <div className="contact-office-body">

                  <div className="contact-office-icon">
                    ●
                  </div>

                  <p>
                    2KM Quaid-e-Azam Interchange,
                    <br />
                    Lahore Ring Road,
                    <br />
                    Lahore, Punjab
                  </p>

                  <a
                    href= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13594.080106914671!2d74.44857962746859!3d31.592207510344064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191100443cf2f5%3A0xb16ef3940a22a8c4!2sAl%20Ghani%20Garden%20Phase%201!5e0!3m2!1sen!2s!4v1790665332806!5m2!1sen!2s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-button"
                  >
                    GET DIRECTIONS
                  </a>

                </div>

              </article>

              {/* CORPORATE OFFICE */}

              <article className="contact-office-card">

                <div className="contact-office-header">
                  <span>CORPORATE OFFICE</span>

                  <h3>
                    DHA Phase 8
                  </h3>
                </div>

                <div className="contact-office-body">

                  <div className="contact-office-icon">
                    ●
                  </div>

                  <p>
                    157B DHA Phase 8
                    <br />
                    Broadway Commercial,
                    <br />
                    Lahore, 54810, Pakistan
                  </p>

                  <a
                    href= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13594.080106914671!2d74.44857962746859!3d31.592207510344064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191100443cf2f5%3A0xb16ef3940a22a8c4!2sAl%20Ghani%20Garden%20Phase%201!5e0!3m2!1sen!2s!4v1790665332806!5m2!1sen!2s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-button"
                  >
                    GET DIRECTIONS
                  </a>

                </div>

              </article>

            </div>

          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section className="contact-projects">

          <div className="contact-container">

            <div className="contact-section-heading light">
              <span>EXPLORE</span>

              <h2>
                Our Projects
              </h2>

              <p>
                Discover our residential and commercial developments.
              </p>
            </div>

            <div className="contact-project-grid">

              <Link
                href="/phase-7"
                className="contact-project-card contact-project-featured"
              >
                <span>FEATURED</span>
                <h3>
                  Al Ghani Garden
                  <br />
                  Phase 7
                </h3>
                <strong>
                  VIEW PROJECT →
                </strong>
              </Link>

              <Link
                href="/zavia-block"
                className="contact-project-card"
              >
                <span>AL GHANI GARDEN</span>
                <h3>Zavia Block</h3>
                <strong>VIEW PROJECT →</strong>
              </Link>

              <Link
                href="/the-east-block"
                className="contact-project-card"
              >
                <span>AL GHANI GARDEN</span>
                <h3>The East Block</h3>
                <strong>VIEW PROJECT →</strong>
              </Link>

              <Link
                href="/square-avenue"
                className="contact-project-card"
              >
                <span>AL GHANI GARDEN</span>
                <h3>Square Avenue</h3>
                <strong>VIEW PROJECT →</strong>
              </Link>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="contact-final-cta">
          <div className="contact-container">

            <span>
              HAVE QUESTIONS?
            </span>

            <h2>
              Speak with our
              <br />
              sales team.
            </h2>

            <a
              href="tel:+92-307-3777841"
              className="contact-primary-button"
            >
              +92-307-3777841
            </a>

          </div>
        </section>

      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}