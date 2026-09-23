"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectItem = {
  label: string;
  href: string;
  badge?: string;
  children?: ProjectItem[];
};

const projects: ProjectItem[] = [
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

const mainLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Green Living Initiative",
    href: "/green-living-initiative",
  },
  {
    label: "Careers",
    href: "/career",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Ballot Result",
    href: "/balloting-result",
  },
];

function DesktopProjectItem({
  item,
}: {
  item: ProjectItem;
}) {
  return (
    <li className="desktop-project-item">
      <Link
        href={item.href}
        className="desktop-project-link"
      >
        <span>{item.label}</span>

        {item.badge && (
          <span className="new-project-badge">
            {item.badge}
          </span>
        )}

        {item.children && (
          <span className="submenu-arrow">
            ›
          </span>
        )}
      </Link>

      {item.children && (
        <ul className="desktop-submenu">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link href={child.href}>
                <span>{child.label}</span>

                {child.badge && (
                  <span className="new-project-badge">
                    {child.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileProjectItem({
  item,
}: {
  item: ProjectItem;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="mobile-project-item">
      <div className="mobile-project-row">
        <Link href={item.href}>
          {item.label}
        </Link>

        {item.children && (
          <button
            type="button"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-label={`Toggle ${item.label}`}
            aria-expanded={open}
          >
            {open ? "−" : "+"}
          </button>
        )}
      </div>

      {item.children && (
        <ul
          className={`mobile-submenu ${
            open ? "open" : ""
          }`}
        >
          {item.children.map((child) => (
            <li key={child.href}>
              <Link href={child.href}>
                <span>{child.label}</span>

                {child.badge && (
                  <span className="new-project-badge">
                    {child.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [mobileProjectsOpen, setMobileProjectsOpen] =
    useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProjectsOpen(false);
  };

  return (
    <header className="site-header">
      {/* =====================================================
          TOP ANNOUNCEMENT BAR
      ====================================================== */}

      <div className="header-top-bar">
        <div className="header-container header-top-inner">
          <div className="header-socials">
            {/* Facebook */}
            <a
              href="#"
              className="header-social-link"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.67.33-1 1-1Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="header-social-link"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="header-social-link"
              aria-label="YouTube"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C1.9 9 1.9 12 1.9 12s0 3 .5 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8Z"
                  fill="currentColor"
                />

                <path
                  d="m10 9 5 3-5 3V9Z"
                  fill="#ffffff"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="#"
              className="header-social-link"
              aria-label="TikTok"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M15.5 3h3.1c.3 1.7 1.3 3 2.9 3.8v3.2a9.2 9.2 0 0 1-2.9-1V15a6 6 0 1 1-6-6h.9v3.2h-.9a2.8 2.8 0 1 0 2.8 2.8V3Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className="welcome-text">
            WELLCOME TO AL GHANI DEVELOPERS
          </div>

          <div className="header-phone">
            <span className="header-phone-number">
              +92-327-8754344
            </span>

            <span className="phone-separator">
              |
            </span>

            <span>
              Call Now:{" "}
              <a href="tel:+92-327-8754344">
                +92-327-8754344
              </a>{" "}
              (UAN)
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN HEADER
      ====================================================== */}

      <div className="header-main">
        <div className="header-container header-main-inner">
          <Link
            href="/"
            className="site-logo"
            onClick={closeMobileMenu}
          >
            <Image
              src="/images/logo.png"
              alt="Al-Ghani Developers"
              width={175}
              height={70}
              priority
              className="site-logo-image"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="desktop-navigation">
            <Link href="/">Home</Link>

            <Link href="/about-us">
              About Us
            </Link>

            <div className="desktop-projects">
              <button
                type="button"
                className="desktop-nav-button"
              >
                Projects
                <span className="nav-arrow">
                  ▾
                </span>
              </button>

              <div className="desktop-project-dropdown">
                <ul>
                  {projects.map((project) => (
                    <DesktopProjectItem
                      key={project.href}
                      item={project}
                    />
                  ))}
                </ul>
              </div>
            </div>

            {mainLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* LOGIN */}

          <Link
            href="/my-account"
            className="login-register-button"
          >
            Login / Register
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className={`mobile-menu-button ${
              mobileMenuOpen ? "active" : ""
            }`}
            onClick={() =>
              setMobileMenuOpen(
                (value) => !value
              )
            }
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        className={`mobile-navigation ${
          mobileMenuOpen ? "open" : ""
        }`}
      >
        <div className="mobile-navigation-inner">
          <Link
            href="/"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>

          <div className="mobile-projects-wrapper">
            <div className="mobile-main-link-row">
              <Link
                href="/projects"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>

              <button
                type="button"
                onClick={() =>
                  setMobileProjectsOpen(
                    (value) => !value
                  )
                }
                aria-label="Toggle projects"
                aria-expanded={
                  mobileProjectsOpen
                }
              >
                {mobileProjectsOpen
                  ? "−"
                  : "+"}
              </button>
            </div>

            <div
              className={`mobile-project-list ${
                mobileProjectsOpen
                  ? "open"
                  : ""
              }`}
            >
              <ul>
                {projects.map((project) => (
                  <MobileProjectItem
                    key={project.href}
                    item={project}
                  />
                ))}
              </ul>
            </div>
          </div>

          {mainLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/my-account"
            className="mobile-login-button"
            onClick={closeMobileMenu}
          >
            Login / Register
          </Link>
        </div>
      </div>
    </header>
  );
}