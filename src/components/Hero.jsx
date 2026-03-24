import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { professorProfile, allTags } from '../data/professorData';

export default function Hero() {
  const statsRef = useRef([]);

  useEffect(() => {
    // Animate stats count-up
    const targets = [
      { el: 'stat-papers', val: professorProfile.stats.papers },
      { el: 'stat-citations', val: professorProfile.stats.citations },
      { el: 'stat-hindex', val: professorProfile.stats.hIndex },
      { el: 'stat-journals', val: professorProfile.stats.journals },
      { el: 'stat-conferences', val: professorProfile.stats.conferences },
      { el: 'stat-awards', val: professorProfile.stats.awards },
    ];
    targets.forEach((s, i) => {
      const el = document.getElementById(s.el);
      if (!el) return;
      gsap.to({ val: 0 }, {
        val: s.val, duration: 2, delay: 0.6 + i * 0.15,
        ease: 'power2.out',
        onUpdate: function () {
          el.textContent = Math.round(this.targets()[0].val).toLocaleString();
        }
      });
    });

    // Animate hero elements
    gsap.fromTo('.hero-left > *', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, delay: 0.2, ease: 'power2.out' });
    gsap.fromTo('.stat-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 0.5, ease: 'power2.out' });
  }, []);

  const topTags = allTags.slice(0, 8);

  return (
    <section id="hero" className="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full max-w-[1200px] mx-auto relative z-[1]">
        {/* Left */}
        <div className="hero-left">
          <div className="flex items-center gap-6 mb-7">
            <div className="avatar">PJ</div>
            <div>
              <h1 className="font-heading text-[clamp(1.8rem,3vw,2.8rem)] text-white font-bold leading-[1.1] mb-1">
                {professorProfile.name}
              </h1>
              <p className="text-[0.95rem] text-gold-light font-medium mb-0.5">
                {professorProfile.title}
              </p>
              <p className="text-[0.85rem] text-white/65">
                {professorProfile.department}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 mb-4 text-[0.88rem] text-white/55 tracking-wide">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            {professorProfile.university}
          </div>

          <p className="text-[0.95rem] text-white/72 leading-[1.7] mb-7 max-w-[480px]">
            {professorProfile.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {topTags.map(tag => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={professorProfile.googleScholar} target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
              Google Scholar
            </a>
            <a href={professorProfile.researchGate} target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              ResearchGate
            </a>
            <a href={professorProfile.orcid} target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              ORCID
            </a>
            <a href={`mailto:${professorProfile.email}`} className="icon-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
          </div>
        </div>

        {/* Right — Stats */}
        <div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { id: 'stat-papers', label: 'Papers' },
              { id: 'stat-citations', label: 'Citations' },
              { id: 'stat-hindex', label: 'h-index' },
              { id: 'stat-journals', label: 'Journals' },
              { id: 'stat-conferences', label: 'Conferences' },
              { id: 'stat-awards', label: 'Awards' },
            ].map(s => (
              <div key={s.id} className="stat-card">
                <div
                  id={s.id}
                  className="font-heading text-[2rem] font-bold text-gold-light leading-none mb-1"
                >
                  0
                </div>
                <div className="text-[0.72rem] text-white/55 uppercase tracking-[0.06em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
