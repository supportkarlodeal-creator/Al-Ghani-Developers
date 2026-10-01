import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./blogs.module.css";

const blogs = [
  {
    date: "26",
    month: "JAN",
    title: "5 Marla Plot in Lahore GT Road",
    excerpt:
      "Punjab is known as opulent Province of Pakistan due to its prolific land and modernized and marvelous projects. The overall Real Estate Sector in Punjab has a clear distinction over all other provinces.",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/8-1.jpg",
    slug: "5-marla-plot-in-lahore-gt-road",
  },
  {
    date: "26",
    month: "JAN",
    title: "Why is Al-Ghani the best housing community in Lahore?",
    excerpt:
      "The city of Gardens, Lahore is a cultural and economic center. The city has wide roads, mass transportation projects, improved infrastructure and development work.",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/3-5.jpg",
    slug: "why-is-al-ghani-the-best-housing-community-in-lahore",
  },
  {
    date: "26",
    month: "JAN",
    title: "Plots on Easy Installments in Lahore",
    excerpt:
      "The popularity of installment payments has been on the rise for the past few decades. Many people still associate the purchase of installments with their ease of buying a place.",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/4-2-e1683096687276.jpg",
    slug: "plots-on-easy-installments-in-lahore",
  },
  {
    date: "26",
    month: "JAN",
    title: "How to buy a plot in Lahore",
    excerpt:
      "The desire to buy a plot of land in Lahore is tempting many people because our real estate industry has a lot of growing potential.",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/6-2.jpg",
    slug: "how-to-buy-a-plot-in-lahore",
  },
  {
    date: "26",
    month: "JAN",
    title: "How to buy property in the prime location of Lahore?",
    excerpt:
      "The desire to buy property in Pakistan tempts many human beings because our property sector holds plenty of growth potential.",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/1-4.jpg",
    slug: "how-to-buy-property-in-the-prime-location-of-lahore",
  },
  {
    date: "27",
    month: "JAN",
    title: "How to Pick the best & Right Housing Scheme",
    excerpt:
      "The city of Gardens, Lahore is the cultural and economic hub as well as provincial province of Pakistan. The metropolitan city has wide roads, mass transit projects and developed infrastructure.",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/7-2.jpg",
    slug: "how-to-pick-the-right-housing-scheme",
  },
  {
    date: "27",
    month: "JAN",
    title: "Plot on Installment in Lahore 2021",
    excerpt:
      "Lahore being the capital of province Punjab and the second-colossal city of Pakistan is the economic hub of Pakistan.",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/9.jpg",
    slug: "plot-on-installment-in-lahore-2021",
  },
  {
    date: "27",
    month: "JAN",
    title: "Real Estate in Lahore",
    excerpt:
      "The real estate in Lahore has overturned the way living spaces are designed and has transformed the vitality and outlook of real estate in Lahore.",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/2-4.jpg",
    slug: "real-estate-in-lahore",
  },
  {
    date: "27",
    month: "JAN",
    title: "How to Buy a Plot in Lahore?",
    excerpt:
      "The desire to buy a plot of land in Lahore is tempting so many people because our real estate industry has a lot of growing potential.",
    image:
      "https://alghani.com.pk/wp-content/uploads/2023/01/5-2.jpg",
    slug: "how-to-buy-a-plot-in-lahore-2",
  },
];

export default function BlogsPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>

        {/* BLOG HERO */}
        <section className={styles.blogHero}>
          <Image
            src="https://alghani.com.pk/wp-content/uploads/2023/01/Banner-1.jpg"
            alt="Al Ghani Developers Blogs"
            fill
            priority
            sizes="100vw"
            className={styles.blogHeroImage}
          />
        </section>

        {/* BLOG INTRO */}
        <section className={styles.blogIntro}>
          <div className={styles.container}>

            <div className={styles.heading}>
              <h1>Al Ghani Developers Blogs</h1>

              <p>
                Click below to read our top tips and tricks for property
                investment, management, home decoration, and more. Discover
                the stories behind the Al Ghani Developers Projects you live
                in and the inspirations behind our upcoming projects.
              </p>
            </div>

            {/* BLOG CARDS */}
            <div className={styles.blogGrid}>
              {blogs.map((blog) => (
                <article
                  key={blog.slug}
                  className={styles.blogCard}
                >
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className={styles.blogCardLink}
                  >
                    <div className={styles.imageWrap}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 650px) 100vw, 33vw"
                        className={styles.blogImage}
                      />

                      <div className={styles.dateBadge}>
                        <strong>{blog.date}</strong>
                        <span>{blog.month}</span>
                      </div>
                    </div>

                    <div className={styles.blogContent}>

                      <span className={styles.category}>
                        AL GHANI GARDEN
                      </span>

                      <h2>{blog.title}</h2>

                      <div className={styles.meta}>
                        <span>By</span>
                        <span>W2USER</span>
                      </div>

                      <p>{blog.excerpt}</p>

                      <span className={styles.readMore}>
                        CONTINUE READING
                      </span>

                    </div>
                  </Link>
                </article>
              ))}
            </div>

          </div>
        </section>

      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}