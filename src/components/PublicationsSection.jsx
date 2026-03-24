import { useState, useMemo, useCallback } from "react";
import { journals, allTags } from "../data/professorData";

// Flatten all pubs
const allPublications = journals.flatMap((j) =>
  j.papers.map((p) => ({ ...p, journalName: j.name, impactFactor: j.impactFactor, journalId: j.id }))
);

const YEAR_OPTIONS = ["All Years", ...new Set(allPublications.map((p) => p.year).sort((a, b) => b - a))];
const SORT_OPTIONS = [
  { value: "citations-desc", label: "Most Cited" },
  { value: "citations-asc", label: "Least Cited" },
  { value: "year-desc", label: "Newest First" },
  { value: "year-asc", label: "Oldest First" },
  { value: "title-asc", label: "Title A-Z" },
];

const TOP_TAGS = allTags.slice(0, 14);

export default function PublicationsSection({ toastRef }) {
  const [expandedJournals, setExpandedJournals] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [sortBy, setSortBy] = useState("citations-desc");

  const toggleJournal = (id) => {
    setExpandedJournals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allOpen = {};
    filteredJournals.forEach((j) => { allOpen[j.id] = true; });
    setExpandedJournals(allOpen);
  };

  const collapseAll = () => setExpandedJournals({});

  // Filter + search logic
  const filteredJournals = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return journals
      .map((journal) => {
        let papers = journal.papers;

        // Tag filter
        if (selectedTag !== "All") {
          papers = papers.filter((p) => p.tags.includes(selectedTag));
        }

        // Year filter
        if (selectedYear !== "All Years") {
          papers = papers.filter((p) => p.year === Number(selectedYear));
        }

        // Search
        if (q) {
          papers = papers.filter(
            (p) =>
              p.title.toLowerCase().includes(q) ||
              journal.name.toLowerCase().includes(q) ||
              p.tags.some((t) => t.toLowerCase().includes(q))
          );
        }

        // Sort
        const sorted = [...papers].sort((a, b) => {
          switch (sortBy) {
            case "citations-desc": return b.citations - a.citations;
            case "citations-asc": return a.citations - b.citations;
            case "year-desc": return b.year - a.year;
            case "year-asc": return a.year - b.year;
            case "title-asc": return a.title.localeCompare(b.title);
            default: return 0;
          }
        });

        return { ...journal, papers: sorted };
      })
      .filter((j) => j.papers.length > 0)
      .sort((a, b) => b.impactFactor - a.impactFactor);
  }, [searchQuery, selectedTag, selectedYear, sortBy]);

  const totalFiltered = filteredJournals.reduce((sum, j) => sum + j.papers.length, 0);

  const handleCite = useCallback((paper, journalName) => {
    const citation = `${paper.title}. ${journalName}, ${paper.year}. DOI: ${paper.doi}`;
    navigator.clipboard.writeText(citation).then(() => {
      if (toastRef) toastRef.current?.show("Citation copied to clipboard");
    });
  }, [toastRef]);

  return (
    <section className="portfolio-section" id="publications">
      <div className="section-header">
        <p className="section-label">Research Output</p>
        <h2 className="section-title">Research Publications</h2>
        <p className="section-subtitle">
          Browse {allPublications.length} publications across {journals.length} international journals
        </p>
      </div>

      {/* Advanced filters */}
      <div className="filter-container">
        <div className="filter-row">
          <div className="filter-search-wrap">
            <span className="filter-search-icon">⌕</span>
            <input
              type="text"
              className="filter-search"
              placeholder="Search papers, journals, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search-publications"
            />
          </div>

          <select
            className="filter-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {YEAR_OPTIONS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>

          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="filter-row">
          <div className="filter-tags">
            <button
              className={`filter-chip ${selectedTag === "All" ? "active" : ""}`}
              onClick={() => setSelectedTag("All")}
            >
              All Topics
            </button>
            {TOP_TAGS.map((tag) => (
              <button
                key={tag}
                className={`filter-chip ${selectedTag === tag ? "active" : ""}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-row" style={{ justifyContent: "space-between" }}>
          <span className="results-count" style={{ margin: 0 }}>
            Showing {totalFiltered} of {allPublications.length} papers across {filteredJournals.length} journals
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button className="filter-chip" onClick={expandAll}>Expand All</button>
            <button className="filter-chip" onClick={collapseAll}>Collapse All</button>
          </div>
        </div>
      </div>

      {/* Journal accordions */}
      {filteredJournals.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <p style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
            No publications match your filters.
          </p>
        </div>
      ) : (
        filteredJournals.map((journal) => (
          <div
            key={journal.id}
            className={`journal-card ${expandedJournals[journal.id] ? "expanded" : ""}`}
          >
            <div
              className="journal-header"
              onClick={() => toggleJournal(journal.id)}
            >
              <div className="journal-info">
                <div className="journal-name">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  {journal.name}
                </div>
                <div className="journal-meta">
                  <span className="journal-if">IF: {journal.impactFactor}</span>
                  <span className="journal-count">{journal.papers.length} paper{journal.papers.length !== 1 ? "s" : ""}</span>
                </div>
              </div>
              <span className={`journal-chevron ${expandedJournals[journal.id] ? "open" : ""}`}>
                ▼
              </span>
            </div>

            {expandedJournals[journal.id] && (
              <div className="journal-papers">
                {journal.papers.map((paper, idx) => (
                  <div
                    key={paper.id}
                    className="pub-card animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <h3 className="pub-title">{paper.title}</h3>
                    <div className="pub-meta">
                      <span className="pub-year">{paper.year}</span>
                      <span className="pub-journal-name">{journal.name}</span>
                      <span className="pub-citations">{paper.citations} citations</span>
                    </div>
                    <div className="pub-tags">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="tag-badge">{tag}</span>
                      ))}
                    </div>
                    <div className="pub-actions">
                      <a href={paper.pdf} className="action-btn pdf" target="_blank" rel="noopener noreferrer">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        PDF
                      </a>
                      <a href={`https://doi.org/${paper.doi}`} className="action-btn doi" target="_blank" rel="noopener noreferrer">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        DOI
                      </a>
                      <button className="action-btn cite" onClick={() => handleCite(paper, journal.name)}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Cite
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </section>
  );
}
