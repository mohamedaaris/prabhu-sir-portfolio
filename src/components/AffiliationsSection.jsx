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

      <div className="mt-32 reveal">
        <div className="section-header !mb-16">
          <p className="section-label">Service</p>
          <h2 className="section-title text-[1.4rem]">Editorial & Reviewing Roles</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass-card flex flex-col items-center text-center p-8">
            <div className="text-4xl mb-6 text-cyan-400 opacity-80 filter drop-shadow-[0_0_15px_rgba(0,212,232,0.4)]">
              📖
            </div>
            <h3 className="text-2xl font-heading text-white mb-6">
              Editorial Board
            </h3>
            <ul className="space-y-4 text-left w-full max-w-[400px]">
              {academicActivities.editorialBoard.map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <span className="text-cyan-400 font-mono mt-0.5 opacity-50">✦</span>
                  <p className="text-[0.9rem] text-white/70 group-hover:text-white transition-colors">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card flex flex-col items-center text-center p-8">
            <div className="text-4xl mb-6 text-purple-400 opacity-80 filter drop-shadow-[0_0_15px_rgba(167,139,250,0.4)]">
              🔍
            </div>
            <h3 className="text-2xl font-heading text-white mb-6">
              Reviewer For
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {academicActivities.reviewer.map((item, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[0.85rem] text-white/70 hover:text-white hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(167,139,250,0.2)] transition-all cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
