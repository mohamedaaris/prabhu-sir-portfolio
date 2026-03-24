import { affiliations, academicActivities } from "../data/professorData";

export default function AffiliationsSection() {
  return (
    <section className="portfolio-section" id="affiliations">
      <div className="section-header">
        <p className="section-label">Network</p>
        <h2 className="section-title">Affiliations & Editorial Roles</h2>
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

      <div className="grid md:grid-cols-2 gap-8 mt-12 reveal" style={{ transitionDelay: '0.4s' }}>
        <div className="glass-card custom-card">
          <h3 className="text-xl font-heading cyan mb-6 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Editorial Board
          </h3>
          <ul className="space-y-4">
            {academicActivities.editorialBoard.map((item, i) => (
              <li key={i} className="flex gap-4 group">
                <span className="text-cyan-400 font-mono mt-0.5 opacity-50">✦</span>
                <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass-card custom-card">
          <h3 className="text-xl font-heading purple mb-6 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Reviewer For
          </h3>
          <div className="flex flex-wrap gap-2">
            {academicActivities.reviewer.map((item, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 hover:text-white hover:border-cyan-400/50 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
