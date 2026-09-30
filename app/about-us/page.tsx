import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const projects = [
  {
    image: "/images/about/2.png",
    href: "/phase-7",
  },
  {
    image: "/images/about/3.png",
    href: "/phase-1",
  },
  {
    image: "/images/about/4.png",
    href: "/phase-3",
  },
  {
    image: "/images/about/5.png",
    href: "/kings-lane",
  },
  {
    image: "/images/about/6.png",
    href: "/square-avenue",
  },
  
];

export const metadata = {
  title: "About Us – Al Ghani Developers",
  description: "About Al Ghani Developers.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="about-page">

        {/* =====================================================
            WHO WE ARE
        ===================================================== */}

        <section className="about-section">
          <div className="about-container">

            <div className="about-intro">
              <span className="about-eyebrow">
                WHO WE ARE
              </span>

              <h1 className="about-heading">
                Al Ghani Developers
              </h1>

              <p className="about-intro-text">
                Al Ghani Developers is a renowned real estate development
                company with a footprint of almost 700 acres of land
                comprising more than 12,000 properties.
              </p>
            </div>


            {/* =================================================
                OUR MISSION
            ================================================= */}

            <div className="about-mission">

              <div className="about-mission-heading">
                <span className="about-eyebrow">
                  OUR MISSION
                </span>

                <h2 className="about-heading">
                  Driven by ethics and excellence
                </h2>
              </div>

              <div className="about-mission-content">
                <p>
                  Driven by ethics and excellence, Al-Ghani Developers Pvt.
                  Ltd. is dedicated to building trust and value for our
                  clients. We believe in honest communication, responsible
                  execution, and delivering projects that exceed
                  expectations—without ever compromising on quality or
                  integrity.
                </p>
              </div>

            </div>


            {/* =================================================
                MAIN ABOUT IMAGE
            ================================================= */}

            <div className="about-main-image">
              <Image
                src="/images/about/1.png"
                alt="Al Ghani Developers"
                fill
                sizes="(max-width: 800px) 100vw, 1200px"
              />
            </div>

          </div>
        </section>


        {/* =====================================================
            OUR PROJECTS
        ===================================================== */}

        <section className="about-projects-section">
          <div className="about-container">

            <div className="about-projects-heading">

              <span className="about-eyebrow">
                ALL ABOUT AL GHANI DEVELOPERS
              </span>

              <h2 className="about-heading">
                Our Projects
              </h2>

            </div>


            <div className="about-project-grid">

              {projects.map((project) => (
                <Link
                  key={project.image}
                  href={project.href}
                  className="about-project-card"
                >

                  <div className="about-project-image">

                    <Image
                      src={project.image}
                      alt="Al Ghani Developers project"
                      fill
                      sizes="(max-width: 800px) 100vw, 33vw"
                    />

                  </div>

                  <span className="about-view-project">
                    VIEW PROJECT
                  </span>

                </Link>
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