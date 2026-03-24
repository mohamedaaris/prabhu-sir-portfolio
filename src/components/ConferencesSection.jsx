import { conferences } from "../data/professorData";

export default function ConferencesSection() {
  return (
    <section className="portfolio-section" id="conferences">
      <div className="section-header">
        <p className="section-label">Global Presence</p>
        <h2 className="section-title">Conferences & Workshops</h2>
        <p className="section-subtitle">
          International conferences, keynotes, workshops, and panel discussions
        </p>
      </div>

      <div className="conf-grid">
        {conferences.map((conf, idx) => (
          <div
            key={conf.id}
            className="glass-card conf-card reveal"
            style={{ transitionDelay: `${idx * 0.06}s` }}
          >
            <div className="conf-name">{conf.name}</div>
            <div className="conf-role">{conf.role}</div>
            <p className="conf-detail">{conf.description}</p>
            <div className="conf-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {conf.location} · {conf.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
