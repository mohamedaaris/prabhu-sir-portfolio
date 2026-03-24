import { useEffect, useRef, useState } from 'react';
import { awards } from '../data/professorData';

export default function Awards() {
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
    <section id="awards" className="py-[90px] px-6 md:px-12 bg-bg">
      <div ref={sectionRef} className={`max-w-[1200px] mx-auto fade-section ${visible ? 'visible' : ''}`}>
        <div className="mb-[52px]">
          <div className="section-label">Recognition</div>
          <h2 className="section-title">Awards & Honours</h2>
          <div className="divider" />
        </div>

        <div className="flex flex-col gap-0 border border-border rounded-xl overflow-hidden bg-bg">
          {awards.map((award, i) => (
            <div key={award.id} className="award-item">
              <div className="award-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[22px] h-[22px] text-gold">
                  <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/>
                  <path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>
                  <path d="M4 22h16"/>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                  <path d="M18 2H6v7a6 6 0 0012 0V2z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-heading text-[1.05rem] font-bold text-navy mb-0.5">
                  {award.title}
                </div>
                <div className="text-[0.88rem] text-text-muted leading-[1.5] max-w-2xl">
                  {award.description}
                </div>
              </div>
              <div className="px-3 py-1 bg-navy text-white text-[0.78rem] font-bold rounded-full shrink-0 mt-1">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
