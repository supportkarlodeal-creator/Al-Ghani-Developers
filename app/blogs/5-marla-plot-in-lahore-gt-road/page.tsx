import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./blog-post.module.css";

export default function FiveMarlaPlotPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            BLOG HEADER
        ====================================================== */}

        <section className={styles.articleHeader}>
          <div className={styles.container}>
            <span className={styles.category}>AL GHANI GARDEN</span>

            <h1>5 Marla Plot in Lahore GT Road</h1>

            <div className={styles.meta}>
              <span>Posted by</span>
              <span className={styles.author}>w2user</span>
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

            <div className={styles.featuredImage}>
              <Image
                src="https://alghani.com.pk/wp-content/uploads/2023/01/8-1.jpg"
                alt="5 Marla Plot in Lahore GT Road"
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 900px"
                priority
              />
            </div>

            <div className={styles.articleContent}>

              <h2>5 Marla Plot in Lahore GT Road</h2>

              <p>
                Punjab is known as opulent Province of Pakistan due to its
                prolific land and modernized and marvelous projects. The
                overall Real Estate Sector in Punjab has a clear distinction
                over all other provinces. Punjab includes Lahore Real Estate
                which is playing dominant role in Real Estate of Pakistan as
                Lahore being economic hub of Pakistan provides elite business
                and investment opportunities and make it easy to have better
                residential places.
              </p>

              <p>
                Its real estate market is developing with each passing day
                that’s why builders and investors have to offer some of the
                high-tech and marvelous projects related to real estate. If
                you also want to invest in property and buy and buy plots on
                installments Al Ghani Gardens is a name to trust upon. Al
                Ghani Gardens is providing you the golden chance to buy your
                plot on installments along with free insurance.
              </p>

              <p>
                Here check the details about Al Ghani Gardens:
              </p>

              {/* =================================================
                  AL GHANI GARDEN
              ================================================== */}

              <section className={styles.contentSection}>
                <div className={styles.sectionImage}>
                  <Image
                    src="https://alghani.com.pk/wp-content/uploads/2023/01/1-3.jpg"
                    alt="Al Ghani Garden"
                    width={1000}
                    height={650}
                    sizes="(max-width: 900px) 100vw, 800px"
                  />
                </div>

                <h2>Al Ghani Garden</h2>

                <p>
                  For over 15 years, the Al-Ghani Group Developers have been
                  building relationships and projects that last. In Al Ghani
                  Garden’s Lahore, Modern expediencies, entertainment, a
                  luxurious lifestyle are all within your reach. Enjoy
                  stylish and luxury condominium suites paired with curated
                  indoor and outdoor amenities.
                </p>

                <p>
                  No matter the job, we go beyond building.
                </p>
              </section>

              {/* =================================================
                  PROUD PROJECT
              ================================================== */}

              <section className={styles.contentSection}>
                <div className={styles.sectionImage}>
                  <Image
                    src="https://alghani.com.pk/wp-content/uploads/2023/01/2-3.jpg"
                    alt="Proud Project of Al Ghani Developers"
                    width={1000}
                    height={650}
                    sizes="(max-width: 900px) 100vw, 800px"
                  />
                </div>

                <h2>Proud Project of Al Ghani Developers</h2>

                <p>
                  Al Ghani Garden’s was introduced by Malik Aleem, Majeed
                  Awan in 2006. We are consistent in providing smartly-planned
                  modern residential ventures that are offering number of
                  attractive properties at the best prices.
                </p>
              </section>

              {/* =================================================
                  LOCATION
              ================================================== */}

              <section className={styles.locationSection}>
                <h2>Location</h2>

                <p>
                  2 KM Quaid –e-Azam Interchange, Lahore Ring Rd, Lahore,
                  Punjab.
                </p>

                <p>
                  Al Ghani Garden’s housing scheme is only 3 KM away from
                  Quaid-e-Azam interchange.
                </p>

                <p>
                  And 10 minutes’ drive away from Allama Iqbal international
                  Airport Lahore.
                </p>

                <div className={styles.locationImage}>
                  <Image
                    src="https://alghani.com.pk/wp-content/uploads/2023/01/3-4.jpg"
                    alt="Al Ghani Garden location"
                    width={1000}
                    height={650}
                    sizes="(max-width: 900px) 100vw, 800px"
                  />
                </div>
              </section>

              {/* =================================================
                  CONTACT DETAILS
              ================================================== */}

              <section className={styles.infoSection}>
                <h2>Contact Details</h2>

                <ul>
                  <li>
                    Phone UAN: 042-111-116-117
                  </li>

                  <li>
                    Phone: 0304-1114242
                  </li>

                  <li>
                    Email info:@alghani.com.pk.
                  </li>
                </ul>
              </section>

              {/* =================================================
                  HONESTY
              ================================================== */}

              <section className={styles.textSection}>
                <h2>Honesty</h2>

                <p>
                  We make sure of our facts and we are honest and
                  straightforward in all of our dealings with our clients.
                  We consistently strive to develop collaborative
                  partnerships, based on transparency and mutual trust, which
                  serve to build enduring client relationships.
                </p>
              </section>

              {/* =================================================
                  PASSION
              ================================================== */}

              <section className={styles.textSection}>
                <h2>Passion</h2>

                <p>
                  We believe in that success is when we can achieve results
                  in the things we are passionate about and feel as though we
                  are making a difference to achieve our goals.
                </p>
              </section>

              {/* =================================================
                  LATEST PROJECTS
              ================================================== */}

              <section className={styles.textSection}>
                <h2>Our Latest Projects</h2>

                <p>
                  To provide exceptional services to the clients, we are
                  committed to providing the highest level of professionalism,
                  service response, and quality workmanship.
                </p>
              </section>

              {/* =================================================
                  PHASES
              ================================================== */}

              <section className={styles.projectSection}>
                <h2>Phases of Al Ghani Garden</h2>

                <ul>
                  <li>Al Ghani Garden Phase I</li>
                  <li>Al Ghani Garden Phase II</li>
                  <li>Al Ghani Garden Phase III</li>
                  <li>Al Ghani Garden Phase III (Extension)</li>
                </ul>
              </section>

              {/* =================================================
                  PHASE I
              ================================================== */}

              <section className={styles.contentSection}>
                <h2>Al Ghani Garden Phase I</h2>

                <p>
                  TMA-approved Al Ghani Garden Phase-1 was developed by Al
                  Ghani Developers in 2012, and remarkably extends over 80
                  canals. It covers an area of around 8 acres which is less
                  than 100 canals nearly about 200 houses are available. It
                  is about 50 feet long on the main boulevard.
                </p>

                <div className={styles.sectionImage}>
                  <Image
                    src="https://alghani.com.pk/wp-content/uploads/2023/01/4-1.jpg"
                    alt="Al Ghani Garden Phase I"
                    width={1000}
                    height={650}
                    sizes="(max-width: 900px) 100vw, 800px"
                  />
                </div>
              </section>

              {/* =================================================
                  PHASE II
              ================================================== */}

              <section className={styles.contentSection}>
                <h2>Al Ghani Garden Phase II</h2>

                <p>
                  Extended over 400 canals, Al Ghani Garden Phase 2 is home
                  to thousands of families.
                </p>

                <p>
                  It acquires land of about 50 acres which has nearly 1000
                  plots. It is about 50 feet long on the main boulevard.
                  Phase 2 of al Ghani gardens are heavily inhabited.
                </p>

                <div className={styles.sectionImage}>
                  <Image
                    src="https://alghani.com.pk/wp-content/uploads/2023/01/5-1.jpg"
                    alt="Al Ghani Garden Phase II"
                    width={1000}
                    height={650}
                    sizes="(max-width: 900px) 100vw, 800px"
                  />
                </div>
              </section>

              {/* =================================================
                  PHASE III
              ================================================== */}

              <section className={styles.contentSection}>
                <h2>Al Ghani Garden Phase III</h2>

                <p>
                  LDA approved Al Ghani Garden phase 3 is a gated community
                  with all well-planned facilities available at ease. It is
                  about 100 feet long on the main boulevard. It acquires land
                  of about 40 acres which is almost 300 canals and equal to
                  500 plots.
                </p>

                <div className={styles.sectionImage}>
                  <Image
                    src="https://alghani.com.pk/wp-content/uploads/2023/01/6-1.jpg"
                    alt="Al Ghani Garden Phase III"
                    width={1000}
                    height={650}
                    sizes="(max-width: 900px) 100vw, 800px"
                  />
                </div>
              </section>

              {/* =================================================
                  AZMAT HEIGHTS
              ================================================== */}

              {/* <section className={styles.contentSection}>
                <h2>Azmat Heights</h2>

                <p>
                  The Azmat Heights is an epitome of urban luxury residential
                  apartments located in the heart of lush green cordial
                  suburbs of Lahore. Azmat Heights is perfectly positioned
                  and designed to provide you with an exceptional residential
                  and commercial lifestyle.
                </p>

                <p>
                  Azmat Heights apartments are ideally located in a dense
                  urban population with beautiful landscapes to build a
                  resilient local community. The residential apartments are
                  built on a self-sustained infrastructure with all modern
                  facilities to elevate economical and comfortable living.
                  Providing 170 luxury apartment homes of 434, 650 and 850 sq.
                  feet on 3-year flexible instalment plan with possession in
                  2 years.
                </p>

                <p>
                  This one of a kind residential apartments scheme located in
                  proximity with Manawan THQ Hospital and is at a convenient
                  2-minute drive from Orange Train.
                </p>

                <div className={styles.sectionImage}>
                  <Image
                    src="https://alghani.com.pk/wp-content/uploads/2023/01/Banner-scaled.jpg"
                    alt="Azmat Heights"
                    width={1200}
                    height={700}
                    sizes="(max-width: 900px) 100vw, 800px"
                  />
                </div>
              </section> */}

              {/* =================================================
                  PLOTS ON INSTALLMENT
              ================================================== */}

              <section className={styles.contentSection}>
                <h2>Al Ghani Garden Plots on Installment</h2>

                <p>
                  Al Ghani Garden Lahore offers 2.5,3,4,5,8 and 10 Marla
                  Plots on very easy Installments of 10000 PKR monthly within
                  3 years.
                </p>

                <p>
                  If you want to buy plot Al Ghani Gardens Lahore offers you
                  a golden opportunity. Now you can buy plot in Lahore on the
                  basis of very easy installments.
                </p>

                <div className={styles.sectionImage}>
                  <Image
                    src="https://alghani.com.pk/wp-content/uploads/2023/01/8.jpg"
                    alt="Al Ghani Garden plots on installment"
                    width={1000}
                    height={650}
                    sizes="(max-width: 900px) 100vw, 800px"
                  />
                </div>

                <p>
                  When it comes to buy plots on installment, it is very
                  difficult to find any reliable housing scheme in the city
                  of Lahore. Al Ghani Garden Lahore has now solved that
                  problem. Now everyone even common men can book their plot on
                  installments in one of the Best Installment housing scheme
                  in Lahore. Now you can buy plots of your choice on very
                  easy installments.
                </p>

                <p>
                  The new phase of Al Ghani Garden Phase 3 Lahore after
                  successful completion of phase 2 owner has launched Al Ghani
                  Garden Phase 3 Lahore.
                </p>

                <p>
                  Yadgar stop Manama GT road Lahore. It is 2 kilometers from
                  Quaid-e-Azam interchange Ring road Lahore.
                </p>

                <p>
                  To AL Ghani Garden phase 3 plot for sale is not the work of
                  everybody because prices has been increased at that extent
                  so that a normal person only can imagine buying a AL Ghani
                  Garden phase 3 plot for sale but we have a solutions for
                  you. No you can be the owner of your own Al Ghani Garden
                  Lahore just on monthly basis short installment that period
                  varies from 3 to 5 years.
                </p>

                <p>
                  Now get the AL Ghani Garden phase 3 plot for sale on
                  installment just in Rs 21 and pay in 3 years in pay direct
                  Mount with installment from 15000 to 25000 as per your
                  desire. You can pay the advance of 300000 on the 3 Marla
                  plot for sale in Lahore on installment and can pay the
                  resting with installment schedule.
                </p>

                <p>
                  This phase Al Ghani Garden Phase 4 is located on Moman pura
                  road Lahore. It is also have approach from Manawan GT Road.
                </p>

                <p>
                  So Hurry Up and Be a part of Al Ghani Garden’s Lahore to
                  enjoy a clean and green Urban life.
                </p>
              </section>

            </div>

            {/* =================================================
                NEXT BLOG
            ================================================== */}

            <div className={styles.articleNavigation}>
              <Link
                href="/blogs/why-is-al-ghani-the-best-housing-community-in-lahore"
                className={styles.nextBlog}
              >
                <span>NEWER</span>
                <strong>
                  Why is Al-Ghani the best housing community in Lahore? →
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