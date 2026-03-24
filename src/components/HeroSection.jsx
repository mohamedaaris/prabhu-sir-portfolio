import { useEffect, useRef, useState, useCallback } from "react";
import { professorProfile } from "../data/professorData";

function useCountUp(target, duration = 2000, delay = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  const startCounting = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now() + delay;
    const animate = (now) => {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        ref.current = requestAnimationFrame(animate);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        ref.current = requestAnimationFrame(animate);
      }
    };
    ref.current = requestAnimationFrame(animate);
  }, [target, duration, delay]);

  useEffect(() => {
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, []);

  return [value, startCounting];
}

export default function HeroSection() {
  const { name, title, department, university, stats, bio } = professorProfile;
  const sectionRef = useRef(null);

  const [papers, startPapers] = useCountUp(stats.papers, 2000, 0);
  const [citations, startCitations] = useCountUp(stats.citations, 2200, 150);
  const [hIndex, startHIndex] = useCountUp(stats.hIndex, 1800, 300);
  const [journals, startJournals] = useCountUp(stats.journals, 1800, 450);
  const [awards, startAwards] = useCountUp(stats.awards, 1600, 600);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startPapers();
          startCitations();
          startHIndex();
          startJournals();
          startAwards();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [startPapers, startCitations, startHIndex, startJournals, startAwards]);

  const scrollToPublications = () => {
    const el = document.getElementById("publications");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-animate hero-animate-delay-1">
        <p className="hero-name">{name}</p>
      </div>

      <h1 className="hero-title hero-animate hero-animate-delay-2">
        Research Portfolio
      </h1>

      <p className="hero-subtitle hero-animate hero-animate-delay-3">
        {title}, {department}
        <br />
        <span className="hero-department">{university}</span>
      </p>

      <div ref={sectionRef} className="hero-stats hero-animate hero-animate-delay-4">
        <div className="stat-item">
          <span className="stat-value">{papers}</span>
          <span className="stat-label">Publications</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{citations.toLocaleString()}</span>
          <span className="stat-label">Citations</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{hIndex}</span>
          <span className="stat-label">h-Index</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{journals}</span>
          <span className="stat-label">Journals</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{awards}</span>
          <span className="stat-label">Awards</span>
        </div>
      </div>

      <button
        className="cta-button hero-animate hero-animate-delay-5"
        onClick={scrollToPublications}
        id="view-publications-btn"
      >
        <span className="cta-glow" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
        View Publications
      </button>
    </section>
  );
}
