import Link from "next/link";

export default function FloatingActions() {
  const whatsappNumber = "923278754344";

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to get information about Al Ghani Developers."
  );

  return (
    <div className="floating-actions">

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="floating-whatsapp-icon">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M20.52 3.48A11.78 11.78 0 0 0 12.13 0C5.62 0 .32 5.3.32 11.81c0 2.08.54 4.11 1.56 5.9L.22 24l6.43-1.68a11.8 11.8 0 0 0 5.48 1.35h.01c6.51 0 11.81-5.3 11.81-11.81 0-3.16-1.23-6.13-3.43-8.38ZM12.14 21.6h-.01a9.79 9.79 0 0 1-4.99-1.36l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.77 9.77 0 1 1 8.39 4.67Zm5.36-7.34c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.44-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.49.07-.75.37-.26.29-.98.96-.98 2.34s1 2.71 1.14 2.9c.15.19 1.97 3.01 4.78 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z"
            />
          </svg>
        </span>

        <span>WHATSAPP</span>
      </a>


      {/* Existing Get In Touch */}
      <Link
        href="/contact-us"
        className="floating-contact"
      >
        GET IN TOUCH
      </Link>

    </div>
  );
}