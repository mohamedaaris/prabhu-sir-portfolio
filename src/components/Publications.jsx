import { useState, useMemo, useEffect, useRef } from 'react';
import { journals } from '../data/professorData';

const journalColors = [
  '#c0392b', '#2980b9', '#27ae60', '#8e44ad', '#e67e22',
  '#16a085', '#2c3e50', '#d35400', '#7f8c8d', '#1abc9c',
  '#9b59b6', '#e74c3c', '#34495e', '#f39c12', '#2ecc71',
  '#3498db', '#e91e63', '#00bcd4', '#ff9800', '#795548',
  '#607d8b', '#673ab7', '#4caf50', '#ff5722', '#009688', '#3f51b5'
];

function getAbbr(name) {
  const words = name.split(/[\s&]+/).filter(w => w.length > 2);
  return words.map(w => w[0]).join('').toUpperCase().slice(0, 4);
}

function getYearClass(year) {
  if (year >= 2023) return 'year-recent';
  if (year >= 2020) return 'year-mid';
  return 'year-old';
}

function getQuartile(impactFactor) {
  if (impactFactor >= 8) return 'Q1';
  if (impactFactor >= 4) return 'Q1';
  return 'Q2';
}

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openJournals, setOpenJournals] = useState({});
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

  const toggleJournal = (id) => {
    setOpenJournals(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredJournals = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return journals.map(journal => {
      const filteredPapers = journal.papers.filter(p => {
        if (!q) return true;
        return p.title.toLowerCase().includes(q) ||
          String(p.year).includes(q) ||
          journal.name.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q));
      });
      return { ...journal, papers: filteredPapers };
    }).filter(j => j.papers.length > 0);
  }, [searchQuery]);

  // Auto-open journals when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const opens = {};
      filteredJournals.forEach(j => { opens[j.id] = true; });
      setOpenJournals(opens);
    }
  }, [searchQuery]);

  const totalPapers = journals.reduce((sum, j) => sum + j.papers.length, 0);

  const handleCite = (paper, journalName) => {
    const bib = `@article{prabhu${paper.year}${paper.id},\n  title={${paper.title}},\n  author={Jayagopal, Prabhu},\n  journal={${journalName}},\n  year={${paper.year}}\n}`;
    navigator.clipboard.writeText(bib).catch(() => {});
  };

  return (
    <section id="journals" className="py-[90px] px-6 md:px-12 bg-white">
      <div ref={sectionRef} className={`max-w-[1200px] mx-auto fade-section ${visible ? 'visible' : ''}`}>
        <div className="mb-[52px]">
          <div className="section-label">Research Venues</div>
          <h2 className="section-title">Publications by Journal</h2>
          <p className="section-sub">{totalPapers} publications across {journals.length} journals</p>
          <div className="divider" />
        </div>

        {/* Search */}
        <div className="relative mb-7">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search papers by title, year, journal…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-gold transition-colors text-sm"
            >
              ✕
            </button>
          )}
        </div>

        {/* Journal List */}
        <div className="flex flex-col gap-3">
          {filteredJournals.map((journal, idx) => {
            const color = journalColors[idx % journalColors.length];
            const abbr = getAbbr(journal.name);
            const isOpen = openJournals[journal.id];
            const quartile = getQuartile(journal.impactFactor);

            return (
              <div key={journal.id} className={`journal-card ${isOpen ? 'open' : ''}`}>
                {/* Header */}
                <div className="journal-header" onClick={() => toggleJournal(journal.id)}>
                  <div className="journal-abbr" style={{ background: color }}>
                    {abbr}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[0.95rem] text-navy">{journal.name}</div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="badge badge-if">IF {journal.impactFactor}</span>
                      <span className={`badge ${quartile === 'Q1' ? 'badge-q1' : 'badge-q2'}`}>{quartile}</span>
                      <span className="badge badge-count">{journal.papers.length} papers</span>
                    </div>
                  </div>
                  <span className={`text-text-muted transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>

                {/* Papers */}
                <div className="journal-body">
                  <div className="px-5 pb-4 border-t border-border">
                    {journal.papers.map(paper => (
                      <div key={paper.id} className="paper-row">
                        <span className={`year-badge ${getYearClass(paper.year)}`}>{paper.year}</span>
                        <span className="flex-1 text-[0.88rem] text-text leading-[1.45] min-w-0">
                          {paper.title}
                        </span>
                        <span className="text-[0.78rem] text-text-muted flex items-center gap-1 shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                          </svg>
                          {paper.citations}
                        </span>
                        <div className="flex gap-1.5 shrink-0">
                          <a href={paper.pdf} className="paper-btn">PDF</a>
                          <button className="paper-btn" onClick={(e) => { e.stopPropagation(); handleCite(paper, journal.name); }}>
                            Cite
                          </button>
                          <a
                            href={`https://doi.org/${paper.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paper-btn"
                            onClick={e => e.stopPropagation()}
                          >
                            DOI
                          </a>
                        </div>
                      </div>
                    ))}
                    <button className="export-btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Export all as BibTeX
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredJournals.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg">No publications found matching your search.</p>
            <button onClick={() => setSearchQuery('')} className="mt-4 px-5 py-2.5 bg-navy text-white rounded-lg text-sm font-medium hover:bg-navy-mid transition-colors">
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
