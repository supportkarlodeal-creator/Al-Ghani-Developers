import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./blog-post.module.css";

export default function HowToBuyPropertyPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            ARTICLE HEADER
        ====================================================== */}

        <section className={styles.articleHeader}>
          <div className={styles.container}>
            <span className={styles.category}>AL GHANI GARDEN</span>

            <h1>
              How to buy property in the prime location of Lahore?
            </h1>

            <div className={styles.meta}>
              <span>Posted by</span>
              <span className={styles.author}>alghani</span>
              <span className={styles.separator}>|</span>
              <span>On January 26, 2023</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            ARTICLE
        ====================================================== */}

        <article className={styles.article}>
          <div className={styles.container}>

            <div className={styles.articleContent}>

              <p>
                The desire to buy property in Pakistan tempts many human
                beings because our property sector holds plenty of
                ‘ever on the upward push’ boom potential. In the past,
                traders looking the rate brief-term profits, alas, largely
                determined the area’s trajectory. Their hasty practices
                inflated prices dangerously. This challenge left many serious
                consumers, mainly the ones in real need of purchasing a plot,
                reeling at the sidelines.
              </p>

              <p>
                The last decade, however, saw things improving for current
                Pakistan&apos;s estate. Increasingly favorable government
                rules, coupled with consumers&apos; inclination to see the
                sector as a beneficial road for secure investments, ushered in
                the proverbial ‘winds of alternative’. Because of the recent
                hunch seen inside the asset marketplace, real property costs
                in many parts of Pakistan have declined. This makes now the
                best time in an effort to buy your first property.
              </p>

              <p>
                Right here are a few steps that are important to take before
                shopping for belongings in Lahore.
              </p>

              {/* =================================================
                  STEP 1
              ================================================== */}

              <section className={styles.contentSection}>
                <h2>Take a look at NOC and associated approvals:</h2>

                <p>
                  As of the time of writing this piece, the general public
                  government concerned are investigating a number of housing
                  schemes to verify their approval status. These include
                  several residential projects looking forward to improvement
                  from government and utility service providers. So our
                  recommendation for every time you are confronted with the
                  possibility of making an investment in such schemes: avoid
                  making any purchases in the meanwhile. Choose the best
                  housing societies in Lahore.
                </p>

                <p>
                  In particular, the Lahore Development Authority (LDA)
                  cautions customers against mission advertising and marketing
                  gimmicks and expensively reduces brochures for these
                  projects. The authority, in truth, explicitly insists that
                  consumers verify the entire information in their society&apos;s
                  approval frame.
                </p>

                <p>
                  As an additional safeguard, you must continually reach out
                  to the revenue branch&apos;s workplace to confirm the name of
                  land owned by way of the project developer you&apos;re
                  interested in working with. Ultimately, do verify if the
                  developer has approvals for gas, water, energy, and sewerage
                  connections.
                </p>
              </section>

              {/* =================================================
                  STEP 2
              ================================================== */}

              <section className={styles.contentSection}>
                <h2>Focus on the small info:</h2>

                <p>
                  Nowadays, maximum housing scheme brochures are largely ruled
                  via a medley of high-decision assignment pictures.
                  Additionally, they dedicate a few areas to the centers on
                  offer. Whilst you go to the website online, do take a look
                  at if society simply has those claimed provisions in
                  location on the ground. If you want to buy plots on easy
                  installments, focus on short information.
                </p>

                <p>
                  If the society is in its development phase, the facilities
                  promised might not be to be had yet, which is good enough.
                  But in such cases, you need to verify if the developer has
                  plots reserved for those facilities. If not, mark the state
                  of affairs as a crimson flag, and behave similarly with
                  inquiries.
                </p>

                <p>
                  Going ahead, do test if the fee plan shared with you
                  consists of all the fees which you are required to pay. It
                  ought to necessarily consist of mention of the improvement
                  prices, club rate, registration fees, processing rate, and
                  possession costs.
                </p>

                <p>
                  If your fee plan falls short of those particulars, call for
                  that information in writing. Obtain a signed report from the
                  developer which explicitly states that the communicated
                  charge plan which includes all of the costs stated. This
                  certificate paperwork is a vital part of the belonging buy
                  settlement in Pakistan.
                </p>
              </section>

              {/* =================================================
                  STEP 3
              ================================================== */}

              <section className={styles.contentSection}>
                <h2>Confirm market fees:</h2>

                <p>
                  Based on the society plan, asset costs can range from one
                  venture to any other. So this may work well if you pick a
                  plot in some developed challenge. If sure, you need to
                  inquire approximately the winning marketplace prices.
                </p>

                <p>
                  For this reason, get in contact with a couple of asset
                  retailers. You could enquire about the marketplace rate of a
                  comparable or same plot from numerous sources. By
                  understanding facts, you may get a property of your very own
                  choice in the high area of Lahore.
                </p>
              </section>

            </div>

            {/* =====================================================
                ARTICLE NAVIGATION
            ====================================================== */}

            <div className={styles.articleNavigation}>

              <Link
                href="/blogs/how-to-pick-the-right-housing-scheme"
                className={styles.navigationItem}
              >
                <span>NEWER</span>

                <strong>
                  How to Pick the best &amp; Right Housing Scheme →
                </strong>
              </Link>

              <Link
                href="/blogs/how-to-buy-a-plot-in-lahore"
                className={styles.navigationItem}
              >
                <span>OLDER</span>

                <strong>
                  ← How to buy a plot in Lahore
                </strong>
              </Link>

              <Link
                href="/blogs"
                className={styles.backToBlogs}
              >
                ← Back to Blogs
              </Link>

            </div>

          </div>
        </article>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}