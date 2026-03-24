import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timelineItems } from '../data/professorData';

gsap.registerPlugin(ScrollTrigger);

const typeConfig = {
  publication: { dot: 'dot-pub', label: 'Publication', cls: 'text-navy' },
  conference: { dot: 'dot-conf', label: 'Conference', cls: 'text-green' },
  award: { dot: 'dot-award', label: 'Award', cls: 'text-gold' },
  affiliation: { dot: 'dot-affil', label: 'Affiliation', cls: 'text-purple' },
};

export default function Timeline() {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const spineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Animate timeline cards
    const cards = document.querySelectorAll('[data-tcard]');
    cards.forEach(card => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        onEnter: () => card.classList.add('visible'),
      });
    });

    // Spine fill animation
    if (wrapRef.current && spineRef.current) {
      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          if (spineRef.current && wrapRef.current) {
            spineRef.current.style.height = (self.progress * wrapRef.current.offsetHeight) + 'px';
          }
        }
      });
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [visible]);

  return (
    <section id="timeline" className="py-[90px] px-6 md:px-12 bg-bg">
      <div ref={sectionRef} className={`max-w-[1200px] mx-auto fade-section ${visible ? 'visible' : ''}`}>
        <div className="mb-[52px]">
          <div className="section-label">Academic Journey</div>
          <h2 className="section-title">Unified Timeline</h2>
          <p className="section-sub">Publications, Conferences, Awards & Affiliations — all in one view</p>
          <div className="divider" />
        </div>

        <div ref={wrapRef} className="timeline-wrap relative">
          <div className="timeline-spine" />
          <div ref={spineRef} className="timeline-spine-fill" />

          <div className="flex flex-col gap-8">
            {timelineItems.map((item, i) => {
              const config = typeConfig[item.type];
              return (
                <div key={item.id} className="relative">
                  <div className={`timeline-dot ${config.dot}`} />
                  <div className="hidden md:block absolute -left-[140px] top-[16px] font-heading text-[1.1rem] font-bold text-navy-mid text-right w-[80px]">
                    {item.year}
                  </div>
                  <div data-tcard className="timeline-card">
                    <div className={`text-[0.7rem] uppercase tracking-[0.1em] font-bold mb-1.5 ${config.cls}`}>
                      {config.label}
                    </div>
                    <div className="font-heading text-[1.05rem] text-text font-semibold mb-1 leading-snug">
                      {item.title}
                    </div>
                    <div className="text-[0.85rem] text-text-muted">
                      {item.description}
                    </div>
                    <div className="md:hidden text-[0.78rem] text-text-light mt-1.5">
                      {item.month} {item.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
