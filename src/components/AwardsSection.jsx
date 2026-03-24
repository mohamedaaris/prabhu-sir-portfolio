import { awards } from "../data/professorData";

export default function AwardsSection() {
  return (
    <section className="portfolio-section" id="awards">
      <div className="section-header">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Awards & Honours</h2>
        <p className="section-subtitle">
          A distinguished record of academic and research recognition
        </p>
      </div>

      <div className="awards-grid">
        {awards.map((award, idx) => (
          <div
            key={award.id}
            className="glass-card award-card reveal"
            style={{ transitionDelay: `${idx * 0.06}s` }}
          >
            <div className="award-icon">{award.icon}</div>
            <h3 className="award-title">{award.title}</h3>
            <div className="award-year">{award.year}</div>
            <p className="award-desc">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
