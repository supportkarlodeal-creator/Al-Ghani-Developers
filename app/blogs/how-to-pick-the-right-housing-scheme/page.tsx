import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./blog-post.module.css";

export default function HowToPickTheRightHousingSchemePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.articleHeader}>
          <div className={styles.container}>
            <span className={styles.category}>AL GHANI GARDEN</span>

            <h1>How to Pick the best &amp; Right Housing Scheme</h1>

            <div className={styles.meta}>
              <span>Posted by</span>
              <span className={styles.author}>w2user</span>
              <span className={styles.separator}>•</span>
              <span>January 27, 2023</span>
            </div>
          </div>
        </section>

        <article className={styles.article}>
          <div className={styles.container}>

            {/* FEATURED IMAGE */}
            <div className={styles.featuredImage}>
              <Image
                src="https://alghani.com.pk/wp-content/uploads/2023/01/7-2.jpg"
                alt="How to Pick the best & Right Housing Scheme"
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 900px"
                priority
              />
            </div>

            <div className={styles.articleContent}>

              <p>
                The city of Gardens, Lahore is the cultural and economic hub
                as well as provincial province of Pakistan. . The metropolitan
                city has wide roads, mass transit project, developed
                infrastructure and developmental work. In the past few years,
                note-worthy developmental work has mounted the worth of Lahore.
                People want to live in this city for its high standards and
                luxurious lifestyle. But which place to opt for the living?
                Where to go if you want residential plots for sale in Lahore?
              </p>

              <p>
                So here are best housing societies for investment in Lahore.
              </p>

              <div className={styles.sectionImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/12.jpg"
                  alt="Best Housing Societies in Lahore for Investment"
                  width={1200}
                  height={800}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>

              <h2>Best Housing Societies in Lahore for Investment</h2>

              <ul className={styles.articleList}>
                <li>Bahria Town Lahore</li>
                <li>Defence Housing Authority (DHA)</li>
                <li>Al Ghani Gardens</li>
                <li>Park Avenue Housing Society</li>
                <li>Model Town</li>
              </ul>

              <h2>Payment Plans of Societies</h2>

              <p>
                Buyers and investors look for suitable payment schedules
                according to money and time. Each buyer has his own
                specifications, terms and conditions. Societies prefer to
                identify the most comfortable payment plans for clients.
                Payment plans are client friendly that help them to manage the
                budget and amount certainly. Now-a-days societies are offering
                payment plans adjustable in months and years.
              </p>

              <h2>Which Housing Society is Best for Investment</h2>

              <div className={styles.sectionImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/3-6.jpg"
                  alt="Best Housing Society In Lahore"
                  width={1200}
                  height={800}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>

              <div className={styles.featureBox}>
                <h3>Best Housing Society In Lahore</h3>

                <h3>Al Ghani Gardens</h3>

                <p>
                  Al-Ghani Developers Pvt. Ltd is a name to reckon with, when
                  it comes to modern town planning. With the sagacious approach
                  in exploration and development of land, its maintenance and
                  marketing along with the selling of new and resale of
                  developed units within the projects.
                </p>

                <p>
                  With the high-class expectation of living, Al Ghani is backed
                  by celestial prominence, this futuristic housing project
                  offers superfluity of thriving opportunities to people
                  interested in real estate investment in Lahore being the best
                  society in Lahore.
                </p>
              </div>

              <div className={styles.sectionImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/4-3.jpg"
                  alt="A Project of Al Ghani Developers"
                  width={1200}
                  height={800}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>

              <h2>A Project of Al Ghani Developer’s</h2>

              <p>
                Al Ghani Gardens housing scheme is a proud project introduced
                by Al Ghani Developers in 2006 by Malik Aleem-Majeed- Awam.
                Quality, trust, and innovation are virtues associated with Al
                Ghani Developers. Due to their innovative and prolific
                proposals, Al Ghani Garden is one of the best societies in
                Lahore.
              </p>

              <h2>Ideal Location</h2>

              <p>
                The project is located ideally at Main GT Road, Lahore.
              </p>

              <p>
                Also Al Ghani Garden housing scheme is only 3 KM away from the
                Quaid-e-Azam interchange and 10 minute drive away from Allama
                Iqbal International Airport Lahore.
              </p>

              <div className={styles.sectionImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/ghani.jpg"
                  alt="Al Ghani Garden"
                  width={1200}
                  height={800}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>

              <h2>Contact Details</h2>

              <div className={styles.infoSection}>
                <ul>
                  <li>Phone UAN: 042-111-116-117</li>
                  <li>Phone: 0304-1114242</li>
                  <li>Email info:@alghani.com.pk.</li>
                </ul>
              </div>

              <h2>Should I Invest In Al Ghani Gardens</h2>

              <p>
                Here are some of our quality features that will make your
                investment fruitful and worth some in best society of Lahore.
              </p>

              <h2>Quality Work</h2>

              <p>
                We ensure that all projects are done with utmost professionalism
                with tremendous breadth of construction experience and
                expertise across multiple industries using quality materials
                while offering clients the support and accessibility.
              </p>

              <div className={styles.featureBox}>
                <p>
                  Success is sum of small efforts, repeated day-in and
                  day-out.
                </p>
              </div>

              <h2>Our Philosophy</h2>

              <p>
                Al Ghani Garden’s philosophy is to view each project in its
                entirety, beyond mere physical planning to include the
                optimization of social and economic needs, while treating both
                small and mega projects with equal emphasis to detail and
                quality.
              </p>

              <div className={styles.featureBox}>
                <p>
                  Believe you can and you are halfway there.
                </p>
              </div>

              <h2>Our Management Team</h2>

              <p>
                Al Ghani’s Senior Management team are responsible to propel
                company’s achievements.
              </p>

              <p>
                We have full time and well-trained real estate professionals
                who are continuously striving to provide high quality service
                for clients and customers.
              </p>

              <div className={styles.featureBox}>
                <p>
                  The Greatness of a Community is most accurately measured by
                  the compassionate actions of its members.
                </p>
              </div>

              <h2>High Standards</h2>

              <p>
                Our exceptional projects epitomize the highest standards of
                development in Pakistan. Street layouts, carpeted roads,
                street lights, green areas, latest facilities and standards
                create a picturesque landscape in every community. Our high
                standards reflect and compliment the exclusive lifestyle of
                its residents.
              </p>

              <h2>Norms in Society are Set by those Who have High Status</h2>

              <p>
                Al Ghani aspires to be the greatest Pakistani real estate
                developer of all times, with exceptional projects offered, at
                choice locations with world-class amenities, while ensuring the
                highest international standards, quality work y and lifelong
                customer satisfaction.
              </p>

              <div className={styles.sectionImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/122.jpg"
                  alt="Amenities We Offer"
                  width={1200}
                  height={800}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>

              <h2>Amenities We Offer</h2>

              <p>
                We offer all modern facilities to its local residents that are
                hard to find in other residential society. Like premium
                schools, banks and developed community.
              </p>

              <ul className={styles.articleList}>
                <li>Prime Transportation</li>
                <li>Mosque</li>
                <li>Modern Security</li>
                <li>Best Educational Institutions</li>
                <li>Medical Facilities</li>
              </ul>

              <div className={styles.sectionImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/456.jpg"
                  alt="Transportation"
                  width={1200}
                  height={800}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>

              <h2>Transportation</h2>

              <p>
                Efficient and affordable transportation is very important in
                this 21st century. Al Ghani Garden’s have wide road system.
                People now have access to more comfortable and affordable
                commute options.
              </p>

              <p>
                Coming to Al Ghani Garden’s Lahore, this is a well-planned and
                well-managed housing society, featuring smooth,
                well-maintained, and developed roads.
              </p>

              <h3 className={styles.subHeading}>Modern Security</h3>

              <p>
                It is a gated community having boundary walls and check posts.
                Apart from this there are CCTV cameras all around the area to
                ensure the safety and security of residents in Al Ghani
                Garden’s Lahore.
              </p>

              <h2>Mosque in Al Ghani Garden’s</h2>

              <p>
                Al Ghani Gardens is a trendsetter in offering a complete
                lifestyle to its residents with all the necessary and
                contemporary facilities. Hence, similar to other facilities,
                there are quite many mosques established in Al Ghani Gardens
                in almost all phases.
              </p>

              <h2>Educational Institutions</h2>

              <p>
                Al Ghani Garden’s, is home to some of the most reputed
                educational institutions. These academic facilities are known
                for providing international standard education at every level.
                This could be one of the reasons that make Al Ghani Garden’s
                one of the most preferred housing societies in the city.
              </p>

              <p>
                Besides, residents can also seek admission of their children at
                various campuses operating in different phases of Al Ghani
                Garden’s.
              </p>

              <h2>Well Equipped Hospitals</h2>

              <p>
                People who live in Al Ghani Garden have access to well-equipped
                hospitals and clinics located nearby. Residents can find
                Lahore’s famous clinics and hospitals in this area. All
                institutions are well-equipped and have skilled staff to help
                patients.
              </p>

              <h2>Projects of Al Ghani Garden’s</h2>

              <p>
                After successful development of Al Ghani Gardens we are now
                offering elegant projects which includes phases of Al Ghani
                Housing Scheme.
              </p>

              <ul className={styles.articleList}>
                <li>AL GHANI PHASE 1</li>
                <li>AL GHANI PHASE 2</li>
                <li>AZMAT HEIGHTS at AL GHANI PHASE 2</li>
                <li>AL GHANI PHASE 3</li>
                <li>PHASE 3 EXTENSION BLOCK</li>
                <li>Phase 4</li>
                <li>Phase 5</li>
              </ul>

              <h2>Plots for Sale in Al Ghani Garden’s</h2>

              <p>
                Residential and commercial Plots of different sizes from 3, 4,
                5, 6, 7, and 10 Marla’s are available for sale and purchase on
                cash payment and easy installment plans. The installment
                period of a plot is 3 years and possession will be handed over
                to the owner after 1.5 years.
              </p>

              <div className={styles.sectionImage}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2023/01/11223.jpg"
                  alt="Buy Plots on Installment in Best Housing Society"
                  width={1200}
                  height={800}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>

              <h2>Buy Plots on Installment in Best Housing Society</h2>

              <p>
                Al Ghani Gardens is providing a golden chance to invest in
                property and buy plots on the very easy installment plan.
                Buying plots in installments serve a great purpose as it does
                not put the buyer under any burden of paying all the money in
                advance. One has to pay the down payment and they can have
                possession of plots.
              </p>

              <h3 className={styles.subHeading}>
                So Hurry up and book your plot now!
              </h3>

              {/* ARTICLE NAVIGATION */}
              <div className={styles.articleNavigation}>
                <Link
                  href="/blogs/plot-on-installment-in-lahore-2021"
                  className={styles.nextBlog}
                >
                  <span>Newer</span>
                  <strong>Plot on Installment in Lahore 2021</strong>
                </Link>

                <Link
                  href="/blogs/how-to-buy-property-in-the-prime-location-of-lahore"
                  className={styles.nextBlog}
                >
                  <span>Older</span>
                  <strong>
                    How to buy property in the prime location of Lahore?
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