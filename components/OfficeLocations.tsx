const offices = [
  {
    title: "Head Office (Manawan)",
    subtitle: "Your Gateway to Modern Living",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3398.5103425883945!2d74.45624007561446!3d31.59247297418106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM1JzMyLjkiTiA3NMKwMjcnMzEuNyJF!5e0!3m2!1sen!2s!4v1790183252120!5m2!1sen!2s",
    mapTitle: "Al Ghani Garden Head Office",
  },
  {
    title: "Corporate Office (DHA)",
    subtitle: "Experience Excellence in Real Estate",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3401.8515513304083!2d74.3612360756107!3d31.50076397422299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDMwJzAyLjgiTiA3NMKwMjEnNDkuNyJF!5e0!3m2!1sen!2s!4v1790183278510!5m2!1sen!2s",
    mapTitle: "Al Ghani Garden DHA Office",
  },
];

export default function OfficeLocations() {
  return (
    <section className="office-locations-section">
      <div className="office-locations-container">
        <div className="office-locations-grid">
          {offices.map((office) => (
            <div
              className="office-location-card"
              key={office.title}
            >
              <div className="office-location-header">
                <h2>{office.title}</h2>

                <p>{office.subtitle}</p>
              </div>

              <div className="office-map">
                <iframe
                  src={office.mapUrl}
                  title={office.mapTitle}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}