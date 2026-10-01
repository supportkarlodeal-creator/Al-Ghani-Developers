"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to submit your enquiry."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-content">
            <span className="contact-eyebrow">CONTACT US</span>

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
                <span className="contact-detail-label">Email</span>

                <a href="mailto:info@alghani-developers.com">
                  info@alghani-developers.com
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-label">Phone</span>

                <a href="tel:+92-307-3777841">
                  +92-307-3777841
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-label">
                  Our Address
                </span>

                <p>
                  Main G.T Road, 2KM Quaid-e-Azam Interchange,
                  Ring Road, Lahore.
                </p>
              </div>
            </div>
          </div>

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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "SUBMITTING..."
                  : "GET IN TOUCH"}
              </button>

              {status.message && (
                <p
                  className={`contact-form-status ${
                    status.type === "success"
                      ? "contact-form-status-success"
                      : "contact-form-status-error"
                  }`}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}