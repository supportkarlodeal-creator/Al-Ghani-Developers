"use client";

import { FormEvent } from "react";

export default function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // We will connect this to your API later.
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">

          {/* LEFT CONTENT */}

          <div className="contact-content">
            <span className="contact-eyebrow">
              CONTACT US
            </span>

            <h2 className="contact-title">
              Elevate your lifestyle with
              <br />
              <strong>AL-GHANI DEVELOPERS</strong>
            </h2>

            <p className="contact-description">
              Get started on your journey today.
            </p>

            <p className="contact-description">
              Once we receive your contact details,
              one of our dedicated team members will
              reach out to you with information about
              our premium real estate offerings.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-label">
                  Email
                </span>

                <a href="mailto:info@alghani-developers.com">
                  info@alghani-developers.com
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-label">
                  Phone
                </span>

                <a href="tel:+92-327-8754344">
                  +92-327-8754344
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-label">
                  Our Address
                </span>

                <p>
                  Main G.T Road, 2KM Quaid-e-Azam
                  Interchange, Ring Road, Lahore.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className="contact-form-wrapper">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">
                    Mobile Number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your Mobile Number"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                GET IN TOUCH
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}