import { affiliations } from "../data/professorData";

export default function AffiliationsSection() {
  return (
    <section className="portfolio-section" id="affiliations">
      <div className="section-header">
        <p className="section-label">Network</p>
        <h2 className="section-title">Affiliations</h2>
        <p className="section-subtitle">
          Academic and industry affiliations across the globe
        </p>
      </div>

      <div className="affil-grid">
        {affiliations.map((affil, idx) => (
          <div
            key={affil.id}
            className="glass-card affil-card reveal"
            style={{ transitionDelay: `${idx * 0.06}s` }}
          >
            <div className="affil-logo">{affil.logo}</div>
            <h3 className="affil-institution">{affil.institution}</h3>
            <div className="affil-role">{affil.role}</div>
            <div className="affil-duration">{affil.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
