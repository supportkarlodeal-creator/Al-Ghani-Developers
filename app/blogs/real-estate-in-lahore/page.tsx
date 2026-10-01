import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./blog-post.module.css";

export default function RealEstateInLahorePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* ARTICLE HEADER */}
        <section className={styles.articleHeader}>
          <div className={styles.container}>
            <span className={styles.category}>AL GHANI GARDEN</span>

            <h1>Real Estate in Lahore</h1>

            <div className={styles.meta}>
              <span>Posted by</span>
              <span className={styles.author}>w2user</span>
              <span className={styles.separator}>•</span>
              <span>January 27, 2023</span>
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article className={styles.article}>
          <div className={styles.container}>

            {/* FEATURED IMAGE */}
            <div className={styles.featuredImage}>
              <Image
                src="https://alghani.com.pk/wp-content/uploads/2023/01/2-4.jpg"
                alt="Real Estate in Lahore"
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 900px"
                priority
              />
            </div>

            <div className={styles.articleContent}>

              {/* INTRODUCTION */}
              <p>
                The real estate in Lahore has overturned the way living spaces
                are designed. Being the economic hub of Pakistan endured stable
                trends to the breathtaking communities and spacious residential
                plots have transformed the vitality and outlook of real estate
                in Lahore. Every generation is more vigorous towards opulent
                their own luxurious needs that provide a high-quality standard
                of living with some magnificent amenities that are profligate,
                posh and spacious.
              </p>

              <p>
                Al Ghani Gardens housing scheme is a proud project introduced by
                Al Ghani Developers in 2006 by Malik Aleem-Majeed- Awam and is
                a thoughtfully crafted posh project established in luxury,
                comfort, and peace.
              </p>

              <p>
                Since our inception we know that remarkable designs and
                superlative engineering are some of the factors that define a
                luxury apartment. We ensure the features such as healthcare,
                education etc., are now pacified as given convenience’s that
                are a must for the exacting demands for luxury societies to
                make our resident more comfortable and pacific If you want 5
                Marla plot near me Al Ghani Gardens is among one of the most
                aspire for real estate destinations in the city.
              </p>

              <p>
                Al Ghani Gardens are favorably connected Quaid-e-Azam
                Interchange as it is only 3 KM away from it and is also 10
                minutes’ drive away from Allama Iqbal international Airport
                Lahore. There are numerous Hospitals, Educational Institutions
                and amenities located in Al Ghani Gardens which can be
                encroached in a matter of a few minutes.
              </p>

              <p>
                Architecturally enthralling and craftily designed, the
                sophisticated Square Avenue at Lahore are reshaping ideas
                around what it means to be a resident of Square Avenue. Al Ghani
                Gardens provides the convenience and luxury with the privacy and
                ease of a home. Each home includes parks, schools, rooftop
                terrace, mini zoo and state of art monument area with the gated
                community just outside your door.
              </p>

              <p>
                If you also want to invest in property and buy want to buy 3
                Marla plot in housing scheme in Lahore, Al Ghani Gardens is a
                name to trust upon. Al Ghani Gardens is providing you the
                golden chance to buy your 3 Marla plot in Lahore along-with
                free insurance. Both buyers and investors can find the best 3
                Marla plot for sale in Lahore. If you are looking to buy 3
                Marla housing schemes in Lahore near you, here check the
                details about best housing society Al Ghani in Lahore.
              </p>

              <p>
                If you want to buy plot near you with luxurious amenities Al
                Ghani Garden is designed to take care of every necessity of
                life. We offer ample amenities to fulfill the needs of
                residents for the best society living. Being well known for its
                excellent landscape and greenery, our projects help to
                experience the best and calm environment for our residents to
                relax and refresh. It also covers excellent amenities like CCTV
                Cameras, Lift, and Backup electricity, to live a luxurious
                life.
              </p>

              <p>
                Besides these amenities to ensure luxurious lifestyle, the
                stunning features exhibit comfort and luxuries which promise
                lifestyle that everyone desires. Nature and greenery would be
                constant companions ensuring you always have a tranquil setting
                around your home, the dramatic five-star infinity pool would
                teasingly invite you to wash away your day’s stress in the
                heated blue private pool.
              </p>

              {/* CONTACT DETAILS */}
              <div className={styles.infoSection}>
                <h2>Contact Details</h2>

                <ul>
                  <li>Phone UAN: 042-111-116-117</li>
                  <li>Phone: 0304-1114242</li>
                  <li>Email info:@alghani.com.pk.</li>
                </ul>
              </div>

              {/* 3 MARLA SECTION */}
              <h2>3 Marla Plot in Lahore for Sale</h2>

              <p>
                If you want to buy 3 Marla plot in Lahore, Al Ghani Gardens
                Lahore offers you a golden opportunity. Now you can buy 3 Marla
                plot in Lahore on the basis of very easy payment.
              </p>

              <p>
                Now a days when the prices of property are touching sky a
                middle man can’t even think to buy a home. Keeping that in mind
                Al Ghani Lahore brings the best solution and offer a very easy
                payment plant on 3 Marla Plot plan with the help of which even
                middle-class family can own their property.
              </p>

              <p>
                So if you want to buy 3 Marla plot in Lahore, Al Ghani Gardens
                Lahore offers you a golden opportunity. Now you can buy 3 Marla
                plot in Lahore on the basis of very easy payment plan.
              </p>

              {/* DESCRIPTION */}
              <h2>Description</h2>

              <ul className={styles.articleList}>
                <li>
                  3 Marla Plot located in Al Ghani Garden phase 3 society GT
                  road Lahore, near to Manawa hospital and ring road.
                </li>

                <li>
                  3 Marla plot has size of 17x40.
                </li>

                <li>
                  Ideal living environment 3 Marla Plot in Al Ghani Garden
                  Phase 3.
                </li>

                <li>
                  On ground plot totally developed location with French
                  Fabricated sewerage and excellent road.
                </li>
              </ul>

              {/* PAYMENT PLAN */}
              <div className={styles.installmentSection}>
                <h2>Payment Plan for 3 Marla Plot in Lahore</h2>

                <p>
                  Al Ghani Garden Phase 3 Marla payment plan for 3-Marla is
                  updated.
                </p>

                <p>
                  The down payment for 3-Marla is 4 lac and installment per
                  month is 12000 and yearly installment plan is 3 year and the
                  total amount is 1425,000.
                </p>

                <p>
                  Advance payment for 3 Marla plot is 427500.
                </p>

                <p>
                  Advance can be paid in very easy way by following rule:
                </p>

                <ul className={styles.paymentList}>
                  <li>First Month: 142500</li>
                  <li>Second Month: 142500</li>
                  <li>Third Month: 142500</li>
                  <li>Monthly payment for 3 years: 12,000</li>
                  <li>Payment after a year: 188000</li>
                </ul>
              </div>

              {/* NAVIGATION */}
              <div className={styles.articleNavigation}>
                <Link
                  href="/blogs/how-to-buy-a-plot-in-lahore-2"
                  className={styles.nextBlog}
                >
                  <span>Newer</span>
                  <strong>How to Buy a Plot in Lahore?</strong>
                </Link>

                <Link
                  href="/blogs/plot-on-installment-in-lahore-2021"
                  className={styles.nextBlog}
                >
                  <span>Older</span>
                  <strong>Plot on Installment in Lahore 2021</strong>
                </Link>

                <Link
                  href="/blogs"
                  className={styles.backToBlogs}
                >
                  ← Back to Blogs
                </Link>
              </div>

            </div>
          </div>
        </article>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}