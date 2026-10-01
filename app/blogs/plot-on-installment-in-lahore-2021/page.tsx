import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./blog-post.module.css";

export default function PlotOnInstallmentInLahore2021Page() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* ARTICLE HEADER */}
        <section className={styles.articleHeader}>
          <div className={styles.container}>
            <span className={styles.category}>AL GHANI GARDEN</span>

            <h1>Plot on Installment in Lahore 2021</h1>

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
                src="https://alghani.com.pk/wp-content/uploads/2023/01/9.jpg"
                alt="Plot on Installment in Lahore 2021"
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 900px"
                priority
              />
            </div>

            <div className={styles.articleContent}>
              <p>
                Lahore being the capital of province Punjab and the
                second-colossal city of Pakistan is the economic hub of
                Pakistan. In the past few years, note-worthy developmental
                work has mounted the worth of Lahore. People want to live in
                this city for its high standards and luxurious lifestyle.
              </p>

              <p>
                Both buyers and investors can find the best plots on
                installment for sale in Lahore. If you are looking to buy
                plots on installments in Lahore, here check the details about
                best residential housing societies in Lahore.
              </p>

              <h2>Buy Plots on Installment in Best Housing Society in Lahore:</h2>

              <p>
                Are you looking for plots on installments? Al Ghani Lahore
                offers you golden opportunity. Now you can buy plots on
                installments in affordable range.
              </p>

              <p>
                Residential and commercial Plots of different sizes from 3, 5,
                and 10 Marla plot are available for sale in Lahore on payment
                and installments.
              </p>

              <h2>3 MARLA PLOT for Sale in Lahore</h2>

              <p>
                If you want to buy 3 Marla plot on installment Al Ghani Gardens
                Lahore offers you a golden opportunity. Now you can buy 3 Marla
                plot in Lahore on the basis of very easy installments.
              </p>

              <div className={styles.installmentSection}>
                <h2>3 Marla Payment Details</h2>

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

              <h2>5 Marla Plot for Sale in Lahore</h2>

              <p>
                Al Ghani Gardens is providing a golden chance to invest in
                property and offering 5 Marla plot for sale in Lahore.
              </p>

              <div className={styles.installmentSection}>
                <h2>5 Marla Payment Details</h2>

                <ul className={styles.paymentList}>
                  <li>ADVANCE: 720000</li>
                  <li>Per Month Installment: 20000</li>
                  <li>Total Amount: 23750000</li>
                </ul>
              </div>

              <h2>10 Marla Plot for Sale in Lahore</h2>

              <p>
                Now a days when the prices of property are touching sky a
                middle man can’t even think to buy a home. Keeping that in mind
                Al Ghani Lahore brings the best solution and offering 10 Marla
                plot for sale in Lahore.
              </p>

              <div className={styles.installmentSection}>
                <h2>10 Marla Payment Details</h2>

                <ul className={styles.paymentList}>
                  <li>Booking = PKR 325000</li>
                  <li>Confirmation in 1 Months = PKR 650000</li>
                  <li>Installment = PKR 40000</li>
                  <li>Annual Amount = PKR 278000</li>
                  <li>Total = PKR 3250000</li>
                </ul>
              </div>

              <h3 className={styles.subHeading}>
                So Hurry up and book your plot now!
              </h3>

              {/* ARTICLE NAVIGATION */}
              <div className={styles.articleNavigation}>
                <Link
                  href="/blogs/real-estate-in-lahore"
                  className={styles.nextBlog}
                >
                  <span>Newer</span>
                  <strong>Real Estate in Lahore</strong>
                </Link>

                <Link
                  href="/blogs/how-to-pick-the-right-housing-scheme"
                  className={styles.nextBlog}
                >
                  <span>Older</span>
                  <strong>
                    How to Pick the best &amp; Right Housing Scheme
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
          </div>
        </article>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}