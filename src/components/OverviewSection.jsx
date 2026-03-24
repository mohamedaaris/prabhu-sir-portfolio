import { useEffect, useRef, useState, useCallback } from "react";
import { professorProfile, publicationsByYear, citationsByYear, journals } from "../data/professorData";

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

// Compute some derived stats
const allPapers = journals.flatMap((j) => j.papers);
const totalCitations = allPapers.reduce((sum, p) => sum + p.citations, 0);
const topJournal = journals.reduce((a, b) => (a.impactFactor > b.impactFactor ? a : b));

export default function OverviewSection() {
  const { stats } = professorProfile;
  const maxPubs = Math.max(...publicationsByYear.map((d) => d.count));
  const maxCites = Math.max(...citationsByYear.map((d) => d.citations));

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const chartReqRef = useRef(null);

  const [papers, startPapers] = useCountUp(stats.papers, 2000, 0);
  const [citationsTotal, startCitationsTotal] = useCountUp(totalCitations, 2200, 150);
  const [hIndex, startHIndex] = useCountUp(stats.hIndex, 1800, 300);
  const [journalCount, startJournalCount] = useCountUp(journals.length, 1800, 450);

  const [chartProgress, setChartProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startPapers();
          startCitationsTotal();
          startHIndex();
          startJournalCount();
          
          let startTime = null;
          const animateChart = (now) => {
            if (!startTime) startTime = now;
            const elapsed = now - startTime - 600; // start 600ms after scroll
            if (elapsed < 0) {
              chartReqRef.current = requestAnimationFrame(animateChart);
              return;
            }
            const progress = Math.min(elapsed / 2000, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setChartProgress(eased);
            if (progress < 1) {
              chartReqRef.current = requestAnimationFrame(animateChart);
            }
          };
          chartReqRef.current = requestAnimationFrame(animateChart);

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (chartReqRef.current) cancelAnimationFrame(chartReqRef.current);
    };
  }, [startPapers, startCitationsTotal, startHIndex, startJournalCount]);

  return (
    <section className="portfolio-section" id="overview" ref={sectionRef}>
      <div className="section-header">
        <p className="section-label">Metrics</p>
        <h2 className="section-title">Publications Overview</h2>
        <p className="section-subtitle">
          Comprehensive research impact across top-tier international journals
        </p>
      </div>

      {/* Stat cards */}
      <div className="overview-grid">
        <div className="overview-stat-card">
          <div className="overview-stat-value cyan">{papers}</div>
          <div className="overview-stat-label">Total Papers</div>
        </div>
        <div className="overview-stat-card">
          <div className="overview-stat-value gold">{citationsTotal.toLocaleString()}</div>
          <div className="overview-stat-label">Total Citations</div>
        </div>
        <div className="overview-stat-card">
          <div className="overview-stat-value purple">{hIndex}</div>
          <div className="overview-stat-label">h-Index</div>
        </div>
        <div className="overview-stat-card">
          <div className="overview-stat-value green">{journalCount}</div>
          <div className="overview-stat-label">Journals</div>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-container">
          <div className="chart-title">Publications per Year</div>
          <div className="bar-chart">
            {publicationsByYear.map((d) => {
              const currentVal = Math.round(d.count * chartProgress);
              return (
                <div key={d.year} className="bar-col">
                  <span className="bar-value">{currentVal}</span>
                  <div
                    className="bar cyan"
                    style={{ height: `${(currentVal / maxPubs) * 100}%` }}
                  />
                  <span className="bar-label">{d.year.toString().slice(2)}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-title">Citations per Year</div>
          <div className="bar-chart">
            {citationsByYear.map((d) => {
              const currentVal = Math.round(d.citations * chartProgress);
              return (
                <div key={d.year} className="bar-col">
                  <span className="bar-value">{currentVal >= 1000 ? `${(currentVal / 1000).toFixed(1)}k` : currentVal}</span>
                  <div
                    className="bar gold"
                    style={{ height: `${(currentVal / maxCites) * 100}%` }}
                  />
                  <span className="bar-label">{d.year.toString().slice(2)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top journal highlight */}
      <div className="glass-card" style={{ marginTop: "1.5rem", textAlign: "center", padding: "1.5rem" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.5rem" }}>
          Highest Impact Factor Journal
        </p>
        <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--cyan-300)", marginBottom: "0.2rem" }}>
          {topJournal.name}
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--gold-400)" }}>
          Impact Factor: {topJournal.impactFactor}
        </p>
      </div>
    </section>
  );
}
