import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./blog-post.module.css";

export default function PlotsOnEasyInstallmentsPage() {
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

            <h1>Plots on Easy Installments in Lahore</h1>

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

    <div className={styles.featuredImage}>
      <Image
        src="https://alghani.com.pk/wp-content/uploads/2023/01/1-4.jpg"
        alt="How to buy property in the prime location of Lahore?"
        width={1200}
        height={800}
        sizes="(max-width: 900px) 100vw, 900px"
        priority
      />
    </div>

            <div className={styles.articleContent}>

              <h2>How can you choose plots on easy installments?</h2>

              <p>
                The popularity of installment payments has been on the rise
                for the past few decades. Many people still associate the
                purchase of installments with their ease of buying a place.
                This is one of the reasons why people prefer an installment
                payment over a full payment at that time. Installment payment
                has become a common practice for many investors and citizens
                who will soon be there. Banks also provide loans in such a
                way that the borrower can purchase their property through
                installment plans.
              </p>

              <p>
                The idea is that lenders and debtors are getting even lower
                paying and economic activities continue to take place.
                Installments are preferred for home loans. Ownership of real
                estate is one of the highest goals not only for Pakistanis but
                for people all over the world. This payment method is widely
                used and is the lifeblood of a business transaction. To better
                understand installment payments, you need to consider the pros
                and cons of installment payments.
              </p>

              {/* =================================================
                  BENEFITS
              ================================================== */}

              <section className={styles.contentSection}>
                <h2>Benefits of the Installment Payment System:</h2>

                <div className={styles.featureBox}>
                  <h3>
                    Ideal if your payment is not available at one time
                  </h3>

                  <p>
                    Payment by installment is the best solution for you if you
                    really want to buy a site but do not have enough money for
                    it. The installment system makes it easy to pay small
                    payments at various intervals. Consumers can afford to own
                    their dream assets at installment payments within the
                    agreed timeframe in proportion to their budget and
                    capacity.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>A budget-friendly approach</h3>

                  <p>
                    Paying building installments helps you make a better
                    budget. This is one of the best things about paying a
                    premium for installments. Paying your sites in
                    installments helps you to split the amount into many
                    smaller payments over time. This way, you do not have to
                    worry about high pay and you can get a plot on an easy
                    installment in Lahore.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Better Financial Management</h3>

                  <p>
                    One of the many benefits of paying a dealer by
                    installments is that you can manage your finances better.
                    Buyers can easily purchase sites without the need for
                    additional savings. Even if you can save something, you
                    should not spend that money here. This is because by using
                    the money you have saved for a long time to do something;
                    it can be difficult to get that money back in the first
                    place. Most people prefer installments, as they can invest
                    more in short-term savings.
                  </p>

                  <p>
                    They can easily make a profit there and they can manage
                    their finances better.
                  </p>
                </div>
              </section>

              {/* =================================================
                  DISADVANTAGES
              ================================================== */}

              <section className={styles.contentSection}>
                <h2>
                  Disadvantages of the installment payment system:
                </h2>

                <div className={styles.featureBox}>
                  <h3>A time of financial instability</h3>

                  <p>
                    Many consumers do not have the required amount for each
                    installment. Consumers feel very anxious as they have the
                    pressure to pay monthly and do not rest. The consumer needs
                    to have the right amount of payment to support the
                    installments as well.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Interest Rate</h3>

                  <p>
                    In some cases, interest is added to the real value of the
                    property. Each installment is based on principle and
                    interest. This is considered the extra money people need
                    to pay for their top housing societies.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Missed opportunities</h3>

                  <p>
                    The seller may choose to make a payment of these to you,
                    knowing that you will not be able to pay the full amount
                    due. So, the seller chooses a payment plan for his
                    property to be sold. This is especially true if there is
                    an error regarding the environment etc. So, the buyer
                    needs to be careful.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Missed Installation</h3>

                  <p>
                    If the consumer misses any installment for any reason, a
                    penalty is applied for the missed payment. This is another
                    payment that the consumer must bear due to the delay in
                    payment of the initial installment. Retailers do not want
                    the buyer to suspend payment and request a refund of the
                    installments already paid. So, they try to give them the
                    freedom that consumers can recoup the installment and give
                    them different options.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Developmental delays</h3>

                  <p>
                    Sometimes, there is a delay in a project due to a lack of
                    installation by clients or negligence of the developers.
                    This type of situation needs to be avoided by both parties
                    in order to have a peaceful contract.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Late payment</h3>

                  <p>
                    There are certain fees and penalties that come with
                    installment payments, especially if payment is not made by
                    the due date. There are many reasons for late payment but
                    consumers are not given any rest. Consumers are already
                    holding themselves back after receiving your statement on
                    the maximum amount you have to pay. The system needs to be
                    followed according to the system, otherwise it will be
                    difficult for consumers. The consumer budget is severely
                    affected by this rate.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Emergencies</h3>

                  <p>
                    Emergencies require individual savings. Consumers are
                    already paying monthly installments. If they encounter any
                    emergency, it may be very difficult for them to pay for
                    both. One charge needs to be excluded in this case. We do
                    not know when we need to pay for emergencies and have a
                    reserve fund. The idea is to make sure that buyers are able
                    to balance the two and that you make the most out of this
                    payment method.
                  </p>
                </div>
              </section>

              {/* =================================================
                  CONCLUSION
              ================================================== */}

              <section className={styles.installmentSection}>
                <h2>In the end</h2>

                <p>
                  In the end, the installment payment should strengthen your
                  finances and not add in debt.
                </p>
              </section>

            </div>

            {/* =====================================================
                ARTICLE NAVIGATION
            ====================================================== */}

            <div className={styles.articleNavigation}>

              <Link
                href="/blogs/how-to-buy-a-plot-in-lahore"
                className={styles.navigationItem}
              >
                <span>NEWER</span>

                <strong>
                  How to buy a plot in Lahore →
                </strong>
              </Link>

              <Link
                href="/blogs/why-is-al-ghani-the-best-housing-community-in-lahore"
                className={styles.navigationItem}
              >
                <span>OLDER</span>

                <strong>
                  ← Why is Al-Ghani the best housing community in Lahore?
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