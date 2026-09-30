import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="privacy-policy-page">
        <section className="privacy-policy-hero">
          <div className="container">
            <span className="privacy-policy-eyebrow">
              AL GHANI DEVELOPERS
            </span>

            <h1>Privacy Policy</h1>

            <p>
              Your privacy is important to us. Please read our privacy
              policy to understand how we collect, use, and protect
              your information.
            </p>
          </div>
        </section>

        <section className="privacy-policy-section">
          <div className="privacy-policy-container">

            {/* WHO WE ARE */}

            <article className="privacy-policy-block">
              <h2>Who we are</h2>

              <p>
                Our website address is:
                {" "}
                <a
                  href="https://alghani.com.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://alghani.com.pk
                </a>
                .
              </p>

              <p>
                Thank you for showing interest in Al-Ghani Gardens, we
                are a real estate company of Pakistan in Lahore with an
                amazing location to live-in. We are dedicated to give an
                easy access to buy your own houses with easiest
                installments plan.
              </p>

              <p>
                By using our website, you will come to know that when you
                get your investment with us, you need to agree on certain
                terms and conditions with all the privacy that we have
                already planned for you.
              </p>

              <p>
                Al Ghani Developers Pvt. Ltd. incorporates proven
                specialised professional state-of-the-art techniques in
                the development of land, its maintenance and marketing,
                along with the selling of new and resale of developed
                units within projects.
              </p>
            </article>

            {/* PRIVACY POLICIES */}

            <article className="privacy-policy-block">
              <h2>Privacy policies</h2>

              <p>
                The privacy policies manage all the dealings of
                operations that are held between our client and team. It
                helps us to control what we have collected and how we
                have used that information collected from our customer.
                These policies are applied on all the products and
                services that are offered by us.
              </p>
            </article>

            {/* PERSONAL INFORMATION */}

            <article className="privacy-policy-block">
              <h2>Personal information</h2>

              <p>
                We will be gathering some basic information from our
                customer in several ways which may include name, email,
                contact details and physical address.
              </p>

              <p>
                This information collected will be used to fill the form
                for their official registration with us. If the person
                chooses not to share this information, he/she might have
                to face some hindrance in getting full access to us.
              </p>
            </article>

            {/* HOW INFORMATION IS USED */}

            <article className="privacy-policy-block">
              <h2>How your collected information is used</h2>

              <p>
                Your personal information collection will be used to add
                you in our records, where we will create a file with your
                name and all your investment details and the options of
                payment you want to proceed with.
              </p>

              <p>
                All this information will be confidential and will only
                be accessible by our limited management team.
              </p>
            </article>

            {/* WHY WE COLLECT */}

            <article className="privacy-policy-block">
              <h2>Why we collect this information</h2>

              <p>We collect your information with several motives:</p>

              <ul>
                <li>To improve customer service experience.</li>
                <li>
                  To personalize user experience as an individual.
                </li>
                <li>
                  To keep you updated with our latest affairs and
                  changes in some policies, if any.
                </li>
              </ul>
            </article>

            {/* PROTECTION */}

            <article className="privacy-policy-block">
              <h2>How we protect your personal information</h2>

              <p>
                When we take your information, we take full
                responsibility of its privacy with the proper proceeding
                and provide proper security to your information.
              </p>
            </article>

            {/* SHARING */}

            <article className="privacy-policy-block">
              <h2>Our personal information sharing policy</h2>

              <p>
                We do not retail or trade your information personally
                with some other clients, but this information is reserved
                with us until you give your permission to share them with
                others on certain conditions, such as if you are willing
                to sell your property.
              </p>

              <p>
                Your permission will be obtained before sharing your
                information with anyone.
              </p>
            </article>

            {/* TERMS */}

            <article className="privacy-policy-block">
              <h2>Terms and Conditions</h2>

              <ol>
                <li>
                  The team of Al-Ghani has planned its terms and
                  conditions to ensure the privacy of our customers,
                  which by visiting our website you are agreeing to all
                  of them.
                </li>

                <li>
                  We do not represent you or the other users looking for
                  property and will not assist any party in the lease or
                  sale / purchase of any property.
                </li>

                <li>
                  We are not responsible in any way for the outcome of
                  any negotiations once the property is booked.
                </li>

                <li>
                  The buyer of the land is required to comply with the
                  laws of the Islamic Republic of Pakistan.
                </li>

                <li>
                  Users may not assign, novate, subcontract or transfer
                  their rights or ownership without prior written
                  consent.
                </li>

                <li>
                  You must have legal capacity and be of legal age to
                  buy the property at Al-Ghani Gardens.
                </li>

                <li>
                  You may be required to pay fees / charges for the
                  maintenance and security.
                </li>

                <li>
                  The terms and conditions may have changes that will be
                  notified to you.
                </li>
              </ol>
            </article>

            {/* CONTACT */}

            <article className="privacy-policy-block">
              <h2>How to contact us</h2>

              <p>
                If you have any queries or would like to have any further
                assistance in any aspect of our business operations, feel
                free to contact us.
              </p>

              <ul className="privacy-contact-list">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+92-307-3777841">
                    +92-307-3777841
                  </a>
                </li>

                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:Info@alghani-developers.com">
                    Info@alghani.com.pk
                  </a>
                </li>

                <li>
                  <strong>Address:</strong>{" "}
                  2 KM Quaid e Azam Interchange, Lahore Ring Rd,
                  Lahore, Punjab
                </li>
              </ul>
            </article>

            {/* COMMENTS */}

            <article className="privacy-policy-block">
              <h2>Comments</h2>

              <p>
                When visitors leave comments on the site we collect the
                data shown in the comments form, and also the visitor’s
                IP address and browser user agent string to help spam
                detection.
              </p>

              <p>
                An anonymized string created from your email address
                (also called a hash) may be provided to the Gravatar
                service. After approval of your comment, your profile
                picture is visible to the public in the context of your
                comment.
              </p>
            </article>

            {/* MEDIA */}

            <article className="privacy-policy-block">
              <h2>Media</h2>

              <p>
                If you upload images to the website, you should avoid
                uploading images with embedded location data (EXIF GPS)
                included. Visitors to the website can download and
                extract any location data from images on the website.
              </p>
            </article>

            {/* COOKIES */}

            <article className="privacy-policy-block">
              <h2>Cookies</h2>

              <p>
                If you leave a comment on our site you may opt-in to
                saving your name, email address and website in cookies.
                These are for your convenience so that you do not have to
                fill in your details again when you leave another comment.
                These cookies will last for one year.
              </p>

              <p>
                If you visit our login page, we will set a temporary
                cookie to determine if your browser accepts cookies. This
                cookie contains no personal data and is discarded when
                you close your browser.
              </p>

              <p>
                When you log in, we will also set up several cookies to
                save your login information and your screen display
                choices. Login cookies last for two days, and screen
                options cookies last for a year.
              </p>

              <p>
                If you select “Remember Me”, your login will persist for
                two weeks. If you log out of your account, the login
                cookies will be removed.
              </p>

              <p>
                If you edit or publish an article, an additional cookie
                will be saved in your browser. This cookie includes no
                personal data and simply indicates the post ID of the
                article it relates to. It expires after 1 day.
              </p>
            </article>

            {/* EMBEDDED CONTENT */}

            <article className="privacy-policy-block">
              <h2>Embedded content from other websites</h2>

              <p>
                Articles on this site may include embedded content
                (e.g. videos, images, articles, etc.). Embedded content
                from other websites behaves in the exact same way as if
                the visitor has visited the other website.
              </p>

              <p>
                These websites may collect data about you, use cookies,
                embed additional third-party tracking, and monitor your
                interaction with the embedded content if you have an
                account and are logged in to that website.
              </p>
            </article>

            {/* DATA SHARING */}

            <article className="privacy-policy-block">
              <h2>Who we share your data with</h2>

              <p>
                If you request a password reset, your IP address will be
                included in the reset email.
              </p>
            </article>

            {/* RETENTION */}

            <article className="privacy-policy-block">
              <h2>How long we retain your data</h2>

              <p>
                If you leave a comment, the comment and its metadata are
                retained indefinitely. This is so we can recognize and
                approve any follow-up comments automatically instead of
                holding them in a moderation queue.
              </p>

              <p>
                For users that register on our website (if any), we also
                store the personal information they provide in their user
                profile. All users can see, edit, or delete their
                personal information at any time, except they cannot
                change their username. Website administrators can also
                see and edit that information.
              </p>
            </article>

            {/* DATA RIGHTS */}

            <article className="privacy-policy-block">
              <h2>What rights you have over your data</h2>

              <p>
                If you have an account on this site, or have left
                comments, you can request to receive an exported file of
                the personal data we hold about you, including any data
                you have provided to us.
              </p>

              <p>
                You can also request that we erase any personal data we
                hold about you. This does not include any data we are
                obliged to keep for administrative, legal, or security
                purposes.
              </p>
            </article>

            {/* WHERE DATA IS SENT */}

            <article className="privacy-policy-block">
              <h2>Where your data is sent</h2>

              <p>
                Visitor comments may be checked through an automated spam
                detection service.
              </p>
            </article>

          </div>
        </section>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}