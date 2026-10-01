import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import styles from "./programs.module.css";

export default function ProgramsPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.programsSection}>
          <div className={styles.container}>

            {/* =====================================================
                PAGE TITLE
                ===================================================== */}
            <div className={styles.heading}>
              <h1>Our Programs</h1>
            </div>

            {/* =====================================================
                TOP MEDIA ROW
                ===================================================== */}
            <div className={styles.mediaGrid}>

              {/* -------------------------------------------------
                  LEFT — TAHAfUZ YOUTUBE VIDEO
                  ------------------------------------------------- */}
              <a
                href="https://www.youtube.com/watch?v=Hd_ibwifoiQ"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mediaCard}
                style={{
                  backgroundImage:
                    "url(https://img.youtube.com/vi/Hd_ibwifoiQ/hqdefault.jpg)",
                }}
                aria-label="Watch Al Ghani Tahafuz Program"
              >
                <span className={styles.playButton}>
                  <span className={styles.playTriangle}>▶</span>
                </span>
              </a>

              {/* -------------------------------------------------
                  CENTER — GREEN LIVING IMAGE
                  ------------------------------------------------- */}
              <div className={styles.mediaCard}>
                <img
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/2-1-1536x864.jpg"
                  alt="Al Ghani Green Living"
                  className={styles.mediaImage}
                />
              </div>

              {/* -------------------------------------------------
                  RIGHT — KINSHIP YOUTUBE VIDEO
                  ------------------------------------------------- */}
              <a
                href="https://www.youtube.com/watch?v=KDJUHiWjfb8"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mediaCard}
                style={{
                  backgroundImage:
                    "url(https://img.youtube.com/vi/KDJUHiWjfb8/hqdefault.jpg)",
                }}
                aria-label="Watch Al Ghani Garden video"
              >
                <span className={styles.playButton}>
                  <span className={styles.playTriangle}>▶</span>
                </span>
              </a>

            </div>

            {/* =====================================================
                PROGRAM INFORMATION
                ===================================================== */}
            <div className={styles.programGrid}>

              {/* -------------------------------------------------
                  AL GHANI TAHAfUZ
                  ------------------------------------------------- */}
              <article className={styles.programCard}>

                <div className={styles.logoArea}>
                  <img
                    src="https://alghani.com.pk/wp-content/uploads/2023/02/Logos.jpg"
                    alt="Al Ghani Tahafuz"
                    className={styles.programLogo}
                  />
                </div>

                <p>
                  In accordance with our company policy, if the buyer of the
                  plot dies during the installment payment period, the
                  remaining installment payments will be waived. The plot
                  will then be transferred to the buyer’s heir. This transfer
                  is subject to the specified terms and conditions. This
                  policy aims to provide peace of mind and financial security
                  to the buyer’s family in the unfortunate event of their
                  passing.
                </p>

              </article>

              {/* -------------------------------------------------
                  GREEN LIVING
                  ------------------------------------------------- */}
              <article className={styles.programCard}>

                <h2>Green Living</h2>

                <p>
                  A minimum of 225 square feet of space will be allocated on
                  the rooftop of every small and large house as a green area,
                  where fresh vegetables and fruits can be grown using
                  kitchen gardening techniques. Free technical support will
                  be provided by us for this purpose.
                </p>

                <p>
                  Planting trees is an ongoing charity and contributes to the
                  protection and beautification of the environment.We have
                  reaffirmed our commitment to systematically plant 20,000
                  different species of plants and trees in and around Al
                  Ghani Garden Phase 7 in the coming time.
                </p>

              </article>

              {/* -------------------------------------------------
                  KINSHIP PROGRAM
                  ------------------------------------------------- */}
              <article className={styles.programCard}>

                <div className={styles.logoArea}>
                  <img
                    src="https://alghani.com.pk/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-01-at-2.12.jpg"
                    alt="Kinship Program"
                    className={styles.programLogo}
                  />
                </div>

                <p>
                  A 5% discount will be offered in case of booking a plot
                  under the Kinship program at Al-Ghani Garden which will
                  provide you and Al-Ghani Garden with a stronger
                  relationship.
                </p>

              </article>

            </div>

          </div>
        </section>
      </main>

      <FloatingActions />

      <Footer />
    </>
  );
}