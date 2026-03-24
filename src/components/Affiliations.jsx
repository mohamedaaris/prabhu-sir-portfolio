import { useEffect, useRef, useState } from 'react';
import { affiliations } from '../data/professorData';

function getAffilTypeClass(role) {
  const r = role.toLowerCase();
  if (r.includes('editor') || r.includes('reviewer')) return 'at-editor';
  if (r.includes('member') || r.includes('society') || r.includes('council')) return 'at-society';
  if (r.includes('evaluator') || r.includes('expert')) return 'at-review';
  if (r.includes('research')) return 'at-research';
  return 'at-univ';
}

function getAffilTypeBadge(role) {
  const r = role.toLowerCase();
  if (r.includes('editor') || r.includes('reviewer')) return 'Editorial';
  if (r.includes('member') || r.includes('society') || r.includes('council')) return 'Society';
  if (r.includes('evaluator') || r.includes('expert')) return 'Review';
  if (r.includes('research')) return 'Research';
  return 'University';
}

export default function Affiliations() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="affiliations" className="py-[90px] px-6 md:px-12 bg-white">
      <div ref={sectionRef} className={`max-w-[1200px] mx-auto fade-section ${visible ? 'visible' : ''}`}>
        <div className="mb-[52px]">
          <div className="section-label">Professional Standing</div>
          <h2 className="section-title">Affiliations</h2>
          <div className="divider" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {affiliations.map((aff) => {
            const typeClass = getAffilTypeClass(aff.role);
            const badge = getAffilTypeBadge(aff.role);
            
            return (
              <div key={aff.id} className="affil-card">
                <div className="text-[0.68rem] uppercase tracking-[0.1em] text-text-light font-semibold mb-2">
                  {badge}
                </div>
                <div className="font-heading text-[1.1rem] font-bold text-navy mb-1 leading-snug">
                  {aff.institution}
                </div>
                <div className="text-[0.9rem] text-text font-medium mb-1">
                  {aff.role}
                </div>
                <div className="text-[0.82rem] text-text-muted mb-3.5">
                  {aff.duration}
                </div>
                <span className={`affil-type-badge ${typeClass}`}>
                  {badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
