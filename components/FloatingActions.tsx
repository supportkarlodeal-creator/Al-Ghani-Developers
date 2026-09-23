import Link from "next/link";

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <Link
        href="/contact-us"
        className="floating-action"
      >
        GET IN TOUCH
      </Link>
    </div>
  );
}