const offices = [
  {
    title: "Head Office (Manawan)",
    subtitle: "Your Gateway to Modern Living",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13594.080106914671!2d74.44857962746859!3d31.592207510344064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191100443cf2f5%3A0xb16ef3940a22a8c4!2sAl%20Ghani%20Garden%20Phase%201!5e0!3m2!1sen!2s!4v1790665332806!5m2!1sen!2s",
    mapTitle: "Al Ghani Garden Head Office",
  },
  {
    title: "Corporate Office (DHA)",
    subtitle: "Experience Excellence in Real Estate",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.406172461844!2d74.4168549871582!3d31.500764200000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f55f0dc0155%3A0xa564efad3a514fde!2sAl%20Ghani%20Garden%20DHA%20Office!5e0!3m2!1sen!2s!4v1790665446350!5m2!1sen!2s",
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