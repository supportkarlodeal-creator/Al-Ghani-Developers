import Link from "next/link";

export default function OliveBlockPromo() {
  return (
    <section className="olive-home-promo">
      <div className="olive-home-promo-inner">
        <div className="olive-home-promo-content">
          <div className="olive-home-copy">
            <span className="olive-home-eyebrow">
              AL GHANI GARDEN · PHASE 7
            </span>

            <h2>OLIVE</h2>

            <p className="olive-home-tagline">THE GREEN LIVING</p>

            <p className="olive-home-description">
              A residential offering presented around the idea of a
              <strong> Perfect Lifestyle with Affordability.</strong>{" "}
              Olive offers residential plots in 3, 5, 10 Marla and 01 Kanal
              sizes.
            </p>

            <div className="olive-home-details">
              <div>
                <span className="olive-detail-label">PLOT SIZES</span>
                <strong>3 · 5 · 10 MARLA · 01 KANAL</strong>
              </div>

              <div>
                <span className="olive-detail-label">PAYMENT TERM</span>
                <strong>42 MONTHLY INSTALLMENTS</strong>
              </div>
            </div>

            <div className="olive-home-offer">
              <span>MONTHLY INSTALLMENT</span>
              <div className="olive-home-price">
                <strong>3,000</strong>
                <div>
                  <span>PER</span>
                  <span>MARLA</span>
                </div>
              </div>
            </div>

            <p className="olive-home-note">Development Charges Extra.</p>

            <div className="olive-home-location">
              <span>LOCATION HIGHLIGHTS</span>
              <p>
                8 min from Orange Train · 8 min from Ring Road · 15 min from
                Airport · 15 min from DHA Phase 8 · 15 min from Cantt · 18 min
                from Mall Road
              </p>
            </div>

            <Link href="/olive-block" className="olive-home-button">
              EXPLORE OLIVE BLOCK
            </Link>
          </div>
        </div>

        <div className="olive-home-video">
          <video
            src="/videos/olive-block.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Olive — The Green Living promotional video"
          />
        </div>
      </div>
    </section>
  );
}
