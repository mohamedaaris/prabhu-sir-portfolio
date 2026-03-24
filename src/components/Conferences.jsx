import { useEffect, useRef, useState } from 'react';
import { conferences } from '../data/professorData';

const roleMap = {
  'Invited Speaker': { bg: 'rgba(200,137,58,0.15)', text: '#8b5e20', border: 'var(--color-gold)' },
  'Keynote Speaker': { bg: 'rgba(200,137,58,0.15)', text: '#8b5e20', border: 'var(--color-gold)' },
  'Paper Presenter': { bg: 'rgba(13,43,82,0.1)', text: 'var(--color-navy)', border: 'var(--color-navy)' },
  'Workshop Organizer': { bg: 'rgba(45,106,79,0.12)', text: 'var(--color-green)', border: 'var(--color-green)' },
  'Tutorial Speaker': { bg: 'rgba(107,33,168,0.1)', text: 'var(--color-purple)', border: 'var(--color-purple)' },
  'Session Chair': { bg: 'rgba(15,123,108,0.1)', text: 'var(--color-teal)', border: 'var(--color-teal)' },
  'Panelist': { bg: 'rgba(180,83,9,0.1)', text: 'var(--color-amber)', border: 'var(--color-amber)' }
};

export default function Conferences() {
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
    <section id="conferences" className="py-[90px] px-6 md:px-12 bg-white">
      <div ref={sectionRef} className={`max-w-[1200px] mx-auto fade-section ${visible ? 'visible' : ''}`}>
        <div className="mb-[52px]">
          <div className="section-label">Academic Engagement</div>
          <h2 className="section-title">Conferences & Workshops</h2>
          <div className="divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {conferences.map((conf) => {
            const roleStyle = roleMap[conf.role] || roleMap['Paper Presenter'];
            return (
              <div 
                key={conf.id} 
                className="conf-card"
                style={{ borderLeftColor: roleStyle.border.replace('var(--', '').replace(')', '') === 'color-gold' ? '#c8893a' : 
                                   roleStyle.border.includes('navy') ? '#0d2b52' : 
                                   roleStyle.border.includes('green') ? '#2d6a4f' : 
                                   roleStyle.border.includes('purple') ? '#6b21a8' : 
                                   roleStyle.border.includes('teal') ? '#0f7b6c' : '#b45309' }}
              >
                <div className="font-heading text-[2.5rem] font-bold text-navy leading-none mb-2">
                  {conf.year}
                </div>
                <div className="font-semibold text-[0.95rem] text-text mb-1">
                  {conf.name}
                </div>
                <div className="text-[0.82rem] text-text-muted flex items-center gap-1.5 mb-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px] shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {conf.location}
                </div>
                
                <div className="mb-2">
                  <span 
                    className="role-badge-pill"
                    style={{ background: roleStyle.bg, color: roleStyle.text }}
                  >
                    {conf.role}
                  </span>
                </div>
                
                <div className="text-[0.82rem] text-text-muted italic leading-[1.5]">
                  {conf.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
