import Image from "next/image";
import Link from "next/link";

const projectGroups = [
  {
    label: "Al Ghani Garden Phase 7",
    href: "/alghani",
    children: [
      {
        label: "The East Block",
        href: "/the-east-block",
        badge: "New Project",
      },
      {
        label: "Zavia Block",
        href: "/zavia-block",
      },
      {
        label: "Square Avenue",
        href: "/square-avenue",
      },
      {
        label: "Awami Block",
        href: "/awami-block",
      },
    ],
  },
  {
    label: "Kings Lane",
    href: "/kings-lane",
  },
  {
    label: "Azmat Heights",
    href: "/azmat-heights",
  },
  {
    label: "Al Ghani Phase III",
    href: "/al-ghani-phase-iii",
    children: [
      {
        label: "Haider Block",
        href: "/haider-block",
      },
      {
        label: "Maskan Block",
        href: "/maskan-block",
      },
    ],
  },
  {
    label: "Al Ghani Phase I & 2",
    href: "/al-ghani-phase-i",
  },
];

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-column footer-brand">
            <Link
              href="/"
              className="footer-logo"
            >
              <Image
                src="/images/logo.png"
                alt="Al-Ghani Developers"
                width={180}
                height={180}
              />
            </Link>

            <p className="footer-description">
              Al Ghani Developers is a renowned
              real estate development company with
              a footprint of almost 700 acres of
              land comprising more than 12,000
              properties.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about-us">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/programs">
                  Programs
                </Link>
              </li>

              <li>
                <Link href="/green-living-initiative">
                  Green Living Initiative
                </Link>
              </li>

              <li>
                <Link href="/career">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/contact-us">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/blogs">
                  Blogs
                </Link>
              </li>

              <li>
                <Link href="/balloting-result">
                  Ballot Result
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Projects</h3>

            <ul className="footer-links">
              {projectGroups.map(
                (project) => (
                  <li
                    key={project.href}
                    className="footer-project-group"
                  >
                    <Link href={project.href}>
                      {project.label}
                    </Link>

                    {project.children && (
                      <ul className="footer-sub-links">
                        {project.children.map(
                          (child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                              >
                                <span>
                                  {
                                    child.label
                                  }
                                </span>

                                {child.badge && (
                                  <span className="footer-new-badge">
                                    {
                                      child.badge
                                    }
                                  </span>
                                )}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <div className="footer-contact-item">
              <span className="contact-label">
                CALL US (24/7)
              </span>

              <a href="tel:+9242111116117">
                042 111 116 117
              </a>
            </div>

            <div className="footer-contact-item">
              <span className="contact-label">
                HEAD OFFICE
              </span>

              <p>
                2KM Quaid-e-Azam Interchange,
                Lahore Ring Road, Lahore,
                Punjab
              </p>
            </div>

            <div className="footer-contact-item">
              <span className="contact-label">
                CORPORATE OFFICE
              </span>

              <p>
                157B DHA Phase 8 Broadway
                Commercial, Broadway,
                Commercial Lahore, 54810,
                Pakistan
              </p>
            </div>

            <Link
              href="/contact-us"
              className="footer-contact-button"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>
              Al Ghani Developers Pvt. Ltd. 2022
            </p>

            <p>
              CREATED BY{" "}
              <span className="footer-credit">
                MARCABLE SOLUTIONS
              </span>
              . A Digital Marketing Agency.
            </p>
          </div>
        </div>
      </footer>

      <div className="mobile-footer-actions">
        <Link href="/">
          <span className="mobile-footer-icon">
            ⌂
          </span>
          <span>Home</span>
        </Link>

        <Link href="/contact-us">
          <span className="mobile-footer-icon">
            ☎
          </span>
          <span>Contact Us</span>
        </Link>

        <Link href="/blogs">
          <span className="mobile-footer-icon">
            ▤
          </span>
          <span>Blog</span>
        </Link>

        <span className="mobile-footer-action-disabled">
          <span className="mobile-footer-icon">
            ◉
          </span>
          <span>WhatsApp us</span>
        </span>
      </div>
    </>
  );
}